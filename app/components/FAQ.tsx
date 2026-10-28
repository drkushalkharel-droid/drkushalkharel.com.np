import Link from "next/link";
import { HelpCircle } from "lucide-react";
import { faqs, homepageFaqs, type Faq } from "../data/faqs";
import { serializeJsonLd } from "../lib/schema";

// The FAQ section. On the homepage it shows the short list; /faq/ passes `items={faqs}`.
export default function FAQ({
  items = homepageFaqs,
  heading = "Common questions about psychiatric care in Kathmandu",
  showAllLink = true,
}: {
  items?: Faq[];
  heading?: string;
  showAllLink?: boolean;
}) {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section id="faq" className="bg-[#ebe9e1]/60 py-14 md:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqJsonLd) }}
      />
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[3px] text-sage-700">
            <HelpCircle size={16} aria-hidden="true" />
            Frequently Asked Questions
          </span>
          <h2 className="mt-5 text-4xl font-bold leading-tight text-stone-950 md:text-5xl">
            {heading}
          </h2>
        </div>

        <div className="mt-10 border-b border-stone-300">
          {items.map((faq) => (
            <details key={faq.question} className="group border-t border-stone-300 py-5">
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-sage-950 md:text-xl">
                <h3 className="font-semibold">{faq.question}</h3>
                <span className="text-2xl text-clay-700 transition group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="mt-3 max-w-3xl leading-8 text-stone-700">{faq.answer}</p>
            </details>
          ))}
        </div>

        {showAllLink && (
          <p className="mt-10 text-center">
            <Link
              href="/faq/"
              className="inline-flex rounded-lg border border-sage-300 bg-white px-6 py-3 font-semibold text-sage-800 transition hover:bg-sage-50"
            >
              See all {faqs.length} questions about seeing a psychiatrist
            </Link>
          </p>
        )}
      </div>
    </section>
  );
}
