import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://drkushalkharel.com.np";
const title = "Medical Disclaimer";
const description =
  "Important information about the limits of the content on this website and when to seek direct psychiatric or emergency care.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/medical-disclaimer",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MedicalDisclaimerPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Medical Disclaimer", item: `${siteUrl}/medical-disclaimer` },
    ],
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 pb-14 pt-28 lg:px-8 lg:pt-32">
          <Link href="/" className="font-semibold text-blue-700">
            &larr; Back to home
          </Link>
          <h1 className="mt-8 text-4xl font-bold leading-tight text-slate-950 md:text-5xl">
            Medical Disclaimer
          </h1>
          <p className="mt-4 text-slate-500">Last updated: July 2026</p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl space-y-8 px-6 py-14 lg:px-8">
        <div className="rounded-lg border border-amber-200 bg-amber-50 p-6 leading-8 text-amber-950">
          The content on this website, including condition guides, articles
          and screening tools, is provided for general educational purposes
          only. It is not a substitute for a professional psychiatric
          assessment, diagnosis or treatment plan from a qualified clinician
          who knows your personal medical history.
        </div>

        <section>
          <h2 className="text-2xl font-bold text-blue-950">No Doctor-Patient Relationship</h2>
          <p className="mt-3 leading-8 text-slate-600">
            Reading this website, including the condition library, patient
            guides, or using the self-screening tools, does not create a
            doctor-patient relationship with Dr. Kushal Kharel. A
            doctor-patient relationship is only established after a direct
            consultation, whether in person or online.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-blue-950">Screening Tools Are Not a Diagnosis</h2>
          <p className="mt-3 leading-8 text-slate-600">
            The screening tools on this website provide a general symptom
            score and interpretation for awareness purposes only. They do
            not diagnose any mental health condition. A formal diagnosis
            requires a comprehensive psychiatric assessment with a qualified
            clinician.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-blue-950">Individual Circumstances Vary</h2>
          <p className="mt-3 leading-8 text-slate-600">
            Information about causes, symptoms, treatment and medications on
            this website is general in nature. The right diagnosis and
            treatment plan for you depends on your specific history, symptoms
            and circumstances, which can only be properly assessed through a
            direct consultation. Do not start, stop, or change any medication
            based solely on information from this website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-blue-950">Emergencies</h2>
          <p className="mt-3 leading-8 text-slate-600">
            If you or someone you know is experiencing a psychiatric
            emergency — including thoughts of suicide or self-harm, severe
            confusion, or an inability to stay safe — go to the nearest
            hospital emergency department or call your local emergency
            services immediately. Do not wait for an online response.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-blue-950">Contact</h2>
          <p className="mt-3 leading-8 text-slate-600">
            For a personal assessment, please contact Dr. Kushal Kharel
            directly at{" "}
            <a href="tel:+9779861800547" className="font-semibold text-blue-700">
              +977 9861800547
            </a>{" "}
            or{" "}
            <a
              href="mailto:drkushalkharel@gmail.com"
              className="font-semibold text-blue-700"
            >
              drkushalkharel@gmail.com
            </a>
            .
          </p>
        </section>
      </article>
    </main>
  );
}
