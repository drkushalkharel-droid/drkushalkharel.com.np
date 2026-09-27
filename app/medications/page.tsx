import type { Metadata } from "next";
import Link from "next/link";
import { Pill } from "lucide-react";
import { medications } from "../data/medications";
import { metaFor } from "../lib/seoText";

const siteUrl = "https://drkushalkharel.com.np";

const meta = metaFor("/medications/", { title: "Psychiatric Medication Information", description: "Educational information on psychiatric medications — what they treat, common side effects, precautions, time to effect and safe discontinuation — by Dr. Kushal Kharel, Consultant Psychiatrist in Kathmandu, Nepal." });

export const metadata: Metadata = {
  title: meta.title,
  description:
    meta.description,
  keywords: [
    "Psychiatric medication information Nepal",
    "SSRI explained",
    "Antipsychotic medication Nepal",
    "Lithium Nepal",
    "Benzodiazepines Nepal",
  ],
  alternates: { canonical: "/medications/" },
  openGraph: {
    title: "Psychiatric Medication Information | Dr. Kushal Kharel",
    description: "Educational information on psychiatric medications, by category, for patients in Nepal.",
    url: `${siteUrl}/medications`,
    siteName: "Dr. Kushal Kharel",
    images: [{ url: "/images/doctor.png", width: 1200, height: 630 }],
    type: "website",
  },
};

const medicationGuides = [
  { href: "/resources/antidepressants-ssri-snri-guide/", title: "Understanding Antidepressants (SSRIs & SNRIs)", text: "How they work, common side effects and what to expect during treatment." },
  { href: "/resources/antipsychotics-guide/", title: "Understanding Antipsychotic Medications", text: "How they work, common side effects and physical health monitoring." },
  { href: "/resources/mood-stabilizers-guide/", title: "Understanding Mood Stabilizers", text: "Medicines used for bipolar disorder, including lithium, and the monitoring they need." },
  { href: "/resources/benzodiazepines-guide/", title: "Understanding Benzodiazepines", text: "Short-term use for anxiety, panic or insomnia, and the risk of dependence." },
  { href: "/resources/adhd-stimulant-medications-guide/", title: "Understanding ADHD Stimulant Medications", text: "Common effects and the monitoring that goes with them." },
];

export default function MedicationsIndexPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 pb-14 pt-28 lg:px-8 lg:pt-32">
          <p className="text-sm font-semibold uppercase tracking-[3px] text-sage-700">Medication Information</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Psychiatric medications explained
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-600">
            General educational information on common classes of psychiatric medication — what they treat, common
            side effects, precautions, and safe discontinuation. This is education, not an individual prescription;
            what's right for you is decided in a personal consultation.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="tel:+9779861800547" className="rounded-lg bg-sage-700 px-6 py-3 font-semibold text-white transition hover:bg-sage-800">
              Book Appointment
            </a>
            <Link href="/conditions" className="rounded-lg border border-sage-700 px-6 py-3 font-semibold text-sage-700 transition hover:bg-sage-700 hover:text-white">
              Conditions Library
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {medications.map((med) => (
            <Link
              key={med.slug}
              href={`/medications/${med.slug}`}
              className="block rounded-lg border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-sage-300 hover:shadow-md"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-sage-100 text-sage-800">
                <Pill size={22} aria-hidden="true" />
              </span>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[2px] text-sage-700">{med.category}</p>
              <h2 className="mt-2 text-2xl font-bold text-stone-950">{med.name}</h2>
              <p className="mt-3 leading-7 text-stone-600">{med.shortDescription}</p>
              <p className="mt-5 font-semibold text-sage-700">Read more</p>
            </Link>
          ))}
        </div>

        <div className="mt-12 rounded-lg border border-sage-200 bg-sage-50 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-sage-950">Before you start, change or stop a medicine</h2>
          <p className="mt-3 max-w-3xl leading-8 text-stone-700">
            Do not stop or change a psychiatric medicine on your own, even if you feel better or are worried about a side
            effect. Some medicines need to be reduced gradually, and the right plan depends on your diagnosis, other
            medicines and health. Bring a list of everything you take, or the medicines themselves, to your appointment so
            they can be reviewed together.
          </p>
          <p className="mt-5 font-semibold text-stone-950">Questions worth asking your prescriber</p>
          <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-stone-700">
            <li>What is this medicine for, and what should I notice if it is working?</li>
            <li>How long before I feel a difference, and how long will I take it?</li>
            <li>Which side effects are common, and which ones mean I should call you?</li>
            <li>What should I do if I miss a dose, and can I drink alcohol or take other medicines with it?</li>
            <li>When will we review whether to continue, reduce or stop it?</li>
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-stone-950">Downloadable medication guides</h2>
          <p className="mt-3 max-w-3xl leading-8 text-stone-600">
            Printable one-page guides you can read at home or share with family. Each is general information, not a
            prescription.
          </p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {medicationGuides.map((guide) => (
              <li key={guide.href}>
                <Link
                  href={guide.href}
                  className="block h-full rounded-lg border border-stone-200 bg-white p-5 shadow-sm transition hover:border-sage-300 hover:bg-sage-50"
                >
                  <span className="font-semibold text-sage-800 underline underline-offset-2">{guide.title}</span>
                  <span className="mt-2 block leading-7 text-stone-600">{guide.text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <Link
            href="/psychiatric-medication-side-effects"
            className="block rounded-lg border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-sage-300 hover:shadow-md"
          >
            <p className="mt-0 text-sm font-semibold uppercase tracking-[2px] text-sage-700">Patient FAQ</p>
            <h2 className="mt-2 text-2xl font-bold text-stone-950">Common Side Effects of Psychiatric Medications</h2>
            <p className="mt-3 leading-7 text-stone-600">
              Sertraline, escitalopram, fluoxetine, amitriptyline, olanzapine, clonazepam, lorazepam and propranolol — explained one by one.
            </p>
            <p className="mt-5 font-semibold text-sage-700">Read the FAQ</p>
          </Link>

          <Link
            href="/medication-review-second-opinion-nepal"
            className="block rounded-lg border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-sage-300 hover:shadow-md"
          >
            <p className="mt-0 text-sm font-semibold uppercase tracking-[2px] text-sage-700">Second Opinion</p>
            <h2 className="mt-2 text-2xl font-bold text-stone-950">Medication Review &amp; Second Opinion</h2>
            <p className="mt-3 leading-7 text-stone-600">
              Already taking psychiatric medication and want an independent review? See who this is for and what to bring.
            </p>
            <p className="mt-5 font-semibold text-sage-700">Learn more</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
