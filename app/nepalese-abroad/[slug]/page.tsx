import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MessageCircle, Phone } from "lucide-react";
import { abroadGuides, getAbroadGuide } from "../../data/abroad";
import { breadcrumbJsonLd, jsonLdScript, siteUrl } from "../../lib/seo";

export function generateStaticParams() {
  return abroadGuides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getAbroadGuide(slug);

  if (!guide) {
    return {};
  }

  const title = `Nepali Psychiatrist for Nepalese in ${guide.country}`;
  const description = `${guide.headline}. Learn common mental health concerns among Nepalese in ${guide.country} and contact Dr. Kushal Kharel at +9779861800547.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/nepalese-abroad/${guide.slug}`,
    },
    keywords: [
      ...guide.searchTerms,
      `Nepali mental health support ${guide.country}`,
      `Nepalese depression anxiety ${guide.country}`,
      `Dr Kushal Kharel ${guide.country}`,
      "online psychiatrist Nepal",
    ],
    openGraph: {
      title,
      description,
      url: `${siteUrl}/nepalese-abroad/${guide.slug}`,
      siteName: "Dr. Kushal Kharel",
      images: [
        {
          url: "/images/doctor.png",
          width: 1200,
          height: 630,
          alt: "Dr. Kushal Kharel - Consultant Psychiatrist",
        },
      ],
      type: "article",
    },
  };
}

export default async function NepaleseAbroadPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getAbroadGuide(slug);

  if (!guide) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: guide.headline,
    description: guide.intro,
    url: `${siteUrl}/nepalese-abroad/${guide.slug}`,
    inLanguage: "en",
    audience: {
      "@type": "PeopleAudience",
      name: `Nepalese people in ${guide.country}`,
    },
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
  };

  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home", url: siteUrl },
    { name: "Nepalese Abroad", url: `${siteUrl}/#nepalese-abroad` },
    { name: guide.country, url: `${siteUrl}/nepalese-abroad/${guide.slug}` },
  ]);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(jsonLd)}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(breadcrumbs)}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 pb-14 pt-28 lg:px-8 lg:pt-32">
          <Link href="/#nepalese-abroad" className="font-semibold text-blue-700">
            Back to Nepalese abroad guides
          </Link>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[3px] text-blue-700">
            {guide.region}
          </p>
          <h1 className="mt-5 text-4xl font-bold leading-tight text-slate-950 md:text-6xl">
            Nepali psychiatrist guidance for Nepalese in {guide.country}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            {guide.intro}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="tel:+9779861800547"
              className="inline-flex items-center gap-3 rounded-lg bg-blue-700 px-6 py-3 font-bold text-white transition hover:bg-blue-800"
            >
              <Phone size={20} aria-hidden="true" />
              Call +977 9861800547
            </a>
            <a
              href="https://wa.me/9779861800547"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-lg border border-green-600 px-6 py-3 font-bold text-green-700 transition hover:bg-green-600 hover:text-white"
            >
              <MessageCircle size={20} aria-hidden="true" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <h2 className="text-3xl font-bold text-slate-950">
              Common mental health concerns among Nepalese in {guide.country}
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              Living abroad can bring opportunity and pressure at the same
              time. Mental health support is especially important when symptoms
              affect sleep, study, work, relationships, safety or substance use.
            </p>
            <div className="mt-8 rounded-lg border border-amber-200 bg-amber-50 p-5 leading-7 text-amber-950">
              {guide.practicalNote}
            </div>
          </div>

          <div className="grid gap-4">
            {guide.commonConcerns.map((concern) => (
              <div
                key={concern}
                className="rounded-lg border border-slate-200 bg-white p-5 font-semibold text-slate-800 shadow-sm"
              >
                {concern}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-slate-950">
                How Nepalese in {guide.country} can contact Dr. Kushal Kharel
              </h2>
              <p className="mt-4 leading-8 text-slate-600">
                Call or message with your main concern, symptom duration,
                current medicines, previous diagnosis, substance use, sleep
                pattern, safety concerns and country of residence. Dr. Kushal
                Kharel can guide whether online psychiatric consultation,
                family discussion, local emergency care or in-person follow-up
                is most appropriate.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {guide.searchTerms.map((term) => (
                  <span
                    key={term}
                    className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-900"
                  >
                    {term}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-lg bg-blue-950 p-6 text-white">
              <h3 className="text-2xl font-bold">Contact</h3>
              <p className="mt-3 leading-7 text-blue-100">
                Psychiatric guidance for patients in Nepal and Nepali people
                living abroad.
              </p>
              <a
                href="tel:+9779861800547"
                className="mt-6 block rounded-lg bg-white px-5 py-3 text-center font-bold text-blue-950"
              >
                +977 9861800547
              </a>
              <a
                href="https://wa.me/9779861800547"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block rounded-lg border border-white/50 px-5 py-3 text-center font-bold text-white"
              >
                WhatsApp consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
