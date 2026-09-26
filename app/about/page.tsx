import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Phone } from "lucide-react";

const siteUrl = "https://drkushalkharel.com.np";
const title = "About Dr. Kushal Kharel — Consultant Psychiatrist, Kathmandu";
const description =
  "Dr. Kushal Kharel's professional background: MD Psychiatry, Nepal Medical Council registration #27199, clinical experience, credentials and areas of clinical focus.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about/" },
  openGraph: {
    title,
    description,
    url: `${siteUrl}/about`,
    siteName: "Dr. Kushal Kharel",
    images: [{ url: "/images/doctor.png", width: 1200, height: 630 }],
    type: "profile",
  },
};

const credentials = [
  { credential: "Nepal Medical Council registration (No. 27199)", institution: "Nepal Medical Council", year: "Active" },
  { credential: "MD Psychiatry", institution: "KIST Medical College Teaching Hospital", year: "Completed" },
  { credential: "Lifetime Member", institution: "Nepal Medical Association", year: "Active" },
  { credential: "Lifetime Member", institution: "Psychiatrists' Association of Nepal (PAN)", year: "Active" },
  { credential: "Therapist", institution: "TherapyMantra (online mental-health platform)", year: "Active" },
  { credential: "Free telepsychiatry service", institution: "Kathmandu Mental Health Clinic", year: "Ongoing" },
  { credential: "Psychiatric clinic, Kalanki-14", institution: "Private practice", year: "Ongoing" },
];

const verifiedProfiles = [
  { label: "Nagarik News — author profile", href: "https://nagariknews.nagariknetwork.com/author/dr.kushal-kharel" },
  { label: "TherapyMantra — therapist profile", href: "https://therapists.therapymantra.co/list/therapist/268690/dr-kushal-kharel" },
  { label: "UpchaarNepal — doctor profile", href: "https://www.upchaarnepal.com/find/doctors/CjxZEz8BmbNtVtVl3kz38wbCRAv1" },
  { label: "Kathmandu Mental Health Clinic — doctor profile", href: "https://kathmandumentalhealth.com.np/doctors/dr-kushal-kharel/" },
  { label: "about.me profile", href: "https://about.me/dr.kushalkharelpsychiatrist" },
  { label: "Yandex Maps — clinic listing & reviews", href: "https://yandex.com/maps/org/dr_kushal_kharel/209638868435/reviews/" },
  { label: "Quora profile", href: "https://www.quora.com/profile/Dr-Kushal-Kharel" },
];

const authoredContent = [
  { label: "Psychiatric conditions library (A–Z)", href: "/conditions" },
  { label: "Mental health articles & guides", href: "/blog" },
  { label: "Nepali-language patient guides", href: "/knowledge" },
  { label: "Medication information", href: "/medications" },
  { label: "Community mental-health programs", href: "/community-mental-health-programs" },
  { label: "Patient leaflets & resources", href: "/resources" },
];

export default function AboutPage() {
  // References the single canonical Physician entity defined in
  // app/layout.tsx (#psychiatrist) instead of minting a second, separate
  // "/about#psychiatrist" node for the same real person — a previous version
  // duplicated the same name/credentials under a different @id, which
  // fragments the entity across two identities instead of reinforcing one.
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${siteUrl}/about`,
    url: `${siteUrl}/about`,
    name: title,
    description,
    about: { "@id": `${siteUrl}#psychiatrist` },
    mainEntity: { "@id": `${siteUrl}#psychiatrist` },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "About", item: `${siteUrl}/about` },
    ],
  };

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-14 pt-28 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:pt-32">
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/images/doctor.png"
              alt="Dr. Kushal Kharel, Consultant Psychiatrist in Kathmandu, Nepal"
              width={700}
              height={900}
              quality={85}
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="w-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[3px] text-sage-700">About the author</p>
            <h1 className="mt-5 text-4xl font-bold leading-tight text-stone-950 md:text-5xl">Dr. Kushal Kharel</h1>
            <p className="mt-2 text-xl font-semibold text-sage-800">Consultant Psychiatrist</p>
            <p className="mt-6 max-w-xl text-lg leading-8 text-stone-600">
              Dr. Kushal Kharel is a Consultant Psychiatrist based in Kalanki, Kathmandu, providing evidence-based
              psychiatric assessment, diagnosis and treatment for children, adolescents, adults and older adults —
              including anxiety disorders, depression, mood disorders, psychotic disorders and substance addiction,
              with a particular interest in the overlap between neurological and psychiatric conditions.
            </p>
            <p className="mt-4 max-w-xl leading-8 text-stone-600">
              In addition to in-person consultations at the Kalanki clinic, he offers telepsychiatry and online
              consultation for patients across Nepal and Nepali communities abroad. He is a Nepal Medical Council
              registered psychiatrist (registration #27199) and reviews and authors the clinical content on this
              site.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="tel:+9779861800547" className="inline-flex items-center gap-3 rounded-lg bg-sage-700 px-6 py-3 font-bold text-white transition hover:bg-sage-800">
                <Phone size={20} aria-hidden="true" />
                Call +977 9861800547
              </a>
              <Link href="/appointment" className="rounded-lg border border-sage-700 px-6 py-3 font-semibold text-sage-700 transition hover:bg-sage-700 hover:text-white">
                Book an appointment
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
        <h2 className="text-3xl font-bold text-stone-950">Credentials at a glance</h2>
        <div className="mt-6 overflow-x-auto rounded-lg border border-stone-200">
          <table className="w-full min-w-[560px] text-left text-base">
            <caption className="sr-only">Dr. Kushal Kharel&apos;s credentials at a glance</caption>
            <thead className="bg-stone-100 text-stone-700">
              <tr>
                <th className="px-5 py-3 font-bold">Credential</th>
                <th className="px-5 py-3 font-bold">Institution</th>
                <th className="px-5 py-3 font-bold">Year</th>
              </tr>
            </thead>
            <tbody className="text-stone-700">
              {credentials.map((row, i) => (
                <tr key={`${row.credential}-${row.institution}`} className={`border-t border-stone-200 ${i % 2 ? "bg-stone-50" : ""}`}>
                  <td className="px-5 py-3 font-semibold">{row.credential}</td>
                  <td className="px-5 py-3">{row.institution}</td>
                  <td className="px-5 py-3">{row.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
        <h2 className="text-3xl font-bold text-stone-950">Verified profiles</h2>
        <p className="mt-4 max-w-3xl leading-8 text-stone-600">
          Dr. Kushal Kharel&apos;s practice and credentials are also verifiable on these external, independently
          operated platforms.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {verifiedProfiles.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between gap-2 rounded-lg border border-stone-200 bg-stone-50 p-4 font-semibold text-sage-800 shadow-sm transition hover:-translate-y-1 hover:border-sage-300 hover:shadow-md"
            >
              {item.label}
              <ExternalLink size={16} aria-hidden="true" className="shrink-0" />
            </a>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
          <h2 className="text-3xl font-bold text-stone-950">Authored & medically reviewed content</h2>
          <p className="mt-4 max-w-3xl leading-8 text-stone-600">
            Dr. Kushal Kharel writes and medically reviews the clinical content across this site.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {authoredContent.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg border border-stone-200 bg-stone-50 p-5 font-semibold text-sage-800 shadow-sm transition hover:-translate-y-1 hover:border-sage-300 hover:shadow-md"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sage-950 py-16 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold">Book a consultation</h2>
          <p className="mt-4 text-lg leading-8 text-sage-100">In-person at the Kalanki clinic in Kathmandu, or online from anywhere.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="tel:+9779861800547" className="rounded-lg bg-white px-8 py-4 font-semibold text-sage-950">+977 9861800547</a>
            <Link href="/appointment" className="rounded-lg border border-white/50 px-8 py-4 font-semibold text-white">Book online</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
