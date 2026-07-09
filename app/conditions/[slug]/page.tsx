import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { conditions, getCondition } from "../../data/conditions";
import { screeningTools } from "../../data/screening";
import {
  buildHowToJsonLd,
  buildMedicalConditionJsonLd,
  buildQuickFacts,
  buildSpeakableSpec,
} from "../../lib/schema";

const siteUrl = "https://drkushalkharel.com.np";

const baseToc = [
  { id: "overview", label: "Overview" },
  { id: "definition", label: "Definition" },
  { id: "causes", label: "Causes" },
  { id: "risk-factors", label: "Risk Factors" },
  { id: "brain-mechanisms", label: "Brain Mechanisms" },
  { id: "symptoms", label: "Symptoms" },
  { id: "diagnostic-criteria", label: "Diagnostic Criteria" },
  { id: "differential-diagnosis", label: "Differential Diagnosis" },
  { id: "investigations", label: "Investigations" },
  { id: "treatment", label: "Treatment" },
  { id: "treatment-at-a-glance", label: "Treatment at a Glance" },
  { id: "medications", label: "Medications" },
  { id: "psychotherapy", label: "Psychotherapy" },
  { id: "lifestyle-advice", label: "Lifestyle Advice" },
  { id: "prognosis", label: "Prognosis" },
  { id: "prevention", label: "Prevention" },
  { id: "family-guidance", label: "Family Guidance" },
];

const howToTocItem = { id: "how-to", label: "Step-by-Step Guide" };

const endToc = [
  { id: "faqs", label: "FAQs" },
  { id: "myth-vs-fact", label: "Myth vs Fact" },
  { id: "urgent-care", label: "When to Seek Urgent Care" },
  { id: "references", label: "References" },
];

export function generateStaticParams() {
  return conditions.map((condition) => ({ slug: condition.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const condition = getCondition(slug);

  if (!condition) {
    return {};
  }

  const title = `${condition.title}: ${condition.titleSuffix ?? "Symptoms, Causes, Diagnosis & Treatment"}`;

  return {
    title,
    description: condition.shortDescription,
    alternates: {
      canonical: `/conditions/${condition.slug}`,
    },
    keywords: [
      condition.title,
      `${condition.title} symptoms`,
      `${condition.title} treatment Nepal`,
      `${condition.title} causes`,
      `${condition.title} diagnosis`,
      `best psychiatrist in Nepal for ${condition.title}`,
      `top psychiatrist in Kathmandu for ${condition.title}`,
      "Dr Kushal Kharel",
      "Psychiatrist Kathmandu",
      ...(condition.extraKeywords ?? []),
    ],
    openGraph: {
      title,
      description: condition.shortDescription,
      url: `${siteUrl}/conditions/${condition.slug}`,
      siteName: "Dr. Kushal Kharel",
      images: [
        {
          url: "/images/doctor.png",
          width: 1200,
          height: 630,
          alt: "Dr. Kushal Kharel - Consultant Psychiatrist",
        },
      ],
      locale: "en_US",
      type: "article",
    },
  };
}

export default async function ConditionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const condition = getCondition(slug);

  if (!condition) {
    notFound();
  }

  const pageUrl = `${siteUrl}/conditions/${condition.slug}`;
  const relatedConditions = conditions.filter(
    (item) => item.category === condition.category && item.slug !== condition.slug,
  );
  const toc = condition.howTo
    ? [...baseToc, howToTocItem, ...endToc]
    : [...baseToc, ...endToc];
  const quickFacts = buildQuickFacts(condition);
  const screeningTool = screeningTools.find((tool) => tool.relatedConditionSlug === condition.slug);

  const medicalConditionJsonLd = buildMedicalConditionJsonLd(condition, pageUrl);

  const webPageJsonLd = {
    "@type": "MedicalWebPage",
    name: condition.title,
    description: condition.shortDescription,
    url: pageUrl,
    inLanguage: "en",
    about: { "@id": `${pageUrl}#condition` },
    medicalAudience: ["Patient", "Caregiver", "MedicalAudience"],
    reviewedBy: {
      "@type": "Physician",
      name: "Dr. Kushal Kharel",
      medicalSpecialty: "Psychiatry",
      telephone: "+9779861800547",
    },
    speakable: buildSpeakableSpec(["#cond-quick-answer"]),
    relatedLink: relatedConditions.map((item) => `${siteUrl}/conditions/${item.slug}`),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: condition.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Conditions Library", item: `${siteUrl}/conditions` },
      { "@type": "ListItem", position: 3, name: condition.title, item: pageUrl },
    ],
  };

  const howToJsonLd = condition.howTo
    ? buildHowToJsonLd({
        id: `${pageUrl}#how-to`,
        name: condition.howTo.name,
        description: condition.howTo.description,
        totalTime: condition.howTo.totalTime,
        steps: condition.howTo.steps,
      })
    : null;

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [webPageJsonLd, medicalConditionJsonLd, ...(howToJsonLd ? [howToJsonLd] : [])],
          }),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 pb-12 pt-28 lg:px-8 lg:pt-32">
          <Link href="/conditions" className="font-semibold text-blue-700">
            &larr; Conditions Library
          </Link>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[3px] text-blue-700">
            {condition.category}
          </p>
          <h1 className="mt-5 text-4xl font-bold leading-tight text-slate-950 md:text-6xl">
            {condition.title}
          </h1>
          <p id="cond-quick-answer" className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            {condition.shortDescription}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="tel:+9779861800547" className="rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800">
              Book Appointment
            </a>
            <a
              href="https://wa.me/9779861800547"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-green-600 px-6 py-3 font-semibold text-green-700 transition hover:bg-green-600 hover:text-white"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <article className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[280px_1fr] lg:px-8">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="font-bold text-slate-950">On this page</h2>
            <nav className="mt-4 max-h-[70vh] space-y-1 overflow-y-auto">
              {toc.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block rounded-md px-3 py-1.5 text-sm font-semibold text-slate-600 transition hover:bg-blue-50 hover:text-blue-700"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        <div className="space-y-6">
          <div className="rounded-lg border border-amber-200 bg-amber-50 p-5 leading-7 text-amber-950">
            This page is for patient and family education only. It does not replace
            a professional psychiatric assessment. For a personal diagnosis or
            treatment plan, please consult Dr. Kushal Kharel or a qualified
            mental health professional directly.
          </div>

          <div className="rounded-lg border border-blue-200 bg-blue-50 p-6 md:p-8">
            <h2 className="text-xl font-bold uppercase tracking-[2px] text-blue-800">Key Facts</h2>
            <p className="mt-3 leading-7 text-slate-700">{quickFacts.extendedSummary}</p>
            <div className="mt-5 grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="font-bold text-blue-950">Common symptoms</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-700">
                  {quickFacts.keySymptoms.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-blue-950">Key risk factors</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-700">
                  {quickFacts.keyRiskFactors.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {screeningTool && (
            <div className="flex flex-col items-start gap-4 rounded-lg border border-green-200 bg-green-50 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-bold text-green-950">{screeningTool.searchQuestion}</p>
                <p className="mt-1 text-green-900">
                  Take a free, confidential self-rated screening for {condition.title.toLowerCase()}.
                </p>
              </div>
              <Link
                href={`/screening/${screeningTool.id}`}
                className="shrink-0 rounded-lg bg-green-700 px-5 py-3 font-semibold text-white transition hover:bg-green-800"
              >
                Take the screening
              </Link>
            </div>
          )}

          <Section id="overview" title="Overview">
            <p>{condition.overview}</p>
          </Section>

          <Section id="definition" title="Definition">
            <p>{condition.definition}</p>
          </Section>

          <Section id="causes" title="Causes">
            <p>{condition.causes}</p>
          </Section>

          <Section id="risk-factors" title="Risk Factors">
            <ul className="list-disc space-y-2 pl-5">
              {condition.riskFactors.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Section>

          <Section id="brain-mechanisms" title="Brain Mechanisms">
            <p>{condition.brainMechanisms}</p>
          </Section>

          <Section id="symptoms" title="Symptoms">
            <ul className="list-disc space-y-2 pl-5">
              {condition.symptoms.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Section>

          <Section id="diagnostic-criteria" title="Diagnostic Criteria (Patient-Friendly)">
            <ul className="list-disc space-y-2 pl-5">
              {condition.diagnosticCriteria.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Section>

          <Section id="differential-diagnosis" title="Differential Diagnosis">
            <p className="mb-4 text-base text-slate-500">
              Conditions a psychiatrist will consider and rule out before confirming this diagnosis:
            </p>
            <dl className="space-y-4">
              {condition.differentialDiagnosis.map((item) => (
                <div key={item.name}>
                  <dt className="font-bold text-blue-950">{item.name}</dt>
                  <dd className="mt-1">{item.note}</dd>
                </div>
              ))}
            </dl>
          </Section>

          <Section id="investigations" title="Investigations">
            <ul className="list-disc space-y-2 pl-5">
              {condition.investigations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Section>

          <Section id="treatment" title="Treatment">
            <p>{condition.treatmentOverview}</p>
          </Section>

          <Section id="treatment-at-a-glance" title="Treatment at a Glance">
            <div className="overflow-x-auto rounded-lg border border-slate-200">
              <table className="w-full min-w-[560px] text-left text-base">
                <thead className="bg-slate-100 text-slate-700">
                  <tr>
                    <th className="px-4 py-3 font-bold">Type</th>
                    <th className="px-4 py-3 font-bold">Approach</th>
                    <th className="px-4 py-3 font-bold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {condition.medications.map((item) => (
                    <tr key={`med-${item.name}`} className="border-t border-slate-200 odd:bg-white even:bg-slate-50">
                      <td className="px-4 py-3 font-semibold text-blue-950">Medication</td>
                      <td className="px-4 py-3">{item.name}</td>
                      <td className="px-4 py-3 text-slate-600">{item.note}</td>
                    </tr>
                  ))}
                  {condition.psychotherapy.map((item) => (
                    <tr key={`psy-${item.name}`} className="border-t border-slate-200 odd:bg-white even:bg-slate-50">
                      <td className="px-4 py-3 font-semibold text-blue-950">Psychotherapy</td>
                      <td className="px-4 py-3">{item.name}</td>
                      <td className="px-4 py-3 text-slate-600">{item.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          <Section id="medications" title="Medications">
            <dl className="space-y-4">
              {condition.medications.map((item) => (
                <div key={item.name}>
                  <dt className="font-bold text-blue-950">{item.name}</dt>
                  <dd className="mt-1">{item.note}</dd>
                </div>
              ))}
            </dl>
          </Section>

          <Section id="psychotherapy" title="Psychotherapy">
            <dl className="space-y-4">
              {condition.psychotherapy.map((item) => (
                <div key={item.name}>
                  <dt className="font-bold text-blue-950">{item.name}</dt>
                  <dd className="mt-1">{item.note}</dd>
                </div>
              ))}
            </dl>
          </Section>

          <Section id="lifestyle-advice" title="Lifestyle Advice">
            <ul className="list-disc space-y-2 pl-5">
              {condition.lifestyleAdvice.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Section>

          <Section id="prognosis" title="Prognosis">
            <p>{condition.prognosis}</p>
          </Section>

          <Section id="prevention" title="Prevention">
            <ul className="list-disc space-y-2 pl-5">
              {condition.prevention.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Section>

          <Section id="family-guidance" title="Family Guidance">
            <p>{condition.familyGuidance}</p>
          </Section>

          {condition.howTo && (
            <Section id="how-to" title={condition.howTo.name}>
              <p>{condition.howTo.description}</p>
              <ol className="mt-4 space-y-4">
                {condition.howTo.steps.map((step, index) => (
                  <li key={step.name} className="rounded-lg border border-slate-200 p-4">
                    <p className="font-bold text-blue-950">
                      Step {index + 1}: {step.name}
                    </p>
                    <p className="mt-1">{step.text}</p>
                  </li>
                ))}
              </ol>
            </Section>
          )}

          <Section id="faqs" title="Frequently Asked Questions">
            <div className="space-y-5">
              {condition.faqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="font-bold text-blue-950">{faq.question}</h3>
                  <p className="mt-1">{faq.answer}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section id="myth-vs-fact" title="Myth vs Fact">
            <div className="space-y-4">
              {condition.mythsVsFacts.map((item) => (
                <div key={item.myth} className="rounded-lg border border-slate-200 p-4">
                  <p><span className="font-bold text-red-700">Myth: </span>{item.myth}</p>
                  <p className="mt-2"><span className="font-bold text-green-700">Fact: </span>{item.fact}</p>
                </div>
              ))}
            </div>
          </Section>

          <section id="urgent-care" className="rounded-lg border border-red-200 bg-red-50 p-6 leading-7 text-red-950 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-red-900">When to Seek Urgent Care</h2>
            <p className="mt-5">{condition.urgentCare}</p>
          </section>

          <Section id="references" title="References">
            <ol className="list-decimal space-y-2 pl-5">
              {condition.references.map((ref) => (
                <li key={ref}>{ref}</li>
              ))}
            </ol>
          </Section>

          {relatedConditions.length > 0 && (
            <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-3xl font-bold text-blue-950">
                Related {condition.category}
              </h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {relatedConditions.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/conditions/${item.slug}`}
                    className="rounded-lg border border-slate-200 p-4 font-semibold text-blue-800 transition hover:border-blue-300 hover:bg-blue-50"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </section>
          )}

          <section className="rounded-lg bg-blue-950 p-8 text-white">
            <h2 className="text-3xl font-bold">Need professional help?</h2>
            <p className="mt-4 max-w-3xl leading-8 text-blue-100">
              If these symptoms are affecting your sleep, work, relationships or
              daily functioning, a psychiatric assessment can help clarify the
              diagnosis and treatment plan.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a href="tel:+9779861800547" className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-950">
                +977 9861800547
              </a>
              <Link href="/conditions" className="rounded-lg border border-white/50 px-6 py-3 font-semibold text-white">
                More conditions
              </Link>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <h2 className="text-3xl font-bold text-blue-950">{title}</h2>
      <div className="mt-5 space-y-4 text-lg leading-9 text-slate-700">{children}</div>
    </section>
  );
}
