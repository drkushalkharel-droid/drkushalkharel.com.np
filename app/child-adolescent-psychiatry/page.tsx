import type { Metadata } from "next";
import { Baby } from "lucide-react";
import { getAudiencePage } from "../data/audiences";
import AudienceLandingPage from "../components/AudienceLandingPage";
import { metaFor } from "../lib/seoText";

const siteUrl = "https://drkushalkharel.com.np";
const page = getAudiencePage("child-adolescent-psychiatry")!;
const meta = metaFor("/child-adolescent-psychiatry/", { title: page.title, description: page.shortDescription });


export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: {
    canonical: "/child-adolescent-psychiatry/",
  },
  keywords: page.searchTerms,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: `${siteUrl}/child-adolescent-psychiatry`,
    siteName: "Dr. Kushal Kharel",
    images: [{ url: "/images/doctor.png", width: 1200, height: 630 }],
    type: "article",
  },
};

export default function ChildAdolescentPsychiatryPage() {
  return <AudienceLandingPage page={page} icon={Baby} />;
}
