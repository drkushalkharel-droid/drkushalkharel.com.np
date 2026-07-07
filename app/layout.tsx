import type { Metadata } from "next";
import ConversionDock from "./components/ConversionDock";
import "./globals.css";
import {
  absoluteDoctorImage,
  doctorImage,
  jsonLdScript,
  siteUrl,
} from "./lib/seo";

const googleAnalyticsId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-ZJ7RMBFRYL";
const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "Dr. Kushal Kharel | Best Psychiatrist in Nepal & Kathmandu | Mental Health Care",
    template: "%s | Dr. Kushal Kharel",
  },

  description:
    "Consultant Psychiatrist in Kathmandu, Nepal providing evidence-based treatment for anxiety, depression, OCD, bipolar disorder, schizophrenia, ADHD, addiction, counselling, psychotherapy and online psychiatric consultation.",

  keywords: [
    "Best Psychiatrist in Nepal",
    "Top Psychiatrist in Nepal",
    "Best Psychiatrist in Kathmandu",
    "Top Psychiatrist in Kathmandu",
    "Psychiatrist Kathmandu",
    "Psychiatrist Nepal",
    "Mental Health Doctor Nepal",
    "Mental Health Doctor Kathmandu",
    "Neuropsychiatrist Kathmandu",
    "Neuropsychiatrist",
    "Consultant Psychiatrist Nepal",
    "Consultant Psychiatrist Kathmandu",
    "Depression Treatment",
    "Depression Treatment Nepal",
    "Depression Treatment Kathmandu",
    "Anxiety Treatment",
    "Anxiety Treatment Nepal",
    "Anxiety Treatment Kathmandu",
    "OCD",
    "OCD Treatment Nepal",
    "ADHD",
    "ADHD Treatment Nepal",
    "Bipolar Disorder",
    "Schizophrenia",
    "Addiction Treatment",
    "De-addiction Treatment Nepal",
    "Alcohol Addiction Treatment Nepal",
    "Online Psychiatrist Nepal",
    "Telepsychiatry Nepal",
    "Mental Health Counseling",
    "Mental Health Nepal",
    "Dr Kushal Kharel",
    "Neuropsychiatry Nepal",
    "Psychotherapy Nepal",
  ],

  authors: [{ name: "Dr. Kushal Kharel" }],

  creator: "Dr. Kushal Kharel",
  publisher: "Dr. Kushal Kharel",
  category: "healthcare",

  openGraph: {
    title: "Dr. Kushal Kharel | Best Psychiatrist in Kathmandu, Nepal",
    description:
      "Evidence-based psychiatry, counselling, de-addiction care and telepsychiatry in Nepal. Call +977 9861800547",
    url: siteUrl,
    siteName: "Dr. Kushal Kharel - Consultant Psychiatrist",
    images: [
      {
        url: doctorImage,
        width: 1365,
        height: 1909,
        alt: "Dr. Kushal Kharel - Consultant Psychiatrist in Kathmandu",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Dr. Kushal Kharel | Psychiatrist in Kathmandu, Nepal",
    description:
      "Expert psychiatric care, anxiety treatment, depression therapy, addiction counseling in Kathmandu",
    images: [doctorImage],
    creator: "@Drkushalpsych",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: siteUrl,
  },

  ...(googleSiteVerification
    ? {
        verification: {
          google: googleSiteVerification,
        },
      }
    : {}),

  manifest: "/manifest.webmanifest",

  other: {
    "format-detection": "telephone=yes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const medicalBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${siteUrl}#clinic`,
    name: "Dr. Kushal Kharel - Consultant Psychiatrist",
    alternateName: "Dr Kushal Kharel Psychiatry Clinic",
    description:
      "Consultant Psychiatrist providing evidence-based treatment for anxiety, depression, ADHD, OCD, bipolar disorder, and addiction",
    url: siteUrl,
    telephone: "+9779861800547",
    email: "drkushalkharel@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kalanki-14, Near Malpot Road",
      addressLocality: "Kathmandu",
      addressRegion: "Bagmati",
      postalCode: "44600",
      addressCountry: "NP",
    },
    sameAs: [
      "https://facebook.com/cooshal.kharel",
      "https://www.instagram.com/cusalnova",
      "https://www.twitter.com/Drkushalpsych",
      "https://www.tiktok.com/@drkushalkharel",
      "https://www.threads.net/@cusalnova",
    ],
    medicalSpecialty: "Psychiatry",
    areaServed: ["Kathmandu", "Nepal"],
    availableService: [
      "Psychiatric Consultation",
      "Depression Treatment",
      "Anxiety Treatment",
      "OCD Treatment",
      "ADHD Treatment",
      "Bipolar Disorder Treatment",
      "Addiction Treatment",
      "Online Consultation",
    ],
    image: absoluteDoctorImage,
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "10:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "16:00",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      telephone: "+9779861800547",
      email: "drkushalkharel@gmail.com",
    },
  };

  const psychiatristJsonLd = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": `${siteUrl}#psychiatrist`,
    name: "Dr. Kushal Kharel",
    url: siteUrl,
    image: absoluteDoctorImage,
    telephone: "+9779861800547",
    email: "drkushalkharel@gmail.com",
    medicalSpecialty: "Psychiatry",
    worksFor: {
      "@id": `${siteUrl}#clinic`,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kalanki-14, Near Malpot Road",
      addressLocality: "Kathmandu",
      addressRegion: "Bagmati",
      postalCode: "44600",
      addressCountry: "NP",
    },
    areaServed: ["Kathmandu", "Nepal", "Online"],
    knowsAbout: [
      "Anxiety disorders",
      "Depression",
      "OCD",
      "ADHD",
      "Bipolar disorder",
      "Schizophrenia",
      "Addiction psychiatry",
      "Telepsychiatry",
    ],
    sameAs: [
      "https://facebook.com/cooshal.kharel",
      "https://www.instagram.com/cusalnova",
      "https://www.twitter.com/Drkushalpsych",
      "https://www.tiktok.com/@drkushalkharel",
      "https://www.threads.net/@cusalnova",
    ],
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [medicalBusinessJsonLd, psychiatristJsonLd],
  };

  return (
    <html lang="en">
      <head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
        />
        <script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleAnalyticsId}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(jsonLd)}
        />
      </head>
      <body>
        {children}
        <ConversionDock />
      </body>
    </html>
  );
}
