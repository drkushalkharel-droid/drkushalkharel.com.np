import type { Metadata } from "next";
import { Home } from "lucide-react";
import { getAudiencePage } from "../data/audiences";
import AudienceLandingPage from "../components/AudienceLandingPage";
import { metaFor } from "../lib/seoText";

const siteUrl = "https://drkushalkharel.com.np";
const page = getAudiencePage("returning-to-nepal-after-abroad")!;
const meta = metaFor("/returning-to-nepal-after-abroad/", { title: page.title, description: page.shortDescription });


export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: {
    canonical: "/returning-to-nepal-after-abroad/",
  },
  keywords: page.searchTerms,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: `${siteUrl}/returning-to-nepal-after-abroad`,
    siteName: "Dr. Kushal Kharel",
    images: [{ url: "/images/doctor.png", width: 1200, height: 630 }],
    type: "article",
  },
};

export default function ReturningToNepalAfterAbroadPage() {
  return <AudienceLandingPage page={page} icon={Home} />;
}
