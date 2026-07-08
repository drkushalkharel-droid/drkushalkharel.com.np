import type { Metadata } from "next";
import Link from "next/link";
import ScreeningPlatform from "./ScreeningPlatform";
import { buildHowToJsonLd, buildSpeakableSpec } from "../lib/schema";

const title = "Mental Health Screening Nepal | Depression, Anxiety, Sleep";
const description =
  "Free mental health screening tools for depression symptoms, anxiety severity and daytime sleepiness. Get a score, interpretation and contact Dr. Kushal Kharel for psychiatric consultation.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/screening",
  },
  keywords: [
    "Mental Health Screening Nepal",
    "Depression Screening Nepal",
    "Anxiety Screening Nepal",
    "Sleepiness Screening Nepal",
    "Online Psychiatrist Nepal",
    "Dr Kushal Kharel",
    "Psychiatrist Kathmandu",
  ],
  openGraph: {
    title,
    description,
    url: "https://drkushalkharel.com.np/screening",
    siteName: "Dr. Kushal Kharel",
    images: [{ url: "/images/doctor.png", width: 1200, height: 630 }],
    type: "website",
  },
};

export default function ScreeningPage() {
  const pageUrl = "https://drkushalkharel.com.np/screening";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: title,
    description,
    url: pageUrl,
    inLanguage: "en",
    medicalAudience: ["Patient", "Caregiver"],
    about: ["Depression screening", "Anxiety screening", "Sleepiness screening"],
    reviewedBy: {
      "@type": "Physician",
      name: "Dr. Kushal Kharel",
      medicalSpecialty: "Psychiatry",
      telephone: "+9779861800547",
    },
    speakable: buildSpeakableSpec(["#screening-quick-answer"]),
  };

  const howToJsonLd = buildHowToJsonLd({
    id: `${pageUrl}#how-to`,
    name: "How to Use the Mental Health Screening Tool",
    description:
      "Steps to complete the free depression, anxiety and sleepiness screening and understand your results.",
    totalTime: "PT5M",
    steps: [
      {
        name: "Choose a screening tool",
        text: "Select the depression, anxiety or sleepiness screening tool relevant to what you'd like to check.",
      },
      {
        name: "Answer each item honestly",
        text: "Respond to each question based on how you've actually been feeling recently, not how you think you should answer.",
      },
      {
        name: "Review your score and interpretation",
        text: "After submitting, you'll see a symptom score with a general interpretation of the result.",
      },
      {
        name: "Contact a psychiatrist if needed",
        text: "These tools are for awareness and early guidance only. If your score suggests significant symptoms, contact Dr. Kushal Kharel for a full psychiatric assessment.",
      },
    ],
  });

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 pb-12 pt-28 lg:px-8 lg:pt-32">
          <Link href="/" className="font-semibold text-blue-700">
            Back to home
          </Link>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[3px] text-blue-700">
            Screening Tools
          </p>
          <h1 className="mt-5 text-4xl font-bold leading-tight text-slate-950 md:text-6xl">
            Screen for depression, anxiety and sleepiness
          </h1>
          <p id="screening-quick-answer" className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Answer each item honestly to calculate a symptom score and receive
            general interpretation. These tools are for awareness and early
            guidance only. They do not replace diagnosis by a psychiatrist or
            qualified mental health professional.
          </p>
          <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-5 leading-7 text-amber-950">
            If you have thoughts of suicide, self-harm, overdose, violence,
            severe confusion or immediate danger, contact local emergency
            services or the nearest hospital now.
          </div>
        </div>
      </section>

      <ScreeningPlatform />
    </main>
  );
}
