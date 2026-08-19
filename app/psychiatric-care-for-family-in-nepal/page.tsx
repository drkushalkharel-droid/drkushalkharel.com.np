import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { buildHowToJsonLd } from "../lib/schema";

const siteUrl = "https://drkushalkharel.com.np";
const pageUrl = `${siteUrl}/psychiatric-care-for-family-in-nepal`;
const title = "Psychiatric Care for Family in Nepal, Arranged From Abroad";
const description =
  "A practical guide for Nepalis living abroad arranging mental health care for a parent, sibling or relative in Nepal — how to start, home visits, confidentiality and staying involved.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/psychiatric-care-for-family-in-nepal",
  },
  keywords: [
    "Psychiatric care for parents in Nepal",
    "Mental health help for family in Nepal",
    "Arrange therapy for parents Nepal",
    "Nepali abroad help family mental health",
    "Psychiatrist for elderly parents Nepal",
    "Get my father help in Nepal",
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
    creator: "@Drkushalpsych",
  },
};

const situations = [
  "A parent showing memory loss, confusion or personality change that the family suspects may be dementia",
  "A father or mother who has seemed low, withdrawn or uninterested in life since the children moved abroad",
  "A sibling with a drinking or substance use problem the family has been managing quietly for years",
  "A parent with an existing psychiatric diagnosis whose medication or follow-up has lapsed since the usual family support left",
  "An elderly relative who has become anxious, fearful or paranoid and is increasingly hard to reason with by phone",
  "A family member who has never been formally assessed but whose distress, anger or withdrawal has become impossible to ignore",
  "A relative recovering from a major loss, illness or the earthquake who never really seemed to recover emotionally",
];

const faqs = [
  {
    question: "Can I contact the clinic on behalf of a parent or family member in Nepal, before they speak to anyone themselves?",
    answer:
      "Yes. Many families first reach out describing the situation, the symptoms they've noticed, and their own concerns. This helps Dr. Kushal Kharel advise on the best next step — whether that's a home visit, a clinic appointment, or a gentle first conversation that eases a reluctant family member toward accepting help.",
  },
  {
    question: "Will you tell me what's discussed in my family member's sessions?",
    answer:
      "Once your family member is an adult patient receiving care, session details are confidential and are only shared with your involvement to the extent they consent to it. Many patients are glad to have a family member help coordinate logistics and stay generally informed, and this is discussed openly early in treatment rather than assumed either way.",
  },
  {
    question: "Can I pay for my family member's treatment from abroad?",
    answer:
      "Yes, payment arrangements from abroad are commonly worked out directly with the clinic. Ask about this when you first get in touch, so your parent or relative isn't left worrying about the cost of attending.",
  },
  {
    question: "What if my parent or relative refuses to see a psychiatrist?",
    answer:
      "This is common, and it rarely helps to push directly. A softer opening — framing a first visit as a general health check-up, having a family member they trust make the first call, or starting with a home visit rather than an unfamiliar clinic — often eases the way more effectively than insisting. Dr. Kushal Kharel can also talk through the specific situation with you before any contact is made with your relative.",
  },
  {
    question: "Can a home visit be arranged for an elderly or immobile family member?",
    answer:
      "Home visits are considered individually based on location, mobility and clinical need, and are generally more straightforward to arrange within the Kathmandu Valley. Contact the clinic with your relative's location and situation to discuss whether a home visit, clinic appointment or another option is the right fit.",
  },
  {
    question: "What if this is an emergency and I'm not in Nepal to help directly?",
    answer:
      "Do not wait for a scheduled appointment. Ask a trusted relative or neighbour in Nepal to call an ambulance or take your family member to the nearest hospital emergency department immediately for any risk of self-harm, violence, overdose, severe confusion or inability to stay safe. Being abroad doesn't stop you from helping coordinate this by phone in the moment, and once your relative is safe, ongoing psychiatric follow-up can be arranged.",
  },
];

export default function PsychiatricCareForFamilyPage() {
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: title,
    description,
    url: pageUrl,
    inLanguage: "en",
    audience: {
      "@type": "PeopleAudience",
      name: "Nepalis living abroad arranging care for family in Nepal",
    },
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
      { "@type": "ListItem", position: 2, name: "Nepalese Abroad", item: `${siteUrl}/nepalese-abroad` },
      { "@type": "ListItem", position: 3, name: title, item: pageUrl },
    ],
  };

  const howToJsonLd = buildHowToJsonLd({
    id: `${pageUrl}#how-to`,
    name: "How to Arrange Psychiatric Care for Family in Nepal From Abroad",
    description: "Steps for Nepalis abroad arranging a psychiatric assessment or ongoing care for a parent, sibling or relative in Nepal.",
    steps: [
      {
        name: "Describe the situation to the clinic",
        text: "Call, WhatsApp or email with what you've noticed, how long it's been going on, your relative's location, and any safety concerns — even before your relative has agreed to anything.",
      },
      {
        name: "Discuss the right first step together",
        text: "Dr. Kushal Kharel will help you think through whether a home visit, an in-person clinic appointment, or an easier first conversation is the most realistic way to bring your relative into care.",
      },
      {
        name: "Arrange the first assessment",
        text: "Once your relative is willing, an appointment is scheduled at the Kalanki, Kathmandu clinic, as a home visit where appropriate, or by video call if your relative is comfortable with that.",
      },
      {
        name: "Stay appropriately involved from abroad",
        text: "With your relative's consent, you can help coordinate logistics, payment and follow-up, while the clinical details of their care remain confidential between them and their psychiatrist.",
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
          <Link href="/nepalese-abroad" className="font-semibold text-sage-700">
            &larr; Back to Nepalese abroad guides
          </Link>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[3px] text-sage-700">
            For Nepalis abroad, arranging care for family in Nepal
          </p>
          <h1 className="mt-5 text-4xl font-bold leading-tight text-stone-950 md:text-6xl">
            Psychiatric care for family in Nepal, arranged from abroad
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-600">
            Living abroad doesn't mean you're powerless to help a parent,
            sibling or relative in Nepal who is struggling. You can describe
            the situation to Dr. Kushal Kharel, help arrange the right kind
            of first appointment — including a home visit — and coordinate
            logistics from wherever you are, while your family member's care
            stays confidentially between them and their psychiatrist.
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
            <a
              href="mailto:drkushalkharel@gmail.com"
              className="inline-flex items-center gap-3 rounded-lg border border-stone-300 px-6 py-3 font-semibold text-stone-700 transition hover:bg-stone-100"
            >
              <Mail size={20} aria-hidden="true" />
              Email
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <h2 className="text-3xl font-bold text-stone-950">
          Situations families abroad commonly reach out about
        </h2>
        <p className="mt-4 max-w-3xl leading-8 text-stone-600">
          If any of this sounds familiar, you're not overreacting, and you
          don't need to already have a clear diagnosis in mind before
          getting in touch.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {situations.map((situation) => (
            <div
              key={situation}
              className="rounded-lg border border-stone-200 bg-white p-5 leading-7 text-stone-800 shadow-sm"
            >
              {situation}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-14 lg:px-8">
          <h2 className="text-3xl font-bold text-stone-950">
            How to start the process from abroad
          </h2>
          <ol className="mt-8 space-y-6">
            <li className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sage-700 font-bold text-white">1</span>
              <p className="leading-7 text-stone-700">
                Call, WhatsApp or email the clinic and describe what you've
                noticed, how long it's been going on, your relative's
                location in Nepal, and any safety concerns — even before
                your relative has agreed to anything.
              </p>
            </li>
            <li className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sage-700 font-bold text-white">2</span>
              <p className="leading-7 text-stone-700">
                Dr. Kushal Kharel helps you think through the most realistic
                first step: a home visit, a clinic appointment, or an easier
                opening conversation for a relative who is hesitant or
                unwilling.
              </p>
            </li>
            <li className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sage-700 font-bold text-white">3</span>
              <p className="leading-7 text-stone-700">
                Once your relative is willing, an assessment is arranged —
                at the Kalanki, Kathmandu clinic, as a home visit where
                appropriate, or by video call if that's more comfortable for
                them.
              </p>
            </li>
            <li className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sage-700 font-bold text-white">4</span>
              <p className="leading-7 text-stone-700">
                With your relative's consent, you can stay involved in
                logistics, payment and follow-up from abroad, while the
                clinical details of their care remain confidentially between
                them and their psychiatrist.
              </p>
            </li>
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-lg border border-stone-200 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-bold text-stone-950">
              If your family member doesn't want to see a psychiatrist
            </h2>
            <p className="mt-4 leading-7 text-stone-700">
              Reluctance is common, especially among older parents who grew
              up with heavy stigma around psychiatric care, and it rarely
              helps to push directly. A softer opening — framing a first
              visit as a general health check-up, having the family member
              they trust most make the first call, or starting with a home
              visit rather than an unfamiliar clinic — often eases the way
              more effectively than insisting. Dr. Kushal Kharel can talk
              through the specific situation with you first, before any
              contact is made with your relative.
            </p>
          </div>
          <div className="rounded-lg border border-stone-200 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-bold text-stone-950">
              Home visits when travel to the clinic is hard
            </h2>
            <p className="mt-4 leading-7 text-stone-700">
              For an elderly or immobile relative, or one who is unlikely to
              agree to travel to an unfamiliar clinic, a{" "}
              <Link href="/home-visit-psychiatrist-nepal" className="font-semibold text-sage-700 underline">
                home psychiatric visit
              </Link>{" "}
              may be a more realistic starting point. Availability depends
              on location, mobility and clinical need, and is generally more
              straightforward to arrange within the Kathmandu Valley.
              Mention this when you first get in touch so it can be
              discussed alongside the other options.
            </p>
          </div>
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

      <section className="rounded-lg border border-red-200 bg-red-50 mx-auto mt-0 max-w-7xl px-6 py-8 lg:px-8">
        <h2 className="text-xl font-bold text-red-950">If this is an emergency</h2>
        <p className="mt-3 leading-7 text-red-900">
          Do not wait for a scheduled appointment. Ask a trusted relative or
          neighbour in Nepal to call an ambulance or take your family member
          to the nearest hospital emergency department immediately for any
          risk of self-harm, violence, overdose, severe confusion or
          inability to stay safe. Being abroad doesn't stop you from helping
          coordinate this by phone in the moment.
        </p>
      </section>

      <section className="bg-sage-950 py-16 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold">Ready to talk through your family's situation?</h2>
          <p className="mt-4 text-lg leading-8 text-sage-100">
            Call, WhatsApp or email Dr. Kushal Kharel to describe what's
            going on with your relative in Nepal, wherever you're calling
            from.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="tel:+9779861800547"
              className="inline-block rounded-lg bg-white px-8 py-4 font-semibold text-sage-950"
            >
              Call +977 9861800547
            </a>
            <a
              href="https://wa.me/9779861800547"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg border border-white/50 px-8 py-4 font-semibold text-white"
            >
              WhatsApp
            </a>
          </div>
          <p className="mt-8 text-sage-200">
            <Link href="/nepalese-abroad" className="underline">Nepalese abroad guides</Link>
            {" · "}
            <Link href="/home-visit-psychiatrist-nepal" className="underline">Home visit psychiatrist</Link>
            {" · "}
            <Link href="/returning-to-nepal-after-abroad" className="underline">Returning to Nepal after abroad</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
