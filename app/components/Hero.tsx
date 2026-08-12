import Image from "next/image";
import Link from "next/link";
import { CalendarCheck, Phone, ShieldCheck, Star, Stethoscope } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sage-50 via-white to-white">

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-36 pb-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <div className="min-w-0 animate-fade-up">

            <span className="inline-flex items-center gap-2 bg-sage-100 border border-sage-200 px-5 py-2 rounded-full text-sm font-semibold text-sage-800">
              <Stethoscope size={16} aria-hidden="true" />
              Consultant Psychiatrist in Kathmandu, Nepal
            </span>

            <h1 className="text-5xl lg:text-7xl font-extrabold mt-8 leading-tight text-stone-950">

              Dr. Kushal Kharel

            </h1>

            <h2 className="text-2xl lg:text-4xl mt-6 font-light text-sage-700">

              Evidence-Based Psychiatry,
              <br />
              Neuropsychiatry &
              <br />
              De-addiction Care

            </h2>

            <p id="hero-quick-answer" className="mt-8 text-lg leading-9 text-stone-600 max-w-2xl">

              Searching for the best psychiatrist near you in Kathmandu? Dr.
              Kharel sees patients in person at Kalanki and online across
              Nepal, offering confidential assessment, psychotherapy,
              medication management, addiction treatment and secure online
              consultation.

            </p>

            {/* Buttons */}

            <div className="flex flex-wrap gap-5 mt-10">

              <Link
                href="/appointment"
                data-conversion="appointment"
                className="inline-flex items-center gap-3 bg-sage-700 text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-sage-900/15 hover:scale-105 hover:bg-sage-800 transition"
              >
                <CalendarCheck size={22} aria-hidden="true" />
                Book an Appointment
              </Link>

              <a
                href="tel:+9779861800547"
                className="inline-flex items-center gap-3 border-2 border-sage-700 text-sage-700 px-8 py-4 rounded-xl font-bold hover:bg-sage-700 hover:text-white transition"
              >
                <Phone size={22} aria-hidden="true" />
                Call Now: +977 9861800547
              </a>

            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-sm font-medium text-sage-800">
              {["In-person in Kalanki, Kathmandu", "Online consultation", "Confidential care"].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-sage-200 bg-white px-4 py-2 shadow-sm"
                >
                  <ShieldCheck size={15} aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>

            {/* Trust badges */}

            <div className="grid grid-cols-2 gap-6 mt-12">

              <div className="bg-white border border-sage-100 rounded-2xl p-5 shadow-sm hover-lift">

                <h3 className="text-3xl font-bold text-sage-900">
                  MD
                </h3>

                <p className="text-stone-600">
                  Psychiatry
                </p>

              </div>

              <div className="bg-white border border-sage-100 rounded-2xl p-5 shadow-sm hover-lift">

                <h3 className="text-3xl font-bold text-sage-900">
                  Online
                </h3>

                <p className="text-stone-600">
                  Consultation
                </p>

              </div>

              <div className="bg-white border border-sage-100 rounded-2xl p-5 shadow-sm hover-lift">

                <h3 className="text-3xl font-bold text-sage-900">
                  Evidence
                </h3>

                <p className="text-stone-600">
                  Based Care
                </p>

              </div>

              <div className="bg-white border border-sage-100 rounded-2xl p-5 shadow-sm hover-lift">

                <h3 className="text-3xl font-bold text-sage-900">
                  Confidential
                </h3>

                <p className="text-stone-600">
                  Ethical Practice
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative min-w-0 flex justify-center animate-fade-up animation-delay-150">

            <div className="absolute -left-3 top-14 z-20 hidden rounded-2xl border border-sage-200 bg-white p-5 shadow-lg lg:block float-card">
              <p className="text-sm text-stone-500">Search intent</p>
              <p className="mt-1 text-xl font-bold text-stone-950">Best Psychiatrist Near Me</p>
            </div>

            <div className="relative w-full max-w-[430px] h-[420px] sm:h-[560px] rounded-[40px] overflow-hidden border-8 border-white shadow-2xl image-shimmer">

              <Image
                src="/images/doctor.png"
                alt="Dr. Kushal Kharel, Consultant Psychiatrist in Kathmandu, Nepal"
                fill
                priority
                sizes="(max-width: 1023px) 90vw, 430px"
                className="object-cover"
              />

            </div>

            {/* Floating Card */}

            <div className="absolute bottom-8 left-0 bg-white rounded-2xl shadow-xl p-6 text-gray-900 float-card animation-delay-300">

              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                  <Star size={24} fill="currentColor" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-2xl font-bold text-sage-900">

                    5.0 Rating

                  </h3>

                  <p className="mt-1">

                    From 81 Google Reviews

                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
