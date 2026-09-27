import Link from "next/link";
import { MessageCircle, Phone, Quote } from "lucide-react";
import { abroadGuides, getAbroadGuide } from "../data/abroad";
import { abroadMeta } from "../data/abroadMeta";
import { buildAbroadFaqs, googleMeetStatement, prescriptionAbroadStatement, treatedSummary, withArticle } from "../data/onlineCare";
import { regions, type Region } from "../data/abroadRegions";
import { getPageDates } from "../data/pageDates";
import {
  buildFaqPageJsonLd,
  buildOnlineServiceJsonLd,
  buildSpeakableSpec,
  serializeJsonLd,
} from "../lib/schema";
import { buildZoneGuide } from "../lib/timeGuide";
import { FaqList, NameLine, OnlineFactsRow, OnlineTreatmentCards, TreatedList } from "./OnlineCareSections";
import { EmergencyBox, NepaliBlock } from "./AbroadPracticalSections";

const siteUrl = "https://drkushalkharel.com.np";

// The guides every country page used to link to. Kept on the regional pages so those
// guides do not lose their links when the country pages are merged.
const relatedReading = [
  { href: "/psychiatrist-for-nepalis-abroad", label: "How online psychiatry for Nepalis abroad works" },
  { href: "/sleep-problems-treatment-nepal", label: "Sleep problems and insomnia treatment" },
  { href: "/blog/mental-health-nepali-migrant-workers", label: "Mental health support for Nepali migrant workers abroad" },
  { href: "/blog/mental-health-nepali-students-abroad", label: "Mental health support for Nepali students abroad" },
  { href: "/blog/first-psychiatric-appointment-what-to-expect-nepal", label: "What to expect at your first psychiatric appointment" },
  { href: "/blog/sending-psychiatric-medications-abroad-nepal", label: "Sending psychiatric medications abroad from Nepal" },
  { href: "/psychiatric-care-for-family-in-nepal", label: "Arranging psychiatric care for family still in Nepal" },
  { href: "/returning-to-nepal-after-abroad", label: "Returning to Nepal after living abroad" },
];

export default function RegionHubPage({ region }: { region: Region }) {
  const pageUrl = `${siteUrl}/nepalese-abroad/${region.slug}`;
  const guides = region.countrySlugs
    .map((slug) => getAbroadGuide(slug))
    .filter((guide): guide is NonNullable<typeof guide> => Boolean(guide));
  const faqs = [...buildAbroadFaqs(), ...region.faqs];
  const otherRegions = regions.filter((r) => r.slug !== region.slug);
  const dates = getPageDates(`/nepalese-abroad/${region.slug}/`);
  // Group headings (Europe only) are shown above the first country of each group.
  const groupStartingAt = new Map((region.groups ?? []).map((group) => [group.countrySlugs[0], group.heading]));
  // One row per time zone: the USA, Canada and Australia span several.
  const timeRows = guides.flatMap((guide) => {
    const zones = abroadMeta[guide.slug].zones;
    return zones.map((zone) => ({
      slug: guide.slug,
      label: zones.length > 1 ? `${guide.country} (${zone.label})` : guide.country,
      guide: buildZoneGuide(zone),
    }));
  });

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: region.title,
    description: region.description,
    url: pageUrl,
    inLanguage: "en",
    ...(dates ? { datePublished: dates.published, dateModified: dates.modified } : {}),
    audience: { "@type": "PeopleAudience", name: `Nepalis living in ${region.shortName}` },
    about: { "@id": `${siteUrl}#clinic` },
    mainEntity: { "@id": `${pageUrl}#service` },
    author: { "@id": `${siteUrl}#psychiatrist` },
    reviewedBy: { "@id": `${siteUrl}#psychiatrist` },
    speakable: buildSpeakableSpec(["#region-quick-answer"]),
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
      url: `${pageUrl}#${guide.slug}`,
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
        <p className="mt-4 max-w-3xl leading-8 text-stone-600">
          Each country has its own section further down this page, with its own concerns, prescription notes and
          emergency numbers. Choose yours to jump straight to it.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {guides.map((guide) => (
            <a
              key={guide.slug}
              href={`#${guide.slug}`}
              className="rounded-full border border-sage-200 bg-white px-4 py-2 text-sm font-semibold text-sage-900 transition hover:border-sage-400 hover:bg-sage-100"
            >
              Nepali psychiatrist in {guide.country}
            </a>
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
          8 AM to 10 PM, Saturday 10 AM to 4 PM, Nepal time). If none of the easy windows suits you, message anyway:
          what can be arranged is worked out with you directly.
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
              {timeRows.map((row) => (
                <tr key={`${row.slug}-${row.label}`} className="border-t border-stone-200 align-top odd:bg-white even:bg-stone-50">
                  <td className="px-4 py-3 font-semibold text-sage-950">
                    <a href={`#${row.slug}`} className="underline">
                      {row.label}
                    </a>
                  </td>
                  <td className="px-4 py-3 text-stone-700">{row.guide.difference}</td>
                  <td className="px-4 py-3 text-stone-700">
                    {row.guide.bestFit.length > 0 ? row.guide.bestFit.join(", ") : "Message to ask about a time"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-8 rounded-lg border border-amber-200 bg-amber-50 p-5 leading-7 text-amber-950">
          <h3 className="font-bold">Prescriptions for Nepalis in {region.shortName}</h3>
          <p className="mt-2">{prescriptionAbroadStatement}</p>
          <p className="mt-2">Each country&apos;s section below adds the local details.</p>
        </div>
      </section>

      <OnlineTreatmentCards
        heading={`How Dr. Kushal treats constant worry, intrusive thoughts and sleep problems for Nepalis in ${region.shortName}`}
        intro="Therapy and medication are planned together, all through Google Meet or WhatsApp video call."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-14 lg:px-8">
          <h2 className="text-3xl font-bold text-stone-950">
            Country by country: Nepali psychiatrist online in {region.shortName}
          </h2>
          <p className="mt-4 max-w-3xl leading-8 text-stone-600">
            An online appointment is not an emergency service. If there is immediate danger, call the local
            emergency number first.
          </p>

          {guides.map((guide) => {
            const place = withArticle(guide.country);
            const meta = abroadMeta[guide.slug];
            const groupHeading = groupStartingAt.get(guide.slug);
            return (
              <div key={guide.slug}>
                {groupHeading && (
                  <p className="mt-14 border-b border-stone-200 pb-2 text-sm font-semibold uppercase tracking-[2px] text-sage-700">
                    {groupHeading}
                  </p>
                )}
                <section id={guide.slug} className="mt-10 scroll-mt-24">
                  <h3 className="text-2xl font-bold text-stone-950 md:text-3xl">
                    Nepali psychiatrist for Nepalis in {place}
                  </h3>
                  <p className="mt-4 leading-8 text-stone-600">{guide.intro}</p>

                  <h4 className="mt-6 text-lg font-bold text-stone-950">
                    Common concerns among Nepalis in {place}
                  </h4>
                  <ul className="mt-3 grid gap-3 md:grid-cols-2">
                    {guide.commonConcerns.map((concern) => (
                      <li
                        key={concern}
                        className="rounded-lg border border-stone-200 bg-stone-50 p-4 leading-7 text-stone-800"
                      >
                        {concern}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-5 leading-7 text-amber-950">
                    <h4 className="font-bold">Prescriptions and practical notes for {place}</h4>
                    <p className="mt-2">{guide.practicalNote}</p>
                  </div>

                  <EmergencyBox place={place} meta={meta} />

                  {guide.testimonial && (
                    <figure className="mt-6 rounded-lg border border-sage-200 bg-sage-50 p-6">
                      <Quote size={24} className="text-clay-300" aria-hidden="true" />
                      <blockquote className="mt-3 leading-8 text-stone-800">
                        &ldquo;{guide.testimonial.quote}&rdquo;
                      </blockquote>
                      <figcaption className="mt-4 font-semibold text-sage-800">
                        &mdash; {guide.testimonial.attribution}
                      </figcaption>
                      <p className="mt-3 text-sm text-stone-500">
                        Shared with permission. Names and identifying details are withheld to protect patient
                        privacy.{" "}
                        <Link href="/patient-testimonials" className="underline hover:text-sage-700">
                          Read more patient experiences
                        </Link>
                      </p>
                    </figure>
                  )}

                </section>
              </div>
            );
          })}
        </div>
      </section>

      <NepaliBlock heading={region.nepaliHeading} text={region.nepaliText} />

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-14 lg:px-8">
          <h2 className="text-3xl font-bold text-stone-950">Questions from Nepalis in {region.shortName}</h2>
          <FaqList faqs={faqs} />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 pb-14 lg:px-8">
          <h2 className="text-2xl font-bold text-stone-950">Related reading</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {relatedReading.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg border border-stone-200 bg-stone-50 p-5 font-semibold text-stone-800 shadow-sm transition hover:-translate-y-1 hover:border-sage-300 hover:shadow-md"
              >
                {item.label}
              </Link>
            ))}
          </div>
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
