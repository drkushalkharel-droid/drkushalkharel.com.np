"use client";

import { Printer } from "lucide-react";

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 rounded-lg border border-sage-700 px-6 py-3 font-semibold text-sage-700 transition hover:bg-sage-700 hover:text-white print:hidden"
    >
      <Printer size={20} aria-hidden="true" />
      Print this page
    </button>
  );
}
