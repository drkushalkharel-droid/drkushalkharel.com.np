import type { Metadata } from "next";
import { Stethoscope } from "lucide-react";
import { getAudiencePage } from "../data/audiences";
import AudienceLandingPage from "../components/AudienceLandingPage";
import { metaFor } from "../lib/seoText";

const siteUrl = "https://drkushalkharel.com.np";
const page = getAudiencePage("psychiatrist-and-therapist-kathmandu")!;
const meta = metaFor("/psychiatrist-and-therapist-kathmandu/", { title: page.title, description: page.shortDescription });


export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: {
    canonical: "/psychiatrist-and-therapist-kathmandu/",
  },
  keywords: page.searchTerms,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: `${siteUrl}/psychiatrist-and-therapist-kathmandu`,
    siteName: "Dr. Kushal Kharel",
    images: [{ url: "/images/doctor.png", width: 1200, height: 630 }],
    type: "article",
  },
};

export default function PsychiatristAndTherapistKathmanduPage() {
  return <AudienceLandingPage page={page} icon={Stethoscope} />;
}
