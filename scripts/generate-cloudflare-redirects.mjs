#!/usr/bin/env node
/**
 * Generates the Cloudflare Bulk Redirects CSV for drkushalkharel.com.np.
 *
 * GitHub Pages (the live origin) cannot send 301s, so permanent redirects are done
 * at Cloudflare, in front of it. Bulk Redirects run before the request reaches the
 * origin. The meta-refresh "page moved" stubs under app/ stay as a fallback.
 *
 * Where the mappings come from (so nothing is retyped by hand):
 *   - Legacy stubs: the `destination` of every RedirectNotice page in app/.
 *   - Phase 3 / Phase 4 proposals: seo-proposals/phase3-redirect-map.json and
 *     phase4-cluster-map.json (merges). These are PENDING owner approval and are
 *     only written with --include-pending.
 *
 * Output (redirects/):
 *   cloudflare-redirects.csv                  what is safe to upload today
 *   cloudflare-redirects.pending-approval.csv Phase 3/4 rows, for after approval
 * With --include-pending, cloudflare-redirects.csv holds everything (single file).
 *
 * CSV format (checked against Cloudflare's docs, Sept 2026): NO header row;
 *   source_url,target_url,status_code,preserve_query_string,include_subdomains,subpath_matching,preserve_path_suffix
 * Both /path/ and /path are emitted as sources because Cloudflare's docs do not say
 * whether a trailing slash matters. Chains (A -> B -> C) are flattened to A -> C.
 *
 * Usage: node scripts/generate-cloudflare-redirects.mjs [--include-pending]
 */
import fs from "node:fs";
import path from "node:path";

const HOST = "drkushalkharel.com.np";
const ROOT = process.cwd();
const includePending = process.argv.includes("--include-pending");
const OUT_DIR = path.join(ROOT, "redirects");

const slash = (p) => (p.endsWith("/") ? p : `${p}/`);

// ---- ready: legacy stubs
function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full, out);
    else if (e.name === "page.tsx") out.push(full);
  }
  return out;
}

const ready = []; // { from, to, why }
for (const file of walk(path.join(ROOT, "app"))) {
  const src = fs.readFileSync(file, "utf8");
  if (!src.includes("RedirectNotice")) continue;
  const to = src.match(/destination\s*=\s*"([^"]+)"/)?.[1] ?? src.match(/<RedirectNotice\s+to="([^"]+)"/)?.[1];
  const from = "/" + path.relative(path.join(ROOT, "app"), path.dirname(file)).split(path.sep).join("/") + "/";
  if (!to) throw new Error(`No destination found in ${file}`);
  ready.push({ from, to: slash(to), why: "legacy URL (fallback stub exists in app/)" });
}

// ---- pending: Phase 3 (country pages) and Phase 4 (merges)
const pending = [];
const p3 = path.join(ROOT, "seo-proposals/phase3-redirect-map.json");
if (fs.existsSync(p3)) {
  for (const r of JSON.parse(fs.readFileSync(p3, "utf8")).redirects) {
    pending.push({ from: r.from, to: r.to, why: `Phase 3: ${r.country} folded into a regional page${r.decision ? " (owner decision needed)" : ""}` });
  }
}
const p4 = path.join(ROOT, "seo-proposals/phase4-cluster-map.json");
if (fs.existsSync(p4)) {
  for (const m of JSON.parse(fs.readFileSync(p4, "utf8")).merges) {
    pending.push({ from: m.from, to: m.into, why: `Phase 4 merge ${m.id}` });
  }
}

// ---- combine, flatten chains, validate
function build(rows) {
  const map = new Map();
  for (const r of rows) {
    if (map.has(r.from) && map.get(r.from).to !== r.to) {
      throw new Error(`Conflicting redirects for ${r.from}: ${map.get(r.from).to} vs ${r.to}`);
    }
    map.set(r.from, r);
  }
  const final = [];
  for (const r of map.values()) {
    let to = r.to;
    const seen = new Set([r.from]);
    while (map.has(to)) {
      if (seen.has(to)) throw new Error(`Redirect loop involving ${to}`);
      seen.add(to);
      to = map.get(to).to;
    }
    final.push({ ...r, to, flattened: to !== r.to });
  }
  return final.sort((a, b) => a.from.localeCompare(b.from));
}

// Rows in the pending set that supersede a ready row's destination (e.g. a legacy URL
// that pointed at a page which is itself being merged) are flattened in the combined file.
const readyRows = build(ready);
const pendingRows = build(pending);
const combined = build([...ready, ...pending]);

// A target must exist in the current build, except for pages Phase 3 will create.
const outDir = path.join(ROOT, "out");
function checkTargets(rows, label, allowMissing = false) {
  if (!fs.existsSync(outDir)) return [];
  const missing = rows.filter((r) => !fs.existsSync(path.join(outDir, r.to, "index.html")));
  if (missing.length && !allowMissing) {
    throw new Error(`${label}: targets missing from out/: ${missing.map((m) => `${m.from} -> ${m.to}`).join(", ")}`);
  }
  return missing;
}
checkTargets(readyRows, "ready set");
const willBeCreated = checkTargets(pendingRows, "pending set", true);

// ---- CSV
function toCsv(rows) {
  const lines = [];
  for (const r of rows) {
    const target = `https://${HOST}${r.to}`;
    // source_url, target_url, status, preserve_query_string, include_subdomains, subpath_matching, preserve_path_suffix
    lines.push(`${HOST}${r.from},${target},301,TRUE,FALSE,FALSE,FALSE`);
    lines.push(`${HOST}${r.from.replace(/\/$/, "")},${target},301,TRUE,FALSE,FALSE,FALSE`);
  }
  return lines.join("\n") + "\n";
}

fs.mkdirSync(OUT_DIR, { recursive: true });
const mainRows = includePending ? combined : readyRows;
fs.writeFileSync(path.join(OUT_DIR, "cloudflare-redirects.csv"), toCsv(mainRows));
if (!includePending) {
  fs.writeFileSync(path.join(OUT_DIR, "cloudflare-redirects.pending-approval.csv"), toCsv(pendingRows));
} else {
  const stale = path.join(OUT_DIR, "cloudflare-redirects.pending-approval.csv");
  if (fs.existsSync(stale)) fs.rmSync(stale);
}

console.log(`cloudflare-redirects.csv: ${mainRows.length} redirects (${mainRows.length * 2} CSV rows: with and without trailing slash)${includePending ? " [includes pending]" : " [safe to upload today]"}`);
if (!includePending) {
  console.log(`cloudflare-redirects.pending-approval.csv: ${pendingRows.length} redirects (Phase 3/4, do not upload until approved)`);
  if (willBeCreated.length) console.log(`  ${new Set(willBeCreated.map((m) => m.to)).size} target pages do not exist yet (new regional pages)`);
}
const flat = combined.filter((r) => r.flattened);
if (flat.length) console.log(`Chains flattened in the combined set: ${flat.map((r) => `${r.from} -> ${r.to}`).join("; ")}`);
