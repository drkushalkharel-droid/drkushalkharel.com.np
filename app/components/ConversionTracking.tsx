"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function ConversionTracking() {
  useEffect(() => {
    const trackConversion = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const link = target?.closest<HTMLAnchorElement>("a[href]");

      if (!link || !window.gtag) return;

      const href = link.href;
      const type = href.startsWith("tel:")
        ? "call_click"
        : href.includes("wa.me")
          ? "whatsapp_click"
          : link.dataset.conversion === "appointment"
            ? "appointment_page_click"
            : null;

      if (type) {
        window.gtag("event", type, {
          event_category: "conversion",
          link_url: href,
          page_location: window.location.href,
        });
      }
    };

    document.addEventListener("click", trackConversion);
    return () => document.removeEventListener("click", trackConversion);
  }, []);

  return null;
}
