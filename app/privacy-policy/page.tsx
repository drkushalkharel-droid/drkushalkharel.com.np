import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://drkushalkharel.com.np";
const title = "Privacy Policy";
const description =
  "How Dr. Kushal Kharel's website collects, uses and protects your information, including analytics, contact details and website cookies.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Privacy Policy", item: `${siteUrl}/privacy-policy` },
    ],
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 pb-14 pt-28 lg:px-8 lg:pt-32">
          <Link href="/" className="font-semibold text-blue-700">
            &larr; Back to home
          </Link>
          <h1 className="mt-8 text-4xl font-bold leading-tight text-slate-950 md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-slate-500">Last updated: July 2026</p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl space-y-8 px-6 py-14 lg:px-8">
        <section>
          <h2 className="text-2xl font-bold text-blue-950">Overview</h2>
          <p className="mt-3 leading-8 text-slate-600">
            This website (drkushalkharel.com.np) is operated by Dr. Kushal
            Kharel, Consultant Psychiatrist. This policy explains what
            information the website collects, how it is used, and how you can
            contact us with questions or concerns.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-blue-950">
            Information You Provide Directly
          </h2>
          <p className="mt-3 leading-8 text-slate-600">
            We only receive personal information when you choose to provide
            it — for example, by calling, messaging on WhatsApp, or emailing
            us to ask a question or arrange a consultation. This may include
            your name, contact details, and information you share about your
            health or reason for contacting us. This information is used
            solely to respond to you and, where you proceed with treatment,
            to provide clinical care, in line with standard medical
            confidentiality and record-keeping practices.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-blue-950">
            Website Analytics
          </h2>
          <p className="mt-3 leading-8 text-slate-600">
            This website uses Google Analytics (GA4) to understand how
            visitors use the site — for example, which pages are viewed and
            how visitors arrived at the site. This is aggregated, anonymized
            usage data and does not identify you personally. You can opt out
            of Google Analytics tracking using your browser&apos;s privacy
            settings or a browser extension such as Google&apos;s official
            opt-out add-on.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-blue-950">Cookies</h2>
          <p className="mt-3 leading-8 text-slate-600">
            The website may use cookies set by Google Analytics to
            distinguish unique visitors and improve the site. No cookies are
            used for advertising or to sell your data to third parties.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-blue-950">
            How We Protect Your Information
          </h2>
          <p className="mt-3 leading-8 text-slate-600">
            Any clinical information you share is treated as confidential
            medical information, handled in line with standard medical ethics
            and confidentiality obligations. We do not sell, rent, or share
            your personal information with third parties for marketing
            purposes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-blue-950">
            Third-Party Links
          </h2>
          <p className="mt-3 leading-8 text-slate-600">
            This site links to third-party platforms, including WhatsApp,
            Google Maps, and social media profiles. These platforms have
            their own privacy policies, which we encourage you to review
            separately.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-blue-950">
            Contact About Privacy
          </h2>
          <p className="mt-3 leading-8 text-slate-600">
            If you have questions about this privacy policy or how your
            information is handled, please contact us at{" "}
            <a
              href="mailto:drkushalkharel@gmail.com"
              className="font-semibold text-blue-700"
            >
              drkushalkharel@gmail.com
            </a>{" "}
            or{" "}
            <a href="tel:+9779861800547" className="font-semibold text-blue-700">
              +977 9861800547
            </a>
            .
          </p>
        </section>
      </article>
    </main>
  );
}
