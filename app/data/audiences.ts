export type AudiencePage = {
  slug: string;
  title: string;
  headline: string;
  shortDescription: string;
  intro: string;
  whoThisIsFor: string[];
  commonConcerns: string[];
  practicalNote: string;
  searchTerms: string[];
  faqs: { question: string; answer: string }[];
};

export const audiencePages: AudiencePage[] = [
  {
    slug: "expatriates-in-nepal",
    title: "Psychiatrist for Expatriates in Nepal",
    headline: "Psychiatric care for expatriates living in Nepal",
    shortDescription:
      "Confidential, English-language psychiatric assessment and treatment for expatriates, foreign workers and international staff living in Nepal.",
    intro:
      "Expatriates living in Nepal — NGO and INGO staff, embassy and diplomatic staff, teachers, volunteers, foreign employees and spouses of Nepali citizens — often face the same mental health conditions seen anywhere, alongside added stress from being away from familiar support systems. Dr. Kushal Kharel provides confidential, English-language psychiatric consultation, in person at the Kalanki clinic in Kathmandu or online, for expatriates who want evidence-based care without a language barrier.",
    whoThisIsFor: [
      "NGO, INGO and development sector staff based in Nepal",
      "Embassy, diplomatic and international organization staff",
      "Foreign teachers, volunteers and researchers",
      "Foreign employees of companies operating in Nepal",
      "Spouses and family members of Nepali citizens",
      "Long-term foreign residents and digital nomads",
    ],
    commonConcerns: [
      "Culture shock and adjustment stress",
      "Homesickness and isolation from usual support networks",
      "Work stress and burnout in a new environment",
      "Anxiety, panic attacks and excessive worry",
      "Depression, low motivation and sleep disturbance",
      "Alcohol use and other coping-related concerns",
      "Relationship and family stress while living abroad",
      "Difficulty navigating an unfamiliar healthcare system",
    ],
    practicalNote:
      "Consultations are conducted in English and follow the same evidence-based, DSM-5/ICD-11-based diagnostic approach used throughout this practice. If you are only in Nepal short-term, online follow-up can continue after you leave, subject to your home country's prescribing regulations.",
    searchTerms: [
      "Psychiatrist for expatriates in Nepal",
      "Foreigner mental health Kathmandu",
      "Expat psychiatrist Nepal",
      "English speaking psychiatrist Kathmandu",
    ],
    faqs: [
      {
        question: "Can expatriates in Nepal see a psychiatrist in English?",
        answer:
          "Yes. Dr. Kushal Kharel conducts consultations fully in English for expatriates and other international patients, with no language barrier in discussing symptoms, diagnosis or treatment.",
      },
      {
        question: "Is psychiatric care in Nepal confidential for foreign nationals?",
        answer:
          "Yes. All consultations, whether in-person or online, are confidential and handled with the same professional discretion given to any patient, in line with standard medical ethics.",
      },
      {
        question: "Can I get an online consultation if I'm only in Nepal temporarily?",
        answer:
          "Yes. Online consultation is available during your time in Nepal and can continue afterward for follow-up, though prescribing rules vary once you're outside Nepal, so this is discussed individually.",
      },
      {
        question: "Are common psychiatric medications available in Nepal?",
        answer:
          "Most standard antidepressants, anxiolytics, mood stabilizers and antipsychotics used internationally are available through pharmacies in Kathmandu, though availability of a specific brand can vary.",
      },
      {
        question: "Do you treat anxiety and depression related to living abroad specifically?",
        answer:
          "Yes. Adjustment-related anxiety, low mood, sleep disturbance and homesickness are common and treatable, using the same evidence-based approaches used for any presentation of these conditions.",
      },
      {
        question: "Can my spouse or family member join the consultation?",
        answer:
          "Yes, with your consent, a spouse or family member can join in person or online, which can be especially helpful when explaining your situation and history in an unfamiliar setting.",
      },
      {
        question: "Where can foreigners obtain psychiatric care in Nepal?",
        answer:
          "Foreigners in Nepal — expatriates, tourists and international staff — can get English-language psychiatric care from Dr. Kushal Kharel at his clinic in Kalanki, Kathmandu, or via online consultation, with assessment, diagnosis and prescriptions all conducted in English.",
      },
    ],
  },
  {
    slug: "english-speaking-psychiatrist",
    title: "English Speaking Psychiatrist in Nepal",
    headline: "English-speaking psychiatric care in Kathmandu, Nepal",
    shortDescription:
      "Psychiatric assessment, diagnosis and treatment conducted fully in English, for expatriates, tourists, international students and Nepalese who prefer English-language consultation.",
    intro:
      "Explaining symptoms accurately matters for getting the right diagnosis and treatment. Dr. Kushal Kharel, a Consultant Psychiatrist in Kathmandu, conducts consultations fully in English on request — no translator needed, no language barrier between you and your psychiatrist, whether you're a foreign resident, a tourist, an international student, or a Nepali speaker who is simply more comfortable discussing mental health in English.",
    whoThisIsFor: [
      "Expatriates and foreign residents living in Nepal",
      "Tourists and short-term visitors",
      "International and English-medium school or university students",
      "Nepalese who prefer to discuss mental health in English",
      "Nepalese living abroad seeking a follow-up consultation in English",
    ],
    commonConcerns: [
      "Accurately describing symptoms without a language barrier",
      "Anxiety disorders, depression and mood symptoms",
      "OCD, ADHD, bipolar disorder and other psychiatric conditions",
      "Addiction and de-addiction treatment",
      "Written summaries, reports or prescriptions in English",
    ],
    practicalNote:
      "Assessment, diagnosis, treatment planning and any written documentation can all be provided in English. This website itself is maintained in English for exactly this reason, so you can review information about your condition in the same language as your consultation.",
    searchTerms: [
      "English speaking psychiatrist in Nepal",
      "English speaking psychiatrist Kathmandu",
      "Psychiatrist for foreigners Nepal",
      "Psychiatrist without translator Kathmandu",
    ],
    faqs: [
      {
        question: "Is the entire consultation conducted in English?",
        answer:
          "Yes, on request the full consultation — history-taking, discussion of diagnosis and treatment options, and any follow-up — is conducted in English.",
      },
      {
        question: "Do I need to bring a translator?",
        answer:
          "No. Consultations can be conducted directly in English without needing a translator or family member to interpret.",
      },
      {
        question: "Can prescriptions and medical reports be written in English?",
        answer:
          "Yes, prescriptions and any requested written summaries or reports are provided in English.",
      },
      {
        question: "Is online consultation available in English for people outside Nepal?",
        answer:
          "Yes. Online consultation in English is available for international patients, tourists who have returned home, and Nepalese living abroad who prefer English.",
      },
      {
        question: "Can English-medium school or university students book a consultation?",
        answer:
          "Yes. Students at English-medium schools, colleges or universities in Nepal can book an in-person or online consultation conducted in English.",
      },
    ],
  },
  {
    slug: "tourists-in-nepal",
    title: "Mental Health Support for Tourists in Nepal",
    headline: "Mental health support for tourists and trekkers in Nepal",
    shortDescription:
      "Confidential, English-language psychiatric support for tourists and trekkers in Nepal experiencing anxiety, panic, sleep problems or needing to continue existing psychiatric medication while traveling.",
    intro:
      "Travel can bring unexpected stress — an unfamiliar environment, altitude, disrupted sleep and routine, or a mental health condition that flares up far from your usual doctor. Dr. Kushal Kharel provides confidential, English-language psychiatric consultation for tourists and trekkers in Nepal, in person in Kathmandu or online, including continuity support for travelers already taking psychiatric medication.",
    whoThisIsFor: [
      "Tourists experiencing anxiety, panic or low mood while traveling",
      "Trekkers with sleep or mood changes during a trek",
      "Travelers who need to continue an existing psychiatric medication",
      "Travelers experiencing a mental health crisis far from home",
      "Anyone wanting a confidential English-language consultation while in Nepal",
    ],
    commonConcerns: [
      "Travel-related anxiety and panic attacks",
      "Sleep disturbance and low mood during travel or trekking",
      "Continuing an existing antidepressant, anxiolytic or other psychiatric medication",
      "Acute stress reactions to an unfamiliar environment",
      "Alcohol or substance use concerns while traveling",
      "Needing an urgent psychiatric opinion far from your regular doctor",
    ],
    practicalNote:
      "This service addresses mental health symptoms — it is not a substitute for altitude sickness (acute mountain sickness) management, which is a separate medical emergency requiring immediate descent and physical evaluation. If you or a travel companion has confusion, severe breathlessness or loss of coordination at altitude, seek emergency medical evacuation immediately rather than a psychiatric consultation.",
    searchTerms: [
      "Mental health support for tourists in Nepal",
      "Psychiatrist for tourists Kathmandu",
      "Psychiatrist near Thamel",
      "English speaking psychiatrist for travelers Nepal",
    ],
    faqs: [
      {
        question: "Can tourists get a psychiatric consultation while visiting Nepal?",
        answer:
          "Yes. Tourists can book an in-person consultation in Kathmandu or an online consultation, conducted in English, for anxiety, low mood, sleep problems or other psychiatric concerns arising during travel.",
      },
      {
        question: "What should I do if I run out of my psychiatric medication while traveling in Nepal?",
        answer:
          "Contact us as soon as possible with the medication name, dose and your prescribing history — many common psychiatric medications are available in Kathmandu pharmacies, and a consultation can help arrange safe continuation.",
      },
      {
        question: "Can altitude and trekking affect mental health?",
        answer:
          "Sleep disruption, low mood and anxiety can occur during high-altitude trekking. This is distinct from acute mountain sickness, a physical medical emergency needing immediate descent — always prioritize emergency evacuation for physical altitude symptoms.",
      },
      {
        question: "Is this an emergency service for tourists in crisis?",
        answer:
          "No. For an immediate safety emergency, go to the nearest hospital emergency department or contact local emergency services first. This service is for psychiatric consultation once you are safe and stable, or for non-emergency symptoms.",
      },
      {
        question: "Can I have a follow-up consultation after I leave Nepal?",
        answer:
          "Online follow-up is possible after you return home, though prescribing rules vary by country, so ongoing medication management is usually best transferred to a local doctor once you're back.",
      },
    ],
  },
];

export function getAudiencePage(slug: string) {
  return audiencePages.find((page) => page.slug === slug);
}
