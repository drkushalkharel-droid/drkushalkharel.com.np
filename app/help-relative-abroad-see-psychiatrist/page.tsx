import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { buildHowToJsonLd } from "../lib/schema";

const siteUrl = "https://drkushalkharel.com.np";
const pageUrl = `${siteUrl}/help-relative-abroad-see-psychiatrist`;
const title = "Getting a Family Member Who Lives Abroad to See a Psychiatrist";
const description =
  "A practical guide for families trying to help a relative living abroad access psychiatric care — recognizing warning signs from a distance, starting the conversation, and what online or local consultation actually involves.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/help-relative-abroad-see-psychiatrist",
  },
  keywords: [
    "Help relative abroad mental health",
    "My brother abroad needs a psychiatrist",
    "Get family member abroad to see a psychiatrist",
    "Nepali abroad mental health help from family",
    "Convince relative abroad to seek therapy",
    "Online psychiatrist for Nepali abroad from family in Nepal",
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
  "Video calls have gone from cheerful to short, flat or avoided altogether over the past few weeks or months",
  "Your relative mentions being unable to sleep, constantly exhausted, or drinking more than they used to since moving",
  "They've stopped joining family group calls or celebrations they never used to miss",
  "Talk of visa stress, a difficult job, isolation or homesickness has turned into hopelessness or talk of not coping",
  "A relative who was always in touch has gone quiet for days or weeks, and it feels different from just being busy",
  "They've mentioned panic, racing thoughts, or physical symptoms like chest tightness with no medical explanation",
  "Something they said in passing worried you enough that you're still thinking about it days later",
];

const faqs = [
  {
    question: "My relative lives abroad — can Dr. Kushal Kharel actually help them from Nepal?",
    answer:
      "It depends on what's needed. An initial online consultation in Nepali or English can be genuinely useful for psychoeducation, an initial assessment, and helping your relative and family understand what's going on and what to do next — especially when a shared language and cultural context makes it easier to open up. For ongoing prescribing, monitoring or urgent care, your relative may need a locally licensed clinician in their own country; Dr. Kharel will discuss this honestly rather than promising more than is safe or appropriate across borders.",
  },
  {
    question: "Can I contact the clinic myself before my relative is willing to talk to anyone?",
    answer:
      "Yes. Many families reach out first, describing what they've noticed and their concerns, so Dr. Kushal Kharel can help think through the best way to approach a relative who hasn't agreed to anything yet.",
  },
  {
    question: "How do I even bring this up without my relative feeling accused or judged?",
    answer:
      "Lead with concern rather than diagnosis — something like \"I've noticed you seem really exhausted lately and I'm worried about you\" lands very differently from \"I think you need to see a psychiatrist.\" Pick a calm moment, not immediately after an argument or a bad day at work, and be prepared for the first conversation to just plant a seed rather than end in an appointment.",
  },
  {
    question: "What if my relative refuses to consider any kind of help?",
    answer:
      "This is common, and pushing harder rarely works. Reducing stigma often takes more than one conversation — framing it as a general check-in, sharing that you've been worried rather than that something is 'wrong' with them, or suggesting they just talk to someone once with no commitment, can lower the barrier. Dr. Kushal Kharel can also talk through your specific situation with you before any contact is made with your relative.",
  },
  {
    question: "Is my relative's prescription from Nepal usable abroad, or vice versa?",
    answer:
      "Prescribing and dispensing rules vary significantly by country, and a Nepal-issued prescription cannot generally be assumed to be fillable at a pharmacy abroad. This is discussed individually, since it affects whether an online consultation with Dr. Kharel is the right starting point or whether registering with a local doctor is more appropriate for ongoing medication.",
  },
  {
    question: "What if this feels urgent and I'm not there to help in person?",
    answer:
      "Do not wait for a scheduled appointment. If there's any risk of self-harm, violence, severe confusion or inability to stay safe, your relative needs local emergency services in their own country immediately, not a Nepal-based online consultation. You can still help from a distance by staying on the phone with them, contacting a friend or roommate nearby, or helping them find the local emergency number for where they live.",
  },
];

export default function HelpRelativeAbroadPage() {
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: title,
    description,
    url: pageUrl,
    inLanguage: "en",
    audience: {
      "@type": "PeopleAudience",
      name: "Families trying to help a relative living abroad access psychiatric care",
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
    name: "How to Help a Family Member Abroad See a Psychiatrist",
    description: "Steps for families trying to connect a relative living abroad with psychiatric care.",
    steps: [
      {
        name: "Notice and name what's changed",
        text: "Pay attention to shifts in mood, sleep, drinking, energy or how often your relative is in touch — you don't need a diagnosis in mind, just a clear sense of what's different.",
      },
      {
        name: "Start the conversation gently",
        text: "Lead with concern, not accusation, pick a calm moment, and expect the first conversation may just open the door rather than lead straight to an appointment.",
      },
      {
        name: "Reach out to the clinic, with or without your relative",
        text: "Call, WhatsApp or email Dr. Kushal Kharel to describe the situation — even before your relative has agreed to anything — to think through the most realistic next step.",
      },
      {
        name: "Arrange the right kind of first contact",
        text: "Depending on the situation, this may be an initial online consultation with Dr. Kharel, or guidance toward local care in the country where your relative lives, especially for ongoing prescribing or urgent needs.",
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
            For families with a relative living abroad
          </p>
          <h1 className="mt-5 text-4xl font-bold leading-tight text-stone-950 md:text-6xl">
            Getting a family member who lives abroad to see a psychiatrist
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-600">
            Distance makes it harder to know what's really going on with a
            relative abroad, and harder still to know how to help. You can
            describe what you've noticed to Dr. Kushal Kharel, think through
            how to open the conversation, and find out honestly whether an
            online consultation or local care in their own country is the
            right starting point.
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
          Signs a relative abroad may need psychiatric help
        </h2>
        <p className="mt-4 max-w-3xl leading-8 text-stone-600">
          It's easy to second-guess what you've noticed when you're not there
          in person. If any of this sounds familiar, it's reasonable to be
          concerned.
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
            How to start the conversation from a distance
          </h2>
          <ol className="mt-8 space-y-6">
            <li className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sage-700 font-bold text-white">1</span>
              <p className="leading-7 text-stone-700">
                Notice and name what's actually changed — mood, sleep,
                drinking, energy, how often they're in touch — rather than
                starting from a label or diagnosis.
              </p>
            </li>
            <li className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sage-700 font-bold text-white">2</span>
              <p className="leading-7 text-stone-700">
                Lead with concern, not accusation. "I've noticed you seem
                really exhausted lately and I'm worried about you" opens a
                conversation far better than "I think something's wrong with
                you."
              </p>
            </li>
            <li className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sage-700 font-bold text-white">3</span>
              <p className="leading-7 text-stone-700">
                Call, WhatsApp or email the clinic and describe the
                situation, your relative's country, and any safety concerns
                — even before your relative has agreed to anything.
              </p>
            </li>
            <li className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sage-700 font-bold text-white">4</span>
              <p className="leading-7 text-stone-700">
                Dr. Kushal Kharel will help you think through whether an
                initial online consultation, or guidance toward local care in
                your relative's own country, is the more realistic and
                appropriate next step.
              </p>
            </li>
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-lg border border-stone-200 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-bold text-stone-950">
              If your relative doesn't want to talk about it
            </h2>
            <p className="mt-4 leading-7 text-stone-700">
              Reluctance is common, and it rarely helps to push directly,
              especially over a phone or video call where tone is easy to
              misread. Framing a first conversation as a general check-in
              rather than an intervention, sharing that you've been worried
              rather than diagnosing them, and being patient across more than
              one conversation usually works better than insisting. Dr.
              Kushal Kharel can talk through your specific situation with you
              first, before any contact is made with your relative.
            </p>
          </div>
          <div className="rounded-lg border border-stone-200 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-bold text-stone-950">
              What actually happens once they're willing to talk
            </h2>
            <p className="mt-4 leading-7 text-stone-700">
              An{" "}
              <Link href="/psychiatrist-for-nepalis-abroad" className="font-semibold text-sage-700 underline">
                online consultation
              </Link>{" "}
              with Dr. Kharel, in Nepali or English, can be a genuinely
              useful first step for psychoeducation and initial assessment.
              Depending on what's needed, ongoing prescribing, monitoring or
              urgent care may require a locally licensed clinician in your
              relative's own country — this is discussed openly rather than
              assumed either way.
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
        <h2 className="text-xl font-bold text-red-950">If this feels urgent</h2>
        <p className="mt-3 leading-7 text-red-900">
          Do not wait for a scheduled appointment. Any risk of self-harm,
          violence, severe confusion or inability to stay safe needs local
          emergency services in your relative's own country immediately, not
          a Nepal-based online consultation. You can still help from a
          distance by staying on the phone with them, contacting a friend or
          roommate nearby, or helping them find the local emergency number.
        </p>
      </section>

      <section className="bg-sage-950 py-16 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold">Ready to talk through your relative's situation?</h2>
          <p className="mt-4 text-lg leading-8 text-sage-100">
            Call, WhatsApp or email Dr. Kushal Kharel to describe what's
            going on with your relative abroad, wherever you're calling from.
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
            <Link href="/psychiatrist-for-nepalis-abroad" className="underline">Online consultation for Nepalis abroad</Link>
            {" · "}
            <Link href="/psychiatric-care-for-family-in-nepal" className="underline">Family in Nepal, arranged from abroad</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
