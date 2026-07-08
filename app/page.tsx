import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Statistics from "./components/Statistics";
import About from "./components/About";
import Awards from "./components/Awards";
import Services from "./components/Services";
import Conditions from "./components/Conditions";
import SearchIntentSection from "./components/SearchIntentSection";
import CitySeoSection from "./components/CitySeoSection";
import ScreeningTeaser from "./components/ScreeningTeaser";
import AbroadSeoSection from "./components/AbroadSeoSection";
import Testimonials from "./components/Testimonials";
import GoogleReviewsMap from "./components/GoogleReviewsMap";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

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
    "Psychiatrist near me Kathmandu",
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

export default function Home() {
  // Structured data for Physician
  const physicianJsonLd = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: "Dr. Kushal Kharel",
    url: "https://drkushalkharel.com.np",
    image: "https://drkushalkharel.com.np/images/doctor.png",
    telephone: "+9779861800547",
    email: "drkushalkharel@gmail.com",
    medicalSpecialty: "Psychiatry",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kalanki-14, Near Malpot Road",
      addressLocality: "Kathmandu",
      addressCountry: "NP",
    },
    areaServed: ["Kathmandu", "Nepal", "Online"],
    availableService: [
      "Psychiatric Consultation",
      "Anxiety Treatment",
      "Depression Treatment",
      "Addiction Treatment",
      "Online Psychiatric Consultation",
      "Psychotherapy",
      "ADHD Treatment",
      "Bipolar Disorder Treatment",
      "OCD Treatment",
      "Telepsychiatry",
    ],
    qualification: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "MD in Psychiatry",
      },
    ],
  };

  // Structured data for Services
  const servicesJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Dr. Kushal Kharel - Consultant Psychiatrist",
    description:
      "Comprehensive psychiatric care including anxiety, depression, OCD, ADHD, bipolar disorder, addiction treatment and telepsychiatry",
    url: "https://drkushalkharel.com.np",
    telephone: "+9779861800547",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kalanki-14, Near Malpot Road",
      addressLocality: "Kathmandu",
      addressCountry: "NP",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Psychiatric Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Anxiety Disorder Treatment",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Depression Treatment",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "OCD Treatment",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "ADHD Management",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Addiction Treatment",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Online Telepsychiatry",
          },
        },
      ],
    },
    sameAs: [
      "https://facebook.com/cooshal.kharel",
      "https://www.instagram.com/cusalnova",
      "https://www.twitter.com/Drkushalpsych",
      "https://www.tiktok.com/@drkushalkharel",
      "https://www.threads.net/@cusalnova",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <Navbar />
      <Hero />
      <SearchIntentSection />
      <ScreeningTeaser />
      <CitySeoSection />
      <AbroadSeoSection />
      <Statistics />
      <About />
      <Awards />
      <Services />
      <Conditions />
      <Testimonials />
      <GoogleReviewsMap />
      <FAQ />
      <Footer />
    </>
  );
}
