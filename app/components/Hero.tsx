import Image from "./OptimizedImage";
import Link from "next/link";
import { ArrowUpRight, Phone, Video } from "lucide-react";

const facts = [
  { n: "MD", l: "Psychiatry" },
  { n: "Online", l: "Video consultation" },
  { n: "#27199", l: "NMC registered" },
  { n: "5", l: "Languages" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f5f4ef]">
      <div className="mx-auto grid max-w-[1240px] items-center gap-12 px-6 pb-16 pt-28 lg:grid-cols-[1.05fr_.95fr] lg:gap-16 lg:px-8 lg:pb-20 lg:pt-32">
        {/* LEFT */}
        <div className="min-w-0 motion-safe:animate-fade-up">
          <p className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-[.1em] text-sage-800">
            <span className="h-[7px] w-[7px] rounded-full bg-clay-500" aria-hidden="true" />
            Consultant Psychiatrist in Kathmandu, Nepal
          </p>

          <h1 className="my-6 text-[clamp(2.4rem,4.6vw,4.1rem)] leading-[1.02] tracking-[-.04em] text-[#1f2927]">
            <span className="block">Psychiatrist in Kathmandu, Nepal:</span>{" "}
            <em className="block">Dr. Kushal Kharel</em>
          </h1>

          <h2 className="font-sans text-lg font-medium leading-snug text-sage-700">
            Evidence-based psychiatry, addiction treatment and online consultation
          </h2>

          <p id="hero-quick-answer" className="mt-4 max-w-[480px] text-base leading-7 text-[#5a635e]">
            Searching for the best psychiatrist near you in Kathmandu? Dr. Kharel sees patients in person at Kalanki and
            online across Nepal, offering confidential assessment, psychotherapy, medication management, addiction
            treatment and secure online consultation.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Link
              href="/book/"
              data-conversion="appointment"
              className="inline-flex items-center gap-3 bg-clay-700 px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-clay-800"
            >
              Book an appointment <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
            <a href="tel:+9779861800547" className="inline-flex items-center gap-2 border-b border-[#aeb6b0] pb-1 text-sm text-sage-800">
              <Phone size={15} aria-hidden="true" /> Call +977 9861800547
            </a>
          </div>

          <dl className="mt-10 grid max-w-[480px] grid-cols-2 sm:grid-cols-4 gap-px bg-[#d6d8d2]">
            {facts.map((f) => (
              <div key={f.l} className="bg-[#f5f4ef] py-4 pr-4">
                <dt className="font-serif text-2xl text-clay-700">{f.n}</dt>
                <dd className="mt-1 text-xs text-[#5a635e]">{f.l}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* RIGHT */}
        <div className="relative mx-auto w-full max-w-[460px] min-w-0 motion-safe:animate-fade-up animation-delay-150">
          <div className="relative aspect-[4/5] overflow-hidden bg-sage-300">
            <div className="absolute right-[10%] top-[7%] h-[22%] w-[28%] rounded-full bg-[#eabf7d]" aria-hidden="true" />
            <div className="absolute inset-x-[12%] bottom-0 top-[18%] overflow-hidden rounded-t-full bg-sage-800">
              <Image
                src="/images/dr-kushal-headshot.jpg"
                alt="Dr. Kushal Kharel, Consultant Psychiatrist in Kathmandu, Nepal"
                fill
                priority
                sizes="(max-width: 640px) 80vw, 360px"
                className="object-cover object-top"
              />
            </div>
            <div className="absolute bottom-0 left-0 h-[34%] w-[9%] rounded-tr-full bg-clay-500" aria-hidden="true" />
            <div className="absolute bottom-[8%] right-0 h-[30%] w-[7%] rounded-tl-full bg-sage-500" aria-hidden="true" />
          </div>
          <div className="absolute -bottom-5 left-4 flex items-center gap-3 bg-white px-4 py-3 shadow-lg sm:-left-6">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sage-100 text-sage-800"><Video size={18} aria-hidden="true" /></span>
            <span className="text-xs leading-tight"><strong className="block text-sm text-[#1f2927]">Online video consultation</strong><span className="text-[#5a635e]">Nepal and abroad</span></span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-6 overflow-hidden whitespace-nowrap bg-sage-800 px-4 py-4 text-xs uppercase tracking-[.14em] text-[#e6ede7] sm:gap-9 sm:text-[13px]" aria-hidden="true">
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
