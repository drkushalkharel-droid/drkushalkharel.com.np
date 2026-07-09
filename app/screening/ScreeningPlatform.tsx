"use client";

import { useState } from "react";
import { AlertTriangle, MessageCircle, Phone, RotateCcw } from "lucide-react";
import { screeningTools, type ScreeningTool } from "../data/screening";

type Scores = Record<string, number>;

function initialScores(tool: ScreeningTool): Scores {
  return Object.fromEntries(tool.items.map((item) => [item.id, 0]));
}

function getInterpretation(tool: ScreeningTool, score: number) {
  return (
    tool.interpretations.find(
      (interpretation) =>
        score >= interpretation.min && score <= interpretation.max,
    ) ?? tool.interpretations[tool.interpretations.length - 1]
  );
}

export default function ScreeningPlatform() {
  const [activeId, setActiveId] = useState<ScreeningTool["id"]>("depression");
  const activeTool = screeningTools.find((tool) => tool.id === activeId) ?? screeningTools[0];
  const [answers, setAnswers] = useState<Record<string, Scores>>(() =>
    Object.fromEntries(screeningTools.map((tool) => [tool.id, initialScores(tool)])),
  );

  const currentScores = answers[activeTool.id] ?? initialScores(activeTool);
  const totalScore = Object.values(currentScores).reduce(
    (sum, value) => sum + value,
    0,
  );
  const interpretation = getInterpretation(activeTool, totalScore);
  const hasSelfHarmSignal = activeTool.items.some(
    (item) => item.flagsSelfHarm && (currentScores[item.id] ?? 0) > 0,
  );

  function updateScore(itemId: string, value: number) {
    setAnswers((current) => ({
      ...current,
      [activeTool.id]: {
        ...(current[activeTool.id] ?? initialScores(activeTool)),
        [itemId]: value,
      },
    }));
  }

  function resetTool() {
    setAnswers((current) => ({
      ...current,
      [activeTool.id]: initialScores(activeTool),
    }));
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            <div className="grid gap-2">
              {screeningTools.map((tool) => (
                <button
                  key={tool.id}
                  type="button"
                  onClick={() => setActiveId(tool.id)}
                  className={`rounded-lg px-4 py-3 text-left font-bold transition ${
                    tool.id === activeTool.id
                      ? "bg-blue-700 text-white"
                      : "bg-slate-50 text-slate-800 hover:bg-blue-50"
                  }`}
                >
                  {tool.shortTitle}
                </button>
              ))}
            </div>

            <div className="mt-5 rounded-lg bg-slate-50 p-4">
              <p className="text-sm font-semibold uppercase tracking-[2px] text-slate-500">
                Current score
              </p>
              <p className="mt-2 text-5xl font-bold text-blue-950">
                {totalScore}
                <span className="text-xl text-slate-500">/{activeTool.maxScore}</span>
              </p>
              <p className="mt-3 font-bold text-slate-950">
                {interpretation.label}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {interpretation.guidance}
              </p>
            </div>

            <button
              type="button"
              onClick={resetTool}
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 px-4 py-3 font-bold text-slate-800 transition hover:border-blue-700 hover:text-blue-700"
            >
              <RotateCcw size={18} aria-hidden="true" />
              Reset this tool
            </button>
          </div>
        </aside>

        <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-start">
            <div>
              <h2 className="text-3xl font-bold text-slate-950">
                {activeTool.title}
              </h2>
              <p className="mt-4 max-w-3xl leading-8 text-slate-600">
                {activeTool.description}
              </p>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-500">
                {activeTool.sourceNote}
              </p>
            </div>
            <div className="rounded-lg bg-blue-50 p-4 text-blue-950">
              <p className="text-sm font-semibold uppercase tracking-[2px]">
                Result
              </p>
              <p className="mt-1 text-3xl font-bold">{totalScore}</p>
            </div>
          </div>

          {hasSelfHarmSignal && (
            <div className="mt-6 rounded-lg border border-red-200 bg-red-50 p-5 text-red-950">
              <div className="flex gap-3">
                <AlertTriangle className="mt-1 shrink-0" size={22} aria-hidden="true" />
                <div>
                  <h3 className="font-bold">Safety concern noted</h3>
                  <p className="mt-2 leading-7">
                    Any self-harm or suicide thought needs immediate support.
                    Contact a trusted person, local emergency service or nearby
                    hospital now if there is danger. You can also call Dr.
                    Kushal Kharel for guidance.
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="mt-8 space-y-5">
            {activeTool.items.map((item, index) => (
              <div
                key={item.id}
                className="rounded-lg border border-slate-200 bg-slate-50 p-5"
              >
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div className="max-w-2xl">
                    <h3 className="text-lg font-bold text-slate-950">
                      {index + 1}. {item.label}
                    </h3>
                    {item.helper && (
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {item.helper}
                      </p>
                    )}
                  </div>
                  <div className="grid min-w-[260px] grid-cols-2 gap-2 sm:grid-cols-4">
                    {activeTool.options.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => updateScore(item.id, option.value)}
                        className={`rounded-lg border px-3 py-2 text-sm font-bold transition ${
                          currentScores[item.id] === option.value
                            ? "border-blue-700 bg-blue-700 text-white"
                            : "border-slate-300 bg-white text-slate-700 hover:border-blue-500"
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-lg bg-blue-950 p-6 text-white">
            <h3 className="text-2xl font-bold">
              Interpretation: {interpretation.label}
            </h3>
            <p className="mt-3 leading-8 text-blue-100">
              {`${interpretation.guidance} Screening results are not a diagnosis. A clinical interview is needed to understand causes, severity, safety, medical factors and the best treatment plan.`}
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="tel:+9779861800547"
                className="inline-flex items-center gap-3 rounded-lg bg-white px-6 py-3 font-bold text-blue-950"
              >
                <Phone size={20} aria-hidden="true" />
                Call +977 9861800547
              </a>
              <a
                href="https://wa.me/9779861800547"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-lg border border-white/50 px-6 py-3 font-bold text-white"
              >
                <MessageCircle size={20} aria-hidden="true" />
                WhatsApp
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
