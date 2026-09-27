#!/usr/bin/env node
/**
 * Generates app/data/pageDates.ts: the real first-published and last-modified
 * date of every page, from git history. Used for sitemap <lastmod> and for the
 * datePublished / dateModified in page JSON-LD.
 *
 * Run it locally, commit the output. It is NOT run in CI: the GitHub Actions checkout
 * is shallow (no history), which is why knowledgeDates.ts / articleDates.ts were
 * precomputed the same way.
 *
 * How a page's dates are found
 *   - Static routes: the page.tsx, plus any page-specific component or data module
 *     it imports (one imported by more than MAX_SHARED_IMPORTERS files is shared
 *     chrome like the navbar, so it does not count as page content).
 *   - Pages built from a collection (conditions, audiences, abroad guides, cities,
 *     resources, medications, screening tools, pillars): the history of that ONE
 *     entry (`git log -L` on its line range), not the whole data file, so editing
 *     one condition does not re-date the other 69.
 *   - Blog and knowledge articles: the existing knowledgeDates / articleDates maps.
 *   - Index pages (/blog/, /knowledge/, /conditions/ ...): newest of their own file
 *     and their children.
 *
 * History is read from --base (default "main"), so metadata and template edits made
 * on a working branch are not mistaken for content changes. Pages whose content
 * really did change on the branch are listed in scripts/page-date-overrides.json.
 *
 * Usage: node scripts/generate-page-dates.mjs [--base main] [--check]
 *   --check  exit 1 if app/data/pageDates.ts is out of date (does not write)
 */
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import fs from "node:fs";
import path from "node:path";

const run = promisify(execFile);
const ROOT = process.cwd();
const args = process.argv.slice(2);
const BASE = args.includes("--base") ? args[args.indexOf("--base") + 1] : "main";
const CHECK = args.includes("--check");
const MAX_SHARED_IMPORTERS = 3;
const OUTPUT = "app/data/pageDates.ts";
const OVERRIDES_FILE = "scripts/page-date-overrides.json";

// Collections: one page per entry, content in one array of object literals.
const COLLECTIONS = [
  { file: "app/data/conditions.ts", array: "conditions", key: "slug", url: (v) => `/conditions/${v}/` },
  { file: "app/data/audiences.ts", array: "audiencePages", key: "slug", url: (v) => `/${v}/` },
  { file: "app/data/abroad.ts", array: "abroadGuides", key: "slug", url: (v) => `/nepalese-abroad/${v}/` },
  { file: "app/data/abroadRegions.ts", array: "regions", key: "slug", url: (v) => `/nepalese-abroad/${v}/` },
  { file: "app/data/cities.ts", array: "cityGuides", key: "slug", url: (v) => `/cities/${v}/` },
  { file: "app/data/resources.ts", array: "resources", key: "slug", url: (v) => `/resources/${v}/` },
  { file: "app/data/medications.ts", array: "medications", key: "slug", url: (v) => `/medications/${v}/` },
  { file: "app/data/screening.ts", array: "screeningTools", key: "id", url: (v) => `/screening/${v}/` },
  { file: "app/data/pillars.ts", array: "pillars", key: "slug", url: (v) => `/${v}/` },
];
const COLLECTION_FILES = new Set(COLLECTIONS.map((c) => c.file));

// ---- git helpers
async function git(...gitArgs) {
  const { stdout } = await run("git", gitArgs, { cwd: ROOT, maxBuffer: 64 * 1024 * 1024 });
  return stdout;
}
const day = (iso) => iso.slice(0, 10);

async function fileDates(file) {
  const out = (await git("log", BASE, "--format=%aI", "--", file)).trim().split("\n").filter(Boolean);
  return out.length ? { published: day(out[out.length - 1]), modified: day(out[0]) } : null;
}

async function showAtBase(file) {
  return git("show", `${BASE}:${file}`);
}

// Direct members of `export const <array> ... = [ ... ]`, as { value, from, to } line
// ranges. Only objects sitting directly in the array count: a `slug:`/`id:` nested
// deeper (a related-link, a screening question) is not a page.
function collectionEntries(text, array, key) {
  const decl = new RegExp(`export const ${array}\\b[^=]*=\\s*\\[`).exec(text);
  if (!decl) return [];
  const arrayOpen = decl.index + decl[0].length - 1;
  const lineOf = (idx) => text.slice(0, idx).split("\n").length;
  const entries = [];

  let depth = 0; // 0 = inside the array, 1 = inside an entry object
  let quote = null;
  let objStart = -1;
  for (let i = arrayOpen + 1; i < text.length; i++) {
    const c = text[i];
    if (quote) {
      if (c === "\\") i++;
      else if (c === quote) quote = null;
      continue;
    }
    if (c === "/" && text[i + 1] === "/") {
      i = text.indexOf("\n", i);
      if (i === -1) break;
      continue;
    }
    if (c === '"' || c === "'" || c === "`") quote = c;
    else if (c === "{" || c === "[" || c === "(") {
      if (depth === 0 && c === "{") objStart = i;
      depth++;
    } else if (c === "}" || c === "]" || c === ")") {
      if (depth === 0) break; // end of the array
      depth--;
      if (depth === 0 && c === "}" && objStart !== -1) {
        const body = text.slice(objStart, i + 1);
        const m = new RegExp(`(?:^|[\\s{,])["']?${key}["']?\\s*:\\s*["']([^"']+)["']`).exec(body);
        if (m) entries.push({ value: m[1], from: lineOf(objStart), to: lineOf(i) });
        objStart = -1;
      }
    }
  }
  return entries;
}

async function entryDates(file, range) {
  const out = (await git("log", "-L", `${range.from},${range.to}:${file}`, "--format=%aI", "-s", BASE)).trim().split("\n").filter(Boolean);
  return out.length ? { published: day(out[out.length - 1]), modified: day(out[0]) } : null;
}

// ---- small concurrency pool
async function pool(items, worker, size = 6) {
  const results = new Array(items.length);
  let next = 0;
  await Promise.all(
    Array.from({ length: size }, async () => {
      while (next < items.length) {
        const i = next++;
        results[i] = await worker(items[i], i);
      }
    }),
  );
  return results;
}

const merge = (a, b) => (!a ? b : !b ? a : { published: a.published < b.published ? a.published : b.published, modified: a.modified > b.modified ? a.modified : b.modified });

// ---- discover static routes and their imports
function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}
const appFiles = walk(path.join(ROOT, "app")).map((f) => path.relative(ROOT, f));
const pageFiles = appFiles.filter((f) => f.endsWith("/page.tsx") && !/[[(]/.test(f));
const urlOf = (pageFile) => {
  const dir = path.dirname(pageFile).replace(/^app\/?/, "");
  return dir ? `/${dir}/` : "/";
};

function relativeImports(file) {
  const text = fs.readFileSync(file, "utf8");
  const found = new Set();
  for (const m of text.matchAll(/from\s+["'](\.[^"']+)["']/g)) {
    const base = path.normalize(path.join(path.dirname(file), m[1]));
    for (const ext of [".tsx", ".ts", "/index.tsx", "/index.ts"]) {
      if (fs.existsSync(base + ext)) {
        found.add(path.relative(ROOT, base + ext));
        break;
      }
    }
  }
  return [...found];
}

const importers = new Map();
for (const f of appFiles.filter((f) => /\.tsx?$/.test(f))) {
  for (const imp of relativeImports(f)) {
    if (!importers.has(imp)) importers.set(imp, new Set());
    importers.get(imp).add(f);
  }
}
const isPageSpecific = (imp) => (importers.get(imp)?.size ?? 0) <= MAX_SHARED_IMPORTERS && !COLLECTION_FILES.has(imp) && !/\/(knowledgeDates|articleDates|translationPairs|reviewStats|pageDates)\.ts$/.test(imp);

// ---- compute
const dates = {};
const notes = [];

// 1. static routes
await pool(pageFiles, async (pageFile) => {
  const url = urlOf(pageFile);
  const sources = [pageFile, ...relativeImports(pageFile).filter(isPageSpecific)];
  let d = null;
  for (const s of sources) d = merge(d, await fileDates(s));
  if (d) dates[url] = d;
  else notes.push(`no history for ${url} (${pageFile})`);
});

// 2. collection entries (merged with the thin static wrapper if one exists)
const conditionDates = {};
for (const c of COLLECTIONS) {
  const text = await showAtBase(c.file);
  const entries = collectionEntries(text, c.array, c.key);
  if (!entries.length) notes.push(`no entries parsed from ${c.file} (${c.array})`);
  await pool(entries, async ({ value, from, to }) => {
    const url = c.url(value);
    const d = await entryDates(c.file, { from, to });
    if (!d) return;
    if (c.file.endsWith("conditions.ts")) conditionDates[value] = d;
    dates[url] = merge(dates[url], d);
  });
}

// 2b. resources derived from a condition entry by a builder call, e.g.
//     buildConditionLeaflet("adhd", ...) -> /resources/adhd-leaflet/. Their content is
//     the condition's, so they follow its history plus the history of the call itself.
{
  const text = await showAtBase("app/data/resources.ts");
  const suffix = { buildConditionLeaflet: "-leaflet", buildFamilySheet: "-family-guide", buildHowToResource: "-guide" };
  const calls = [...text.matchAll(/(buildConditionLeaflet|buildFamilySheet|buildHowToResource)\(\s*"([^"]+)"/g)];
  await pool(calls, async (m) => {
    const url = `/resources/${m[2]}${suffix[m[1]]}/`;
    const out = (await git("log", BASE, "--format=%aI", "-S", m[0], "--", "app/data/resources.ts")).trim().split("\n").filter(Boolean);
    const own = out.length ? { published: day(out[out.length - 1]), modified: day(out[0]) } : null;
    const cond = conditionDates[m[2]] ?? null;
    // published: when the leaflet first existed; modified: latest of the call and its source condition
    const d = own ? { published: own.published, modified: cond && cond.modified > own.modified ? cond.modified : own.modified } : cond;
    if (d) dates[url] = d;
  });
}

// 3. blog + knowledge articles: existing hand-maintained maps
function readDateMap(file) {
  const text = fs.readFileSync(file, "utf8");
  return [...text.matchAll(/"([^"]+)":\s*\{\s*published:\s*"([^"]+)",\s*modified:\s*"([^"]+)"/g)].map((m) => ({ slug: m[1], published: m[2], modified: m[3] }));
}
for (const a of readDateMap("app/data/knowledgeDates.ts")) dates[`/knowledge/${a.slug}/`] = { published: a.published, modified: a.modified };
for (const a of readDateMap("app/data/articleDates.ts")) dates[`/blog/${a.slug}/`] = { published: a.published, modified: a.modified };

// 4. index pages: newest of own file and children
for (const url of Object.keys(dates).filter((u) => u.split("/").length === 3)) {
  const children = Object.entries(dates).filter(([u]) => u !== url && u.startsWith(url) && u.split("/").length === 4);
  if (children.length) {
    const newest = children.map(([, d]) => d.modified).sort().pop();
    if (newest > dates[url].modified) dates[url] = { ...dates[url], modified: newest };
  }
}

// 5. explicit overrides: pages whose content really changed on the working branch
if (fs.existsSync(OVERRIDES_FILE)) {
  const overrides = JSON.parse(fs.readFileSync(OVERRIDES_FILE, "utf8"));
  for (const [url, value] of Object.entries(overrides)) {
    if (url.startsWith("_")) continue;
    dates[url] = { published: dates[url]?.published ?? value, modified: value };
  }
}

// ---- write
const sorted = Object.fromEntries(Object.entries(dates).sort(([a], [b]) => a.localeCompare(b)));
const body = `// GENERATED by scripts/generate-page-dates.mjs from git history (base: ${BASE}). Do not edit by hand.
// Regenerate locally after adding or substantively editing a page, then commit.
// (CI checkouts are shallow, so this cannot be computed at build time.)
// Manual corrections go in scripts/page-date-overrides.json.
export const pageDates: Record<string, { published: string; modified: string }> = ${JSON.stringify(sorted, null, 2)};

export function getPageDates(path: string) {
  return pageDates[path.endsWith("/") ? path : \`\${path}/\`];
}
`;

if (CHECK) {
  const current = fs.existsSync(OUTPUT) ? fs.readFileSync(OUTPUT, "utf8") : "";
  if (current !== body) {
    console.error(`${OUTPUT} is out of date. Run: node scripts/generate-page-dates.mjs`);
    process.exit(1);
  }
  console.log(`${OUTPUT} is up to date.`);
} else {
  fs.writeFileSync(OUTPUT, body);
  const values = Object.values(sorted).map((d) => d.modified);
  const distinct = new Set(values).size;
  console.log(`Wrote ${OUTPUT}: ${values.length} pages, ${distinct} distinct last-modified dates (base ${BASE}).`);
  notes.forEach((n) => console.log(`  note: ${n}`));
}
