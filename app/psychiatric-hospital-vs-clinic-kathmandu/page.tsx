import type { Metadata } from "next";
import { Building2 } from "lucide-react";
import { getAudiencePage } from "../data/audiences";
import AudienceLandingPage from "../components/AudienceLandingPage";

const siteUrl = "https://drkushalkharel.com.np";
const page = getAudiencePage("psychiatric-hospital-vs-clinic-kathmandu")!;

export const metadata: Metadata = {
  title: page.title,
  description: page.shortDescription,
  alternates: {
    canonical: "/psychiatric-hospital-vs-clinic-kathmandu",
  },
  keywords: page.searchTerms,
  openGraph: {
    title: page.title,
    description: page.shortDescription,
    url: `${siteUrl}/psychiatric-hospital-vs-clinic-kathmandu`,
    siteName: "Dr. Kushal Kharel",
    images: [{ url: "/images/doctor.png", width: 1200, height: 630 }],
    type: "article",
  },
};

export default function PsychiatricHospitalVsClinicPage() {
  return <AudienceLandingPage page={page} icon={Building2} />;
}
