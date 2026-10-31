import type { Metadata } from "next";
import CalmShell from "../../components/calm/CalmShell";
import GuidedSteps, { type Step } from "../../components/calm/GuidedSteps";
import { metaFor } from "../../lib/seoText";

const path = "/calm-now/muscle-relaxation/";
const meta = metaFor(path, {
  title: "Guided Muscle Relaxation for Stress & Sleep",
  description: "A guided progressive muscle relaxation exercise with timers: tense and release each muscle group to ease stress, tension and trouble sleeping. English and Nepali.",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: path },
};

const how = ["Tense gently for about 5 seconds, then let go and rest for the rest of the timer.", "Press Start timer when you are ready."];
const howNe = "लगभग ५ सेकेन्ड हल्का कस्नुहोस्, त्यसपछि पूरै छोडेर आराम गर्नुहोस्।";

const steps: Step[] = [
  { key: "1", title: "Hands and forearms", ne: "हात र पाखुरा", body: ["Make two fists and squeeze.", ...how], bodyNe: howNe, seconds: 15 },
  { key: "2", title: "Upper arms", ne: "माथिल्लो पाखुरा", body: ["Bend your elbows and press your arms in toward your body.", ...how], bodyNe: howNe, seconds: 15 },
  { key: "3", title: "Shoulders and neck", ne: "काँध र घाँटी", body: ["Lift your shoulders toward your ears.", ...how], bodyNe: howNe, seconds: 15 },
  { key: "4", title: "Face", ne: "अनुहार", body: ["Scrunch your forehead, eyes and jaw gently.", ...how], bodyNe: howNe, seconds: 15 },
  { key: "5", title: "Stomach and back", ne: "पेट र ढाड", body: ["Tighten your stomach as if bracing. Do not arch your back.", ...how], bodyNe: howNe, seconds: 15 },
  { key: "6", title: "Legs and feet", ne: "खुट्टा", body: ["Point your toes, then tighten your thighs and calves.", ...how], bodyNe: howNe, seconds: 15 },
];

export default function Page() {
  return (
    <CalmShell
      current={path}
      title="Guided Muscle Relaxation for Stress and Sleep"
      titleNe="मांसपेशी खुकुलो पार्ने अभ्यास"
      intro="Progressive muscle relaxation means tensing and then releasing one muscle group at a time, so you notice the difference between tension and ease. It takes about five minutes."
    >
      <div className="mb-6 rounded-xl border border-amber-400 bg-amber-50 p-5 leading-7 text-stone-800">
        <p>Skip any area that is injured or painful, and never tense so hard that it hurts. If you have a medical condition affecting muscles, joints or blood pressure, check with your doctor first.</p>
        <p lang="ne" className="mt-1">चोट वा दुखेको भाग छोड्नुहोस्। दुख्ने गरी नकस्नुहोस्।</p>
      </div>
      <GuidedSteps
        steps={steps}
        finishTitle="Rest here for a moment."
        finishBody="Take a few slow breaths and notice how your body feels. You can do this every day, and it can help to practise at bedtime."
        finishNe="केही ढिलो सास लिनुहोस् र शरीर कस्तो लाग्छ ध्यान दिनुहोस्। दिनदिनै अभ्यास गर्न सकिन्छ।"
      />
    </CalmShell>
  );
}
