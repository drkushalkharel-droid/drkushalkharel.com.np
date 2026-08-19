import Link from "next/link";
import { ExternalLink, Quote, Star } from "lucide-react";

const testimonials = [
  {
    title: "Patient in Nepal",
    review:
      "Dr. Kushal ले मेरो कुरा धैर्यपूर्वक सुन्नुभयो र कुनै judgement गर्नुभएन। Consultation को क्रममा धेरै कुराहरू बुझ्न पाएँ र आफ्नो मानसिक स्वास्थ्यप्रति पहिलेभन्दा धेरै सचेत भएको छु।",
  },
  {
    title: "Confidential patient, USA",
    review:
      "Dr. Kushal created a comfortable environment where I could discuss things openly. He listened carefully and asked questions that helped clarify what I had been experiencing. The online format made it possible for me to receive psychiatric support while living in the USA, which was extremely convenient.",
  },
  {
    title: "Confidential patient, Japan",
    review:
      "He listened carefully, asked relevant questions and explained my symptoms in a way that was easy to understand. I never felt rushed during the consultation. Being able to speak with a psychiatrist from Nepal while living abroad made accessing mental health support much easier for me.",
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
            <figure
              key={item.title}
              className="hover-lift flex h-full flex-col rounded-2xl border border-stone-200 bg-white p-8 shadow-sm"
            >
              <Quote size={32} className="text-clay-300" aria-hidden="true" />
              <blockquote className="mt-4 flex-1 leading-7 text-stone-600">
                &ldquo;{item.review}&rdquo;
              </blockquote>
              <figcaption className="mt-5 font-semibold text-sage-900">&mdash; {item.title}</figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-stone-500">
          Names and identifying details are withheld to protect patient privacy.{" "}
          <Link href="/patient-testimonials" className="underline hover:text-sage-700">
            Read more patient testimonials
          </Link>
        </p>

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
