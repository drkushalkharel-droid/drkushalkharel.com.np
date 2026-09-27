import type { Metadata } from "next";
import Link from "next/link";
import FAQ from "../components/FAQ";
import RelatedContent from "../components/RelatedContent";
import { faqs } from "../data/faqs";
import { metaFor } from "../lib/seoText";
import { serializeJsonLd } from "../lib/schema";

const siteUrl = "https://drkushalkharel.com.np";
const meta = metaFor("/faq/", {
  title: "Psychiatrist FAQ: Kathmandu & Online",
  description: "Answers to common questions about seeing Dr. Kushal Kharel: booking, fees, online consultation, confidentiality and your first visit.",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: "/faq/" },
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: `${siteUrl}/faq/`,
    siteName: "Dr. Kushal Kharel",
    images: [{ url: "/images/doctor.png", width: 1200, height: 630 }],
    type: "website",
  },
};

export default function FaqPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "FAQ", item: `${siteUrl}/faq/` },
    ],
  };

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbJsonLd) }} />

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 pb-12 pt-28 lg:px-8 lg:pt-32">
          <Link href="/" className="font-semibold text-sage-700">
            &larr; Back to home
          </Link>
          <h1 className="mt-6 text-4xl font-bold leading-tight text-stone-950 md:text-5xl">
            Frequently asked questions about seeing a psychiatrist in Kathmandu
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-stone-600">
            {faqs.length} answers about booking, fees, online consultation, confidentiality, medication and what
            to expect at your first visit with Dr. Kushal Kharel. If your question is not here, call or WhatsApp
            the clinic on +977 9861800547.
          </p>
        </div>
      </section>

      <FAQ items={faqs} heading="All questions" showAllLink={false} />

      <div className="mx-auto max-w-5xl px-6 pb-16 lg:px-8">
        <RelatedContent path="/faq/" heading="Related services" showCallout={false} />
      </div>
    </main>
  );
}
