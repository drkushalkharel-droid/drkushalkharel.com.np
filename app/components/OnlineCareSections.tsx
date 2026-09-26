import Link from "next/link";
import { Check, Clock3, CreditCard, Languages, ShieldCheck, Video, Zap } from "lucide-react";
import { conditionsTreated, consultantTitle, onlineTreatments, type OnlineFaq } from "../data/onlineCare";

// Name line shown above the H1 on every abroad page, so the role and the
// service are attached to the doctor's name.
export function NameLine() {
  return (
    <p className="mt-8 text-sm font-semibold uppercase tracking-[3px] text-sage-700">
      {`Dr. Kushal Kharel | ${consultantTitle} & Online Therapy`}
    </p>
  );
}

// The "what Dr. Kushal treats" list shown in the intro of every abroad page.
export function TreatedList() {
  return (
    <div className="mt-8 max-w-3xl">
      <h2 className="text-lg font-bold text-stone-950">
        What Dr. Kushal Kharel treats for Nepalis abroad
      </h2>
      <ul className="mt-3 grid gap-x-6 gap-y-2 sm:grid-cols-2">
        {conditionsTreated.map((item) => (
          <li key={item} className="flex items-start gap-2 leading-7 text-stone-700">
            <Check size={18} className="mt-1 shrink-0 text-sage-700" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Small row of facts shown under the hero on every online-care page.
export function OnlineFactsRow() {
  const facts = [
    { icon: Video, label: "Google Meet or WhatsApp video call" },
    { icon: Languages, label: "Nepali or English" },
    { icon: Clock3, label: "Arranged around your time zone and work shift" },
    { icon: Zap, label: "Urgent requests prioritised" },
    { icon: ShieldCheck, label: "Private and confidential" },
    { icon: CreditCard, label: "Pay by card or bank transfer" },
  ];

  return (
    <ul className="mt-8 flex flex-wrap gap-3">
      {facts.map(({ icon: Icon, label }) => (
        <li
          key={label}
          className="inline-flex items-center gap-2 rounded-full border border-sage-200 bg-sage-50 px-4 py-2 text-sm font-semibold text-sage-900"
        >
          <Icon size={16} aria-hidden="true" />
          {label}
        </li>
      ))}
    </ul>
  );
}

// The four conditions Dr. Kushal treats by video, each with the approach used.
export function OnlineTreatmentCards({
  id,
  heading,
  intro,
}: {
  id?: string;
  heading: string;
  intro?: string;
}) {
  return (
    <section id={id} className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
      <h2 className="text-3xl font-bold text-stone-950">{heading}</h2>
      {intro && <p className="mt-4 max-w-3xl leading-8 text-stone-600">{intro}</p>}
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {onlineTreatments.map((item) => (
          <div
            key={item.id}
            className="flex flex-col rounded-lg border border-stone-200 bg-white p-6 shadow-sm"
          >
            <p className="text-sm font-semibold uppercase tracking-[2px] text-sage-700">
              {item.condition}
            </p>
            <h3 className="mt-3 text-2xl font-bold text-stone-950">{item.approach}</h3>
            <p className="mt-3 flex-1 leading-7 text-stone-600">{item.detail}</p>
            <Link href={item.href} className="mt-5 font-semibold text-sage-700 underline">
              {item.linkLabel}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export function FaqList({ faqs }: { faqs: OnlineFaq[] }) {
  return (
    <div className="mt-8 space-y-5">
      {faqs.map((faq) => (
        <div key={faq.question} className="rounded-lg border border-stone-200 p-5">
          <h3 className="font-bold text-sage-950">{faq.question}</h3>
          <p className="mt-2 leading-7 text-stone-700">{faq.answer}</p>
        </div>
      ))}
    </div>
  );
}
