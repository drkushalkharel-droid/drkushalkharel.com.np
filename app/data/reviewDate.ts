// The date Dr. Kushal Kharel last read through the whole site. Every visible "Last medically
// reviewed" date and every JSON-LD `lastReviewed` is at least this date, even for pages whose
// text has not changed since (their `modified` date, which drives the sitemap <lastmod>, stays
// the real date the content changed).
//
// After the next full review pass, change this one date and nothing else.
export const SITE_LAST_REVIEWED = "2026-09-27";

// Latest of the given ISO dates (YYYY-MM-DD strings sort correctly as text).
export function latestReviewDate(...dates: (string | undefined)[]): string {
  return dates.filter((d): d is string => Boolean(d)).sort().pop() ?? SITE_LAST_REVIEWED;
}
