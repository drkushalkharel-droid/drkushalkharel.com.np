#!/usr/bin/env node
/**
 * Builds responsive AVIF + WebP versions of the site's raster images.
 *
 * next/image cannot optimize in a static export (next.config.ts sets unoptimized), so
 * originals were served as-is: multi-megabyte photos scaled down by CSS. This script
 * runs before `next build` (npm "prebuild") and writes, for every image under
 * public/images and public/certificates:
 *
 *   public/optimized/<path>-<width>.avif
 *   public/optimized/<path>-<width>.webp
 *
 * plus app/data/imageManifest.json (natural size and the widths generated), which
 * app/components/OptimizedImage.tsx reads to build <picture>/srcset. Existing outputs
 * that are newer than their source are skipped, so re-runs are fast.
 *
 * public/optimized/ is generated, not committed (see .gitignore).
 *
 * Usage: node scripts/optimize-images.mjs [--force]
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const PUBLIC = path.join(ROOT, "public");
const OUT = path.join(PUBLIC, "optimized");
const MANIFEST = path.join(ROOT, "app/data/imageManifest.json");
const FORCE = process.argv.includes("--force");

const SOURCES = ["images", "certificates"];
const EXT = /\.(jpe?g|png|webp)$/i;
// Widths worth generating. Anything above the source's own width is skipped and the
// source width itself is added, so small originals are never upscaled.
const WIDTHS = [480, 800, 1200, 1600];
const MAX_WIDTH = 1600;
const AVIF = { quality: 50, effort: 3 };
const WEBP = { quality: 78 };

function* walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else if (EXT.test(entry.name)) yield full;
  }
}

const mtime = (file) => (fs.existsSync(file) ? fs.statSync(file).mtimeMs : 0);

async function processImage(file) {
  const rel = path.relative(PUBLIC, file).split(path.sep).join("/"); // images/doctor.png
  const key = `/${rel}`;
  const { width, height } = await sharp(file, { failOn: "none" }).rotate().metadata();
  // sharp.rotate() applies EXIF orientation, so a phone photo is not delivered sideways.
  const oriented = await sharp(file, { failOn: "none" }).rotate().toBuffer({ resolveWithObject: true });
  const natural = { width: oriented.info.width, height: oriented.info.height };

  const target = Math.min(natural.width, MAX_WIDTH);
  const widths = [...new Set([...WIDTHS.filter((w) => w < target), target])].sort((a, b) => a - b);
  const base = path.join(OUT, rel.replace(EXT, ""));
  fs.mkdirSync(path.dirname(base), { recursive: true });

  let written = 0;
  for (const w of widths) {
    for (const [format, opts] of [["avif", AVIF], ["webp", WEBP]]) {
      const dest = `${base}-${w}.${format}`;
      if (!FORCE && mtime(dest) > mtime(file)) continue;
      const pipeline = sharp(oriented.data).resize({ width: w, withoutEnlargement: true });
      await (format === "avif" ? pipeline.avif(opts) : pipeline.webp(opts)).toFile(dest);
      written += 1;
    }
  }
  return { key, entry: { width: natural.width, height: natural.height, widths }, written, srcBytes: fs.statSync(file).size, orig: { width, height } };
}

const files = SOURCES.flatMap((dir) => (fs.existsSync(path.join(PUBLIC, dir)) ? [...walk(path.join(PUBLIC, dir))] : []));
const started = Date.now();
const manifest = {};
let written = 0;
let index = 0;

// A few at a time: AVIF encoding is CPU-heavy and sharp already uses several threads.
async function worker() {
  while (index < files.length) {
    const file = files[index++];
    try {
      const result = await processImage(file);
      manifest[result.key] = result.entry;
      written += result.written;
    } catch (error) {
      console.error(`optimize-images: skipped ${file}: ${error.message}`);
    }
  }
}
await Promise.all(Array.from({ length: 3 }, worker));

const sorted = Object.fromEntries(Object.entries(manifest).sort(([a], [b]) => a.localeCompare(b)));
fs.writeFileSync(MANIFEST, JSON.stringify(sorted, null, 2) + "\n");

let outBytes = 0;
if (fs.existsSync(OUT)) {
  for (const f of fs.readdirSync(OUT, { recursive: true })) {
    const full = path.join(OUT, String(f));
    if (fs.statSync(full).isFile()) outBytes += fs.statSync(full).size;
  }
}
console.log(
  `optimize-images: ${files.length} images, ${written} files written in ${((Date.now() - started) / 1000).toFixed(1)}s ` +
    `(${(outBytes / 1048576).toFixed(1)} MB of variants in public/optimized)`,
);
