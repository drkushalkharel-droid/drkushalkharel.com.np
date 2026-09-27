// Picks the internal links to show at the foot of a page: one primary-service
// callout plus a handful of related reads.
//
// How the related reads are chosen (so every article is linked from at least three
// others without hand-curating 250 lists):
//   - Every learner page (blog + knowledge article) sits in an ORDERED pool per
//     language. The pool is grouped by topic cluster (app/data/contentClusters.ts),
//     then by category. A page links to the next three pages in its pool, wrapping
//     round at the end, so every page is linked to from exactly its three
//     predecessors, and its neighbours are topically close because the pool is grouped.
//   - On top of that, a page in a cluster links to two of the cluster's reference
//     pages and one aid (screening tool, leaflet or medication guide), rotated by
//     position so each reference page and leaflet is linked from many articles.
//   - Curated links from the article data are kept, minus any that point at retired
//     or missing pages.
//
// Pages proposed for merging (pendingMerges) stay out of every pool so nothing new
// links to them.

import { supportingArticles } from "../data/supportingArticles";
import { docArticles } from "../data/docArticles";
import { conditions } from "../data/conditions";
import { resources } from "../data/resources";
import { screeningTools } from "../data/screening";
import { medications } from "../data/medications";
import { counterpartOf } from "../data/translationPairs";
import { detectLanguage, type PageLanguage } from "./language";
import {
  categoryService,
  clusters,
  defaultService,
  keywordServiceRules,
  pageLabels,
  pendingMerges,
  serviceRelations,
  type Cluster,
} from "../data/contentClusters";

export type RelatedKind = "article" | "patient-guide" | "clinical" | "service" | "leaflet" | "tool" | "medication";

export type RelatedLink = { href: string; label: string; kind: RelatedKind; lang: PageLanguage };
export type Callout = { href: string; anchor: string; conditionName: string | null };

type Entry = RelatedLink & { category?: string; searchText: string };

const RETIRED: Record<string, string> = {
  "/depression": "/depression-treatment-kathmandu/",
  "/adhd": "/adhd-treatment-kathmandu/",
  "/ocd": "/erp-therapy-ocd/",
  "/bipolar-disorder": "/bipolar-disorder-treatment-kathmandu/",
  "/schizophrenia": "/schizophrenia-treatment-kathmandu/",
  "/mental-health-screening": "/screening/",
};

const slashed = (href: string) => (href.endsWith("/") ? href : `${href}/`);

// Nepali-language pages label themselves with the Nepali part of a bilingual title.
function shortTitle(title: string, lang: PageLanguage): string {
  const parts = title.split(" | ").map((p) => p.trim());
  if (lang === "ne") return parts.find((p) => /[ऀ-ॿ]/.test(p)) ?? parts[0];
  return parts[0];
}

let catalogCache: Map<string, Entry> | null = null;

function catalog(): Map<string, Entry> {
  if (catalogCache) return catalogCache;
  const map = new Map<string, Entry>();
  const add = (e: Entry) => map.set(e.href, e);

  for (const a of supportingArticles) {
    add({ href: `/blog/${a.slug}/`, label: a.h1, kind: "article", lang: "en", category: a.category, searchText: `${a.title} ${a.keywords.join(" ")}` });
  }
  for (const a of docArticles) {
    const text = a.sections.map((s) => `${s.heading} ${s.body}`).join(" ");
    const lang = detectLanguage(text);
    add({ href: `/knowledge/${a.slug}/`, label: shortTitle(a.title, lang), kind: "patient-guide", lang, category: a.category, searchText: a.title });
  }
  for (const cnd of conditions) {
    add({ href: `/conditions/${cnd.slug}/`, label: cnd.title.replace(/\s*\([^)]*[ऀ-ॿ][^)]*\)\s*$/, ""), kind: "clinical", lang: "en", category: cnd.category, searchText: cnd.title });
  }
  for (const res of resources) {
    add({ href: `/resources/${res.slug}/`, label: res.title, kind: "leaflet", lang: "en", category: res.category, searchText: res.title });
  }
  for (const tool of screeningTools) {
    add({ href: `/screening/${tool.id}/`, label: tool.searchQuestion ?? tool.title, kind: "tool", lang: "en", searchText: tool.title });
  }
  for (const med of medications) {
    add({ href: `/medications/${med.slug}/`, label: med.name, kind: "medication", lang: "en", searchText: med.name });
  }
  for (const [href, label] of Object.entries(pageLabels)) {
    if (!map.has(href)) add({ href, label, kind: "service", lang: href === "/anxiety/np/" ? "ne" : "en", searchText: label });
  }
  catalogCache = map;
  return map;
}

type Membership = { cluster: Cluster; role: "primary" | "secondary" | "reference" | "nepali" | "subtopic" | "aid" };
let membershipCache: Map<string, Membership> | null = null;

function membership(): Map<string, Membership> {
  if (membershipCache) return membershipCache;
  const map = new Map<string, Membership>();
  for (const cluster of clusters) {
    map.set(cluster.primary.href, { cluster, role: "primary" });
    if (cluster.secondaryPrimary) map.set(cluster.secondaryPrimary.href, { cluster, role: "secondary" });
    if (cluster.nepaliPrimary) map.set(cluster.nepaliPrimary.href, { cluster, role: "nepali" });
    cluster.reference.forEach((h) => map.set(h, { cluster, role: "reference" }));
    cluster.nepali.forEach((h) => map.set(h, { cluster, role: "nepali" }));
    cluster.subtopics.forEach((h) => map.set(h, { cluster, role: "subtopic" }));
    cluster.aids.forEach((h) => map.set(h, { cluster, role: "aid" }));
  }
  membershipCache = map;
  return map;
}

// Ordered pools of learner pages (blog + knowledge), one per language.
let poolCache: Record<PageLanguage, string[]> | null = null;

function pools(): Record<PageLanguage, string[]> {
  if (poolCache) return poolCache;
  const cat = catalog();
  const member = membership();
  const excluded = new Set(Object.keys(pendingMerges));
  const learner = [...cat.values()].filter((e) => (e.kind === "article" || e.kind === "patient-guide") && !excluded.has(e.href));

  const seen = new Set<string>();
  const ordered: Entry[] = [];
  // 1. Cluster members, in cluster order and the order listed in the cluster.
  for (const cluster of clusters) {
    for (const href of [...cluster.subtopics, ...cluster.nepali]) {
      const e = cat.get(href);
      if (e && !excluded.has(href) && !seen.has(href)) {
        seen.add(href);
        ordered.push(e);
      }
    }
  }
  // 2. Everything else, grouped by category then slug.
  const rest = learner.filter((e) => !seen.has(e.href) && !member.has(e.href)).sort((a, b) => (a.category ?? "").localeCompare(b.category ?? "") || a.href.localeCompare(b.href));
  ordered.push(...rest);

  poolCache = {
    en: ordered.filter((e) => e.lang === "en").map((e) => e.href),
    ne: ordered.filter((e) => e.lang === "ne").map((e) => e.href),
  };
  return poolCache;
}

// Ordered pools of non-article pages, so leaflets, medication guides and conditions
// each get three sibling inlinks by the same next-three rule as articles.
let kindPoolCache: Record<string, string[]> | null = null;
function kindPools(): Record<string, string[]> {
  if (kindPoolCache) return kindPoolCache;
  const cat = catalog();
  const member = membership();
  const clusterOrder = new Map(clusters.map((c, i) => [c.id, i]));
  const rank = (href: string) => (member.has(href) ? clusterOrder.get(member.get(href)!.cluster.id)! : 99);
  const build = (kind: RelatedKind) =>
    [...cat.values()]
      .filter((e) => e.kind === kind)
      .sort((a, b) => rank(a.href) - rank(b.href) || (a.category ?? "").localeCompare(b.category ?? "") || a.href.localeCompare(b.href))
      .map((e) => e.href);
  kindPoolCache = { leaflet: build("leaflet"), medication: build("medication"), clinical: build("clinical") };
  return kindPoolCache;
}

function serviceFor(entry: Entry | undefined): string {
  return (entry?.category && categoryService[entry.category]) || defaultService;
}

// Booking pages are already one tap away on every page (ConversionDock and a button
// in each template), so they are not repeated as "related reading".
const CTA_PAGES = new Set(["/appointment/", "/contact/"]);

function sanitizeCurated(hrefs: string[] | undefined): string[] {
  const cat = catalog();
  return (hrefs ?? [])
    .map((h) => slashed(RETIRED[h.replace(/\/$/, "")] ?? h))
    .filter((h) => cat.has(h) && !(h in pendingMerges) && !CTA_PAGES.has(h));
}

export function labelFor(href: string): string {
  return catalog().get(slashed(href))?.label ?? pageLabels[slashed(href)] ?? href;
}

export function getCallout(path: string): Callout | null {
  const href = slashed(path);
  const entry = catalog().get(href);
  const member = membership().get(href);
  const lang: PageLanguage = entry?.lang ?? "en";

  // A page proposed for merging points at the page it would merge into.
  const merged = pendingMerges[href];
  if (merged) {
    const target = membership().get(merged);
    return { href: merged, anchor: labelFor(merged), conditionName: target?.cluster.name ?? null };
  }

  if (member) {
    const { cluster, role } = member;
    if (role === "primary") return null;
    if (lang === "ne" && cluster.nepaliPrimary && cluster.nepaliPrimary.href !== href) {
      return { href: cluster.nepaliPrimary.href, anchor: cluster.nepaliPrimary.anchor, conditionName: cluster.name };
    }
    if (cluster.secondaryPrimary && cluster.secondaryFor?.includes(href)) {
      return { href: cluster.secondaryPrimary.href, anchor: cluster.secondaryPrimary.anchor, conditionName: cluster.name };
    }
    return { href: cluster.primary.href, anchor: cluster.primary.anchor, conditionName: cluster.name };
  }

  const service = serviceFor(entry);
  if (service === href) return null;
  return { href: service, anchor: labelFor(service), conditionName: null };
}

export function getRelatedLinks(path: string, options: { max?: number; curated?: string[] } = {}): RelatedLink[] {
  const max = options.max ?? 10;
  const href = slashed(path);
  const cat = catalog();
  const entry = cat.get(href);
  const lang: PageLanguage = entry?.lang ?? "en";
  const member = membership().get(href);
  const out: string[] = [];
  const push = (h: string | undefined) => {
    if (h && h !== href && cat.has(h) && !out.includes(h) && !(h in pendingMerges)) out.push(h);
  };
  const rotate = <T,>(list: T[], start: number, count: number) =>
    list.length ? Array.from({ length: Math.min(count, list.length) }, (_, i) => list[(start + i) % list.length]) : [];

  const pool = pools()[lang];
  const pos = pool.indexOf(href);
  const cluster = member?.cluster ?? clusterOfMerge(href);
  const isLearner = pos !== -1 || href in pendingMerges;

  // Leaflets, medication guides and conditions that sit outside every cluster: the next
  // three of their own kind come first, so each is linked from three siblings and the
  // cut-off cannot drop them. (Inside a cluster, siblings come from the cluster instead,
  // so an ADHD leaflet is never "related" to a depression leaflet.)
  if (!member && !serviceRelations[href] && entry && (entry.kind === "leaflet" || entry.kind === "medication" || entry.kind === "clinical")) {
    const kindPool = kindPools()[entry.kind];
    const at = kindPool.indexOf(href);
    for (let i = 1; i <= 3 && kindPool.length > 3 && at !== -1; i++) push(kindPool[(at + i) % kindPool.length]);
  }

  if (member && (member.role === "primary" || member.role === "secondary")) {
    // A. Commercial page: fan out to its supporting content.
    push(member.role === "primary" ? cluster!.secondaryPrimary?.href : cluster!.primary.href);
    cluster!.reference.slice(0, 2).forEach(push);
    cluster!.nepali.slice(0, 1).forEach(push);
    cluster!.subtopics.slice(0, 3).forEach(push);
    cluster!.aids.slice(0, 2).forEach(push);
    if (cluster!.nepaliPrimary) push(cluster!.nepaliPrimary.href);
  } else if (isLearner) {
    // B. Blog / knowledge article: the next three in its pool (this is what
    // guarantees three inlinks per page), then cluster reference + aid, then a
    // service page matching its topic.
    const start = pos === -1 ? 0 : pos;
    for (let i = 1; i <= 3 && pool.length > 3; i++) push(pool[(start + i) % pool.length]);
    if (cluster && lang === "en") {
      rotate(cluster.reference, start, 2).forEach(push);
      rotate(cluster.aids, start, 1).forEach(push);
    }
    const rule = entry && keywordServiceRules.find((r) => r.test.test(entry.searchText));
    if (rule) push(rule.href);
    // The other commercial page in the cluster (e.g. psychosis next to schizophrenia).
    if (cluster?.secondaryPrimary) {
      push(cluster.secondaryFor?.includes(href) ? cluster.primary.href : cluster.secondaryPrimary.href);
    }
  } else if (member) {
    // C. Reference page, leaflet, tool or medication guide inside a cluster.
    const start = Math.abs(hash(href));
    const learners = (lang === "ne" ? cluster!.nepali : [...cluster!.nepali, ...cluster!.subtopics]).filter((h) => !(h in pendingMerges));
    if (member.role === "aid") {
      // An aid is linked from its cluster siblings first (so each gets several inlinks),
      // then points back at the cluster's reference and patient content.
      const at = cluster!.aids.indexOf(href);
      const others = cluster!.aids.filter((h) => h !== href);
      // next three after this one in the cluster's aid list, wrapping (or all, if fewer)
      const ordered = at === -1 ? others : [...cluster!.aids.slice(at + 1), ...cluster!.aids.slice(0, at)];
      ordered.slice(0, 3).forEach(push);
      rotate(cluster!.reference, start, 1).forEach(push);
      rotate(learners, start, 2).forEach(push);
    } else {
      rotate(learners, start, 3).forEach(push);
      rotate(cluster!.reference.filter((h) => h !== href), start, 1).forEach(push);
      rotate(cluster!.aids, start, 2).forEach(push);
    }
    if (cluster!.secondaryPrimary) push(cluster!.secondaryFor?.includes(href) ? cluster!.primary.href : cluster!.secondaryPrimary.href);
  } else if (serviceRelations[href]) {
    // D. Service page: its neighbouring services.
    serviceRelations[href].forEach(push);
  }

  sanitizeCurated(options.curated).forEach(push);
  return out.slice(0, max).map((h) => {
    const e = cat.get(h)!;
    return { href: e.href, label: e.label, kind: e.kind, lang: e.lang };
  });
}

function clusterOfMerge(href: string): Cluster | undefined {
  const target = pendingMerges[href];
  return target ? membership().get(target)?.cluster : undefined;
}

// Small deterministic string hash (djb2) for stable rotation of unclustered pages.
function hash(input: string): number {
  let h = 5381;
  for (let i = 0; i < input.length; i++) h = ((h << 5) + h + input.charCodeAt(i)) | 0;
  return h;
}

// The same page in the other language, for a visible language-switch link.
export function getTranslation(path: string): RelatedLink | null {
  const other = counterpartOf(path);
  const e = other && catalog().get(other.href);
  return e ? { href: e.href, label: e.label, kind: e.kind, lang: e.lang } : null;
}

// Related services for a service page (AudienceLandingPage and friends).
export function getServiceRelations(path: string): RelatedLink[] {
  const cat = catalog();
  const href = slashed(path);
  const member = membership().get(href);
  const hrefs: string[] = [...(serviceRelations[href] ?? [])];
  if (member && (member.role === "primary" || member.role === "secondary")) {
    hrefs.push(...getRelatedLinks(href, { max: 6 }).map((l) => l.href));
  }
  return [...new Set(hrefs)]
    .filter((h) => h !== href && cat.has(h))
    .map((h) => {
      const e = cat.get(h)!;
      return { href: e.href, label: e.label, kind: e.kind, lang: e.lang };
    });
}
