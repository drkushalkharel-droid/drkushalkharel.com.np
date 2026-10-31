import type { Metadata } from "next";
import CalmShell from "../../components/calm/CalmShell";
import GuidedSteps, { type Step } from "../../components/calm/GuidedSteps";
import { metaFor } from "../../lib/seoText";

const path = "/calm-now/stop-technique/";
const meta = metaFor(path, {
  title: "STOP Technique: Pause Before You React",
  description: "A guided STOP technique (Stop, Take a breath, Observe, Proceed) to pause before acting on anger, panic or a strong urge. Step by step, English and Nepali.",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: path },
};

const steps: Step[] = [
  { key: "S", title: "Stop", ne: "रोकिनुहोस्", body: ["Pause. Do not act, send, or say anything yet.", "Put your hands down, step back, or sit. Let the moment slow down."], bodyNe: "रोकिनुहोस्। अहिले केही नगर्नुहोस्, नभन्नुहोस्, नपठाउनुहोस्।" },
  { key: "T", title: "Take a breath", ne: "सास लिनुहोस्", body: ["Breathe in slowly through your nose, then out slowly through your mouth. Do this for 30 seconds."], bodyNe: "नाकबाट बिस्तारै सास लिनुहोस्, मुखबाट बिस्तारै छोड्नुहोस्।", seconds: 30, link: { href: "/calm-now/breathing-exercise/", label: "Want a guided circle? Open the breathing exercise" } },
  { key: "O", title: "Observe", ne: "ध्यान दिनुहोस्", body: ["What am I thinking? What am I feeling? What is my body doing? What is actually happening around me?", "Thoughts are not always facts."], bodyNe: "के सोचिरहेको छु? के महसुस गर्दैछु? शरीरमा के भइरहेको छ? वरिपरि वास्तवमा के भएको छ?", link: { href: "/calm-now/feelings-wheel/", label: "Not sure what you feel? Use the feelings wheel" } },
  { key: "P", title: "Proceed mindfully", ne: "सोचेर अघि बढ्नुहोस्", body: ["Ask: what would help right now, for me and for this situation? Choose one small step and do it.", "If the urge is to harm yourself, do not stay alone with it. Call 1166 or go to the nearest hospital emergency room."], bodyNe: "अहिले मलाई र यो परिस्थितिलाई के सहयोगी हुन्छ? एउटा सानो कदम छान्नुहोस्। आफूलाई हानि गर्ने इच्छा भए एक्लै नबस्नुहोस्, 1166 मा फोन गर्नुहोस् वा अस्पताल जानुहोस्।" },
];

export default function Page() {
  return (
    <CalmShell
      current={path}
      title="STOP Technique: Pause Before You React"
      titleNe="STOP प्रविधि: प्रतिक्रिया दिनु अघि रोकिनुहोस्"
      intro="STOP is a short mindfulness skill for the moment before you react: when you are angry, panicking, about to send a message you may regret, or acting on a strong urge."
    >
      <GuidedSteps
        steps={steps}
        finishTitle="You gave yourself a pause."
        finishBody="That pause is the skill. Now act on the one small step you chose, or come back and repeat STOP if the feeling returns."
        finishNe="त्यही रोकिनु नै यो सीप हो। अब आफूले छानेको सानो कदम चाल्नुहोस्, वा भावना फर्किए फेरि STOP गर्नुहोस्।"
      />
      <section className="mt-10 max-w-3xl space-y-3 leading-8 text-stone-700">
        <h2 className="text-2xl font-bold text-stone-900">When to use STOP</h2>
        <p>Use it in an argument, before replying to a hurtful message, when you feel the urge to drink, gamble or use something, or when a wave of panic starts. With practice it becomes quicker and you can run through it in a few breaths.</p>
        <p>STOP does not make the feeling disappear. It makes a little room between the feeling and what you do next.</p>
      </section>
    </CalmShell>
  );
}
