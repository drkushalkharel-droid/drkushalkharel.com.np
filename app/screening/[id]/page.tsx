import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCondition } from "../../data/conditions";
import { screeningTools, getScreeningTool } from "../../data/screening";
import { buildSpeakableSpec } from "../../lib/schema";
import SingleScreeningTool from "../SingleScreeningTool";

const siteUrl = "https://drkushalkharel.com.np";

export function generateStaticParams() {
  return screeningTools.map((tool) => ({ id: tool.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const tool = getScreeningTool(id);

  if (!tool) {
    return {};
  }

  const title = `${tool.searchQuestion} Free ${tool.shortTitle} Screening Test`;

  return {
    title,
    description: tool.seoDescription,
    alternates: {
      canonical: `/screening/${tool.id}`,
    },
    keywords: tool.keywords,
    openGraph: {
      title,
      description: tool.seoDescription,
      url: `${siteUrl}/screening/${tool.id}`,
      siteName: "Dr. Kushal Kharel",
      images: [{ url: "/images/doctor.png", width: 1200, height: 630 }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: tool.seoDescription,
      images: ["/images/doctor.png"],
    },
  };
}

export default async function ScreeningToolPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const tool = getScreeningTool(id);

  if (!tool) {
    notFound();
  }

  const pageUrl = `${siteUrl}/screening/${tool.id}`;
  const condition = tool.relatedConditionSlug ? getCondition(tool.relatedConditionSlug) : undefined;
  const title = `${tool.searchQuestion} Free ${tool.shortTitle} Screening Test`;

  const faqs = [
    {
      question: `How accurate is this ${tool.shortTitle.toLowerCase()} screening test?`,
      answer: `This is a free, self-rated screening tool for awareness purposes only. ${tool.sourceNote} It cannot replace a full psychiatric assessment.`,
    },
    {
      question: "Is this test a diagnosis?",
      answer:
        "No. A screening score only suggests whether further discussion with a psychiatrist is worthwhile. Diagnosis requires a full clinical interview considering your history, other conditions and functioning.",
    },
    {
      question: "What should I do if my score suggests significant symptoms?",
      answer:
        "Contact Dr. Kushal Kharel for a full psychiatric consultation, in person in Kathmandu or online. If there is any immediate safety risk, seek emergency care right away.",
    },
    {
      question: "Is this screening test free and confidential?",
      answer:
        "Yes. This screening tool is free to use, and your answers stay in your browser — nothing is sent to a server or stored.",
    },
  ];

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: title,
    description: tool.seoDescription,
    url: pageUrl,
    inLanguage: "en",
    medicalAudience: ["Patient", "Caregiver"],
    about: condition ? { "@id": `${siteUrl}/conditions/${condition.slug}#condition` } : tool.shortTitle,
    reviewedBy: {
      "@type": "Physician",
      name: "Dr. Kushal Kharel",
      medicalSpecialty: "Psychiatry",
      telephone: "+9779861800547",
    },
    speakable: buildSpeakableSpec(["#tool-quick-answer"]),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Screening Tools", item: `${siteUrl}/screening` },
      { "@type": "ListItem", position: 3, name: tool.title, item: pageUrl },
    ],
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 pb-12 pt-28 lg:px-8 lg:pt-32">
          <Link href="/screening" className="font-semibold text-blue-700">
            &larr; All screening tools
          </Link>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[3px] text-blue-700">
            Free Self-Rated Screening
          </p>
          <h1 className="mt-5 text-4xl font-bold leading-tight text-slate-950 md:text-5xl">
            {tool.searchQuestion}
          </h1>
          <p id="tool-quick-answer" className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            {`${tool.description} Answer each item honestly to get a score and general interpretation — this is for awareness only and doesn't replace a psychiatric assessment.`}
          </p>
          <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-5 leading-7 text-amber-950">
            If you have thoughts of suicide, self-harm, overdose, violence,
            severe confusion or immediate danger, contact local emergency
            services or the nearest hospital now.
          </div>
        </div>
      </section>

      <SingleScreeningTool tool={tool} />

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-14 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-950">Frequently Asked Questions</h2>
          <div className="mt-8 space-y-5">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-lg border border-slate-200 p-5">
                <h3 className="font-bold text-blue-950">{faq.question}</h3>
                <p className="mt-2 leading-7 text-slate-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
