import type { Metadata } from "next";
import { getRegion, type Region } from "../data/abroadRegions";

const siteUrl = "https://drkushalkharel.com.np";

// Shared metadata for the four region hub pages under /nepalese-abroad/.
export function regionMetadata(slug: Region["slug"]): Metadata {
  const region = getRegion(slug);
  const url = `${siteUrl}/nepalese-abroad/${region.slug}`;

  return {
    title: { absolute: region.title },
    description: region.description,
    alternates: { canonical: `/nepalese-abroad/${region.slug}/` },
    keywords: [
      ...region.keywords,
      "Consultant psychiatrist for Nepalis abroad",
      "online therapy for Nepalis abroad",
      "constant worry and intrusive thoughts online therapy",
    ],
    openGraph: {
      title: region.title,
      description: region.description,
      url,
      siteName: "Dr. Kushal Kharel",
      images: [{ url: "/images/doctor.png", width: 1200, height: 630, alt: "Dr. Kushal Kharel - Consultant Psychiatrist" }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: region.title,
      description: region.description,
      images: ["/images/doctor.png"],
    },
  };
}
