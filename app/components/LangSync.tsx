"use client";

import { useEffect } from "react";

// The exported HTML already has the right <html lang> (stamped at build time by
// scripts/stamp-html-lang.mjs). This keeps it right after client-side navigation:
// the root layout persists across soft navigations, so without this an English page
// reached from a Nepali one would keep lang="ne" (and vice versa), which makes
// screen readers pick the wrong voice.
//
// It reads the page's own <meta name="content-language">, which Next swaps in
// with the rest of the page metadata, and re-syncs whenever <head> changes.
export default function LangSync() {
  useEffect(() => {
    const sync = () => {
      const declared = document
        .querySelector('meta[name="content-language"]')
        ?.getAttribute("content");
      if (declared && document.documentElement.lang !== declared) {
        document.documentElement.lang = declared;
      }
    };

    sync();
    const observer = new MutationObserver(sync);
    observer.observe(document.head, { childList: true, subtree: true, attributes: true });
    return () => observer.disconnect();
  }, []);

  return null;
}
