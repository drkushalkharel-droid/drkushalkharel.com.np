import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function Conditions() {
  const conditions = [
    {
      icon: "😊",
      title: "Depression",
      desc: "Persistent sadness, loss of interest, fatigue and low mood.",
      href: "/knowledge/depression-treatment-nepal",
    },
    {
      icon: "😰",
      title: "Anxiety Disorders",
      desc: "Generalized anxiety, panic attacks, phobias and excessive worry.",
      href: "/anxiety",
    },
    {
      icon: "🔄",
      title: "Obsessive-Compulsive Disorder (OCD)",
      desc: "Obsessions, compulsions and repetitive intrusive thoughts.",
      href: "/knowledge/obsessive-compulsive-disorder",
    },
    {
      icon: "⚖️",
      title: "Bipolar Disorder",
      desc: "Episodes of depression, mania and mood instability.",
      href: "/knowledge/mania",
    },
    {
      icon: "🧠",
      title: "Schizophrenia & Psychosis",
      desc: "Hallucinations, delusions and disturbances in thinking.",
      href: "/knowledge/schizophrenia",
    },
    {
      icon: "👦",
      title: "ADHD",
      desc: "Attention, hyperactivity and impulsivity in children and adults.",
      href: "/knowledge/adhd",
    },
    {
      icon: "🧩",
      title: "Autism Spectrum Disorder",
      desc: "Assessment, diagnosis and long-term developmental support.",
      href: "/knowledge/autism-spectrum-disorder",
    },
    {
      icon: "🍷",
      title: "Addiction & De-addiction",
      desc: "Alcohol, nicotine and substance use disorder treatment.",
      href: "/knowledge/alcohol-dependence-syndrome",
    },
    {
      icon: "🌙",
      title: "Sleep Disorders",
      desc: "Insomnia, poor sleep quality and circadian rhythm problems.",
      href: "/knowledge/insomnia",
    },
    {
      icon: "😖",
      title: "Stress & Burnout",
      desc: "Stress management, adjustment disorders and emotional wellbeing.",
      href: "/knowledge/adjustment-disorder",
    },
    {
      icon: "🧓",
      title: "Dementia & Memory Problems",
      desc: "Memory assessment and management of cognitive disorders.",
      href: "/knowledge/dementia",
    },
    {
      icon: "⚡",
      title: "PTSD & Trauma",
      desc: "Post-traumatic stress, flashbacks and trauma-focused therapy.",
      href: "/conditions/ptsd",
    },
    {
      icon: "👨‍👩‍👧",
      title: "Child & Adolescent Psychiatry",
      desc: "Behavioral, emotional and developmental mental health conditions.",
      href: "/child-adolescent-psychiatry",
    }
  ];

  return (
    <section id="conditions" className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-sage-700 font-semibold uppercase tracking-[4px]">
            Conditions We Treat
          </span>

          <h2 className="text-5xl font-bold text-gray-900 mt-4">
            Comprehensive Mental Health Care
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive psychiatric assessment, diagnosis and
            evidence-based treatment for a wide range of mental health
            conditions in children, adolescents, adults and older adults.
          </p>

        </div>

        <details className="group">
          <summary className="mx-auto flex w-fit cursor-pointer list-none items-center gap-2 rounded-lg border border-sage-200 bg-sage-50 px-6 py-3 font-semibold text-sage-800 transition hover:border-sage-400 hover:bg-sage-100">
            View conditions we treat
            <ChevronDown size={18} className="transition group-open:rotate-180" aria-hidden="true" />
          </summary>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">

          {conditions.map((condition, index) => {
            const content = (
              <>
                <div className="text-5xl mb-5">
                  {condition.icon}
                </div>

                <h3 className="text-2xl font-bold text-sage-900">
                  {condition.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-8">
                  {condition.desc}
                </p>

                {condition.href && (
                  <p className="mt-5 font-semibold text-sage-700">
                    Read patient guide
                  </p>
                )}
              </>
            );

            if (condition.href) {
              return (
                <Link
                  key={condition.title}
                  href={condition.href}
                  className="bg-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
                >
                  {content}
                </Link>
              );
            }

            return (
              <div
                key={index}
                className="bg-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
              >
                {content}
              </div>
            );
          })}

        </div>
        </details>

        <div className="text-center mt-16">

          <h3 className="text-3xl font-bold text-gray-900">
            Don&apos;t see your condition listed?
          </h3>

          <p className="mt-4 text-lg text-gray-600">
            Mental health conditions often overlap. A comprehensive psychiatric
            assessment can help determine the most appropriate diagnosis and
            treatment plan.
          </p>

          <a
            href="tel:+9779861800547"
            className="inline-block mt-8 bg-sage-700 hover:bg-sage-800 text-white px-8 py-4 rounded-xl font-semibold transition"
          >
            Schedule a Consultation
          </a>

        </div>

      </div>

    </section>
  );
}
