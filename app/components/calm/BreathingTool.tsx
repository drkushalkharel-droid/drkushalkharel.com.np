"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import SoundToggle from "./SoundToggle";
import { useChime, usePrefersReducedMotion } from "./useChime";

type Phase = { label: string; ne: string; seconds: number; grow: boolean | null };

const patterns: { id: string; name: string; note: string; phases: Phase[] }[] = [
  {
    id: "slow",
    name: "Slow out-breath (in 4, out 6)",
    note: "A good first choice. The longer breath out helps the body settle.",
    phases: [
      { label: "Breathe in", ne: "सास भित्र लिनुहोस्", seconds: 4, grow: true },
      { label: "Breathe out", ne: "सास बाहिर छोड्नुहोस्", seconds: 6, grow: false },
    ],
  },
  {
    id: "even",
    name: "Even breathing (in 5, out 5)",
    note: "About six breaths a minute. Smooth and easy to follow.",
    phases: [
      { label: "Breathe in", ne: "सास भित्र लिनुहोस्", seconds: 5, grow: true },
      { label: "Breathe out", ne: "सास बाहिर छोड्नुहोस्", seconds: 5, grow: false },
    ],
  },
  {
    id: "box",
    name: "Box breathing (4-4-4-4)",
    note: "Includes short pauses. If pauses make you feel more anxious, use a different pattern.",
    phases: [
      { label: "Breathe in", ne: "सास भित्र लिनुहोस्", seconds: 4, grow: true },
      { label: "Pause", ne: "रोकिनुहोस्", seconds: 4, grow: null },
      { label: "Breathe out", ne: "सास बाहिर छोड्नुहोस्", seconds: 4, grow: false },
      { label: "Pause", ne: "रोकिनुहोस्", seconds: 4, grow: null },
    ],
  },
];

const lengths = [1, 3, 5];

export default function BreathingTool() {
  const [patternId, setPatternId] = useState("slow");
  const [minutes, setMinutes] = useState(3);
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(false);
  const [t, setT] = useState(0);
  const { soundOn, toggle, play } = useChime();
  const reduced = usePrefersReducedMotion();
  const lastPhase = useRef(-1);

  const pattern = patterns.find((p) => p.id === patternId)!;
  const cycle = useMemo(() => pattern.phases.reduce((n, p) => n + p.seconds, 0), [pattern]);

  const { index, remaining } = useMemo(() => {
    let pos = t % cycle;
    for (let i = 0; i < pattern.phases.length; i++) {
      if (pos < pattern.phases[i].seconds) return { index: i, remaining: pattern.phases[i].seconds - pos };
      pos -= pattern.phases[i].seconds;
    }
    return { index: 0, remaining: pattern.phases[0].seconds };
  }, [t, cycle, pattern]);

  const phase = pattern.phases[index];

  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => setT((n) => n + 1), 1000);
    return () => window.clearInterval(id);
  }, [running]);

  useEffect(() => {
    if (running && t >= minutes * 60) {
      setRunning(false);
      setDone(true);
      play(523, 2.4);
    }
  }, [t, running, minutes, play]);

  useEffect(() => {
    if (!running) {
      lastPhase.current = -1;
      return;
    }
    if (lastPhase.current !== index) {
      lastPhase.current = index;
      play(phase.grow === true ? 440 : phase.grow === false ? 330 : 392, 1.2);
    }
  }, [running, index, phase, play]);

  // The circle holds its last size while idle or paused; it grows on the in-breath and
  // shrinks on the out-breath over the phase's own length. Reduced motion: no size change.
  // A pause keeps the size of the breath before it.
  let full = false;
  for (let k = index; k >= 0; k--) {
    const g = pattern.phases[k].grow;
    if (g !== null) { full = g; break; }
  }
  const scale = reduced ? 0.8 : running && full ? 1 : 0.55;
  const duration = running && !reduced && phase.grow !== null ? phase.seconds : 0;

  const start = () => {
    setT(0);
    setDone(false);
    setRunning(true);
  };
  const stop = () => {
    setRunning(false);
    setT(0);
  };

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm md:p-8">
      <fieldset disabled={running} className="grid gap-6 md:grid-cols-2">
        <div>
          <legend className="text-sm font-bold uppercase tracking-wider text-stone-600">Pattern</legend>
          <div className="mt-3 space-y-2">
            {patterns.map((p) => (
              <label key={p.id} className="flex cursor-pointer items-start gap-3 rounded-lg border border-stone-200 p-3 has-[:checked]:border-sage-700 has-[:checked]:bg-sage-50">
                <input type="radio" name="pattern" checked={patternId === p.id} onChange={() => setPatternId(p.id)} className="mt-1 h-5 w-5" />
                <span>
                  <span className="block font-semibold">{p.name}</span>
                  <span className="block text-sm text-stone-600">{p.note}</span>
                </span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-stone-600">How long</p>
          <div className="mt-3 flex gap-2">
            {lengths.map((m) => (
              <label key={m} className="flex-1 cursor-pointer rounded-lg border border-stone-200 py-3 text-center font-semibold has-[:checked]:border-sage-700 has-[:checked]:bg-sage-50">
                <input type="radio" name="length" checked={minutes === m} onChange={() => setMinutes(m)} className="sr-only" />
                {m} min
              </label>
            ))}
          </div>
          <div className="mt-4"><SoundToggle on={soundOn} onToggle={toggle} /></div>
        </div>
      </fieldset>

      <div className="mt-8 flex flex-col items-center">
        <div className="flex h-72 w-72 items-center justify-center" aria-hidden="true">
          <div
            className="flex h-72 w-72 items-center justify-center rounded-full bg-sage-200"
            style={{ transform: `scale(${scale})`, transition: `transform ${duration}s ease-in-out` }}
          >
            <div className="h-1/2 w-1/2 rounded-full bg-sage-500/60" />
          </div>
        </div>

        <div className="-mt-2 min-h-24 text-center" role="status" aria-live="polite">
          {running ? (
            <>
              <p className="text-3xl font-bold">{phase.label} <span className="text-sage-700">{remaining}</span></p>
              <p lang="ne" className="mt-1 text-xl text-sage-800">{phase.ne}</p>
            </>
          ) : done ? (
            <>
              <p className="text-2xl font-bold">Well done.</p>
              <p className="mt-1 text-stone-700">Notice how your body feels now. Repeat if you want to.</p>
              <p lang="ne" className="text-stone-700">आफ्नो शरीरमा के फरक भयो, ध्यान दिनुहोस्।</p>
            </>
          ) : (
            <>
              <p className="text-xl font-semibold">Sit or stand comfortably. Press start.</p>
              <p lang="ne" className="mt-1 text-sage-800">आरामले बस्नुहोस्। सुरु गर्नुहोस् थिच्नुहोस्।</p>
            </>
          )}
        </div>

        <div className="mt-4">
          {running ? (
            <button type="button" onClick={stop} className="min-h-12 rounded-lg border-2 border-stone-400 px-8 font-bold hover:bg-stone-100">Stop</button>
          ) : (
            <button type="button" onClick={start} className="min-h-12 rounded-lg bg-sage-800 px-10 text-lg font-bold text-white hover:bg-sage-900">
              {done ? "Start again" : "Start"}
            </button>
          )}
        </div>
      </div>

      <p className="mt-6 text-sm leading-6 text-stone-600">
        Breathe gently through your nose if you can, into your belly, not as deeply as possible. If you feel dizzy,
        tingly or more panicky, stop and breathe normally. Never force a long pause.
      </p>
    </div>
  );
}
