import Image from "./OptimizedImage";
import Link from "next/link";
import { Brain, Globe, HeartHandshake, Lock } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-14 md:py-16 bg-[#f5f4ef]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* LEFT IMAGE */}

          <div className="relative mx-auto w-full min-w-0 max-w-md lg:max-w-none lg:sticky lg:top-28">

            <div className="overflow-hidden shadow-xl">

              <Image
                src="/images/speaker.jpg"
                alt="Dr. Kushal Kharel - Consultant Psychiatrist in Nepal"
                width={700}
                height={900}
                quality={85}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full object-cover"
              />

            </div>

            <div className="absolute -bottom-6 -right-2 lg:-right-6 bg-sage-800 text-white px-6 py-4 shadow-xl">

              <h3 className="text-3xl font-bold">
                Consultant
              </h3>

              <p className="text-lg">
                Psychiatrist
              </p>

            </div>

          </div>

          {/* RIGHT CONTENT */}

          <div className="min-w-0">

            <span className="text-sage-700 font-semibold uppercase tracking-[4px]">
              About Dr. Kushal Kharel
            </span>

            <h2 className="mt-4 text-4xl lg:text-5xl text-gray-900 leading-tight">
              Compassionate Psychiatry.
              <br />
              Evidence-Based Care.
              <br />
              Personalized Treatment.
            </h2>

            <p className="mt-8 text-lg text-gray-600 leading-8">
              Dr. Kushal Kharel is a Consultant Psychiatrist based in Kalanki,
              Kathmandu.
              He provides evidence-based psychiatric assessment, diagnosis and
              treatment for children, adolescents, adults and older adults,
              including care for anxiety disorders, depression, mood
              disorders, psychotic disorders and substance addiction.
            </p>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              In addition to in-person consultations at the Kalanki clinic, Dr.
              Kharel offers telepsychiatry and online psychiatric consultation
              for patients across Nepal and Nepalese communities abroad. Dr. Kushal
              does online video consultation for mental health conditions, so
              patients can be seen from home in Nepal or from overseas. As an
              NMC-licensed Specialist Psychiatrist, he is committed to
              confidential, compassionate and evidence-based mental health
              care. Book an appointment online or call to schedule a visit.
            </p>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              Consultations focus on explaining diagnosis and medication
              options in plain language, taking the time needed rather than
              rushing through appointments, and providing a judgment-free
              space for whatever you need to discuss. Messages sent directly
              by WhatsApp are answered personally.
            </p>

            {/* Buttons */}

            <div className="flex flex-wrap gap-5 mt-10">

              <a
                href="tel:+9779861800547"
                className="bg-sage-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-sage-800 transition"
              >
                Book Appointment
              </a>

              <Link
                href="/#services"
                className="border-2 border-sage-700 text-sage-700 px-8 py-4 rounded-xl font-semibold hover:bg-sage-700 hover:text-white transition"
              >
                View Services
              </Link>

            </div>

            {/* Features */}

            <div className="grid grid-cols-2 gap-6 mt-12">

              <div className="bg-gray-50 rounded-2xl p-6 shadow">

                <h3 className="font-bold text-sage-700 text-xl">
                  <Brain size={20} className="mr-2 inline align-[-3px]" aria-hidden="true" />Evidence-Based Psychiatry
                </h3>

                <p className="mt-3 text-gray-600">
                  Modern psychiatric care following international treatment
                  guidelines.
                </p>

              </div>

              <div className="bg-gray-50 rounded-2xl p-6 shadow">

                <h3 className="font-bold text-sage-700 text-xl">
                  <HeartHandshake size={20} className="mr-2 inline align-[-3px]" aria-hidden="true" />Personalized Care
                </h3>

                <p className="mt-3 text-gray-600">
                  Every patient receives an individualized treatment plan.
                </p>

              </div>

              <div className="bg-gray-50 rounded-2xl p-6 shadow">

                <h3 className="font-bold text-sage-700 text-xl">
                  <Globe size={20} className="mr-2 inline align-[-3px]" aria-hidden="true" />Online Consultation
                </h3>

                <p className="mt-3 text-gray-600">
                  Secure telepsychiatry consultations throughout Nepal and
                  internationally.
                </p>

              </div>

              <div className="bg-gray-50 rounded-2xl p-6 shadow">

                <h3 className="font-bold text-sage-700 text-xl">
                  <Lock size={20} className="mr-2 inline align-[-3px]" aria-hidden="true" />Confidential Care
                </h3>

                <p className="mt-3 text-gray-600">
                  Your privacy, dignity and trust remain our highest priority.
                </p>

              </div>

            </div>

            {/* Qualifications */}

            <div className="mt-12 bg-sage-50 rounded-2xl p-8">

              <h3 className="text-2xl font-bold text-sage-900 mb-5">
                Qualifications & Expertise
              </h3>

              <div className="grid grid-cols-2 gap-4 text-gray-700">

                <p>✓ MD Psychiatry</p>
                <p>✓ Consultant Psychiatrist</p>
                <p>✓ Addiction Medicine</p>
                <p>✓ Telepsychiatry</p>
                <p>✓ CBT-Trained</p>
                <p>✓ Crisis Management</p>
                <p>✓ Evidence-Based Practice</p>

              </div>

            </div>

            {/* Credentials table */}

            <div className="mt-8 overflow-x-auto rounded-2xl border border-gray-200">
              <table className="w-full min-w-[480px] text-left text-sm">
                <caption className="sr-only">Dr. Kushal Kharel&apos;s credentials at a glance</caption>
                <thead className="bg-gray-50 text-gray-700">
                  <tr>
                    <th className="px-5 py-3 font-bold">Credential</th>
                    <th className="px-5 py-3 font-bold">Institution</th>
                    <th className="px-5 py-3 font-bold">Year</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-t border-gray-200">
                    <td className="px-5 py-3 font-semibold">Nepal Medical Council registration (No. 27199)</td>
                    <td className="px-5 py-3">Nepal Medical Council</td>
                    <td className="px-5 py-3">Active</td>
                  </tr>
                  <tr className="border-t border-gray-200 bg-gray-50">
                    <td className="px-5 py-3 font-semibold">MD Psychiatry</td>
                    <td className="px-5 py-3">KIST Medical College Teaching Hospital</td>
                    <td className="px-5 py-3">Completed</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-5 py-3 font-semibold">Permanent (Life) Member</td>
                    <td className="px-5 py-3">Nepal Medical Association</td>
                    <td className="px-5 py-3">Active</td>
                  </tr>
                  <tr className="border-t border-gray-200 bg-gray-50">
                    <td className="px-5 py-3 font-semibold">Life Member</td>
                    <td className="px-5 py-3">Psychiatrists&apos; Association of Nepal (PAN)</td>
                    <td className="px-5 py-3">Active</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-5 py-3 font-semibold">Therapist</td>
                    <td className="px-5 py-3">TherapyMantra (online mental-health platform)</td>
                    <td className="px-5 py-3">Active</td>
                  </tr>
                  <tr className="border-t border-gray-200 bg-gray-50">
                    <td className="px-5 py-3 font-semibold">Free telepsychiatry service</td>
                    <td className="px-5 py-3">Kathmandu Mental Health Clinic</td>
                    <td className="px-5 py-3">Ongoing</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-5 py-3 font-semibold">Psychiatric clinic, Kalanki-14</td>
                    <td className="px-5 py-3">Private practice</td>
                    <td className="px-5 py-3">Ongoing</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
