import type { Metadata } from "next";
import { getRegion, type Region } from "../data/abroadRegions";
import { metaFor } from "./seoText";

const siteUrl = "https://drkushalkharel.com.np";

// Shared metadata for the four region hub pages under /nepalese-abroad/.
export function regionMetadata(slug: Region["slug"]): Metadata {
  const region = getRegion(slug);
  const url = `${siteUrl}/nepalese-abroad/${region.slug}`;
  const meta = metaFor(`/nepalese-abroad/${region.slug}/`, { title: region.title, description: region.description });

  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: `/nepalese-abroad/${region.slug}/` },
    keywords: [
      ...region.keywords,
      "Consultant psychiatrist for Nepalis abroad",
      "online therapy for Nepalis abroad",
      "constant worry and intrusive thoughts online therapy",
    ],
    openGraph: {
      title: meta.title,
      description: meta.description,
      url,
      siteName: "Dr. Kushal Kharel",
      images: [{ url: "/images/doctor.png", width: 1200, height: 630, alt: "Dr. Kushal Kharel - Consultant Psychiatrist" }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: ["/images/doctor.png"],
    },
  };
}
