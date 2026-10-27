import type { Metadata } from "next";
import Link from "next/link";
import { CalendarCheck, Clock3, Globe2, Languages, MapPin, MessageCircle, Phone, ShieldCheck, Video } from "lucide-react";
import Image from "../components/OptimizedImage";
import BookingForm from "../components/BookingForm";
import { metaFor } from "../lib/seoText";

const meta = metaFor("/book/", {
  title: "Book an Appointment Online",
  description: "Choose in-person or online video, pick a day and time, and send your request to Dr. Kushal Kharel on WhatsApp. Confirmation within the day.",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: "/book/" },
};

const phone = "+977 9861800547";
const whatsapp = "https://wa.me/9779861800547";

const reasons = [
  { Icon: ShieldCheck, title: "Private and confidential", text: "Your details are used only to arrange your appointment." },
  { Icon: Video, title: "Online from anywhere", text: "Secure video sessions for people across Nepal and abroad." },
  { Icon: Clock3, title: "Evening and weekend slots", text: "Sunday to Friday until 10 PM, and Saturday daytime." },
  { Icon: Languages, title: "Your language", text: "Consultations in Nepali, English or Hindi." },
  { Icon: Globe2, title: "Time-zone aware", text: "All times are shown in Nepal time so there is no confusion." },
  { Icon: CalendarCheck, title: "Confirmed by the clinic", text: "You send a request; the clinic confirms the final time." },
];

const steps = [
  { n: 1, title: "Choose how to meet", text: "Clinic in Kalanki or an online video session.", image: "/images/diagrams/treatment-pathway.webp", alt: "Diagram of the treatment pathway from contact to follow-up" },
  { n: 2, title: "Pick a day and time", text: "Select from the next two weeks of available times.", image: "/images/community/world-mental-health-day-2025.jpg", alt: "Dr. Kushal Kharel at a World Mental Health Day event" },
  { n: 3, title: "Send on WhatsApp", text: "Your request opens ready-written. The clinic replies to confirm.", image: "/images/community/school-mental-health-awareness.jpg", alt: "Dr. Kushal Kharel speaking at a school mental health awareness programme" },
];

const gallery = [
  { src: "/images/opd-consultation-room.jpg", alt: "The consultation room at the Kalanki clinic", caption: "The consultation room" },
  { src: "/images/speaker.jpg", alt: "Dr. Kushal Kharel speaking at a mental health event", caption: "Speaking on mental health" },
  { src: "/images/award.jpg", alt: "Dr. Kushal Kharel receiving an award", caption: "Recognised for community work" },
  { src: "/images/community/cbt-conference.jpg", alt: "Dr. Kushal Kharel at a CBT conference", caption: "CBT training and conferences" },
  { src: "/images/community/community-health-camp.jpg", alt: "A community mental health camp", caption: "Community health camps" },
  { src: "/images/community/nepal-health-corps-school-outreach.jpg", alt: "School outreach with Nepal Health Corps", caption: "School outreach" },
];

const faqs = [
  { q: "Is this a confirmed booking?", a: "No. The form prepares a request that you send on WhatsApp. The clinic replies to confirm the exact time, usually the same day." },
  { q: "Can I book from outside Nepal?", a: "Yes. Choose the online video option. Times are shown in Nepal time, so check the difference with your own time zone before sending." },
  { q: "How much does a consultation cost?", a: "The clinic will tell you the fee when it confirms your slot. You can also see the fee guide on the site." },
  { q: "What if it is an emergency?", a: "Do not use this form. Go to the nearest hospital emergency department or call the Nepal Police on 100." },
];

export default function BookPage() {
  return (
    <main className="min-h-screen bg-stone-50 pb-20 pt-28 text-stone-900">
      <section className="bg-sage-950 text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-14 lg:grid-cols-[1.2fr_.8fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[3px] text-clay-200">Book online</p>
            <h1 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">Book an appointment with Dr. Kushal Kharel</h1>
            <p className="mt-6 text-lg leading-8 text-sage-100">Consultant psychiatrist in Kathmandu. Choose a clinic visit or an online video session, pick a time that suits you, and send your request in under two minutes.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#book" className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-4 font-bold text-sage-950 hover:bg-clay-100">
                <CalendarCheck size={20} aria-hidden="true" /> Start booking
              </a>
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-green-300 bg-green-600 px-6 py-4 font-bold text-white hover:bg-green-500">
                <MessageCircle size={20} aria-hidden="true" /> WhatsApp us
              </a>
            </div>
            <p className="mt-5 flex items-center gap-2 text-sm text-sage-200"><MapPin size={16} aria-hidden="true" /> Kalanki-14, Near Malpot Road, Kathmandu</p>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-2xl border-4 border-white/20 shadow-2xl">
            <Image src="/images/dr-kushal-headshot.jpg" alt="Dr. Kushal Kharel, consultant psychiatrist in Kathmandu" fill priority sizes="(max-width: 1024px) 90vw, 384px" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
        <h2 className="text-3xl font-bold">How booking works</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <article key={s.n} className="overflow-hidden rounded-xl bg-white shadow-sm">
              <div className="relative h-48">
                <Image src={s.image} alt={s.alt} fill sizes="(max-width: 768px) 100vw, 360px" className="object-cover" />
              </div>
              <div className="p-6">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-clay-600 font-bold text-white">{s.n}</span>
                <h3 className="mt-4 text-xl font-bold">{s.title}</h3>
                <p className="mt-2 leading-7 text-stone-600">{s.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 lg:px-8">
        <BookingForm />
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-bold">Why book here</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ Icon, title, text }) => (
            <article key={title} className="rounded-xl bg-white p-7 shadow-sm">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sage-100 text-sage-800"><Icon size={23} aria-hidden="true" /></span>
              <h3 className="mt-5 text-xl font-bold">{title}</h3>
              <p className="mt-2 leading-7 text-stone-600">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-sage-50 py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold">Meet your psychiatrist</h2>
          <p className="mt-3 max-w-2xl text-stone-600">Dr. Kharel combines clinical practice with training, public talks and community work across Nepal.</p>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
            {gallery.map((g) => (
              <figure key={g.src} className="overflow-hidden rounded-xl bg-white shadow-sm">
                <div className="relative aspect-[4/3]">
                  <Image src={g.src} alt={g.alt} fill sizes="(max-width: 768px) 50vw, 360px" className="object-cover" />
                </div>
                <figcaption className="px-4 py-3 text-sm font-semibold text-stone-700">{g.caption}</figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-6 text-sm"><Link href="/about/" className="font-semibold text-sage-800 underline">Read Dr. Kharel&apos;s full profile</Link> · <Link href="/patient-testimonials/" className="font-semibold text-sage-800 underline">Patient testimonials</Link> · <Link href="/psychiatrist-fee-nepal/" className="font-semibold text-sage-800 underline">Fee guide</Link></p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-bold">Booking questions</h2>
        <div className="mt-6 space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-xl bg-white p-5 shadow-sm">
              <summary className="cursor-pointer font-bold">{f.q}</summary>
              <p className="mt-3 leading-7 text-stone-600">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="rounded-2xl bg-sage-900 p-9 text-center text-white">
          <h2 className="text-3xl font-bold">Ready when you are</h2>
          <p className="mt-3 text-sage-100">Prefer to talk? Call or message the clinic directly.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a href="tel:+9779861800547" className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 font-bold text-sage-950"><Phone size={19} aria-hidden="true" /> {phone}</a>
            <a href="#book" className="inline-flex items-center gap-2 rounded-lg bg-clay-600 px-6 py-3.5 font-bold text-white">Back to booking form</a>
          </div>
        </div>
      </section>
    </main>
  );
}
