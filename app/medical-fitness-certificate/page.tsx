import type { Metadata } from "next";
import { FileCheck } from "lucide-react";
import { getAudiencePage } from "../data/audiences";
import AudienceLandingPage from "../components/AudienceLandingPage";

const siteUrl = "https://drkushalkharel.com.np";
const page = getAudiencePage("medical-fitness-certificate")!;

export const metadata: Metadata = {
  title: page.title,
  description: page.shortDescription,
  alternates: {
    canonical: "/medical-fitness-certificate",
  },
  keywords: page.searchTerms,
  openGraph: {
    title: page.title,
    description: page.shortDescription,
    url: `${siteUrl}/medical-fitness-certificate`,
    siteName: "Dr. Kushal Kharel",
    images: [{ url: "/images/doctor.png", width: 1200, height: 630 }],
    type: "article",
  },
};

export default function MedicalFitnessCertificatePage() {
  return <AudienceLandingPage page={page} icon={FileCheck} />;
}
