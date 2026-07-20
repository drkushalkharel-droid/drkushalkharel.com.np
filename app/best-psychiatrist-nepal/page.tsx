import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import { buildSpeakableSpec } from "../lib/schema";

const siteUrl = "https://drkushalkharel.com.np";
const pageUrl = `${siteUrl}/best-psychiatrist-nepal`;
const title = "Best Psychiatrist in Nepal | Anxiety, Depression & OCD Treatment";
const description =
  "Looking for the best psychiatrist in Nepal? Learn about psychiatric treatment for anxiety, depression, OCD, schizophrenia, bipolar disorder, counselling, and online consultations.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/best-psychiatrist-nepal" },
  keywords: [
    "Best Psychiatrist in Nepal",
    "Top Psychiatrist in Nepal",
    "Best Psychiatrist in Kathmandu",
    "Best Counsellor in Nepal",
    "Anxiety Doctor Nepal",
    "Depression Doctor Nepal",
    "OCD Specialist Nepal",
    "Schizophrenia Treatment Nepal",
    "Mental Health Doctor Nepal",
    "Psychiatrist for Anxiety",
    "Psychiatrist for Depression",
    "Psychiatric Consultation Nepal",
    "Online Psychiatrist Nepal",
    "Neuropsychiatrist Nepal",
  ],
  openGraph: {
    title,
    description,
    url: pageUrl,
    siteName: "Dr. Kushal Kharel",
    images: [{ url: "/images/doctor.png", width: 1200, height: 630, alt: "Dr. Kushal Kharel, Consultant Psychiatrist in Kathmandu" }],
    type: "article",
  },
  twitter: { card: "summary_large_image", title, description, images: ["/images/doctor.png"] },
};

const faqs = [
  {
    question: "Who is the best psychiatrist in Nepal?",
    answer:
      "There is no official ranking that identifies one best psychiatrist for every person. A useful choice is a Nepal Medical Council-registered psychiatrist whose qualifications, areas of practice, communication style and treatment approach fit your needs. Dr. Kushal Kharel is a Consultant Psychiatrist in Kathmandu with an MD in Psychiatry, providing assessment, treatment, counselling and online consultation.",
  },
  {
    question: "When should I see a psychiatrist?",
    answer:
      "Consider a psychiatric assessment when emotional, behavioural, sleep, thinking or substance-use symptoms persist, cause distress, affect work, study, relationships or self-care, or include safety concerns. You do not need to wait until symptoms become severe to ask for help.",
  },
  {
    question: "Can a psychiatrist provide counselling?",
    answer:
      "Yes. A psychiatrist can provide supportive counselling and some forms of psychotherapy, as well as medical assessment and medication when appropriate. Depending on the concern, a psychiatrist may also recommend work with a clinical psychologist or another therapist.",
  },
  {
    question: "Can I see a psychiatrist online in Nepal?",
    answer:
      "Online psychiatric consultations can be appropriate for many concerns, including follow-up visits, psychoeducation, medication review and many initial assessments. Some urgent, complex or physically unwell situations require in-person or emergency assessment instead.",
  },
  {
    question: "Will I definitely need medication?",
    answer:
      "No. Treatment is individual. Some people benefit mainly from counselling, psychotherapy, sleep and routine changes, family support or treatment of a physical health issue. Medication may be discussed when its likely benefits outweigh its risks, and should be reviewed together over time.",
  },
  {
    question: "Are psychiatric consultations confidential?",
    answer:
      "Psychiatric care is handled with professional confidentiality. A clinician may need to involve others when there is a serious and immediate safety risk or where required by law; this is usually explained as part of the consultation.",
  },
];

const conditionLinks = [
  ["Anxiety disorders", "/anxiety"],
  ["Depression", "/conditions/major-depressive-disorder"],
  ["OCD", "/conditions/ocd"],
  ["Schizophrenia", "/conditions/schizophrenia"],
  ["Bipolar disorder", "/conditions/bipolar-i-disorder"],
  ["Panic disorder", "/conditions/panic-disorder"],
  ["PTSD", "/conditions/ptsd"],
  ["ADHD", "/conditions/adhd"],
  ["Autism spectrum disorder", "/conditions/autism-spectrum-disorder"],
  ["Sleep disorders", "/conditions/insomnia"],
  ["Addiction", "/conditions/alcohol-use-disorder"],
  ["Dementia", "/knowledge/dementia"],
] as const;

export default function BestPsychiatristNepalPage() {
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: title,
    description,
    url: pageUrl,
    inLanguage: "en",
    medicalAudience: ["Patient", "Caregiver"],
    about: { "@id": `${siteUrl}#clinic` },
    author: { "@id": `${siteUrl}#psychiatrist` },
    reviewedBy: { "@id": `${siteUrl}#psychiatrist` },
    speakable: buildSpeakableSpec(["#psychiatrist-nepal-answer"]),
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Psychiatrist in Nepal", item: pageUrl },
    ],
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }} />

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 pb-14 pt-28 lg:px-8 lg:pt-32">
          <Link href="/" className="font-semibold text-blue-700">&larr; Back to home</Link>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[3px] text-blue-700">Psychiatric care in Kathmandu &amp; online</p>
          <h1 className="mt-5 text-4xl font-bold leading-tight text-slate-950 md:text-6xl">Best Psychiatrist in Nepal for Anxiety, Depression, OCD &amp; Schizophrenia</h1>
          <p id="psychiatrist-nepal-answer" className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">
            Searching for the best psychiatrist in Nepal often means looking for clear answers, respectful care and a practical next step. There is no single doctor who is right for every person. The most helpful choice is a qualified, registered psychiatrist who listens carefully, explains options clearly and creates a treatment plan around your symptoms, health, circumstances and goals. Dr. Kushal Kharel is a Consultant Psychiatrist in Kathmandu providing psychiatric assessment, counselling, psychotherapy, medication management, addiction care and online consultation.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="tel:+9779861800547" className="inline-flex items-center gap-3 rounded-lg bg-blue-700 px-6 py-3 font-bold text-white transition hover:bg-blue-800"><Phone size={20} aria-hidden="true" />Call +977 9861800547</a>
            <a href="https://wa.me/9779861800547" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-lg border border-green-600 px-6 py-3 font-bold text-green-700 transition hover:bg-green-600 hover:text-white"><MessageCircle size={20} aria-hidden="true" />WhatsApp for an appointment</a>
          </div>
          <div className="mt-10 rounded-lg border border-slate-200 bg-slate-50 p-5">
            <p className="font-bold text-slate-950">Dr. Kushal Kharel, MD Psychiatry</p>
            <p className="text-slate-600">Consultant Psychiatrist · Nepal Medical Council registered · Kathmandu, Nepal</p>
            <p className="text-slate-600">In-person consultation in Kalanki and online consultation where appropriate</p>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-5xl space-y-6 px-6 py-14 lg:px-8">
        <Section title="How to Choose a Psychiatrist in Nepal">
          <p>“Best psychiatrist” is a search phrase, not a clinical credential. It is reasonable to look for a doctor with appropriate training, Nepal Medical Council registration, experience with your main concern, and a style of care that helps you participate in decisions. A good consultation should leave you with a clearer understanding of what may be happening, what needs to be checked, and what you can do next.</p>
          <p>Ask whether the clinician treats your concern regularly, offers in-person or online follow-up, explains benefits and possible side effects of treatment, and can coordinate with psychologists, physicians or family when needed. Credentials matter, but so do privacy, accessibility, language, affordability and a plan you can realistically follow. It is also appropriate to seek a second opinion if a diagnosis or treatment plan remains unclear.</p>
          <div className="grid gap-4 sm:grid-cols-2">
            <Fact title="Qualifications" text="Look for a registered medical doctor with specialist training in psychiatry. Dr. Kharel holds an MD in Psychiatry and practises as a Consultant Psychiatrist." />
            <Fact title="Individualised care" text="The same label can look different in different people. Assessment should consider symptoms, physical health, medicines, family history, stressors and your own priorities." />
            <Fact title="Communication" text="You should be able to ask what a diagnosis means, why a treatment is suggested, what alternatives exist and when progress will be reviewed." />
            <Fact title="Continuity" text="Mental health care often works best with follow-up. Choose a service where review, adjustment and referral are possible when your needs change." />
          </div>
        </Section>

        <Section title="When Should You See a Psychiatrist?">
          <p>A psychiatrist is a medical doctor specialising in mental health. People see a psychiatrist for persistent worry, low mood, changes in sleep or appetite, panic attacks, intrusive thoughts, mood swings, unusual beliefs or perceptions, attention difficulties, substance use, memory changes and many other concerns. You do not need to be certain of a diagnosis before booking; assessment is part of the service.</p>
          <p>Consider booking a psychiatric consultation if symptoms last for two weeks or more, keep returning, interfere with work or study, affect relationships, or make ordinary tasks feel difficult. Early help can prevent a problem from becoming more disruptive. A consultation can also be useful when treatment from another service has not helped as expected, medication causes troublesome effects, or family members are concerned about a change in behaviour.</p>
          <h3 className="text-xl font-bold text-blue-950">Symptoms that deserve prompt attention</h3>
          <ul className="list-disc space-y-2 pl-5">
            <li>Thoughts of self-harm, suicide or harming another person; feeling unable to stay safe.</li>
            <li>Hearing or seeing things others do not, severe confusion, extreme suspiciousness or markedly disorganised behaviour.</li>
            <li>Several days with very little sleep together with unusually high energy, racing thoughts, impulsive spending or risky behaviour.</li>
            <li>Severe withdrawal, not eating or drinking enough, inability to care for yourself, or alcohol/drug withdrawal symptoms.</li>
          </ul>
          <p className="rounded-lg border-l-4 border-red-600 bg-red-50 p-4 text-slate-800"><strong>Emergency note:</strong> If there is immediate danger, severe agitation, an overdose, a suicide attempt or inability to remain safe, do not wait for an online appointment. Go to the nearest emergency department or call local emergency services, and ask a trusted person to stay with the affected person if it is safe to do so.</p>
        </Section>

        <Section title="What Happens During a Psychiatric Consultation?">
          <p>A first consultation is a structured conversation, not a test that you can pass or fail. The psychiatrist may ask about your main difficulties, when they started, how they affect daily life, previous treatment, physical health, current medicines, sleep, substance use and family history. With your permission, input from a close family member can sometimes help, particularly when memory, severe mood change or psychosis is involved.</p>
          <p>Diagnosis in psychiatry is clinical: it is based on a careful history, observation and recognised diagnostic criteria. A doctor may recommend blood tests, a physical examination, brain imaging or another specialist review when symptoms could be related to a medical condition or medicine. Not every person needs every test. The goal is to understand the whole picture rather than to place someone in a label quickly.</p>
          <p>At the end, you should have a shared plan. That may include education about the problem, counselling or psychotherapy, practical changes to sleep and routine, medication, a referral, family guidance, a safety plan, or a follow-up appointment. Good treatment is collaborative: you can say what feels manageable, what worries you, and what outcomes matter most to you.</p>
        </Section>

        <Section title="Anxiety Disorder Treatment in Nepal">
          <p>Anxiety is more than ordinary nervousness when fear or worry is persistent, difficult to control or starts limiting life. It may show up as constant “what if” thoughts, restlessness, muscle tension, poor sleep, irritability, stomach symptoms, avoidance or a sense that something bad is about to happen. Generalised anxiety, social anxiety, phobias and panic disorder have different patterns, but all can be assessed and treated.</p>
          <p>Care commonly begins with understanding triggers, safety behaviours, sleep, caffeine or substance use, medical contributors and the ways anxiety affects daily life. Psychological approaches such as cognitive behavioural therapy (CBT), gradual exposure and relaxation or grounding skills can be very helpful. Medication may be considered for moderate to severe or persistent anxiety, alongside therapy or when therapy alone is not enough. The right approach depends on the person; sedating medicines are not a long-term answer for everyone.</p>
          <p><Link href="/anxiety" className="font-semibold text-blue-700 underline">Read the detailed anxiety treatment guide</Link> for symptoms, causes, therapy and online-care information.</p>
        </Section>

        <Section title="Depression Treatment in Nepal">
          <p>Depression is not a weakness or a lack of gratitude. It can involve low mood, loss of interest, hopelessness, fatigue, poor concentration, changes in sleep or appetite, slowed movement, guilt and thoughts that life is not worth living. Some people describe mainly physical symptoms, irritability or loss of motivation rather than sadness. Depression can occur alongside anxiety, chronic illness, grief, alcohol use or major life stress.</p>
          <p>A psychiatric assessment helps distinguish depression from bipolar disorder, medication effects, thyroid and other physical health problems, and normal but painful reactions to loss. Treatment may include behavioural activation, CBT or interpersonal therapy, support with routine and relationships, medication when appropriate, and follow-up to monitor response and safety. If someone has suicidal thoughts, urgent assessment is important; they should not manage this alone.</p>
          <p><Link href="/conditions/major-depressive-disorder" className="font-semibold text-blue-700 underline">Explore the depression information page</Link> for a fuller patient guide.</p>
        </Section>

        <Section title="OCD Treatment and Intrusive Thoughts">
          <p>Obsessive-compulsive disorder (OCD) involves unwanted, recurring thoughts, images or urges (obsessions) and repetitive actions or mental rituals (compulsions) performed to reduce distress or prevent something feared. Common themes include contamination, checking, harm, religious or sexual intrusive thoughts, symmetry and doubt. Having an intrusive thought does not mean you want it or will act on it; people with OCD often find these thoughts deeply upsetting precisely because they conflict with their values.</p>
          <p>Effective OCD care is specialised and usually includes exposure and response prevention (ERP), a form of CBT that helps a person face triggers gradually without carrying out the usual compulsion. Medication can also be useful for some people, particularly when symptoms are moderate to severe or therapy access is limited. Reassurance alone may briefly soothe OCD but can unintentionally strengthen its cycle, so treatment focuses on building tolerance for uncertainty and reducing rituals over time.</p>
          <p><Link href="/conditions/ocd" className="font-semibold text-blue-700 underline">Learn more about OCD assessment and treatment</Link>.</p>
        </Section>

        <Section title="Schizophrenia and Psychosis Treatment">
          <p>Schizophrenia is a long-term condition that can affect thinking, perception, motivation, emotion and functioning. Psychosis can include hearing voices, fixed beliefs that others do not share, severe suspiciousness, confused speech or behaviour, and difficulty distinguishing what is real. Psychosis can also occur with bipolar disorder, severe depression, substance use, sleep deprivation or medical illness, so a careful assessment matters.</p>
          <p>Treatment usually combines medication with education, family involvement where welcomed, support for routine and recovery, and attention to sleep, substance use and physical health. The aim is not only to reduce distressing symptoms but also to help the person return to meaningful roles and maintain dignity. Relapse prevention is important: families can learn early warning signs, how to respond calmly and when to seek urgent help. Do not stop antipsychotic medication suddenly without medical advice unless there is an emergency reaction.</p>
          <p><Link href="/conditions/schizophrenia" className="font-semibold text-blue-700 underline">Read the schizophrenia patient guide</Link> and use emergency services if behaviour is unsafe or severely disturbed.</p>
        </Section>

        <Section title="Bipolar Disorder, Panic Attacks and PTSD">
          <p><strong>Bipolar disorder</strong> involves episodes of depression and episodes of mania or hypomania. Mania may include a reduced need for sleep, unusually elevated or irritable mood, fast speech, racing ideas, inflated confidence, impulsive decisions or behaviour that is out of character. It is different from ordinary mood changes. Accurate diagnosis is especially important because treatment for depression alone may not suit someone with bipolar disorder.</p>
          <p><strong>Panic attacks</strong> are sudden waves of intense fear with symptoms such as a racing heart, breathlessness, chest tightness, dizziness, trembling or fear of dying or losing control. They are frightening but treatable. A clinician may check for physical causes, then help you understand the alarm response, practise skills and reduce avoidance. New or severe chest symptoms still deserve medical assessment.</p>
          <p><strong>Post-traumatic stress disorder (PTSD)</strong> may follow a traumatic event and can involve flashbacks, nightmares, avoidance, feeling constantly on guard, emotional numbness and disturbed sleep. Trauma-focused therapy is often central to care. The pace should be safe and collaborative; people do not need to recount every detail before they are ready.</p>
          <div className="grid gap-3 sm:grid-cols-3"><InlineLink href="/conditions/bipolar-i-disorder">Bipolar disorder guide</InlineLink><InlineLink href="/conditions/panic-disorder">Panic disorder guide</InlineLink><InlineLink href="/conditions/ptsd">PTSD guide</InlineLink></div>
        </Section>

        <Section title="ADHD, Autism, Sleep, Addiction and Dementia">
          <p><strong>ADHD</strong> can continue into adulthood and may involve distractibility, disorganisation, impulsivity, forgetfulness and difficulty regulating attention. Assessment considers childhood history, present-day functioning, anxiety, depression, sleep and other conditions that can look similar. Treatment can include practical strategies, therapy, workplace or study support and medication when clinically appropriate.</p>
          <p><strong>Autism</strong> is a neurodevelopmental difference, not a mental illness to be “cured.” Psychiatry referral may be helpful when an autistic person also has anxiety, depression, sleep problems, ADHD, aggression, severe distress or a need for medication review. Support should respect the person’s communication style, strengths and autonomy.</p>
          <p><strong>Sleep disorders</strong> can both cause and worsen mental health symptoms. Insomnia, irregular sleep schedules, nightmares, restless legs and sleep-apnoea symptoms need a tailored assessment. Treatment may address habits, stress, medication, depression or anxiety, and sometimes requires medical or sleep-specialist referral.</p>
          <p><strong>Addiction</strong> is a health condition, not a moral failure. Alcohol, tobacco, cannabis, opioids, sedatives and behavioural addictions can affect mood, sleep, judgement and relationships. Safe treatment may involve withdrawal planning, medication, counselling, relapse-prevention work and family support. Sudden withdrawal from alcohol or sedatives can be dangerous and should be medically assessed.</p>
          <p><strong>Dementia and memory change</strong> need medical evaluation, especially when memory loss is new, rapidly worsening or accompanied by confusion. Depression, medication effects, thyroid disease, vitamin deficiencies and delirium can mimic or worsen cognitive problems. A psychiatrist can help assess mood and behaviour symptoms while coordinating broader medical care.</p>
        </Section>

        <Section title="Stress, Burnout and Counselling">
          <p>Stress is a normal response to pressure, but prolonged stress can lead to irritability, poor sleep, headaches, low motivation, emotional exhaustion and difficulty concentrating. Burnout often develops when demands remain high while recovery, control or support is low. Counselling can offer a private space to make sense of pressure, set boundaries, identify coping patterns and plan small, sustainable changes.</p>
          <p>Psychiatric consultation can be useful when stress is accompanied by persistent anxiety, depression, panic, heavy alcohol or drug use, significant sleep disturbance, thoughts of self-harm or inability to function. It is not necessary to choose perfectly between “counselling” and “psychiatry” before seeking help. An assessment can identify the right level of support and refer you to another professional when that would serve you better.</p>
          <p><Link href="/counselling-in-nepal" className="font-semibold text-blue-700 underline">Read about counselling and psychiatric services in Nepal</Link>.</p>
        </Section>

        <Section title="Psychiatrist vs Psychologist vs Counsellor">
          <div className="overflow-x-auto rounded-lg border border-slate-200"><table className="w-full min-w-[680px] text-left text-base"><thead className="bg-slate-100"><tr><th className="px-4 py-3">Provider</th><th className="px-4 py-3">Main role</th><th className="px-4 py-3">Medication</th></tr></thead><tbody className="text-slate-700"><tr className="border-t"><td className="px-4 py-3 font-semibold">Psychiatrist</td><td className="px-4 py-3">Medical assessment, diagnosis, medication management, counselling/psychotherapy and referral.</td><td className="px-4 py-3">Can prescribe when appropriate.</td></tr><tr className="border-t"><td className="px-4 py-3 font-semibold">Clinical psychologist</td><td className="px-4 py-3">Psychological assessment and structured psychotherapy, such as CBT or ERP.</td><td className="px-4 py-3">Does not prescribe medication.</td></tr><tr className="border-t"><td className="px-4 py-3 font-semibold">Counsellor</td><td className="px-4 py-3">Supportive listening, guidance and coping strategies for stress and life difficulties.</td><td className="px-4 py-3">Does not prescribe medication.</td></tr></tbody></table></div>
          <p>These roles can complement each other. For example, someone with OCD may see a psychiatrist for diagnosis and medication review while working with a therapist on ERP. Someone with relationship stress may start with counselling and be referred for psychiatric assessment if depression, panic or safety concerns emerge.</p>
        </Section>

        <Section title="Treatment Options: What a Personalised Plan Can Include">
          <p>There is no universal treatment package. Your plan may include one or several approaches, reviewed as symptoms and circumstances change:</p>
          <ul className="list-disc space-y-2 pl-5"><li><strong>Psychoeducation:</strong> understanding symptoms, triggers, early warning signs and realistic recovery goals.</li><li><strong>Psychotherapy and counselling:</strong> approaches such as CBT, ERP, supportive therapy, behavioural activation or trauma-focused work when suitable.</li><li><strong>Medication:</strong> considered after discussing expected benefits, possible side effects, interactions, pregnancy plans, monitoring and alternatives.</li><li><strong>Lifestyle and routine support:</strong> sleep, regular meals, activity, reducing harmful substance use, social connection and stress management.</li><li><strong>Family work:</strong> education and communication support, with the patient’s consent whenever possible.</li><li><strong>Referral and coordinated care:</strong> linking with psychologists, physicians, neurologists, addiction services or emergency care when needed.</li></ul>
          <p>Recovery is rarely completely linear. Follow-up provides a place to review what is improving, what is difficult, and whether the plan needs to change. Never change or stop prescribed psychiatric medication on your own without discussing it with the prescriber, unless emergency medical advice tells you otherwise.</p>
        </Section>

        <Section title="Online Psychiatric Consultation in Nepal">
          <p>Online consultation can make psychiatric care more accessible for people outside Kathmandu, people with mobility or caregiving responsibilities, Nepalis living abroad and those who find travel difficult. It can be useful for many follow-ups, therapy-informed conversations, medication reviews, education and selected initial assessments. A quiet, private place and a stable phone or internet connection make the session more useful.</p>
          <p>Before an online visit, write down your main concerns, medicines and doses, previous reports, questions and a contact person to reach in an emergency if appropriate. Be honest about where you are physically located during the appointment, because this affects emergency planning. Online care is not suitable for every situation: severe confusion, imminent self-harm risk, violent behaviour, serious withdrawal and urgent medical symptoms need local in-person or emergency help.</p>
          <p>To request an appointment, call <a className="font-semibold text-blue-700 underline" href="tel:+9779861800547">+977 9861800547</a> or send a WhatsApp message. The clinic can advise whether in-person or online consultation is the better starting point.</p>
        </Section>

        <Section title="Frequently Asked Questions"><div className="space-y-5">{faqs.map((faq) => <div key={faq.question} className="rounded-lg border border-slate-200 p-5"><h3 className="font-bold text-blue-950">{faq.question}</h3><p className="mt-2 leading-7 text-slate-700">{faq.answer}</p></div>)}</div></Section>

        <Section title="Explore Condition Guides and Resources">
          <p>These in-depth pages support this cornerstone guide. They are useful for learning before or after an appointment, but they cannot replace a personal assessment.</p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{conditionLinks.map(([label, href]) => <InlineLink key={href} href={href}>{label}</InlineLink>)}</div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2"><InlineLink href="/conditions">Browse all conditions (A–Z)</InlineLink><InlineLink href="/resources">Patient leaflets and resources</InlineLink></div>
        </Section>

        <section className="rounded-lg bg-blue-950 p-8 text-white"><h2 className="text-3xl font-bold">Book a psychiatric consultation</h2><p className="mt-4 max-w-3xl leading-8 text-blue-100">Dr. Kushal Kharel provides confidential psychiatric consultation in Kalanki, Kathmandu, as well as online consultation when clinically appropriate. You can discuss anxiety, depression, OCD, bipolar disorder, psychosis, addiction, sleep, stress or another mental-health concern.</p><div className="mt-6 flex flex-wrap gap-4"><a href="tel:+9779861800547" className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-950">Call +977 9861800547</a><a href="https://wa.me/9779861800547" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-white/50 px-6 py-3 font-semibold text-white">Message on WhatsApp</a></div></section>
      </article>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8"><h2 className="text-3xl font-bold text-blue-950">{title}</h2><div className="mt-5 space-y-4 text-lg leading-9 text-slate-700">{children}</div></section>;
}

function Fact({ title, text }: { title: string; text: string }) {
  return <div className="rounded-lg border border-slate-200 bg-slate-50 p-5"><h3 className="font-bold text-blue-950">{title}</h3><p className="mt-2 leading-7 text-slate-600">{text}</p></div>;
}

function InlineLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Link href={href} className="rounded-lg border border-slate-200 bg-white p-4 font-semibold text-blue-800 transition hover:border-blue-300 hover:bg-blue-50">{children}</Link>;
}
