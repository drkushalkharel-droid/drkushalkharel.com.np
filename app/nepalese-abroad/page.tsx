import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageCircle, Phone, Quote } from "lucide-react";
import { abroadGuides } from "../data/abroad";
import { abroadFaqs, googleMeetStatement, treatedSummary } from "../data/onlineCare";
import {
  buildFaqPageJsonLd,
  buildHowToJsonLd,
  buildOnlineServiceJsonLd,
  buildSpeakableSpec,
  serializeJsonLd,
} from "../lib/schema";
import { FaqList, NameLine, OnlineFactsRow, OnlineTreatmentCards, TreatedList } from "../components/OnlineCareSections";

const siteUrl = "https://drkushalkharel.com.np";
const pageUrl = `${siteUrl}/nepalese-abroad`;
const title = "Consultant Psychiatrist & Online Therapy for Nepalis Abroad";
const description =
  "Consultant psychiatrist & online therapy for Nepalis abroad: constant worry, intrusive thoughts, sleep problems. Google Meet, at a time that suits your time zone.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: {
    canonical: "/nepalese-abroad/",
  },
  keywords: [
    "Nepali psychiatrist online",
    "Nepali consultant psychiatrist",
    "Consultant psychiatrist for Nepalis abroad",
    "online therapy for Nepalis abroad",
    "constant worry and intrusive thoughts online therapy",
    "sleep problems for Nepalis abroad",
    "Nepali online therapy",
    "Nepali psychiatrist abroad",
    "constant worry chinta treatment online",
    "intrusive thoughts OCD online Nepali",
    "sleep problems insomnia Nepali abroad",
    "Online psychiatrist for Nepalis abroad",
    "Nepali speaking psychiatrist online",
    "Nepali psychiatrist Google Meet",
    "Online psychiatric consultation for Nepalese abroad",
    "Nepalese mental health abroad",
    "Nepali depression anxiety OCD sleep problems online",
    "नेपाली मनोचिकित्सक अनलाइन",
    "अनलाइन थेरापी",
    "चिन्ता उपचार अनलाइन",
  ],
  openGraph: {
    title,
    description,
    url: pageUrl,
    siteName: "Dr. Kushal Kharel",
    images: [{ url: "/images/doctor.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title, description, images: ["/images/doctor.png"] },
};

// The six short patient questions come from the shared onlineCare module so
// every abroad page answers them identically. The two below are specific to
// this hub.
const faqs = [
  ...abroadFaqs,
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
];

const bookingSteps = [
  {
    name: "Message with your country and availability",
    text: "Send a WhatsApp message to +977 9861800547 with your country of residence and a time that suits your time zone, so a slot can be arranged.",
  },
  {
    name: "Join the Google Meet video call",
    text: "Join the Google Meet call at the agreed time. Dr. Kushal Kharel reviews your symptoms, history and current medications.",
  },
  {
    name: "Discuss diagnosis and treatment",
    text: "You'll discuss a diagnosis and treatment plan together, with a prescription provided where clinically appropriate and permitted in your country.",
  },
  {
    name: "Follow up as needed",
    text: "Follow-up sessions are arranged in your time zone, and questions between sessions can be exchanged by message.",
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
    dateModified: "2026-09-24",
    audience: {
      "@type": "PeopleAudience",
      name: "Nepalese living abroad",
    },
    medicalAudience: ["Patient", "MedicalAudience"],
    about: { "@id": `${siteUrl}#clinic` },
    mainEntity: { "@id": `${pageUrl}#service` },
    author: { "@id": `${siteUrl}#psychiatrist` },
    reviewedBy: { "@id": `${siteUrl}#psychiatrist` },
    speakable: buildSpeakableSpec(["#abroad-hub-quick-answer"]),
    relatedLink: abroadGuides.map((guide) => `${siteUrl}/nepalese-abroad/${guide.slug}`),
  };

  const serviceJsonLd = buildOnlineServiceJsonLd({
    id: `${pageUrl}#service`,
    name: "Online psychiatric consultation for Nepalis living abroad",
    description: `${googleMeetStatement} Treats ${treatedSummary}, with therapy and medication together where appropriate.`,
    url: pageUrl,
    audienceType: "Nepalis living abroad",
    areaServed: abroadGuides.map((guide) => guide.country),
  });

  const faqJsonLd = buildFaqPageJsonLd(faqs);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Nepalese abroad", item: pageUrl },
    ],
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    ...buildHowToJsonLd({
      id: `${pageUrl}#how-to`,
      name: "How to book an online psychiatric consultation from abroad",
      description: "Steps for Nepalis living abroad to book and complete a Google Meet psychiatric consultation.",
      steps: bookingSteps,
    }),
  };

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(howToJsonLd) }} />

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 pb-14 pt-28 lg:px-8 lg:pt-32">
          <Link href="/" className="font-semibold text-sage-700">
            &larr; Back to home
          </Link>
          <NameLine />
          <h1 className="mt-4 text-4xl font-bold leading-tight text-stone-950 md:text-6xl">
            Nepali consultant psychiatrist and online therapy for Nepalis abroad
          </h1>
          <p id="abroad-hub-quick-answer" className="mt-6 max-w-3xl text-lg leading-8 text-stone-600">
            Yes, you can see a Nepali psychiatrist online from abroad. Dr. Kushal
            Kharel, a Nepal Medical Council-registered Consultant Psychiatrist
            in Kathmandu, offers online therapy and video consultation for
            Nepalis abroad through Google Meet, in Nepali or English, at a time
            that suits your time zone. He treats constant worry, anxiety,
            intrusive thoughts, sleep problems and depression, and every
            session is confidential.
          </p>
          <TreatedList />
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
          <OnlineFactsRow />
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

      <OnlineTreatmentCards
        id="what-we-treat-online"
        heading="What Dr. Kushal treats by Google Meet video call"
        intro="Therapy and medication are planned together, so you do not have to choose between them. Nepalis abroad most often ask for help with these four concerns."
      />

      <section id="how-it-works" className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-14 lg:px-8">
          <h2 className="text-3xl font-bold text-stone-950">How an online consultation from abroad works</h2>
          <ol className="mt-8 space-y-4">
            {bookingSteps.map((step, index) => (
              <li key={step.name} className="flex gap-4 rounded-lg border border-stone-200 p-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sage-700 font-bold text-white">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-bold text-sage-950">{step.name}</h3>
                  <p className="mt-1 leading-7 text-stone-700">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section lang="ne" className="mx-auto max-w-5xl px-6 py-14 lg:px-8">
        <h2 className="text-3xl font-bold text-stone-950">विदेशमा बस्ने नेपालीका लागि अनलाइन मनोचिकित्सक</h2>
        <p className="mt-4 leading-8 text-stone-700">
          डा. कुशल खरेल (कन्सल्टेन्ट साइकाइट्रिस्ट, काठमाडौं) ले विदेशमा बस्ने
          नेपालीहरूलाई Google Meet भिडियोमार्फत अनलाइन थेरापी र परामर्श दिनुहुन्छ
          — निरन्तर चिन्ता (constant worry), एन्जाइटी र प्यानिक, बारम्बार आउने
          विचार (OCD), निद्राको समस्या र डिप्रेसनको उपचार। डिप्रेसन र चिन्तामा
          CBT र औषधि सँगै, OCD मा ERP र औषधि सँगै उपचार गरिन्छ। परामर्श नेपाली वा अंग्रेजी,
          जुन भाषामा सहज लाग्छ त्यसैमा हुन्छ, समय तपाईंको देशको समयअनुसार
          मिलाइन्छ, र सबै कुरा गोप्य राखिन्छ। तपाईंको सहमतिमा परिवारका सदस्य
          पनि सामेल हुन सक्छन्।
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <h2 className="text-3xl font-bold text-stone-950">Nepali psychiatrist online: find your country</h2>
        <p className="mt-4 max-w-3xl leading-8 text-stone-600">
          Each guide covers the mental health concerns Nepalis commonly face in
          that country, time-zone tips, local emergency guidance and how to get
          in touch, from the USA, UK, Australia and Canada to Dubai, Qatar,
          Japan and South Korea.
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
              Readjusting after years abroad — reverse culture shock, family pressure, or uncertainty about what&apos;s next — is its own kind of difficult. See dedicated guidance for returnees.
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
          <FaqList faqs={faqs} />
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
