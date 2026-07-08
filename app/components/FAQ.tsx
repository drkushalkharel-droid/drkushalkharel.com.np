import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Who is Dr. Kushal Kharel?",
    answer:
      "Dr. Kushal Kharel is a Consultant Psychiatrist based in Kathmandu, Nepal, providing evidence-based assessment, medication management, psychotherapy and telepsychiatry for children, adolescents, adults and older adults.",
  },
  {
    question: "What mental health conditions does Dr. Kushal Kharel treat?",
    answer:
      "Dr. Kushal Kharel treats anxiety disorders, depression, OCD, bipolar disorder, schizophrenia and other psychotic disorders, ADHD, autism spectrum disorder, addiction and de-addiction, insomnia and sleep disorders, and geriatric psychiatric conditions including dementia.",
  },
  {
    question: "What is Dr. Kushal Kharel's medical background and experience?",
    answer:
      "Dr. Kushal Kharel completed MD Psychiatry training at KIST Medical College Teaching Hospital (2023-2026) and previously worked as a Medical Officer at Kantipur Hospital (2020-2021), Patan Hospital (2021-2022) and Kathmandu ENT Hospital (2022-2023). He has run a psychiatric clinic in Kalanki, Kathmandu since 2020 and is a Nepal Medical Council registered psychiatrist.",
  },
  {
    question: "How do I book an appointment with Dr. Kushal Kharel?",
    answer:
      "Call +977 9861800547 or message on WhatsApp to book an in-person or online psychiatric consultation. The clinic is open Monday to Friday, 10:00 AM to 6:00 PM, and Saturday, 10:00 AM to 4:00 PM.",
  },
  {
    question: "Does Dr. Kushal Kharel offer online psychiatric consultation?",
    answer:
      "Yes. Online consultation is available for patients across Nepal and for Nepalis living abroad, and is suitable for follow-up appointments and many initial assessments. Urgent or complex situations may still need in-person or emergency evaluation.",
  },
  {
    question: "Where is Dr. Kushal Kharel's clinic located, and is parking available?",
    answer:
      "The clinic is located at Kalanki-14, Near Malpot Road, near Kalanki Bhatbhateni Supermarket, Kathmandu 44600, Nepal. Roadside parking is available near the clinic.",
  },
  {
    question: "Can Nepalis living abroad book a consultation?",
    answer:
      "Yes. Dr. Kushal Kharel provides online psychiatric consultation for Nepalis living in the USA, UK, Australia, Canada, Qatar, Dubai, and other countries, for concerns such as homesickness, isolation, work stress and family separation.",
  },
  {
    question: "Is my consultation with Dr. Kushal Kharel confidential?",
    answer:
      "Yes. All psychiatric consultations, whether in-person or online, are confidential and handled with professional discretion in line with standard medical ethics.",
  },
  {
    question: "What is neuropsychiatry?",
    answer:
      "Neuropsychiatry is the branch of psychiatry focused on mental health conditions that involve the brain's structure and function, such as dementia, delirium, and psychiatric symptoms arising from neurological conditions, bridging psychiatry and neurology.",
  },
  {
    question: "When should I see a psychiatrist?",
    answer:
      "See a psychiatrist when emotional, behavioral, or cognitive symptoms — low mood, excessive worry, sleep problems, concentration difficulties, or unusual thoughts or perceptions — persist for more than a few weeks and affect your daily life, work, or relationships.",
  },
  {
    question: "Can mental illnesses be treated effectively?",
    answer:
      "Yes. Most psychiatric conditions, including depression, anxiety disorders, bipolar disorder, OCD, and schizophrenia, respond well to evidence-based treatment combining medication, psychotherapy, and lifestyle support, especially with early diagnosis and consistent treatment.",
  },
  {
    question: "Are psychiatric medications safe?",
    answer:
      "When prescribed and monitored by a qualified psychiatrist, psychiatric medications are generally safe and effective. Like all medications, they carry potential side effects, which is why regular follow-up and open communication with your psychiatrist matter.",
  },
  {
    question: "How do online psychiatric consultations work?",
    answer:
      "Online consultations take place by phone or video call after booking through a call or WhatsApp message. Dr. Kushal Kharel reviews your symptoms, history, and current medications, then discusses a diagnosis and treatment plan, the same as an in-person visit.",
  },
  {
    question: "Can prescriptions be provided after an online consultation?",
    answer:
      "Yes, prescriptions can generally be provided following an online psychiatric consultation where clinically appropriate, in line with standard telepsychiatry practice, though some situations may still require an in-person follow-up.",
  },
  {
    question: "Who should attend in-person instead of an online consultation?",
    answer:
      "Patients with severe symptoms, safety concerns, a first-time complex assessment, or situations requiring physical examination are generally advised to attend in-person rather than online, to allow a more thorough evaluation.",
  },
];

export default function FAQ() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section id="faq" className="bg-slate-50 py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[3px] text-blue-700">
            <HelpCircle size={16} aria-hidden="true" />
            Frequently Asked Questions
          </span>
          <h2 className="mt-5 text-4xl font-bold leading-tight text-slate-950 md:text-5xl">
            Common questions about psychiatric care in Kathmandu
          </h2>
        </div>

        <div className="mt-14 space-y-6">
          {faqs.map((faq) => (
            <article
              key={faq.question}
              className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <h3 className="text-xl font-bold text-blue-950">{faq.question}</h3>
              <p className="mt-3 leading-8 text-slate-600">{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
