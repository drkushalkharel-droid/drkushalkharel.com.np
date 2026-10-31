import type { Metadata } from "next";
import CalmShell from "../../components/calm/CalmShell";
import FeelingsWheel from "../../components/calm/FeelingsWheel";
import { metaFor } from "../../lib/seoText";

const path = "/calm-now/feelings-wheel/";
const meta = metaFor(path, {
  title: "Feelings Wheel: Name What You Feel",
  description: "An interactive feelings wheel in English and Nepali to help you find the right word for what you feel, with a calming skill suggested for each emotion. Free.",
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
      title="Feelings Wheel: Name What You Feel"
      titleNe="भावनाको चक्र: आफ्नो भावनालाई नाम दिनुहोस्"
      intro="When everything feels like one big knot, finding a more exact word can loosen it. Start from the centre with a broad feeling and move outward to a closer one."
    >
      <FeelingsWheel />
      <section className="mt-10 max-w-3xl space-y-3 leading-8 text-stone-700">
        <h2 className="text-2xl font-bold text-stone-900">Why name a feeling?</h2>
        <p>Putting a feeling into words often makes it feel more manageable, and gives you something clear to say to a family member, friend or clinician. There are no wrong answers, and you can feel more than one thing at once.</p>
        <p lang="ne">भावनालाई शब्द दिँदा त्यो सम्हाल्न सजिलो हुन्छ र अरूलाई बुझाउन पनि सजिलो हुन्छ। एकै समयमा धेरै भावना हुन सक्छन्।</p>
      </section>
    </CalmShell>
  );
}
