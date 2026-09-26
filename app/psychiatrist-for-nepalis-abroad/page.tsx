import type { Metadata } from "next";
import Link from "next/link";
import { abroadGuides } from "../data/abroad";
import { abroadFaqs, googleMeetStatement, treatedSummary } from "../data/onlineCare";
import {
  buildFaqPageJsonLd,
  buildOnlineServiceJsonLd,
  buildSpeakableSpec,
  serializeJsonLd,
} from "../lib/schema";
import { FaqList, NameLine, OnlineFactsRow, OnlineTreatmentCards, TreatedList } from "../components/OnlineCareSections";

const site = "https://drkushalkharel.com.np";
const url = `${site}/psychiatrist-for-nepalis-abroad`;
const title = "Psychiatrist for Nepalis Living Abroad | Online via Google Meet";
const description =
  "Consultant psychiatrist and online therapy for Nepalis abroad: constant worry, intrusive thoughts, sleep problems. Google Meet, at a time that suits your time zone.";

const faqs = [
  ...abroadFaqs,
  {
    question: "Can a prescription from Nepal be used overseas?",
    answer:
      "Not automatically. Prescription and dispensing rules differ by country, so a Nepal-issued prescription cannot be assumed to be valid at a pharmacy abroad. This is discussed openly before any treatment decision, including whether a local doctor should prescribe.",
  },
  {
    question: "What if I have an emergency while abroad?",
    answer:
      "Contact your local emergency services or go to the nearest emergency department. An online appointment is not an emergency service.",
  },
  {
    question: "Can students and working professionals book?",
    answer:
      "Yes. International students, working professionals, parents, couples and families can all book, and sessions are arranged around your classes, shifts and time zone.",
  },
];

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/psychiatrist-for-nepalis-abroad/" },
  keywords: [
    "Psychiatrist for Nepalis Abroad",
    "Nepali Psychiatrist Online",
    "Online Psychiatrist for NRNs",
    "Mental Health Support for Nepalis Overseas",
    "Nepali psychiatrist Google Meet",
    "Consultant psychiatrist for Nepalis abroad",
    "Online therapy for Nepalis living abroad",
    "constant worry chinta online treatment",
    "constant worry and intrusive thoughts online therapy",
    "sleep problems for Nepalis abroad",
  ],
  openGraph: {
    title,
    description,
    url,
    type: "article",
    images: [{ url: "/images/doctor.png", width: 1200, height: 630, alt: "Online psychiatrist for Nepalis living abroad" }],
  },
  twitter: { card: "summary_large_image", title, description },
};

export default function DiasporaPage() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        name: title,
        url,
        description,
        inLanguage: "en",
        dateModified: "2026-09-24",
        medicalAudience: ["Patient", "Caregiver"],
        about: { "@id": `${site}#clinic` },
        mainEntity: { "@id": `${url}#service` },
        author: { "@id": `${site}#psychiatrist` },
        reviewedBy: { "@id": `${site}#psychiatrist` },
        speakable: buildSpeakableSpec(["#diaspora-quick-answer"]),
      },
      {
        "@type": "Article",
        headline: title,
        author: { "@id": `${site}#psychiatrist` },
        mainEntityOfPage: url,
        datePublished: "2026-07-29",
        dateModified: "2026-09-24",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site },
          { "@type": "ListItem", position: 2, name: "Psychiatrist for Nepalis Living Abroad", item: url },
        ],
      },
    ],
  };
  const serviceJsonLd = buildOnlineServiceJsonLd({
    id: `${url}#service`,
    name: "Online psychiatrist for Nepalis living abroad",
    description: `${googleMeetStatement} Treats ${treatedSummary}, with therapy and medication together where appropriate.`,
    url,
    audienceType: "Nepalis living abroad",
    areaServed: abroadGuides.map((guide) => guide.country),
  });
  const faqJsonLd = buildFaqPageJsonLd(faqs);

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(graph) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqJsonLd) }} />

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 pb-14 pt-28">
          <p className="text-sm font-semibold uppercase tracking-[3px] text-sage-700">For Nepalis worldwide</p>
          <NameLine />
          <h1 className="mt-4 text-4xl font-bold md:text-6xl">Psychiatrist for Nepalis Living Abroad</h1>
          <p id="diaspora-quick-answer" className="mt-6 max-w-3xl text-lg leading-8 text-stone-600">
            Nepalis living abroad can see Dr. Kushal Kharel, a Consultant
            Psychiatrist in Kathmandu, for online therapy and video
            consultation through Google Meet or WhatsApp video call, in
            Nepali or English, arranged around your time zone and work
            shift — including urgent requests. Students, professionals,
            workers and families use it for constant worry, anxiety,
            intrusive thoughts, sleep problems, depression and other
            mental-health concerns.
          </p>
          <TreatedList />
          <div className="mt-8 flex flex-wrap gap-4">
            <a className="rounded-lg bg-sage-700 px-6 py-3 font-semibold text-white" href="https://wa.me/9779861800547">
              WhatsApp to book
            </a>
            <a className="rounded-lg border border-sage-700 px-6 py-3 font-semibold text-sage-800" href="mailto:drkushalkharel@gmail.com">
              Email the clinic
            </a>
          </div>
          <OnlineFactsRow />
        </div>
      </section>

      <OnlineTreatmentCards
        heading="What Dr. Kushal treats by Google Meet or WhatsApp video call"
        intro="Therapy and medication are planned together, so you do not have to choose between them."
      />

      <article className="mx-auto max-w-5xl space-y-6 px-6 pb-14">
        <Section h="Mental-health support that understands home and abroad">
          <p>
            Living overseas can bring opportunity alongside isolation, study pressure, migration stress, family
            expectations and the challenge of explaining mental-health concerns across cultures. A Nepali psychiatrist
            online can offer a shared language and cultural context without reducing anyone to it.
          </p>
          <p>
            Dr. Kushal Kharel provides evidence-based, patient-centred psychiatric assessment for Nepalis living in
            Australia, the UK, USA, Canada, New Zealand, Japan, South Korea, the Gulf and Europe, when online care is
            clinically and legally appropriate.{" "}
            <Link className="text-sage-700 underline" href="/nepalese-abroad">
              Find the guide for your country
            </Link>
            .
          </p>
        </Section>

        <Section h="Who may benefit">
          <p>
            This service may suit Nepali students, professionals, parents, couples and families seeking help for
            anxiety, depression, panic, OCD, adult ADHD, sleep problems, burnout, grief, alcohol concerns or stable
            follow-up for longer-term conditions.
          </p>
          <p>
            Online care is not suitable for every situation. Immediate danger, severe confusion, overdose, serious
            withdrawal, unsafe psychosis or inability to care for basic needs require urgent local in-person care.
          </p>
        </Section>

        <Section h="How an overseas consultation works">
          <ol className="list-decimal space-y-2 pl-5">
            <li>Contact the clinic by WhatsApp, phone or email.</li>
            <li>Confirm your country, time zone, work shift, privacy and whether online care is suitable — say if it&apos;s urgent.</li>
            <li>Confirm the fee and pay by card, bank transfer, or have a family member in Nepal pay locally on your behalf.</li>
            <li>Join the Google Meet or WhatsApp video call from a quiet private space with medicines and prior reports available.</li>
            <li>Discuss symptoms, history, safety and a personalised plan.</li>
            <li>Arrange follow-up or local coordination when needed.</li>
          </ol>
          <p className="mt-4">
            Prescription and dispensing rules vary by country. A Nepal-issued prescription cannot be assumed to be
            usable overseas; this is discussed transparently before treatment decisions.
          </p>
        </Section>

        <Section h="Frequently asked questions">
          <FaqList faqs={faqs} />
        </Section>

        <section className="rounded-lg bg-sage-950 p-8 text-white">
          <h2 className="text-3xl font-bold">Arrange an online consultation</h2>
          <p className="mt-4 leading-8 text-sage-100">
            For persistent mental-health concerns, contact the clinic to discuss whether an overseas video
            consultation is appropriate.
          </p>
          <p className="mt-4">
            <Link className="underline" href="/nepalese-abroad">Nepalese abroad, by country</Link> ·{" "}
            <Link className="underline" href="/online-psychiatrist-nepal">General online psychiatric consultation</Link> ·{" "}
            <Link className="underline" href="/anxiety">Anxiety care</Link> ·{" "}
            <Link className="underline" href="/conditions/major-depressive-disorder">Depression care</Link> ·{" "}
            <Link className="underline" href="/erp-therapy-ocd">OCD and ERP</Link> ·{" "}
            <Link className="underline" href="/sleep-problems-treatment-nepal">Sleep problems</Link> ·{" "}
            <Link className="underline" href="/psychiatric-care-for-family-in-nepal">Care for family in Nepal</Link> ·{" "}
            <Link className="underline" href="/contact">Contact</Link>
          </p>
        </section>

        <footer className="rounded-lg bg-white p-7">
          <strong>Reviewed by Dr. Kushal Kharel, MD Psychiatry</strong>
          <p className="mt-3 leading-7">
            Consultant Psychiatrist, Kathmandu, Nepal. Provides evidence-based care for anxiety, depression, psychosis,
            addiction, adult ADHD and related concerns. This page is general information, not personal medical advice.
          </p>
        </footer>
      </article>
    </main>
  );
}

function Section({ h, children }: { h: string; children: React.ReactNode }) {
  return (
    <section className="rounded-lg bg-white p-7 shadow-sm">
      <h2 className="text-2xl font-bold">{h}</h2>
      <div className="mt-4 leading-8">{children}</div>
    </section>
  );
}
