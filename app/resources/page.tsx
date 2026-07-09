import type { Metadata } from "next";
import Link from "next/link";
import { getResourcesByCategory } from "../data/resources";

const siteUrl = "https://drkushalkharel.com.np";
const title = "Downloadable Patient Resources | Leaflets, Guides & Handouts";
const description =
  "Free downloadable patient information leaflets, medication guides, coping tools, and family psychoeducation sheets from Dr. Kushal Kharel, Consultant Psychiatrist in Kathmandu, Nepal.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/resources",
  },
  keywords: [
    "psychiatric patient leaflets Nepal",
    "medication guide download",
    "sleep hygiene handout",
    "anxiety coping cards",
    "panic attack management PDF",
    "family psychoeducation sheet",
    "caregiver support resources Nepal",
  ],
  openGraph: {
    title,
    description,
    url: `${siteUrl}/resources`,
    siteName: "Dr. Kushal Kharel",
    images: [{ url: "/images/doctor.png", width: 1200, height: 630 }],
    type: "website",
  },
};

export default function ResourcesPage() {
  const groups = getResourcesByCategory();

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-28 lg:px-8 lg:pt-32">
          <Link href="/" className="font-semibold text-blue-700">
            &larr; Back to home
          </Link>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[3px] text-blue-700">
            Patient Resources
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Downloadable leaflets, medication guides and coping tools
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Free, printable patient information leaflets, medication guides,
            coping tools, and family psychoeducation sheets. Each resource can
            be downloaded as a PDF or printed directly from your browser.
          </p>
        </div>
      </section>

      {groups.map((group) => (
        <section key={group.category} className="border-t border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-950">{group.category}</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {group.items.map((resource) => (
                <Link
                  key={resource.slug}
                  href={`/resources/${resource.slug}`}
                  className="block h-full rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
                >
                  <h3 className="text-xl font-bold leading-snug text-slate-950">
                    {resource.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">{resource.shortDescription}</p>
                  <p className="mt-5 font-semibold text-blue-700">View & download</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="bg-blue-950 py-16 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold">Have questions about a resource?</h2>
          <p className="mt-4 text-lg leading-8 text-blue-100">
            These materials are for education and support — they don&apos;t
            replace individualized medical advice. Contact Dr. Kushal Kharel
            for guidance specific to your situation.
          </p>
          <a
            href="tel:+9779861800547"
            className="mt-8 inline-block rounded-lg bg-white px-8 py-4 font-semibold text-blue-950"
          >
            Call +977 9861800547
          </a>
        </div>
      </section>
    </main>
  );
}
