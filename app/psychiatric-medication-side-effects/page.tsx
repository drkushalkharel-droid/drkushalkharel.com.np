import type { Metadata } from "next";
import { ListChecks } from "lucide-react";
import { getAudiencePage } from "../data/audiences";
import AudienceLandingPage from "../components/AudienceLandingPage";
import { metaFor } from "../lib/seoText";

const siteUrl = "https://drkushalkharel.com.np";
const page = getAudiencePage("psychiatric-medication-side-effects")!;
const meta = metaFor("/psychiatric-medication-side-effects/", { title: page.title, description: page.shortDescription });


export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: {
    canonical: "/psychiatric-medication-side-effects/",
  },
  keywords: page.searchTerms,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: `${siteUrl}/psychiatric-medication-side-effects`,
    siteName: "Dr. Kushal Kharel",
    images: [{ url: "/images/doctor.png", width: 1200, height: 630 }],
    type: "article",
  },
};

export default function PsychiatricMedicationSideEffectsPage() {
  return <AudienceLandingPage page={page} icon={ListChecks} />;
}
