import type { Metadata } from "next";
import CalmShell from "../../components/calm/CalmShell";
import ThoughtRecord from "../../components/calm/ThoughtRecord";
import { metaFor } from "../../lib/seoText";

const path = "/calm-now/thought-record/";
const meta = metaFor(path, {
  title: "Thought Record: Challenge Worry and Low Mood",
  description: "A free CBT thought record worksheet: write the situation, feeling and thought, weigh the evidence and reach a more balanced view. Print or download. English and Nepali.",
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
      title="Thought Record: Challenge Worry and Low Mood"
      titleNe="विचार लेखा: चिन्ता र निराशालाई जाँच्नुहोस्"
      intro="A thought record is a core tool in cognitive behavioural therapy (CBT). You write down a distressing thought, look at the facts for and against it, and find a fairer way to see the situation. Best used once the strongest feeling has eased, so try breathing or grounding first."
    >
      <ThoughtRecord />
    </CalmShell>
  );
}
