import type { Metadata } from "next";
import { Plane } from "lucide-react";
import { getAudiencePage } from "../data/audiences";
import AudienceLandingPage from "../components/AudienceLandingPage";
import { metaFor } from "../lib/seoText";

const siteUrl = "https://drkushalkharel.com.np";
const page = getAudiencePage("tourists-in-nepal")!;
const meta = metaFor("/tourists-in-nepal/", { title: page.title, description: page.shortDescription });


export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: {
    canonical: "/tourists-in-nepal/",
  },
  keywords: page.searchTerms,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: `${siteUrl}/tourists-in-nepal`,
    siteName: "Dr. Kushal Kharel",
    images: [{ url: "/images/doctor.png", width: 1200, height: 630 }],
    type: "article",
  },
};

export default function TouristsPage() {
  return <AudienceLandingPage page={page} icon={Plane} />;
}
