import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { cityGuides } from "../data/cities";

export default function CitySeoSection() {
  return (
    <section id="cities" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[3px] text-blue-700">
            <MapPin size={16} aria-hidden="true" />
            Psychiatric Care Across Nepal
          </span>
          <h2 className="mt-5 text-4xl font-bold leading-tight text-slate-950 md:text-5xl">
            Mental health information for patients searching by city
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            People search for help in different ways: psychiatrist in
            Kathmandu, anxiety doctor in Pokhara, depression treatment in
            Biratnagar, online psychiatrist in Chitwan, and more. These city
            guides explain common mental health concerns and how to contact Dr.
            Kushal Kharel when professional support is needed.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cityGuides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/cities/${guide.slug}`}
              className="block rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
            >
              <p className="text-sm font-semibold uppercase tracking-[2px] text-blue-700">
                {guide.province}
              </p>
              <h3 className="mt-4 text-2xl font-bold text-slate-950">
                {guide.city}
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                {guide.headline}
              </p>
              <p className="mt-5 font-semibold text-blue-700">
                View city guide
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-12 rounded-lg bg-blue-950 p-8 text-white">
          <h3 className="text-3xl font-bold">
            Need psychiatric help from any city in Nepal?
          </h3>
          <p className="mt-4 max-w-3xl leading-8 text-blue-100">
            For anxiety, depression, addiction, sleep problems, child and
            adolescent concerns, memory problems or urgent mental health
            questions, call Dr. Kushal Kharel for guidance.
          </p>
          <a
            href="tel:+9779861800547"
            className="mt-6 inline-flex items-center gap-3 rounded-lg bg-white px-6 py-3 font-bold text-blue-950 transition hover:bg-blue-50"
          >
            <Phone size={20} aria-hidden="true" />
            Call +977 9861800547
          </a>
        </div>
      </div>
    </section>
  );
}
