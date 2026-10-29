import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarClock, Globe2, Languages, MapPin, MessageCircle, ShieldCheck, Video } from "lucide-react";
import { abroadGuides, getAbroadGuide } from "../../data/abroad";
import { abroadMeta } from "../../data/abroadMeta";
import { countryExtras } from "../../data/countryPages";
import { getRegionForCountry } from "../../data/abroadRegions";
import { buildAbroadFaqs, paymentStatement, prescriptionAbroadStatement, publishedClinicHours, withArticle } from "../../data/onlineCare";
import { buildFaqPageJsonLd, buildOnlineServiceJsonLd, buildSpeakableSpec, serializeJsonLd } from "../../lib/schema";
import { buildZoneGuide } from "../../lib/timeGuide";
import { fitTitle, pickDescription } from "../../lib/seoText";
import AbroadFocusPanel from "../../components/AbroadFocusPanel";
import { NepaliBlock } from "../../components/AbroadPracticalSections";
import { FaqList } from "../../components/OnlineCareSections";

const site = "https://drkushalkharel.com.np";

// Japan has its own hand-written page at /nepali-psychiatrist-japan/.
const slugs = abroadGuides.map((g) => g.slug).filter((s) => s !== "japan" && countryExtras[s]);

export function generateStaticParams() {
  return slugs.map((country) => ({ country }));
}

function seoFor(slug: string) {
  const guide = getAbroadGuide(slug)!;
  const place = withArticle(guide.country);
  const title = fitTitle(`Nepali Psychiatrist in ${guide.country}, Online`, `Nepali Psychiatrist in ${guide.country}`);
  const description = pickDescription([
    `Online psychiatrist for Nepalis in ${place}: workers, students and families. Consult in Nepali or English by video at a time that suits you. Book online.`,
    `Nepali psychiatrist online for Nepalis in ${place}. Video consultation in Nepali or English, arranged around your time zone and shifts. Book online.`,
    `Nepali psychiatrist for Nepalis in ${place}: video consultation in Nepali or English at a time that suits you. Book online.`,
  ]);
  return { guide, place, title, description, path: `/nepali-psychiatrist/${slug}/` };
}

export async function generateMetadata({ params }: { params: Promise<{ country: string }> }): Promise<Metadata> {
  const { country } = await params;
  if (!slugs.includes(country)) return {};
  const { guide, title, description, path } = seoFor(country);
  return {
    title,
    description,
    alternates: { canonical: path },
    keywords: [
      `Nepali psychiatrist ${guide.country}`,
      `Nepali psychiatrist in ${guide.country} online`,
      `online psychiatrist for Nepalis in ${guide.country}`,
      `Nepali speaking psychiatrist ${guide.country}`,
      ...guide.searchTerms,
    ],
    openGraph: { title, description, url: `${site}${path}`, type: "article", images: [{ url: "/images/dr-kushal-headshot.jpg", width: 1200, height: 630, alt: `Nepali psychiatrist for Nepalis in ${guide.country}` }] },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function CountryPage({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  if (!slugs.includes(country)) notFound();

  const { guide, place, title, description, path } = seoFor(country);
  const url = `${site}${path}`;
  const meta = abroadMeta[country];
  const extra = countryExtras[country];
  const region = getRegionForCountry(country);
  const neighbours = (region?.countrySlugs ?? []).filter((s) => s !== country && s !== "japan" && countryExtras[s]).slice(0, 8);

  const zoneGuides = meta.zones.map((zone) => ({ zone, guide: buildZoneGuide(zone) }));
  const emergency = meta.emergency ?? extra.emergency;
  const timeDifference = zoneGuides.length === 1 ? zoneGuides[0].guide.difference : null;

  const faqs = [
    ...buildAbroadFaqs(guide.country),
    {
      question: `What time can I book from ${place}?`,
      answer: `The published clinic hours are ${publishedClinicHours}. ${
        timeDifference ? `${guide.country} is ${timeDifference.toLowerCase()}. ` : "Your local time depends on which part of the country you are in. "
      }Send two or three times that suit you in your own local time and the clinic will convert them to Nepal time and confirm. Availability is confirmed individually.`,
    },
    {
      question: `What should I do in an emergency in ${place}?`,
      answer: `${emergency ?? `Call your local emergency number`} An online appointment is not an emergency service. If you are thinking of ending your life, do not wait for an appointment: call the local emergency number or go to the nearest emergency department.`,
    },
    {
      question: `Can I get medicine from Nepal in ${place}?`,
      answer: `Not automatically. A Nepal-issued prescription cannot be assumed to be valid at a pharmacy in ${place}, and rules on importing medicine differ. Dr. Kharel will discuss this honestly, and can provide a clinical summary you can take to a local doctor to arrange local prescribing.`,
    },
  ];

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        name: title,
        url,
        description,
        inLanguage: ["en", "ne"],
        dateModified: "2026-10-29",
        medicalAudience: ["Patient", "Caregiver"],
        about: { "@id": `${site}#clinic` },
        mainEntity: { "@id": `${url}#service` },
        author: { "@id": `${site}#psychiatrist` },
        reviewedBy: { "@id": `${site}#psychiatrist` },
        speakable: buildSpeakableSpec(["#country-quick-answer"]),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site },
          { "@type": "ListItem", position: 2, name: "Nepalis abroad", item: `${site}/nepalese-abroad/` },
          ...(region ? [{ "@type": "ListItem", position: 3, name: region.shortName, item: `${site}/nepalese-abroad/${region.slug}/` }] : []),
          { "@type": "ListItem", position: region ? 4 : 3, name: `Nepali psychiatrist in ${guide.country}`, item: url },
        ],
      },
    ],
  };
  const serviceJsonLd = buildOnlineServiceJsonLd({
    id: `${url}#service`,
    name: `Online psychiatrist for Nepalis in ${guide.country}`,
    description: `Online video consultation in Nepali or English with a Kathmandu-based Consultant Psychiatrist for Nepalis living in ${place}.`,
    url,
    audienceType: `Nepalis living in ${place}`,
    areaServed: [guide.country],
  });

  const wa = `https://wa.me/9779861800547?text=${encodeURIComponent(`Hello Dr. Kharel, I live in ${guide.country} and would like to book an online consultation. My preferred times (local time) are: `)}`;

  return (
    <main id="main" className="min-h-screen bg-[#f5f4ef] text-[#1f2927]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(graph) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildFaqPageJsonLd(faqs)) }} />

      <section className="bg-sage-950 text-white">
        <div className="mx-auto max-w-5xl px-6 pb-14 pt-28">
          <nav aria-label="Breadcrumb" className="text-sm text-sage-200">
            <Link href="/" className="underline">Home</Link> / <Link href="/nepalese-abroad/" className="underline">Nepalis abroad</Link>
            {region && <> / <Link href={`/nepalese-abroad/${region.slug}/`} className="underline">{region.shortName}</Link></>} / {guide.country}
          </nav>
          <p className="mt-6 text-[13px] font-bold uppercase tracking-[.12em] text-[#e6b579]">For Nepalis in {place}</p>
          <h1 className="mt-4 text-4xl leading-[1.05] tracking-[-.03em] md:text-6xl">
            Nepali psychiatrist for Nepalis in {place}, <em className="text-[#f6a995]">online in Nepali</em>
          </h1>
          <p id="country-quick-answer" className="mt-6 max-w-3xl text-lg leading-8 text-sage-100">
            Nepalis living in {place} can see Dr. Kushal Kharel, a Nepal Medical Council-registered Consultant Psychiatrist in Kathmandu, by online video
            consultation in Nepali or English, at a time that suits your local time zone and work or study schedule. People use it for anxiety, panic attacks,
            depression, sleep problems, OCD, overthinking, stress, and adjustment difficulties after moving abroad. Sessions are confidential, including from employers.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/book/" className="inline-flex items-center gap-2 bg-clay-700 px-6 py-4 text-sm font-semibold text-white transition hover:bg-clay-800">
              <CalendarClock size={18} aria-hidden="true" /> Book an online session
            </Link>
            <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-white/40 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/10">
              <MessageCircle size={18} aria-hidden="true" /> WhatsApp from {guide.country}
            </a>
          </div>
          <ul className="mt-10 grid gap-3 text-sm sm:grid-cols-2 lg:grid-cols-4">
            {[
              [Video, "Google Meet or WhatsApp video"],
              [Languages, "Nepali, English, Hindi, Bangla"],
              [Globe2, timeDifference ? `${guide.country} is ${timeDifference.toLowerCase()}` : "Booked in your local time"],
              [ShieldCheck, "Confidential, no contact with employer"],
            ].map(([Icon, text]) => {
              const I = Icon as typeof Video;
              return (
                <li key={text as string} className="flex items-center gap-3 bg-white/5 p-4">
                  <I size={20} className="shrink-0 text-[#e6b579]" aria-hidden="true" />
                  <span>{text as string}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-14">
        <h2 className="text-3xl md:text-4xl">Nepalis in {place}: who they are and what they face</h2>
        <p className="mt-5 max-w-3xl leading-8 text-[#3d4743]">{extra.routes}</p>
        <p className="mt-4 max-w-3xl leading-8 text-[#3d4743]">{guide.intro}</p>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl md:text-4xl">Common concerns among Nepalis in {place}</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {guide.commonConcerns.map((concern) => (
              <li key={concern} className="border border-[#d6d8d2] bg-[#f5f4ef] p-5 leading-7 text-[#3d4743]">{concern}</li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-[#5a635e]">
            These problems are common and treatable. If they have lasted more than two weeks or are affecting sleep, work, study or relationships, an assessment is worth having.
          </p>
        </div>
      </section>

      <section className="bg-sage-100 py-14">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl md:text-4xl">How an online session works from {place}</h2>
          <ol className="mt-8 grid gap-5 md:grid-cols-4">
            {[
              ["Send your times", `Book on the website or WhatsApp the clinic two or three times that suit you in ${guide.country} time.`],
              ["Clinic confirms", "The clinic converts the time to Nepal time, checks the schedule and confirms. Fee and payment are explained then."],
              ["Join by video", "Open the Google Meet or WhatsApp video link on your phone or laptop from a quiet, private spot."],
              ["Plan and follow-up", "Dr. Kharel explains the assessment, options and next steps in plain Nepali or English, with follow-up as needed."],
            ].map(([t, text], i) => (
              <li key={t} className="bg-white p-6">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-clay-700 font-bold text-white">{i + 1}</span>
                <h3 className="mt-4 text-lg">{t}</h3>
                <p className="mt-2 text-sm leading-6 text-[#3d4743]">{text}</p>
              </li>
            ))}
          </ol>

          <h3 className="mt-12 text-2xl">{guide.country} time and Nepal time</h3>
          <p className="mt-3 max-w-3xl leading-8 text-[#3d4743]">
            The published clinic hours are {publishedClinicHours}. The table shows which everyday windows in {place} fit inside them. Nepal is UTC+5:45 all year with no
            daylight saving, so where {place} changes its clocks the difference shifts with the season.
          </p>
          <div className="mt-6 overflow-x-auto border border-[#d6d8d2] bg-white">
            <table className="w-full min-w-[560px] text-left text-sm">
              <caption className="sr-only">Suggested session windows in {guide.country} time and the matching Nepal time</caption>
              <thead className="bg-[#ebe9e1]">
                <tr>
                  <th className="px-4 py-3 font-bold">Time zone</th>
                  <th className="px-4 py-3 font-bold">Difference</th>
                  <th className="px-4 py-3 font-bold">Windows that fit clinic hours</th>
                </tr>
              </thead>
              <tbody>
                {zoneGuides.map(({ zone, guide: zg }) => {
                  const open = zg.rows.filter((row) => row.views.every((v) => v.status === "open"));
                  return (
                    <tr key={zone.tz} className="border-t border-[#d6d8d2] align-top">
                      <td className="px-4 py-3 font-semibold">{zone.label}</td>
                      <td className="px-4 py-3">{zg.difference}</td>
                      <td className="px-4 py-3 leading-6">
                        {open.length > 0
                          ? open.map((row) => (
                              <p key={row.key}>
                                <span className="font-semibold">{row.label}:</span>{" "}
                                {row.views.map((v) => `${v.season ? `${v.season}: ` : ""}${row.local} local → ${v.nepal} Nepal time`).join("; ")}
                              </p>
                            ))
                          : "No standard window fits fully in every season. Send your preferred local times and the clinic will check availability."}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-[#5a635e]">A planning guide, not a live calendar. Availability is confirmed individually, and the clinic can check times outside these windows on request.</p>
          <p className="mt-5 max-w-3xl leading-8 text-[#3d4743]">{paymentStatement}</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-14">
        <h2 className="text-3xl md:text-4xl">Medication and local care in {place}</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <article className="border border-[#d6d8d2] bg-white p-6">
            <h3 className="text-xl">Prescriptions</h3>
            <p className="mt-2 leading-7 text-[#3d4743]">{guide.practicalNote}</p>
            <p className="mt-3 leading-7 text-[#3d4743]">{prescriptionAbroadStatement}</p>
          </article>
          <article className="border border-[#d6d8d2] bg-white p-6">
            <h3 className="text-xl">Using local services alongside online care</h3>
            <p className="mt-2 leading-7 text-[#3d4743]">{extra.localCare}</p>
          </article>
        </div>
        <div className="mt-6">
          <AbroadFocusPanel slug={country} place={place} />
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl md:text-4xl">If you are in crisis in {place}</h2>
          <p className="mt-4 max-w-3xl leading-8 text-[#3d4743]">
            An online appointment is not an emergency service. If you are in danger, thinking of ending your life or have taken an overdose, get help now. Please
            check the number on the service&apos;s own website, as services change.
          </p>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            <li className="border border-red-200 bg-red-50 p-5 text-red-950">
              <strong className="block text-lg">Emergency</strong>
              {emergency ?? "Call your local emergency number or go to the nearest hospital emergency department."}
            </li>
            {meta.helpline && (
              <li className="border border-[#d6d8d2] bg-[#f5f4ef] p-5">
                <strong className="block text-lg">{meta.helpline.name}</strong>
                {meta.helpline.detail}
                {meta.helpline.url && (
                  <> <a className="font-semibold text-sage-800 underline" href={meta.helpline.url} target="_blank" rel="noopener noreferrer">Official page</a></>
                )}
              </li>
            )}
            {extra.crisis && (
              <li className="border border-[#d6d8d2] bg-[#f5f4ef] p-5">
                <strong className="block text-lg">{extra.crisis.name}</strong>
                {extra.crisis.contact}
              </li>
            )}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-14">
        <h2 className="text-3xl md:text-4xl">Anywhere in {place}, because it is online</h2>
        <p className="mt-4 max-w-3xl leading-8 text-[#3d4743]">
          The consultation is by video, so your city does not matter. Nepali-language online sessions are used by people living across {place}, including in:
        </p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {extra.cities.map((c) => (
            <li key={c} className="flex items-center gap-2 border border-[#d6d8d2] bg-white px-4 py-2 text-sm font-medium">
              <MapPin size={14} className="text-clay-700" aria-hidden="true" /> {c}
            </li>
          ))}
          <li className="border border-[#d6d8d2] bg-white px-4 py-2 text-sm font-medium">and smaller towns</li>
        </ul>
      </section>

      {guide.testimonial && (
        <section className="bg-sage-100 py-14">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-3xl md:text-4xl">A patient in {place}</h2>
            <figure className="mt-6 border border-[#d6d8d2] bg-white p-7">
              <blockquote className="leading-8 text-[#3d4743]">&ldquo;{guide.testimonial.quote}&rdquo;</blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-sage-900">{guide.testimonial.attribution}</figcaption>
            </figure>
            <p className="mt-3 text-sm text-[#5a635e]">
              Shared with the patient&apos;s permission and kept anonymous. Individual experiences differ. See more on the{" "}
              <Link href="/patient-testimonials/" className="underline">patient testimonials page</Link>.
            </p>
          </div>
        </section>
      )}

      <NepaliBlock
        heading={`${meta.nepaliName}मा बस्ने नेपालीका लागि नेपाली मनोचिकित्सक`}
        text={`${meta.nepaliName}मा पढ्दै वा काम गर्दै हुनुहुन्छ भने चिन्ता, डर, पैनिक, डिप्रेसन, निद्रा नलाग्ने समस्या, OCD वा धेरै सोच्ने बानीका लागि नेपाल फर्कनु पर्दैन। काठमाडौँका कन्सल्टेन्ट मनोचिकित्सक डा. कुशल खरेल (NMC दर्ता नं. २७१९९) सँग Google Meet वा WhatsApp भिडियोमार्फत नेपाली वा अंग्रेजी भाषामा परामर्श लिन सकिन्छ। आफ्नो काम वा पढाइको समयअनुसार समय मिलाइन्छ, र परामर्श गोप्य हुन्छ। नेपालको प्रिस्क्रिप्सन विदेशका फार्मेसीमा चल्छ भन्ने ग्यारेन्टी हुँदैन; यसबारे परामर्शमा इमानदार रूपमा छलफल गरिन्छ। आपत्कालीन अवस्थामा स्थानीय आपत्कालीन नम्बरमा फोन गर्नुहोस् वा नजिकको अस्पताल जानुहोस्। समय मिलाउन +977 9861800547 मा WhatsApp गर्नुहोस्।`}
      />

      <section className="bg-white py-14">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl md:text-4xl">Questions from Nepalis in {place}</h2>
          <FaqList faqs={faqs} />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-14">
        <div className="bg-sage-900 p-9 text-center text-white">
          <h2 className="text-3xl">Take the first step from wherever you are in {place}</h2>
          <p className="mt-3 text-sage-100">Choose a time in {guide.country} time and send your request. The clinic replies to confirm.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link href="/book/" className="bg-clay-700 px-6 py-3.5 text-sm font-semibold text-white hover:bg-clay-800">Book an online session</Link>
            <a href="tel:+9779861800547" className="bg-white px-6 py-3.5 text-sm font-semibold text-sage-950">+977 9861800547</a>
          </div>
        </div>
        <p className="mt-8 text-sm leading-6 text-[#5a635e]">
          This page gives general information and is not a substitute for personal medical advice. Dr. Kushal Kharel is registered with the Nepal Medical Council (#27199).
          Online consultation has limits and is not an emergency service.
        </p>
        <nav aria-label="Related pages" className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {region && <Link href={`/nepalese-abroad/${region.slug}/`} className="font-semibold text-sage-800 underline">All of {region.shortName}</Link>}
          <Link href="/nepalese-abroad/" className="font-semibold text-sage-800 underline">All countries</Link>
          <Link href="/psychiatrist-for-nepalis-abroad/" className="font-semibold text-sage-800 underline">Psychiatrist for Nepalis abroad</Link>
          <Link href="/online-psychiatrist-nepal/" className="font-semibold text-sage-800 underline">Online psychiatrist</Link>
        </nav>
        {neighbours.length > 0 && (
          <>
            <p className="mt-6 text-sm font-semibold">Nearby countries</p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {neighbours.map((s) => (
                <li key={s}>
                  <Link href={`/nepali-psychiatrist/${s}/`} className="block border border-[#d6d8d2] bg-white px-4 py-2 text-sm font-medium hover:border-sage-600">
                    Nepali psychiatrist in {getAbroadGuide(s)!.country}
                  </Link>
                </li>
              ))}
              {region?.slug === "east-asia" && (
                <li>
                  <Link href="/nepali-psychiatrist-japan/" className="block border border-[#d6d8d2] bg-white px-4 py-2 text-sm font-medium hover:border-sage-600">Nepali psychiatrist in Japan</Link>
                </li>
              )}
            </ul>
          </>
        )}
      </section>
    </main>
  );
}
