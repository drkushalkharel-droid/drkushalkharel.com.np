import type { Metadata } from "next";
import Link from "next/link";
import { conditions, getConditionsByCategory } from "../data/conditions";

const siteUrl = "https://drkushalkharel.com.np";

export const metadata: Metadata = {
  title: "Psychiatric Conditions Library A-Z",
  description:
    "A growing, evidence-based library of psychiatric disorders — causes, symptoms, diagnosis, treatment, medications, therapy and family guidance, by Dr. Kushal Kharel, Consultant Psychiatrist in Kathmandu, Nepal.",
  keywords: [
    "Psychiatric Conditions Nepal",
    "Mental Illness Symptoms and Treatment",
    "Psychiatry Disorders A-Z",
    "Best Psychiatrist in Nepal",
    "Dr Kushal Kharel",
    "Psychiatrist Kathmandu",
  ],
  alternates: {
    canonical: "/conditions",
  },
  openGraph: {
    title: "Psychiatric Conditions Library A-Z | Dr. Kushal Kharel",
    description:
      "Evidence-based, patient-friendly guides to psychiatric disorders — causes, symptoms, diagnosis and treatment.",
    url: `${siteUrl}/conditions`,
    siteName: "Dr. Kushal Kharel",
    images: [{ url: "/images/doctor.png", width: 1200, height: 630 }],
    type: "website",
  },
};

export default function ConditionsLibraryPage() {
  const groups = getConditionsByCategory();

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-28 lg:px-8 lg:pt-32">
          <p className="text-sm font-semibold uppercase tracking-[3px] text-blue-700">
            Conditions Library
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            A comprehensive, evidence-based guide to psychiatric conditions
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Each entry covers causes, brain mechanisms, symptoms, diagnosis,
            treatment, medications, psychotherapy, lifestyle advice, prognosis,
            family guidance and frequently asked questions. This library is
            being expanded continuously — new conditions are added regularly.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="tel:+9779861800547" className="rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800">
              Book Appointment
            </a>
            <Link href="/knowledge" className="rounded-lg border border-blue-700 px-6 py-3 font-semibold text-blue-700 transition hover:bg-blue-700 hover:text-white">
              Nepali Patient Guides
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-950">Conditions at a Glance</h2>
          <p className="mt-4 max-w-3xl leading-8 text-slate-600">
            A quick-reference summary of every condition in this library —
            category, a key symptom and the primary treatment approach.
          </p>
          <div className="mt-8 overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead className="bg-slate-100 text-slate-700">
                <tr>
                  <th className="px-4 py-3 font-bold">Condition</th>
                  <th className="px-4 py-3 font-bold">Category</th>
                  <th className="px-4 py-3 font-bold">Key Symptom</th>
                  <th className="px-4 py-3 font-bold">Primary Treatment</th>
                </tr>
              </thead>
              <tbody>
                {conditions.map((condition) => (
                  <tr key={condition.slug} className="border-t border-slate-200 odd:bg-white even:bg-slate-50">
                    <td className="px-4 py-3 font-semibold">
                      <Link href={`/conditions/${condition.slug}`} className="text-blue-700 hover:underline">
                        {condition.title}
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-slate-600">{condition.category}</td>
                    <td className="px-4 py-3 text-slate-600">{condition.symptoms[0]}</td>
                    <td className="px-4 py-3 text-slate-600">
                      {condition.psychotherapy[0]?.name ?? condition.medications[0]?.name ?? "Individualized"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {groups.map((group) => (
        <section key={group.category} className="border-t border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-950">{group.category}</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {group.items.map((condition) => (
                <Link
                  key={condition.slug}
                  href={`/conditions/${condition.slug}`}
                  className="block h-full rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
                >
                  <h3 className="text-2xl font-bold leading-snug text-slate-950">
                    {condition.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">{condition.shortDescription}</p>
                  <p className="mt-5 font-semibold text-blue-700">Read full guide</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="bg-blue-950 py-16 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold">Don&apos;t see your condition yet?</h2>
          <p className="mt-4 text-lg leading-8 text-blue-100">
            This library is growing continuously. If you can&apos;t find what
            you&apos;re looking for, a psychiatric consultation can still help
            clarify your symptoms and the right next steps.
          </p>
          <a
            href="tel:+9779861800547"
            className="mt-8 inline-block rounded-lg bg-white px-8 py-4 font-semibold text-blue-950"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </main>
  );
}
