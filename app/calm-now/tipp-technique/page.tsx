import type { Metadata } from "next";
import CalmShell from "../../components/calm/CalmShell";
import GuidedSteps, { type Step } from "../../components/calm/GuidedSteps";
import { metaFor } from "../../lib/seoText";

const path = "/calm-now/tipp-technique/";
const meta = metaFor(path, {
  title: "TIPP Skill: Calm Intense Emotions Fast",
  description: "A guided TIPP skill (Temperature, Intense exercise, Paced breathing, Paired muscle relaxation) for very intense emotions. Step by step with timers. Free.",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: path },
};

// TODO: Dr. Kharel to review the safety wording and the Nepali before wider promotion.
const steps: Step[] = [
  { key: "T", title: "Temperature", ne: "तापक्रम (चिसो)", body: ["Press a cold, wet cloth or a cold pack against your eyes and upper cheeks for about 30 seconds. Keep breathing slowly. It should feel cool, never painful.", "Skip this step if you have a heart condition or a very slow heart rate, or if it does not feel safe."], bodyNe: "चिसो भिजेको कपडा वा कोल्ड प्याक आँखा र गालाको माथिल्लो भागमा करिब ३० सेकेन्ड राख्नुहोस्। सास ढिलो फेर्नुहोस्। यो असजिलो नहोस्।", seconds: 30 },
  { key: "I", title: "Intense exercise", ne: "तीव्र व्यायाम", body: ["Do something vigorous for about one minute: jumping jacks, running on the spot, fast stair climbing.", "Stop if you feel pain, dizziness or you cannot catch your breath. Skip it if you have heart or lung problems or are pregnant, unless your doctor has said it is fine."], bodyNe: "करिब एक मिनेट जोडले व्यायाम गर्नुहोस्: उफ्रिने, ठाउँमै दगुर्ने, छिटो सिँढी चढ्ने। दुखाइ वा चक्कर आए रोक्नुहोस्।", seconds: 60 },
  { key: "P", title: "Paced breathing", ne: "तालमा सास", body: ["Breathe in for 4 seconds and out for 6 seconds. Make the out-breath longer than the in-breath."], bodyNe: "४ सेकेन्ड सास भित्र, ६ सेकेन्ड बाहिर। छोड्ने सास लामो राख्नुहोस्।", seconds: 90, link: { href: "/calm-now/breathing-exercise/", label: "Use the guided breathing circle instead" } },
  { key: "P", title: "Paired muscle relaxation", ne: "मांसपेशी खुकुलो पार्ने", body: ["Breathe in and tense one muscle group for about 5 seconds: fists, then shoulders, then legs.", "Breathe out, say \"relax\" in your mind, and let go. Notice the difference. Do not tense so hard that it hurts."], bodyNe: "सास लिँदै मुट्ठी, काँध वा खुट्टा ५ सेकेन्ड कस्नुहोस्। सास छोड्दै \"खुकुलो\" भन्नुहोस् र छोडिदिनुहोस्।", seconds: 60 },
];

export default function Page() {
  return (
    <CalmShell
      current={path}
      title="TIPP Skill: Calm Intense Emotions Fast"
      titleNe="TIPP प्रविधि: तीव्र भावना छिटो शान्त पार्ने"
      intro="TIPP is a crisis-survival skill from Dialectical Behaviour Therapy (DBT). It works through the body rather than through thinking, which helps when emotion is too intense to reason with."
    >
      <div className="mb-6 rounded-xl border border-amber-400 bg-amber-50 p-5 leading-7 text-stone-800">
        <h2 className="text-lg font-bold">Safety first</h2>
        <p className="mt-1">Cold and hard exercise are not right for everyone. Talk to your doctor first if you have a heart condition, fainting spells, are pregnant, or have an eating disorder. Skip any step that does not feel safe. Breathing and muscle relaxation are the gentlest steps.</p>
        <p lang="ne" className="mt-1">मुटुको रोग, बेहोसी, गर्भावस्था वा खानपानको विकार भए पहिले डाक्टरसँग सोध्नुहोस्। सुरक्षित नलागेको चरण छोड्नुहोस्।</p>
      </div>
      <GuidedSteps
        steps={steps}
        finishTitle="Your body has had a chance to settle."
        finishBody="TIPP lowers the intensity so you can think again. Once you feel steadier, try the STOP technique or the feelings wheel, and reach out to someone you trust."
        finishNe="TIPP ले तीव्रता घटाउँछ ताकि फेरि सोच्न सकियोस्। अलि शान्त भएपछि STOP वा भावनाको चक्र प्रयोग गर्नुहोस् र कसैसँग कुरा गर्नुहोस्।"
      />
      <section className="mt-10 max-w-3xl space-y-3 leading-8 text-stone-700">
        <h2 className="text-2xl font-bold text-stone-900">What TIPP stands for</h2>
        <p><strong>T</strong>emperature, <strong>I</strong>ntense exercise, <strong>P</strong>aced breathing and <strong>P</strong>aired muscle relaxation. Use one or all four, in any order. It is meant for peak moments, not as everyday treatment.</p>
        <p>If you often reach this level of distress, or feel you might hurt yourself, please speak to a clinician. TIPP is a first aid skill, not a cure.</p>
      </section>
    </CalmShell>
  );
}
