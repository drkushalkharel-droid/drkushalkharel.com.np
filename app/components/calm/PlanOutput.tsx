"use client";

import { useState } from "react";
import { Copy, Download, Printer } from "lucide-react";

export type PlanLine = { label: string; value: string };

// Print, download or copy what someone wrote. Nothing is sent or stored: the text only
// exists in this browser tab. Printing shows only the #calm-print block.
export default function PlanOutput({ heading, lines, filename }: { heading: string; lines: PlanLine[]; filename: string }) {
  const [copied, setCopied] = useState(false);
  const filled = lines.filter((l) => l.value.trim());
  const text = `${heading}\n\n${filled.map((l) => `${l.label}\n${l.value.trim()}`).join("\n\n")}\n`;

  const download = () => {
    const url = URL.createObjectURL(new Blob([text], { type: "text/plain;charset=utf-8" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = `${filename}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const btn = "inline-flex min-h-12 items-center gap-2 rounded-lg border-2 border-sage-800 px-5 font-bold text-sage-900 hover:bg-sage-50";
  return (
    <section className="mt-8 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm md:p-8" aria-labelledby="plan-out">
      <style>{`@media print{body *{visibility:hidden}#calm-print,#calm-print *{visibility:visible}#calm-print{position:absolute;left:0;top:0;width:100%}}`}</style>
      <h2 id="plan-out" className="text-2xl font-bold">Keep a copy</h2>
      <p className="mt-1 text-stone-700">This stays on your device. Nothing is saved on this website, so print or download it before you leave.</p>
      <p lang="ne" className="text-stone-700">यो तपाईंको उपकरणमै रहन्छ। वेबसाइटमा केही सुरक्षित हुँदैन, त्यसैले जानु अघि प्रिन्ट वा डाउनलोड गर्नुहोस्।</p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button type="button" onClick={() => window.print()} className={btn}><Printer size={18} aria-hidden="true" /> Print or save as PDF</button>
        <button type="button" onClick={download} className={btn}><Download size={18} aria-hidden="true" /> Download text</button>
        <button type="button" onClick={copy} className={btn}><Copy size={18} aria-hidden="true" /> {copied ? "Copied" : "Copy"}</button>
      </div>
      <div id="calm-print" className="mt-6 rounded-xl border border-dashed border-stone-300 p-5">
        <h3 className="text-xl font-bold">{heading}</h3>
        {filled.length === 0 && <p className="mt-2 text-stone-500">Your answers will appear here.</p>}
        {filled.map((l) => (
          <div key={l.label} className="mt-4">
            <p className="font-bold text-sage-900">{l.label}</p>
            <p className="whitespace-pre-line leading-7">{l.value.trim()}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
