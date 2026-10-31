"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import SoundToggle from "./SoundToggle";
import { useChime } from "./useChime";

export type Step = {
  key: string;
  title: string;
  ne: string;
  body: string[];
  bodyNe?: string;
  seconds?: number;
  taps?: number;
  tapLabel?: string;
  link?: { href: string; label: string };
};

// One step at a time, for screens that are hard to read when upset: a big title, short
// instructions, an optional countdown, or an optional "I noticed one" tap counter.
export default function GuidedSteps({
  steps,
  finishTitle,
  finishBody,
  finishNe,
}: {
  steps: Step[];
  finishTitle: string;
  finishBody: string;
  finishNe: string;
}) {
  const [i, setI] = useState(-1);
  const [taps, setTaps] = useState(0);
  const [left, setLeft] = useState<number | null>(null);
  const { soundOn, toggle, play } = useChime();
  const heading = useRef<HTMLHeadingElement>(null);
  const moved = useRef(false);

  const step = i >= 0 && i < steps.length ? steps[i] : null;

  useEffect(() => {
    setTaps(0);
    setLeft(null);
    if (moved.current) heading.current?.focus();
  }, [i]);

  useEffect(() => {
    if (left === null) return;
    if (left <= 0) {
      play(523, 2.4);
      return;
    }
    const id = window.setTimeout(() => setLeft((n) => (n === null ? n : n - 1)), 1000);
    return () => window.clearTimeout(id);
  }, [left, play]);

  const go = useCallback((n: number) => {
    moved.current = true;
    setI(n);
  }, []);

  if (i === -1) {
    return (
      <div className="rounded-2xl border border-stone-200 bg-white p-6 text-center shadow-sm md:p-8">
        <p className="text-lg text-stone-700">{steps.length} short steps. Go at your own pace.</p>
        <p lang="ne" className="mt-1 text-sage-800">{steps.length} वटा छोटा चरण। आफ्नै गतिमा गर्नुहोस्।</p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <button type="button" onClick={() => go(0)} className="min-h-12 rounded-lg bg-sage-800 px-10 text-lg font-bold text-white hover:bg-sage-900">Start</button>
          <SoundToggle on={soundOn} onToggle={toggle} />
        </div>
      </div>
    );
  }

  if (!step) {
    return (
      <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm md:p-8" role="status">
        <h2 ref={heading} tabIndex={-1} className="text-2xl font-bold outline-none">{finishTitle}</h2>
        <p className="mt-3 text-lg leading-8 text-stone-700">{finishBody}</p>
        <p lang="ne" className="mt-2 leading-8 text-stone-700">{finishNe}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <button type="button" onClick={() => go(0)} className="min-h-12 rounded-lg bg-sage-800 px-8 font-bold text-white hover:bg-sage-900">Do it again</button>
          <Link href="/calm-now/breathing-exercise/" className="inline-flex min-h-12 items-center rounded-lg border-2 border-sage-800 px-8 font-bold text-sage-900 hover:bg-sage-50">Try the breathing exercise</Link>
        </div>
      </div>
    );
  }

  const tapsDone = step.taps ? taps >= step.taps : true;

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm md:p-8">
      <ol className="flex gap-2" aria-label="Progress">
        {steps.map((s, n) => (
          <li key={`${s.key}${n}`} aria-current={n === i ? "step" : undefined} className={`h-2 flex-1 rounded-full ${n < i ? "bg-sage-700" : n === i ? "bg-clay-600" : "bg-stone-200"}`}>
            <span className="sr-only">Step {n + 1}</span>
          </li>
        ))}
      </ol>
      <p className="mt-5 text-sm font-bold uppercase tracking-wider text-stone-600">Step {i + 1} of {steps.length}</p>
      <h2 ref={heading} tabIndex={-1} className="mt-1 text-3xl font-bold outline-none md:text-4xl">
        <span className="text-clay-700">{step.key}</span> {step.title}
      </h2>
      <p lang="ne" className="mt-1 text-xl font-semibold text-sage-800">{step.ne}</p>

      <div className="mt-4 space-y-2 text-lg leading-8 text-stone-800" aria-live="polite">
        {step.body.map((line) => <p key={line}>{line}</p>)}
        {step.bodyNe && <p lang="ne" className="text-stone-700">{step.bodyNe}</p>}
      </div>

      {step.taps && (
        <div className="mt-5">
          <button type="button" onClick={() => { setTaps((n) => n + 1); play(440 + taps * 40, 1); }} disabled={tapsDone} className="min-h-14 w-full rounded-xl bg-sage-100 px-6 text-lg font-bold text-sage-950 hover:bg-sage-200 disabled:opacity-60">
            {step.tapLabel ?? "I noticed one"} ({Math.min(taps, step.taps)} / {step.taps})
          </button>
        </div>
      )}

      {step.seconds && (
        <div className="mt-5 flex flex-wrap items-center gap-4">
          <button type="button" onClick={() => setLeft(step.seconds!)} disabled={left !== null && left > 0} className="min-h-12 rounded-lg bg-sage-800 px-6 font-bold text-white hover:bg-sage-900 disabled:opacity-60">
            {left === null ? `Start ${step.seconds}-second timer` : left > 0 ? "Timer running" : "Restart timer"}
          </button>
          {left !== null && (
            <p className="text-3xl font-bold tabular-nums" role="timer" aria-live="off">
              {left > 0 ? `${left}s` : "Time is up"}
            </p>
          )}
        </div>
      )}

      {step.link && (
        <p className="mt-4"><Link href={step.link.href} className="font-semibold text-sage-800 underline underline-offset-4">{step.link.label}</Link></p>
      )}

      <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
        <button type="button" onClick={() => go(i - 1)} disabled={i === 0} className="min-h-12 rounded-lg border-2 border-stone-300 px-6 font-semibold disabled:opacity-40">Back</button>
        <div className="flex items-center gap-3">
          <SoundToggle on={soundOn} onToggle={toggle} />
          <button type="button" onClick={() => go(i + 1)} className="min-h-12 rounded-lg bg-clay-700 px-8 font-bold text-white hover:bg-clay-800">
            {i === steps.length - 1 ? "Finish" : tapsDone ? "Next" : "Skip"}
          </button>
        </div>
      </div>
    </div>
  );
}
