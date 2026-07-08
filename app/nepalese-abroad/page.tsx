import type { Metadata } from "next";
import Link from "next/link";
import { Globe2, Phone } from "lucide-react";
import { abroadGuides } from "../data/abroad";
import { buildHowToJsonLd } from "../lib/schema";

const siteUrl = "https://drkushalkharel.com.np";
const pageUrl = `${siteUrl}/nepalese-abroad`;
const title = "Online Psychiatric Consultation for Nepalese Abroad";
const description =
  "Confidential online psychiatric consultation for Nepalese living abroad — anxiety, depression, addiction and family concerns, with country-specific guidance for the USA, UK, Australia, Canada, Gulf and more.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/nepalese-abroad",
  },
  keywords: [
    "Online psychiatric consultation for Nepalese abroad",
    "Nepali psychiatrist online",
    "Nepalese mental health abroad",
    "Online psychiatrist for Nepali diaspora",
  ],
  openGraph: {
    title,
    description,
    url: pageUrl,
    siteName: "Dr. Kushal Kharel",
    images: [{ url: "/images/doctor.png", width: 1200, height: 630 }],
    type: "website",
  },
};

const faqs = [
  {
    question: "Can Nepalese living abroad book an online psychiatric consultation?",
    answer:
      "Yes. Dr. Kushal Kharel provides online psychiatric consultation by phone or video call for Nepalese living in the USA, UK, Australia, Canada, the Gulf and other countries.",
  },
  {
    question: "How does an online consultation work across time zones?",
    answer:
      "Message on WhatsApp with your country and preferred times, and a slot is arranged that works across the time difference. Follow-up messages can be exchanged asynchronously between live sessions.",
  },
  {
    question: "Can prescriptions be provided during an online consultation from abroad?",
    answer:
      "Where clinically appropriate, a prescription can be provided, though filling it depends on your local country's pharmacy and prescribing regulations, which is discussed individually.",
  },
  {
    question: "What if I have an urgent mental health crisis while abroad?",
    answer:
      "Contact local emergency services or the nearest hospital immediately for any urgent safety risk. Online consultation is for ongoing psychiatric care, not a substitute for local emergency response.",
  },
  {
    question: "Is the consultation conducted in Nepali or English?",
    answer:
      "Consultations can be conducted in Nepali, English, or a mix of both, whichever you're most comfortable with.",
  },
];

export default function NepaleseAbroadHubPage() {
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: title,
    description,
    url: pageUrl,
    inLanguage: "en",
    audience: {
      "@type": "PeopleAudience",
      name: "Nepalese living abroad",
    },
    medicalAudience: ["Patient", "MedicalAudience"],
    reviewedBy: {
      "@type": "Physician",
      name: "Dr. Kushal Kharel",
      medicalSpecialty: "Psychiatry",
      telephone: "+9779861800547",
    },
    relatedLink: abroadGuides.map((guide) => `${siteUrl}/nepalese-abroad/${guide.slug}`),
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

  const howToJsonLd = buildHowToJsonLd({
    id: `${pageUrl}#how-to`,
    name: "How to Book an Online Consultation from Abroad",
    description: "Steps for Nepalese living abroad to book and complete an online psychiatric consultation.",
    steps: [
      {
        name: "Message with your country and availability",
        text: "Send a WhatsApp message to +977 9861800547 with your country of residence and preferred times, so a slot can be arranged across the time difference.",
      },
      {
        name: "Join the call at the scheduled time",
        text: "Connect by phone or video call at the agreed time. Dr. Kushal Kharel reviews your symptoms, history and current medications.",
      },
      {
        name: "Discuss diagnosis and treatment",
        text: "You'll discuss a diagnosis and treatment plan together, with a prescription provided where clinically appropriate and permitted in your country.",
      },
      {
        name: "Follow up asynchronously if needed",
        text: "Between live sessions, follow-up questions can be exchanged by message, working around the time difference.",
      },
    ],
  });

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 pb-14 pt-28 lg:px-8 lg:pt-32">
          <Link href="/" className="font-semibold text-blue-700">
            &larr; Back to home
          </Link>
          <span className="mt-8 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-800">
            <Globe2 size={26} aria-hidden="true" />
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight text-slate-950 md:text-6xl">
            Online psychiatric consultation for Nepalese living abroad
          </h1>
          <p id="abroad-hub-quick-answer" className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Nepalese students, workers and families abroad can book a
            confidential online psychiatric consultation with Dr. Kushal
            Kharel, in Nepali or English, for anxiety, depression, addiction,
            sleep problems and family concerns.
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
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-950">Find guidance for your country</h2>
        <p className="mt-4 max-w-3xl leading-8 text-slate-600">
          Each guide below covers common mental health concerns for Nepalese
          in that country and how to get in touch.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {abroadGuides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/nepalese-abroad/${guide.slug}`}
              className="block rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
            >
              <p className="text-sm font-semibold uppercase tracking-[2px] text-blue-700">{guide.region}</p>
              <h3 className="mt-4 text-2xl font-bold text-slate-950">{guide.country}</h3>
              <p className="mt-3 leading-7 text-slate-600">{guide.headline}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-14 lg:px-8">
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

      <section className="bg-blue-950 py-16 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold">Nepali patient outside Nepal?</h2>
          <p className="mt-4 text-lg leading-8 text-blue-100">
            Call or message Dr. Kushal Kharel for guidance. Urgent safety
            issues should be handled through local emergency services first.
          </p>
          <a
            href="tel:+9779861800547"
            className="mt-8 inline-block rounded-lg bg-white px-8 py-4 font-semibold text-blue-950"
          >
            Call +977 9861800547
          </a>
        </div>
      </section>
    </main>
  );
}
