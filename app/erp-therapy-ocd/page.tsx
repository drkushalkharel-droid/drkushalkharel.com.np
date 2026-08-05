import type { Metadata } from "next";
import { Repeat } from "lucide-react";
import { getAudiencePage } from "../data/audiences";
import AudienceLandingPage from "../components/AudienceLandingPage";

const siteUrl = "https://drkushalkharel.com.np";
const page = getAudiencePage("erp-therapy-ocd")!;

export const metadata: Metadata = {
  title: page.title,
  description: page.shortDescription,
  alternates: {
    canonical: "/erp-therapy-ocd",
  },
  keywords: page.searchTerms,
  openGraph: {
    title: page.title,
    description: page.shortDescription,
    url: `${siteUrl}/erp-therapy-ocd`,
    siteName: "Dr. Kushal Kharel",
    images: [{ url: "/images/doctor.png", width: 1200, height: 630 }],
    type: "article",
  },
};

export default function ErpTherapyOcdPage() {
  return <AudienceLandingPage page={page} icon={Repeat} />;
}
