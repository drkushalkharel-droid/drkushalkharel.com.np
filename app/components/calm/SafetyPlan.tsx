"use client";

import { useState } from "react";
import PlanOutput from "./PlanOutput";

const sections = [
  { id: "signs", title: "1. My warning signs", ne: "मेरा चेतावनीका सङ्केत", help: "Thoughts, moods or situations that tell me a crisis may be starting.", ph: "e.g. not sleeping, staying alone, thinking I am a burden", def: "" },
  { id: "coping", title: "2. Things I can do on my own to calm down", ne: "आफैं गर्न सकिने कुरा", help: "Things that help me cope without contacting anyone.", ph: "e.g. breathing exercise, a walk, music, prayer", def: "" },
  { id: "places", title: "3. People and places that give me company", ne: "साथ दिने मान्छे र ठाउँ", help: "Somewhere or someone to be around, even if I do not talk about the crisis.", ph: "Name, phone, place", def: "" },
  { id: "people", title: "4. People I can ask for help", ne: "मदत माग्न सकिने मान्छे", help: "Two or three trusted people. Ask them beforehand if they are willing.", ph: "Name and phone number", def: "" },
  { id: "pros", title: "5. Professionals and services to contact", ne: "सम्पर्क गर्ने डाक्टर र सेवा", help: "My doctor or clinic, and the emergency options.", ph: "", def: "National Suicide Prevention Helpline: 1166 (free)\nNearest hospital emergency room: " },
  { id: "safe", title: "6. Making my surroundings safer", ne: "वरिपरि सुरक्षित बनाउने", help: "Ways to put distance between me and anything I could use to harm myself, for example giving medicines or pesticides to someone I trust to keep.", ph: "e.g. ask my brother to keep my tablets", def: "" },
  { id: "reason", title: "One reason for living", ne: "बाँच्नुका लागि एउटा कारण", help: "Something or someone that matters to me.", ph: "", def: "" },
];

export default function SafetyPlan() {
  const [v, setV] = useState<Record<string, string>>(() => Object.fromEntries(sections.map((s) => [s.id, s.def])));
  return (
    <>
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        {sections.map((s) => (
          <div key={s.id} className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
            <label htmlFor={`sp-${s.id}`} className="block text-lg font-bold">{s.title}</label>
            <span lang="ne" className="block text-sage-800">{s.ne}</span>
            <span className="mt-1 block text-sm text-stone-600">{s.help}</span>
            <textarea
              id={`sp-${s.id}`}
              rows={4}
              value={v[s.id]}
              placeholder={s.ph}
              onChange={(e) => setV({ ...v, [s.id]: e.target.value })}
              className="mt-3 w-full rounded-lg border border-stone-300 p-3 text-base"
            />
          </div>
        ))}
      </form>
      <PlanOutput
        heading="My safety plan"
        filename="my-safety-plan"
        lines={sections.map((s) => ({ label: s.title, value: v[s.id] }))}
      />
    </>
  );
}
