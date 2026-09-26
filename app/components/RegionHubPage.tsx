import Link from "next/link";
import { MessageCircle, Phone, Quote } from "lucide-react";
import { abroadGuides, getAbroadGuide } from "../data/abroad";
import { abroadMeta } from "../data/abroadMeta";
import { buildAbroadFaqs, googleMeetStatement, treatedSummary } from "../data/onlineCare";
import { regions, type Region } from "../data/abroadRegions";
import {
  buildFaqPageJsonLd,
  buildOnlineServiceJsonLd,
  buildSpeakableSpec,
  serializeJsonLd,
} from "../lib/schema";
import { buildZoneGuide } from "../lib/timeGuide";
import { FaqList, NameLine, OnlineFactsRow, OnlineTreatmentCards, TreatedList } from "./OnlineCareSections";
import { NepaliBlock } from "./AbroadPracticalSections";

const siteUrl = "https://drkushalkharel.com.np";

export default function RegionHubPage({ region }: { region: Region }) {
  const pageUrl = `${siteUrl}/nepalese-abroad/${region.slug}`;
  const guides = region.countrySlugs
    .map((slug) => getAbroadGuide(slug))
    .filter((guide): guide is NonNullable<typeof guide> => Boolean(guide));
  const faqs = [...buildAbroadFaqs(), ...region.faqs];
  const testimonials = guides.filter((guide) => guide.testimonial);
  const emergencyRows = guides.filter((guide) => abroadMeta[guide.slug]?.emergency);
  const otherRegions = regions.filter((r) => r.slug !== region.slug);

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: region.title,
    description: region.description,
    url: pageUrl,
    inLanguage: "en",
    dateModified: "2026-09-24",
    audience: { "@type": "PeopleAudience", name: `Nepalis living in ${region.shortName}` },
    about: { "@id": `${siteUrl}#clinic` },
    mainEntity: { "@id": `${pageUrl}#service` },
    author: { "@id": `${siteUrl}#psychiatrist` },
    reviewedBy: { "@id": `${siteUrl}#psychiatrist` },
    speakable: buildSpeakableSpec(["#region-quick-answer"]),
    relatedLink: guides.map((guide) => `${siteUrl}/nepalese-abroad/${guide.slug}`),
  };

  const serviceJsonLd = buildOnlineServiceJsonLd({
    id: `${pageUrl}#service`,
    name: `Online psychiatric consultation for Nepalis in ${region.shortName}`,
    description: `${googleMeetStatement} Treats ${treatedSummary}, with therapy and medication together where appropriate.`,
    url: pageUrl,
    audienceType: `Nepalis living in ${region.shortName}`,
    areaServed: guides.map((guide) => guide.country),
  });

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Nepalese abroad", item: `${siteUrl}/nepalese-abroad` },
      { "@type": "ListItem", position: 3, name: region.shortName, item: pageUrl },
    ],
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Country guides for Nepalis in ${region.shortName}`,
    itemListElement: guides.map((guide, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: `Nepali psychiatrist in ${guide.country}`,
      url: `${siteUrl}/nepalese-abroad/${guide.slug}`,
    })),
  };

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildFaqPageJsonLd(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(itemListJsonLd) }} />

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 pb-14 pt-28 lg:px-8 lg:pt-32">
          <Link href="/nepalese-abroad" className="font-semibold text-sage-700">
            &larr; All countries for Nepalis abroad
          </Link>
          <NameLine />
          <h1 className="mt-4 text-4xl font-bold leading-tight text-stone-950 md:text-6xl">{region.h1}</h1>
          <p id="region-quick-answer" className="mt-6 max-w-3xl text-lg leading-8 text-stone-600">
            {region.quickAnswer}
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
        {region.intro.map((paragraph) => (
          <p key={paragraph.slice(0, 24)} className="mb-4 leading-8 text-stone-600">
            {paragraph}
          </p>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <h2 className="text-3xl font-bold text-stone-950">Nepali psychiatrist online: choose your country</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/nepalese-abroad/${guide.slug}`}
              className="block rounded-lg border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-sage-300 hover:shadow-md"
            >
              <h3 className="text-2xl font-bold text-stone-950">{guide.country}</h3>
              <p className="mt-3 leading-7 text-stone-600">{guide.headline}</p>
              <p className="mt-3 font-semibold text-sage-700 underline">Nepali psychiatrist in {guide.country}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <h2 className="text-3xl font-bold text-stone-950">{region.themesHeading}</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {region.themes.map((theme) => (
              <li
                key={theme}
                className="rounded-lg border border-stone-200 bg-stone-50 p-5 font-semibold text-stone-800 shadow-sm"
              >
                {theme}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="session-times" className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <h2 className="text-3xl font-bold text-stone-950">Session times for Nepalis in {region.shortName}</h2>
        <p className="mt-4 max-w-3xl leading-8 text-stone-600">
          Sessions are booked at a time that suits your time zone. The table shows each country&apos;s time
          difference and which of your everyday windows fit the clinic&apos;s published hours (Sunday to Friday
          8 AM to 10 PM, Saturday 10 AM to 4 PM, Nepal time). Open your country page for the full hour-by-hour table.
        </p>
        <div className="mt-8 overflow-x-auto rounded-lg border border-stone-200 bg-white shadow-sm">
          <table className="w-full min-w-[640px] text-left text-base">
            <thead className="bg-stone-100 text-stone-700">
              <tr>
                <th className="px-4 py-3 font-bold">Country</th>
                <th className="px-4 py-3 font-bold">Time difference</th>
                <th className="px-4 py-3 font-bold">Easiest fit</th>
              </tr>
            </thead>
            <tbody>
              {guides.map((guide) => {
                const meta = abroadMeta[guide.slug];
                const zoneGuide = buildZoneGuide(meta.zones[0]);
                return (
                  <tr key={guide.slug} className="border-t border-stone-200 align-top odd:bg-white even:bg-stone-50">
                    <td className="px-4 py-3 font-semibold text-sage-950">
                      <Link href={`/nepalese-abroad/${guide.slug}`} className="underline">
                        {guide.country}
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-stone-700">{zoneGuide.difference}</td>
                    <td className="px-4 py-3 text-stone-700">
                      {zoneGuide.bestFit.length > 0
                        ? zoneGuide.bestFit.join(", ")
                        : "Message to ask about a time"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <OnlineTreatmentCards
        heading={`How Dr. Kushal treats constant worry, intrusive thoughts and sleep problems for Nepalis in ${region.shortName}`}
        intro="Therapy and medication are planned together, all through Google Meet or WhatsApp video call."
      />

      {testimonials.length > 0 && (
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
            <h2 className="text-3xl font-bold text-stone-950">What Nepalis in {region.shortName} say</h2>
            <p className="mt-4 max-w-3xl leading-8 text-stone-600">
              Real, anonymised patient testimonials. Names and identifying details are withheld, with each
              patient&apos;s permission.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {testimonials.map((guide) => (
                <figure
                  key={guide.slug}
                  className="flex h-full flex-col rounded-lg border border-stone-200 bg-stone-50 p-7 shadow-sm"
                >
                  <Quote size={28} className="text-clay-300" aria-hidden="true" />
                  <blockquote className="mt-4 flex-1 leading-7 text-stone-700">
                    &ldquo;{guide.testimonial!.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-5 font-semibold text-sage-800">
                    &mdash; {guide.testimonial!.attribution}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {emergencyRows.length > 0 && (
        <section className="mx-auto max-w-5xl px-6 py-14 lg:px-8">
          <div className="rounded-lg border border-red-200 bg-red-50 p-6 leading-7 text-red-950">
            <h2 className="text-2xl font-bold">Emergency and crisis numbers</h2>
            <ul className="mt-4 space-y-2">
              {emergencyRows.map((guide) => (
                <li key={guide.slug}>{abroadMeta[guide.slug].emergency}</li>
              ))}
              {region.slug === "east-asia" && abroadMeta.japan.helpline && (
                <li>
                  <strong>{abroadMeta.japan.helpline.name} (Japan):</strong> {abroadMeta.japan.helpline.detail}
                </li>
              )}
            </ul>
            <p className="mt-4 text-sm">
              An online appointment is not an emergency service. If there is immediate danger, call the local
              emergency number first.
            </p>
          </div>
        </section>
      )}

      <NepaliBlock heading={region.nepaliHeading} text={region.nepaliText} />

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-14 lg:px-8">
          <h2 className="text-3xl font-bold text-stone-950">Questions from Nepalis in {region.shortName}</h2>
          <FaqList faqs={faqs} />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 pb-14 lg:px-8">
          <h2 className="text-2xl font-bold text-stone-950">Other regions</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {otherRegions.map((other) => (
              <Link
                key={other.slug}
                href={`/nepalese-abroad/${other.slug}`}
                className="rounded-full border border-sage-200 bg-white px-4 py-2 text-sm font-semibold text-sage-900 transition hover:border-sage-400 hover:bg-sage-100"
              >
                Nepalis in {other.shortName}
              </Link>
            ))}
            <Link
              href="/nepalese-abroad"
              className="rounded-full border border-sage-200 bg-white px-4 py-2 text-sm font-semibold text-sage-900 transition hover:border-sage-400 hover:bg-sage-100"
            >
              All {abroadGuides.length} countries
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-sage-950 py-16 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold">Nepali in {region.shortName}?</h2>
          <p className="mt-4 text-lg leading-8 text-sage-100">
            Call or message Dr. Kushal Kharel with your country and the times that suit you. Urgent safety
            issues should be handled through local emergency services first.
          </p>
          <a
            href="https://wa.me/9779861800547"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-lg bg-white px-8 py-4 font-semibold text-sage-950"
          >
            WhatsApp +977 9861800547
          </a>
        </div>
      </section>
    </main>
  );
}
