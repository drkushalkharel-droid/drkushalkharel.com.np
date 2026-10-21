import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import { countryFocusContext, focusConditions } from "../data/abroadFocus";

// Per-country block on the regional pages: the six conditions Nepalis abroad most often
// ask about, one sentence of local context, and the message-or-call route to a booking.
export default function AbroadFocusPanel({ slug, place }: { slug: string; place: string }) {
  const context = countryFocusContext[slug];

  return (
    <div className="mt-6 rounded-lg border border-sage-200 bg-sage-50 p-6">
      <h4 className="text-lg font-bold text-sage-950">
        Video consultation with a psychiatrist from {place}: anxiety, depression, gambling, alcohol, opioids and anger
      </h4>
      <p className="mt-3 leading-8 text-stone-800">
        You do not need to travel to Nepal. Message or call Dr. Kushal Kharel, a Kathmandu consultant psychiatrist and
        certified CBT therapist, and arrange a confidential online video consultation from {place} in Nepali or English.
      </p>
      <ul className="mt-4 grid gap-3 md:grid-cols-2">
        {focusConditions.map((condition) => (
          <li key={condition.id} className="rounded-lg border border-sage-200 bg-white p-4 leading-7">
            <Link href={condition.href} className="font-semibold text-sage-800 underline underline-offset-2">
              {condition.label}
            </Link>
            <span className="text-stone-700">: {condition.summary}.</span>
          </li>
        ))}
      </ul>
      {context && (
        <p className="mt-4 leading-8 text-stone-800">
          <span className="font-semibold">Local context in {place}:</span> {context} Rules and helpline numbers change, so
          confirm them locally.
        </p>
      )}
      <div className="mt-4 rounded-lg bg-white p-4 leading-7 text-stone-800">
        <p className="font-semibold">How to book from {place}</p>
        <ol className="mt-2 list-decimal space-y-1 pl-5">
          <li>Send a WhatsApp message or call with your country and the times that suit you.</li>
          <li>A slot is arranged around your time zone and work shifts.</li>
          <li>Meet by Google Meet or WhatsApp video; the first session is an assessment and plan.</li>
        </ol>
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href="https://wa.me/9779861800547"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-sage-800 px-5 py-3 font-semibold text-white transition hover:bg-sage-900"
          >
            <MessageCircle size={18} aria-hidden="true" /> WhatsApp +977 9861800547
          </a>
          <a
            href="tel:+9779861800547"
            className="inline-flex items-center gap-2 rounded-lg border border-sage-300 bg-white px-5 py-3 font-semibold text-sage-900 transition hover:bg-sage-100"
          >
            <Phone size={18} aria-hidden="true" /> Call +977 9861800547
          </a>
        </div>
      </div>
      <p className="mt-4 text-sm leading-7 text-stone-600">
        Confidential. Stopping alcohol or opioids suddenly can be medically dangerous, so get advice before you stop, and
        use local emergency services for overdose, severe withdrawal, or thoughts of ending your life. Medication is
        decided after assessment, and prescribing rules differ by country.
      </p>
    </div>
  );
}
