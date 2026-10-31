"use client";

import { Volume2, VolumeX } from "lucide-react";

export default function SoundToggle({ on, onToggle }: { on: boolean; onToggle: () => void }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={on}
      className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-stone-300 bg-white px-4 text-sm font-semibold text-stone-800 hover:bg-stone-100"
    >
      {on ? <Volume2 size={18} aria-hidden="true" /> : <VolumeX size={18} aria-hidden="true" />}
      Sound: {on ? "on" : "off"}
      <span lang="ne" className="font-normal text-stone-600">({on ? "खुला" : "बन्द"})</span>
    </button>
  );
}
