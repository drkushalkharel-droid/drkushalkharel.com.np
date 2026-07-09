"use client";

import { Printer } from "lucide-react";

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 rounded-lg border border-blue-700 px-6 py-3 font-semibold text-blue-700 transition hover:bg-blue-700 hover:text-white print:hidden"
    >
      <Printer size={20} aria-hidden="true" />
      Print this page
    </button>
  );
}
