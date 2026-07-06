import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT IMAGE */}

          <div className="relative">

            <div className="rounded-3xl overflow-hidden shadow-2xl">

              <Image
                src="/images/doctor.png"
                alt="Dr. Kushal Kharel - Consultant Psychiatrist in Nepal"
                width={700}
                height={900}
                priority
                quality={85}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full object-cover"
              />

            </div>

            <div className="absolute -bottom-8 -right-8 bg-blue-700 text-white rounded-3xl px-8 py-6 shadow-xl">

              <h3 className="text-3xl font-bold">
                Consultant
              </h3>

              <p className="text-lg">
                Psychiatrist
              </p>

            </div>

          </div>

          {/* RIGHT CONTENT */}

          <div>

            <span className="text-blue-700 font-semibold uppercase tracking-[4px]">
              About Dr. Kushal Kharel
            </span>

            <h2 className="mt-5 text-5xl font-bold text-gray-900 leading-tight">
              Compassionate Psychiatry.
              <br />
              Evidence-Based Care.
              <br />
              Personalized Treatment.
            </h2>

            <p className="mt-8 text-lg text-gray-600 leading-9">
              Dr. Kushal Kharel is a Consultant Psychiatrist dedicated to
              providing high-quality, evidence-based mental healthcare for
              children, adolescents, adults and older adults. His approach
              combines scientific knowledge, clinical experience and
              compassionate care to help patients achieve long-term mental
              wellness.
            </p>

            <p className="mt-6 text-lg text-gray-600 leading-9">
              He provides comprehensive psychiatric assessment, accurate
              diagnosis, medication management, psychotherapy, addiction
              treatment and telepsychiatry consultations. Every treatment plan
              is individualized according to the patient&apos;s symptoms, medical
              condition, family circumstances and personal goals.
            </p>

            {/* Buttons */}

            <div className="flex flex-wrap gap-5 mt-10">

              <a
                href="tel:+9779861800547"
                className="bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-800 transition"
              >
                Book Appointment
              </a>

              <Link
                href="/#services"
                className="border-2 border-blue-700 text-blue-700 px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 hover:text-white transition"
              >
                View Services
              </Link>

            </div>

            {/* Features */}

            <div className="grid grid-cols-2 gap-6 mt-12">

              <div className="bg-gray-50 rounded-2xl p-6 shadow">

                <h3 className="font-bold text-blue-700 text-xl">
                  🧠 Evidence-Based Psychiatry
                </h3>

                <p className="mt-3 text-gray-600">
                  Modern psychiatric care following international treatment
                  guidelines.
                </p>

              </div>

              <div className="bg-gray-50 rounded-2xl p-6 shadow">

                <h3 className="font-bold text-blue-700 text-xl">
                  ❤️ Personalized Care
                </h3>

                <p className="mt-3 text-gray-600">
                  Every patient receives an individualized treatment plan.
                </p>

              </div>

              <div className="bg-gray-50 rounded-2xl p-6 shadow">

                <h3 className="font-bold text-blue-700 text-xl">
                  🌍 Online Consultation
                </h3>

                <p className="mt-3 text-gray-600">
                  Secure telepsychiatry consultations throughout Nepal and
                  internationally.
                </p>

              </div>

              <div className="bg-gray-50 rounded-2xl p-6 shadow">

                <h3 className="font-bold text-blue-700 text-xl">
                  🔒 Confidential Care
                </h3>

                <p className="mt-3 text-gray-600">
                  Your privacy, dignity and trust remain our highest priority.
                </p>

              </div>

            </div>

            {/* Qualifications */}

            <div className="mt-12 bg-blue-50 rounded-2xl p-8">

              <h3 className="text-2xl font-bold text-blue-900 mb-5">
                Qualifications & Expertise
              </h3>

              <div className="grid grid-cols-2 gap-4 text-gray-700">

                <p>✓ MD Psychiatry</p>
                <p>✓ Consultant Psychiatrist</p>
                <p>✓ Neuropsychiatry</p>
                <p>✓ Addiction Medicine</p>
                <p>✓ Telepsychiatry</p>
                <p>✓ Evidence-Based Practice</p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
