#!/usr/bin/env node
/**
 * Turn a folder of photo exports (Instagram, Facebook, a photographer's gallery) into the optimized
 * WebP files the site serves from public/images.
 *
 *   node scripts/import-images.mjs ./photos-in            # converts every JPG/PNG/WebP in the folder
 *   node scripts/import-images.mjs ./photos-in --prefix portfolio
 *   node scripts/import-images.mjs ./photos-in --max 1800 --quality 80
 *
 * Each input becomes public/images/<prefix>-<slug-of-filename>.webp, resized so the long edge is at
 * most --max pixels (default 1800). Existing files are overwritten. The script prints a ready-to-paste
 * line for src/data/portfolio.ts with the measured aspect ratio; fill in the alt text and category.
 */
import { readdir, mkdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const args = process.argv.slice(2);
const dir = args.find((a) => !a.startsWith("--"));
if (!dir) {
  console.error("Usage: node scripts/import-images.mjs <folder> [--prefix name] [--max 1800] [--quality 80]");
  process.exit(1);
}
const opt = (name, fallback) => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 && args[i + 1] ? args[i + 1] : fallback;
};
const prefix = opt("prefix", "");
const max = Number(opt("max", "1800"));
const quality = Number(opt("quality", "80"));
const out = path.join(process.cwd(), "public", "images");
await mkdir(out, { recursive: true });

const slug = (s) =>
  s
    .toLowerCase()
    .replace(/\.[a-z0-9]+$/, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60) || "photo";

const files = (await readdir(dir)).filter((f) => /\.(jpe?g|png|webp|avif|tiff?)$/i.test(f)).sort();
if (files.length === 0) {
  console.error(`No images found in ${dir}`);
  process.exit(1);
}
const lines = [];
for (const f of files) {
  const src = path.join(dir, f);
  if (!(await stat(src)).isFile()) continue;
  const name = `${prefix ? `${prefix}-` : ""}${slug(f)}.webp`;
  const dest = path.join(out, name);
  const image = sharp(src).rotate();
  const { width = 0, height = 0 } = await image.metadata();
  const ratio = width && height ? Math.round((width / height) * 100) / 100 : 1;
  await image
    .resize({ width: max, height: max, fit: "inside", withoutEnlargement: true })
    .webp({ quality })
    .toFile(dest);
  const size = (await stat(dest)).size;
  console.log(`${f} -> public/images/${name} (${width}x${height}, ${Math.round(size / 1024)} KB)`);
  lines.push(`  { src: "/images/${name}", alt: "", category: "Tablescapes", ratio: ${ratio} },`);
}
console.log("\nPaste into src/data/portfolio.ts and fill in alt and category:\n");
console.log(lines.join("\n"));
