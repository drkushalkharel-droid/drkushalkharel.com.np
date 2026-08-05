import type { Metadata } from "next";
import { UserCheck } from "lucide-react";
import { getAudiencePage } from "../data/audiences";
import AudienceLandingPage from "../components/AudienceLandingPage";

const siteUrl = "https://drkushalkharel.com.np";
const page = getAudiencePage("female-counselor-kathmandu")!;

export const metadata: Metadata = {
  title: page.title,
  description: page.shortDescription,
  alternates: {
    canonical: "/female-counselor-kathmandu",
  },
  keywords: page.searchTerms,
  openGraph: {
    title: page.title,
    description: page.shortDescription,
    url: `${siteUrl}/female-counselor-kathmandu`,
    siteName: "Dr. Kushal Kharel",
    images: [{ url: "/images/doctor.png", width: 1200, height: 630 }],
    type: "article",
  },
};

export default function FemaleCounselorKathmanduPage() {
  return <AudienceLandingPage page={page} icon={UserCheck} />;
}
