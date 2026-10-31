import type { Metadata } from "next";
import CalmShell from "../../components/calm/CalmShell";
import GuidedSteps, { type Step } from "../../components/calm/GuidedSteps";
import { metaFor } from "../../lib/seoText";

const path = "/calm-now/grounding-5-4-3-2-1/";
const meta = metaFor(path, {
  title: "5-4-3-2-1 Grounding Exercise for Anxiety",
  description: "A guided 5-4-3-2-1 grounding exercise for anxiety, panic and racing thoughts. Use your five senses to come back to the present. English and Nepali, free.",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: path },
};

const steps: Step[] = [
  { key: "5", title: "things you can see", ne: "देख्न सकिने ५ चीज", body: ["Look around slowly. Name five things you can see. Say them in your head or out loud.", "Tap each time you find one."], bodyNe: "वरिपरि बिस्तारै हेर्नुहोस् र देखेका ५ वटा चीजको नाम लिनुहोस्।", taps: 5 },
  { key: "4", title: "things you can feel", ne: "छुन सकिने ४ चीज", body: ["Notice four things you can feel: your feet on the floor, the seat under you, your clothes, the air on your skin."], bodyNe: "खुट्टा भुइँमा, बसेको ठाउँ, कपडा, छालामा हावा: ४ वटा महसुस गर्नुहोस्।", taps: 4 },
  { key: "3", title: "things you can hear", ne: "सुन्न सकिने ३ आवाज", body: ["Listen. Find three sounds, near or far. Include the quiet sounds."], bodyNe: "नजिक वा टाढाका ३ वटा आवाज सुन्नुहोस्।", taps: 3 },
  { key: "2", title: "things you can smell", ne: "सुँघ्न सकिने २ गन्ध", body: ["Find two smells. If nothing is near, think of two smells you like, such as tea or rain on earth."], bodyNe: "२ वटा गन्ध पत्ता लगाउनुहोस्। नभए मन पर्ने २ गन्ध सम्झनुहोस्।", taps: 2 },
  { key: "1", title: "thing you can taste", ne: "चाख्न सकिने १ स्वाद", body: ["Notice one taste in your mouth, or take a slow sip of water and notice how it feels."], bodyNe: "मुखमा के स्वाद छ ध्यान दिनुहोस्, वा बिस्तारै पानी पिउनुहोस्।", taps: 1 },
];

export default function Page() {
  return (
    <CalmShell
      current={path}
      title="5-4-3-2-1 Grounding Exercise for Anxiety"
      titleNe="५-४-३-२-१ ग्राउन्डिङ अभ्यास"
      intro="When thoughts are racing or things feel unreal, bring your attention to the room around you, one sense at a time. This takes about two minutes."
    >
      <GuidedSteps
        steps={steps}
        finishTitle="You are here, in this moment."
        finishBody="Take one slow breath. Notice if anything feels a little different. You can repeat the exercise as many times as you like."
        finishNe="एक लामो सास लिनुहोस्। केही फरक महसुस भयो कि ध्यान दिनुहोस्। चाहेमा फेरि गर्न सक्नुहुन्छ।"
      />
      <section className="mt-10 max-w-3xl space-y-3 leading-8 text-stone-700">
        <h2 className="text-2xl font-bold text-stone-900">Why grounding helps</h2>
        <p>Anxiety pulls attention into worries about what might happen. Grounding gives the mind a simple, concrete job in the present, using what your senses are picking up right now. It is a common skill in therapy for anxiety and trauma-related distress.</p>
        <p>If looking around feels unsafe or frightening, close your eyes and begin at the touch step instead. If you feel unsafe, or this brings back distressing memories, stop and speak to someone you trust or a clinician.</p>
      </section>
    </CalmShell>
  );
}
