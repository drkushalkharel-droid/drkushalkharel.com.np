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
  title:
    "Psychiatrist in Nepal & Kathmandu | Anxiety, Depression, Addiction Care",
  description:
    "Call Dr. Kushal Kharel, Consultant Psychiatrist in Kathmandu, Nepal for anxiety, depression, OCD, ADHD, bipolar disorder, schizophrenia, addiction, counselling and online consultation.",
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
    "Psychiatrist Lalitpur",
    "Mental Health Doctor Nepal",
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
    about: { "@id": `${siteUrl}#clinic` },
    mainEntity: { "@id": `${siteUrl}#psychiatrist` },
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
