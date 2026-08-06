import { ExternalLink, Quote, Star } from "lucide-react";

const testimonials = [
  {
    title: "Professional & Compassionate Care",
    review:
      "Patients appreciate clear explanations, respectful communication, individualized treatment plans, and a supportive approach throughout their care.",
  },
  {
    title: "Convenient Online Consultation",
    review:
      "Secure online consultations provide access to specialist psychiatric care for patients throughout Nepal and internationally.",
  },
  {
    title: "Trusted, Evidence-Based Practice",
    review:
      "Treatment decisions are guided by current scientific evidence, careful assessment, and regular follow-up to achieve the best possible outcomes.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-linear-to-b from-stone-50 to-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[4px] text-sage-700">
            Patient Experience
          </span>
          <h2 className="mt-4 text-4xl font-bold text-stone-950 md:text-5xl">
            Trusted Mental Health Care
          </h2>
          <p className="mt-6 text-lg leading-8 text-stone-600">
            Compassionate, confidential and evidence-based psychiatric care,
            built on long-term therapeutic relationships with every patient.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.title}
              className="hover-lift flex h-full flex-col rounded-2xl border border-stone-200 bg-white p-8 shadow-sm"
            >
              <Quote size={32} className="text-clay-300" aria-hidden="true" />
              <h3 className="mt-5 text-xl font-bold text-sage-900">{item.title}</h3>
              <p className="mt-4 flex-1 leading-7 text-stone-600">{item.review}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-1 text-clay-500" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={20} fill="currentColor" strokeWidth={0} />
            ))}
          </div>
          <p className="text-stone-600">
            Read verified patient reviews directly on Google, where they stay
            complete and up to date.
          </p>
          <a
            href="https://maps.app.goo.gl/6xPZkgtVphdXZAhK6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-sage-700 px-8 py-4 font-semibold text-white transition hover:bg-sage-800"
          >
            View &amp; Leave a Google Review
            <ExternalLink size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
