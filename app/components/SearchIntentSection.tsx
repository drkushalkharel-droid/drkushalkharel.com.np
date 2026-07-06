import { BrainCircuit, MapPin, Phone, Search, ShieldCheck, Video } from "lucide-react";

const searchTerms = [
  "Best psychiatrist in Nepal",
  "Top psychiatrist in Kathmandu",
  "Anxiety doctor in Nepal",
  "Depression treatment Kathmandu",
  "Online psychiatrist Nepal",
  "Addiction psychiatrist Nepal",
];

const reasons = [
  {
    icon: BrainCircuit,
    title: "Specialist psychiatric assessment",
    text: "Evaluation for anxiety, depression, OCD, ADHD, bipolar disorder, psychosis, addiction, sleep and child psychiatry concerns.",
  },
  {
    icon: ShieldCheck,
    title: "Confidential evidence-based care",
    text: "Treatment planning built around diagnosis, safety, privacy, family context and long-term recovery.",
  },
  {
    icon: Video,
    title: "In-person and online consultation",
    text: "Consultation options for patients in Kathmandu and people searching for online psychiatric care across Nepal.",
  },
];

export default function SearchIntentSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[3px] text-blue-700">
            <Search size={16} aria-hidden="true" />
            Find Psychiatric Care
          </span>
          <h2 className="mt-5 text-4xl font-bold leading-tight text-slate-950 md:text-5xl">
            Searching for the best psychiatrist in Nepal?
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            If you are comparing psychiatrists in Nepal or Kathmandu, focus on
            specialist training, careful diagnosis, evidence-based treatment,
            confidentiality and clear follow-up. Dr. Kushal Kharel provides
            psychiatric care for children, adolescents, adults and older adults.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="tel:+9779861800547"
              className="inline-flex items-center gap-3 rounded-lg bg-blue-700 px-6 py-3 font-bold text-white shadow-lg transition hover:bg-blue-800"
            >
              <Phone size={20} aria-hidden="true" />
              Call +977 9861800547
            </a>
            <a
              href="https://maps.app.goo.gl/6xPZkgtVphdXZAhK6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-lg border border-slate-300 px-6 py-3 font-bold text-slate-800 transition hover:border-blue-700 hover:text-blue-700"
            >
              <MapPin size={20} aria-hidden="true" />
              Clinic Location
            </a>
          </div>
        </div>

        <div className="grid gap-5">
          <div className="rounded-lg border border-blue-100 bg-blue-50 p-6">
            <h3 className="text-xl font-bold text-blue-950">
              High-intent searches this page now supports
            </h3>
            <div className="mt-5 flex flex-wrap gap-3">
              {searchTerms.map((term) => (
                <span
                  key={term}
                  className="rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-blue-900"
                >
                  {term}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <div
                  key={reason.title}
                  className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm hover-lift"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-100 text-cyan-800">
                    <Icon size={24} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-slate-950">
                    {reason.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">{reason.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
