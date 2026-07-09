import { getCondition } from "./conditions";

export type ResourceCategory =
  | "Patient Information Leaflet"
  | "Medication Guide"
  | "Coping Tool"
  | "Family & Caregiver Resource";

export type ResourceSection = {
  heading: string;
  body?: string;
  bullets?: string[];
};

export type Resource = {
  slug: string;
  title: string;
  category: ResourceCategory;
  shortDescription: string;
  relatedConditionSlug?: string;
  sections: ResourceSection[];
  urgentNote?: string;
};

// Builds a condensed, printable patient leaflet from an already-vetted
// condition entry, rather than authoring new clinical content — keeps
// leaflets consistent with the full condition page and avoids drift.
function buildConditionLeaflet(slug: string, title: string): Resource {
  const condition = getCondition(slug);
  if (!condition) {
    throw new Error(`buildConditionLeaflet: no condition found for slug "${slug}"`);
  }
  return {
    slug: `${slug}-leaflet`,
    title,
    category: "Patient Information Leaflet",
    shortDescription: condition.shortDescription,
    relatedConditionSlug: slug,
    sections: [
      { heading: `What is ${condition.title}?`, body: condition.overview },
      { heading: "Common symptoms", bullets: condition.symptoms.slice(0, 8) },
      { heading: "What causes it", body: condition.causes },
      { heading: "Treatment options", body: condition.treatmentOverview },
      { heading: "Self-help tips", bullets: condition.lifestyleAdvice.slice(0, 6) },
      { heading: "Prognosis", body: condition.prognosis },
    ],
    urgentNote: condition.urgentCare,
  };
}

// Builds a family psychoeducation sheet from a condition's existing
// familyGuidance text and, where available, its structured HowTo steps.
function buildFamilySheet(slug: string, title: string): Resource {
  const condition = getCondition(slug);
  if (!condition) {
    throw new Error(`buildFamilySheet: no condition found for slug "${slug}"`);
  }
  const sections: ResourceSection[] = [
    { heading: `Understanding ${condition.title}`, body: condition.shortDescription },
  ];
  if (condition.howTo) {
    sections.push({
      heading: condition.howTo.name,
      bullets: condition.howTo.steps.map((step) => `${step.name}: ${step.text}`),
    });
  } else {
    sections.push({ heading: "How to support your family member", body: condition.familyGuidance });
  }
  sections.push({
    heading: "Taking care of yourself as a caregiver",
    body: "Supporting a family member through a psychiatric condition is genuinely demanding. Build your own support network, take breaks without guilt, and seek your own counselling if you're feeling overwhelmed — you can't pour from an empty cup.",
  });
  return {
    slug: `${slug}-family-guide`,
    title,
    category: "Family & Caregiver Resource",
    shortDescription: `Practical guidance for families and caregivers supporting a loved one with ${condition.title.toLowerCase()}.`,
    relatedConditionSlug: slug,
    sections,
    urgentNote: condition.urgentCare,
  };
}

// Builds a coping-tool resource directly from a condition's structured
// HowTo steps (used for panic attack management and sleep hygiene,
// which already have vetted step-by-step guides in conditions.ts).
function buildHowToResource(
  slug: string,
  title: string,
  category: ResourceCategory,
  shortDescription: string,
): Resource {
  const condition = getCondition(slug);
  if (!condition || !condition.howTo) {
    throw new Error(`buildHowToResource: no howTo found for slug "${slug}"`);
  }
  return {
    slug: `${slug}-guide`,
    title,
    category,
    shortDescription,
    relatedConditionSlug: slug,
    sections: [
      { heading: condition.howTo.name, bullets: condition.howTo.steps.map((step) => `${step.name}: ${step.text}`) },
    ],
    urgentNote: condition.urgentCare,
  };
}

export const resources: Resource[] = [
  // --- Patient Information Leaflets ---
  buildConditionLeaflet("major-depressive-disorder", "Depression: Patient Information Leaflet"),
  buildConditionLeaflet("generalized-anxiety-disorder", "Generalized Anxiety Disorder: Patient Information Leaflet"),
  buildConditionLeaflet("ocd", "OCD: Patient Information Leaflet"),
  buildConditionLeaflet("bipolar-i-disorder", "Bipolar Disorder: Patient Information Leaflet"),
  buildConditionLeaflet("schizophrenia", "Schizophrenia: Patient Information Leaflet"),
  buildConditionLeaflet("adhd", "ADHD: Patient Information Leaflet"),
  buildConditionLeaflet("panic-disorder", "Panic Disorder: Patient Information Leaflet"),
  buildConditionLeaflet("alcohol-use-disorder", "Alcohol Use Disorder: Patient Information Leaflet"),

  // --- Medication Guides (by class — general information only; always
  // follow your prescriber's specific dose and instructions) ---
  {
    slug: "antidepressants-ssri-snri-guide",
    title: "Understanding Antidepressants (SSRIs & SNRIs)",
    category: "Medication Guide",
    shortDescription:
      "General guidance on how SSRI and SNRI antidepressants work, common side effects, and what to expect during treatment.",
    sections: [
      {
        heading: "What are SSRIs and SNRIs?",
        body: "Selective Serotonin Reuptake Inhibitors (SSRIs) and Serotonin-Norepinephrine Reuptake Inhibitors (SNRIs) are the most commonly prescribed antidepressant medications, used for depression, anxiety disorders, OCD, and panic disorder. They work by increasing the availability of serotonin (and, for SNRIs, norepinephrine) in the brain, which helps regulate mood over time.",
      },
      {
        heading: "What to expect",
        bullets: [
          "Full effect usually takes 4-6 weeks, though some improvement in sleep or anxiety may be noticed earlier",
          "An initial period of mild side effects (nausea, jitteriness, headache) often settles within 1-2 weeks",
          "Your psychiatrist may adjust the dose based on your response and side effects",
          "Treatment is usually continued for 6-12 months after symptoms improve, to reduce relapse risk",
        ],
      },
      {
        heading: "Common side effects",
        bullets: [
          "Nausea or stomach upset, usually early and temporary",
          "Headache or mild dizziness",
          "Sleep changes — some antidepressants are more activating, others more sedating",
          "Reduced sexual interest or response, which can persist and should be discussed with your psychiatrist",
          "Mild weight change over time",
        ],
      },
      {
        heading: "Important safety notes",
        bullets: [
          "Do not stop abruptly — stopping suddenly can cause discontinuation symptoms (dizziness, flu-like feelings, irritability); doses should be tapered under medical guidance",
          "Tell your psychiatrist about all other medications and supplements, since some combinations increase serotonin syndrome risk",
          "Report any new or worsening suicidal thoughts immediately, especially in the first few weeks or after a dose change",
          "Avoid combining with alcohol or recreational drugs without discussing this with your psychiatrist",
        ],
      },
    ],
    urgentNote:
      "Seek urgent medical attention for agitation, high fever, muscle rigidity, rapid heart rate or confusion (possible serotonin syndrome), or for any new or worsening thoughts of self-harm.",
  },
  {
    slug: "antipsychotics-guide",
    title: "Understanding Antipsychotic Medications",
    category: "Medication Guide",
    shortDescription:
      "General guidance on how antipsychotic medications work, common side effects, and physical health monitoring while taking them.",
    sections: [
      {
        heading: "What are antipsychotics used for?",
        body: "Antipsychotic medications are used to treat schizophrenia, schizoaffective disorder, bipolar disorder (particularly during mania or with psychotic features), and some other conditions involving hallucinations, delusions or severe agitation. Second-generation (atypical) antipsychotics are generally preferred first-line, given a more favorable side-effect profile regarding movement symptoms.",
      },
      {
        heading: "What to expect",
        bullets: [
          "Some sedation or calming effect can occur within days; full effect on hallucinations or delusions usually takes several weeks",
          "Your psychiatrist will start at a low dose and adjust gradually",
          "Regular follow-up appointments are needed to monitor response and side effects",
          "Long-acting injectable forms are available for some antipsychotics if adherence to daily tablets is difficult",
        ],
      },
      {
        heading: "Common side effects",
        bullets: [
          "Sedation or drowsiness, especially early in treatment",
          "Weight gain and changes in blood sugar or cholesterol — regular monitoring is important",
          "Movement-related effects: stiffness, tremor, restlessness (report these to your psychiatrist)",
          "Dry mouth, constipation, or mild dizziness on standing",
        ],
      },
      {
        heading: "Physical health monitoring",
        bullets: [
          "Weight, blood pressure and waist circumference checked regularly",
          "Blood sugar (glucose) and cholesterol (lipid) testing periodically",
          "For clozapine specifically, regular blood tests are required to monitor white blood cell count",
        ],
      },
      {
        heading: "Important safety notes",
        bullets: [
          "Do not stop abruptly without medical guidance — stopping suddenly increases relapse risk",
          "Report severe muscle stiffness, high fever or confusion immediately (possible Neuroleptic Malignant Syndrome — a medical emergency)",
          "Discuss alcohol use and other medications with your psychiatrist",
        ],
      },
    ],
    urgentNote:
      "Seek emergency medical care for severe muscle rigidity, high fever, confusion or autonomic instability (possible Neuroleptic Malignant Syndrome), or for any signs of a severe allergic reaction.",
  },
  {
    slug: "mood-stabilizers-guide",
    title: "Understanding Mood Stabilizers",
    category: "Medication Guide",
    shortDescription:
      "General guidance on mood-stabilizing medications used for bipolar disorder, including lithium and anticonvulsant options, and required monitoring.",
    sections: [
      {
        heading: "What are mood stabilizers used for?",
        body: "Mood stabilizers are used primarily for bipolar disorder, to treat and prevent both manic/hypomanic and depressive episodes. Lithium is the best-studied option with specific evidence for reducing suicide risk. Certain anticonvulsant medications (such as valproate or lamotrigine) are also used as mood stabilizers.",
      },
      {
        heading: "What to expect",
        bullets: [
          "Mood-stabilizing effect can take several weeks to become fully established",
          "Regular blood tests are required for lithium and valproate to check the medication level and ensure it stays in a safe, effective range",
          "Consistency matters — taking the medication at the same time each day, and not skipping doses, helps maintain a stable blood level",
        ],
      },
      {
        heading: "Common side effects",
        bullets: [
          "Lithium: increased thirst and urination, mild tremor, weight gain — report any of these to your psychiatrist",
          "Valproate: nausea, weight gain, hair thinning, tremor",
          "Lamotrigine: needs a very slow, gradual dose increase to reduce serious skin rash risk",
        ],
      },
      {
        heading: "Important safety notes",
        bullets: [
          "Lithium levels are affected by dehydration, some other medications, and kidney function — inform any doctor treating you that you take lithium",
          "Valproate carries significant risk to a developing baby and is generally avoided in pregnancy or for women who may become pregnant, without specialist discussion",
          "Any new skin rash while starting or increasing lamotrigine needs urgent medical review",
          "Never stop a mood stabilizer abruptly without medical guidance, given relapse risk",
        ],
      },
    ],
    urgentNote:
      "Seek urgent medical attention for signs of lithium toxicity (severe tremor, confusion, vomiting, unsteady walking), any new widespread skin rash on lamotrigine, or any new suicidal thoughts.",
  },
  {
    slug: "benzodiazepines-guide",
    title: "Understanding Benzodiazepines",
    category: "Medication Guide",
    shortDescription:
      "General guidance on benzodiazepine medications used short-term for anxiety, panic or insomnia, and their dependence risk.",
    sections: [
      {
        heading: "What are benzodiazepines used for?",
        body: "Benzodiazepines (such as clonazepam, alprazolam or lorazepam) provide fast-acting relief for acute anxiety, panic attacks, or short-term insomnia. Because of dependence risk, they are generally prescribed for short-term or occasional use rather than as a long-term daily treatment.",
      },
      {
        heading: "What to expect",
        bullets: [
          "Effects are usually felt within 30-60 minutes",
          "Typically prescribed for the shortest effective duration, or used on an as-needed basis",
          "Often used as a short bridge while a longer-term treatment (such as an SSRI or CBT) takes effect",
        ],
      },
      {
        heading: "Common side effects",
        bullets: [
          "Drowsiness or sedation",
          "Impaired coordination or reaction time — avoid driving or operating machinery if affected",
          "Memory difficulties, particularly with higher doses",
        ],
      },
      {
        heading: "Important safety notes",
        bullets: [
          "Regular use for more than a few weeks can lead to physical dependence, and stopping abruptly can cause withdrawal, including seizures in severe cases",
          "Never combine with alcohol or opioid medications, since this significantly increases the risk of dangerous breathing suppression",
          "Any dose reduction or discontinuation after regular use should be gradual and supervised by your psychiatrist",
          "Use particular caution in older adults, given increased fall and confusion risk",
        ],
      },
    ],
    urgentNote:
      "Seek emergency medical care for severe drowsiness, confusion or breathing difficulty (especially if combined with alcohol or other sedatives), or for seizures during dose reduction.",
  },
  {
    slug: "adhd-stimulant-medications-guide",
    title: "Understanding ADHD Stimulant Medications",
    category: "Medication Guide",
    shortDescription:
      "General guidance on stimulant medications used to treat ADHD in children, adolescents and adults, common effects, and monitoring needs.",
    sections: [
      {
        heading: "What are stimulant medications used for?",
        body: "Stimulant medications (such as methylphenidate or amphetamine-based medications) are first-line, highly effective treatments for ADHD in both children and adults, improving attention, impulse control and organization by increasing dopamine and norepinephrine activity in the brain.",
      },
      {
        heading: "What to expect",
        bullets: [
          "Effects are usually noticeable within the first dose or two, unlike antidepressants which take weeks",
          "Your psychiatrist will adjust the dose and timing based on response and side effects",
          "Short-acting and long-acting (extended-release) formulations are available depending on your daily schedule",
        ],
      },
      {
        heading: "Common side effects",
        bullets: [
          "Reduced appetite, particularly around dosing times",
          "Difficulty falling asleep if taken too late in the day",
          "Mild increase in heart rate or blood pressure",
          "Headache or mild irritability as the dose wears off",
        ],
      },
      {
        heading: "Important safety notes",
        bullets: [
          "Blood pressure and heart rate are checked at the start of treatment and periodically afterward",
          "Height and weight are monitored regularly in children and adolescents",
          "Report any chest pain, fainting, or significant mood changes to your psychiatrist",
          "These medications have misuse potential — take exactly as prescribed and store securely",
        ],
      },
    ],
    urgentNote:
      "Seek urgent medical attention for chest pain, fainting, irregular heartbeat, or signs of a severe allergic reaction.",
  },

  // --- Coping Tools ---
  buildHowToResource(
    "panic-attacks",
    "Panic Attack Management Instructions",
    "Coping Tool",
    "Step-by-step instructions for managing a panic attack in the moment, based on evidence-based panic management technique.",
  ),
  buildHowToResource(
    "insomnia",
    "Sleep Hygiene Handout",
    "Coping Tool",
    "Daily habits that support healthy sleep, forming the foundation of insomnia treatment alongside CBT-I.",
  ),
  {
    slug: "anxiety-coping-cards",
    title: "Anxiety Coping Cards",
    category: "Coping Tool",
    shortDescription:
      "A compact set of grounding techniques and coping statements to use when anxiety builds, printable as reference cards.",
    sections: [
      {
        heading: "5-4-3-2-1 Grounding Technique",
        body: "When anxiety feels overwhelming, name: 5 things you can see, 4 things you can touch, 3 things you can hear, 2 things you can smell, and 1 thing you can taste. This shifts attention away from anxious thoughts and back into the present moment.",
      },
      {
        heading: "Helpful coping statements",
        bullets: [
          "This is anxiety, not danger. It will pass.",
          "I have gotten through this feeling before, and I will again.",
          "I don't need to fix this feeling right now — I just need to ride it out.",
          "My body is reacting, but I am safe right now.",
        ],
      },
      {
        heading: "Quick physical resets",
        bullets: [
          "Slow, deep breathing — longer exhale than inhale",
          "Splash cold water on your face or hold a cold object",
          "Unclench your jaw and drop your shoulders",
          "Go for a short walk if possible",
        ],
      },
      {
        heading: "When to use these tools",
        body: "These techniques help manage in-the-moment anxiety, but they work best alongside ongoing treatment — therapy, medication, or both — for anxiety that is frequent, severe, or affecting your daily life.",
      },
    ],
  },
  {
    slug: "breathing-exercise-guide",
    title: "Breathing Exercise Guide",
    category: "Coping Tool",
    shortDescription:
      "Three simple breathing techniques to reduce physical tension and anxiety — diaphragmatic breathing, 4-7-8 breathing, and box breathing.",
    sections: [
      {
        heading: "Diaphragmatic (belly) breathing",
        bullets: [
          "Sit or lie down comfortably, one hand on your chest, one on your belly",
          "Breathe in slowly through your nose, letting your belly rise (chest stays relatively still)",
          "Breathe out slowly through your mouth, letting your belly fall",
          "Repeat for 5-10 breaths, focusing on the slow, steady rhythm",
        ],
      },
      {
        heading: "4-7-8 breathing",
        bullets: [
          "Breathe in quietly through your nose for a count of 4",
          "Hold your breath for a count of 7",
          "Exhale completely through your mouth for a count of 8",
          "Repeat for up to 4 cycles; this technique can feel intense at first, so start gently",
        ],
      },
      {
        heading: "Box breathing",
        bullets: [
          "Breathe in for a count of 4",
          "Hold for a count of 4",
          "Breathe out for a count of 4",
          "Hold empty for a count of 4, then repeat the cycle",
        ],
      },
      {
        heading: "Tips for practice",
        body: "Practice these techniques daily when calm, not just during moments of high anxiety — this builds the skill so it's easier to use effectively when you need it most.",
      },
    ],
  },

  // --- Family Psychoeducation Sheets ---
  buildFamilySheet("schizophrenia", "Family Guide: Supporting a Loved One with Schizophrenia"),
  buildFamilySheet("bipolar-i-disorder", "Family Guide: Supporting a Loved One with Bipolar Disorder"),
  buildFamilySheet("major-depressive-disorder", "Family Guide: Supporting a Loved One with Depression"),
  buildFamilySheet("alcohol-use-disorder", "Family Guide: Supporting a Loved One with Alcohol Use Disorder"),

  // --- Caregiver Support ---
  {
    slug: "caregiver-support-resource",
    title: "Caregiver Support: Looking After Yourself",
    category: "Family & Caregiver Resource",
    shortDescription:
      "Practical strategies for caregivers of someone with a psychiatric condition to manage stress and prevent caregiver burnout.",
    sections: [
      {
        heading: "Common caregiver challenges",
        bullets: [
          "Chronic stress and exhaustion from ongoing responsibility",
          "Grief for the relationship or future you expected",
          "Guilt about needing a break, or about feeling frustrated",
          "Social isolation as caregiving responsibilities grow",
          "Financial strain from treatment costs or reduced work hours",
        ],
      },
      {
        heading: "Self-care strategies",
        bullets: [
          "Schedule regular breaks, even short ones, without guilt",
          "Maintain your own sleep, meals and physical activity as much as possible",
          "Stay connected with friends and your own support network",
          "Consider your own counselling or a caregiver support group",
          "Set realistic expectations — you cannot control the illness, only how you respond to it",
        ],
      },
      {
        heading: "Building a support network",
        body: "Caregiving is not meant to be done alone. Share responsibilities with other family members where possible, look into local or online caregiver support groups, and don't hesitate to ask for practical help (meals, errands, respite time) from people who offer it.",
      },
      {
        heading: "When caregiver stress becomes a health concern",
        body: "Persistent low mood, exhaustion that doesn't improve with rest, loss of interest in your own life, or thoughts of hopelessness are signs that your own mental health needs attention too. Caregivers are not immune to depression and anxiety, and seeking your own support is not a sign of failure.",
      },
    ],
    urgentNote:
      "If you are experiencing thoughts of self-harm, or feel unable to safely continue caregiving, reach out for professional support immediately — for yourself as well as the person you're caring for.",
  },
];

export function getResource(slug: string) {
  return resources.find((resource) => resource.slug === slug);
}

export function getResourcesByCategory() {
  const categories: ResourceCategory[] = [
    "Patient Information Leaflet",
    "Medication Guide",
    "Coping Tool",
    "Family & Caregiver Resource",
  ];
  return categories
    .map((category) => ({
      category,
      items: resources.filter((resource) => resource.category === category),
    }))
    .filter((group) => group.items.length > 0);
}
