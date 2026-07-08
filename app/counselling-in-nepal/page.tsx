import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import { buildSpeakableSpec } from "../lib/schema";

const siteUrl = "https://drkushalkharel.com.np";
const pageUrl = `${siteUrl}/counselling-in-nepal`;
const title = "Counselling and Psychiatric Services in Nepal";
const description =
  "Looking for a counselor, counselling doctor or stress counseling in Nepal? Learn the difference between counselling, psychotherapy and psychiatric consultation, and how to get confidential support from Dr. Kushal Kharel in Kathmandu, in person or online.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/counselling-in-nepal",
  },
  keywords: [
    "counselling in Nepal",
    "counseling in Kathmandu",
    "depression counseling Nepal",
    "anxiety counseling Kathmandu",
    "stress counseling Nepal",
    "mental health counseling Nepal",
    "counselor near me",
    "psychiatrist and counseling services Nepal",
    "online counseling Nepal",
    "marriage counseling Kathmandu",
    "counselling doctor Nepal",
  ],
  openGraph: {
    title,
    description,
    url: pageUrl,
    siteName: "Dr. Kushal Kharel",
    images: [{ url: "/images/doctor.png", width: 1200, height: 630 }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/doctor.png"],
  },
};

const providers = [
  {
    name: "Psychiatrists",
    description:
      "Medical doctors who specialize in mental health. They can assess, diagnose, provide counselling and psychotherapy, and prescribe medication when clinically appropriate.",
  },
  {
    name: "Clinical psychologists",
    description:
      "Trained in psychological assessment and structured, evidence-based psychotherapy for diagnosed conditions, but do not prescribe medication.",
  },
  {
    name: "Counselling psychologists",
    description:
      "Trained specifically in supportive, talk-based counselling to help people cope with stress, difficult emotions and life transitions.",
  },
  {
    name: "Psychiatric social workers",
    description:
      "Support patients and families with practical, social and emotional needs alongside psychiatric treatment.",
  },
  {
    name: "Trained counsellors",
    description:
      "Provide guidance, active listening and coping support, often for milder or situational stress rather than a diagnosed psychiatric condition.",
  },
];

const comparisonRows = [
  {
    aspect: "Typical provider",
    counselling: "Trained counsellor, counselling psychologist or psychiatric social worker",
    psychotherapy: "Clinical psychologist, psychiatrist or trained psychotherapist",
    psychiatric: "Psychiatrist (a medical doctor)",
  },
  {
    aspect: "Medications",
    counselling: "Not prescribed",
    psychotherapy: "Not prescribed, unless the therapist is also a psychiatrist",
    psychiatric: "Can be prescribed when clinically appropriate",
  },
  {
    aspect: "Scope",
    counselling: "Support, guidance and coping strategies for everyday stress and adjustment",
    psychotherapy: "Structured, evidence-based treatment for a diagnosed psychological condition",
    psychiatric: "Full medical assessment, diagnosis and treatment planning, including medication and referral",
  },
  {
    aspect: "Typical methods",
    counselling: "Active listening, guidance, coping skills, referral when needed",
    psychotherapy: "CBT, ERP, IPT and other structured therapy models",
    psychiatric: "Clinical interview, diagnostic assessment, medication management, therapy or referral",
  },
];

const sessionSteps = [
  "Listening to your concerns without judgment",
  "Understanding your symptoms and how long they've been present",
  "Identifying stressors contributing to how you feel",
  "Building practical coping strategies",
  "Discussing a treatment plan, including whether therapy, medication or referral is appropriate",
  "Scheduling follow-up sessions to track progress",
];

const helpfulFor = [
  "Anxiety disorders",
  "Depression",
  "Stress",
  "Panic attacks",
  "Relationship difficulties",
  "Academic stress",
  "Workplace stress",
  "Grief and bereavement",
  "Adjustment disorders",
];

const faqs = [
  {
    question: "What is counselling?",
    answer:
      "Counselling is a supportive, talk-based process where a trained professional listens to your concerns, helps you understand what's contributing to your stress, and helps you build practical coping strategies — often the first step people take during a difficult time.",
  },
  {
    question: "Who provides counselling in Nepal?",
    answer:
      "In Nepal, counselling may be provided by psychiatrists, clinical psychologists, counselling psychologists, psychiatric social workers, and trained counsellors, depending on the setting and the complexity of the concern.",
  },
  {
    question: "What is the difference between counselling and psychiatry?",
    answer:
      "Counselling focuses on supportive, talk-based guidance and coping strategies, while psychiatry is medical care provided by a doctor who can diagnose conditions and prescribe medication when needed, in addition to therapy.",
  },
  {
    question: "Can psychiatrists provide counselling?",
    answer:
      "Yes. Psychiatrists like Dr. Kushal Kharel can provide counselling and psychotherapy directly, and can also prescribe medication when a diagnosed condition needs it — offering both services in one consultation.",
  },
  {
    question: "Where can I receive counselling in Kathmandu?",
    answer:
      "Dr. Kushal Kharel provides counselling and psychiatric consultation at his clinic in Kalanki, Kathmandu, as well as online for patients elsewhere in Nepal or abroad.",
  },
  {
    question: "Does counselling mean I am mentally ill?",
    answer:
      "No. Many people seek counselling for everyday stress, grief, relationship difficulties or a major life change, not only for a diagnosed psychiatric condition — seeking support early is a sign of self-awareness, not illness.",
  },
  {
    question: "Is counselling confidential?",
    answer:
      "Yes. Counselling and psychiatric consultations are confidential and handled with professional discretion, in line with standard medical ethics.",
  },
  {
    question: "Will I need medicines?",
    answer:
      "Not necessarily. Many concerns respond well to counselling or psychotherapy alone. Medication is considered only when a diagnosed condition would benefit from it, and is always discussed with you first.",
  },
  {
    question: "How many sessions are required?",
    answer:
      "This varies by person and concern — some people benefit from just a few sessions of support during a stressful period, while others with a diagnosed condition may need a longer, structured course of treatment.",
  },
  {
    question: "Can counselling be done online?",
    answer:
      "Yes. Online counselling and psychiatric consultation are available by phone or video call, suitable for many concerns, especially follow-up sessions and ongoing support.",
  },
  {
    question: "Should I see a counsellor or psychiatrist?",
    answer:
      "If your concern is mild or situational, a counsellor may be enough. If symptoms are persistent, severe, affecting daily functioning, or you're unsure, a psychiatric consultation can assess your situation and recommend the right level of care.",
  },
];

export default function CounsellingInNepalPage() {
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: title,
    description,
    url: pageUrl,
    inLanguage: "en",
    medicalAudience: ["Patient", "Caregiver", "MedicalAudience"],
    about: [{ "@id": `${siteUrl}#clinic` }],
    author: { "@id": `${siteUrl}#psychiatrist` },
    reviewedBy: { "@id": `${siteUrl}#psychiatrist` },
    speakable: buildSpeakableSpec(["#counselling-quick-answer"]),
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
      { "@type": "ListItem", position: 2, name: title, item: pageUrl },
    ],
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 pb-14 pt-28 lg:px-8 lg:pt-32">
          <Link href="/" className="font-semibold text-blue-700">
            &larr; Back to home
          </Link>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[3px] text-blue-700">
            Counselling &amp; Psychiatric Care
          </p>
          <h1 className="mt-5 text-4xl font-bold leading-tight text-slate-950 md:text-6xl">
            Counselling and Psychiatric Services in Nepal
          </h1>
          <p id="counselling-quick-answer" className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Many people searching for a &ldquo;counselor,&rdquo; &ldquo;counselling doctor&rdquo; or
            &ldquo;stress counseling&rdquo; in Nepal are really looking for help with anxiety, depression
            or overwhelming stress — and aren&apos;t sure whether they need a counsellor, a psychologist
            or a psychiatrist. This guide explains what counselling is, who provides it, how it differs
            from psychiatric consultation, and how to get started in Kathmandu, Nepal.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="tel:+9779861800547"
              className="inline-flex items-center gap-3 rounded-lg bg-blue-700 px-6 py-3 font-bold text-white transition hover:bg-blue-800"
            >
              <Phone size={20} aria-hidden="true" />
              Call +977 9861800547
            </a>
            <a
              href="https://wa.me/9779861800547"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-lg border border-green-600 px-6 py-3 font-bold text-green-700 transition hover:bg-green-600 hover:text-white"
            >
              <MessageCircle size={20} aria-hidden="true" />
              WhatsApp
            </a>
          </div>

          <div className="mt-10 rounded-lg border border-slate-200 bg-slate-50 p-5">
            <p className="font-bold text-slate-950">Dr. Kushal Kharel, MD Psychiatry</p>
            <p className="text-slate-600">Psychiatrist, KIST Medical College Teaching Hospital</p>
            <p className="text-slate-600">Kathmandu, Nepal</p>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-5xl space-y-6 px-6 py-14 lg:px-8">
        <Section title="What is Counselling?">
          <p>
            Counselling is a supportive, talk-based process where a trained
            professional listens to your concerns, helps you understand
            what&apos;s contributing to your stress, and helps you develop
            practical coping strategies. It&apos;s often the first step
            people take when going through a difficult time — such as
            stress, worry, grief, relationship difficulties or a major life
            change — even before a formal diagnosis is needed.
          </p>
        </Section>

        <Section title="Who Provides Counselling?">
          <div className="grid gap-4 sm:grid-cols-2">
            {providers.map((provider) => (
              <div key={provider.name} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <p className="font-bold text-blue-950">{provider.name}</p>
                <p className="mt-2 leading-7 text-slate-600">{provider.description}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="How Does Psychiatric Consultation Differ From Counselling?">
          <div className="overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full min-w-[720px] text-left text-base">
              <thead className="bg-slate-100 text-slate-700">
                <tr>
                  <th className="px-4 py-3 font-bold"></th>
                  <th className="px-4 py-3 font-bold">Counselling</th>
                  <th className="px-4 py-3 font-bold">Psychotherapy</th>
                  <th className="px-4 py-3 font-bold">Psychiatric Consultation</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.aspect} className="border-t border-slate-200 odd:bg-white even:bg-slate-50">
                    <td className="px-4 py-3 font-bold text-blue-950">{row.aspect}</td>
                    <td className="px-4 py-3 text-slate-600">{row.counselling}</td>
                    <td className="px-4 py-3 text-slate-600">{row.psychotherapy}</td>
                    <td className="px-4 py-3 text-slate-600">{row.psychiatric}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section title="What Happens During a Counselling Session?">
          <ul className="list-disc space-y-2 pl-5">
            {sessionSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>
        </Section>

        <Section title="Conditions Commonly Helped by Counselling">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {helpfulFor.map((item) => (
              <div key={item} className="rounded-lg border border-slate-200 bg-white p-4 font-semibold text-slate-800 shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </Section>

        <Section title="Frequently Asked Questions">
          <div className="space-y-5">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-lg border border-slate-200 p-5">
                <h3 className="font-bold text-blue-950">{faq.question}</h3>
                <p className="mt-2 leading-7 text-slate-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </Section>

        <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-bold text-blue-950">Explore related pages</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <Link href="/conditions/major-depressive-disorder" className="rounded-lg border border-slate-200 p-4 font-semibold text-blue-800 transition hover:border-blue-300 hover:bg-blue-50">
              Depression treatment
            </Link>
            <Link href="/anxiety" className="rounded-lg border border-slate-200 p-4 font-semibold text-blue-800 transition hover:border-blue-300 hover:bg-blue-50">
              Anxiety treatment
            </Link>
            <Link href="/#appointment-guide" className="rounded-lg border border-slate-200 p-4 font-semibold text-blue-800 transition hover:border-blue-300 hover:bg-blue-50">
              How online consultation works
            </Link>
            <Link href="/#about" className="rounded-lg border border-slate-200 p-4 font-semibold text-blue-800 transition hover:border-blue-300 hover:bg-blue-50">
              About Dr. Kushal Kharel
            </Link>
            <Link href="/expatriates-in-nepal" className="rounded-lg border border-slate-200 p-4 font-semibold text-blue-800 transition hover:border-blue-300 hover:bg-blue-50">
              Counselling for expatriates in Nepal
            </Link>
            <Link href="/english-speaking-psychiatrist" className="rounded-lg border border-slate-200 p-4 font-semibold text-blue-800 transition hover:border-blue-300 hover:bg-blue-50">
              English-speaking counselling &amp; psychiatry
            </Link>
            <Link href="/tourists-in-nepal" className="rounded-lg border border-slate-200 p-4 font-semibold text-blue-800 transition hover:border-blue-300 hover:bg-blue-50">
              Support for tourists in Nepal
            </Link>
          </div>
        </section>

        <section className="rounded-lg bg-blue-950 p-8 text-white">
          <h2 className="text-3xl font-bold">Ready to book a session?</h2>
          <p className="mt-4 max-w-3xl leading-8 text-blue-100">
            In-person at the Kalanki clinic in Kathmandu, or online from
            anywhere in Nepal or abroad.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a href="tel:+9779861800547" className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-950">
              +977 9861800547
            </a>
            <Link href="/#contact" className="rounded-lg border border-white/50 px-6 py-3 font-semibold text-white">
              Book an appointment
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <h2 className="text-3xl font-bold text-blue-950">{title}</h2>
      <div className="mt-5 space-y-4 text-lg leading-9 text-slate-700">{children}</div>
    </section>
  );
}
