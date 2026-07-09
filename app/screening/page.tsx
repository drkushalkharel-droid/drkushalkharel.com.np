import type { Metadata } from "next";
import Link from "next/link";
import ScreeningPlatform from "./ScreeningPlatform";
import { screeningTools } from "../data/screening";
import { buildHowToJsonLd, buildSpeakableSpec } from "../lib/schema";

const title = "Mental Health Screening Nepal | 13 Free Self-Rated Tools";
const description =
  "Free self-rated mental health screening tools covering depression, anxiety, social anxiety, OCD, PTSD, bipolar mood, adult ADHD, alcohol use, insomnia, panic disorder, eating disorders and postpartum depression. Get a score and contact Dr. Kushal Kharel for psychiatric consultation.";

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
    "do I have depression",
    "do I have anxiety",
    "mental health self test Nepal",
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
    about: screeningTools.map((tool) => tool.title),
    relatedLink: screeningTools.map((tool) => `${pageUrl}/${tool.id}`),
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
            13 free self-rated mental health screening tools
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

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-950">Choose a screening tool</h2>
        <p className="mt-4 max-w-3xl leading-8 text-slate-600">
          Each tool has its own dedicated page with a focused questionnaire.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {screeningTools.map((tool) => (
            <Link
              key={tool.id}
              href={`/screening/${tool.id}`}
              className="block rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
            >
              <p className="text-sm font-semibold uppercase tracking-[2px] text-blue-700">
                {tool.searchQuestion}
              </p>
              <h3 className="mt-3 text-xl font-bold text-slate-950">{tool.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{tool.description}</p>
              <p className="mt-4 font-semibold text-blue-700">Take this screening &rarr;</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 pt-14 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-950">Or try the combined interactive tool</h2>
          <p className="mt-4 max-w-3xl leading-8 text-slate-600">
            Switch between all screening tools in one place below.
          </p>
        </div>
        <ScreeningPlatform />
      </section>
    </main>
  );
}
