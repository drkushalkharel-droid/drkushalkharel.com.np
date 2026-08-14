import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Who is the best psychiatrist in Kathmandu?",
    answer:
      "There is no official ranking for 'best psychiatrist' — it's a search phrase, not a clinical credential. A reasonable way to choose is a Nepal Medical Council-registered psychiatrist with relevant experience and a communication style that fits you. Dr. Kushal Kharel is a Nepal Medical Council-registered Consultant Psychiatrist (MD Psychiatry, registration #27199) practicing in Kalanki, Kathmandu since 2020, offering in-person and online consultation for anxiety, depression, OCD, bipolar disorder, schizophrenia, ADHD and addiction.",
  },
  {
    question: "Who is a psychiatrist in Nepal?",
    answer:
      "Dr. Kushal Kharel is a Consultant Psychiatrist based in Kathmandu, Nepal, registered with the Nepal Medical Council. He provides evidence-based assessment, diagnosis, medication management and psychotherapy for children, adolescents, adults and older adults, in person and online.",
  },
  {
    question: "What does a psychiatrist do in Nepal?",
    answer:
      "A psychiatrist in Nepal is a medical doctor who diagnoses and treats mental health conditions such as anxiety, depression, OCD, bipolar disorder, schizophrenia, ADHD and addiction. Dr. Kushal Kharel provides assessment, diagnosis, medication management and psychotherapy, in person in Kathmandu or via online consultation.",
  },
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
    question: "How do I book a psychiatrist in Nepal?",
    answer:
      "Call +977 9861800547 or message on WhatsApp to book an appointment with Dr. Kushal Kharel in Kathmandu. In-person visits are available Sunday to Friday, 8:00 AM to 10:00 PM, and Saturday, 10:00 AM to 4:00 PM; online consultation is available for patients anywhere in Nepal or abroad.",
  },
  {
    question: "How do I book an appointment with Dr. Kushal Kharel?",
    answer:
      "Call +977 9861800547 or message on WhatsApp to book an in-person or online psychiatric consultation. The clinic is open Sunday to Friday, 8:00 AM to 10:00 PM, and Saturday, 10:00 AM to 4:00 PM.",
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
    question: "How do I find a psychiatrist near me in Kathmandu?",
    answer:
      "Dr. Kushal Kharel's clinic is at Kalanki-14, Near Malpot Road, Kathmandu, near Kalanki Bhatbhateni Supermarket, with roadside parking available. Online consultation is also available if you're elsewhere in Nepal or unable to visit in person.",
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
    question: "When should someone see a psychiatrist?",
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
  {
    question: "Is Dr. Kushal Kharel a psychiatrist or a general physician?",
    answer:
      "Dr. Kushal Kharel is a Consultant Psychiatrist, a medical doctor specialised in diagnosing and treating mental health conditions, not a general physician for physical illnesses, injuries or routine check-ups. If you need a general physician, this clinic can point you toward appropriate general medical care in Kathmandu instead.",
  },
  {
    question: "Is this a 24-hour clinic or emergency service?",
    answer:
      "No. The clinic operates fixed hours: Sunday to Friday, 8:00 AM to 10:00 PM, and Saturday, 10:00 AM to 4:00 PM. For a psychiatric or medical emergency outside these hours, including thoughts of self-harm, severe confusion or immediate safety risk, go to the nearest emergency department rather than waiting to call.",
  },
  {
    question: "Is there a female psychiatrist or female counselor available?",
    answer:
      "Dr. Kushal Kharel, the psychiatrist at this clinic, is male. For patients who would feel more comfortable speaking with a woman, a qualified female counselor can be arranged as part of your care based on your preference, alongside Dr. Kharel's psychiatric assessment where relevant. Mention this when you book.",
  },
  {
    question: "Do you offer teleconsultation services?",
    answer:
      "Yes. Teleconsultation (online consultation by phone or video call) is available for patients across Nepal and Nepalis living abroad, suitable for follow-up appointments and many initial assessments. Urgent or complex situations may still need in-person or emergency evaluation.",
  },
  {
    question: "What can I expect during my first appointment?",
    answer:
      "A first appointment is a structured conversation, not a test to pass or fail. Dr. Kharel asks about your main difficulties, when they started, how they affect daily life, previous treatment, physical health, current medicines, sleep and family history. You'll leave with a shared plan — which may include education, therapy, medication, a referral, or a follow-up appointment.",
  },
  {
    question: "Do I have to take lifelong medication if started on psychotropics?",
    answer:
      "Not necessarily. This depends entirely on the condition, its severity, and how you respond to treatment. Many people take medication for a defined period alongside therapy and later taper off under medical supervision, while others with longer-term or recurring conditions benefit from continuing treatment for longer. This is reviewed periodically with you, not decided once and left unchanged.",
  },
  {
    question: "How long are appointments?",
    answer:
      "An initial assessment takes longer than a routine follow-up, since it involves a fuller history. Exact timing varies by complexity — ask when you call or message to book if you need to plan your day around it.",
  },
  {
    question: "Is medication needed in all the cases?",
    answer:
      "No. Treatment is individualized. Some people benefit mainly from psychotherapy, counselling, sleep and routine changes, or family support. Medication is considered when its likely benefits outweigh its risks for your specific situation, and this is discussed together rather than assumed.",
  },
  {
    question: "Do you provide psychotherapy/counseling sessions?",
    answer:
      "Yes. Dr. Kharel provides supportive counselling and structured psychotherapy approaches such as CBT alongside medical assessment and medication management when appropriate, and can refer to a clinical psychologist for specialised therapy when that's a better fit.",
  },
  {
    question: "Is it true that psychiatric medications have a lot of side effects?",
    answer:
      "Like all medications, psychiatric medications can have side effects, but this is often overstated as a blanket rule. Most people tolerate modern psychiatric medications reasonably well, side effects are discussed before starting, and the choice, dose and monitoring are individualized specifically to minimize them while still treating the underlying condition effectively.",
  },
  {
    question: "Does Dr. Kushal Kharel explain medication and diagnosis clearly?",
    answer:
      "Yes. Consultations are structured to explain what a diagnosis means, why a particular medication or therapy is being suggested, what the alternatives are, what side effects to watch for, and when the plan will be reviewed, so you can take part in the decision rather than just receiving instructions.",
  },
  {
    question: "Will my appointment feel rushed?",
    answer:
      "Appointments are structured as a full conversation about your main concern, history and goals rather than a quick prescription-only visit. First assessments in particular take the time needed to understand the full picture before agreeing on a plan together.",
  },
  {
    question: "Is the clinic a judgment-free or safe space to talk about difficult issues?",
    answer:
      "Yes. Psychiatric consultations are confidential and non-judgmental by professional standard, whether the concern is addiction, relationship difficulty, sexual health, a parenting worry or anything else that feels hard to say out loud. You do not need to have the 'right words' prepared before booking.",
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
    <section id="faq" className="bg-stone-50 py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[3px] text-sage-700">
            <HelpCircle size={16} aria-hidden="true" />
            Frequently Asked Questions
          </span>
          <h2 className="mt-5 text-4xl font-bold leading-tight text-stone-950 md:text-5xl">
            Common questions about psychiatric care in Kathmandu
          </h2>
        </div>

        <div className="mt-14 space-y-6">
          {faqs.map((faq) => (
            <article
              key={faq.question}
              className="rounded-lg border border-stone-200 bg-white p-6 shadow-sm md:p-8"
            >
              <h3 className="text-xl font-bold text-sage-950">{faq.question}</h3>
              <p className="mt-3 leading-8 text-stone-600">{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
