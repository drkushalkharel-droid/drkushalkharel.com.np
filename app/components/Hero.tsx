import Image from "./OptimizedImage";
import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
import { HeroArt } from "./BookArt";

const facts = [
  { n: "MD", l: "Psychiatry" },
  { n: "Online", l: "Video consultation" },
  { n: "#27199", l: "NMC registered" },
  { n: "3", l: "Languages" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f5f4ef]">
      <div className="mx-auto grid max-w-[1240px] gap-12 px-6 pb-20 pt-32 lg:grid-cols-2 lg:px-8 lg:pb-24 lg:pt-36">
        {/* LEFT */}
        <div className="min-w-0 animate-fade-up lg:pl-[6%]">
          <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.12em] text-sage-800">
            <span className="h-[7px] w-[7px] rounded-full bg-clay-500" aria-hidden="true" />
            Consultant Psychiatrist in Kathmandu, Nepal
          </p>

          <h1 className="my-7 text-[clamp(3rem,6vw,5.2rem)] leading-[.98] tracking-[-.05em] text-[#1f2927]">
            <span className="block">Psychiatrist in Kathmandu,</span>
            <em className="block">Dr. Kushal Kharel</em>
          </h1>

          <h2 className="text-xl font-normal leading-snug text-sage-700 lg:text-2xl">
            Evidence-based psychiatry, addiction treatment and online consultation
          </h2>

          <p id="hero-quick-answer" className="mt-6 max-w-[460px] text-[17px] leading-8 text-[#69736d]">
            Searching for the best psychiatrist near you in Kathmandu? Dr. Kharel sees patients in person at Kalanki and
            online across Nepal, offering confidential assessment, psychotherapy, medication management, addiction
            treatment and secure online consultation.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-6">
            <Link
              href="/book/"
              data-conversion="appointment"
              className="inline-flex items-center gap-3 bg-clay-500 px-6 py-4 text-[13px] font-semibold text-white transition hover:-translate-y-0.5 hover:bg-clay-700"
            >
              Book an appointment <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
            <a href="tel:+9779861800547" className="inline-flex items-center gap-2 border-b border-[#aeb6b0] pb-1 text-[13px] text-sage-800">
              <Phone size={15} aria-hidden="true" /> Call +977 9861800547
            </a>
          </div>

          <dl className="mt-14 grid max-w-[460px] grid-cols-2 gap-px bg-[#d6d8d2]">
            {facts.map((f) => (
              <div key={f.l} className="bg-[#f5f4ef] py-4 pr-4">
                <dt className="font-serif text-3xl text-clay-500">{f.n}</dt>
                <dd className="mt-1 text-sm text-[#69736d]">{f.l}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* RIGHT */}
        <div className="relative min-w-0 animate-fade-up animation-delay-150 lg:ml-[6%]">
          <div className="relative h-full min-h-[460px] overflow-hidden bg-sage-300">
            <HeroArt className="absolute inset-0 h-full w-full object-cover" label="Illustration of a patient on a video call with a doctor beneath a golden sun" />
            <p className="absolute bottom-5 left-5 flex items-center gap-4 text-[10px] text-white">
              <span className="h-px w-11 bg-white/60" aria-hidden="true" /> Care that comes to you
            </p>
          </div>
          <div className="absolute -bottom-6 -left-4 w-40 overflow-hidden border-4 border-[#f5f4ef] shadow-xl sm:w-52 lg:-left-10">
            <div className="relative aspect-[4/5]">
              <Image
                src="/images/doctor.png"
                alt="Dr. Kushal Kharel, Consultant Psychiatrist in Kathmandu, Nepal"
                fill
                priority
                sizes="(max-width: 640px) 160px, 208px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-6 overflow-hidden whitespace-nowrap bg-sage-800 px-4 py-4 text-[11px] uppercase tracking-[.17em] text-[#e6ede7] sm:gap-9 sm:text-xs" aria-hidden="true">
        {["In-person in Kalanki", "Online across Nepal", "Nepalis abroad", "Confidential care", "Evidence-based"].map((m, i) => (
          <span key={m} className={`flex items-center gap-6 sm:gap-9 ${i > 2 ? "hidden md:flex" : ""}`}>
            {i > 0 && <i className="not-italic text-[#e9b477]">✦</i>}
            {m}
          </span>
        ))}
      </div>
    </section>
  );
}
