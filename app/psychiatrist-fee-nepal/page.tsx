import type { Metadata } from "next";
import { Wallet } from "lucide-react";
import { getAudiencePage } from "../data/audiences";
import AudienceLandingPage from "../components/AudienceLandingPage";
import { metaFor } from "../lib/seoText";

const siteUrl = "https://drkushalkharel.com.np";
const page = getAudiencePage("psychiatrist-fee-nepal")!;
const meta = metaFor("/psychiatrist-fee-nepal/", { title: page.title, description: page.shortDescription });


export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: {
    canonical: "/psychiatrist-fee-nepal/",
  },
  keywords: page.searchTerms,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: `${siteUrl}/psychiatrist-fee-nepal`,
    siteName: "Dr. Kushal Kharel",
    images: [{ url: "/images/doctor.png", width: 1200, height: 630 }],
    type: "article",
  },
};

export default function PsychiatristFeeNepalPage() {
  return <AudienceLandingPage page={page} icon={Wallet} />;
}
