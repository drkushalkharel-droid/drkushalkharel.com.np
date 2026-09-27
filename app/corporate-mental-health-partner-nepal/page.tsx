import type { Metadata } from "next";
import { Briefcase } from "lucide-react";
import { getAudiencePage } from "../data/audiences";
import AudienceLandingPage from "../components/AudienceLandingPage";
import { metaFor } from "../lib/seoText";

const siteUrl = "https://drkushalkharel.com.np";
const page = getAudiencePage("corporate-mental-health-partner-nepal")!;
const meta = metaFor("/corporate-mental-health-partner-nepal/", { title: page.title, description: page.shortDescription });


export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: {
    canonical: "/corporate-mental-health-partner-nepal/",
  },
  keywords: page.searchTerms,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: `${siteUrl}/corporate-mental-health-partner-nepal`,
    siteName: "Dr. Kushal Kharel",
    images: [{ url: "/images/doctor.png", width: 1200, height: 630 }],
    type: "article",
  },
};

export default function CorporateMentalHealthPartnerPage() {
  return <AudienceLandingPage page={page} icon={Briefcase} />;
}
