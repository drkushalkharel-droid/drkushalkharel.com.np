// Single source of truth for the practice's Google review stats and
// response-time claim, referenced from app/layout.tsx's JSON-LD and from
// app/llms.txt/route.ts, so the two can't silently drift out of sync with
// each other or with the real Google Business Profile numbers.
//
// Update this file directly (and bump `asOf`) whenever the real numbers
// change — do not hardcode reviewCount/ratingValue anywhere else.
export const reviewStats = {
  ratingValue: "5",
  bestRating: "5",
  reviewCount: "64",
  asOf: "2026-08-26",
} as const;

export const responseTimeClaim =
  "Typically responds to calls and WhatsApp messages within about one hour during clinic hours.";
