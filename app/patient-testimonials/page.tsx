import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageCircle, Phone, Quote, Star } from "lucide-react";
import { abroadGuides } from "../data/abroad";
import { seoDescription, seoTitle } from "../lib/seoText";

const siteUrl = "https://drkushalkharel.com.np";
const pageUrl = `${siteUrl}/patient-testimonials`;
const title = seoTitle("/patient-testimonials/", "Patient Testimonials | Dr. Kushal Kharel");
const description =
  seoDescription("/patient-testimonials/", "Real patient testimonials for Dr. Kushal Kharel's online and in-person psychiatric consultations, from patients in Nepal and Nepalis living abroad.");

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/patient-testimonials/",
  },
  keywords: [
    "Dr Kushal Kharel patient reviews",
    "Nepali psychiatrist testimonials",
    "online psychiatrist Nepal reviews",
    "psychiatrist for Nepalis abroad reviews",
  ],
  openGraph: {
    title,
    description,
    url: pageUrl,
    siteName: "Dr. Kushal Kharel",
    images: [{ url: "/images/doctor.png", width: 1200, height: 630 }],
    type: "website",
  },
};

// Short review cards for display
const reviewCards = [
  {
    quote: "Straightforward experience. He took time to understand my concerns without judgment.",
    attribution: "International Patient",
  },
  {
    quote: "I could speak openly and felt truly listened to. He helped me organize my thoughts.",
    attribution: "International Patient",
  },
  {
    quote: "I understood my concerns differently after our talk. He explained mental health in a way that made sense.",
    attribution: "International Patient",
  },
  {
    quote: "I discussed concerns I'd kept to myself for years. He listened carefully and explained everything clearly.",
    attribution: "International Patient",
  },
  {
    quote: "बिना hesitation राख्न सकेँ। उहाँले ध्यानपूर्वक सुन्नुभयो र सहयोग दिनुभयो।",
    attribution: "नेपाली रोगी",
  },
  {
    quote: "आवश्यक सहयोग लिनु पनि महत्वपूर्ण रहेछ भन्ने मह।",
    attribution: "नेपाली रोगी",
  },
];

export default function PatientTestimonialsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Patient Testimonials</h1>
          <p className="text-lg text-blue-100">
            Read what patients say about their experience with Dr. Kushal Kharel
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        {/* Review Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {reviewCards.map((review, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex gap-2 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <blockquote className="text-slate-700 mb-4 italic">
                "{review.quote}"
              </blockquote>
              <p className="text-sm text-slate-600 font-medium">
                ~ {review.attribution}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action - Write a Review */}
        <div className="bg-sage-50 border-2 border-sage-200 rounded-lg p-8 text-center mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Share Your Experience</h2>
          <p className="text-slate-600 mb-6">
            Have you had a consultation with Dr. Kushal Kharel? Your feedback helps other patients make informed decisions.
          </p>
          <a
            href="https://www.google.com/maps/place/Dr.+Kushal+Kharel+Psychiatrist+Clinic/@27.6914272,85.280723,17z/data=!3m1!4b1!4m6!3m5!1s0x39eb193a5fc66e35:0x4e7103ea23778ac9!8m2!3d27.6914272!4d85.280723!16s%2Fg%2F11thgbq6yl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-sage-700 hover:bg-sage-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            Write a Review on Google
          </a>
        </div>

        {/* Contact Options */}
        <div className="bg-slate-50 rounded-lg p-8">
          <h3 className="text-xl font-bold text-slate-800 mb-6">Other Ways to Reach Out</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="tel:+97714545454"
              className="flex items-center gap-3 p-4 bg-white rounded border border-slate-200 hover:shadow-md transition-shadow"
            >
              <Phone className="text-blue-600" size={24} />
              <div>
                <p className="font-semibold text-slate-800">Call</p>
                <p className="text-sm text-slate-600">+977 1 4545454</p>
              </div>
            </a>

            <a
              href="mailto:contact@drkushalkharel.com.np"
              className="flex items-center gap-3 p-4 bg-white rounded border border-slate-200 hover:shadow-md transition-shadow"
            >
              <Mail className="text-blue-600" size={24} />
              <div>
                <p className="font-semibold text-slate-800">Email</p>
                <p className="text-sm text-slate-600">contact@drkushalkharel.com.np</p>
              </div>
            </a>

            <a
              href="https://wa.me/977"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-white rounded border border-slate-200 hover:shadow-md transition-shadow"
            >
              <MessageCircle className="text-blue-600" size={24} />
              <div>
                <p className="font-semibold text-slate-800">WhatsApp</p>
                <p className="text-sm text-slate-600">Message us</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
