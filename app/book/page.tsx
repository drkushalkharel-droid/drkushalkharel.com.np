import type { Metadata } from "next";
import Link from "next/link";
import { DM_Sans, Playfair_Display } from "next/font/google";
import { ArrowUpRight, CalendarCheck, Clock3, Globe2, Languages, MapPin, MessageCircle, Phone, ShieldCheck, Video } from "lucide-react";
import Image from "../components/OptimizedImage";
import BookingForm from "../components/BookingForm";
import { CalmArt, HeroArt, StepChooseArt, StepSendArt, StepTimeArt } from "../components/BookArt";
import { metaFor } from "../lib/seoText";

const serif = Playfair_Display({ subsets: ["latin"], variable: "--font-book-serif", display: "swap" });
const sans = DM_Sans({ subsets: ["latin"], variable: "--font-book-sans", display: "swap" });

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

const headingFont = { fontFamily: "var(--font-book-serif), Georgia, serif" };

const marquee = ["In-person in Kathmandu", "Online video worldwide", "Nepali · English · Hindi", "Confidential care", "Evening appointments"];

const stats = [
  { n: "2 min", l: "to send a request" },
  { n: "14 days", l: "of times to choose" },
  { n: "3", l: "languages" },
  { n: "NMC", l: "registered #27199" },
];

const steps = [
  { Art: StepChooseArt, title: "Choose how to meet", text: "The Kalanki clinic, or a private video session from wherever you are.", alt: "Illustration of a clinic visit beside an online video call" },
  { Art: StepTimeArt, title: "Pick a day and time", text: "Browse the next two weeks. All times are shown in Nepal time.", alt: "Illustration of a calendar with a chosen day and a clock" },
  { Art: StepSendArt, title: "Send on WhatsApp", text: "Your request opens ready-written. The clinic replies to confirm.", alt: "Illustration of a chat message with a confirmation tick" },
];

const reasons = [
  { Icon: ShieldCheck, title: "Private and confidential", text: "Your details are used only to arrange your appointment." },
  { Icon: Video, title: "Online from anywhere", text: "Secure video sessions across Nepal and abroad." },
  { Icon: Clock3, title: "Evening and weekend slots", text: "Sunday to Friday until 10 PM, and Saturday daytime." },
  { Icon: Languages, title: "Your language", text: "Consultations in Nepali, English or Hindi." },
  { Icon: Globe2, title: "Time-zone aware", text: "Times are in Nepal time, so there is no confusion." },
  { Icon: CalendarCheck, title: "Confirmed by the clinic", text: "You send a request; the clinic confirms the final time." },
];

const gallery = [
  { src: "/images/opd-consultation-room.jpg", alt: "The consultation room at the Kalanki clinic", caption: "The consultation room", span: "md:row-span-2" },
  { src: "/images/speaker.jpg", alt: "Dr. Kushal Kharel speaking at a mental health event", caption: "Speaking on mental health", span: "md:row-span-2" },
  { src: "/images/community/cbt-conference.jpg", alt: "Dr. Kushal Kharel at a CBT conference", caption: "CBT training and conferences", span: "" },
  { src: "/images/community/community-health-camp.jpg", alt: "A community mental health camp", caption: "Community health camps", span: "" },
  { src: "/images/award.jpg", alt: "Dr. Kushal Kharel receiving an award", caption: "Recognised for community work", span: "md:row-span-2" },
  { src: "/images/community/school-mental-health-awareness.jpg", alt: "School mental health awareness programme", caption: "School programmes", span: "" },
  { src: "/images/community/world-mental-health-day-2025.jpg", alt: "World Mental Health Day 2025 event", caption: "World Mental Health Day", span: "" },
];

const faqs = [
  { q: "Is this a confirmed booking?", a: "No. The form prepares a request that you send on WhatsApp. The clinic replies to confirm the exact time, usually the same day." },
  { q: "Can I book from outside Nepal?", a: "Yes. Choose the online video option. Times are shown in Nepal time, so check the difference with your own time zone before sending." },
  { q: "How much does a consultation cost?", a: "The clinic will tell you the fee when it confirms your slot. You can also see the fee guide on the site." },
  { q: "What if it is an emergency?", a: "Do not use this form. Go to the nearest hospital emergency department or call the Nepal Police on 100." },
];

const btn = "inline-flex items-center justify-center gap-3 px-6 py-4 text-[13px] font-semibold transition hover:-translate-y-0.5";

export default function BookPage() {
  return (
    <main className={`${serif.variable} ${sans.variable} min-h-screen bg-[#f5f4ef] text-[#1f2927]`} style={{ fontFamily: "var(--font-book-sans), system-ui, sans-serif" }}>
      <header className="mx-auto flex max-w-[1240px] items-center justify-between px-6 py-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-6 rotate-[30deg] gap-0.5" aria-hidden="true">
            <span className="h-[18px] w-[7px] rounded-[7px_7px_2px_7px] bg-[#ef765d]" />
            <span className="h-[25px] w-[7px] rounded-[7px_7px_2px_7px] bg-[#314f49]" />
            <span className="h-[14px] w-[7px] rounded-[7px_7px_2px_7px] bg-[#e2ad67]" />
          </span>
          <span className="leading-tight">
            <strong className="block text-[15px]">Dr. Kushal Kharel</strong>
            <em className="block text-[11px] uppercase not-italic tracking-[.08em] text-[#69736d]">Consultant Psychiatrist</em>
          </span>
        </Link>
        <nav className="hidden items-center gap-9 text-[13px] text-[#53605a] md:flex" aria-label="Page sections">
          <a href="#how">How it works</a>
          <a href="#book">Book</a>
          <a href="#doctor">Your doctor</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a href="tel:+9779861800547" className={`${btn} bg-[#1f2927] !px-4 !py-3 text-white`}>
          <Phone size={15} aria-hidden="true" /> <span className="hidden sm:inline">{phone}</span><span className="sm:hidden">Call</span>
        </a>
      </header>

      <section className="mx-auto grid max-w-[1240px] gap-10 px-6 pb-20 pt-10 lg:grid-cols-2 lg:px-8 lg:pb-24">
        <div className="lg:pl-[8%] lg:pt-6">
          <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.12em] text-[#314f49]">
            <span className="h-[7px] w-[7px] rounded-full bg-[#ef765d]" aria-hidden="true" /> Book online
          </p>
          <h1 className="my-7 text-[clamp(3.1rem,6vw,5.4rem)] font-medium leading-[.98] tracking-[-.05em]" style={headingFont}>
            Book a quiet hour with <em className="text-[#ef765d]">Dr. Kharel</em>
          </h1>
          <p className="max-w-[420px] text-[17px] text-[#69736d]">
            A consultant psychiatrist in Kathmandu. Meet at the clinic or on a private video call, choose a time that suits you, and send your request in two minutes.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-6">
            <a href="#book" className={`${btn} bg-[#ef765d] text-white`}>Start booking <ArrowUpRight size={16} aria-hidden="true" /></a>
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-b border-[#aeb6b0] pb-1 text-[13px] text-[#314f49]">
              <MessageCircle size={15} aria-hidden="true" /> or WhatsApp us
            </a>
          </div>
          <p className="mt-14 flex items-center gap-3 text-[11px] tracking-[.03em] text-[#69736d]">
            <MapPin size={20} className="text-[#ef765d]" aria-hidden="true" /> Kalanki-14, Near Malpot Road, Kathmandu
          </p>
        </div>
        <div className="relative lg:ml-[10%]">
          <HeroArt className="h-full min-h-[420px] w-full object-cover" label="Illustration of a patient on a video call with a doctor, beneath a golden sun" />
          <div className="absolute bottom-5 left-5 flex items-center gap-4 text-[10px] text-white">
            <span className="h-px w-11 bg-white/60" aria-hidden="true" /> Care that comes to you
          </div>
          <div className="absolute -bottom-6 right-4 hidden w-40 overflow-hidden border-4 border-[#f5f4ef] shadow-xl sm:block">
            <div className="relative aspect-square">
              <Image src="/images/dr-kushal-headshot.jpg" alt="Dr. Kushal Kharel, consultant psychiatrist in Kathmandu" fill priority sizes="160px" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <div className="flex items-center justify-center gap-6 overflow-hidden whitespace-nowrap bg-[#314f49] px-4 py-4 text-[11px] uppercase tracking-[.17em] text-[#e6ede7] sm:gap-9 sm:text-xs" aria-hidden="true">
        {marquee.map((m, i) => (
          <span key={m} className={`flex items-center gap-6 sm:gap-9 ${i > 2 ? "hidden md:flex" : ""}`}>
            {i > 0 && <i className="not-italic text-[#e9b477]">✦</i>}
            {m}
          </span>
        ))}
      </div>

      <section className="mx-auto max-w-[1240px] px-6 py-20 lg:px-8">
        <dl className="grid grid-cols-2 gap-px bg-[#d6d8d2] md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.l} className="bg-[#f5f4ef] px-6 py-8">
              <dt className="text-4xl font-medium text-[#ef765d]" style={headingFont}>{s.n}</dt>
              <dd className="mt-2 text-sm text-[#69736d]">{s.l}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section id="how" className="mx-auto max-w-[1240px] scroll-mt-6 px-6 pb-24 lg:px-8">
        <p className="text-[11px] font-bold uppercase tracking-[.12em] text-[#ef765d]">How it works</p>
        <h2 className="mt-5 max-w-2xl text-[clamp(2.4rem,4.3vw,4rem)] font-medium leading-[1] tracking-[-.04em]" style={headingFont}>
          Three small steps to <em className="text-[#ef765d]">feeling heard</em>
        </h2>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map(({ Art, title, text, alt }, i) => (
            <article key={title}>
              <Art className="aspect-[4/3] w-full" label={alt} />
              <p className="mt-6 text-[11px] font-bold text-[#ef765d]">0{i + 1}</p>
              <h3 className="mt-3 text-2xl font-medium" style={headingFont}>{title}</h3>
              <p className="mt-2 max-w-[300px] text-sm text-[#69736d]">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#e8e4d8] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <BookingForm />
        </div>
      </section>

      <section className="bg-[#314f49] px-6 py-24 text-[#f1f3ed] lg:px-8">
        <div className="mx-auto max-w-[1176px]">
          <p className="text-[11px] font-bold uppercase tracking-[.12em] text-[#e6b579]">Why book here</p>
          <div className="mt-8 mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="text-[clamp(2.6rem,5vw,4.6rem)] font-medium leading-none tracking-[-.04em]" style={headingFont}>
              Care, <em className="text-[#ef765d]">simplified</em>
            </h2>
            <p className="max-w-[270px] text-[15px] text-[#c1d0c6]">Everything you need to arrange a consultation, without phone tag.</p>
          </div>
          <div>
            {reasons.map(({ Icon, title, text }) => (
              <article key={title} className="grid grid-cols-[38px_1fr] items-center gap-5 border-t border-[#e6f3e7]/25 py-6 last:border-b md:grid-cols-[70px_1fr] md:gap-9">
                <Icon size={30} className="text-[#e8b979]" aria-hidden="true" />
                <div>
                  <h3 className="text-xl font-medium md:text-2xl" style={headingFont}>{title}</h3>
                  <p className="mt-1 max-w-xl text-sm text-[#c1d0c6]">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="doctor" className="mx-auto max-w-[1240px] scroll-mt-6 px-6 py-24 lg:px-8">
        <div className="grid items-end gap-6 md:grid-cols-[1.2fr_.8fr]">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[.12em] text-[#ef765d]">Your doctor</p>
            <h2 className="mt-5 text-[clamp(2.4rem,4.3vw,4rem)] font-medium leading-[1] tracking-[-.04em]" style={headingFont}>
              Clinic, classroom and <em className="text-[#ef765d]">community</em>
            </h2>
          </div>
          <p className="text-[#69736d]">Dr. Kharel combines clinical practice with training, public talks and community work across Nepal.</p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:auto-rows-[200px]">
          {gallery.map((g) => (
            <figure key={g.src} className={`group relative min-h-[180px] overflow-hidden bg-[#c4d2c5] ${g.span}`}>
              <Image src={g.src} alt={g.alt} fill sizes="(max-width: 768px) 50vw, 300px" className="object-cover transition duration-500 group-hover:scale-105" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1f2927]/85 to-transparent px-4 pb-3 pt-10 text-xs font-medium text-white">{g.caption}</figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-8 text-sm">
          <Link href="/about/" className="border-b border-[#bbc1bc] pb-1 text-[#314f49]">Full profile</Link>
          <span className="mx-4 text-[#aeb6b0]">/</span>
          <Link href="/patient-testimonials/" className="border-b border-[#bbc1bc] pb-1 text-[#314f49]">Patient testimonials</Link>
          <span className="mx-4 text-[#aeb6b0]">/</span>
          <Link href="/psychiatrist-fee-nepal/" className="border-b border-[#bbc1bc] pb-1 text-[#314f49]">Fee guide</Link>
        </p>
      </section>

      <section className="mx-auto max-w-[1240px] px-6 pb-24 lg:px-8">
        <div className="relative overflow-hidden">
          <CalmArt className="h-full min-h-[300px] w-full object-cover" label="Calm landscape illustration with a golden sun over rolling hills" />
          <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-14">
            <p className="max-w-lg text-[clamp(1.6rem,3vw,2.6rem)] font-medium leading-tight text-white" style={headingFont}>
              You do not need to be <em className="text-[#eabf7d]">in crisis</em> to ask for help.
            </p>
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl scroll-mt-6 px-6 pb-24 lg:px-8">
        <p className="text-[11px] font-bold uppercase tracking-[.12em] text-[#ef765d]">Booking questions</p>
        <h2 className="mt-5 text-[clamp(2.2rem,4vw,3.4rem)] font-medium tracking-[-.04em]" style={headingFont}>
          Before you <em className="text-[#ef765d]">send</em>
        </h2>
        <div className="mt-8 border-b border-[#d6d8d2]">
          {faqs.map((f) => (
            <details key={f.q} className="group border-t border-[#d6d8d2] py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between text-xl font-medium" style={headingFont}>
                {f.q}
                <span className="text-2xl text-[#ef765d] transition group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="mt-3 max-w-2xl text-[15px] text-[#69736d]">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="bg-[#ef765d] px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-[670px]">
          <p className="flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-[.12em]">
            <span className="h-[7px] w-[7px] rounded-full bg-white" aria-hidden="true" /> Ready when you are
          </p>
          <h2 className="my-6 text-[clamp(3rem,6vw,5.4rem)] font-medium leading-none tracking-[-.05em]" style={headingFont}>
            Take the <em className="text-[#fff1d5]">first step</em>
          </h2>
          <p className="mx-auto mb-8 max-w-md">Prefer to talk? Call or message the clinic directly.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#book" className={`${btn} bg-[#1f2927] text-white`}>Back to the form <ArrowUpRight size={16} aria-hidden="true" /></a>
            <a href="tel:+9779861800547" className={`${btn} bg-[#ebe9e1] text-[#1f2927]`}><Phone size={15} aria-hidden="true" /> {phone}</a>
          </div>
          <p className="mx-auto mt-10 max-w-[510px] text-[10px] text-[#ffe3d9]">
            This page is for appointment requests only. In an emergency, go to the nearest hospital emergency department or call the Nepal Police on 100.
          </p>
        </div>
      </section>

      <footer className="flex flex-col gap-3 bg-[#1f2927] px-6 py-8 text-[11px] text-[#c9d2cb] md:flex-row md:items-center md:justify-between lg:px-12">
        <p><strong className="text-white">Dr. Kushal Kharel</strong> · Consultant Psychiatrist · NMC #27199</p>
        <p>Kalanki-14, Kathmandu · Sun–Fri 8 AM–10 PM · Sat 10 AM–4 PM</p>
      </footer>
    </main>
  );
}
