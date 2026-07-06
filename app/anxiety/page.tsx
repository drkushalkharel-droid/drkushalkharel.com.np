import type { Metadata } from "next";
import AnxietyGuide from "./AnxietyGuide";

const pageUrl = "https://drkushalkharel.com.np/anxiety";
const title = "Anxiety Treatment in Kathmandu | Symptoms, Causes & Help";
const description =
  "A bilingual patient guide to anxiety disorders by Dr. Kushal Kharel, Consultant Psychiatrist in Kathmandu. Learn symptoms, causes, treatment options, CBT, medication and when to seek help.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/anxiety",
  },
  keywords: [
    "Best Psychiatrist in Nepal for Anxiety",
    "Top Psychiatrist in Kathmandu for Anxiety",
    "Anxiety Treatment Kathmandu",
    "Anxiety Doctor Nepal",
    "Psychiatrist for Anxiety Kathmandu",
    "Best Anxiety Doctor Nepal",
    "Panic Attack Doctor Kathmandu",
    "Panic Attack Treatment Nepal",
    "CBT Nepal",
    "Dr Kushal Kharel Anxiety",
    "चिन्ता रोग उपचार",
    "मनोचिकित्सक काठमाडौं",
  ],
  openGraph: {
    title,
    description,
    url: pageUrl,
    siteName: "Dr. Kushal Kharel",
    images: [
      {
        url: "/images/doctor.png",
        width: 1200,
        height: 630,
        alt: "Dr. Kushal Kharel - Consultant Psychiatrist in Kathmandu",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/doctor.png"],
  },
};

export default function AnxietyPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: title,
    description,
    url: pageUrl,
    inLanguage: ["en", "ne"],
    about: {
      "@type": "MedicalCondition",
      name: "Anxiety Disorders",
    },
    medicalAudience: ["Patient", "Caregiver"],
    reviewedBy: {
      "@type": "Physician",
      name: "Dr. Kushal Kharel",
      medicalSpecialty: "Psychiatry",
      telephone: "+9779861800547",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kathmandu",
        addressCountry: "NP",
      },
    },
    publisher: {
      "@type": "Person",
      name: "Dr. Kushal Kharel",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can anxiety disorders be treated?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Anxiety disorders are highly treatable with psychoeducation, CBT-based therapy, lifestyle changes and medication when clinically appropriate.",
        },
      },
      {
        "@type": "Question",
        name: "When should I see a psychiatrist for anxiety?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Seek professional help if anxiety is persistent, difficult to control, causes panic attacks, affects sleep, work, study or relationships, or leads to avoidance of normal activities.",
        },
      },
      {
        "@type": "Question",
        name: "Does anxiety treatment always require medicine?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not always. Treatment depends on severity, duration, functional impairment and other health factors. Some people improve with therapy and lifestyle changes, while others benefit from medication.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <AnxietyGuide />
    </>
  );
}
