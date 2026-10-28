import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageCircle, Phone, Quote, Star } from "lucide-react";
import { googleReviews } from "../data/googleReviews";
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

const googleUrl =
  "https://www.google.com/maps/place/Dr.+Kushal+Kharel+Psychiatrist+Clinic/@27.6914272,85.280723,17z/data=!3m1!4b1!4m6!3m5!1s0x39eb193a5fc66e35:0x4e7103ea23778ac9!8m2!3d27.6914272!4d85.280723!16s%2Fg%2F11thgbq6yl";

const Stars = () => (
  <div className="flex gap-1 text-clay-500" aria-label="5 out of 5 stars" role="img">
    {[1, 2, 3, 4, 5].map((n) => (
      <Star key={n} size={16} fill="currentColor" strokeWidth={0} aria-hidden="true" />
    ))}
  </div>
);

export default function PatientTestimonialsPage() {
  return (
    <main id="main" className="min-h-screen bg-[#f5f4ef] pb-20 text-[#1f2927]">
      <section className="bg-sage-800 px-6 pb-16 pt-28 text-white">
        <div className="mx-auto max-w-5xl">
          <p className="text-[13px] font-bold uppercase tracking-[.12em] text-[#e6b579]">Patient testimonials</p>
          <h1 className="mt-5 max-w-3xl text-4xl leading-[1.05] tracking-[-.03em] md:text-6xl">
            In patients&apos; <em className="text-[#f6a995]">own words</em>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-sage-100">
            Ten of the clinic&apos;s 73 five-star Google reviews, copied exactly as patients posted them. Patient names are kept confidential.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <a href={googleUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white px-6 py-4 text-sm font-semibold text-sage-900 transition hover:bg-clay-100">
              Read all reviews on Google
            </a>
            <Link href="/book/" className="inline-flex items-center gap-2 bg-clay-700 px-6 py-4 text-sm font-semibold text-white transition hover:bg-clay-800">
              Book an appointment
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-3xl md:text-4xl">What patients say about Dr. Kharel</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {googleReviews.map((r, i) => (
            <figure key={i} className="flex flex-col border border-[#d6d8d2] bg-white p-7">
              <div className="flex items-center justify-between">
                <Stars />
                <Quote size={26} className="text-clay-300" aria-hidden="true" />
              </div>
              <blockquote className="mt-4 flex-1 whitespace-pre-line leading-7 text-[#3d4743]">&ldquo;{r.text}&rdquo;</blockquote>
              <figcaption className="mt-5 flex flex-wrap items-center gap-x-3 text-sm">
                <strong className="text-sage-900">Anonymous patient</strong>
                {r.topic && <span className="text-[#5a635e]">· {r.topic}</span>}
                <span className="text-[#5a635e]">· Google review</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-6 text-sm text-[#5a635e]">
          Reviews reflect individual experiences and are not a guarantee of results. Treatment is tailored to each person.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl md:text-3xl">More messages from patients</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {reviewCards.map((review, index) => (
            <div key={index} className="border border-[#d6d8d2] bg-white p-6">
              <Stars />
              <blockquote className="mt-3 italic text-[#3d4743]">&ldquo;{review.quote}&rdquo;</blockquote>
              <p className="mt-3 text-sm font-medium text-[#5a635e]">~ {review.attribution}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-14 max-w-6xl px-6">
        <div className="bg-sage-100 p-8 text-center md:p-10">
          <h2 className="text-2xl md:text-3xl">Share your experience</h2>
          <p className="mx-auto mt-3 max-w-xl text-[#3d4743]">Have you had a consultation with Dr. Kushal Kharel? Your feedback helps other patients make informed decisions.</p>
          <a href={googleUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex bg-sage-800 px-8 py-4 text-sm font-semibold text-white transition hover:bg-sage-900">
            Write a review on Google
          </a>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <a href="tel:+9779861800547" className="flex items-center gap-3 border border-[#d6d8d2] bg-white p-5 hover:shadow-md">
            <Phone className="text-sage-800" size={24} aria-hidden="true" />
            <span><span className="block font-semibold">Call</span><span className="text-sm text-[#5a635e]">+977 9861800547</span></span>
          </a>
          <a href="mailto:drkushalkharel@gmail.com" className="flex items-center gap-3 border border-[#d6d8d2] bg-white p-5 hover:shadow-md">
            <Mail className="text-sage-800" size={24} aria-hidden="true" />
            <span><span className="block font-semibold">Email</span><span className="text-sm text-[#5a635e]">drkushalkharel@gmail.com</span></span>
          </a>
          <a href="https://wa.me/9779861800547" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 border border-[#d6d8d2] bg-white p-5 hover:shadow-md">
            <MessageCircle className="text-sage-800" size={24} aria-hidden="true" />
            <span><span className="block font-semibold">WhatsApp</span><span className="text-sm text-[#5a635e]">Message the clinic</span></span>
          </a>
        </div>
      </section>
    </main>
  );
}
