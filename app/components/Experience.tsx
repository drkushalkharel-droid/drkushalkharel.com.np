import { Briefcase, GraduationCap, Home, Stethoscope } from "lucide-react";

const timeline = [
  {
    year: "2020 — Present",
    title: "Home-Based Psychiatric Clinic",
    place: "Kalanki-14, Kathmandu",
    description:
      "Providing confidential psychiatric assessment, medication management, psychotherapy and telepsychiatry consultation to patients in Kathmandu and across Nepal.",
    icon: Home,
  },
  {
    year: "2023 — 2026",
    title: "MD Psychiatry (Psychiatry Training)",
    place: "KIST Medical College Teaching Hospital",
    description:
      "Completed specialist postgraduate training in psychiatry, building expertise in the assessment and treatment of anxiety, mood, psychotic, neurodevelopmental and addiction-related disorders.",
    icon: GraduationCap,
  },
  {
    year: "2022 — 2023",
    title: "Medical Officer",
    place: "Kathmandu ENT Hospital",
    description:
      "Provided general medical care as a Medical Officer prior to specializing in psychiatry.",
    icon: Stethoscope,
  },
  {
    year: "2021 — 2022",
    title: "Medical Officer",
    place: "Patan Hospital",
    description:
      "Provided general medical care as a Medical Officer, building broad clinical experience across patient populations.",
    icon: Briefcase,
  },
  {
    year: "2020 — 2021",
    title: "Medical Officer",
    place: "Kantipur Hospital",
    description:
      "Began clinical practice as a Medical Officer, providing general medical care.",
    icon: Briefcase,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[4px] text-cyan-200">
            Experience &amp; Training
          </span>
          <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
            A clinical career built on broad medical experience
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Dr. Kushal Kharel&apos;s path to psychiatry included general
            clinical experience across multiple Kathmandu hospitals before and
            during specialist training, alongside a continuously running
            clinical practice since 2020.
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
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cyan-400/15 text-cyan-200">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[2px] text-cyan-200">
                    {item.year}
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-blue-100">{item.place}</p>
                  <p className="mt-2 leading-7 text-slate-300">
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
