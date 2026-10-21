import type { Metadata } from "next";
import { notFound } from "next/navigation";
import NepaliAbroadPage from "../../../components/NepaliAbroadPage";
import { regions } from "../../../data/abroadRegions";
import { languageMetadata } from "../../../lib/language";
import { hreflangAlternates } from "../../../data/translationPairs";

export const dynamicParams = false;
export function generateStaticParams() { return regions.map(({ slug }) => ({ region: slug })); }

export async function generateMetadata({ params }: { params: Promise<{ region: string }> }): Promise<Metadata> {
  const { region: slug } = await params;
  const region = regions.find((item) => item.slug === slug);
  if (!region) return {};
  const title = `${region.nepaliHeading} | डा. कुशल खरेल`;
  const description = `${region.nepaliText} अनलाइन भिडियो परामर्श, परामर्श सेवा र उपचार योजना।`;
  const path = `/ne/bideshma-nepali/${slug}/`;
  return {
    title, description,
    alternates: { canonical: path, languages: hreflangAlternates(path) },
    ...languageMetadata("ne"),
    keywords: [region.nepaliHeading, "विदेशमा नेपाली मनोचिकित्सक", "नेपाली अनलाइन CBT", "नेपाली अनलाइन मानसिक स्वास्थ्य परामर्श"],
    openGraph: { title, description, url: `https://drkushalkharel.com.np${path.slice(0, -1)}`, siteName: "Dr. Kushal Kharel", locale: "ne_NP", type: "website", images: [{ url: "/images/doctor.png", width: 1200, height: 630, alt: "डा. कुशल खरेल" }] },
  };
}

export default async function Page({ params }: { params: Promise<{ region: string }> }) {
  const { region: slug } = await params;
  const region = regions.find((item) => item.slug === slug);
  if (!region) notFound();
  const url = `https://drkushalkharel.com.np/ne/bideshma-nepali/${slug}`;
  const data = { "@context": "https://schema.org", "@type": "MedicalWebPage", name: region.nepaliHeading, description: region.nepaliText, url, inLanguage: "ne", reviewedBy: { "@id": "https://drkushalkharel.com.np#psychiatrist" }, provider: { "@id": "https://drkushalkharel.com.np#psychiatrist" } };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} /><NepaliAbroadPage region={region} /></>;
}
