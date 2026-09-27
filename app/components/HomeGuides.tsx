import Link from "next/link";
import { ArrowRight } from "lucide-react";

// A compact set of links to the guides that answer the questions people ask before
// booking. It replaces three long SEO-text sections on the homepage (their content
// lives on these pages), so the homepage stays focused.
const guides = [
  { href: "/best-psychiatrist-nepal/", title: "Choosing a psychiatrist", text: "What to check: credentials, registration and fit." },
  { href: "/counselling-in-nepal/", title: "Counselling or psychiatry?", text: "The difference, and which one you need." },
  { href: "/online-psychiatrist-nepal/", title: "Online consultation", text: "Care from anywhere in Nepal, by video." },
  { href: "/psychiatrist-fee-nepal/", title: "Consultation fees", text: "What a visit costs in Kathmandu." },
  { href: "/psychiatry-clinic-kathmandu/", title: "The Kalanki clinic", text: "Location, hours and your first visit." },
  { href: "/faq/", title: "All questions answered", text: "Booking, confidentiality, medication and more." },
];

export default function HomeGuides() {
  return (
    <section id="guides" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-stone-950 md:text-4xl">Helpful guides before you book</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group rounded-lg border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-sage-300 hover:shadow-md"
            >
              <h3 className="flex items-center justify-between gap-3 text-lg font-bold text-stone-950">
                {guide.title}
                <ArrowRight size={18} className="text-sage-700 transition group-hover:translate-x-1" aria-hidden="true" />
              </h3>
              <p className="mt-2 leading-7 text-stone-600">{guide.text}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
