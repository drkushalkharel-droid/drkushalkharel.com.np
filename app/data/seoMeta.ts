// Hand-written <title> and meta description for pages that are written by hand
// (everything that is not generated from a data collection).
//
// This is the one place to edit a page's search-result text.
//   title        the keyword part only. The layout adds " | Dr. Kharel", so keep it to
//                47 characters or fewer (whole title <= 60). Keyword first.
//   description  140-155 characters, unique, ending in a call to action. Do not put
//                claims here that the page itself does not make.
// `npm run audit` reports any page whose title or description falls outside these
// ranges. Pages generated from data (conditions, blog, knowledge, resources, ...) build
// theirs from a formula in their template and can be overridden here by URL.

export type SeoEntry = { title?: string; description: string };

export const seoMeta: Record<string, SeoEntry> = {
  "/": {
    title: "Psychiatrist in Kathmandu, Nepal",
    description:
      "Dr. Kushal Kharel, consultant psychiatrist in Kalanki, Kathmandu: care for anxiety, depression, OCD, ADHD and sleep problems. Book in-person or online.",
  },
  "/about/": {
    title: "About Dr. Kushal Kharel, Psychiatrist",
    description:
      "Dr. Kushal Kharel's background: MD Psychiatry, Nepal Medical Council registration #27199, clinical experience and areas of focus. Book in-person or online.",
  },
  "/addiction-treatment-kathmandu/": {
    title: "Addiction Treatment in Kathmandu, Nepal",
    description:
      "Addiction psychiatry and counselling for alcohol, nicotine, cannabis and gaming, with medication, therapy and family support. Book in-person or online.",
  },
  "/adhd-treatment-kathmandu/": {
    title: "ADHD Treatment in Kathmandu, Nepal",
    description:
      "ADHD assessment and treatment for children, teens and adults in Kathmandu, with medication options and behavioral strategies. Book in-person or online.",
  },
  "/anxiety/": {
    title: "Anxiety Treatment in Kathmandu, Nepal",
    description:
      "Anxiety guide by Dr. Kushal Kharel: symptoms, causes, CBT and medication options, and when to seek help, in English and Nepali. Book in-person or online.",
  },
  "/anxiety/np/": {
    title: "चिन्ता विकार उपचार काठमाडौं",
    description:
      "काठमाडौंका कन्सल्टेन्ट साइकाइट्रिस्ट डा. कुशल खरेलबाट चिन्ता विकारका लक्षण, कारण र उपचारबारे जानकारी। क्लिनिकमा वा अनलाइन परामर्श बुक गर्नुहोस्।",
  },
  "/appointment/": {
    title: "Book a Psychiatrist Appointment in Kathmandu",
    description:
      "Book a confidential psychiatric consultation with Dr. Kushal Kharel at the Kalanki clinic in Kathmandu, or online from anywhere. Call or WhatsApp to book.",
  },
  "/best-psychiatrist-nepal/": {
    title: "How to Choose a Psychiatrist in Kathmandu",
    description:
      "There is no official 'best psychiatrist' ranking. Check credentials, NMC registration, communication style and fit. Book in-person or online.",
  },
  "/bipolar-disorder-treatment-kathmandu/": {
    title: "Bipolar Disorder Treatment in Kathmandu",
    description:
      "Diagnosis and long-term care for Bipolar I and II disorder in Kathmandu: mood stabilizers, relapse prevention and family support. Book in-person or online.",
  },
  "/blog/": {
    title: "Mental Health Articles for Nepal",
    description:
      "Mental health articles by topic: anxiety, depression, addiction, relationships, sleep and more, from a Kathmandu psychiatrist. Book in-person or online.",
  },
  "/cbt-therapist-kathmandu/": {
    title: "CBT Therapist in Kathmandu, Nepal",
    description:
      "Structured cognitive behavioral therapy for anxiety, depression, OCD, insomnia, anger and health anxiety, in plain language. Book in-person or online.",
  },
  "/child-adolescent-psychiatry/": {
    title: "Child & Adolescent Psychiatry in Kathmandu",
    description:
      "Psychiatric assessment for children and teens with ADHD, autism concerns, learning difficulties, anxiety or behavior problems. Book in-person or online.",
  },
  "/community-mental-health-programs/": {
    title: "Community Mental Health Programs in Nepal",
    description:
      "Community mental-health education, school outreach, health camps and suicide-prevention work involving Dr. Kushal Kharel. Ask about a program.",
  },
  "/conditions/": {
    title: "Psychiatric Conditions Guide A-Z",
    description:
      "Evidence-based guides to psychiatric conditions: symptoms, causes, diagnosis, treatment, medication and family guidance. Book in-person or online.",
  },
  "/contact/": {
    title: "Contact a Psychiatrist in Kathmandu",
    description:
      "Contact Dr. Kushal Kharel's clinic in Kalanki, Kathmandu, by phone, WhatsApp or email for an in-person or online consultation. Call or WhatsApp to book.",
  },
  "/corporate-mental-health-partner-nepal/": {
    title: "Corporate Mental Health Partner in Nepal",
    description:
      "A confidential psychiatric referral partner for workplaces, schools and colleges: crisis support and stress-management workshops. Get in touch to discuss.",
  },
  "/counselling-in-nepal/": {
    title: "Counselling in Nepal: Online & In-Person",
    description:
      "Counselling, psychotherapy or psychiatric consultation? Learn the difference and how to get confidential support in Kathmandu. Book in-person or online.",
  },
  "/couple-relationship-counseling/": {
    title: "Couple Counseling in Kathmandu, Nepal",
    description:
      "Confidential counseling for couples facing communication breakdown, trust issues, conflict or life-transition stress. Book in-person or online.",
  },
  "/depression-treatment-kathmandu/": {
    title: "Depression Treatment in Kathmandu, Nepal",
    description:
      "Psychiatric assessment, antidepressant medication where appropriate and structured therapy such as CBT, from Dr. Kushal Kharel. Book in-person or online.",
  },
  "/english-speaking-psychiatrist/": {
    title: "English-Speaking Psychiatrist in Kathmandu",
    description:
      "Psychiatric assessment and treatment fully in English for expatriates, tourists, international students and Nepalis. Book in-person or online.",
  },
  "/erp-therapy-ocd/": {
    title: "OCD Treatment in Kathmandu: ERP and Medication",
    description:
      "OCD treatment in Kathmandu: clinician-guided exposure and response prevention (ERP) therapy, with medication where needed. Book in-person or online.",
  },
  "/expatriates-in-nepal/": {
    title: "Psychiatrist for Expatriates in Nepal",
    description:
      "Confidential English-language psychiatric assessment and treatment for expatriates, foreign workers and international staff. Book in-person or online.",
  },
  "/faq/": {
    title: "Psychiatrist FAQ: Kathmandu & Online",
    description:
      "Answers to common questions about seeing Dr. Kushal Kharel: booking, fees, online consultation, confidentiality and your first visit. Book in-person or online.",
  },
  "/female-counselor-kathmandu/": {
    title: "Female Counselor in Kathmandu, Nepal",
    description:
      "For patients who prefer a female clinician, a qualified female counselor is arranged as part of your care, based on need. Book in-person or online.",
  },
  "/help-relative-abroad-see-psychiatrist/": {
    title: "Help a Relative Abroad See a Psychiatrist",
    description:
      "How families can help a relative abroad get psychiatric care: warning signs, starting the conversation, online or local options. Book online.",
  },
  "/home-visit-psychiatrist-nepal/": {
    title: "Home Visit Psychiatrist in Nepal",
    description:
      "Request a home psychiatric visit in Nepal: who it suits, availability, what the assessment involves, safety limits and how to arrange it. Ask us.",
  },
  "/how-to-control-your-mind-nepal/": {
    title: "How to Control Your Mind: Practical Steps",
    description:
      "Evidence-based techniques for intrusive thoughts, racing thoughts and overthinking, and when to see a psychiatrist about them. Book in-person or online.",
  },
  "/iq-psychological-testing/": {
    title: "IQ & Psychological Testing in Kathmandu",
    description:
      "Standardized IQ, personality and neuropsychological testing to clarify diagnosis, support school decisions and document findings. Book in-person or online.",
  },
  "/knowledge/": {
    title: "Mental Health Patient Guides for Nepal",
    description:
      "Patient guides and articles in English and Nepali on anxiety, depression, addiction, sleep and teen mental health. Book in-person or online.",
  },
  "/medical-disclaimer/": {
    title: "Medical Disclaimer",
    description:
      "The limits of the information on this website, why it is not a diagnosis or personal medical advice, and when to seek direct psychiatric or emergency care.",
  },
  "/medical-fitness-certificate/": {
    title: "Psychiatric Fitness Certificate in Kathmandu",
    description:
      "Psychiatric medical and fitness-to-work certificates for work, study, travel, insurance or legal use, after a real assessment. Book in-person or online.",
  },
  "/medication-review-second-opinion-nepal/": {
    title: "Medication Review & Second Opinion in Nepal",
    description:
      "Already taking psychiatric medication? Get an independent review or second opinion in Kathmandu or online across Nepal. Book in-person or online.",
  },
  "/medications/": {
    title: "Psychiatric Medication Guides",
    description:
      "Plain-language guides to psychiatric medications: what they treat, side effects, precautions, time to effect and stopping safely. Book in-person or online.",
  },
  "/nepalese-abroad/": {
    title: "Nepali Psychiatrist for Nepalis Abroad",
    description:
      "Online therapy and psychiatric care for Nepalis abroad by video, with session times converted to your local time zone. Book online from anywhere.",
  },
  "/online-psychiatrist-nepal/": {
    title: "Online Psychiatrist in Nepal",
    description:
      "Online psychiatric consultation from home for anxiety, depression, OCD, sleep and follow-up care. When it suits and how to book. Book online.",
  },
  "/panic-attack-treatment-kathmandu/": {
    title: "Panic Attack Treatment in Kathmandu, Nepal",
    description:
      "Assessment and treatment for panic attacks and panic disorder, including CBT-based techniques and medication where appropriate. Book in-person or online.",
  },
  "/patient-testimonials/": {
    title: "Patient Testimonials",
    description:
      "Real, anonymized testimonials from patients in Nepal and Nepalis abroad about Dr. Kushal Kharel's online and in-person care. Book in-person or online.",
  },
  "/privacy-policy/": {
    title: "Privacy Policy",
    description:
      "How this website collects, uses and protects your information, including analytics, contact details and cookies. Contact us with any privacy questions.",
  },
  "/psychiatric-care-for-family-in-nepal/": {
    title: "Psychiatric Care for Family in Nepal",
    description:
      "For Nepalis abroad arranging care for a parent or relative in Nepal: how to start, home visits, confidentiality and staying involved. Book online.",
  },
  "/psychiatric-hospital-vs-clinic-kathmandu/": {
    title: "Psychiatric Hospital vs Clinic in Kathmandu",
    description:
      "The difference between a psychiatric hospital and a clinic, when each is right, and how to tell if you need emergency care. Book in-person or online.",
  },
  "/psychiatric-medication-side-effects/": {
    title: "Psychiatric Medication Side Effects FAQ",
    description:
      "Plain-language FAQ on side effects of sertraline, escitalopram, fluoxetine, olanzapine, clonazepam, lorazepam and propranolol. Book a review.",
  },
  "/psychiatrist-fee-nepal/": {
    title: "Psychiatrist Fees in Kathmandu, Nepal",
    description:
      "Consultation fees: NPR 800–1,500 for an initial assessment, one free follow-up within a week, NPR 800 for later visits. Book in-person or online.",
  },
  "/psychiatrist-for-nepalis-abroad/": {
    title: "Psychiatrist for Nepalis Living Abroad",
    description:
      "Online consultation with a Nepali consultant psychiatrist for constant worry, intrusive thoughts and sleep problems, by video. Book online from anywhere.",
  },
  "/psychiatry-clinic-kathmandu/": {
    title: "Psychiatry Clinic in Kalanki, Kathmandu",
    description:
      "Location, hours, what to expect at your first visit and how to reach Dr. Kushal Kharel's outpatient psychiatry clinic. Book in-person or online.",
  },
  "/psychology-internship-nepal/": {
    title: "Psychology Internship in Kathmandu, Nepal",
    description:
      "A free internship for psychology and social work students at a psychiatric clinic in Kalanki, Kathmandu. See what it involves and how to apply.",
  },
  "/psychosis-treatment-kathmandu/": {
    title: "Psychosis Treatment in Kathmandu, Nepal",
    description:
      "Urgent assessment and treatment for a first or repeat episode of psychosis: hallucinations, delusions, disorganized thinking. Book in-person or online.",
  },
  "/relationship-counselling-kathmandu/": {
    title: "Relationship Counselling in Kathmandu",
    description:
      "What relationship and premarital counselling involve, how to choose a counsellor, and when to see a psychiatrist instead. Book in-person or online.",
  },
  "/resources/": {
    title: "Free Patient Leaflets & Guides",
    description:
      "Free patient leaflets, medication guides, coping tools and family guides from a consultant psychiatrist in Kathmandu. Book in-person or online.",
  },
  "/returning-to-nepal-after-abroad/": {
    title: "Support for Nepalis Returning from Abroad",
    description:
      "Help with reverse culture shock, reintegration stress and family pressure after returning to Nepal from work, study or a long stay abroad. Book online.",
  },
  "/schizophrenia-treatment-kathmandu/": {
    title: "Schizophrenia Treatment in Kathmandu",
    description:
      "Diagnosis and ongoing care for schizophrenia: antipsychotic medication, relapse prevention and family psychoeducation. Book in-person or online.",
  },
  "/screening/": {
    title: "Free Mental Health Screening Tests, Nepal",
    description:
      "13 free, confidential self-rated screening tools for depression, anxiety, OCD, PTSD, ADHD, alcohol use, insomnia and more. Book in-person or online.",
  },
  "/sleep-problems-treatment-nepal/": {
    title: "Insomnia & Sleep Problems Treatment, Nepal",
    description:
      "Help for trouble falling asleep or waking at night or too early, in Kathmandu or online by Google Meet from anywhere. Book in-person or online.",
  },
  "/stress-anger-management-kathmandu/": {
    title: "Stress & Anger Management in Kathmandu",
    description:
      "Support for chronic stress, burnout and anger or irritability: practical skills, and when to see a psychiatrist instead. Book in-person or online.",
  },
  "/tourists-in-nepal/": {
    title: "Psychiatrist for Tourists in Nepal",
    description:
      "Confidential English-language psychiatric support for tourists and trekkers with anxiety, panic or sleep problems. Book in-person or online.",
  },
};
