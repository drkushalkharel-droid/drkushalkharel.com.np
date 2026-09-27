import Link from "next/link";
import { getCallout, getRelatedLinks, getTranslation, type RelatedKind } from "../lib/related";
import type { PageLanguage } from "../lib/language";

const KIND_LABEL: Record<RelatedKind, string> = {
  article: "Article",
  "patient-guide": "Patient guide",
  clinical: "Clinical guide",
  service: "Service",
  leaflet: "Leaflet",
  tool: "Screening tool",
  medication: "Medication guide",
};

const COPY = {
  en: {
    calloutHeading: (name: string | null) => (name ? `Need help with ${name}?` : "Need to see a psychiatrist?"),
    calloutBody: "Dr. Kushal Kharel sees patients in person at his Kalanki clinic in Kathmandu and online.",
    relatedHeading: "Related reading",
    englishNote: "",
  },
  ne: {
    calloutHeading: () => "मद्दत चाहिएको छ?",
    calloutBody: "डा. कुशल खरेल कालंकीको क्लिनिकमा र अनलाइन बिरामी हेर्नुहुन्छ।",
    relatedHeading: "सम्बन्धित जानकारी",
    englishNote: " (English)",
  },
} as const;

// The primary-service callout (a descriptive-anchor link to the page a reader should
// go to next) and the related-reading list for a page. See app/lib/related.ts for
// how the links are chosen.
export default function RelatedContent({
  path,
  lang = "en",
  curated,
  showCallout = true,
  showList = true,
  heading,
  browseAll,
  className = "",
}: {
  path: string;
  lang?: PageLanguage;
  // Author-picked related links from the article data (retired/missing ones are dropped).
  curated?: string[];
  showCallout?: boolean;
  showList?: boolean;
  heading?: string;
  // Optional "see everything" link under the list (e.g. the blog index).
  browseAll?: { href: string; label: string };
  className?: string;
}) {
  const copy = COPY[lang];
  const callout = showCallout ? getCallout(path) : null;
  const links = showList ? getRelatedLinks(path, { curated }) : [];
  const translation = getTranslation(path);
  if (!callout && links.length === 0 && !translation) return null;

  return (
    <section aria-label={heading ?? copy.relatedHeading} className={`space-y-6 ${className}`}>
      {translation && (
        <p className="rounded-lg border border-stone-200 bg-white p-4 text-stone-700">
          {lang === "ne" ? "Also available in English: " : <span lang="ne">यो जानकारी नेपालीमा पनि: </span>}
          <Link href={translation.href} lang={translation.lang} className="font-semibold text-sage-800 underline underline-offset-2 hover:text-sage-950">
            {translation.label}
          </Link>
        </p>
      )}
      {callout && (
        <div className="rounded-lg border border-sage-200 bg-sage-50 p-6">
          <p className="text-lg font-bold text-sage-950">{copy.calloutHeading(callout.conditionName)}</p>
          <p className="mt-2 leading-7 text-stone-700">{copy.calloutBody}</p>
          <p className="mt-3">
            <Link href={callout.href} className="font-semibold text-sage-800 underline underline-offset-2 hover:text-sage-950">
              {callout.anchor}
              {lang === "ne" && !/[ऀ-ॿ]/.test(callout.anchor) ? copy.englishNote : ""}
            </Link>
          </p>
        </div>
      )}

      {links.length > 0 && (
        <div className="rounded-lg border border-stone-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-bold text-sage-950">{heading ?? copy.relatedHeading}</h2>
          <ul className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {links.map((link) => (
              <li key={link.href} className="leading-6">
                <Link
                  href={link.href}
                  lang={link.lang !== lang ? link.lang : undefined}
                  className="font-semibold text-sage-800 underline underline-offset-2 hover:text-sage-950"
                >
                  {link.label}
                </Link>{" "}
                <span className="text-xs uppercase tracking-wide text-stone-500">{KIND_LABEL[link.kind]}</span>
              </li>
            ))}
          </ul>
          {browseAll && (
            <p className="mt-5">
              <Link href={browseAll.href} className="font-semibold text-sage-800 underline underline-offset-2 hover:text-sage-950">
                {browseAll.label} &rarr;
              </Link>
            </p>
          )}
        </div>
      )}
    </section>
  );
}
