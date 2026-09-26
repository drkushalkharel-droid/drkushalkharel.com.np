// Builds the "session times" guide shown on every abroad page: what a local
// time abroad is in Nepal, and whether it falls inside the clinic's published
// hours. Everything is computed from real IANA time zones (so daylight-saving
// changes are handled correctly) at build time; nothing here is hand-typed.
//
// Published clinic hours (Nepal time), from the site's llms.txt / contact info:
//   Sunday-Friday 8:00 AM-10:00 PM, Saturday 10:00 AM-4:00 PM.
// Update `isClinicOpen` if those hours change. Sessions arranged outside these
// hours are possible only if the clinic agrees, so the guide says "ask" rather
// than "unavailable".

import type { ZoneRef } from "../data/abroadMeta";

const NEPAL_OFFSET_MIN = 345; // Nepal is UTC+5:45 all year, no daylight saving.

export type SlotStatus = "open" | "partial" | "closed";

export type SlotView = {
  // null when the country has no daylight saving (a single value applies).
  season: "Standard time" | "Daylight saving" | null;
  nepal: string;
  status: SlotStatus;
};

export type SlotRow = {
  key: "early" | "lunch" | "evening" | "saturday" | "sunday";
  label: string;
  local: string;
  views: SlotView[];
};

export type ZoneGuide = {
  label: string;
  hasDaylightSaving: boolean;
  difference: string;
  rows: SlotRow[];
  // Windows that sit fully inside published clinic hours in every season.
  bestFit: string[];
};

function isClinicOpen(nepalWeekday: number, minuteOfDay: number): boolean {
  if (nepalWeekday === 6) return minuteOfDay >= 10 * 60 && minuteOfDay < 16 * 60;
  return minuteOfDay >= 8 * 60 && minuteOfDay < 22 * 60;
}

function zoneOffsetMinutes(utcMs: number, tz: string): number {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat("en-US", {
      timeZone: tz,
      hourCycle: "h23",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
      .formatToParts(new Date(utcMs))
      .map((p) => [p.type, p.value]),
  );
  const asUtc = Date.UTC(
    Number(parts.year),
    Number(parts.month) - 1,
    Number(parts.day),
    Number(parts.hour) % 24,
    Number(parts.minute),
    Number(parts.second),
  );
  return Math.round((asUtc - Math.floor(utcMs / 1000) * 1000) / 60000);
}

// Wall-clock time in `tz` -> UTC milliseconds.
function zonedToUtcMs(y: number, m: number, d: number, hh: number, mm: number, tz: string): number {
  const guess = Date.UTC(y, m - 1, d, hh, mm);
  const first = zoneOffsetMinutes(guess, tz);
  let utc = guess - first * 60000;
  const second = zoneOffsetMinutes(utc, tz);
  if (second !== first) utc = guess - second * 60000;
  return utc;
}

const DAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function nepalParts(utcMs: number) {
  const shifted = utcMs + NEPAL_OFFSET_MIN * 60000;
  const d = new Date(shifted);
  return {
    weekday: d.getUTCDay(),
    minute: d.getUTCHours() * 60 + d.getUTCMinutes(),
    dayNumber: Math.floor(shifted / 86400000),
  };
}

function fmtTime(minute: number): string {
  const h24 = Math.floor(minute / 60) % 24;
  const m = minute % 60;
  const meridiem = h24 >= 12 ? "PM" : "AM";
  const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
  return `${h12}:${String(m).padStart(2, "0")} ${meridiem}`;
}

function fmtRange(startMin: number, endMin: number): string {
  const a = fmtTime(startMin);
  const b = fmtTime(endMin);
  const sameMeridiem = a.slice(-2) === b.slice(-2);
  return sameMeridiem ? `${a.slice(0, -3)}–${b}` : `${a}–${b}`;
}

const hourLabel = (h: number) => fmtTime(h * 60).replace(":00 ", " ");

function hoursAndMinutes(totalMin: number): string {
  const abs = Math.abs(totalMin);
  const h = Math.floor(abs / 60);
  const m = abs % 60;
  const hPart = h ? `${h} hour${h === 1 ? "" : "s"}` : "";
  const mPart = m ? `${m} minutes` : "";
  return [hPart, mPart].filter(Boolean).join(" ");
}

function capitalise(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function differenceSentence(label: string, nepalAheadBy: number): string {
  if (nepalAheadBy === 0) return `${capitalise(label)} is on the same time as Nepal`;
  return nepalAheadBy > 0
    ? `Nepal is ${hoursAndMinutes(nepalAheadBy)} ahead of ${label}`
    : `${capitalise(label)} is ${hoursAndMinutes(nepalAheadBy)} ahead of Nepal`;
}

type Window = { key: SlotRow["key"]; label: string; weekdayRef: "wed" | "sat" | "sun"; from: number; to: number };

const WINDOWS: Window[] = [
  { key: "early", label: "Early morning (before work)", weekdayRef: "wed", from: 7, to: 9 },
  { key: "lunch", label: "Lunch break", weekdayRef: "wed", from: 12, to: 14 },
  { key: "evening", label: "After work", weekdayRef: "wed", from: 18, to: 20 },
  { key: "saturday", label: "Saturday morning", weekdayRef: "sat", from: 10, to: 12 },
  { key: "sunday", label: "Sunday morning", weekdayRef: "sun", from: 10, to: 12 },
];

// Reference dates in 2027 (one Wednesday, Saturday and Sunday in January and in
// July) so that both halves of any daylight-saving cycle are covered, in both
// hemispheres.
const REFERENCE = {
  jan: { wed: [2027, 1, 13], sat: [2027, 1, 16], sun: [2027, 1, 17] },
  jul: { wed: [2027, 7, 14], sat: [2027, 7, 17], sun: [2027, 7, 18] },
} as const;

function evaluateWindow(w: Window, season: "jan" | "jul", tz: string): { nepal: string; status: SlotStatus } {
  const [y, m, d] = REFERENCE[season][w.weekdayRef];
  const start = zonedToUtcMs(y, m, d, w.from, 0, tz);
  const end = zonedToUtcMs(y, m, d, w.to, 0, tz);

  const localDayNumber = Math.floor(Date.UTC(y, m - 1, d) / 86400000);
  const s = nepalParts(start);
  const e = nepalParts(end);

  let openMinutes = 0;
  let total = 0;
  for (let t = start; t < end; t += 5 * 60000) {
    const p = nepalParts(t);
    total += 5;
    if (isClinicOpen(p.weekday, p.minute)) openMinutes += 5;
  }
  const status: SlotStatus = openMinutes === total ? "open" : openMinutes === 0 ? "closed" : "partial";

  let nepal: string;
  if (s.dayNumber === e.dayNumber) {
    const prefix = s.dayNumber !== localDayNumber ? `${DAY_NAMES[s.weekday]} ` : "";
    nepal = `${prefix}${fmtRange(s.minute, e.minute)}`;
  } else {
    nepal = `${DAY_NAMES[s.weekday]} ${fmtTime(s.minute)} – ${DAY_NAMES[e.weekday]} ${fmtTime(e.minute)}`;
  }
  return { nepal, status };
}

export function buildZoneGuide(zone: ZoneRef): ZoneGuide {
  const janOffset = zoneOffsetMinutes(Date.UTC(2027, 0, 13, 12), zone.tz);
  const julOffset = zoneOffsetMinutes(Date.UTC(2027, 6, 14, 12), zone.tz);
  const hasDaylightSaving = janOffset !== julOffset;

  // "Standard time" is the season with the smaller UTC offset.
  const standard: "jan" | "jul" = janOffset <= julOffset ? "jan" : "jul";
  const daylight: "jan" | "jul" = standard === "jan" ? "jul" : "jan";
  const offsetOf = (s: "jan" | "jul") => (s === "jan" ? janOffset : julOffset);

  const aheadStd = NEPAL_OFFSET_MIN - offsetOf(standard);
  const aheadDst = NEPAL_OFFSET_MIN - offsetOf(daylight);
  let difference: string;
  if (!hasDaylightSaving) {
    difference = `${differenceSentence(zone.label, aheadStd)}.`;
  } else if (aheadStd > 0 && aheadDst > 0) {
    difference = `Nepal is ${hoursAndMinutes(aheadStd)} ahead of ${zone.label} during standard time and ${hoursAndMinutes(aheadDst)} ahead during daylight saving time.`;
  } else if (aheadStd < 0 && aheadDst < 0) {
    difference = `${capitalise(zone.label)} is ${hoursAndMinutes(aheadStd)} ahead of Nepal during standard time and ${hoursAndMinutes(aheadDst)} ahead during daylight saving time.`;
  } else {
    difference = `${differenceSentence(zone.label, aheadStd)} during standard time. ${differenceSentence(zone.label, aheadDst)} during daylight saving time.`;
  }

  const rows: SlotRow[] = WINDOWS.map((w) => {
    const views: SlotView[] = hasDaylightSaving
      ? [
          { season: "Standard time", ...evaluateWindow(w, standard, zone.tz) },
          { season: "Daylight saving", ...evaluateWindow(w, daylight, zone.tz) },
        ]
      : [{ season: null, ...evaluateWindow(w, "jan", zone.tz) }];
    return {
      key: w.key,
      label: w.label,
      local: `${hourLabel(w.from)}–${hourLabel(w.to)}`,
      views,
    };
  });

  const bestFit = rows.filter((r) => r.views.every((v) => v.status === "open")).map((r) => r.label);

  return { label: zone.label, hasDaylightSaving, difference, rows, bestFit };
}
