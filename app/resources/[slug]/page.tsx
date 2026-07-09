import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Download } from "lucide-react";
import { resources, getResource } from "../../data/resources";
import { getCondition } from "../../data/conditions";
import { buildSpeakableSpec } from "../../lib/schema";
import PrintButton from "../PrintButton";

const siteUrl = "https://drkushalkharel.com.np";

export function generateStaticParams() {
  return resources.map((resource) => ({ slug: resource.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResource(slug);

  if (!resource) {
    return {};
  }

  const title = `${resource.title} (Free Download) | Dr. Kushal Kharel`;

  return {
    title,
    description: resource.shortDescription,
    alternates: {
      canonical: `/resources/${resource.slug}`,
    },
    keywords: [resource.title, resource.category, "Dr Kushal Kharel", "Psychiatrist Kathmandu"],
    openGraph: {
      title,
      description: resource.shortDescription,
      url: `${siteUrl}/resources/${resource.slug}`,
      siteName: "Dr. Kushal Kharel",
      images: [{ url: "/images/doctor.png", width: 1200, height: 630 }],
      type: "article",
    },
  };
}

export default async function ResourceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const resource = getResource(slug);

  if (!resource) {
    notFound();
  }

  const pageUrl = `${siteUrl}/resources/${resource.slug}`;
  const condition = resource.relatedConditionSlug ? getCondition(resource.relatedConditionSlug) : undefined;
  const pdfUrl = `/downloads/${resource.slug}.pdf`;

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: resource.title,
    description: resource.shortDescription,
    url: pageUrl,
    inLanguage: "en",
    medicalAudience: ["Patient", "Caregiver"],
    about: condition ? { "@id": `${siteUrl}/conditions/${condition.slug}#condition` } : resource.category,
    reviewedBy: {
      "@type": "Physician",
      name: "Dr. Kushal Kharel",
      medicalSpecialty: "Psychiatry",
      telephone: "+9779861800547",
    },
    speakable: buildSpeakableSpec(["#resource-quick-answer"]),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Patient Resources", item: `${siteUrl}/resources` },
      { "@type": "ListItem", position: 3, name: resource.title, item: pageUrl },
    ],
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 print:bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="bg-white print:hidden">
        <div className="mx-auto max-w-3xl px-6 pb-8 pt-28 lg:px-8 lg:pt-32">
          <Link href="/resources" className="font-semibold text-blue-700">
            &larr; All patient resources
          </Link>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[3px] text-blue-700">
            {resource.category}
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-6 py-10 lg:px-8 print:py-4">
        <h1 className="text-3xl font-bold leading-tight text-slate-950 md:text-4xl">
          {resource.title}
        </h1>
        <p id="resource-quick-answer" className="mt-4 leading-8 text-slate-600">
          {resource.shortDescription}
        </p>

        <div className="mt-6 flex flex-wrap gap-4 print:hidden">
          <a
            href={pdfUrl}
            download
            className="inline-flex items-center gap-2 rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
          >
            <Download size={20} aria-hidden="true" />
            Download PDF
          </a>
          <PrintButton />
        </div>

        <div className="mt-10 space-y-8 border-t border-slate-200 pt-8 print:border-slate-300">
          {resource.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-xl font-bold text-blue-950">{section.heading}</h2>
              {section.body && <p className="mt-3 leading-7 text-slate-700">{section.body}</p>}
              {section.bullets && (
                <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
                  {section.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {resource.urgentNote && (
          <div className="mt-10 rounded-lg border border-red-200 bg-red-50 p-5 leading-7 text-red-950 print:border-red-400">
            <p className="font-bold">When to seek urgent help</p>
            <p className="mt-2">{resource.urgentNote}</p>
          </div>
        )}

        <div className="mt-10 rounded-lg border border-slate-200 bg-slate-100 p-5 text-sm leading-6 text-slate-600 print:border-slate-300">
          <p>
            This material is for patient and family education only and does
            not replace individualized medical advice. For a personal
            diagnosis or treatment plan, consult Dr. Kushal Kharel or a
            qualified mental health professional.
          </p>
          <p className="mt-2 font-semibold text-slate-800">
            Dr. Kushal Kharel, MD Psychiatry — Consultant Psychiatrist, Kathmandu, Nepal
          </p>
          <p>Phone: +977 9861800547 · drkushalkharel@gmail.com · drkushalkharel.com.np</p>
        </div>

        {condition && (
          <div className="mt-6 print:hidden">
            <Link href={`/conditions/${condition.slug}`} className="font-semibold text-blue-700 hover:underline">
              Learn more about {condition.title} &rarr;
            </Link>
          </div>
        )}
      </article>
    </main>
  );
}
