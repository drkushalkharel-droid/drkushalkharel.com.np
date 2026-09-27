import type { Metadata } from "next";
import { Moon } from "lucide-react";
import { getAudiencePage } from "../data/audiences";
import AudienceLandingPage from "../components/AudienceLandingPage";
import { metaFor } from "../lib/seoText";

const siteUrl = "https://drkushalkharel.com.np";
const page = getAudiencePage("sleep-problems-treatment-nepal")!;
const meta = metaFor("/sleep-problems-treatment-nepal/", { title: page.title, description: page.shortDescription });


export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: {
    canonical: "/sleep-problems-treatment-nepal/",
  },
  keywords: page.searchTerms,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: `${siteUrl}/sleep-problems-treatment-nepal`,
    siteName: "Dr. Kushal Kharel",
    images: [{ url: "/images/doctor.png", width: 1200, height: 630 }],
    type: "article",
  },
};

export default function SleepProblemsTreatmentNepalPage() {
  return <AudienceLandingPage page={page} icon={Moon} />;
}
