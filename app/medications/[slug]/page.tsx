import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { medications, getMedication } from "../../data/medications";

const siteUrl = "https://drkushalkharel.com.np";

export function generateStaticParams() {
  return medications.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const med = getMedication(slug);
  if (!med) return {};

  const title = `${med.name}: Uses, Side Effects & What to Know`;
  return {
    title,
    description: med.shortDescription,
    alternates: { canonical: `/medications/${med.slug}` },
    keywords: [med.name, `${med.name} Nepal`, `${med.name} side effects`, "Dr Kushal Kharel", "Psychiatrist Kathmandu"],
    openGraph: {
      title,
      description: med.shortDescription,
      url: `${siteUrl}/medications/${med.slug}`,
      siteName: "Dr. Kushal Kharel",
      images: [{ url: "/images/doctor.png", width: 1200, height: 630 }],
      type: "article",
    },
  };
}

export default async function MedicationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const med = getMedication(slug);
  if (!med) notFound();

  const pageUrl = `${siteUrl}/medications/${med.slug}`;

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: med.name,
    description: med.shortDescription,
    url: pageUrl,
    inLanguage: "en",
    about: { "@type": "Drug", name: med.name, drugClass: med.category },
    medicalAudience: ["Patient", "Caregiver"],
    reviewedBy: {
      "@type": "Physician",
      name: "Dr. Kushal Kharel",
      medicalSpecialty: "Psychiatry",
      telephone: "+9779861800547",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: med.faqs.map((faq) => ({
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
      { "@type": "ListItem", position: 2, name: "Medications", item: `${siteUrl}/medications` },
      { "@type": "ListItem", position: 3, name: med.name, item: pageUrl },
    ],
  };

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 pb-12 pt-28 lg:px-8 lg:pt-32">
          <Link href="/medications" className="font-semibold text-sage-700">&larr; Medication Information</Link>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[3px] text-sage-700">{med.category}</p>
          <h1 className="mt-5 text-4xl font-bold leading-tight text-stone-950 md:text-6xl">{med.name}</h1>
          <p id="med-quick-answer" className="mt-6 max-w-3xl text-lg leading-8 text-stone-600">{med.shortDescription}</p>
        </div>
      </section>

      <article className="mx-auto max-w-4xl space-y-6 px-6 py-14 lg:px-8">
        <div className="rounded-lg border border-amber-200 bg-amber-50 p-5 leading-7 text-amber-950">
          This page is general education, not an individual prescription or medical advice. What medication, if any, is right for you is decided in a personal psychiatric consultation.
        </div>

        <Section title={`What are ${med.name}?`}>
          <p>{med.whatItIs}</p>
        </Section>

        <Section title={`What is ${med.name} commonly used for?`}>
          <ul className="list-disc space-y-2 pl-5">
            {med.commonIndications.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </Section>

        <Section title={`What are the common side effects of ${med.name}?`}>
          <ul className="list-disc space-y-2 pl-5">
            {med.commonSideEffects.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </Section>

        <Section title={`What precautions and warnings apply to ${med.name}?`}>
          <ul className="list-disc space-y-2 pl-5">
            {med.precautions.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </Section>

        <Section title={`How long does ${med.name} take to work?`}>
          <p>{med.timeToEffect}</p>
        </Section>

        <Section title={`Stopping or changing ${med.name}`}>
          <p>{med.discontinuation}</p>
        </Section>

        <section className="rounded-lg border border-red-200 bg-red-50 p-6 leading-7 text-red-950 shadow-sm md:p-8">
          <h2 className="text-3xl font-bold text-red-900">When to seek urgent care</h2>
          <p className="mt-5">{med.urgentCare}</p>
        </section>

        <Section title="Why treatment is individualized">
          <p>{med.individualizedNote}</p>
        </Section>

        <Section title="Frequently asked questions">
          <div className="space-y-5">
            {med.faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="font-bold text-sage-950">{faq.question}</h3>
                <p className="mt-1">{faq.answer}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="References">
          <ol className="list-decimal space-y-2 pl-5">
            {med.references.map((ref) => <li key={ref}>{ref}</li>)}
          </ol>
        </Section>

        <section className="rounded-lg bg-sage-950 p-8 text-white">
          <h2 className="text-3xl font-bold">Have questions about your medication?</h2>
          <p className="mt-4 max-w-3xl leading-8 text-sage-100">
            Book a consultation to discuss whether this or another treatment is right for your specific situation.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a href="tel:+9779861800547" className="rounded-lg bg-white px-6 py-3 font-semibold text-sage-950">+977 9861800547</a>
            <Link href="/medications" className="rounded-lg border border-white/50 px-6 py-3 font-semibold text-white">More medications</Link>
          </div>
        </section>
      </article>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-lg border border-stone-200 bg-white p-6 shadow-sm md:p-8">
      <h2 className="text-3xl font-bold text-sage-950">{title}</h2>
      <div className="mt-5 space-y-4 text-lg leading-9 text-stone-700">{children}</div>
    </section>
  );
}
