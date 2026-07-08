import Image from "next/image";
import { CalendarCheck, MessageCircle, Phone, ShieldCheck, Stethoscope } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,#155e75,transparent_34%),linear-gradient(135deg,#020617_0%,#0f3a73_52%,#0369a1_100%)] text-white">

      <div className="medical-grid absolute inset-0 opacity-30" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white/10 to-transparent" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-36 pb-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <div className="animate-fade-up">

            <span className="inline-flex items-center gap-2 bg-cyan-400/15 border border-cyan-200/30 px-5 py-2 rounded-full text-sm font-semibold text-cyan-50">
              <Stethoscope size={16} aria-hidden="true" />
              Consultant Psychiatrist in Kathmandu, Nepal
            </span>

            <h1 className="text-5xl lg:text-7xl font-extrabold mt-8 leading-tight">

              Dr. Kushal Kharel

            </h1>

            <h2 className="text-2xl lg:text-4xl mt-6 font-light text-blue-100">

              Evidence-Based Psychiatry,
              <br />
              Neuropsychiatry &
              <br />
              De-addiction Care

            </h2>

            <p id="hero-quick-answer" className="mt-8 text-lg leading-9 text-blue-100 max-w-2xl">

              For people searching for a trusted, top-rated psychiatrist in
              Nepal or Kathmandu, Dr. Kharel provides confidential assessment,
              psychotherapy, medication management, addiction treatment and
              secure online consultation.

            </p>

            {/* Buttons */}

            <div className="flex flex-wrap gap-5 mt-10">

              <a
                href="tel:+9779861800547"
                className="inline-flex items-center gap-3 bg-white text-blue-900 px-8 py-4 rounded-xl font-bold shadow-2xl shadow-cyan-950/30 hover:scale-105 transition call-pulse"
              >
                <Phone size={22} aria-hidden="true" />
                Call Now: +977 9861800547
              </a>

              <a
                href="https://wa.me/9779861800547"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border-2 border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-900 transition"
              >
                <MessageCircle size={22} aria-hidden="true" />
                WhatsApp
              </a>

            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-sm font-medium text-blue-50">
              {["In-person in Kathmandu", "Online consultation", "Confidential care"].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2"
                >
                  <ShieldCheck size={15} aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>

            {/* Trust badges */}

            <div className="grid grid-cols-2 gap-6 mt-12">

              <div className="bg-white/10 backdrop-blur rounded-2xl p-5 hover-lift">

                <h3 className="text-3xl font-bold">
                  MD
                </h3>

                <p className="text-blue-100">
                  Psychiatry
                </p>

              </div>

              <div className="bg-white/10 backdrop-blur rounded-2xl p-5 hover-lift">

                <h3 className="text-3xl font-bold">
                  Online
                </h3>

                <p className="text-blue-100">
                  Consultation
                </p>

              </div>

              <div className="bg-white/10 backdrop-blur rounded-2xl p-5 hover-lift">

                <h3 className="text-3xl font-bold">
                  Evidence
                </h3>

                <p className="text-blue-100">
                  Based Care
                </p>

              </div>

              <div className="bg-white/10 backdrop-blur rounded-2xl p-5 hover-lift">

                <h3 className="text-3xl font-bold">
                  Confidential
                </h3>

                <p className="text-blue-100">
                  Ethical Practice
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative flex justify-center animate-fade-up animation-delay-150">

            <div className="absolute -left-3 top-14 hidden rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur lg:block float-card">
              <p className="text-sm text-blue-100">Search intent</p>
              <p className="mt-1 text-xl font-bold">Psychiatrist in Nepal</p>
            </div>

            <div className="relative w-[430px] max-w-full h-[560px] rounded-[40px] overflow-hidden border-8 border-white/20 shadow-2xl image-shimmer">

              <Image
                src="/images/doctor.png"
                alt="Dr Kushal Kharel"
                fill
                priority
                className="object-cover"
              />

            </div>

            {/* Floating Card */}

            <div className="absolute bottom-8 left-0 bg-white rounded-2xl shadow-xl p-6 text-gray-900 float-card animation-delay-300">

              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-800">
                  <CalendarCheck size={24} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-2xl font-bold text-blue-900">

                    Call to Book

                  </h3>

                  <p className="mt-1">

                    In-person & Online Consultation

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
