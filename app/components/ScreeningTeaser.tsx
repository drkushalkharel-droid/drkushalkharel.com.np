import Link from "next/link";
import { ClipboardCheck, Phone } from "lucide-react";
import { screeningTools } from "../data/screening";

export default function ScreeningTeaser() {
  const featured = screeningTools.slice(0, 6);

  return (
    <section id="screening" className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[3px] text-blue-700">
            <ClipboardCheck size={16} aria-hidden="true" />
            Mental Health Screening
          </span>
          <h2 className="mt-5 text-4xl font-bold leading-tight text-slate-950 md:text-5xl">
            Check symptoms, understand your score, and know when to seek help
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            {screeningTools.length} free, self-rated screening tools covering
            depression, anxiety, OCD, PTSD, bipolar mood, ADHD, alcohol use,
            insomnia and more. These tools do not diagnose mental illness, but
            they can help you decide whether to contact Dr. Kushal Kharel for
            professional assessment.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/screening"
              className="rounded-lg bg-blue-700 px-6 py-3 font-bold text-white transition hover:bg-blue-800"
            >
              Start Screening
            </Link>
            <a
              href="tel:+9779861800547"
              className="inline-flex items-center gap-3 rounded-lg border border-slate-300 px-6 py-3 font-bold text-slate-800 transition hover:border-blue-700 hover:text-blue-700"
            >
              <Phone size={20} aria-hidden="true" />
              Call +977 9861800547
            </a>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((tool) => (
            <Link
              key={tool.id}
              href={`/screening/${tool.id}`}
              className="block rounded-lg border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
            >
              <h3 className="text-xl font-bold text-blue-950">{tool.shortTitle}</h3>
              <p className="mt-3 leading-7 text-slate-600">{tool.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
