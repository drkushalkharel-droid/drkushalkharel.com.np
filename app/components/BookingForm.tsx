"use client";

import { useMemo, useState } from "react";
import Image from "./OptimizedImage";
import { ArrowLeft, ArrowRight, Building2, CalendarDays, Check, Copy, MessageCircle, Video } from "lucide-react";

const WHATSAPP_NUMBER = "9779861800547";

const visitTypes = [
  {
    id: "clinic",
    title: "In-person at the clinic",
    detail: "Kalanki, Kathmandu",
    image: "/images/opd-consultation-room.jpg",
    alt: "Consultation room at Dr. Kushal Kharel's clinic in Kalanki, Kathmandu",
    Icon: Building2,
  },
  {
    id: "online",
    title: "Online video session",
    detail: "From anywhere in Nepal or abroad",
    image: "/images/community/online-suicide-prevention-session.jpg",
    alt: "Dr. Kushal Kharel leading an online session over video",
    Icon: Video,
  },
] as const;

const concerns = [
  "Anxiety or panic",
  "Low mood or depression",
  "OCD",
  "ADHD",
  "Sleep problems",
  "Stress or anger",
  "Bipolar disorder",
  "Addiction",
  "Relationship or family issues",
  "Child or adolescent concern",
  "Medication review or second opinion",
  "Not sure yet",
];

const languages = ["Nepali", "English", "Hindi"];

// Clinic hours (Nepal time): Sunday–Friday 8:00–22:00, Saturday 10:00–16:00.
const hoursFor = (day: number) => (day === 6 ? { start: 10, end: 16 } : { start: 8, end: 22 });

const slotsFor = (day: number) => {
  const { start, end } = hoursFor(day);
  const out: string[] = [];
  for (let h = start; h < end; h++) {
    out.push(`${h}:00`, `${h}:30`);
  }
  return out;
};

const label12 = (slot: string) => {
  const [h, m] = slot.split(":").map(Number);
  return `${h % 12 === 0 ? 12 : h % 12}:${String(m).padStart(2, "0")} ${h < 12 ? "AM" : "PM"}`;
};

const dayLabel = (d: Date) => ({
  weekday: d.toLocaleDateString("en-GB", { weekday: "short" }),
  date: d.getDate(),
  month: d.toLocaleDateString("en-GB", { month: "short" }),
});

const steps = ["Visit type", "Date & time", "Your details", "Send"];

export default function BookingForm() {
  const [step, setStep] = useState(0);
  const [visit, setVisit] = useState<(typeof visitTypes)[number]["id"] | "">("");
  const [dateIdx, setDateIdx] = useState<number | null>(null);
  const [slot, setSlot] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [concern, setConcern] = useState("");
  const [language, setLanguage] = useState("Nepali");
  const [notes, setNotes] = useState("");
  const [consent, setConsent] = useState(false);
  const [copied, setCopied] = useState(false);

  // Built on the client from the visitor's own clock; the next 14 days starting tomorrow.
  const days = useMemo(() => {
    const out: Date[] = [];
    const base = new Date();
    for (let i = 1; i <= 14; i++) {
      const d = new Date(base.getFullYear(), base.getMonth(), base.getDate() + i);
      out.push(d);
    }
    return out;
  }, []);

  const chosenDate = dateIdx === null ? null : days[dateIdx];
  const slots = chosenDate ? slotsFor(chosenDate.getDay()) : [];
  const visitInfo = visitTypes.find((v) => v.id === visit);

  const detailsValid = name.trim().length > 1 && phone.replace(/\D/g, "").length >= 7 && concern !== "";
  const canNext = [Boolean(visit), Boolean(chosenDate && slot), detailsValid, consent][step];

  const message = [
    "Hello Dr. Kharel, I would like to request an appointment.",
    "",
    `Visit type: ${visitInfo?.title ?? ""}`,
    chosenDate ? `Preferred date: ${chosenDate.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}` : "",
    slot ? `Preferred time (Nepal time): ${label12(slot)}` : "",
    `Name: ${name.trim()}`,
    `Phone / WhatsApp: ${phone.trim()}`,
    `Main concern: ${concern}`,
    `Preferred language: ${language}`,
    notes.trim() ? `Notes: ${notes.trim()}` : "",
  ]
    .filter((l, i, a) => l !== "" || (a[i - 1] !== "" && i > 0))
    .join("\n");

  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  const field = "mt-2 w-full border border-[#c3c8c0] bg-white px-4 py-3 text-[#1f2927] outline-none focus:border-[#314f49] focus:ring-2 focus:ring-[#c4d2c5]";

  return (
    <div id="book" className="scroll-mt-28 overflow-hidden bg-[#f5f4ef] shadow-xl">
      <ol className="grid grid-cols-4 border-b border-[#d6d8d2] bg-[#ebe9e1] text-center text-xs font-semibold sm:text-sm" aria-label="Booking progress">
        {steps.map((s, i) => (
          <li key={s} aria-current={i === step ? "step" : undefined} className={`px-2 py-4 ${i === step ? "bg-[#314f49] text-white" : i < step ? "text-[#314f49]" : "text-stone-500"}`}>
            <span className={`mr-1 inline-flex h-6 w-6 items-center justify-center rounded-full text-xs ${i === step ? "bg-white text-[#314f49]" : i < step ? "bg-[#314f49] text-white" : "bg-stone-200 text-stone-600"}`}>
              {i < step ? <Check size={13} aria-hidden="true" /> : i + 1}
            </span>
            <span className="hidden sm:inline">{s}</span>
          </li>
        ))}
      </ol>

      <div className="p-6 sm:p-9">
        {step === 0 && (
          <fieldset>
            <legend className="text-3xl font-medium text-[#1f2927]" style={{ fontFamily: "var(--font-serif-site), Georgia, serif" }}>How would you like to meet?</legend>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {visitTypes.map((v) => (
                <label key={v.id} className={`cursor-pointer overflow-hidden border-2 transition ${visit === v.id ? "border-[#ef765d] ring-4 ring-[#ef765d]/20" : "border-[#d6d8d2] hover:border-[#314f49]"}`}>
                  <input type="radio" name="visit" value={v.id} checked={visit === v.id} onChange={() => setVisit(v.id)} className="sr-only" />
                  <div className="relative h-48 bg-stone-100">
                    <Image src={v.image} alt={v.alt} fill sizes="(max-width: 640px) 100vw, 420px" className="object-cover" />
                  </div>
                  <div className="flex items-start gap-3 p-5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#c4d2c5] text-[#314f49]"><v.Icon size={20} aria-hidden="true" /></span>
                    <span>
                      <span className="block font-bold text-stone-900">{v.title}</span>
                      <span className="block text-sm text-stone-600">{v.detail}</span>
                    </span>
                  </div>
                </label>
              ))}
            </div>
          </fieldset>
        )}

        {step === 1 && (
          <div>
            <h2 className="text-3xl font-medium text-[#1f2927]" style={{ fontFamily: "var(--font-serif-site), Georgia, serif" }}>Pick a day and time</h2>
            <p className="mt-2 text-sm text-stone-600">Times are in Nepal time (NPT, UTC+5:45). Clinic hours: Sunday–Friday 8 AM–10 PM, Saturday 10 AM–4 PM. This is a request; the clinic confirms on WhatsApp.</p>
            <div className="mt-6 flex gap-3 overflow-x-auto pb-3" role="radiogroup" aria-label="Preferred date">
              {days.map((d, i) => {
                const l = dayLabel(d);
                const on = dateIdx === i;
                return (
                  <button key={d.toISOString()} type="button" role="radio" aria-checked={on} onClick={() => { setDateIdx(i); setSlot(""); }} className={`flex min-w-[74px] flex-col items-center border-2 px-3 py-3 transition ${on ? "border-[#314f49] bg-[#314f49] text-white" : "border-[#d6d8d2] bg-white hover:border-[#314f49]"}`}>
                    <span className="text-xs font-semibold uppercase">{l.weekday}</span>
                    <span className="text-2xl font-bold">{l.date}</span>
                    <span className="text-xs">{l.month}</span>
                  </button>
                );
              })}
            </div>
            {chosenDate ? (
              <div className="mt-6">
                <p className="flex items-center gap-2 font-semibold text-stone-800"><CalendarDays size={18} aria-hidden="true" /> Available times</p>
                <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6" role="radiogroup" aria-label="Preferred time">
                  {slots.map((s) => (
                    <button key={s} type="button" role="radio" aria-checked={slot === s} onClick={() => setSlot(s)} className={`border-2 px-2 py-2.5 text-sm font-semibold transition ${slot === s ? "border-[#ef765d] bg-[#ef765d] text-white" : "border-[#d6d8d2] bg-white hover:border-[#ef765d]"}`}>
                      {label12(s)}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <p className="mt-6 bg-[#ebe9e1] p-4 text-sm text-stone-600">Choose a day to see times.</p>
            )}
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-3xl font-medium text-[#1f2927]" style={{ fontFamily: "var(--font-serif-site), Georgia, serif" }}>A few details</h2>
            <p className="mt-2 text-sm text-stone-600">Please keep this brief. Do not include sensitive medical details here; discuss those in the consultation.</p>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-semibold text-stone-800">Full name
                <input className={field} value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
              </label>
              <label className="block text-sm font-semibold text-stone-800">WhatsApp number (with country code)
                <input className={field} value={phone} onChange={(e) => setPhone(e.target.value)} inputMode="tel" autoComplete="tel" placeholder="+977 98…" />
              </label>
              <label className="block text-sm font-semibold text-stone-800">Main concern
                <select className={field} value={concern} onChange={(e) => setConcern(e.target.value)}>
                  <option value="">Select…</option>
                  {concerns.map((c) => <option key={c}>{c}</option>)}
                </select>
              </label>
              <label className="block text-sm font-semibold text-stone-800">Preferred language
                <select className={field} value={language} onChange={(e) => setLanguage(e.target.value)}>
                  {languages.map((l) => <option key={l}>{l}</option>)}
                </select>
              </label>
              <label className="block text-sm font-semibold text-stone-800 sm:col-span-2">Anything else? (optional)
                <textarea className={field} rows={3} value={notes} onChange={(e) => setNotes(e.target.value)} />
              </label>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="text-3xl font-medium text-[#1f2927]" style={{ fontFamily: "var(--font-serif-site), Georgia, serif" }}>Review and send</h2>
            <dl className="mt-6 grid gap-3 bg-[#ebe9e1] p-5 text-sm sm:grid-cols-2">
              <div><dt className="font-semibold text-[#314f49]">Visit</dt><dd>{visitInfo?.title}</dd></div>
              <div><dt className="font-semibold text-[#314f49]">When (Nepal time)</dt><dd>{chosenDate?.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" })}, {slot && label12(slot)}</dd></div>
              <div><dt className="font-semibold text-[#314f49]">Name</dt><dd>{name}</dd></div>
              <div><dt className="font-semibold text-[#314f49]">WhatsApp</dt><dd>{phone}</dd></div>
              <div><dt className="font-semibold text-[#314f49]">Concern</dt><dd>{concern}</dd></div>
              <div><dt className="font-semibold text-[#314f49]">Language</dt><dd>{language}</dd></div>
            </dl>
            <label className="mt-6 flex items-start gap-3 text-sm text-stone-700">
              <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-1 h-5 w-5" />
              <span>I understand this is an appointment request, not a confirmed booking, and that it is not for emergencies. I agree to be contacted on the number above.</span>
            </label>
            {consent && (
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={waHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#0d8239] px-6 py-3.5 font-bold text-white hover:bg-[#0a6b2f]">
                  <MessageCircle size={20} aria-hidden="true" /> Send on WhatsApp
                </a>
                <button type="button" onClick={copy} className="inline-flex items-center gap-2 border border-[#aeb6b0] px-6 py-3.5 font-semibold text-[#1f2927] hover:bg-[#ebe9e1]">
                  <Copy size={18} aria-hidden="true" /> {copied ? "Copied" : "Copy details"}
                </button>
              </div>
            )}
            <p className="mt-5 text-sm text-stone-600">In an emergency, do not wait for a reply: go to the nearest hospital emergency department or call the Nepal Police on 100.</p>
          </div>
        )}

        <div className="mt-9 flex items-center justify-between border-t border-[#d6d8d2] pt-6">
          <button type="button" onClick={() => setStep(step - 1)} disabled={step === 0} className="inline-flex items-center gap-2 px-4 py-2.5 font-semibold text-[#53605a] hover:bg-[#ebe9e1] disabled:invisible">
            <ArrowLeft size={18} aria-hidden="true" /> Back
          </button>
          {step < 3 && (
            <button type="button" onClick={() => setStep(step + 1)} disabled={!canNext} className="inline-flex items-center gap-2 bg-[#ef765d] px-7 py-3 font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#c4462c] disabled:cursor-not-allowed disabled:opacity-40">
              Next <ArrowRight size={18} aria-hidden="true" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
