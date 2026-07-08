import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import { cityGuides, getCityGuide } from "../../data/cities";

const siteUrl = "https://drkushalkharel.com.np";

export function generateStaticParams() {
  return cityGuides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getCityGuide(slug);

  if (!guide) {
    return {};
  }

  const title = `Best Psychiatrist in ${guide.city} | Mental Health Help`;
  const description = `${guide.headline}. Learn common mental health problems in ${guide.city}, when to seek psychiatric help, and call Dr. Kushal Kharel at +9779861800547.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/cities/${guide.slug}`,
    },
    keywords: [
      ...guide.searchTerms,
      `psychiatrist near me ${guide.city}`,
      `mental health care ${guide.city}`,
      `online psychiatrist ${guide.city}`,
      `Dr Kushal Kharel ${guide.city}`,
    ],
    openGraph: {
      title,
      description,
      url: `${siteUrl}/cities/${guide.slug}`,
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

export default async function CityGuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getCityGuide(slug);

  if (!guide) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: guide.headline,
    description: guide.intro,
    url: `${siteUrl}/cities/${guide.slug}`,
    inLanguage: "en",
    about: guide.commonConcerns.map((concern) => ({
      "@type": "MedicalCondition",
      name: concern.name,
    })),
    reviewedBy: {
      "@type": "Physician",
      name: "Dr. Kushal Kharel",
      medicalSpecialty: "Psychiatry",
      telephone: "+9779861800547",
      address: {
        "@type": "PostalAddress",
        streetAddress: guide.clinicLocation?.streetAddress,
        addressLocality: "Kathmandu",
        postalCode: guide.clinicLocation?.postalCode,
        addressCountry: "NP",
      },
      ...(guide.clinicLocation && {
        geo: {
          "@type": "GeoCoordinates",
          latitude: 27.6914922,
          longitude: 85.2807309,
        },
        hasMap: guide.clinicLocation.directionsUrl,
      }),
    },
    areaServed: guide.city,
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 pb-14 pt-28 lg:px-8 lg:pt-32">
          <Link href="/#cities" className="font-semibold text-blue-700">
            Back to city guides
          </Link>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[3px] text-blue-700">
            {guide.province}
          </p>
          <h1 className="mt-5 text-4xl font-bold leading-tight text-slate-950 md:text-6xl">
            Best psychiatrist in {guide.city}: mental health guidance and
            consultation
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
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-3xl font-bold text-slate-950">
              Common mental health concerns in {guide.city}
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              {guide.localContext}
            </p>
            <div className="mt-8 rounded-lg border border-amber-200 bg-amber-50 p-5 leading-7 text-amber-950">
              If there is risk of self-harm, violence, severe confusion,
              overdose, withdrawal complications or inability to care for basic
              needs, seek emergency medical help immediately.
            </div>
          </div>

          <div className="grid gap-5">
            {guide.commonConcerns.map((concern) => (
              <article
                key={concern.name}
                className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-2xl font-bold text-blue-950">
                  {concern.name}
                </h3>
                <p className="mt-3 leading-8 text-slate-600">
                  {concern.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-slate-950">
                How to contact Dr. Kushal Kharel from {guide.city}
              </h2>
              <p className="mt-4 leading-8 text-slate-600">
                Call or message to explain the main concern, symptom duration,
                current medicines, substance use history, safety concerns and
                preferred consultation option. Online consultation may be
                suitable for many patients, while urgent or complex situations
                may need in-person or emergency assessment.
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
                Psychiatric consultation for patients in Kathmandu and online
                mental health support for people across Nepal.
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

      {guide.clinicLocation && (
        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-950">
              Visiting the clinic in {guide.city}
            </h2>
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <address className="not-italic rounded-lg border border-slate-200 bg-white p-6 leading-8 text-slate-600 shadow-sm">
                <p className="font-bold text-blue-950">Address</p>
                <p>{guide.clinicLocation.streetAddress}</p>
                <p>{guide.clinicLocation.landmark}</p>
                <p>
                  {guide.city} {guide.clinicLocation.postalCode}, Nepal
                </p>
                <p className="mt-4 font-bold text-blue-950">Parking</p>
                <p>{guide.clinicLocation.parkingInfo}</p>
              </address>
              <a
                href={guide.clinicLocation.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-start justify-center rounded-lg border border-blue-200 bg-blue-50 p-6 shadow-sm transition hover:border-blue-400"
              >
                <span className="inline-flex items-center gap-2 font-bold text-blue-900">
                  <MapPin size={20} aria-hidden="true" />
                  Get Directions on Google Maps
                </span>
                <span className="mt-2 text-sm text-blue-800">
                  Opens Google Maps with turn-by-turn directions, hours and
                  patient reviews.
                </span>
              </a>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
