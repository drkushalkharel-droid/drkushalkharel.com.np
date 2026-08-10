import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Statistics from "./components/Statistics";
import About from "./components/About";
import Experience from "./components/Experience";
import Awards from "./components/Awards";
import Services from "./components/Services";
import Conditions from "./components/Conditions";
import SearchIntentSection from "./components/SearchIntentSection";
import CitySeoSection from "./components/CitySeoSection";
import ScreeningTeaser from "./components/ScreeningTeaser";
import AbroadSeoSection from "./components/AbroadSeoSection";
import Testimonials from "./components/Testimonials";
import GoogleReviewsMap from "./components/GoogleReviewsMap";
import AppointmentGuide from "./components/AppointmentGuide";
import CounsellingSeoSection from "./components/CounsellingSeoSection";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import { buildSpeakableSpec } from "./lib/schema";

export const metadata: Metadata = {
  title: "Psychiatrist in Kathmandu, Nepal | Dr. Kushal Kharel",
  description:
    "Dr. Kushal Kharel, MD — Consultant Psychiatrist in Kathmandu since 2020. Evidence-based care for anxiety, depression, OCD, ADHD & more. Book online today.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Best Psychiatrist in Nepal",
    "Top Psychiatrist in Nepal",
    "Best Psychiatrist in Kathmandu",
    "Top Psychiatrist in Kathmandu",
    "Psychiatrist near me",
    "Best Psychiatrist near me",
    "Psychiatrist near me Kathmandu",
    "Psychiatrist Kathmandu",
    "Psychiatrist Doctor in Kathmandu",
    "Psychiatrist Lalitpur",
    "Mental Health Doctor Nepal",
    "Mental Health in Kathmandu",
    "Mental Health in Nepal",
    "Anxiety Treatment Nepal",
    "Depression Treatment Nepal",
    "Online Psychiatrist Nepal",
    "Addiction Psychiatrist Nepal",
    "Mental Health Screening Nepal",
    "Depression Screening Nepal",
    "Anxiety Screening Nepal",
    "Nepali Psychiatrist Abroad",
    "Best Psychiatrist in Chitwan",
    "Best Psychiatrist in Biratnagar",
    "Best Psychiatrist in Dhangadhi",
    "Best Psychiatrist in Pokhara",
    "Best Psychiatrist in Nepalgunj",
  ],
  openGraph: {
    title: "Dr. Kushal Kharel | Psychiatrist in Kathmandu, Nepal",
    description:
      "Consultant psychiatric care in Kathmandu and online for anxiety, depression, OCD, ADHD, addiction and more.",
    url: "/",
    siteName: "Dr. Kushal Kharel - Consultant Psychiatrist",
    images: [
      {
        url: "/images/doctor.png",
        width: 1365,
        height: 1909,
        alt: "Dr. Kushal Kharel, Consultant Psychiatrist in Kathmandu, Nepal",
      },
    ],
    locale: "en_NP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Kushal Kharel | Psychiatrist in Kathmandu, Nepal",
    description:
      "Consultant psychiatric care in Kathmandu and online across Nepal.",
    images: ["/images/doctor.png"],
  },
};

const siteUrl = "https://drkushalkharel.com.np";

export default function Home() {
  // The canonical MedicalBusiness/Physician entities (with @id) live in
  // layout.tsx and apply site-wide. This page only adds a WebPage entity
  // that references them, rather than redeclaring competing duplicates.
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Dr. Kushal Kharel | Psychiatrist in Kathmandu, Nepal",
    url: siteUrl,
    isPartOf: { "@id": `${siteUrl}#website` },
    about: [
      { "@id": `${siteUrl}#clinic` },
      { "@id": `${siteUrl}#psychiatrist` },
    ],
    mainEntity: { "@id": `${siteUrl}#psychiatrist` },
    primaryImageOfPage: `${siteUrl}/images/doctor.png`,
    inLanguage: "en-NP",
    speakable: buildSpeakableSpec(["#hero-quick-answer"]),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <Navbar />
      <Hero />
      <SearchIntentSection />
      <ScreeningTeaser />
      <CitySeoSection />
      <AbroadSeoSection />
      <Statistics />
      <About />
      <Experience />
      <Awards />
      <Services />
      <CounsellingSeoSection />
      <Conditions />
      <AppointmentGuide />
      <Testimonials />
      <GoogleReviewsMap />
      <FAQ />
      <Footer />
    </>
  );
}
