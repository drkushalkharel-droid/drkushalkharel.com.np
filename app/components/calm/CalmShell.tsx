import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
import CrisisBar from "./CrisisBar";

export const calmTools = [
  { href: "/calm-now/breathing-exercise/", title: "Breathing exercise", ne: "सास फेर्ने अभ्यास", note: "For panic, racing heart, tight chest" },
  { href: "/calm-now/grounding-5-4-3-2-1/", title: "5-4-3-2-1 grounding", ne: "ग्राउन्डिङ", note: "For spiralling thoughts, feeling unreal" },
  { href: "/calm-now/stop-technique/", title: "STOP technique", ne: "रोक्नुहोस् (STOP)", note: "Before you react or act on an urge" },
  { href: "/calm-now/tipp-technique/", title: "TIPP technique", ne: "TIPP प्रविधि", note: "For very intense emotion, fast" },
  { href: "/calm-now/feelings-wheel/", title: "Feelings wheel", ne: "भावनाको चक्र", note: "When you cannot name what you feel" },
  { href: "/calm-now/muscle-relaxation/", title: "Muscle relaxation", ne: "मांसपेशी खुकुलो पार्ने", note: "For tension, stress and bedtime" },
  { href: "/calm-now/thought-record/", title: "Thought record", ne: "विचार लेखा", note: "For worry and low mood, once calmer" },
  { href: "/calm-now/safety-plan/", title: "Safety plan builder", ne: "सुरक्षा योजना", note: "Make one now, while you feel able" },
];

export default function CalmShell({
  current,
  title,
  titleNe,
  intro,
  children,
}: {
  current?: string;
  title: string;
  titleNe?: string;
  intro: string;
  children: React.ReactNode;
}) {
  const others = calmTools.filter((t) => t.href !== current);
  return (
    <main className="min-h-screen bg-stone-50 pb-20 pt-20 text-stone-900">
      <CrisisBar />
      <div className="mx-auto max-w-4xl px-6 pt-8 lg:px-8">
        <nav aria-label="Breadcrumb" className="text-sm text-stone-600">
          <Link href="/" className="underline underline-offset-4">Home</Link>
          {" / "}
          {current ? (
            <Link href="/calm-now/" className="underline underline-offset-4">Calm Now</Link>
          ) : (
            <span>Calm Now</span>
          )}
        </nav>
        <h1 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">{title}</h1>
        {titleNe && <p lang="ne" className="mt-2 text-xl font-semibold text-sage-800">{titleNe}</p>}
        <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-700">{intro}</p>

        <div className="mt-8">{children}</div>

        <section className="mt-14" aria-labelledby="more-tools">
          <h2 id="more-tools" className="text-2xl font-bold">
            {current ? "Other tools" : "All tools"}
          </h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {others.map((t) => (
              <li key={t.href}>
                <Link href={t.href} className="block h-full rounded-xl border border-stone-200 bg-white p-4 hover:border-sage-600">
                  <span className="block font-bold">{t.title}</span>
                  <span lang="ne" className="block text-sm text-sage-800">{t.ne}</span>
                  <span className="mt-1 block text-sm text-stone-600">{t.note}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12 rounded-2xl bg-sage-950 p-7 text-white" aria-labelledby="keep-going">
          <h2 id="keep-going" className="text-2xl font-bold">If this keeps happening, talk to someone</h2>
          <p className="mt-3 leading-7 text-sage-100">
            These tools can ease a hard moment. They do not treat the cause. If panic, overwhelming emotion or low mood
            keeps coming back, a confidential consultation with Dr. Kushal Kharel, Consultant Psychiatrist in Kathmandu,
            can help.
          </p>
          <p lang="ne" className="mt-2 leading-7 text-sage-100">
            यस्तो अवस्था बारम्बार आइरहन्छ भने मनोचिकित्सकसँग गोप्य परामर्श लिनुहोस्।
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href="tel:+9779861800547" className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-white px-5 font-bold text-sage-950">
              <Phone size={18} aria-hidden="true" /> Call +977 9861800547
            </a>
            <Link href="/book/" className="inline-flex min-h-12 items-center gap-2 rounded-lg border border-white/40 px-5 font-bold text-white">
              <MessageCircle size={18} aria-hidden="true" /> Book a consultation
            </Link>
          </div>
        </section>

        <p className="mt-8 text-sm leading-6 text-stone-600">
          General self-help information, not medical advice or a substitute for care. See the{" "}
          <Link href="/medical-disclaimer/" className="underline underline-offset-4">medical disclaimer</Link>. Nothing you do
          on this page is saved or sent anywhere.
        </p>
      </div>
    </main>
  );
}
