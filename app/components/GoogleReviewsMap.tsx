import { ExternalLink, MessageCircle, Phone, Star } from "lucide-react";

const googleMapsUrl = "https://maps.app.goo.gl/2t5B2EqgDKYMRLE48";
const embedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.8350629732777!2d85.2807309!3d27.691492200000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb193a5fc66e35%3A0x4e7103ea23778ac9!2sDr.%20Kushal%20kharel%20Psychiatrist!5e0!3m2!1sen!2snp!4v1786011632050!5m2!1sen!2snp";

export default function GoogleReviewsMap() {
  return (
    <section id="google-reviews" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[3px] text-sage-700">
              <Star size={16} aria-hidden="true" />
              Google Reviews
            </span>
            <h2 className="mt-5 text-4xl font-bold leading-tight text-stone-950 md:text-5xl">
              Read what patients say on Google Maps
            </h2>
            <p className="mt-6 text-lg leading-8 text-stone-600">
              Patient reviews are best viewed directly on Google Maps so they
              remain verified, complete and up to date. Open the Google profile
              to read all public feedback, get directions, call the clinic or
              leave your own review after consultation.
            </p>

            <div className="mt-8">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-lg bg-sage-700 px-6 py-3 font-bold text-white transition hover:bg-sage-800"
              >
                <ExternalLink size={20} aria-hidden="true" />
                Read All Google Reviews
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="tel:+9779861800547"
                className="inline-flex items-center gap-3 rounded-lg bg-stone-950 px-5 py-3 font-bold text-white transition hover:bg-stone-800"
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

          <div className="rounded-lg border border-stone-200 bg-stone-50 p-6 shadow-sm">
            <div className="grid gap-4 md:grid-cols-3">
              {[
                ["Verified source", "Reviews open on the official Google Maps profile."],
                ["Live directions", "Use Google Maps for route, hours and location details."],
                ["Patient choice", "Call or message when you need psychiatric guidance."],
              ].map(([title, text]) => (
                <div key={title} className="rounded-lg bg-white p-5">
                  <h3 className="font-bold text-sage-950">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-stone-600">{text}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 overflow-hidden rounded-lg border border-stone-200 bg-white">
              <iframe
                src={embedUrl}
                title="Google Map for Dr. Kushal Kharel"
                className="h-90 w-full"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
