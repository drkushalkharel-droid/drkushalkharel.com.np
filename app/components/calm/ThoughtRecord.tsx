"use client";

import { useState } from "react";
import PlanOutput from "./PlanOutput";

const fields = [
  { id: "situation", title: "1. What happened?", ne: "के भयो?", help: "Where were you, who was there, what was going on? Facts only.", rows: 3 },
  { id: "feeling", title: "2. What did you feel?", ne: "के महसुस भयो?", help: "One or two words, such as anxious, sad, ashamed, angry.", rows: 1 },
  { id: "thought", title: "3. What thought went through your mind?", ne: "के कुरा मनमा आयो?", help: "The exact words, such as \"I will fail\" or \"nobody cares\".", rows: 2 },
  { id: "for", title: "4. Facts that support the thought", ne: "यो विचारको पक्षमा तथ्य", help: "What actually happened that suggests it is true?", rows: 3 },
  { id: "against", title: "5. Facts that do not fit the thought", ne: "यो विचारको विपक्षमा तथ्य", help: "What would you tell a friend with the same thought? Has anything gone differently before?", rows: 3 },
  { id: "balanced", title: "6. A more balanced thought", ne: "सन्तुलित विचार", help: "A fairer sentence that takes both sides into account. It does not have to be cheerful, only accurate.", rows: 2 },
];

export default function ThoughtRecord() {
  const [v, setV] = useState<Record<string, string>>({});
  const [before, setBefore] = useState(70);
  const [after, setAfter] = useState(50);
  const set = (id: string, s: string) => setV({ ...v, [id]: s });

  const slider = (label: string, ne: string, value: number, on: (n: number) => void, id: string) => (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
      <label htmlFor={id} className="block text-lg font-bold">{label}: <span className="tabular-nums">{value}</span> / 100</label>
      <span lang="ne" className="block text-sage-800">{ne}</span>
      <input id={id} type="range" min={0} max={100} step={5} value={value} onChange={(e) => on(Number(e.target.value))} className="mt-3 h-8 w-full" />
      <span className="flex justify-between text-sm text-stone-600"><span>0 none</span><span>100 the worst</span></span>
    </div>
  );

  return (
    <>
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        {fields.map((f) => (
          <div key={f.id} className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
            <label htmlFor={`tr-${f.id}`} className="block text-lg font-bold">{f.title}</label>
            <span lang="ne" className="block text-sage-800">{f.ne}</span>
            <span className="mt-1 block text-sm text-stone-600">{f.help}</span>
            <textarea id={`tr-${f.id}`} rows={f.rows} value={v[f.id] ?? ""} onChange={(e) => set(f.id, e.target.value)} className="mt-3 w-full rounded-lg border border-stone-300 p-3 text-base" />
            {f.id === "feeling" && <div className="mt-4">{slider("How strong, from 0 to 100?", "कति तीव्र?", before, setBefore, "tr-before")}</div>}
          </div>
        ))}
        {slider("How strong is the feeling now?", "अहिले कति तीव्र?", after, setAfter, "tr-after")}
      </form>
      <PlanOutput
        heading="My thought record"
        filename="my-thought-record"
        lines={[
          ...fields.map((f) => ({ label: f.title, value: f.id === "feeling" && v.feeling ? `${v.feeling} (${before}/100)` : v[f.id] ?? "" })),
          { label: "Feeling strength after", value: v.balanced ? `${after}/100` : "" },
        ]}
      />
    </>
  );
}
