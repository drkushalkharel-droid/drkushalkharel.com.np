import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Dr. Kushal Kharel",
  description:
    "Book a psychiatric consultation with Dr. Kushal Kharel in Kathmandu or ask about online consultation in Nepal.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-stone-50 px-6 pb-16 pt-32 text-stone-900">
      <section className="mx-auto max-w-3xl rounded-xl bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[3px] text-sage-700">Appointments</p>
        <h1 className="mt-4 text-4xl font-bold">Contact Dr. Kushal Kharel</h1>
        <p className="mt-5 text-lg leading-8 text-stone-600">
          For a psychiatric consultation in Kathmandu or to ask about online consultation, contact the clinic. If
          there is an immediate safety risk or medical emergency, please go to the nearest emergency department
          rather than waiting for an appointment.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a className="rounded-lg bg-sage-700 px-6 py-3 font-semibold text-white" href="tel:+9779861800547">
            Call +977 9861800547
          </a>
          <a
            className="rounded-lg border border-green-600 px-6 py-3 font-semibold text-green-700"
            href="https://wa.me/9779861800547"
          >
            WhatsApp
          </a>
        </div>

        <div className="mt-10 grid gap-6 border-t border-stone-200 pt-8 sm:grid-cols-[1fr_auto]">
          <div>
            <h2 className="flex items-center gap-2 text-lg font-bold text-stone-950">
              <MapPin size={20} className="text-sage-700" aria-hidden="true" />
              Clinic address
            </h2>
            <p className="mt-2 leading-7 text-stone-600">
              Kalanki-14, Near Malpot Road, near Kalanki Bhatbhateni Supermarket, Kathmandu 44600, Nepal
            </p>
            <p className="mt-3 flex items-center gap-2 text-stone-600">
              <Phone size={16} className="text-sage-700" aria-hidden="true" />
              Sunday–Friday 8:00 AM–10:00 PM, Saturday 10:00 AM–4:00 PM
            </p>
          </div>
          <div className="w-full max-w-55 overflow-hidden rounded-lg border border-stone-200 sm:w-55">
            <Image
              src="/images/opd-consultation-room.jpg"
              alt="Consultation room at Dr. Kushal Kharel's clinic, Kalanki-14, Kathmandu"
              width={960}
              height={1280}
              quality={80}
              sizes="220px"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
