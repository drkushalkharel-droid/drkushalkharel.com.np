#!/usr/bin/env node
/**
 * Post-build step: copy each page's declared language onto <html lang>.
 *
 * Next's App Router has a single root layout here, so <html lang> is "en" in every
 * exported page. Each page declares its real language with
 * <meta name="content-language" content="ne"> (see app/lib/language.ts); this script
 * rewrites <html lang="en"> to match, in place, in out/**\/*.html.
 *
 * Runs as part of `npm run build`. Safe to re-run.
 */
import fs from "node:fs";
import path from "node:path";

const OUT_DIR = path.resolve(process.argv[2] ?? "out");

if (!fs.existsSync(OUT_DIR)) {
  console.error(`stamp-html-lang: no build output at ${OUT_DIR}`);
  process.exit(1);
}

function* htmlFiles(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "_next") continue;
      yield* htmlFiles(full);
    } else if (entry.name.endsWith(".html")) {
      yield full;
    }
  }
}

const META = /<meta\s+name="content-language"\s+content="([a-zA-Z-]+)"\s*\/?>/i;
const HTML_TAG = /<html\b([^>]*)>/i;

let stamped = 0;
let scanned = 0;
const perLang = {};

for (const file of htmlFiles(OUT_DIR)) {
  const html = fs.readFileSync(file, "utf8");
  scanned += 1;
  const declared = html.match(META)?.[1];
  if (!declared) continue;

  const tag = html.match(HTML_TAG);
  if (!tag) continue;
  const attrs = tag[1];
  const current = attrs.match(/\blang="([^"]*)"/i)?.[1];
  perLang[declared] = (perLang[declared] ?? 0) + 1;
  if (current === declared) continue;

  const nextAttrs = current === undefined ? `${attrs} lang="${declared}"` : attrs.replace(/\blang="[^"]*"/i, `lang="${declared}"`);
  fs.writeFileSync(file, html.replace(HTML_TAG, `<html${nextAttrs}>`));
  stamped += 1;
}

console.log(
  `stamp-html-lang: scanned ${scanned} pages, rewrote <html lang> on ${stamped} ` +
    `(declared: ${Object.entries(perLang).map(([l, n]) => `${l}=${n}`).join(", ") || "none"})`,
);
