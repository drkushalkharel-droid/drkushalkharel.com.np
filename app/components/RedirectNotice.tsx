"use client";

import { useEffect } from "react";

export default function RedirectNotice({ to, label }: { to: string; label: string }) {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);

  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-stone-50 px-6 py-24 text-center">
      <div>
        <p className="text-lg text-stone-700">This page has moved.</p>
        <a href={to} className="mt-3 inline-block font-semibold text-sage-700 underline">
          Continue to {label}
        </a>
      </div>
    </main>
  );
}
