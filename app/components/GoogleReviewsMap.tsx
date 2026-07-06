"use client";

import { useState } from "react";
import { ExternalLink, MapPin, MessageCircle, Phone, Star } from "lucide-react";

const googleMapsUrl = "https://maps.app.goo.gl/2t5B2EqgDKYMRLE48";
const embedUrl =
  "https://www.google.com/maps?q=Dr.%20Kushal%20Kharel%20Consultant%20Psychiatrist%20Kalanki%20Kathmandu&output=embed";

export default function GoogleReviewsMap() {
  const [showMap, setShowMap] = useState(false);

  return (
    <section id="google-reviews" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[3px] text-blue-700">
              <Star size={16} aria-hidden="true" />
              Google Reviews
            </span>
            <h2 className="mt-5 text-4xl font-bold leading-tight text-slate-950 md:text-5xl">
              Read what patients say on Google Maps
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Patient reviews are best viewed directly on Google Maps so they
              remain verified, complete and up to date. Open the Google profile
              to read all public feedback, get directions, call the clinic or
              leave your own review after consultation.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-lg bg-blue-700 px-6 py-3 font-bold text-white transition hover:bg-blue-800"
              >
                <ExternalLink size={20} aria-hidden="true" />
                Read All Google Reviews
              </a>
              <button
                type="button"
                onClick={() => setShowMap((current) => !current)}
                className="inline-flex items-center justify-center gap-3 rounded-lg border border-slate-300 px-6 py-3 font-bold text-slate-800 transition hover:border-blue-700 hover:text-blue-700"
                aria-expanded={showMap}
                aria-controls="google-map-panel"
              >
                <MapPin size={20} aria-hidden="true" />
                {showMap ? "Hide Google Map" : "Show Google Map"}
              </button>
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="tel:+9779861800547"
                className="inline-flex items-center gap-3 rounded-lg bg-slate-950 px-5 py-3 font-bold text-white transition hover:bg-slate-800"
              >
                <Phone size={18} aria-hidden="true" />
                +977 9861800547
              </a>
              <a
                href="https://wa.me/9779861800547"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-lg border border-green-600 px-5 py-3 font-bold text-green-700 transition hover:bg-green-600 hover:text-white"
              >
                <MessageCircle size={18} aria-hidden="true" />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <div className="grid gap-4 md:grid-cols-3">
              {[
                ["Verified source", "Reviews open on the official Google Maps profile."],
                ["Live directions", "Use Google Maps for route, hours and location details."],
                ["Patient choice", "Call or message when you need psychiatric guidance."],
              ].map(([title, text]) => (
                <div key={title} className="rounded-lg bg-white p-5">
                  <h3 className="font-bold text-blue-950">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                </div>
              ))}
            </div>

            {showMap && (
              <div id="google-map-panel" className="mt-6 overflow-hidden rounded-lg border border-slate-200 bg-white">
                <iframe
                  src={embedUrl}
                  title="Google Map for Dr. Kushal Kharel"
                  className="h-[360px] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
