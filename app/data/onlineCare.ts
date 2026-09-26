// Single source of truth for how online (video) care is described across the
// site: the Google Meet statement, the short patient FAQs for people abroad,
// and the per-condition treatment approach (depression, anxiety, OCD, sleep).
//
// Used by the /nepalese-abroad hub, every /nepalese-abroad/<country> page,
// /psychiatrist-for-nepalis-abroad, the condition pages and /llms.txt, so the
// wording (and the JSON-LD built from it) cannot drift between pages.

export type OnlineFaq = { question: string; answer: string };

export const videoPlatform = "Google Meet";

export const consultantTitle = "Consultant Psychiatrist";

// One-line statement reused as the lead sentence wherever the service is described.
export const googleMeetStatement =
  "Dr. Kushal Kharel, Consultant Psychiatrist, offers online therapy and video consultation through Google Meet, in Nepali or English, for Nepalis abroad and for patients across Nepal, at a time that suits your time zone.";

// Plain-language list of what is treated, worded the way people search for it
// (constant worry, repetitive thoughts, sleep problems). Shown in the intro of
// every abroad page and reused in the FAQ, llms.txt and JSON-LD descriptions.
export const conditionsTreated: string[] = [
  "Constant worry and overthinking (चिन्ता / chinta)",
  "Anxiety and panic attacks",
  "Repetitive, intrusive thoughts and OCD",
  "Sleep problems and insomnia (अनिद्रा)",
  "Depression and low mood",
  "Stress, burnout and homesickness",
  "Alcohol and substance use",
  "Relationship and family problems",
];

// Short sentence form of the same list, for meta text and structured data.
export const treatedSummary =
  "constant worry, anxiety, intrusive thoughts, sleep problems and depression";

// How patients pay. Dr. Kushal confirmed (2026-09-24) that payment can be made
// by card, bank transfer or another method. No fee amount is published on the
// site, so the wording says the clinic confirms the fee when booking. If a fee
// or a specific payment platform is added later, change it here and every
// abroad page, FAQ and llms.txt follows.
export const paymentStatement =
  "By card, bank transfer or another method that works from your country. The clinic confirms the fee and the payment options when you book.";

const countriesWithArticle = new Set(["USA", "UK", "Netherlands"]);

// "the USA", "the UK", "the Netherlands", otherwise the name unchanged, for
// natural-sounding prose ("Nepalis in the USA"). Titles and headings keep the
// bare name because that is how people search ("Nepali psychiatrist in USA").
export function withArticle(country: string): string {
  return countriesWithArticle.has(country) ? `the ${country}` : country;
}

// Short, plain answers on purpose: answer-first text is what search snippets
// and AI assistants quote. Keep each answer to one or two sentences.
// Pass a country to get the same six answers worded for that country's page;
// leave it out for the generic "abroad" version.
export function buildAbroadFaqs(country?: string): OnlineFaq[] {
  const where = country ? `in ${withArticle(country)}` : "abroad";
  return [
    {
      question: country
        ? `Can I see a Nepali psychiatrist online from ${withArticle(country)}?`
        : "Can I see a Nepali psychiatrist online from abroad?",
      answer: `Yes. Dr. Kushal Kharel, a Nepal Medical Council-registered psychiatrist in Kathmandu, sees Nepalis living ${where} by Google Meet video consultation. One realistic limit: a prescription written in Nepal ${
        country ? `cannot be assumed to be valid at a pharmacy ${where}` : "usually cannot be filled abroad"
      }, so medication is planned with you individually.`,
    },
    {
      question: "What language are the sessions in?",
      answer: "Nepali or English, whichever you prefer. You can switch between the two during a session.",
    },
    {
      question: country
        ? `What time are the sessions for Nepalis ${where}?`
        : "What time are the sessions?",
      answer: `At a time that suits your time zone${country ? ` in ${withArticle(country)}` : ""}. Tell us what works for you and a slot is arranged around it.`,
    },
    {
      question: "Is online treatment as good as in-person treatment?",
      answer:
        "For most common conditions, yes. Many studies show video consultation is as effective as in-person care for problems such as depression, anxiety and OCD.",
    },
    {
      question: "Can my family join?",
      answer:
        "Yes. With your consent, a spouse, parent or other family member can join the Google Meet call, from abroad or from Nepal.",
    },
    {
      question: "Will my friends and family find out?",
      answer:
        "No. Your sessions are confidential and are not shared with friends, family or employers without your permission. The only exception is a serious, immediate risk to life.",
    },
    {
      question: "What does Dr. Kushal Kharel treat?",
      answer:
        "Dr. Kushal Kharel, a Consultant Psychiatrist, treats constant worry (chinta), anxiety and panic, repetitive intrusive thoughts (OCD), sleep problems, depression and low mood, stress and burnout, alcohol and substance use, and relationship and family problems, by online therapy and video consultation.",
    },
    {
      question: "How do I pay from abroad?",
      answer: paymentStatement,
    },
  ];
}

export const abroadFaqs: OnlineFaq[] = buildAbroadFaqs();

export type OnlineTreatment = {
  id: "depression" | "anxiety" | "ocd" | "sleep";
  condition: string;
  // The short "what is offered" line, e.g. "CBT and medication together".
  approach: string;
  detail: string;
  href: string;
  linkLabel: string;
};

export const onlineTreatments: OnlineTreatment[] = [
  {
    id: "depression",
    condition: "Depression and low mood",
    approach: "CBT and medication together",
    detail:
      "Dr. Kushal provides both CBT and medication together, through Google Meet video consultation, planned around how severe your depression is.",
    href: "/conditions/major-depressive-disorder",
    linkLabel: "Depression treatment",
  },
  {
    id: "anxiety",
    condition: "Anxiety and constant worry",
    approach: "Medication and CBT together",
    detail:
      "Constant worry (chinta), anxiety and panic are treated with medication and CBT together, through Google Meet video consultation.",
    href: "/anxiety",
    linkLabel: "Anxiety treatment",
  },
  {
    id: "ocd",
    condition: "OCD and intrusive thoughts",
    approach: "ERP and medication together",
    detail:
      "Repetitive, intrusive thoughts and rituals (OCD) are treated with ERP (exposure and response prevention) and medication together, through Google Meet video consultation.",
    href: "/erp-therapy-ocd",
    linkLabel: "ERP therapy for OCD",
  },
  {
    id: "sleep",
    condition: "Sleep problems",
    approach: "Sleep assessment, CBT-I and medication when needed",
    detail:
      "Sleep difficulty is assessed for its cause and treated with CBT for insomnia (CBT-I) and, when appropriate, medication, through Google Meet video consultation.",
    href: "/sleep-problems-treatment-nepal",
    linkLabel: "Sleep problems and insomnia",
  },
];

// Callout shown in the "How is X treated?" section of a condition page.
// Keyed by /conditions/<slug>.
export const conditionOnlineApproach: Record<string, { heading: string; text: string }> = {
  "major-depressive-disorder": {
    heading: "Depression treatment with Dr. Kushal Kharel",
    text: "Dr. Kushal provides both CBT and medication together for depression, in person at the Kalanki clinic or through Google Meet video consultation, including for Nepalis living abroad.",
  },
  "generalized-anxiety-disorder": {
    heading: "Anxiety treatment with Dr. Kushal Kharel",
    text: "Dr. Kushal treats constant worry and anxiety with medication and CBT together, in person at the Kalanki clinic or through Google Meet video consultation, including for Nepalis living abroad.",
  },
  "panic-disorder": {
    heading: "Anxiety treatment with Dr. Kushal Kharel",
    text: "Dr. Kushal treats panic and anxiety with medication and CBT together, in person at the Kalanki clinic or through Google Meet video consultation, including for Nepalis living abroad.",
  },
  "social-anxiety-disorder": {
    heading: "Anxiety treatment with Dr. Kushal Kharel",
    text: "Dr. Kushal treats social anxiety with medication and CBT together, in person at the Kalanki clinic or through Google Meet video consultation, including for Nepalis living abroad.",
  },
  ocd: {
    heading: "OCD treatment with Dr. Kushal Kharel",
    text: "Dr. Kushal treats OCD and repetitive, intrusive thoughts with ERP (exposure and response prevention) and medication together, in person at the Kalanki clinic or through Google Meet video consultation, including for Nepalis living abroad.",
  },
  insomnia: {
    heading: "Sleep problems treatment with Dr. Kushal Kharel",
    text: "Dr. Kushal assesses sleep difficulty and treats it with CBT for insomnia (CBT-I) and, when appropriate, medication, in person at the Kalanki clinic or through Google Meet video consultation, including for Nepalis living abroad.",
  },
};
