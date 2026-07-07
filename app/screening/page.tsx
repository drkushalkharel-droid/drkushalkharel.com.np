import type { Metadata } from "next";
import Link from "next/link";
import ScreeningPlatform from "./ScreeningPlatform";
import { breadcrumbJsonLd, jsonLdScript, siteUrl } from "../lib/seo";

const title = "Mental Health Screening Nepal | Depression, Anxiety, Sleep";
const description =
  "Free mental health screening tools for depression symptoms, anxiety severity and daytime sleepiness. Get a score, interpretation and contact Dr. Kushal Kharel for psychiatric consultation.";
const pageUrl = `${siteUrl}/screening`;

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
    url: pageUrl,
    siteName: "Dr. Kushal Kharel",
    images: [
      {
        url: "/images/doctor.png",
        width: 1365,
        height: 1909,
        alt: "Dr. Kushal Kharel - Consultant Psychiatrist in Kathmandu",
      },
    ],
    type: "website",
  },
};

export default function ScreeningPage() {
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
  };

  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home", url: siteUrl },
    { name: "Mental Health Screening", url: pageUrl },
  ]);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(jsonLd)}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(breadcrumbs)}
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
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
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
