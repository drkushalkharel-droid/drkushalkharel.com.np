import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, Phone, Video } from "lucide-react";
import { buildSpeakableSpec } from "../lib/schema";

const siteUrl = "https://drkushalkharel.com.np";
const pageUrl = `${siteUrl}/online-psychiatrist-nepal`;
const title = "Online Psychiatrist in Nepal | Psychiatric Consultation from Home";
const description =
  "Online psychiatric consultation in Nepal for anxiety, depression, OCD, sleep problems, addiction and follow-up care. Learn when online care is suitable and how to book.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/online-psychiatrist-nepal" },
  keywords: [
    "online psychiatrist Nepal",
    "online psychiatric consultation Nepal",
    "telepsychiatry Nepal",
    "online anxiety doctor Nepal",
    "online depression consultation Nepal",
    "psychiatrist video consultation Nepal",
  ],
  openGraph: {
    title,
    description,
    url: pageUrl,
    siteName: "Dr. Kushal Kharel",
    images: [{ url: "/images/doctor.png", width: 1200, height: 630, alt: "Online psychiatric consultation with Dr. Kushal Kharel" }],
    type: "article",
  },
  twitter: { card: "summary_large_image", title, description, images: ["/images/doctor.png"] },
};

const faqs = [
  {
    question: "Can I consult a psychiatrist online in Nepal?",
    answer: "Online psychiatric consultation can be suitable for many follow-up visits, medication reviews, psychoeducation, counselling-informed care and selected initial assessments. The appropriate format depends on your symptoms, safety and clinical needs.",
  },
  {
    question: "What should I prepare for an online psychiatric appointment?",
    answer: "Choose a private, quiet place; keep your current medicines, previous reports and main questions nearby; and share your current location at the start of the appointment in case urgent local support is needed.",
  },
  {
    question: "When is online psychiatry not appropriate?",
    answer: "Immediate danger, severe confusion, overdose, serious withdrawal symptoms, violent behaviour, inability to care for basic needs and urgent physical symptoms need local in-person or emergency assessment rather than an online appointment.",
  },
  ...["Australia","the United Kingdom","the United States","Canada","New Zealand","Japan","South Korea","the UAE","Qatar","Saudi Arabia","Germany","Ireland"].map((country) => ({
    question: `Can I consult from ${country}?`,
    answer: `Many Nepalis and international patients living in ${country} can request an online appointment. Suitability depends on your location, clinical needs, privacy, local emergency access and applicable prescribing rules. The clinic confirms this before booking.`,
  })),
  { question: "Can a family member join my appointment?", answer: "Yes, when you want this and it is clinically helpful. Family participation can support history-taking, education and treatment planning while respecting your privacy." },
  { question: "Can prescriptions be used overseas?", answer: "Prescription and dispensing rules differ by country. An online consultation cannot guarantee that a Nepal-issued prescription can be filled abroad; local medical coordination may be needed." },
  { question: "How long is the first appointment?", answer: "The time needed depends on the concern and complexity. A first assessment is structured to understand symptoms, history, safety, physical-health factors and treatment goals." },
  { question: "How do I arrange payment?", answer: "The clinic will explain appointment availability, payment method and confirmation steps before your consultation is finalised." },
  { question: "Is my information confidential?", answer: "Psychiatric care is handled confidentially, with limited exceptions when there is a serious and immediate safety concern or another legal duty." },
];

export default function OnlinePsychiatristNepalPage() {
  const medicalWebPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: title,
    description,
    url: pageUrl,
    inLanguage: "en",
    medicalAudience: ["Patient", "Caregiver"],
    about: { "@id": `${siteUrl}#clinic` },
    author: { "@id": `${siteUrl}#psychiatrist` },
    reviewedBy: { "@id": `${siteUrl}#psychiatrist` },
    speakable: buildSpeakableSpec(["#online-consultation-answer"]),
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
  };
  const practiceJsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "MedicalBusiness", "@id": `${siteUrl}#clinic`, name: "Dr. Kushal Kharel Psychiatry", url: siteUrl, areaServed: ["Nepal", "Australia", "United Kingdom", "United States", "Canada", "New Zealand", "Japan", "South Korea", "United Arab Emirates", "Qatar", "Saudi Arabia", "Germany", "Ireland"], availableLanguage: ["English", "Nepali"], medicalSpecialty: "Psychiatry", availableService: { "@type": "MedicalProcedure", name: "Online psychiatric consultation" } },
    { "@type": "Physician", "@id": `${siteUrl}#psychiatrist`, name: "Dr. Kushal Kharel", honorificSuffix: "MD Psychiatry", medicalSpecialty: "Psychiatry", address: { "@type": "PostalAddress", addressLocality: "Kathmandu", addressCountry: "NP" } },
    { "@type": "Article", headline: title, author: { "@id": `${siteUrl}#psychiatrist` }, mainEntityOfPage: pageUrl },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: siteUrl }, { "@type": "ListItem", position: 2, name: "Online Psychiatrist Nepal", item: pageUrl }] }
  ] };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(practiceJsonLd).replace(/</g, "\\u003c") }} />
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 pb-14 pt-28 lg:px-8 lg:pt-32">
          <Link href="/" className="font-semibold text-blue-700">&larr; Back to home</Link>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[3px] text-blue-700">Telepsychiatry across Nepal</p>
          <h1 className="mt-5 text-4xl font-bold leading-tight text-slate-950 md:text-6xl">Online Psychiatrist in Nepal: confidential psychiatric consultation from home</h1>
          <p id="online-consultation-answer" className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">If you live outside Kathmandu, travel is difficult, or you need a follow-up that fits around work or caregiving, online psychiatric consultation may be a practical way to access care. Dr. Kushal Kharel provides online consultation for many anxiety, depression, OCD, sleep, addiction and medication-review concerns when it is clinically appropriate.</p>
          <div className="mt-8 flex flex-wrap gap-4"><a href="tel:+9779861800547" className="inline-flex items-center gap-3 rounded-lg bg-blue-700 px-6 py-3 font-bold text-white transition hover:bg-blue-800"><Phone size={20} aria-hidden="true" />Call +977 9861800547</a><a href="https://wa.me/9779861800547" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-lg border border-green-600 px-6 py-3 font-bold text-green-700 transition hover:bg-green-600 hover:text-white"><MessageCircle size={20} aria-hidden="true" />WhatsApp to request a slot</a></div>
        </div>
      </section>
      <article className="mx-auto max-w-5xl space-y-6 px-6 py-14 lg:px-8">
        <Section title="Who can benefit from an online psychiatric consultation?"><p>Online care can help adults, young people and families throughout Nepal who need a psychiatric opinion but cannot easily visit the Kalanki clinic in Kathmandu. It is often useful for follow-up appointments, medication reviews, discussing side effects, counselling-informed support, psychoeducation and selected first assessments. A video or phone visit can also help a family member join with consent when that support is useful.</p><p>Common reasons to book include persistent worry, panic attacks, low mood, loss of interest, OCD symptoms, disturbed sleep, attention concerns, alcohol or substance-use concerns, stress and burnout. An online appointment does not mean care is less personal: the psychiatrist still takes a history, considers physical health and safety, explains options and makes a shared treatment plan.</p></Section>
        <Section title="Psychiatric care for Nepalis abroad and international patients"><p>Many people contact the clinic from Australia, the United Kingdom, the United States, Canada and New Zealand, often because they prefer to speak in Nepali or English with a psychiatrist who understands the family, migration and study pressures that can shape mental health. Patients also request care from Japan, South Korea, Qatar, the UAE, Saudi Arabia, Germany, Ireland and elsewhere in Europe.</p><p>Being abroad does not automatically make an appointment appropriate. Before booking, the clinic confirms where you are, whether a video consultation is clinically suitable, how emergency care would work locally, and whether any medicine recommendation would require a clinician in your country. This is an ethical safeguard, not an obstacle to care.</p></Section>
        <Section title="Conditions that may be suitable for online care"><p>Selected consultations can support depression, anxiety disorders, panic, OCD, PTSD, adult ADHD, stress, insomnia, grief, burnout, relationship difficulties, alcohol concerns and internet or gaming problems. Bipolar disorder and schizophrenia may be appropriate for stable follow-up when there is a clear safety plan and reliable local support; an acute episode needs urgent in-person care.</p><div className="grid gap-3 sm:grid-cols-2"><Resource href="/anxiety">Anxiety treatment</Resource><Resource href="/depression">Depression treatment</Resource><Resource href="/ocd">OCD treatment</Resource><Resource href="/adhd">ADHD assessment</Resource><Resource href="/bipolar-disorder">Bipolar disorder care</Resource><Resource href="/schizophrenia">Schizophrenia care</Resource></div></Section>
        <Section title="How online psychiatry works"><ol className="list-decimal space-y-3 pl-5"><li><strong>Request an appointment.</strong> Call or send a WhatsApp message with a short description of the main concern and whether you prefer online or in-person care.</li><li><strong>Confirm the right format.</strong> The clinic will advise whether online assessment is suitable or whether an in-person or emergency visit is safer.</li><li><strong>Prepare for privacy.</strong> Join from a quiet place where you can speak freely. Keep medicines, reports, previous prescriptions and questions available.</li><li><strong>Discuss a plan.</strong> The consultation may include education, counselling, therapy recommendations, medication review, referral, safety planning and follow-up.</li></ol></Section>
        <Section title="What online consultation can and cannot do"><p>Online care can support many mental-health needs, but it is not a substitute for emergency medicine or every physical examination. The clinician may recommend an in-person assessment, a local physical-health check, blood tests, psychological therapy or specialist referral when needed. Honest information about your symptoms, medicines, alcohol or drug use, health conditions and current location helps the clinician make the safest recommendation.</p><p className="rounded-lg border-l-4 border-red-600 bg-red-50 p-4 text-slate-800"><strong>Get emergency help now</strong> rather than waiting online if there is immediate risk of self-harm or violence, an overdose, severe confusion, severe withdrawal, psychosis with unsafe behaviour, or inability to eat, drink or care for basic needs. Go to the nearest emergency department or contact local emergency services.</p></Section>
        <Section title="Privacy and follow-up"><p>Psychiatric consultations are handled with professional confidentiality. For the best privacy, avoid taking the call in a shared room, public space or while driving. A clinician may need to involve emergency support when there is a serious and immediate safety risk; this is part of safe medical care.</p><p>Follow-up is often where progress becomes clearer. It allows symptoms, sleep, daily functioning, medication effects and practical barriers to be reviewed. Some people continue online; others transition to an in-person consultation in Kathmandu when examination or more intensive support is needed.</p></Section>
        <Section title="Helpful patient guides"><div className="grid gap-3 sm:grid-cols-2"><Resource href="/knowledge/anxiety-treatment-nepal">Anxiety treatment in Nepal</Resource><Resource href="/knowledge/depression-treatment-nepal">Depression treatment in Nepal</Resource><Resource href="/counselling-in-nepal">Counselling and psychiatric services</Resource><Resource href="/best-psychiatrist-nepal">Choosing a psychiatrist in Nepal</Resource></div></Section>
        <Section title="Frequently asked questions"><div className="space-y-4">{faqs.map((faq) => <div key={faq.question} className="rounded-lg border border-slate-200 p-5"><h3 className="font-bold text-blue-950">{faq.question}</h3><p className="mt-2 leading-7 text-slate-700">{faq.answer}</p></div>)}</div></Section>
        <section className="rounded-lg bg-blue-950 p-8 text-white"><div className="flex items-center gap-3"><Video aria-hidden="true" /><h2 className="text-3xl font-bold">Request an online consultation</h2></div><p className="mt-4 max-w-3xl leading-8 text-blue-100">Call or message to discuss your concern and confirm whether online psychiatric consultation is appropriate for you.</p><div className="mt-6 flex flex-wrap gap-4"><a href="tel:+9779861800547" className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-950">Call +977 9861800547</a><a href="https://wa.me/9779861800547" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-white/50 px-6 py-3 font-semibold text-white">WhatsApp</a></div></section>
      </article>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) { return <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8"><h2 className="text-3xl font-bold text-blue-950">{title}</h2><div className="mt-5 space-y-4 text-lg leading-9 text-slate-700">{children}</div></section>; }
function Resource({ href, children }: { href: string; children: React.ReactNode }) { return <Link href={href} className="rounded-lg border border-slate-200 p-4 font-semibold text-blue-800 transition hover:border-blue-300 hover:bg-blue-50">{children}</Link>; }
