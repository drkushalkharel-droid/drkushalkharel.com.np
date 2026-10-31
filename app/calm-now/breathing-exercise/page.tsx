import type { Metadata } from "next";
import CalmShell from "../../components/calm/CalmShell";
import BreathingTool from "../../components/calm/BreathingTool";
import { metaFor } from "../../lib/seoText";

const path = "/calm-now/breathing-exercise/";
const meta = metaFor(path, {
  title: "Guided Breathing Exercise for Panic & Anxiety",
  description: "A free guided breathing exercise with a moving circle and optional soft sound, for panic, anxiety and a racing heart. English and Nepali. Start in one tap.",
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
      title="Guided Breathing Exercise for Panic and Anxiety"
      titleNe="सास फेर्ने अभ्यास"
      intro="Follow the circle. Breathe in as it grows and out as it shrinks. A slow, longer breath out is a simple way to help a racing heart and fast breathing settle."
    >
      <BreathingTool />
      <section className="mt-10 max-w-3xl space-y-3 leading-8 text-stone-700">
        <h2 className="text-2xl font-bold text-stone-900">How to use it</h2>
        <p>Sit with your back supported and your shoulders loose. Breathe gently into your belly rather than lifting your chest. You do not need to breathe deeply, only slowly.</p>
        <p>Choose the slow out-breath pattern if you are unsure. Three minutes is enough for most people to notice a change. If your thoughts wander, that is normal; return to the circle.</p>
        <p lang="ne">पेटमा सास लिनुहोस्, छाती उचाल्न जरुरी छैन। सास गहिरो होइन, ढिलो हुनुपर्छ। चक्कर आए वा बेचैनी बढे रोकेर सामान्य रूपमा सास फेर्नुहोस्।</p>
      </section>
    </CalmShell>
  );
}
