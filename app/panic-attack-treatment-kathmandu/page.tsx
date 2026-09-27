import type { Metadata } from "next";
import { HeartPulse } from "lucide-react";
import { getAudiencePage } from "../data/audiences";
import AudienceLandingPage from "../components/AudienceLandingPage";
import { metaFor } from "../lib/seoText";

const siteUrl = "https://drkushalkharel.com.np";
const page = getAudiencePage("panic-attack-treatment-kathmandu")!;
const meta = metaFor("/panic-attack-treatment-kathmandu/", { title: page.title, description: page.shortDescription });


export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: {
    canonical: "/panic-attack-treatment-kathmandu/",
  },
  keywords: page.searchTerms,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: `${siteUrl}/panic-attack-treatment-kathmandu`,
    siteName: "Dr. Kushal Kharel",
    images: [{ url: "/images/doctor.png", width: 1200, height: 630 }],
    type: "article",
  },
};

export default function PanicAttackTreatmentKathmanduPage() {
  return <AudienceLandingPage page={page} icon={HeartPulse} />;
}
