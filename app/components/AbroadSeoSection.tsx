import Link from "next/link";
import { Globe2 } from "lucide-react";

export default function AbroadSeoSection() {
  return (
    <section id="nepalese-abroad" className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="flex flex-col items-start gap-6 rounded-lg border border-stone-200 bg-stone-50 p-8 shadow-sm md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sage-100 text-sage-800">
              <Globe2 size={22} aria-hidden="true" />
            </span>
            <div>
              <h2 className="text-2xl font-bold text-stone-950">
                A Nepali living abroad and looking for support?
              </h2>
              <p className="mt-2 max-w-2xl leading-7 text-stone-600">
                Country-specific guidance for Nepali students, workers and
                families abroad dealing with loneliness, visa pressure, work
                stress or mental health concerns, with online consultation
                available from Dr. Kushal Kharel.
              </p>
            </div>
          </div>
          <Link
            href="/nepalese-abroad"
            className="shrink-0 rounded-lg bg-sage-700 px-6 py-3 font-semibold text-white transition hover:bg-sage-800"
          >
            Find your country
          </Link>
        </div>
      </div>
    </section>
  );
}
