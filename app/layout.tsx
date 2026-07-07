import type { Metadata } from "next";
import Script from "next/script";
import ConversionDock from "./components/ConversionDock";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://drkushalkharel.com.np"),

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

  openGraph: {
    title: "Dr. Kushal Kharel | Best Psychiatrist in Kathmandu, Nepal",
    description:
      "Evidence-based psychiatry, counselling, de-addiction care and telepsychiatry in Nepal. Call +977 9861800547",
    url: "https://drkushalkharel.com.np",
    siteName: "Dr. Kushal Kharel - Consultant Psychiatrist",
    images: [
      {
        url: "https://drkushalkharel.com.np/images/doctor.png",
        width: 1200,
        height: 630,
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
    images: ["https://drkushalkharel.com.np/images/doctor.png"],
    creator: "@drkushalkharel",
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
    canonical: "https://drkushalkharel.com.np",
  },

  verification: {
    google: "your-google-site-verification-code",
  },

  appLinks: {
    ios: {
      url: "https://drkushalkharel.com.np",
      app_store_id: "0",
    },
    android: {
      package: "com.drkushalkharel",
      app_name: "Dr. Kushal Kharel",
    },
    web: {
      url: "https://drkushalkharel.com.np",
      should_fallback: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured data for Organization
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": "https://drkushalkharel.com.np",
    name: "Dr. Kushal Kharel - Consultant Psychiatrist",
    alternateName: "Dr Kushal Kharel Psychiatry Clinic",
    description:
      "Consultant Psychiatrist providing evidence-based treatment for anxiety, depression, ADHD, OCD, bipolar disorder, and addiction",
    url: "https://drkushalkharel.com.np",
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
    image: "https://drkushalkharel.com.np/images/doctor.png",
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

  return (
    <html lang="en">
      <head>
        <Script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-ZJ7RMBFRYL"
/>

<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-ZJ7RMBFRYL');
  `}
</Script>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="x-ua-compatible" content="IE=edge" />
        <meta name="theme-color" content="#0f3a73" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=yes" />
        <link rel="canonical" href="https://drkushalkharel.com.np" />
        <Script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-ZJ7RMBFRYL"
  strategy="afterInteractive"
/>

<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-ZJ7RMBFRYL');
  `}
</Script>
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body>
        {children}
        <ConversionDock />
      </body>
    </html>
  );
}
