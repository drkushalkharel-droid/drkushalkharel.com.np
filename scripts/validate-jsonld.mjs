#!/usr/bin/env node
/**
 * Validates the JSON-LD in the built site (out/).
 *
 * For each page: every <script type="application/ld+json"> must parse, carry a
 * @context, and satisfy the required properties for each schema.org type it
 * declares. Site-wide rules are checked too:
 *   - no AggregateRating / Review / Rating anywhere (self-serving review markup)
 *   - the full Physician + clinic entities appear ONLY on / and /about/
 *   - articles (blog + knowledge) carry datePublished, dateModified, lastReviewed,
 *     an author and a reviewedBy, all pointing at the doctor's @id
 *   - every bare {"@id": ...} reference resolves on the page or is a known site entity
 *
 * Usage:
 *   node scripts/validate-jsonld.mjs            # 12 representative pages
 *   node scripts/validate-jsonld.mjs --all      # every built page
 *   node scripts/validate-jsonld.mjs /about/ /blog/adult-adhd-nepal/
 *   node scripts/validate-jsonld.mjs --verbose  # print the types found per page
 * Exits 1 if any page has an error.
 */
import fs from "node:fs";
import path from "node:path";

const OUT_DIR = path.resolve("out");
const SITE = "https://drkushalkharel.com.np";
const SITE_IDS = new Set([`${SITE}#clinic`, `${SITE}#psychiatrist`, `${SITE}#website`]);
const DOCTOR_ID = `${SITE}#psychiatrist`;
const ENTITY_PAGES = new Set(["/", "/about/"]);
const REPRESENTATIVE = [
  "/", // homepage: full entities + WebSite
  "/about/", // profile: full entities
  "/blog/adult-adhd-nepal/", // blog article
  "/knowledge/adhd/", // Nepali knowledge article
  "/knowledge/burnout-at-work/", // bilingual knowledge article
  "/conditions/adhd/", // clinical reference
  "/depression-treatment-kathmandu/", // service/commercial page
  "/psychiatrist-fee-nepal/", // fee page
  "/nepalese-abroad/gulf/", // region hub
  "/resources/adhd-leaflet/", // PDF resource wrapper
  "/screening/depression/", // screening tool
  "/anxiety/np/", // Nepali pillar page
];

const args = process.argv.slice(2);
const verbose = args.includes("--verbose");
const all = args.includes("--all");
const explicit = args.filter((a) => a.startsWith("/"));

function walkPages(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name !== "_next") walkPages(full, out);
    } else if (e.name === "index.html") {
      const rel = "/" + path.relative(OUT_DIR, path.dirname(full)).split(path.sep).join("/");
      out.push(rel === "/" ? "/" : rel + "/");
    }
  }
  return out;
}

const pages = all ? walkPages(OUT_DIR).sort() : explicit.length ? explicit : REPRESENTATIVE;

// ---- helpers
const asArray = (v) => (v === undefined || v === null ? [] : Array.isArray(v) ? v : [v]);
const typesOf = (n) => asArray(n["@type"]);
const isBareRef = (n) => n && typeof n === "object" && "@id" in n && Object.keys(n).every((k) => k === "@id");
const present = (v) => !(v === undefined || v === null || v === "" || (Array.isArray(v) && v.length === 0));

function allNodes(data, into = []) {
  if (Array.isArray(data)) data.forEach((d) => allNodes(d, into));
  else if (data && typeof data === "object") {
    into.push(data);
    Object.values(data).forEach((v) => allNodes(v, into));
  }
  return into;
}

function extractBlocks(html) {
  const blocks = [];
  for (const m of html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
    blocks.push(m[1]);
  }
  return blocks;
}

// Ids defined on another page of this site, cached, for cross-page @id references
// (e.g. a leaflet pointing at its condition page's "#condition" entity).
const idCache = new Map();
function idsDefinedOn(pagePath) {
  if (idCache.has(pagePath)) return idCache.get(pagePath);
  const file = path.join(OUT_DIR, pagePath === "/" ? "index.html" : `${pagePath}index.html`);
  const ids = new Set();
  if (fs.existsSync(file)) {
    for (const raw of extractBlocks(fs.readFileSync(file, "utf8"))) {
      try {
        allNodes(JSON.parse(raw)).forEach((n) => n["@id"] && !isBareRef(n) && ids.add(n["@id"]));
      } catch {
        /* reported when that page is validated */
      }
    }
  }
  idCache.set(pagePath, ids);
  return ids;
}
function resolvesElsewhere(id) {
  if (!id.startsWith(SITE)) return false;
  const [, pathPart] = id.replace(SITE, "").match(/^([^#]*)/) ?? [];
  if (pathPart === undefined) return false;
  const normalized = pathPart === "" ? "/" : pathPart.endsWith("/") ? pathPart : pathPart + "/";
  return idsDefinedOn(normalized).has(id);
}

// Required properties per type. A string is a property name; an array means "any of".
const REQUIRED = {
  Physician: ["name", "address", "telephone", "medicalSpecialty"],
  MedicalClinic: ["name", "address", "telephone", "openingHoursSpecification", "geo", "sameAs"],
  WebSite: ["name", "url"],
  Article: ["headline", "author", "datePublished", "dateModified"],
  MedicalWebPage: ["name", "url"],
  ProfilePage: ["mainEntity"],
  FAQPage: ["mainEntity"],
  Question: ["name", "acceptedAnswer"],
  Answer: ["text"],
  BreadcrumbList: ["itemListElement"],
  HowTo: ["name", "step"],
  HowToStep: ["text"],
  MedicalCondition: ["name"],
  Drug: ["name"],
  Service: ["name"],
  PostalAddress: ["streetAddress", "addressLocality", "addressCountry"],
  GeoCoordinates: ["latitude", "longitude"],
  OpeningHoursSpecification: ["dayOfWeek", "opens", "closes"],
  EducationalOccupationalCredential: ["name"],
  CollectionPage: ["name"],
  ItemList: ["itemListElement"],
};
const FORBIDDEN_TYPES = ["AggregateRating", "Review", "Rating"];

const results = [];
for (const url of pages) {
  const file = path.join(OUT_DIR, url === "/" ? "index.html" : `${url}index.html`);
  const errors = [];
  const warnings = [];
  if (!fs.existsSync(file)) {
    results.push({ url, errors: ["page not found in out/"], warnings, types: [] });
    continue;
  }
  const html = fs.readFileSync(file, "utf8");
  if (/noindex/i.test(html.match(/<meta name="robots" content="([^"]*)"/i)?.[1] ?? "")) continue; // stubs

  const rawBlocks = extractBlocks(html);
  if (rawBlocks.length === 0) warnings.push("no JSON-LD on page");

  const parsed = [];
  rawBlocks.forEach((raw, i) => {
    try {
      const data = JSON.parse(raw);
      if (!data["@context"] && !Array.isArray(data)) errors.push(`block ${i + 1}: missing @context`);
      parsed.push(data);
    } catch (e) {
      errors.push(`block ${i + 1}: invalid JSON (${e.message})`);
    }
  });

  const nodes = parsed.flatMap((d) => allNodes(d));
  const defined = new Set(nodes.filter((n) => n["@id"] && !isBareRef(n)).map((n) => n["@id"]));
  const typeSet = new Set(nodes.flatMap(typesOf));

  // required properties
  for (const node of nodes) {
    for (const t of typesOf(node)) {
      const req = REQUIRED[t];
      if (!req) continue;
      for (const prop of req) {
        if (!present(node[prop])) errors.push(`${t}${node.name ? ` "${String(node.name).slice(0, 40)}"` : ""}: missing "${prop}"`);
      }
    }
  }

  // nested checks
  for (const n of nodes.filter((n) => typesOf(n).includes("FAQPage"))) {
    for (const q of asArray(n.mainEntity)) {
      if (!typesOf(q).includes("Question")) errors.push("FAQPage.mainEntity contains a non-Question");
      if (q.acceptedAnswer && !present(q.acceptedAnswer.text)) errors.push(`FAQ "${String(q.name).slice(0, 40)}": empty answer`);
    }
  }
  for (const n of nodes.filter((n) => typesOf(n).includes("BreadcrumbList"))) {
    const items = asArray(n.itemListElement);
    items.forEach((item, i) => {
      if (item.position !== i + 1) errors.push(`BreadcrumbList position ${item.position} at index ${i} (expected ${i + 1})`);
      if (!present(item.name)) errors.push(`BreadcrumbList item ${i + 1}: missing "name"`);
      if (!present(item.item) && i < items.length - 1) errors.push(`BreadcrumbList item ${i + 1} ("${item.name}"): missing "item" URL`);
    });
  }
  for (const n of nodes.filter((n) => typesOf(n).includes("ItemList"))) {
    asArray(n.itemListElement).forEach((item, i) => {
      if (!present(item.position)) errors.push(`ItemList item ${i + 1}: missing "position"`);
      if (!present(item.name) && !present(item.url) && !present(item.item)) errors.push(`ItemList item ${i + 1}: needs name, url or item`);
    });
  }
  // Top-level (identified) services must say who provides them.
  for (const n of nodes.filter((n) => typesOf(n).includes("Service") && n["@id"])) {
    if (!present(n.provider)) errors.push(`Service "${n.name}": missing "provider"`);
  }

  // site-wide rules
  for (const bad of FORBIDDEN_TYPES) if (typeSet.has(bad)) errors.push(`${bad} present (self-serving review markup)`);
  if (nodes.some((n) => "aggregateRating" in n || "review" in n)) errors.push("aggregateRating/review property present");

  const hasFullEntities = nodes.some((n) => typesOf(n).includes("Physician") && present(n.address));
  if (ENTITY_PAGES.has(url)) {
    if (!hasFullEntities) errors.push("full Physician entity missing (expected on this page)");
    if (!typeSet.has("MedicalClinic")) errors.push("full clinic entity missing (expected on this page)");
    if (url === "/" && !typeSet.has("WebSite")) errors.push("WebSite entity missing on the homepage");
    const physician = nodes.find((n) => typesOf(n).includes("Physician"));
    if (physician && !typesOf(physician).includes("Person")) errors.push("Physician is not also typed Person (author/reviewedBy need a Person)");
  } else if (hasFullEntities || typeSet.has("MedicalClinic")) {
    errors.push("full Physician/clinic entity repeated (should be a reference by @id)");
  }

  // articles: authorship + freshness
  const isArticlePage = /^\/(blog|knowledge)\/[^/]+\/$/.test(url);
  if (isArticlePage) {
    const mwp = nodes.find((n) => typesOf(n).includes("MedicalWebPage"));
    if (!mwp) errors.push("article page has no MedicalWebPage node");
    else {
      for (const prop of ["datePublished", "dateModified", "lastReviewed", "author", "reviewedBy"]) {
        if (!present(mwp[prop])) errors.push(`MedicalWebPage: missing "${prop}"`);
      }
      for (const prop of ["author", "reviewedBy"]) {
        if (present(mwp[prop]) && mwp[prop]["@id"] !== DOCTOR_ID) errors.push(`MedicalWebPage.${prop} does not reference the doctor @id`);
      }
      for (const prop of ["datePublished", "dateModified", "lastReviewed"]) {
        if (present(mwp[prop]) && !/^\d{4}-\d{2}-\d{2}/.test(mwp[prop])) errors.push(`MedicalWebPage.${prop} is not an ISO date: ${mwp[prop]}`);
      }
      if (mwp.datePublished && mwp.dateModified && mwp.dateModified < mwp.datePublished) errors.push("dateModified is before datePublished");
    }
    if (!/<time[^>]+datetime=/i.test(html)) errors.push("no visible <time> element for published/reviewed dates");
    if (!/Published/i.test(html) || !/Last medically reviewed/i.test(html)) errors.push('visible "Published" / "Last medically reviewed" text missing');
  }

  // references resolve
  for (const n of nodes) {
    for (const value of Object.values(n)) {
      for (const v of asArray(value)) {
        if (isBareRef(v) && !defined.has(v["@id"]) && !SITE_IDS.has(v["@id"]) && !resolvesElsewhere(v["@id"])) {
          errors.push(`unresolved @id reference: ${v["@id"]}`);
        }
      }
    }
  }

  results.push({ url, errors: [...new Set(errors)], warnings, types: [...typeSet].sort(), blocks: rawBlocks.length });
}

// ---- report
let failed = 0;
for (const r of results) {
  const status = r.errors.length ? "FAIL" : "ok  ";
  if (r.errors.length) failed += 1;
  if (r.errors.length || verbose || !all) {
    console.log(`${status} ${r.url}  (${r.blocks ?? 0} blocks)`);
    if (verbose || !all) console.log(`       types: ${r.types.join(", ") || "-"}`);
    r.errors.forEach((e) => console.log(`       ✗ ${e}`));
    r.warnings.forEach((w) => console.log(`       ! ${w}`));
  }
}
console.log(`\nJSON-LD validation: ${results.length - failed}/${results.length} pages passed${failed ? `, ${failed} failed` : ""}`);
process.exit(failed ? 1 : 0);
