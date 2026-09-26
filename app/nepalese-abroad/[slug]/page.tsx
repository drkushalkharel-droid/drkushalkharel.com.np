import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MessageCircle, Phone } from "lucide-react";
import { abroadGuides, getAbroadGuide } from "../../data/abroad";
import { abroadMeta } from "../../data/abroadMeta";
import { getRegionForCountry } from "../../data/abroadRegions";
import { buildAbroadFaqs, googleMeetStatement, treatedSummary, withArticle } from "../../data/onlineCare";
import {
  buildFaqPageJsonLd,
  buildOnlineServiceJsonLd,
  buildSpeakableSpec,
  serializeJsonLd,
} from "../../lib/schema";
import { FaqList, NameLine, OnlineFactsRow, OnlineTreatmentCards, TreatedList } from "../../components/OnlineCareSections";
import { EmergencyBox, NepaliBlock, TimeGuide } from "../../components/AbroadPracticalSections";

const siteUrl = "https://drkushalkharel.com.np";

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

  const title = `Nepali Consultant Psychiatrist in ${guide.country} – Online Therapy`;
  const description = `Consultant psychiatrist & online therapy for Nepalis abroad in ${withArticle(guide.country)}: constant worry, intrusive thoughts, sleep problems. Google Meet, at a time that suits your time zone.`;

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: `/nepalese-abroad/${guide.slug}/`,
    },
    keywords: [
      ...guide.searchTerms,
      `Nepali psychiatrist in ${guide.country}`,
      `Nepali consultant psychiatrist ${guide.country}`,
      `Nepali psychiatrist online ${guide.country}`,
      `online therapy for Nepalis in ${guide.country}`,
      ...(guide.slug === "korea" ? ["Nepali psychiatrist South Korea", "online therapy for Nepalis in South Korea"] : []),
      ...(guide.slug === "dubai" ? ["Nepali psychiatrist UAE", "Nepali psychiatrist Abu Dhabi Sharjah"] : []),
      "consultant psychiatrist for Nepalis abroad",
      "constant worry and intrusive thoughts online therapy",
      `Nepali constant worry anxiety help ${guide.country}`,
      `Nepali mental health support ${guide.country}`,
      `Nepalese depression anxiety ${guide.country}`,
      `Dr Kushal Kharel ${guide.country}`,
      "online psychiatrist Nepal",
      "Google Meet psychiatrist Nepali",
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
    twitter: { card: "summary_large_image", title, description, images: ["/images/doctor.png"] },
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

  const pageUrl = `${siteUrl}/nepalese-abroad/${guide.slug}`;
  const place = withArticle(guide.country);
  const faqs = buildAbroadFaqs(guide.country);
  const meta = abroadMeta[guide.slug];
  const region = getRegionForCountry(guide.slug);
  const neighbours = (region ? region.countrySlugs : [])
    .filter((other) => other !== guide.slug)
    .map((other) => getAbroadGuide(other))
    .filter((other): other is NonNullable<typeof other> => Boolean(other));
  // Real quotes only: when this country has none, borrow the nearest neighbour's
  // and label it with that patient's own country.
  const neighbourTestimonial = guide.testimonial
    ? undefined
    : neighbours.find((other) => other.testimonial);

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: guide.headline,
    description: `${googleMeetStatement} This guide covers common concerns for Nepalis in ${place}.`,
    url: pageUrl,
    inLanguage: "en",
    dateModified: "2026-09-24",
    audience: {
      "@type": "PeopleAudience",
      name: `Nepalese people in ${guide.country}`,
    },
    about: { "@id": `${siteUrl}#clinic` },
    mainEntity: { "@id": `${pageUrl}#service` },
    author: { "@id": `${siteUrl}#psychiatrist` },
    reviewedBy: { "@id": `${siteUrl}#psychiatrist` },
    speakable: buildSpeakableSpec(["#country-quick-answer"]),
  };

  const serviceJsonLd = buildOnlineServiceJsonLd({
    id: `${pageUrl}#service`,
    name: `Online psychiatric consultation for Nepalis in ${place}`,
    description: `${googleMeetStatement} Treats ${treatedSummary}, with therapy and medication together where appropriate.`,
    url: pageUrl,
    audienceType: `Nepalis living in ${place}`,
    areaServed: [guide.country],
  });

  const faqJsonLd = buildFaqPageJsonLd(faqs);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Nepalese abroad", item: `${siteUrl}/nepalese-abroad` },
      { "@type": "ListItem", position: 3, name: guide.country, item: pageUrl },
    ],
  };

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbJsonLd) }} />

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 pb-14 pt-28 lg:px-8 lg:pt-32">
          <Link href="/nepalese-abroad" className="font-semibold text-sage-700">
            &larr; Back to Nepalese abroad guides
          </Link>
          <NameLine />
          <h1 className="mt-4 text-4xl font-bold leading-tight text-stone-950 md:text-6xl">
            Nepali consultant psychiatrist and online therapy for Nepalis in {guide.country}
          </h1>
          <p id="country-quick-answer" className="mt-6 max-w-3xl text-lg leading-8 text-stone-600">
            Yes, Nepalis in {place} can see a Nepali psychiatrist online. Dr.
            Kushal Kharel, a Nepal Medical Council-registered Consultant
            Psychiatrist in Kathmandu, offers online therapy and video
            consultation for Nepalis abroad through Google Meet, in Nepali or
            English, at a time that suits your time zone. He treats constant
            worry, anxiety, intrusive thoughts, sleep problems and depression,
            and every session is confidential.
          </p>
          <TreatedList />
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="tel:+9779861800547"
              className="inline-flex items-center gap-3 rounded-lg bg-sage-700 px-6 py-3 font-bold text-white transition hover:bg-sage-800"
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
          <OnlineFactsRow />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pt-14 lg:px-8">
        <h2 className="text-3xl font-bold text-stone-950">
          Mental health for Nepalese in {place}
        </h2>
        <p className="mt-4 leading-8 text-stone-600">{guide.intro}</p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <h2 className="text-3xl font-bold text-stone-950">
              Common mental health concerns among Nepalese in {place}
            </h2>
            <p className="mt-4 leading-8 text-stone-600">
              Living abroad can bring opportunity and pressure at the same
              time. Mental health support is especially important when symptoms
              affect sleep, study, work, relationships, safety or substance use.
            </p>
            <div className="mt-8 rounded-lg border border-amber-200 bg-amber-50 p-5 leading-7 text-amber-950">
              <h3 className="font-bold">
                Prescriptions and practical notes for {place}
              </h3>
              <p className="mt-2">{guide.practicalNote}</p>
            </div>
            <EmergencyBox place={place} meta={meta} />
          </div>

          <div className="grid gap-4">
            {guide.commonConcerns.map((concern) => (
              <div
                key={concern}
                className="rounded-lg border border-stone-200 bg-white p-5 font-semibold text-stone-800 shadow-sm"
              >
                {concern}
              </div>
            ))}
          </div>
        </div>
      </section>

      <TimeGuide place={place} zones={meta.zones} />

      <OnlineTreatmentCards
        heading={`How Dr. Kushal treats constant worry, intrusive thoughts and sleep problems for Nepalis in ${place}`}
        intro="Therapy and medication are planned together, all through Google Meet video consultation."
      />

      {guide.testimonial && (
        <section className="mx-auto max-w-4xl px-6 py-14 lg:px-8">
          <figure className="rounded-lg border border-sage-200 bg-sage-50 p-8">
            <blockquote className="text-lg leading-8 text-stone-800">
              &ldquo;{guide.testimonial.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-5 font-semibold text-sage-800">
              &mdash; {guide.testimonial.attribution}
            </figcaption>
          </figure>
          <p className="mt-3 text-center text-sm text-stone-500">
            Shared with permission. Names and identifying details are withheld to protect patient privacy.{" "}
            <Link href="/patient-testimonials" className="underline hover:text-sage-700">
              Read more patient experiences
            </Link>
          </p>
        </section>
      )}

      {neighbourTestimonial && (
        <section className="mx-auto max-w-4xl px-6 py-14 lg:px-8">
          <figure className="rounded-lg border border-sage-200 bg-sage-50 p-8">
            <blockquote className="text-lg leading-8 text-stone-800">
              &ldquo;{neighbourTestimonial.testimonial!.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-5 font-semibold text-sage-800">
              &mdash; {neighbourTestimonial.testimonial!.attribution}
            </figcaption>
          </figure>
          <p className="mt-3 text-center text-sm text-stone-500">
            From a Nepali patient in {withArticle(neighbourTestimonial.country)}, shared with permission. Names and
            identifying details are withheld to protect patient privacy.{" "}
            <Link href="/patient-testimonials" className="underline hover:text-sage-700">
              Read more patient experiences
            </Link>
          </p>
        </section>
      )}

      <NepaliBlock
        heading={`${meta.nepaliName}मा बस्ने नेपालीका लागि अनलाइन मनोचिकित्सक`}
        text={`${meta.nepaliName}मा बस्ने नेपालीहरूका लागि डा. कुशल खरेल (कन्सल्टेन्ट साइकाइट्रिस्ट, काठमाडौं) ले Google Meet भिडियोमार्फत अनलाइन थेरापी र परामर्श दिनुहुन्छ — निरन्तर चिन्ता, एन्जाइटी र प्यानिक, बारम्बार आउने विचार (OCD), निद्राको समस्या र डिप्रेसनको उपचार। परामर्श नेपाली वा अंग्रेजीमा हुन्छ, समय तपाईंको समयअनुसार मिलाइन्छ, र सबै कुरा गोप्य राखिन्छ। भुक्तानी कार्ड, बैंक ट्रान्सफर वा अन्य तरिकाले गर्न सकिन्छ।`}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-14 lg:px-8">
          <h2 className="text-3xl font-bold text-stone-950">
            Questions from Nepalis in {place}
          </h2>
          <FaqList faqs={faqs} />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 pb-14 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-stone-950">
                How Nepalese in {place} can contact Dr. Kushal Kharel
              </h2>
              <p className="mt-4 leading-8 text-stone-600">
                Call or message with your main concern, symptom duration,
                current medicines, previous diagnosis, substance use, sleep
                pattern, safety concerns and country of residence. Dr. Kushal
                Kharel can guide whether a Google Meet video consultation,
                family discussion, local emergency care or in-person follow-up
                is most appropriate.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {guide.searchTerms.map((term) => (
                  <span
                    key={term}
                    className="rounded-full border border-sage-200 bg-sage-50 px-4 py-2 text-sm font-semibold text-sage-900"
                  >
                    {term}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-lg bg-sage-950 p-6 text-white">
              <h3 className="text-2xl font-bold">Contact</h3>
              <p className="mt-3 leading-7 text-sage-100">
                Psychiatric guidance for patients in Nepal and Nepali people
                living abroad.
              </p>
              <a
                href="tel:+9779861800547"
                className="mt-6 block rounded-lg bg-white px-5 py-3 text-center font-bold text-sage-950"
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

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 pb-14 lg:px-8">
          <h2 className="text-2xl font-bold text-stone-950">Related reading</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/psychiatrist-for-nepalis-abroad"
              className="rounded-lg border border-stone-200 bg-stone-50 p-5 font-semibold text-stone-800 shadow-sm transition hover:-translate-y-1 hover:border-sage-300 hover:shadow-md"
            >
              How online psychiatry for Nepalis abroad works
            </Link>
            <Link
              href="/sleep-problems-treatment-nepal"
              className="rounded-lg border border-stone-200 bg-stone-50 p-5 font-semibold text-stone-800 shadow-sm transition hover:-translate-y-1 hover:border-sage-300 hover:shadow-md"
            >
              Sleep problems and insomnia treatment
            </Link>
            <Link
              href="/blog/mental-health-nepali-migrant-workers"
              className="rounded-lg border border-stone-200 bg-stone-50 p-5 font-semibold text-stone-800 shadow-sm transition hover:-translate-y-1 hover:border-sage-300 hover:shadow-md"
            >
              Mental health support for Nepali migrant workers abroad
            </Link>
            <Link
              href="/blog/mental-health-nepali-students-abroad"
              className="rounded-lg border border-stone-200 bg-stone-50 p-5 font-semibold text-stone-800 shadow-sm transition hover:-translate-y-1 hover:border-sage-300 hover:shadow-md"
            >
              Mental health support for Nepali students abroad
            </Link>
            <Link
              href="/blog/first-psychiatric-appointment-what-to-expect-nepal"
              className="rounded-lg border border-stone-200 bg-stone-50 p-5 font-semibold text-stone-800 shadow-sm transition hover:-translate-y-1 hover:border-sage-300 hover:shadow-md"
            >
              What to expect at your first psychiatric appointment
            </Link>
            <Link
              href="/blog/sending-psychiatric-medications-abroad-nepal"
              className="rounded-lg border border-stone-200 bg-stone-50 p-5 font-semibold text-stone-800 shadow-sm transition hover:-translate-y-1 hover:border-sage-300 hover:shadow-md"
            >
              Sending psychiatric medications abroad from Nepal
            </Link>
            <Link
              href="/psychiatric-care-for-family-in-nepal"
              className="rounded-lg border border-stone-200 bg-stone-50 p-5 font-semibold text-stone-800 shadow-sm transition hover:-translate-y-1 hover:border-sage-300 hover:shadow-md"
            >
              Arranging psychiatric care for family still in Nepal
            </Link>
            <Link
              href="/returning-to-nepal-after-abroad"
              className="rounded-lg border border-stone-200 bg-stone-50 p-5 font-semibold text-stone-800 shadow-sm transition hover:-translate-y-1 hover:border-sage-300 hover:shadow-md"
            >
              Returning to Nepal after living abroad
            </Link>
          </div>

          {region && neighbours.length > 0 && (
            <div className="mt-10">
              <h3 className="font-bold text-stone-950">
                Nepali psychiatrist online, other countries in the region
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                <Link
                  href={`/nepalese-abroad/${region.slug}`}
                  className="rounded-full border border-sage-700 bg-sage-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sage-800"
                >
                  All Nepalis in {region.shortName}
                </Link>
                {neighbours.map((other) => (
                  <Link
                    key={other.slug}
                    href={`/nepalese-abroad/${other.slug}`}
                    className="rounded-full border border-sage-200 bg-white px-4 py-2 text-sm font-semibold text-sage-900 transition hover:border-sage-400 hover:bg-sage-100"
                  >
                    {other.country}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
