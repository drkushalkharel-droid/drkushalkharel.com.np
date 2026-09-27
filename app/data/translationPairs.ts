// English <-> Nepali page pairs that are the same content in another language.
// This is the single source for hreflang: page <link rel="alternate"> tags and
// the sitemap's xhtml:link entries are both generated from it.
//
// Only list genuine equivalents. hreflang between pages that merely share a
// topic is misuse, and Google may ignore the whole cluster. The English page is
// always the x-default.
//
// Reviewed and deliberately NOT paired:
//   /counselling-in-nepal/ vs /knowledge/counselling-services-nepal/ - same topic,
//   but the Nepali page adds an overthinking section and drops the counselling-vs-
//   psychiatry comparison, so it is not an equivalent. Pair them if you make it one.

const siteUrl = "https://drkushalkharel.com.np";

export type TranslationPair = { en: string; ne: string };

export const translationPairs: TranslationPair[] = [
  { en: "/anxiety/", ne: "/anxiety/np/" },
  { en: "/help-relative-abroad-see-psychiatrist/", ne: "/knowledge/help-relative-abroad-psychiatrist-nepal/" },
  { en: "/home-visit-psychiatrist-nepal/", ne: "/knowledge/home-visit-psychiatric-assessment-nepal/" },
];

function withSlash(path: string): string {
  return path.endsWith("/") ? path : `${path}/`;
}

function findPair(path: string): TranslationPair | undefined {
  const p = withSlash(path);
  return translationPairs.find((pair) => pair.en === p || pair.ne === p);
}

// `alternates.languages` for a page, or undefined when it has no translation.
// Relative paths (resolved against metadataBase) for page metadata.
export function hreflangAlternates(path: string): Record<string, string> | undefined {
  const pair = findPair(path);
  if (!pair) return undefined;
  return { en: pair.en, ne: pair.ne, "x-default": pair.en };
}

// Same, absolute, for sitemap entries.
export function hreflangAlternatesAbsolute(path: string): Record<string, string> | undefined {
  const rel = hreflangAlternates(path);
  if (!rel) return undefined;
  return Object.fromEntries(Object.entries(rel).map(([lang, href]) => [lang, `${siteUrl}${href}`]));
}
