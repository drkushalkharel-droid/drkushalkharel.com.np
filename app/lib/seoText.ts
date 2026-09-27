// Title and meta-description helpers.
//
// Titles: the root layout appends " | Dr. Kharel" (app/layout.tsx), so a page supplies
// only the keyword part, and that part has to fit in TITLE_BODY_MAX so the whole
// title stays within 60 characters (about what Google shows before cutting off).
// Descriptions: 140-155 characters, ending in a call to action.
//
// Hand-written text for individual pages lives in app/data/seoMeta.ts; `metaFor`
// prefers it and otherwise fits the page's own text, so a new page that has no
// entry still gets a title and description of the right length.

import { seoMeta } from "../data/seoMeta";
import { seoMetaCollections } from "../data/seoMetaCollections";

const allMeta = { ...seoMeta, ...seoMetaCollections };

export const BRAND = "Dr. Kharel";
export const TITLE_SUFFIX = ` | ${BRAND}`;
export const TITLE_MAX = 60;
export const TITLE_BODY_MAX = TITLE_MAX - TITLE_SUFFIX.length;

export const DESCRIPTION_MIN = 140;
export const DESCRIPTION_MAX = 155;
export const CTA = "Book in-person or online.";
export const CTA_NEPALI = "क्लिनिकमा वा अनलाइन परामर्श बुक गर्नुहोस्।";

// Length as the search result counts it: characters, not UTF-16 units, so Devanagari
// and other non-Latin text is not over-counted.
export const len = (text: string) => [...text].length;

const BRAND_TAIL = /\s*[|–—-]\s*(Dr\.?\s+Kushal\s+Kharel|Dr\.?\s+Kharel)\s*$/i;

// Remove a trailing brand name, repeatedly, so it is never doubled by the template.
export function stripBrand(title: string): string {
  let out = title.trim();
  while (BRAND_TAIL.test(out)) out = out.replace(BRAND_TAIL, "").trim();
  return out;
}

function cutAtWord(text: string, max: number): string {
  if (len(text) <= max) return text;
  const chars = [...text].slice(0, max).join("");
  const at = chars.lastIndexOf(" ");
  return (at > max * 0.6 ? chars.slice(0, at) : chars).replace(/[\s,;:&\-–—|(]+$/, "");
}

// The first candidate whose title (with brand) fits in 60 characters. If none does,
// the last one is cut at a word boundary. Order candidates most to least descriptive.
export function fitTitle(...candidates: (string | undefined | false | null)[]): string {
  const options = candidates.filter((c): c is string => Boolean(c)).map(stripBrand);
  const fit = options.find((c) => len(c) <= TITLE_BODY_MAX);
  return fit ?? cutAtWord(options[options.length - 1] ?? "", TITLE_BODY_MAX);
}

// The full title with brand, for pages that must set an absolute title (the homepage).
export const withBrand = (body: string) => `${stripBrand(body)}${TITLE_SUFFIX}`;

// Joins as many whole clauses as fit, then the call to action. Never cuts mid-clause.
// If no clause fits, the first is cut at a word boundary.
export function fitDescription(clauses: (string | undefined | false | null)[], cta: string = CTA, max = DESCRIPTION_MAX): string {
  const parts = clauses.filter((c): c is string => Boolean(c)).map((c) => c.trim());
  const room = max - len(cta) - 1;
  let out = "";
  for (const part of parts) {
    const next = out ? `${out} ${part}` : part;
    if (len(next) > room) break;
    out = next;
  }
  if (!out && parts[0]) out = cutAtWord(parts[0], room).replace(/[.,;:]$/, "") + ".";
  return cta ? `${out} ${cta}` : out;
}

// The first alternative whose length lands in [min, max]; otherwise the first that is
// at most `max`; otherwise the shortest, cut at a word boundary. Alternatives should
// be ordered by preference. Used where the length depends on a variable (a country name).
export function pickDescription(alternatives: string[], min = DESCRIPTION_MIN, max = DESCRIPTION_MAX): string {
  return (
    alternatives.find((a) => len(a) >= min && len(a) <= max) ??
    alternatives.find((a) => len(a) <= max) ??
    cutAtWord(alternatives.slice().sort((a, b) => len(a) - len(b))[0] ?? "", max)
  );
}

// First sentence of a text (up to the first full stop followed by a space or the end).
export function firstSentence(text: string): string {
  const m = text.trim().match(/^.*?[.!?।](?=\s|$)/);
  return (m ? m[0] : text).trim();
}

// Reference-page title for a condition: "<Name>: Symptoms, Causes & Treatment", falling
// back to shorter forms, then the acronym. Conditions that have a "treatment in
// Kathmandu" page of their own end in "Diagnosis" instead of "Treatment", so the
// clinical reference and the commercial page do not chase the same query.
const SEARCHED_ACRONYMS = new Set(["ADHD", "OCD", "PTSD", "GAD"]);

export function conditionTitle(name: string, hasTreatmentPage = false): string {
  const base = name.replace(/\s*\([^)]*\)\s*$/, "").trim();
  const acronym = name.match(/\(([A-Z][A-Za-z]{1,7})\)\s*$/)?.[1];
  const end = hasTreatmentPage ? "Diagnosis" : "Treatment";
  return fitTitle(
    `${name}: Symptoms, Causes & ${end}`,
    `${base}: Symptoms, Causes & ${end}`,
    `${base}: Symptoms & ${end}`,
    // Only acronyms people actually search by; "SAD:" or "AVPD:" alone would be unclear.
    acronym && SEARCHED_ACRONYMS.has(acronym) && `${acronym}: Symptoms, Causes & ${end}`,
    name,
    base,
  );
}

export type PageMeta = { title: string; description: string };

const keyOf = (path: string) => (path.endsWith("/") ? path : `${path}/`);

// One field at a time, for pages that declare `const title` and `const description`
// separately and reuse them in their structured data.
export function seoTitle(path: string, fallback: string): string {
  return allMeta[keyOf(path)]?.title ?? fitTitle(fallback);
}
// `fitted: true` says the fallback is already a finished description of the right
// length (built by pickDescription), so it must not be cut and given a second ending.
export function seoDescription(path: string, fallback: string, options: { fitted?: boolean } = {}): string {
  const custom = allMeta[keyOf(path)]?.description;
  if (custom) return custom;
  return options.fitted ? fallback : fitDescription([fallback]);
}

// Title body and description for a page: hand-written text from seoMeta if there is
// any, else the fallback fitted to length.
export function metaFor(path: string, fallback: PageMeta, options: { fitted?: boolean } = {}): PageMeta {
  return { title: seoTitle(path, fallback.title), description: seoDescription(path, fallback.description, options) };
}
