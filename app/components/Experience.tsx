import { GraduationCap, Home } from "lucide-react";

const timeline = [
  {
    year: "Ongoing",
    title: "Home-Based Psychiatric Clinic",
    place: "Kalanki-14, Kathmandu",
    description:
      "Providing confidential psychiatric assessment, medication management, psychotherapy and telepsychiatry consultation to patients in Kathmandu and across Nepal.",
    icon: Home,
  },
  {
    year: "Completed",
    title: "MD Psychiatry (Psychiatry Training)",
    place: "KIST Medical College Teaching Hospital",
    description:
      "Specialist postgraduate training in psychiatry, building expertise in the assessment and treatment of anxiety, mood, psychotic, neurodevelopmental and addiction-related disorders.",
    icon: GraduationCap,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-stone-950 py-24 text-white">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[4px] text-clay-200">
            Experience &amp; Training
          </span>
          <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
            A clinical career built on specialist psychiatric training
          </h2>
          <p className="mt-6 text-lg leading-8 text-stone-300">
            Dr. Kushal Kharel is a Nepal Medical Council-registered Consultant
            Psychiatrist with specialist MD Psychiatry training, running a
            continuous clinical practice in Kalanki, Kathmandu.
          </p>
        </div>

        <div className="mt-16 space-y-6">
          {timeline.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={`${item.year}-${item.title}`}
                className="flex flex-col gap-4 rounded-lg border border-white/10 bg-white/5 p-6 sm:flex-row sm:items-start"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-clay-400/15 text-clay-200">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[2px] text-clay-200">
                    {item.year}
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-sage-100">{item.place}</p>
                  <p className="mt-2 leading-7 text-stone-300">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
