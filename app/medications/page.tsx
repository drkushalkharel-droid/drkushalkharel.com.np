import type { Metadata } from "next";
import Link from "next/link";
import { Pill } from "lucide-react";
import { medications } from "../data/medications";

const siteUrl = "https://drkushalkharel.com.np";

export const metadata: Metadata = {
  title: "Psychiatric Medication Information",
  description:
    "Educational information on psychiatric medications — what they treat, common side effects, precautions, time to effect and safe discontinuation — by Dr. Kushal Kharel, Consultant Psychiatrist in Kathmandu, Nepal.",
  keywords: [
    "Psychiatric medication information Nepal",
    "SSRI explained",
    "Antipsychotic medication Nepal",
    "Lithium Nepal",
    "Benzodiazepines Nepal",
  ],
  alternates: { canonical: "/medications" },
  openGraph: {
    title: "Psychiatric Medication Information | Dr. Kushal Kharel",
    description: "Educational information on psychiatric medications, by category, for patients in Nepal.",
    url: `${siteUrl}/medications`,
    siteName: "Dr. Kushal Kharel",
    images: [{ url: "/images/doctor.png", width: 1200, height: 630 }],
    type: "website",
  },
};

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
      </section>
    </main>
  );
}
