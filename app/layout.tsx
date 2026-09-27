import type { Metadata } from "next";
import Script from "next/script";
import ConversionDock from "./components/ConversionDock";
import ConversionTracking from "./components/ConversionTracking";
import LangSync from "./components/LangSync";
import { languageMetadata } from "./lib/language";
import "./globals.css";

const siteUrl = "https://drkushalkharel.com.np";
const googleAnalyticsId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-ZJ7RMBFRYL";
const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
const bingSiteVerification = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION;
const adsenseClientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;
const doctorImage = "/images/doctor.png";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  // Pages supply only the keyword part; the template adds a short brand so the whole
  // title stays within 60 characters. See app/lib/seoText.ts.
  title: {
    default: "Psychiatrist in Kathmandu, Nepal | Dr. Kushal Kharel",
    template: "%s | Dr. Kharel",
  },

  description:
    "Dr. Kushal Kharel is a Consultant Psychiatrist in Kalanki, Kathmandu. NMC-licensed, offering evidence-based in-person and online psychiatric care for anxiety, depression, mood and psychotic disorders, and addiction.",

  keywords: [
    "Best Psychiatrist in Nepal",
    "Top Psychiatrist in Nepal",
    "Best Psychiatrist in Kathmandu",
    "Top Psychiatrist in Kathmandu",
    "Psychiatrist Kathmandu",
    "Psychiatrist Nepal",
    "Mental Health Doctor Nepal",
    "Mental Health Doctor Kathmandu",
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
    "Psychotherapy Nepal",
    "Corporate Mental Health Screening Nepal",
    "Workplace Stress Management Nepal",
    "Employee Wellness Program Nepal",
  ],

  authors: [{ name: "Dr. Kushal Kharel" }],

  applicationName: "Dr. Kushal Kharel Psychiatry",
  creator: "Dr. Kushal Kharel",
  publisher: "Dr. Kushal Kharel",
  category: "healthcare",

  openGraph: {
    title: "Dr. Kushal Kharel | Best Psychiatrist in Kathmandu, Nepal",
    description:
      "Consultant Psychiatrist in Kalanki, Kathmandu. NMC-licensed, offering in-person and online psychiatric consultation. Call +977 9861800547",
    url: siteUrl,
    siteName: "Dr. Kushal Kharel - Consultant Psychiatrist",
    images: [
      {
        url: doctorImage,
        width: 800,
        height: 800,
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
      "Consultant Psychiatrist in Kalanki, Kathmandu. NMC-licensed, in-person and online consultation.",
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
    canonical: `${siteUrl}/`,
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

  // Pages in another language override this via languageMetadata() in
  // app/lib/language.ts; scripts/stamp-html-lang.mjs copies it onto <html lang>.
  ...languageMetadata("en"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <LangSync />
        <ConversionDock />
        <ConversionTracking />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleAnalyticsId}', { page_path: window.location.pathname });`}
        </Script>
        {adsenseClientId && (
          <Script
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClientId}`}
            strategy="lazyOnload"
            crossOrigin="anonymous"
          />
        )}
        {/* Google Preferred Sources: lets readers mark this site as a
            source they prefer, which can surface it more in Top Stories,
            AI Overviews and AI Mode. See app/components/Footer.tsx for
            the button itself. */}
        <Script
          src="https://news.google.com/swg/js/v1/publisher.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
