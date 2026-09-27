import type { Metadata } from "next";
import { Languages } from "lucide-react";
import { getAudiencePage } from "../data/audiences";
import AudienceLandingPage from "../components/AudienceLandingPage";
import { metaFor } from "../lib/seoText";

const siteUrl = "https://drkushalkharel.com.np";
const page = getAudiencePage("english-speaking-psychiatrist")!;
const meta = metaFor("/english-speaking-psychiatrist/", { title: page.title, description: page.shortDescription });


export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: {
    canonical: "/english-speaking-psychiatrist/",
  },
  keywords: page.searchTerms,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: `${siteUrl}/english-speaking-psychiatrist`,
    siteName: "Dr. Kushal Kharel",
    images: [{ url: "/images/doctor.png", width: 1200, height: 630 }],
    type: "article",
  },
};

export default function EnglishSpeakingPsychiatristPage() {
  return <AudienceLandingPage page={page} icon={Languages} />;
}
