import type { Metadata } from "next";
import Link from "next/link";
import CalmShell from "../components/calm/CalmShell";
import { metaFor } from "../lib/seoText";

const path = "/calm-now/";
const meta = metaFor(path, {
  title: "Calm Now: Breathing & Grounding Tools",
  description: "Free guided tools for a moment of distress: breathing exercise, 5-4-3-2-1 grounding, STOP, TIPP and a feelings wheel, in English and Nepali. No sign-up.",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: path },
};

const picks = [
  { q: "My heart is racing, I cannot breathe properly", ne: "मुटु छिटो ढुकढुक, सास फेर्न गाह्रो", href: "/calm-now/breathing-exercise/", go: "Breathing exercise" },
  { q: "My thoughts are spiralling or nothing feels real", ne: "विचार रोकिँदैनन्, सबै अवास्तविक लाग्छ", href: "/calm-now/grounding-5-4-3-2-1/", go: "5-4-3-2-1 grounding" },
  { q: "I am about to explode or do something I will regret", ne: "रिसले फुट्न लागेको, पछुताउने काम गर्लाजस्तो", href: "/calm-now/stop-technique/", go: "STOP technique" },
  { q: "The emotion is too big to think through", ne: "भावना यति ठूलो कि सोच्नै सकिँदैन", href: "/calm-now/tipp-technique/", go: "TIPP skill" },
  { q: "I feel awful but cannot say what it is", ne: "नराम्रो लागिरहेको छ तर के हो भन्न सक्दिनँ", href: "/calm-now/feelings-wheel/", go: "Feelings wheel" },
];

export default function Page() {
  return (
    <CalmShell
      title="Calm Now: Tools for When You Feel Overwhelmed"
      titleNe="अहिले शान्त हुनुहोस्"
      intro="Short, guided exercises you can use right now, on your phone, in English or Nepali. Pick the line that sounds most like you at this moment."
    >
      <ul className="space-y-3">
        {picks.map((p) => (
          <li key={p.href}>
            <Link href={p.href} className="flex min-h-20 flex-col justify-between gap-3 rounded-2xl border-2 border-sage-300 bg-white p-5 hover:border-sage-700 sm:flex-row sm:items-center">
              <span>
                <span className="block text-lg font-bold">{p.q}</span>
                <span lang="ne" className="block text-sage-800">{p.ne}</span>
              </span>
              <span className="shrink-0 rounded-lg bg-sage-800 px-4 py-2 text-center font-bold text-white">{p.go}</span>
            </Link>
          </li>
        ))}
      </ul>
      <section className="mt-10 max-w-3xl space-y-3 leading-8 text-stone-700">
        <h2 className="text-2xl font-bold text-stone-900">What these tools are, and are not</h2>
        <p>They are everyday skills used in cognitive behavioural therapy, mindfulness-based approaches and DBT. They can take the edge off a hard moment. They do not diagnose or treat a mental health condition.</p>
        <p>Nothing you do here is stored or sent. There is no account and no sign-up. If distress keeps coming back, or you cannot cope, please see a clinician. You can <Link href="/book/" className="underline underline-offset-4">book a confidential consultation</Link>, or take a short <Link href="/screening/" className="underline underline-offset-4">mental health screening</Link>.</p>
      </section>
    </CalmShell>
  );
}
