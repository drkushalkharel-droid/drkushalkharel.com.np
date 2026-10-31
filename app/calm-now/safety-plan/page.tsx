import type { Metadata } from "next";
import Link from "next/link";
import CalmShell from "../../components/calm/CalmShell";
import SafetyPlan from "../../components/calm/SafetyPlan";
import { metaFor } from "../../lib/seoText";

const path = "/calm-now/safety-plan/";
const meta = metaFor(path, {
  title: "Make Your Own Safety Plan (Free, Private)",
  description: "Build a personal safety plan step by step: warning signs, coping steps, people to call, helpline 1166 and safer surroundings. Print or download. English and Nepali.",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: path },
};

export default function Page() {
  return (
    <CalmShell
      current={path}
      title="Make Your Own Safety Plan"
      titleNe="आफ्नै सुरक्षा योजना बनाउनुहोस्"
      intro="A safety plan is a short written list you make while you feel okay, to use if thoughts of harming yourself return. It follows the widely used Stanley-Brown format. It works best when made with a clinician or someone you trust."
    >
      <SafetyPlan />
      <section className="mt-10 max-w-3xl space-y-3 leading-8 text-stone-700">
        <h2 className="text-2xl font-bold text-stone-900">How to use it</h2>
        <p>Keep the plan where you can find it fast, such as a photo on your phone. If a step does not help, move to the next one. If you cannot keep yourself safe, skip straight to step 5: call 1166 or go to the nearest hospital emergency room.</p>
        <p>Read more in <Link href="/knowledge/suicide-safety-plan-nepal/" className="underline underline-offset-4">our guide to suicide safety plans</Link>.</p>
      </section>
    </CalmShell>
  );
}
