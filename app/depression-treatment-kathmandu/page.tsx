import type { Metadata } from "next";
import { CloudRain } from "lucide-react";
import { getAudiencePage } from "../data/audiences";
import AudienceLandingPage from "../components/AudienceLandingPage";
import { metaFor } from "../lib/seoText";

const siteUrl = "https://drkushalkharel.com.np";
const page = getAudiencePage("depression-treatment-kathmandu")!;
const meta = metaFor("/depression-treatment-kathmandu/", { title: page.title, description: page.shortDescription });


export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: {
    canonical: "/depression-treatment-kathmandu/",
  },
  keywords: page.searchTerms,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: `${siteUrl}/depression-treatment-kathmandu`,
    siteName: "Dr. Kushal Kharel",
    images: [{ url: "/images/doctor.png", width: 1200, height: 630 }],
    type: "article",
  },
};

export default function DepressionTreatmentKathmanduPage() {
  return <AudienceLandingPage page={page} icon={CloudRain} />;
}
