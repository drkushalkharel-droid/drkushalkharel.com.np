import Link from "next/link";
import { Globe2, Phone } from "lucide-react";
import { abroadGuides } from "../data/abroad";

export default function AbroadSeoSection() {
  return (
    <section id="nepalese-abroad" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[3px] text-blue-700">
            <Globe2 size={16} aria-hidden="true" />
            Nepalese Abroad
          </span>
          <h2 className="mt-5 text-4xl font-bold leading-tight text-slate-950 md:text-5xl">
            Mental health guidance for Nepali people living abroad
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Nepalese students, workers and families abroad may face loneliness,
            visa pressure, academic or work stress, sleep problems, depression,
            anxiety and substance use concerns. These guides help people find
            culturally familiar psychiatric guidance and contact Dr. Kushal
            Kharel when support is needed.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {abroadGuides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/nepalese-abroad/${guide.slug}`}
              className="block rounded-lg border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
            >
              <p className="text-sm font-semibold uppercase tracking-[2px] text-blue-700">
                {guide.region}
              </p>
              <h3 className="mt-4 text-2xl font-bold text-slate-950">
                {guide.country}
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                {guide.headline}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-12 rounded-lg bg-slate-950 p-8 text-white">
          <h3 className="text-3xl font-bold">
            Nepali patient outside Nepal?
          </h3>
          <p className="mt-4 max-w-3xl leading-8 text-slate-300">
            Call or message Dr. Kushal Kharel for guidance. Emergency and
            legal prescribing rules differ by country, so urgent safety issues
            should be handled through local emergency services first.
          </p>
          <a
            href="tel:+9779861800547"
            className="mt-6 inline-flex items-center gap-3 rounded-lg bg-white px-6 py-3 font-bold text-slate-950 transition hover:bg-blue-50"
          >
            <Phone size={20} aria-hidden="true" />
            Call +977 9861800547
          </a>
        </div>
      </div>
    </section>
  );
}
