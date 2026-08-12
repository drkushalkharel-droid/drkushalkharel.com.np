import type { Metadata } from "next";
import { Stethoscope } from "lucide-react";
import { getAudiencePage } from "../data/audiences";
import AudienceLandingPage from "../components/AudienceLandingPage";

const siteUrl = "https://drkushalkharel.com.np";
const page = getAudiencePage("psychiatry-clinic-kathmandu")!;

export const metadata: Metadata = {
  title: page.title,
  description: page.shortDescription,
  alternates: {
    canonical: "/psychiatry-clinic-kathmandu",
  },
  keywords: page.searchTerms,
  openGraph: {
    title: page.title,
    description: page.shortDescription,
    url: `${siteUrl}/psychiatry-clinic-kathmandu`,
    siteName: "Dr. Kushal Kharel",
    images: [{ url: "/images/doctor.png", width: 1200, height: 630 }],
    type: "article",
  },
};

export default function PsychiatryClinicKathmanduPage() {
  return <AudienceLandingPage page={page} icon={Stethoscope} />;
}
