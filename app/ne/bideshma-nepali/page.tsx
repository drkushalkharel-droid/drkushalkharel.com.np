import type { Metadata } from "next";
import NepaliAbroadPage from "../../components/NepaliAbroadPage";
import { languageMetadata } from "../../lib/language";
import { hreflangAlternates } from "../../data/translationPairs";

const title = "विदेशमा रहेका नेपालीका लागि अनलाइन मनोचिकित्सा | डा. कुशल खरेल";
const description = "विदेशमा बसेरै नेपाली भाषामा अनलाइन मानसिक स्वास्थ्य परामर्श लिनुहोस्। चिन्ता, डिप्रेसन र अन्य समस्याका लागि प्रमाणित CBT थेरापिस्ट तथा कन्सल्टेन्ट साइकाइट्रिस्ट डा. कुशल खरेलसँग भिडियो परामर्श।";
const url = "https://drkushalkharel.com.np/ne/bideshma-nepali";

export const metadata: Metadata = {
  title, description,
  alternates: { canonical: "/ne/bideshma-nepali/", languages: hreflangAlternates("/ne/bideshma-nepali/") },
  ...languageMetadata("ne"),
  keywords: ["विदेशमा नेपाली मनोचिकित्सक", "अनलाइन मनोचिकित्सक नेपाली", "विदेशमा चिन्ता उपचार", "विदेशमा डिप्रेसन उपचार", "नेपाली CBT थेरापिस्ट", "नेपालीका लागि अनलाइन काउन्सेलिङ"],
  openGraph: { title, description, url, siteName: "Dr. Kushal Kharel", locale: "ne_NP", type: "website", images: [{ url: "/images/doctor.png", width: 1200, height: 630, alt: "डा. कुशल खरेल, कन्सल्टेन्ट साइकाइट्रिस्ट" }] },
  twitter: { card: "summary_large_image", title, description, images: ["/images/doctor.png"] },
};

export default function Page() {
  const data = { "@context": "https://schema.org", "@type": "MedicalWebPage", name: title, description, url, inLanguage: "ne", about: "विदेशमा रहेका नेपालीका लागि अनलाइन मानसिक स्वास्थ्य परामर्श", reviewedBy: { "@id": "https://drkushalkharel.com.np#psychiatrist" }, provider: { "@id": "https://drkushalkharel.com.np#psychiatrist" } };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} /><NepaliAbroadPage /></>;
}
