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
    languages: {
      en: "/anxiety",
      ne: "/anxiety/np",
    },
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
    inLanguage: "en",
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
        name: "Can anxiety be cured?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most people improve significantly with the right treatment. Some recover fully, while others learn to manage symptoms well and prevent relapse.",
        },
      },
      {
        "@type": "Question",
        name: "Will I need medicine forever?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Usually not. Duration depends on severity, recurrence and response. Medication decisions should be reviewed with a psychiatrist.",
        },
      },
      {
        "@type": "Question",
        name: "Can I consult online?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Online consultation can be suitable for many anxiety concerns, especially follow-up, psychoeducation and treatment monitoring.",
        },
      },
      {
        "@type": "Question",
        name: "Who treats anxiety in Kathmandu?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dr. Kushal Kharel, a Consultant Psychiatrist in Kathmandu, treats anxiety disorders including generalized anxiety disorder, panic disorder, social anxiety and phobias, using evidence-based CBT and medication when appropriate, in person or online.",
        },
      },
      {
        "@type": "Question",
        name: "Who is the best psychiatrist for anxiety in Kathmandu?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "There is no single certified 'best' psychiatrist — look for a registered specialist with relevant experience. Dr. Kushal Kharel is a Nepal Medical Council-registered Consultant Psychiatrist in Kathmandu who treats anxiety disorders using evidence-based CBT and medication, in person or online.",
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
      <AnxietyGuide lang="en" />
    </>
  );
}
