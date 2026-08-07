import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CalendarCheck, Clock3, MapPin, MessageCircle, Phone, ShieldCheck, Video } from "lucide-react";

export const metadata: Metadata = {
  title: "Book a Psychiatric Consultation",
  description:
    "Book an in-person psychiatric consultation in Kathmandu or ask about online consultation with Dr. Kushal Kharel.",
  alternates: { canonical: "/appointment" },
};

const phone = "+977 9861800547";
const whatsapp = "https://wa.me/9779861800547";

export default function AppointmentPage() {
  return (
    <main className="min-h-screen bg-stone-50 pb-20 pt-28 text-stone-900">
      <section className="bg-sage-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[3px] text-clay-200">Appointments</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            Start with a confidential conversation
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-sage-100">
            Call or send a WhatsApp message to request an in-person consultation in Kathmandu or discuss whether online consultation is appropriate.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href="tel:+9779861800547" className="inline-flex items-center gap-3 rounded-lg bg-white px-6 py-4 font-bold text-sage-950 transition hover:bg-clay-100">
              <Phone size={20} aria-hidden="true" />
              Call {phone}
            </a>
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-lg border border-green-300 bg-green-600 px-6 py-4 font-bold text-white transition hover:bg-green-500">
              <MessageCircle size={20} aria-hidden="true" />
              Message on WhatsApp
            </a>
          </div>
          <p className="mt-5 text-sm text-sage-200">Please do not share sensitive personal or medical details in a first message.</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pt-14 lg:px-8">
        <div className="overflow-hidden rounded-lg border border-stone-200 shadow-sm">
          <Image
            src="/images/diagrams/treatment-pathway.webp"
            alt="Diagram of the treatment pathway: contact, assessment, diagnosis, treatment plan, and follow-up"
            width={1408}
            height={768}
            className="w-full"
          />
        </div>
        <p className="mt-3 text-center text-sm text-stone-500">How a consultation typically proceeds, from first contact through to ongoing follow-up.</p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-7 px-6 py-14 lg:grid-cols-3 lg:px-8">
        <article className="rounded-xl bg-white p-7 shadow-sm">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sage-100 text-sage-800"><CalendarCheck size={23} aria-hidden="true" /></span>
          <h2 className="mt-5 text-2xl font-bold">In-person consultation</h2>
          <p className="mt-3 leading-7 text-stone-600">Meet at the clinic in Kalanki, Kathmandu for a comprehensive psychiatric assessment and personalised care plan.</p>
        </article>
        <article className="rounded-xl bg-white p-7 shadow-sm">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sage-100 text-sage-800"><Video size={23} aria-hidden="true" /></span>
          <h2 className="mt-5 text-2xl font-bold">Online consultation</h2>
          <p className="mt-3 leading-7 text-stone-600">For suitable situations, the clinic can discuss secure online consultation from elsewhere in Nepal or abroad.</p>
        </article>
        <article className="rounded-xl bg-white p-7 shadow-sm">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sage-100 text-sage-800"><ShieldCheck size={23} aria-hidden="true" /></span>
          <h2 className="mt-5 text-2xl font-bold">Confidential care</h2>
          <p className="mt-3 leading-7 text-stone-600">Your concern is handled respectfully. The clinic will explain the appropriate next step and what to expect.</p>
        </article>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[1.15fr_.85fr] lg:px-8">
        <article className="rounded-xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold">What to do next</h2>
          <ol className="mt-7 space-y-5">
            {[
              ["Contact the clinic", "Call or send a brief WhatsApp message to request an appointment."],
              ["Confirm the right consultation type", "The clinic will help determine whether in-person or online care is suitable."],
              ["Receive appointment details", "Time, location or online-joining information and any preparation details are confirmed before the consultation."],
            ].map(([title, text], index) => (
              <li key={title} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sage-700 font-bold text-white">{index + 1}</span>
                <div><h3 className="font-bold text-stone-950">{title}</h3><p className="mt-1 leading-7 text-stone-600">{text}</p></div>
              </li>
            ))}
          </ol>
        </article>
        <aside className="rounded-xl border border-sage-100 bg-sage-50 p-8">
          <h2 className="text-2xl font-bold text-sage-950">Clinic details</h2>
          <div className="mt-6 space-y-5 text-stone-700">
            <p className="flex gap-3"><MapPin className="mt-1 shrink-0 text-sage-700" size={20} aria-hidden="true" /><span>Kalanki-14, near Malpot Road and Kalanki Bhatbhateni Supermarket, Kathmandu</span></p>
            <p className="flex gap-3"><Clock3 className="mt-1 shrink-0 text-sage-700" size={20} aria-hidden="true" /><span>Monday–Friday: 10:00–18:00<br />Saturday: 10:00–16:00</span></p>
          </div>
          <Link href="/online-psychiatrist-nepal" className="mt-8 inline-block font-semibold text-sage-700 underline">Learn about online consultation</Link>
        </aside>
      </section>

      <section className="mx-auto mt-10 max-w-6xl px-6 lg:px-8">
        <div className="rounded-xl border-l-4 border-red-600 bg-red-50 p-6 text-stone-800">
          <h2 className="font-bold">Need urgent help?</h2>
          <p className="mt-2 leading-7">If there is immediate risk of self-harm or harm to someone else, overdose, severe confusion, severe withdrawal, or another medical emergency, go to the nearest emergency department. Do not wait for an appointment or online response.</p>
        </div>
      </section>
    </main>
  );
}
