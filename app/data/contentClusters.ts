// Which pages belong together, and which one is the primary (commercial) page for
// each topic. This drives the "Related" block and the primary-service callout on
// every article (app/components/RelatedContent.tsx, app/lib/related.ts).
//
// Roles (see seo-proposals/PHASE-4-keyword-cannibalization.md):
//   primary    /x-treatment-kathmandu/ or the service page: commercial intent
//   reference  /conditions/x/: clinical reference
//   nepali     /knowledge/x/ (Nepali): Nepali patient education
//   subtopics  /blog/... and English knowledge articles: one specific question
//   aids       screening tools, leaflets, medication guides
//
// All hrefs use the canonical trailing-slash form.

export type ClusterLink = { href: string; anchor: string };

export type Cluster = {
  id: string;
  name: string;
  primary: ClusterLink;
  // A second commercial page for a distinct query in the same cluster.
  secondaryPrimary?: ClusterLink;
  // A Nepali-language landing page, when one exists. Nepali articles callout to it.
  nepaliPrimary?: ClusterLink;
  // Members whose callout should go to the secondary commercial page instead of the main one.
  secondaryFor?: string[];
  reference: string[];
  nepali: string[];
  subtopics: string[];
  aids: string[];
};

const b = (...s: string[]) => s.map((x) => `/blog/${x}/`);
const c = (...s: string[]) => s.map((x) => `/conditions/${x}/`);
const k = (...s: string[]) => s.map((x) => `/knowledge/${x}/`);
const r = (...s: string[]) => s.map((x) => `/resources/${x}/`);
const s = (...x: string[]) => x.map((y) => `/screening/${y}/`);
const m = (...x: string[]) => x.map((y) => `/medications/${y}/`);

export const clusters: Cluster[] = [
  {
    id: "adhd",
    name: "ADHD",
    primary: { href: "/adhd-treatment-kathmandu/", anchor: "ADHD treatment in Kathmandu" },
    reference: c("adhd"),
    nepali: k("adhd"),
    subtopics: b("adult-adhd-nepal"),
    aids: [...s("adult-adhd"), ...r("adhd-leaflet", "adhd-stimulant-medications-guide")],
  },
  {
    id: "depression",
    name: "depression",
    primary: { href: "/depression-treatment-kathmandu/", anchor: "depression treatment in Kathmandu" },
    reference: c("major-depressive-disorder", "persistent-depressive-disorder", "postpartum-depression", "seasonal-affective-disorder"),
    nepali: k("smiling-depression-nepal", "aalash-ho-ki-manasik-samasya-nepal"),
    subtopics: b(
      "depression-vs-normal-sadness", "help-family-member-with-depression-nepal", "chronic-illness-depression-overlooked-connection-nepal",
      "dashain-tihar-festival-loneliness-depression", "elderly-loneliness-late-life-depression-nepal",
      "postpartum-depression-nepal", "postpartum-depression-in-fathers-nepal",
      "anxiety-vs-depression-difference-nepal", "bipolar-disorder-vs-depression", "ketamine-therapy-depression-anxiety-nepal",
    ),
    aids: [...s("depression", "postpartum-depression"), ...r("major-depressive-disorder-leaflet", "major-depressive-disorder-family-guide", "antidepressants-ssri-snri-guide"), ...m("ssris-explained")],
  },
  {
    id: "bipolar",
    name: "bipolar disorder",
    primary: { href: "/bipolar-disorder-treatment-kathmandu/", anchor: "bipolar disorder treatment in Kathmandu" },
    reference: c("bipolar-i-disorder", "bipolar-ii-disorder", "cyclothymic-disorder"),
    nepali: k("mania", "bipolar-disorder"),
    subtopics: b("bipolar-disorder-vs-depression"),
    aids: [...s("bipolar"), ...r("bipolar-i-disorder-leaflet", "bipolar-i-disorder-family-guide", "mood-stabilizers-guide"), ...m("mood-stabilizers-lithium-explained")],
  },
  {
    id: "schizophrenia",
    name: "schizophrenia and psychosis",
    primary: { href: "/schizophrenia-treatment-kathmandu/", anchor: "schizophrenia treatment in Kathmandu" },
    secondaryPrimary: { href: "/psychosis-treatment-kathmandu/", anchor: "psychosis treatment in Kathmandu" },
    secondaryFor: [...c("brief-psychotic-disorder", "postpartum-psychosis", "delusional-disorder"), ...b("cannabis-substance-induced-psychosis-nepal", "postpartum-psychosis-nepal")],
    reference: c("schizophrenia", "schizoaffective-disorder", "brief-psychotic-disorder", "postpartum-psychosis", "delusional-disorder"),
    nepali: k("schizophrenia"),
    subtopics: b("schizophrenia-early-warning-signs", "cannabis-substance-induced-psychosis-nepal", "postpartum-psychosis-nepal"),
    aids: [...r("schizophrenia-leaflet", "schizophrenia-family-guide", "antipsychotics-guide"), ...m("antipsychotic-medications-explained")],
  },
  {
    id: "ocd",
    name: "OCD",
    primary: { href: "/erp-therapy-ocd/", anchor: "OCD treatment (ERP therapy) in Kathmandu" },
    reference: c("ocd", "obsessive-compulsive-personality-disorder"),
    nepali: k("obsessive-compulsive-disorder"),
    subtopics: b("ocd-common-misconceptions"),
    aids: [...s("ocd"), ...r("ocd-leaflet")],
  },
  {
    id: "anxiety",
    name: "anxiety and panic",
    primary: { href: "/anxiety/", anchor: "anxiety treatment in Kathmandu" },
    secondaryPrimary: { href: "/panic-attack-treatment-kathmandu/", anchor: "panic attack treatment in Kathmandu" },
    nepaliPrimary: { href: "/anxiety/np/", anchor: "चिन्ता विकार उपचार" },
    secondaryFor: [
      ...c("panic-disorder", "panic-attacks"), ...b("panic-attack-vs-heart-attack", "panic-disorder-vs-generalized-anxiety-nepal"),
      ...k("panic-attacks-what-to-do", "panic-attack-nepali-guide"), ...s("panic-disorder"), ...r("panic-disorder-leaflet", "panic-attacks-guide"),
    ],
    reference: c("generalized-anxiety-disorder", "panic-disorder", "panic-attacks", "social-anxiety-disorder", "illness-anxiety-disorder", "separation-anxiety"),
    nepali: k("panic-attack-nepali-guide", "overthinking-kasari-niko-parne-nepal", "internet-ma-lakshan-search-garne-nepal"),
    subtopics: [
      ...b("generalized-anxiety-disorder-nepal", "panic-disorder-vs-generalized-anxiety-nepal", "panic-attack-vs-heart-attack"),
      ...k("panic-attacks-what-to-do"),
      ...b("relaxation-breathing-exercises-anxiety-nepal"),
      ...k("coping-with-anxiety"),
      ...b("social-anxiety-treatment-nepal", "health-anxiety-treatment-nepal", "do-i-have-hiv-anxiety-testing", "overthinking-treatment-nepal"),
      ...b("exam-stress-see-board-exams-nepal", "first-job-career-transition-anxiety-nepal", "separation-anxiety-school-refusal-children-nepal"),
      ...b("postpartum-anxiety-nepal", "antenatal-pregnancy-anxiety-nepal"),
      ...k("sexual-health-performance-anxiety-intimacy-nepal"),
    ],
    aids: [...s("anxiety", "panic-disorder", "social-anxiety"), ...r("generalized-anxiety-disorder-leaflet", "panic-disorder-leaflet", "panic-attacks-guide", "anxiety-coping-cards", "breathing-exercise-guide", "benzodiazepines-guide"), ...m("benzodiazepines-explained")],
  },
  {
    id: "sleep",
    name: "sleep problems",
    primary: { href: "/sleep-problems-treatment-nepal/", anchor: "sleep problems treatment in Nepal" },
    reference: c("insomnia", "circadian-rhythm-sleep-wake-disorders", "parasomnias"),
    nepali: k("insomnia", "aithan-sleep-paralysis-nepal", "non-restorative-sleep-nepal"),
    subtopics: b("insomnia-cbt-treatment-without-medication-nepal", "nightmares-sleep-paralysis-when-to-worry-nepal", "sleep-apnea-mental-health-nepal", "sleep-problems-and-mental-health"),
    aids: [...s("insomnia", "sleepiness"), ...r("insomnia-guide")],
  },
  {
    id: "addiction",
    name: "addiction",
    primary: { href: "/addiction-treatment-kathmandu/", anchor: "addiction treatment in Kathmandu" },
    reference: c("alcohol-use-disorder", "opioid-use-disorder", "cannabis-use-disorder", "nicotine-dependence"),
    nepali: k("alcohol-dependence-syndrome", "alcohol-effects-body-brain-nepal", "morning-drinking-alcohol-nepal"),
    subtopics: b("alcohol-addiction-treatment-nepal", "alcohol-drug-rehab-referral-collaboration-nepal"),
    aids: [...s("alcohol-use"), ...r("alcohol-use-disorder-leaflet", "alcohol-use-disorder-family-guide")],
  },
];

// Pages proposed for merging (seo-proposals/PHASE-4). Until the owner approves,
// they stay live but nothing new links to them; each shows a callout to the page
// it would merge into.
export const pendingMerges: Record<string, string> = {};

// Natural-language link text for service and hub pages (used as anchor text).
export const pageLabels: Record<string, string> = {
  "/psychiatry-clinic-kathmandu/": "psychiatric clinic in Kathmandu",
  "/best-psychiatrist-nepal/": "psychiatrist in Nepal",
  "/online-psychiatrist-nepal/": "online psychiatrist in Nepal",
  "/psychiatrist-fee-nepal/": "psychiatrist fee in Nepal",
  "/psychiatric-hospital-vs-clinic-kathmandu/": "psychiatric hospital vs clinic in Kathmandu",
  "/counselling-in-nepal/": "counselling in Nepal",
  "/relationship-counselling-kathmandu/": "relationship counselling in Kathmandu",
  "/couple-relationship-counseling/": "couple counselling in Kathmandu",
  "/female-counselor-kathmandu/": "female counsellor in Kathmandu",
  "/cbt-therapist-kathmandu/": "CBT therapist in Kathmandu",
  "/erp-therapy-ocd/": "OCD treatment (ERP therapy) in Kathmandu",
  "/stress-anger-management-kathmandu/": "stress and anger management in Kathmandu",
  "/how-to-control-your-mind-nepal/": "how to control your mind",
  "/child-adolescent-psychiatry/": "child and adolescent psychiatry in Kathmandu",
  "/iq-psychological-testing/": "IQ and psychological testing in Kathmandu",
  "/medical-fitness-certificate/": "medical fitness certificate from a psychiatrist",
  "/psychology-internship-nepal/": "psychology internship in Nepal",
  "/corporate-mental-health-partner-nepal/": "corporate mental health partner in Nepal",
  "/community-mental-health-programs/": "community mental health programs",
  "/home-visit-psychiatrist-nepal/": "home-visit psychiatrist in Nepal",
  "/english-speaking-psychiatrist/": "English-speaking psychiatrist in Kathmandu",
  "/expatriates-in-nepal/": "psychiatrist for expatriates in Nepal",
  "/tourists-in-nepal/": "psychiatrist for tourists in Nepal",
  "/medication-review-second-opinion-nepal/": "medication review and second opinion",
  "/psychiatric-medication-side-effects/": "psychiatric medication side effects",
  "/help-relative-abroad-see-psychiatrist/": "helping a relative abroad see a psychiatrist",
  "/psychiatric-care-for-family-in-nepal/": "psychiatric care for family in Nepal",
  "/returning-to-nepal-after-abroad/": "returning to Nepal after living abroad",
  "/psychiatrist-for-nepalis-abroad/": "psychiatrist for Nepalis abroad",
  "/nepalese-abroad/": "psychiatrist for Nepalis abroad, by country",
  "/addiction-treatment-kathmandu/": "addiction treatment in Kathmandu",
  "/sleep-problems-treatment-nepal/": "sleep problems treatment in Nepal",
  "/adhd-treatment-kathmandu/": "ADHD treatment in Kathmandu",
  "/depression-treatment-kathmandu/": "depression treatment in Kathmandu",
  "/bipolar-disorder-treatment-kathmandu/": "bipolar disorder treatment in Kathmandu",
  "/schizophrenia-treatment-kathmandu/": "schizophrenia treatment in Kathmandu",
  "/psychosis-treatment-kathmandu/": "psychosis treatment in Kathmandu",
  "/panic-attack-treatment-kathmandu/": "panic attack treatment in Kathmandu",
  "/anxiety/": "anxiety treatment in Kathmandu",
  "/anxiety/np/": "चिन्ता विकार उपचार",
  "/about/": "about Dr. Kushal Kharel",
  "/faq/": "frequently asked questions",
  "/appointment/": "book an appointment",
  "/contact/": "contact the clinic",
  "/screening/": "free mental health screening",
  "/resources/": "patient leaflets and resources",
  "/medications/": "psychiatric medication guides",
  "/conditions/": "psychiatric conditions library",
  "/knowledge/": "Nepali patient guides",
  "/blog/": "mental health articles",
  "/patient-testimonials/": "patient testimonials",
  "/medical-disclaimer/": "medical disclaimer",
  "/privacy-policy/": "privacy policy",
};

// Service pages that sit near each other, so each service page is linked to from
// several others in context, not only from the footer.
export const serviceRelations: Record<string, string[]> = {
  "/resources/caregiver-support-resource/": ["/psychiatric-care-for-family-in-nepal/", "/help-relative-abroad-see-psychiatrist/", "/blog/caregiver-burnout-mental-illness-dementia-nepal/", "/resources/", "/counselling-in-nepal/"],
  "/about/": ["/best-psychiatrist-nepal/", "/psychiatry-clinic-kathmandu/", "/patient-testimonials/", "/conditions/"],
  "/faq/": ["/appointment/", "/psychiatrist-fee-nepal/", "/online-psychiatrist-nepal/", "/psychiatry-clinic-kathmandu/", "/about/"],
  "/psychiatry-clinic-kathmandu/": ["/best-psychiatrist-nepal/", "/online-psychiatrist-nepal/", "/psychiatrist-fee-nepal/", "/psychiatric-hospital-vs-clinic-kathmandu/", "/medical-fitness-certificate/", "/psychiatric-medication-side-effects/"],
  "/best-psychiatrist-nepal/": ["/psychiatry-clinic-kathmandu/", "/psychiatrist-fee-nepal/", "/english-speaking-psychiatrist/", "/about/", "/medical-fitness-certificate/", "/faq/"],
  "/online-psychiatrist-nepal/": ["/psychiatrist-for-nepalis-abroad/", "/home-visit-psychiatrist-nepal/", "/psychiatrist-fee-nepal/", "/psychiatry-clinic-kathmandu/"],
  "/psychiatrist-fee-nepal/": ["/psychiatry-clinic-kathmandu/", "/online-psychiatrist-nepal/", "/medication-review-second-opinion-nepal/", "/medical-fitness-certificate/", "/appointment/", "/faq/"],
  "/psychiatric-hospital-vs-clinic-kathmandu/": ["/psychiatry-clinic-kathmandu/", "/best-psychiatrist-nepal/", "/home-visit-psychiatrist-nepal/", "/addiction-treatment-kathmandu/"],
  "/counselling-in-nepal/": ["/relationship-counselling-kathmandu/", "/cbt-therapist-kathmandu/", "/female-counselor-kathmandu/", "/stress-anger-management-kathmandu/", "/psychology-internship-nepal/"],
  "/relationship-counselling-kathmandu/": ["/couple-relationship-counseling/", "/counselling-in-nepal/", "/female-counselor-kathmandu/", "/stress-anger-management-kathmandu/"],
  "/couple-relationship-counseling/": ["/relationship-counselling-kathmandu/", "/counselling-in-nepal/", "/female-counselor-kathmandu/", "/stress-anger-management-kathmandu/"],
  "/female-counselor-kathmandu/": ["/counselling-in-nepal/", "/relationship-counselling-kathmandu/", "/couple-relationship-counseling/", "/cbt-therapist-kathmandu/"],
  "/cbt-therapist-kathmandu/": ["/erp-therapy-ocd/", "/anxiety/", "/depression-treatment-kathmandu/", "/counselling-in-nepal/", "/how-to-control-your-mind-nepal/", "/psychology-internship-nepal/"],
  "/stress-anger-management-kathmandu/": ["/counselling-in-nepal/", "/cbt-therapist-kathmandu/", "/corporate-mental-health-partner-nepal/", "/how-to-control-your-mind-nepal/"],
  "/how-to-control-your-mind-nepal/": ["/anxiety/", "/cbt-therapist-kathmandu/", "/stress-anger-management-kathmandu/", "/sleep-problems-treatment-nepal/"],
  "/child-adolescent-psychiatry/": ["/adhd-treatment-kathmandu/", "/iq-psychological-testing/", "/anxiety/", "/depression-treatment-kathmandu/"],
  "/iq-psychological-testing/": ["/child-adolescent-psychiatry/", "/adhd-treatment-kathmandu/", "/medical-fitness-certificate/", "/psychology-internship-nepal/"],
  "/medical-fitness-certificate/": ["/iq-psychological-testing/", "/psychiatry-clinic-kathmandu/", "/psychiatrist-fee-nepal/", "/appointment/"],
  "/psychology-internship-nepal/": ["/counselling-in-nepal/", "/cbt-therapist-kathmandu/", "/community-mental-health-programs/", "/iq-psychological-testing/"],
  "/corporate-mental-health-partner-nepal/": ["/stress-anger-management-kathmandu/", "/community-mental-health-programs/", "/counselling-in-nepal/", "/screening/"],
  "/community-mental-health-programs/": ["/corporate-mental-health-partner-nepal/", "/psychology-internship-nepal/", "/stress-anger-management-kathmandu/", "/screening/"],
  "/home-visit-psychiatrist-nepal/": ["/online-psychiatrist-nepal/", "/psychiatric-hospital-vs-clinic-kathmandu/", "/psychiatric-care-for-family-in-nepal/", "/psychiatry-clinic-kathmandu/", "/resources/caregiver-support-resource/"],
  "/english-speaking-psychiatrist/": ["/expatriates-in-nepal/", "/tourists-in-nepal/", "/online-psychiatrist-nepal/", "/best-psychiatrist-nepal/"],
  "/expatriates-in-nepal/": ["/english-speaking-psychiatrist/", "/tourists-in-nepal/", "/online-psychiatrist-nepal/", "/returning-to-nepal-after-abroad/"],
  "/tourists-in-nepal/": ["/english-speaking-psychiatrist/", "/expatriates-in-nepal/", "/online-psychiatrist-nepal/", "/psychiatry-clinic-kathmandu/"],
  "/medication-review-second-opinion-nepal/": ["/psychiatric-medication-side-effects/", "/psychiatrist-fee-nepal/", "/medications/", "/online-psychiatrist-nepal/"],
  "/psychiatric-medication-side-effects/": ["/medication-review-second-opinion-nepal/", "/medications/", "/psychiatry-clinic-kathmandu/", "/resources/"],
  "/help-relative-abroad-see-psychiatrist/": ["/psychiatric-care-for-family-in-nepal/", "/psychiatrist-for-nepalis-abroad/", "/returning-to-nepal-after-abroad/", "/nepalese-abroad/"],
  "/psychiatric-care-for-family-in-nepal/": ["/help-relative-abroad-see-psychiatrist/", "/home-visit-psychiatrist-nepal/", "/psychiatrist-for-nepalis-abroad/", "/nepalese-abroad/", "/psychiatric-medication-side-effects/", "/resources/caregiver-support-resource/"],
  "/returning-to-nepal-after-abroad/": ["/psychiatrist-for-nepalis-abroad/", "/help-relative-abroad-see-psychiatrist/", "/expatriates-in-nepal/", "/nepalese-abroad/"],
  "/psychiatrist-for-nepalis-abroad/": ["/nepalese-abroad/", "/online-psychiatrist-nepal/", "/help-relative-abroad-see-psychiatrist/", "/returning-to-nepal-after-abroad/"],
  "/addiction-treatment-kathmandu/": ["/psychiatric-hospital-vs-clinic-kathmandu/", "/home-visit-psychiatrist-nepal/", "/counselling-in-nepal/", "/screening/alcohol-use/"],
};

// Article category -> the service page a reader of that category should be offered.
export const categoryService: Record<string, string> = {
  "Relationships & Family": "/relationship-counselling-kathmandu/",
  "Stress, Work & Student Life": "/stress-anger-management-kathmandu/",
  "Getting Treatment & Clinic Services": "/online-psychiatrist-nepal/",
  "Trauma, Crisis & Safety": "/psychiatry-clinic-kathmandu/",
  "Life Stages & Communities": "/psychiatry-clinic-kathmandu/",
  "Body Image & Sexual Health": "/psychiatry-clinic-kathmandu/",
  "Other Psychiatric Conditions": "/psychiatry-clinic-kathmandu/",
};
export const defaultService = "/psychiatry-clinic-kathmandu/";

// Extra service links picked from an article's title and keywords, so niche service
// pages are linked from the articles that are actually about them.
export const keywordServiceRules: { test: RegExp; href: string }[] = [
  { test: /\bcbt\b|cognitive behaviou?r/i, href: "/cbt-therapist-kathmandu/" },
  { test: /fitness certificate|medical certificate|letter of recommendation/i, href: "/medical-fitness-certificate/" },
  { test: /internship|psychology student|clinical psychology/i, href: "/psychology-internship-nepal/" },
  { test: /\bfee\b|\bcost\b|price|afford/i, href: "/psychiatrist-fee-nepal/" },
  { test: /corporate|workplace|employee|burnout/i, href: "/corporate-mental-health-partner-nepal/" },
  { test: /control (your )?mind|overthinking|racing thoughts/i, href: "/how-to-control-your-mind-nepal/" },
  { test: /hospital|admission|inpatient/i, href: "/psychiatric-hospital-vs-clinic-kathmandu/" },
  { test: /side effect|medication review|second opinion/i, href: "/medication-review-second-opinion-nepal/" },
  { test: /couple|marriage|relationship/i, href: "/couple-relationship-counseling/" },
  { test: /adolescent|teenager|\bteens?\b|school refusal|child (psychiatr|counsel|mental)|children'?s? mental/i, href: "/child-adolescent-psychiatry/" },
  { test: /female counsel|women/i, href: "/female-counselor-kathmandu/" },
  { test: /iq test|psychological test|assessment of intelligence/i, href: "/iq-psychological-testing/" },
  { test: /community|awareness program|school program/i, href: "/community-mental-health-programs/" },
];
