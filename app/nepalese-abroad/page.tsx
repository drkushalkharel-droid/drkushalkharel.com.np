import type { Metadata } from "next";
import Link from "next/link";
import { Globe2, Mail, MessageCircle, Phone, Quote } from "lucide-react";
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
      "Contact local emergency services or the nearest hospital immediately for any urgent safety risk. For an urgent but non-emergency concern, such as a sudden relapse or a medication question, the Abroad Patient Help Desk above can be reached by call, WhatsApp or email. Online consultation is for ongoing psychiatric care, not a substitute for local emergency response.",
  },
  {
    question: "Is the consultation conducted in Nepali or English?",
    answer:
      "Consultations can be conducted in Nepali, English, or a mix of both, whichever you're most comfortable with.",
  },
];

const testimonials = [
  {
    quote:
      "I was looking for psychiatric support from Nepal while living abroad and came across Dr. Kushal's online consultation service. The entire experience was straightforward and comfortable. He took time to understand my concerns and provided clear explanations rather than giving a quick response. The flexibility of online consultation made it possible for me to seek professional help despite being outside Nepal.",
    attribution: "Confidential international patient",
  },
  {
    quote:
      "One of the things I appreciated most about my consultation was being able to speak openly without feeling judged. Dr. Kushal listened patiently and helped me organise my thoughts about what I had been experiencing. The online format was convenient and made it much easier to continue seeking mental health support from abroad.",
    attribution: "Confidential international patient",
  },
  {
    quote:
      "I had been postponing psychiatric consultation because I was unsure whether I really needed professional help. After speaking with Dr. Kushal, I understood my concerns differently. I found his approach calm, structured and non-judgemental, and the online consultation was easy to arrange from another country.",
    attribution: "Confidential international patient",
  },
  {
    quote:
      "I was able to discuss concerns that I had been keeping to myself for a long time. He listened carefully and explained the possible psychological and psychiatric factors involved in a way that I could understand. Receiving psychiatric counselling online was particularly useful for me because I currently live outside Nepal.",
    attribution: "Confidential international patient",
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
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 pb-14 pt-28 lg:px-8 lg:pt-32">
          <Link href="/" className="font-semibold text-sage-700">
            &larr; Back to home
          </Link>
          <span className="mt-8 flex h-14 w-14 items-center justify-center rounded-full bg-sage-100 text-sage-800">
            <Globe2 size={26} aria-hidden="true" />
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight text-stone-950 md:text-6xl">
            Online psychiatric consultation for Nepalese living abroad
          </h1>
          <p id="abroad-hub-quick-answer" className="mt-6 max-w-3xl text-lg leading-8 text-stone-600">
            Nepalese students, workers and families abroad can book a
            confidential online psychiatric consultation with Dr. Kushal
            Kharel, in Nepali or English, for anxiety, depression, addiction,
            sleep problems and family concerns.
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
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-amber-200 bg-amber-50">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <div className="flex flex-col gap-6 rounded-lg border border-amber-300 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between lg:p-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[3px] text-amber-700">
                Abroad Patient Help Desk
              </p>
              <h2 className="mt-3 text-2xl font-bold text-stone-950 md:text-3xl">
                Need help urgently while abroad?
              </h2>
              <p className="mt-3 max-w-2xl leading-7 text-stone-600">
                For an urgent psychiatric concern from abroad — a sudden
                relapse, a medication question, or a family member in
                distress — call, WhatsApp or email Dr. Kushal Kharel directly
                and mention your country and time zone. For any immediate
                danger to life, contact local emergency services first; this
                help desk is for urgent guidance, not emergency response.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:w-64">
              <a
                href="tel:+9779861800547"
                className="inline-flex items-center justify-center gap-3 rounded-lg bg-sage-700 px-6 py-3 font-bold text-white transition hover:bg-sage-800"
              >
                <Phone size={20} aria-hidden="true" />
                Call +977 9861800547
              </a>
              <a
                href="https://wa.me/9779861800547"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-lg border border-green-600 px-6 py-3 font-bold text-green-700 transition hover:bg-green-600 hover:text-white"
              >
                <MessageCircle size={20} aria-hidden="true" />
                WhatsApp
              </a>
              <a
                href="mailto:drkushalkharel@gmail.com"
                className="inline-flex items-center justify-center gap-3 rounded-lg border border-stone-300 px-6 py-3 font-semibold text-stone-700 transition hover:bg-stone-100"
              >
                <Mail size={20} aria-hidden="true" />
                Email
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <h2 className="text-3xl font-bold text-stone-950">Find guidance for your country</h2>
        <p className="mt-4 max-w-3xl leading-8 text-stone-600">
          Each guide below covers common mental health concerns for Nepalese
          in that country and how to get in touch.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {abroadGuides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/nepalese-abroad/${guide.slug}`}
              className="block rounded-lg border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-sage-300 hover:shadow-md"
            >
              <p className="text-sm font-semibold uppercase tracking-[2px] text-sage-700">{guide.region}</p>
              <h3 className="mt-4 text-2xl font-bold text-stone-950">{guide.country}</h3>
              <p className="mt-3 leading-7 text-stone-600">{guide.headline}</p>
            </Link>
          ))}
        </div>

        <div className="mt-10 rounded-lg border border-sage-200 bg-sage-50 p-6 sm:flex sm:items-center sm:justify-between">
          <div>
            <h3 className="text-xl font-bold text-stone-950">Recently moved back to Nepal?</h3>
            <p className="mt-2 max-w-2xl leading-7 text-stone-600">
              Readjusting after years abroad — reverse culture shock, family pressure, or uncertainty about what's next — is its own kind of difficult. See dedicated guidance for returnees.
            </p>
          </div>
          <Link
            href="/returning-to-nepal-after-abroad"
            className="mt-4 inline-flex shrink-0 rounded-lg bg-sage-700 px-6 py-3 font-semibold text-white transition hover:bg-sage-800 sm:mt-0"
          >
            Read the guide
          </Link>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <h2 className="text-3xl font-bold text-stone-950">What Nepalis abroad say</h2>
          <p className="mt-4 max-w-3xl leading-8 text-stone-600">
            Real, anonymised patient testimonials. Names and identifying
            details are withheld, with each patient&apos;s permission, to
            protect their privacy.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {testimonials.map((item, index) => (
              <figure
                key={index}
                className="flex h-full flex-col rounded-lg border border-stone-200 bg-white p-7 shadow-sm"
              >
                <Quote size={28} className="text-clay-300" aria-hidden="true" />
                <blockquote className="mt-4 flex-1 leading-7 text-stone-700">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 font-semibold text-sage-800">
                  &mdash; {item.attribution}
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-8 text-center">
            <Link href="/patient-testimonials" className="font-semibold text-sage-700 underline">
              Read more patient testimonials, including country-specific stories
            </Link>
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
          <h2 className="text-3xl font-bold">Nepali patient outside Nepal?</h2>
          <p className="mt-4 text-lg leading-8 text-sage-100">
            Call or message Dr. Kushal Kharel for guidance. Urgent safety
            issues should be handled through local emergency services first.
          </p>
          <a
            href="tel:+9779861800547"
            className="mt-8 inline-block rounded-lg bg-white px-8 py-4 font-semibold text-sage-950"
          >
            Call +977 9861800547
          </a>
        </div>
      </section>
    </main>
  );
}
