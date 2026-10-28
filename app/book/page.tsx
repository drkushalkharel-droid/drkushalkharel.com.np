import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CalendarCheck, Clock3, Globe2, Languages, MapPin, MessageCircle, Phone, ShieldCheck, Video } from "lucide-react";
import Image from "../components/OptimizedImage";
import BookingForm from "../components/BookingForm";
import { CalmArt, StepChooseArt, StepSendArt, StepTimeArt } from "../components/BookArt";
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

const headingFont = { fontFamily: "var(--font-serif-site), Georgia, serif" };

const marquee = ["In-person in Kathmandu", "Online video worldwide", "Nepali · English · Hindi · Bangla", "Confidential care", "Evening appointments"];

const stats = [
  { n: "2 min", l: "to send a request" },
  { n: "14 days", l: "of times to choose" },
  { n: "5", l: "languages" },
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
  { Icon: Languages, title: "Your language", text: "Consultations in Nepali, English, Hindi, Bangla or Singlish." },
  { Icon: Globe2, title: "Time-zone aware", text: "Times are in Nepal time, so there is no confusion." },
  { Icon: CalendarCheck, title: "Confirmed by the clinic", text: "You send a request; the clinic confirms the final time." },
];

const gallery = [
  { src: "/images/opd-consultation-room.jpg", alt: "The consultation room at the Kalanki clinic", caption: "The consultation room", tall: true },
  { src: "/images/speaker.jpg", alt: "Dr. Kushal Kharel speaking at a mental health event", caption: "Speaking on mental health", tall: true },
  { src: "/images/award.jpg", alt: "Dr. Kushal Kharel receiving an award", caption: "Recognised for community work", tall: true },
  { src: "/images/community/cbt-conference.jpg", alt: "Dr. Kushal Kharel at a CBT conference", caption: "CBT training and conferences" },
  { src: "/images/community/community-health-camp.jpg", alt: "A community mental health camp", caption: "Community health camps" },
  { src: "/images/community/school-mental-health-awareness.jpg", alt: "School mental health awareness programme", caption: "School programmes" },
];

const faqs = [
  { q: "Is this a confirmed booking?", a: "No. The form prepares a request that you send on WhatsApp. The clinic replies to confirm the exact time, usually the same day." },
  { q: "Can I book from outside Nepal?", a: "Yes. Choose the online video option. Times are shown in Nepal time, so check the difference with your own time zone before sending." },
  { q: "How much does a consultation cost?", a: "The clinic will tell you the fee when it confirms your slot. You can also see the fee guide on the site." },
  { q: "What if it is an emergency?", a: "Do not use this form. Go to the nearest hospital emergency department or call the Nepal Police on 100." },
];

const btn = "inline-flex items-center justify-center gap-3 px-6 py-4 text-sm font-semibold transition hover:-translate-y-0.5";

export default function BookPage() {
  return (
    <main id="main" className={`min-h-screen bg-[#f5f4ef] text-[#1f2927]`} style={{ fontFamily: "var(--font-sans-site), system-ui, sans-serif" }}>
      <header className="mx-auto flex max-w-[1240px] items-center justify-between px-6 py-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-6 rotate-[30deg] gap-0.5" aria-hidden="true">
            <span className="h-[18px] w-[7px] rounded-[7px_7px_2px_7px] bg-[#c4462c]" />
            <span className="h-[25px] w-[7px] rounded-[7px_7px_2px_7px] bg-[#314f49]" />
            <span className="h-[14px] w-[7px] rounded-[7px_7px_2px_7px] bg-[#e2ad67]" />
          </span>
          <span className="leading-tight">
            <strong className="block text-[15px]">Dr. Kushal Kharel</strong>
            <em className="block text-[13px] uppercase not-italic tracking-[.08em] text-[#5a635e]">Consultant Psychiatrist</em>
          </span>
        </Link>
        <nav className="hidden items-center gap-9 text-sm text-[#53605a] md:flex" aria-label="Page sections">
          <a href="#how">How it works</a>
          <a href="#book">Book</a>
          <a href="#doctor">Your doctor</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a href="tel:+9779861800547" className={`${btn} bg-[#1f2927] !px-4 !py-3 text-white`}>
          <Phone size={15} aria-hidden="true" /> <span className="hidden sm:inline">{phone}</span><span className="sm:hidden">Call</span>
        </a>
      </header>

      <section className="mx-auto grid max-w-[1240px] gap-10 px-6 pb-16 pt-8 lg:grid-cols-2 lg:items-center lg:px-8 lg:pb-20">
        <div className="lg:pl-[6%]">
          <p className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-[.12em] text-[#314f49]">
            <span className="h-[7px] w-[7px] rounded-full bg-[#c4462c]" aria-hidden="true" /> Book online
          </p>
          <h1 className="my-7 text-[clamp(2.6rem,4.8vw,4.3rem)] font-medium leading-[.98] tracking-[-.05em]" style={headingFont}>
            Book a quiet hour with <em className="text-[#c4462c]">Dr. Kharel</em>
          </h1>
          <p className="max-w-[420px] text-[17px] text-[#5a635e]">
            A consultant psychiatrist in Kathmandu. Meet at the clinic or on a private video call, choose a time that suits you, and send your request in two minutes.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-6">
            <a href="#book" className={`${btn} bg-[#c4462c] text-white`}>Start booking <ArrowUpRight size={16} aria-hidden="true" /></a>
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-b border-[#aeb6b0] pb-1 text-[13px] text-[#314f49]">
              <MessageCircle size={15} aria-hidden="true" /> or WhatsApp us
            </a>
          </div>
          <p className="mt-14 flex items-center gap-3 text-[13px] tracking-[.03em] text-[#5a635e]">
            <MapPin size={20} className="text-[#c4462c]" aria-hidden="true" /> Kalanki-14, Near Malpot Road, Kathmandu
          </p>
        </div>
        <div className="relative mx-auto w-full max-w-[440px]">
          <div className="relative aspect-[4/5] overflow-hidden bg-[#c4d2c5]">
            <div className="absolute right-[10%] top-[7%] h-[22%] w-[28%] rounded-full bg-[#eabf7d]" aria-hidden="true" />
            <div className="absolute inset-x-[12%] bottom-0 top-[18%] overflow-hidden rounded-t-full bg-[#314f49]">
              <Image src="/images/dr-kushal-headshot.jpg" alt="Dr. Kushal Kharel, consultant psychiatrist in Kathmandu" fill priority sizes="(max-width: 640px) 80vw, 340px" className="object-cover object-top" />
            </div>
            <div className="absolute bottom-0 left-0 h-[34%] w-[9%] rounded-tr-full bg-[#c4462c]" aria-hidden="true" />
            <div className="absolute bottom-[8%] right-0 h-[30%] w-[7%] rounded-tl-full bg-[#88a48b]" aria-hidden="true" />
          </div>
          <div className="absolute -bottom-5 left-4 flex items-center gap-3 bg-white px-4 py-3 shadow-lg sm:-left-6">
            <span className="flex h-9 w-9 items-center justify-center bg-[#c4d2c5] text-[#314f49]"><Video size={18} aria-hidden="true" /></span>
            <span className="text-xs leading-tight"><strong className="block text-sm">Online video session</strong><span className="text-[#5a635e]">Nepal and abroad</span></span>
          </div>
        </div>
      </section>

      <div className="flex items-center justify-center gap-6 overflow-hidden whitespace-nowrap bg-[#314f49] px-4 py-4 text-[13px] uppercase tracking-[.17em] text-[#e6ede7] sm:gap-9 sm:text-xs" aria-hidden="true">
        {marquee.map((m, i) => (
          <span key={m} className={`flex items-center gap-6 sm:gap-9 ${i > 2 ? "hidden md:flex" : ""}`}>
            {i > 0 && <i className="not-italic text-[#e9b477]">✦</i>}
            {m}
          </span>
        ))}
      </div>

      <section className="mx-auto max-w-[1240px] px-6 py-12 lg:px-8">
        <dl className="grid grid-cols-2 gap-px bg-[#d6d8d2] md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.l} className="bg-[#f5f4ef] px-6 py-8">
              <dt className="text-4xl font-medium text-[#c4462c]" style={headingFont}>{s.n}</dt>
              <dd className="mt-2 text-sm text-[#5a635e]">{s.l}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section id="how" className="mx-auto max-w-[1240px] scroll-mt-6 px-6 pb-16 lg:px-8">
        <p className="text-[13px] font-bold uppercase tracking-[.12em] text-[#c4462c]">How it works</p>
        <h2 className="mt-5 max-w-2xl text-[clamp(2.4rem,4.3vw,4rem)] font-medium leading-[1] tracking-[-.04em]" style={headingFont}>
          Three small steps to <em className="text-[#c4462c]">feeling heard</em>
        </h2>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map(({ Art, title, text, alt }, i) => (
            <article key={title}>
              <Art className="aspect-[4/3] w-full" label={alt} />
              <p className="mt-6 text-[13px] font-bold text-[#c4462c]">0{i + 1}</p>
              <h3 className="mt-3 text-2xl font-medium" style={headingFont}>{title}</h3>
              <p className="mt-2 max-w-[300px] text-sm text-[#5a635e]">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#e8e4d8] px-6 py-14 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <BookingForm />
        </div>
      </section>

      <section className="bg-[#314f49] px-6 py-16 text-[#f1f3ed] lg:px-8">
        <div className="mx-auto max-w-[1176px]">
          <p className="text-[13px] font-bold uppercase tracking-[.12em] text-[#e6b579]">Why book here</p>
          <div className="mt-8 mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="text-[clamp(2.6rem,5vw,4.6rem)] font-medium leading-none tracking-[-.04em]" style={headingFont}>
              Care, <em className="text-[#f6a995]">simplified</em>
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

      <section id="doctor" className="mx-auto max-w-[1240px] scroll-mt-6 px-6 py-16 lg:px-8">
        <div className="grid items-end gap-6 md:grid-cols-[1.2fr_.8fr]">
          <div>
            <p className="text-[13px] font-bold uppercase tracking-[.12em] text-[#c4462c]">Your doctor</p>
            <h2 className="mt-5 text-[clamp(2.4rem,4.3vw,4rem)] font-medium leading-[1] tracking-[-.04em]" style={headingFont}>
              Clinic, classroom and <em className="text-[#c4462c]">community</em>
            </h2>
          </div>
          <p className="text-[#5a635e]">Dr. Kharel combines clinical practice with training, public talks and community work across Nepal.</p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3">
          {gallery.map((g) => (
            <figure key={g.src} className={`group relative overflow-hidden bg-[#c4d2c5] ${g.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
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

      <section className="mx-auto max-w-[1240px] px-6 pb-16 lg:px-8">
        <div className="relative overflow-hidden">
          <CalmArt className="h-[300px] w-full object-cover md:h-[340px]" label="Calm landscape illustration with a golden sun over rolling hills" />
          <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-14">
            <p className="max-w-lg text-[clamp(1.6rem,3vw,2.6rem)] font-medium leading-tight text-white" style={headingFont}>
              You do not need to be <em className="text-[#eabf7d]">in crisis</em> to ask for help.
            </p>
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl scroll-mt-6 px-6 pb-16 lg:px-8">
        <p className="text-[13px] font-bold uppercase tracking-[.12em] text-[#c4462c]">Booking questions</p>
        <h2 className="mt-5 text-[clamp(2.2rem,4vw,3.4rem)] font-medium tracking-[-.04em]" style={headingFont}>
          Before you <em className="text-[#c4462c]">send</em>
        </h2>
        <div className="mt-8 border-b border-[#d6d8d2]">
          {faqs.map((f) => (
            <details key={f.q} className="group border-t border-[#d6d8d2] py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between text-xl font-medium" style={headingFont}>
                {f.q}
                <span className="text-2xl text-[#c4462c] transition group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="mt-3 max-w-2xl text-[15px] text-[#5a635e]">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="bg-[#a63a23] px-6 py-16 text-center text-white">
        <div className="mx-auto max-w-[670px]">
          <p className="flex items-center justify-center gap-2 text-[13px] font-bold uppercase tracking-[.12em]">
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
          <p className="mx-auto mt-10 max-w-[510px] text-xs text-[#ffe3d9]">
            This page is for appointment requests only. In an emergency, go to the nearest hospital emergency department or call the Nepal Police on 100.
          </p>
        </div>
      </section>

      <footer className="flex flex-col gap-3 bg-[#1f2927] px-6 py-8 text-[13px] text-[#c9d2cb] md:flex-row md:items-center md:justify-between lg:px-12">
        <p><strong className="text-white">Dr. Kushal Kharel</strong> · Consultant Psychiatrist · NMC #27199</p>
        <p>Kalanki-14, Kathmandu · Sun–Fri 8 AM–10 PM · Sat 10 AM–4 PM</p>
      </footer>
    </main>
  );
}
