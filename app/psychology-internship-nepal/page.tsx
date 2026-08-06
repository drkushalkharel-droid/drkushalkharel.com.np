import type { Metadata } from "next";
import Link from "next/link";
import { GraduationCap, Mail, MessageCircle, Phone } from "lucide-react";

const siteUrl = "https://drkushalkharel.com.np";
const pageUrl = `${siteUrl}/psychology-internship-nepal`;
const title = "Free Psychology & Social Work Internship in Kathmandu, Nepal";
const description =
  "Dr. Kushal Kharel offers a free internship for psychology and social work students at his psychiatric clinic in Kalanki, Kathmandu. Learn what it involves and how to apply.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/psychology-internship-nepal" },
  keywords: [
    "Psychology internship Nepal",
    "Social work internship Kathmandu",
    "Free psychiatry internship Nepal",
    "Psychology student internship Kathmandu",
    "Clinical internship psychiatry Nepal",
  ],
  openGraph: {
    title,
    description,
    url: pageUrl,
    siteName: "Dr. Kushal Kharel",
    images: [{ url: "/images/doctor.png", width: 1200, height: 630, alt: "Dr. Kushal Kharel, Consultant Psychiatrist in Kathmandu" }],
    type: "article",
  },
  twitter: { card: "summary_large_image", title, description, images: ["/images/doctor.png"] },
};

const whoCanApply = [
  "Undergraduate or postgraduate psychology students seeking clinical exposure",
  "Social work students needing a placement or field-work internship",
  "Students who can commit to regular attendance for the agreed internship period",
  "Students based in or able to travel to Kathmandu for in-person clinic hours",
];

const whatItInvolves = [
  "Observing psychiatric consultations with patient consent, alongside Dr. Kushal Kharel",
  "Exposure to psychiatric history-taking, mental state examination and case discussion",
  "Involvement in psychoeducation material and patient-facing resources",
  "Learning how assessment, diagnosis and treatment planning work in real clinical practice",
  "Supervised discussion and feedback with Dr. Kushal Kharel throughout the placement",
];

const faqs = [
  {
    question: "Is the internship really free?",
    answer:
      "Yes. Dr. Kushal Kharel offers this internship free of cost to psychology and social work students; there is no fee to apply or to participate.",
  },
  {
    question: "Who is eligible to apply?",
    answer:
      "Psychology and social work students, whether undergraduate or postgraduate, who need clinical exposure or a field-work placement and can attend regularly for the agreed period.",
  },
  {
    question: "Is the internship in person or online?",
    answer:
      "The internship takes place in person at the clinic in Kalanki, Kathmandu, since it involves direct clinical observation and supervised learning that isn't practical to deliver remotely.",
  },
  {
    question: "How long does the internship last?",
    answer:
      "Duration is arranged individually based on your academic requirements, your institution's placement guidelines, and current availability at the clinic. Mention your required duration when you get in touch.",
  },
  {
    question: "Will I have direct contact with patients?",
    answer:
      "Any observation of consultations happens only with patient consent and under Dr. Kushal Kharel's direct supervision, in line with standard confidentiality and ethical practice in psychiatric care.",
  },
  {
    question: "How do I apply?",
    answer:
      "Contact the clinic by phone, WhatsApp or email with your academic background, institution, and the placement duration you need, and Dr. Kushal Kharel will discuss current availability with you.",
  },
];

export default function PsychologyInternshipPage() {
  const programJsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalProgram",
    name: "Psychology and Social Work Internship",
    description,
    url: pageUrl,
    provider: { "@id": `${siteUrl}#clinic` },
    programType: "Internship",
    occupationalCategory: ["Psychology", "Social Work"],
    educationalProgramMode: "on-site",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "NPR",
    },
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
      { "@type": "ListItem", position: 2, name: "Psychology & Social Work Internship", item: pageUrl },
    ],
  };

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(programJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }} />

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 pb-14 pt-28 lg:px-8 lg:pt-32">
          <Link href="/" className="font-semibold text-sage-700">&larr; Back to home</Link>
          <span className="mt-8 flex h-14 w-14 items-center justify-center rounded-full bg-sage-100 text-sage-800">
            <GraduationCap size={26} aria-hidden="true" />
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight text-stone-950 md:text-6xl">
            Free Psychology &amp; Social Work Internship in Kathmandu
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-600">
            Dr. Kushal Kharel offers a free clinical internship at his psychiatric clinic in Kalanki, Kathmandu, for psychology and social work students who need clinical exposure or a field-work placement. There is no fee to apply or participate.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="tel:+9779861800547" className="inline-flex items-center gap-3 rounded-lg bg-sage-700 px-6 py-3 font-bold text-white transition hover:bg-sage-800">
              <Phone size={20} aria-hidden="true" />
              Call +977 9861800547
            </a>
            <a href="https://wa.me/9779861800547" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-lg border border-green-600 px-6 py-3 font-bold text-green-700 transition hover:bg-green-600 hover:text-white">
              <MessageCircle size={20} aria-hidden="true" />
              WhatsApp to Inquire
            </a>
            <a href="mailto:drkushalkharel@gmail.com" className="inline-flex items-center gap-3 rounded-lg border border-stone-300 px-6 py-3 font-bold text-stone-800 transition hover:border-sage-300 hover:text-sage-800">
              <Mail size={20} aria-hidden="true" />
              Email to Apply
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-stone-950">Who can apply</h2>
            <ul className="mt-6 space-y-3">
              {whoCanApply.map((item) => (
                <li key={item} className="rounded-lg border border-stone-200 bg-white p-4 leading-7 text-stone-700 shadow-sm">
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-lg border border-amber-200 bg-amber-50 p-5 leading-7 text-amber-950">
              This internship is free of cost. There is no application fee, and no payment is required at any stage.
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-stone-950">What the internship involves</h2>
            <ul className="mt-6 space-y-3">
              {whatItInvolves.map((item) => (
                <li key={item} className="rounded-lg border border-stone-200 bg-white p-4 leading-7 text-stone-700 shadow-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-14 lg:px-8">
          <h2 className="text-3xl font-bold text-stone-950">How to apply</h2>
          <p className="mt-4 max-w-3xl leading-8 text-stone-600">
            Contact the clinic by phone, WhatsApp or email with your academic background, institution, and the placement duration your course requires. Dr. Kushal Kharel will discuss current availability and next steps directly with you.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-14 lg:px-8">
          <h2 className="text-3xl font-bold text-stone-950">Frequently Asked Questions</h2>
          <div className="mt-8 space-y-5">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-lg border border-stone-200 p-5">
                <h3 className="font-bold text-sage-950">{faq.question}</h3>
                <p className="mt-2 leading-7 text-stone-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sage-950 py-16 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold">Ready to apply for the internship?</h2>
          <p className="mt-4 text-lg leading-8 text-sage-100">
            Get in touch with your academic background and required placement duration.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="tel:+9779861800547" className="rounded-lg bg-white px-8 py-4 font-semibold text-sage-950">
              +977 9861800547
            </a>
            <Link href="/contact" className="rounded-lg border border-white/50 px-8 py-4 font-semibold text-white">
              Contact page
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
