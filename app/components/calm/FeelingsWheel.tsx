"use client";

import { useState } from "react";
import Link from "next/link";
import { feelings } from "./feelingsData";

const R_HOLE = 58;
const R_CORE = 150;
const R_OUTER = 285;
const rad = (deg: number) => (deg * Math.PI) / 180;
const pt = (r: number, deg: number) => `${(r * Math.cos(rad(deg))).toFixed(2)} ${(r * Math.sin(rad(deg))).toFixed(2)}`;

function wedge(r0: number, r1: number, a0: number, a1: number) {
  return `M ${pt(r0, a0)} L ${pt(r1, a0)} A ${r1} ${r1} 0 0 1 ${pt(r1, a1)} L ${pt(r0, a1)} A ${r0} ${r0} 0 0 0 ${pt(r0, a0)} Z`;
}

export default function FeelingsWheel() {
  const [core, setCore] = useState<number | null>(null);
  const [sub, setSub] = useState<number | null>(null);
  const [closer, setCloser] = useState<string | null>(null);

  const pickCore = (n: number) => {
    setCore(n === core ? null : n);
    setSub(null);
    setCloser(null);
  };
  const pickSub = (c: number, s: number) => {
    setCore(c);
    setSub(s);
    setCloser(null);
  };

  const chosenCore = core !== null ? feelings[core] : null;
  const chosenSub = chosenCore && sub !== null ? chosenCore.children[sub] : null;

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm md:p-8">
      <svg viewBox="-300 -300 600 600" className="mx-auto w-full max-w-xl" aria-hidden="true">
        {feelings.map((f, c) => {
          const a0 = c * 60 - 120;
          const active = core === c;
          const dim = core !== null && !active;
          return (
            <g key={f.en} opacity={dim ? 0.4 : 1}>
              {f.children.map((child, s) => {
                const s0 = a0 + s * 15;
                const mid = s0 + 7.5;
                const flip = mid > 0 && mid < 180;
                return (
                  <g key={child.en} onClick={() => pickSub(c, s)} className="cursor-pointer">
                    <path d={wedge(R_CORE, R_OUTER, s0, s0 + 15)} fill={f.color} fillOpacity={active && sub === s ? 0.95 : 0.5} stroke="#fff" strokeWidth="3" />
                    <text
                      transform={`rotate(${flip ? mid + 180 : mid}) translate(${flip ? -(R_CORE + 12) : R_CORE + 12} 0)`}
                      textAnchor={flip ? "end" : "start"}
                      dominantBaseline="middle"
                      fontSize="15"
                      fontWeight={active && sub === s ? 700 : 500}
                      fill="#1c1917"
                      className="hidden sm:inline"
                    >
                      {child.en}
                    </text>
                  </g>
                );
              })}
              <g onClick={() => pickCore(c)} className="cursor-pointer">
                <path d={wedge(R_HOLE, R_CORE, a0, a0 + 60)} fill={f.color} stroke="#fff" strokeWidth="4" />
                <text
                  x={(105 * Math.cos(rad(a0 + 30))).toFixed(1)}
                  y={(105 * Math.sin(rad(a0 + 30))).toFixed(1)}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="20"
                  fontWeight="700"
                  fill="#1c1917"
                >
                  {f.en}
                </text>
              </g>
            </g>
          );
        })}
        <circle r={R_HOLE - 4} fill="#fafaf9" />
        <text textAnchor="middle" dominantBaseline="middle" fontSize="16" fontWeight="600" fill="#44403c">
          <tspan x="0" y="-8">How do</tspan>
          <tspan x="0" y="12">you feel?</tspan>
        </text>
      </svg>

      <div className="mt-6">
        <h2 className="text-lg font-bold">1. Pick the closest big feeling</h2>
        <p lang="ne" className="text-sm text-sage-800">१. नजिकको मुख्य भावना छान्नुहोस्</p>
        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {feelings.map((f, c) => (
            <button
              key={f.en}
              type="button"
              onClick={() => pickCore(c)}
              aria-pressed={core === c}
              style={{ backgroundColor: f.color }}
              className={`min-h-14 rounded-xl px-3 text-stone-900 ${core === c ? "ring-4 ring-stone-900" : ""}`}
            >
              <span className="block font-bold">{f.en}</span>
              <span lang="ne" className="block text-sm">{f.ne}</span>
            </button>
          ))}
        </div>
      </div>

      {chosenCore && (
        <div className="mt-6">
          <h2 className="text-lg font-bold">2. Which word fits better?</h2>
          <p lang="ne" className="text-sm text-sage-800">२. कुन शब्द मिल्छ?</p>
          <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {chosenCore.children.map((child, s) => (
              <button
                key={child.en}
                type="button"
                onClick={() => pickSub(core!, s)}
                aria-pressed={sub === s}
                style={{ backgroundColor: chosenCore.color + (sub === s ? "" : "66") }}
                className={`min-h-14 rounded-xl px-3 text-stone-900 ${sub === s ? "ring-4 ring-stone-900" : ""}`}
              >
                <span className="block font-semibold">{child.en}</span>
                <span lang="ne" className="block text-sm">{child.ne}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {chosenCore && chosenSub && (
        <div className="mt-6" aria-live="polite">
          <h2 className="text-lg font-bold">3. Any closer word? (optional)</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {chosenSub.closer.map((w) => (
              <button
                key={w}
                type="button"
                onClick={() => setCloser(closer === w ? null : w)}
                aria-pressed={closer === w}
                className={`min-h-11 rounded-full border-2 px-5 font-semibold ${closer === w ? "border-stone-900 bg-stone-900 text-white" : "border-stone-300 bg-white"}`}
              >
                {w}
              </button>
            ))}
          </div>

          <div className="mt-6 rounded-xl bg-sage-50 p-5">
            <p className="text-xl font-bold">
              I feel {chosenSub.en.toLowerCase()}{closer ? `, maybe ${closer}` : ""}.
            </p>
            <p lang="ne" className="mt-1 text-sage-900">म {chosenSub.ne} महसुस गर्दैछु।</p>
            <p className="mt-3 leading-7 text-stone-800">{chosenCore.note}</p>
            <p lang="ne" className="mt-1 leading-7 text-stone-700">{chosenCore.noteNe}</p>
            {chosenCore.tools.length > 0 && (
              <p className="mt-3 text-stone-800">
                Might help now:{" "}
                {chosenCore.tools.map((t, n) => (
                  <span key={t.href}>
                    {n > 0 && " or "}
                    <Link href={t.href} className="font-semibold text-sage-800 underline underline-offset-4">{t.label}</Link>
                  </span>
                ))}
              </p>
            )}
            <p className="mt-3 text-sm text-stone-600">
              Naming a feeling is a first step. It is not a diagnosis. Feelings can be mixed, and more than one can be true at once.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
