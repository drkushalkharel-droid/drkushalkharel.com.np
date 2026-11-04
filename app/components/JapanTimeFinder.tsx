"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";

// Japan is UTC+9 and Nepal UTC+5:45, neither with daylight saving, so the gap is always 195 minutes.
const GAP = 195;
const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// Published clinic hours in Nepal time, in minutes from midnight: Sunday to Friday 8:00 to 22:00, Saturday 10:00 to 16:00.
const hoursFor = (day: number): [number, number] => (day === 6 ? [600, 960] : [480, 1320]);

const fmt = (mins: number) => {
  const h24 = Math.floor(mins / 60) % 24;
  const m = mins % 60;
  return `${h24 % 12 === 0 ? 12 : h24 % 12}:${String(m).padStart(2, "0")} ${h24 < 12 ? "AM" : "PM"}`;
};

const times = Array.from({ length: 48 }, (_, i) => i * 30);
const presets = [
  { label: "After work, 7 PM", day: 2, time: 19 * 60 },
  { label: "Late evening, 10 PM", day: 4, time: 22 * 60 },
  { label: "Weekend afternoon, 2 PM", day: 6, time: 14 * 60 },
];

export default function JapanTimeFinder() {
  const [day, setDay] = useState(2);
  const [time, setTime] = useState(19 * 60);

  let nepal = time - GAP;
  let nepalDay = day;
  if (nepal < 0) {
    nepal += 1440;
    nepalDay = (day + 6) % 7;
  }
  const [open, close] = hoursFor(nepalDay);
  const inside = nepal >= open && nepal < close;
  const jp = `${DAYS[day]} ${fmt(time)} Japan time`;
  const np = `${DAYS[nepalDay]} ${fmt(nepal)} Nepal time`;
  const msg = `Hello Dr. Kharel, I live in Japan and would like to book an online consultation. A time that suits me is ${jp} (${np}).`;

  const field = "mt-1 min-h-12 w-full border border-[#b9bdb6] bg-white px-3 text-base";
  return (
    <div className="mt-6 border border-[#d6d8d2] bg-white p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="jp-day" className="text-sm font-bold">Day (in Japan)</label>
          <select id="jp-day" value={day} onChange={(e) => setDay(Number(e.target.value))} className={field}>
            {DAYS.map((d, i) => <option key={d} value={i}>{d}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="jp-time" className="text-sm font-bold">Time (Japan time)</label>
          <select id="jp-time" value={time} onChange={(e) => setTime(Number(e.target.value))} className={field}>
            {times.map((t) => <option key={t} value={t}>{fmt(t)}</option>)}
          </select>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {presets.map((p) => (
          <button key={p.label} type="button" onClick={() => { setDay(p.day); setTime(p.time); }} className="min-h-11 border border-[#b9bdb6] px-3 text-sm font-semibold hover:bg-[#f5f4ef]">
            {p.label}
          </button>
        ))}
      </div>
      <div className="mt-5 bg-[#f5f4ef] p-4" role="status" aria-live="polite">
        <p className="text-lg font-bold">{np}</p>
        <p className={`mt-1 font-semibold ${inside ? "text-sage-800" : "text-clay-800"}`}>
          {inside ? "Inside the published clinic hours." : "Outside the published clinic hours. You can still ask: the clinic checks other times on request."}
        </p>
        <p className="mt-1 text-sm text-[#5a635e]">Availability is always confirmed individually by the clinic.</p>
      </div>
      <a
        href={`https://wa.me/9779861800547?text=${encodeURIComponent(msg)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex min-h-12 items-center gap-2 bg-clay-700 px-6 text-sm font-semibold text-white hover:bg-clay-800"
      >
        <MessageCircle size={18} aria-hidden="true" /> Request this time on WhatsApp
      </a>
    </div>
  );
}
