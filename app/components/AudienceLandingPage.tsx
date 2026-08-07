import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Phone, type LucideIcon } from "lucide-react";
import type { AudiencePage } from "../data/audiences";

const siteUrl = "https://drkushalkharel.com.np";

export default function AudienceLandingPage({
  page,
  icon: Icon,
}: {
  page: AudiencePage;
  icon: LucideIcon;
}) {
  const pageUrl = `${siteUrl}/${page.slug}`;

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: page.title,
    description: page.shortDescription,
    url: pageUrl,
    inLanguage: "en",
    audience: {
      "@type": "PeopleAudience",
      name: page.headline,
    },
    medicalAudience: ["Patient", "MedicalAudience"],
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
    mainEntity: page.faqs.map((faq) => ({
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
      { "@type": "ListItem", position: 2, name: page.title, item: pageUrl },
    ],
  };

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 pb-14 pt-28 lg:px-8 lg:pt-32">
          <Link href="/" className="font-semibold text-sage-700">
            &larr; Back to home
          </Link>
          <span className="mt-8 flex h-14 w-14 items-center justify-center rounded-full bg-sage-100 text-sage-800">
            <Icon size={26} aria-hidden="true" />
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight text-stone-950 md:text-6xl">
            {page.headline}
          </h1>
          <p id="audience-quick-answer" className="mt-6 max-w-3xl text-lg leading-8 text-stone-600">
            {page.intro}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="tel:+9779861800547"
              className="inline-flex items-center gap-3 rounded-lg bg-sage-700 px-6 py-3 font-bold text-white transition hover:bg-sage-800"
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
        </div>
      </section>

      {page.diagram && (
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-6 py-14 lg:px-8">
            <div className="overflow-hidden rounded-lg border border-stone-200 shadow-sm">
              <Image
                src={page.diagram.src}
                alt={page.diagram.alt}
                width={1408}
                height={768}
                className="w-full"
              />
            </div>
            <p className="mt-3 text-center text-sm text-stone-500">{page.diagram.caption}</p>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <h2 className="text-3xl font-bold text-stone-950">Who this is for</h2>
            <ul className="mt-6 space-y-3">
              {page.whoThisIsFor.map((item) => (
                <li key={item} className="rounded-lg border border-stone-200 bg-white p-4 leading-7 text-stone-700 shadow-sm">
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-lg border border-amber-200 bg-amber-50 p-5 leading-7 text-amber-950">
              {page.practicalNote}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-stone-950">Common concerns</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {page.commonConcerns.map((concern) => (
                <div
                  key={concern}
                  className="rounded-lg border border-stone-200 bg-white p-5 font-semibold text-stone-800 shadow-sm"
                >
                  {concern}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-14 lg:px-8">
          <h2 className="text-3xl font-bold text-stone-950">Frequently Asked Questions</h2>
          <div className="mt-8 space-y-5">
            {page.faqs.map((faq) => (
              <div key={faq.question} className="rounded-lg border border-stone-200 p-5">
                <h3 className="font-bold text-sage-950">{faq.question}</h3>
                <p className="mt-2 leading-7 text-stone-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 pb-14 lg:px-8">
          <h2 className="text-2xl font-bold text-stone-950">Related services</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <Link href="/counselling-in-nepal" className="rounded-lg border border-stone-200 p-4 font-semibold text-sage-800 transition hover:border-sage-300 hover:bg-sage-50">
              Counselling &amp; psychiatric services
            </Link>
            <Link href="/conditions" className="rounded-lg border border-stone-200 p-4 font-semibold text-sage-800 transition hover:border-sage-300 hover:bg-sage-50">
              Conditions treated
            </Link>
            <Link href="/screening" className="rounded-lg border border-stone-200 p-4 font-semibold text-sage-800 transition hover:border-sage-300 hover:bg-sage-50">
              Mental health screening
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-sage-950 py-16 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold">Ready to book a consultation?</h2>
          <p className="mt-4 text-lg leading-8 text-sage-100">
            In-person at the Kalanki clinic in Kathmandu, or online from
            anywhere.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="tel:+9779861800547"
              className="rounded-lg bg-white px-8 py-4 font-semibold text-sage-950"
            >
              +977 9861800547
            </a>
            <Link
              href="/conditions"
              className="rounded-lg border border-white/50 px-8 py-4 font-semibold text-white"
            >
              Explore conditions treated
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
