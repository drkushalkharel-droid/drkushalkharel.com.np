import Image from "next/image";
import { Award, ChevronDown, ExternalLink, FileBadge, Mic2, Newspaper, Phone } from "lucide-react";

const certificates = [
  "/certificates/cert1.JPG",
  "/certificates/cert2.JPG",
  "/certificates/cert3.JPG",
  "/certificates/cert4.JPG",
  "/certificates/cert5.JPG",
  "/certificates/cert6.JPG",
  "/certificates/cert9.JPG",
];

export default function Awards() {
  return (
    <section id="awards" className="bg-stone-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center animate-fade-up">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[3px] text-clay-200">
            <Award size={18} aria-hidden="true" />
            Awards & Professional Presence
          </span>
          <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
            Recognition, teaching and continued professional development
          </h2>
          <p className="mt-6 text-lg leading-8 text-stone-300">
            Clinical trust is built through patient care, academic engagement,
            ongoing learning and professional contribution to mental health.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <figure className="overflow-hidden rounded-lg border border-white/10 bg-white/5 shadow-2xl hover-lift">
            <div className="relative aspect-[4/3] bg-stone-800">
              <Image
                src="/images/award-1600.jpg"
                alt="Dr. Kushal Kharel receiving professional recognition"
                fill
                priority={false}
                quality={85}
                loading="lazy"
                unoptimized={true}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <figcaption className="p-6">
              <div className="flex items-center gap-3 text-clay-200">
                <Award size={22} aria-hidden="true" />
                <h3 className="text-2xl font-bold text-white">
                  Award & Recognition
                </h3>
              </div>
              <p className="mt-3 leading-7 text-stone-300">
                Professional recognition reflecting commitment to psychiatry,
                patient care and mental health service.
              </p>
            </figcaption>
          </figure>

          <figure className="overflow-hidden rounded-lg border border-white/10 bg-white/5 shadow-2xl hover-lift">
            <div className="relative aspect-[4/3] bg-stone-800">
              <Image
                src="/images/speaker-1600.jpg"
                alt="Dr. Kushal Kharel speaking at a professional program"
                fill
                priority={false}
                quality={85}
                loading="lazy"
                unoptimized={true}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <figcaption className="p-6">
              <div className="flex items-center gap-3 text-clay-200">
                <Mic2 size={22} aria-hidden="true" />
                <h3 className="text-2xl font-bold text-white">
                  Speaker & Educator
                </h3>
              </div>
              <p className="mt-3 leading-7 text-stone-300">
                Public education and professional speaking on psychiatry,
                addiction, neuropsychiatry and mental wellbeing.
              </p>
            </figcaption>
          </figure>
        </div>

        <div className="mt-6 rounded-lg border border-white/10 bg-white/5 p-6 md:p-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
            <div className="flex items-start gap-4">
              <Newspaper size={28} className="mt-1 shrink-0 text-clay-200" aria-hidden="true" />
              <div>
                <h3 className="text-xl font-bold text-white">In the Media</h3>
                <p className="mt-2 leading-7 text-stone-300">
                  Dr. Kushal Kharel is a contributing writer for Nagarik News, one of
                  Nepal&apos;s leading national news outlets.
                </p>
              </div>
            </div>
            <a
              href="https://nagariknews.nagariknetwork.com/author/dr.kushal-kharel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-white/20 px-5 py-3 font-bold text-white transition hover:border-clay-200 hover:text-clay-200"
            >
              View author profile
              <ExternalLink size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="mt-6 rounded-lg border border-white/10 bg-white/5 p-6 md:p-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[3px] text-clay-200">
                <FileBadge size={18} aria-hidden="true" />
                Certificates
              </span>
              <h3 className="mt-4 text-3xl font-bold">
                Training, participation and professional certificates
              </h3>
            </div>
            <a
              href="tel:+9779861800547"
              className="inline-flex items-center justify-center gap-3 rounded-lg bg-white px-6 py-3 font-bold text-stone-950 transition hover:bg-clay-100"
            >
              <Phone size={20} aria-hidden="true" />
              Call for Appointment
            </a>
          </div>

          <details className="group mt-8">
            <summary className="flex w-fit cursor-pointer list-none items-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-clay-200 hover:text-clay-200">
              View certificates
              <ChevronDown size={18} className="transition group-open:rotate-180" aria-hidden="true" />
            </summary>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {certificates.map((certificate, index) => (
                <div
                  key={certificate}
                  className="group/cert overflow-hidden rounded-lg border border-white/10 bg-stone-800 shadow-lg"
                >
                  <div className="relative aspect-[1.42/1]">
                    <Image
                      src={certificate}
                      alt={`Professional certificate ${index + 1} of Dr. Kushal Kharel`}
                      fill
                      quality={85}
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition duration-300 group-hover/cert:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
