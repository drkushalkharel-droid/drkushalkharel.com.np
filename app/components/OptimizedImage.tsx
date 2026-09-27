import type { CSSProperties } from "react";
import NextImage from "next/image";
import manifest from "../data/imageManifest.json";

// Responsive <picture> for the site's raster images, using the AVIF and WebP variants
// that scripts/optimize-images.mjs generates before each build (next/image cannot
// optimize in a static export). It accepts the props this codebase already passes to
// next/image, so it drops in via `import Image from "../components/OptimizedImage"`.
//
//   - AVIF <source> first, WebP <img srcset> as the universal fallback.
//   - `sizes` is passed straight through, so the browser picks the smallest variant
//     that fills the slot (a 1200px photo on a 360px phone loads the 480px file).
//   - `priority` (the hero / LCP image) loads eagerly with fetchpriority="high";
//     everything else is lazy.
//   - An image with no manifest entry (an SVG, or a new file before the next build)
//     falls back to next/image, so nothing breaks.

type ManifestEntry = { width: number; height: number; widths: number[] };
const images = manifest as Record<string, ManifestEntry>;

type Props = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
  loading?: "lazy" | "eager";
  className?: string;
  style?: CSSProperties;
  // Accepted for compatibility with next/image call sites; not used.
  quality?: number;
  unoptimized?: boolean;
};

const variant = (src: string, width: number, format: "avif" | "webp") =>
  `/optimized${src.replace(/\.[^./]+$/, "")}-${width}.${format}`;

const srcSet = (src: string, widths: number[], format: "avif" | "webp") =>
  widths.map((w) => `${variant(src, w, format)} ${w}w`).join(", ");

const FILL_STYLE: CSSProperties = { position: "absolute", inset: 0, width: "100%", height: "100%" };

export default function OptimizedImage({ src, alt, width, height, fill, sizes, priority, loading, className, style, ...rest }: Props) {
  const entry = images[src];
  if (!entry) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return <NextImage src={src} alt={alt} width={width} height={height} fill={fill} sizes={sizes} priority={priority} loading={loading} className={className} style={style} {...(rest as any)} />;
  }

  // Widths the browser can choose from. `sizes` defaults to full width when not given.
  const slot = sizes ?? "100vw";
  const mid = entry.widths[Math.min(1, entry.widths.length - 1)];

  return (
    <picture className="contents">
      <source type="image/avif" srcSet={srcSet(src, entry.widths, "avif")} sizes={slot} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={variant(src, mid, "webp")}
        srcSet={srcSet(src, entry.widths, "webp")}
        sizes={slot}
        alt={alt}
        // Intrinsic size reserves space (no layout shift) even when CSS scales the image.
        {...(fill ? {} : { width: width ?? entry.width, height: height ?? entry.height })}
        loading={loading ?? (priority ? "eager" : "lazy")}
        fetchPriority={priority ? "high" : undefined}
        decoding="async"
        className={className}
        style={fill ? { ...FILL_STYLE, ...style } : style}
      />
    </picture>
  );
}
