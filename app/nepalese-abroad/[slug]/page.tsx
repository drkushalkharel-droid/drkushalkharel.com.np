import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RedirectNotice from "../../components/RedirectNotice";
import { abroadGuides, getAbroadGuide } from "../../data/abroad";
import { countryHref, getRegionForCountry } from "../../data/abroadRegions";

// Legacy per-country URLs (/nepalese-abroad/<country>/). Each country is now a section on
// its regional page, and Cloudflare sends a 301 to that page (see cloudflare-redirects.csv).
// This is the fallback where that redirect is not deployed. It is noindex so the old URL
// does not compete with the regional page; its canonical points at the regional page
// (the redirect itself carries the #country anchor).
export function generateStaticParams() {
  return abroadGuides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getAbroadGuide(slug);
  const region = getRegionForCountry(slug);
  if (!guide || !region) return {};

  return {
    title: `${guide.country} — page moved`,
    alternates: { canonical: `/nepalese-abroad/${region.slug}/` },
    robots: { index: false, follow: true },
  };
}

export default async function NepaleseAbroadMovedPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const region = getRegionForCountry(slug);
  if (!region || !getAbroadGuide(slug)) notFound();

  return <RedirectNotice to={countryHref(slug)} label={`Nepalis in ${region.shortName}`} />;
}
