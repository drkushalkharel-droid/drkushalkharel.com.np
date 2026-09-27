import type { Metadata } from "next";
import { HeartPulse } from "lucide-react";
import { getAudiencePage } from "../data/audiences";
import AudienceLandingPage from "../components/AudienceLandingPage";
import { metaFor } from "../lib/seoText";

const siteUrl = "https://drkushalkharel.com.np";
const page = getAudiencePage("addiction-treatment-kathmandu")!;
const meta = metaFor("/addiction-treatment-kathmandu/", { title: page.title, description: page.shortDescription });


export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: {
    canonical: "/addiction-treatment-kathmandu/",
  },
  keywords: page.searchTerms,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: `${siteUrl}/addiction-treatment-kathmandu`,
    siteName: "Dr. Kushal Kharel",
    images: [{ url: "/images/doctor.png", width: 1200, height: 630 }],
    type: "article",
  },
};

export default function AddictionTreatmentKathmanduPage() {
  return <AudienceLandingPage page={page} icon={HeartPulse} />;
}
