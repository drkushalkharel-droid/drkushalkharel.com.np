import type { Metadata } from "next";
import ConversionDock from "./components/ConversionDock";
import "./globals.css";

const siteUrl = "https://drkushalkharel.com.np";
const googleAnalyticsId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-ZJ7RMBFRYL";
const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
const bingSiteVerification = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION;
const adsenseClientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID ?? "ca-pub-7242413910722530";
const doctorImage = "/images/doctor.png";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "Dr. Kushal Kharel | Psychiatrist in Kathmandu, Nepal",
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

  applicationName: "Dr. Kushal Kharel Psychiatry",
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

  ...(googleSiteVerification || bingSiteVerification
    ? {
        verification: {
          ...(googleSiteVerification ? { google: googleSiteVerification } : {}),
          ...(bingSiteVerification ? { other: { "msvalidate.01": bingSiteVerification } } : {}),
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
      streetAddress: "Kalanki-14, Near Malpot Road, Near Kalanki Bhatbhateni Supermarket",
      addressLocality: "Kathmandu",
      addressRegion: "Bagmati",
      postalCode: "44600",
      addressCountry: "NP",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 27.6914922,
      longitude: 85.2807309,
    },
    hasMap: "https://maps.app.goo.gl/2t5B2EqgDKYMRLE48",
    sameAs: [
      "https://facebook.com/cooshal.kharel",
      "https://www.instagram.com/cusalnova",
      "https://www.twitter.com/Drkushalpsych",
      "https://www.tiktok.com/@drkushalkharel",
      "https://www.threads.net/@cusalnova",
      "https://maps.app.goo.gl/2t5B2EqgDKYMRLE48",
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
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Psychiatric Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Anxiety Disorder Treatment" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Depression Treatment" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "OCD Treatment" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "ADHD Management" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Addiction Treatment" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Online Telepsychiatry" } },
      ],
    },
    image: `${siteUrl}${doctorImage}`,
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
    image: `${siteUrl}${doctorImage}`,
    telephone: "+9779861800547",
    email: "drkushalkharel@gmail.com",
    medicalSpecialty: "Psychiatry",
    worksFor: {
      "@id": `${siteUrl}#clinic`,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kalanki-14, Near Malpot Road, Near Kalanki Bhatbhateni Supermarket",
      addressLocality: "Kathmandu",
      addressRegion: "Bagmati",
      postalCode: "44600",
      addressCountry: "NP",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 27.6914922,
      longitude: 85.2807309,
    },
    hasMap: "https://maps.app.goo.gl/2t5B2EqgDKYMRLE48",
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "license",
        name: "Nepal Medical Council Registered Psychiatrist",
        identifier: "27199",
        recognizedBy: {
          "@type": "Organization",
          name: "Nepal Medical Council",
        },
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        name: "MD Psychiatry",
      },
    ],
    memberOf: [
      {
        "@type": "Organization",
        name: "Nepal Medical Association",
      },
      {
        "@type": "Organization",
        name: "Psychiatrists' Association of Nepal",
      },
    ],
    alumniOf: {
      "@type": "MedicalOrganization",
      name: "KIST Medical College Teaching Hospital",
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

  const websiteJsonLd = {
    "@type": "WebSite",
    "@id": `${siteUrl}#website`,
    name: "Dr. Kushal Kharel Psychiatry",
    alternateName: "Dr. Kushal Kharel",
    url: siteUrl,
    inLanguage: ["en", "ne"],
    publisher: { "@id": `${siteUrl}#clinic` },
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [medicalBusinessJsonLd, psychiatristJsonLd, websiteJsonLd],
  };

  return (
    <html lang="en">
      <head>
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClientId}`}
          crossOrigin="anonymous"
        />
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body>
        {children}
        <ConversionDock />
      </body>
    </html>
  );
}
