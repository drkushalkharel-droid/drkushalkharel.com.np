import type { Metadata } from "next";
import AnxietyGuide from "../AnxietyGuide";

const pageUrl = "https://drkushalkharel.com.np/anxiety/np";
const title = "चिन्ता विकार उपचार काठमाडौं | लक्षण, कारण र समाधान";
const description =
  "डा. कुशल खरेल, काठमाडौंका कन्सल्टेन्ट साइकाइट्रिस्टबाट चिन्ता विकारका लक्षण, कारण, उपचार विधि (CBT, औषधि) र कहिले सहयोग लिने भन्ने बारे नेपाली भाषामा जानकारी।";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/anxiety/np",
    languages: {
      en: "/anxiety",
      ne: "/anxiety/np",
    },
  },
  keywords: [
    "चिन्ता रोग उपचार",
    "मनोचिकित्सक काठमाडौं",
    "चिन्ता विकार लक्षण",
    "प्यानिक अट्याक उपचार नेपाल",
    "डा कुशल खरेल",
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
    locale: "ne_NP",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/doctor.png"],
  },
};

export default function AnxietyNepaliPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: title,
    description,
    url: pageUrl,
    inLanguage: "ne",
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
        name: "के चिन्ता निको हुन्छ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "उचित उपचारले धेरैजसो मानिसमा राम्रो सुधार हुन्छ। केहीमा पूर्ण सुधार हुन्छ भने केहीले लक्षणलाई राम्रोसँग नियन्त्रण गर्न सिक्छन्।",
        },
      },
      {
        "@type": "Question",
        name: "औषधि सधैं खानुपर्छ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "धेरै अवस्थामा सधैं आवश्यक हुँदैन। अवधि लक्षणको गम्भीरता, दोहोरिने सम्भावना र सुधार अनुसार मनोचिकित्सकसँग मिलेर तय गरिन्छ।",
        },
      },
      {
        "@type": "Question",
        name: "अनलाइन परामर्श लिन मिल्छ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "मिल्छ। धेरै चिन्तासम्बन्धी समस्यामा अनलाइन परामर्श, follow-up, psychoeducation र उपचार अनुगमन उपयोगी हुन सक्छ।",
        },
      },
      {
        "@type": "Question",
        name: "काठमाडौंमा चिन्ता रोगको उपचार कसले गर्छ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "डा. कुशल खरेल, काठमाडौंका कन्सल्टेन्ट साइकाइट्रिस्टले सामान्यीकृत चिन्ता विकार, प्यानिक डिसअर्डर, सामाजिक चिन्ता र फोबियाजस्ता समस्याको प्रमाण-आधारित उपचार (CBT र आवश्यक परेमा औषधि) व्यक्तिगत रूपमा वा अनलाइनमार्फत प्रदान गर्नुहुन्छ।",
        },
      },
      {
        "@type": "Question",
        name: "काठमाडौंमा चिन्ता रोगको लागि उत्तम मनोचिकित्सक को हो?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "कुनै एउटै प्रमाणित 'उत्तम' मनोचिकित्सक हुँदैन — दर्ता भएको र सान्दर्भिक अनुभव भएको विशेषज्ञ खोज्नुहोस्। डा. कुशल खरेल नेपाल मेडिकल काउन्सिलमा दर्ता भएका काठमाडौंका कन्सल्टेन्ट साइकाइट्रिस्ट हुन्, जसले प्रमाण-आधारित CBT र औषधिद्वारा चिन्ता रोगको उपचार व्यक्तिगत रूपमा वा अनलाइनमार्फत गर्नुहुन्छ।",
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
      <AnxietyGuide lang="np" />
    </>
  );
}
