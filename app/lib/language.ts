// Page-language detection and the metadata that goes with it.
//
// The site is a static export with ONE root layout, so `<html lang>` cannot be
// chosen per page by React alone. Instead each page declares its language in
// metadata (`<meta name="content-language">` + og:locale). `scripts/stamp-html-lang.mjs`
// copies that value onto `<html lang>` in the exported HTML at the end of
// `npm run build`, and `LangSync` keeps it correct during client-side navigation.
// `scripts/seo-audit.mjs --strict` re-measures every built page and fails CI if
// the declared language disagrees with the text, so a new Nepali page that forgets
// to declare itself cannot ship unnoticed.

export type PageLanguage = "en" | "ne";

// Share of Devanagari among all letters (Devanagari + Latin) above which a page
// is treated as Nepali. Measured on this site: articles written in Nepali are
// 92-100% Devanagari; the English-with-Nepali "Bilingual" articles are 0-50%.
// A 30% cut-off would mislabel the bilingual articles whose titles and H1s are
// English, so the page language follows the majority script instead. Bilingual
// pages stay "en" and mark their Nepali paragraphs individually (see
// `paragraphLanguage`).
export const NEPALI_PRIMARY_RATIO = 0.6;

const DEVANAGARI = /[ऀ-ॿ]/g;
const LATIN = /[A-Za-z]/g;

export function devanagariRatio(text: string): number {
  const dev = (text.match(DEVANAGARI) ?? []).length;
  const latin = (text.match(LATIN) ?? []).length;
  return dev + latin === 0 ? 0 : dev / (dev + latin);
}

export function detectLanguage(text: string): PageLanguage {
  return devanagariRatio(text) > NEPALI_PRIMARY_RATIO ? "ne" : "en";
}

// Language of a single paragraph, for `lang` attributes on the parts of a
// bilingual page (WCAG 3.1.2). A paragraph that is mostly Devanagari is Nepali.
export function paragraphLanguage(paragraph: string): PageLanguage {
  return devanagariRatio(paragraph) > 0.5 ? "ne" : "en";
}

export const ogLocaleFor: Record<PageLanguage, string> = {
  en: "en_NP",
  ne: "ne_NP",
};

// Spread into a page's `metadata`/`generateMetadata` result. Next replaces the
// layout's `other` object wholesale rather than merging it, so
// `format-detection` has to be repeated here.
export function languageMetadata(lang: PageLanguage) {
  return {
    other: {
      "content-language": lang,
      "format-detection": "telephone=yes",
    },
  };
}
