import Link from "next/link";
import type { ArticleDates } from "../lib/siteSchema";
import { SITE_LAST_REVIEWED, latestReviewDate } from "../data/reviewDate";

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// "2026-07-06" -> "July 6, 2026". Parsed by hand: `new Date("2026-07-06")` is UTC
// midnight, which renders as the previous day on a build machine west of UTC.
export function formatIsoDate(iso: string): string {
  const [year, month, day] = iso.split("-").map(Number);
  return `${MONTHS[month - 1]} ${day}, ${year}`;
}

// Visible counterpart of the datePublished / dateModified / lastReviewed / reviewedBy
// fields in the page's JSON-LD (see buildArticleProvenance in app/lib/siteSchema.ts).
// Nepali-language pages get Nepali labels alongside the English ones.
export default function ArticleReviewCard({
  dates,
  lang = "en",
  className = "",
}: {
  dates: ArticleDates;
  lang?: "en" | "ne";
  className?: string;
}) {
  const reviewed = latestReviewDate(dates.reviewed, dates.modified, SITE_LAST_REVIEWED);

  return (
    <div className={`rounded-lg border border-sage-200 bg-sage-50 p-5 text-sm leading-7 text-sage-950 ${className}`}>
      <p className="font-bold">
        Medically reviewed by{" "}
        <Link href="/about/" className="underline underline-offset-2 hover:text-sage-800">
          Dr. Kushal Kharel
        </Link>
        , MD Psychiatry
      </p>
      <p className="mt-1">Consultant Psychiatrist · Nepal Medical Council registered</p>
      <p className="mt-1">
        {lang === "ne" ? "प्रकाशित / Published: " : "Published: "}
        <time dateTime={dates.published}>{formatIsoDate(dates.published)}</time>
        {" · "}
        {lang === "ne" ? "पछिल्लो चिकित्सकीय समीक्षा / Last medically reviewed: " : "Last medically reviewed: "}
        <time dateTime={reviewed}>{formatIsoDate(reviewed)}</time>
      </p>
      <Link href="/medical-disclaimer" className="mt-2 inline-block font-semibold text-sage-800 underline">
        Read the medical information disclaimer
      </Link>
    </div>
  );
}
