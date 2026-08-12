import Link from "next/link";
import { Globe2, MessageCircle } from "lucide-react";
import { abroadGuides } from "../data/abroad";

export default function AbroadSeoSection() {
  return (
    <section id="nepalese-abroad" className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="rounded-lg border border-stone-200 bg-stone-50 p-8 shadow-sm">
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

          <div className="mt-6 flex flex-wrap gap-2">
            {abroadGuides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/nepalese-abroad/${guide.slug}`}
                className="rounded-full border border-sage-200 bg-white px-4 py-2 text-sm font-semibold text-sage-900 transition hover:border-sage-400 hover:bg-sage-100"
              >
                {guide.country}
              </Link>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/nepalese-abroad"
              className="rounded-lg bg-sage-700 px-6 py-3 font-semibold text-white transition hover:bg-sage-800"
            >
              Find your country
            </Link>
            <a
              href="https://wa.me/9779861800547"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-green-600 px-6 py-3 font-semibold text-green-700 transition hover:bg-green-600 hover:text-white"
            >
              <MessageCircle size={18} aria-hidden="true" />
              WhatsApp from anywhere
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
