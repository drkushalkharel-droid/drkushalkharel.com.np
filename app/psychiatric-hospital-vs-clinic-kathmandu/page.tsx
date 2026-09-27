import type { Metadata } from "next";
import { Building2 } from "lucide-react";
import { getAudiencePage } from "../data/audiences";
import AudienceLandingPage from "../components/AudienceLandingPage";
import { metaFor } from "../lib/seoText";

const siteUrl = "https://drkushalkharel.com.np";
const page = getAudiencePage("psychiatric-hospital-vs-clinic-kathmandu")!;
const meta = metaFor("/psychiatric-hospital-vs-clinic-kathmandu/", { title: page.title, description: page.shortDescription });


export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: {
    canonical: "/psychiatric-hospital-vs-clinic-kathmandu/",
  },
  keywords: page.searchTerms,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: `${siteUrl}/psychiatric-hospital-vs-clinic-kathmandu`,
    siteName: "Dr. Kushal Kharel",
    images: [{ url: "/images/doctor.png", width: 1200, height: 630 }],
    type: "article",
  },
};

export default function PsychiatricHospitalVsClinicPage() {
  return <AudienceLandingPage page={page} icon={Building2} />;
}
