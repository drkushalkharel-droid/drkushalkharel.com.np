import { MessageCircle, Phone } from "lucide-react";

export default function ConversionDock() {
  return (
    <>
      <div className="fixed bottom-5 right-5 z-[60] hidden flex-col gap-3 md:flex">
        <a
          href="tel:+9779861800547"
          aria-label="Call Dr. Kushal Kharel"
          className="group flex items-center gap-3 rounded-full bg-blue-700 px-5 py-4 font-bold text-white shadow-2xl shadow-blue-900/25 transition hover:-translate-y-1 hover:bg-blue-800"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 call-pulse">
            <Phone size={20} aria-hidden="true" />
          </span>
          <span>
            <span className="block text-xs uppercase tracking-[2px] text-blue-100">
              Call for appointment
            </span>
            <span className="block">+977 9861800547</span>
          </span>
        </a>

        <a
          href="https://wa.me/9779861800547"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Dr. Kushal Kharel"
          className="flex items-center justify-center gap-2 rounded-full border border-green-500 bg-white px-5 py-3 font-bold text-green-700 shadow-xl transition hover:-translate-y-1 hover:bg-green-600 hover:text-white"
        >
          <MessageCircle size={20} aria-hidden="true" />
          WhatsApp
        </a>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-slate-200 bg-white/95 p-3 shadow-[0_-12px_30px_rgba(15,23,42,0.12)] backdrop-blur md:hidden">
        <div className="grid grid-cols-2 gap-3">
          <a
            href="tel:+9779861800547"
            className="flex items-center justify-center gap-2 rounded-lg bg-blue-700 px-4 py-3 font-bold text-white"
          >
            <Phone size={18} aria-hidden="true" />
            Call Now
          </a>
          <a
            href="https://wa.me/9779861800547"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-lg bg-green-600 px-4 py-3 font-bold text-white"
          >
            <MessageCircle size={18} aria-hidden="true" />
            WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
