export type Medication = {
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  whatItIs: string;
  commonIndications: string[];
  commonSideEffects: string[];
  precautions: string[];
  timeToEffect: string;
  discontinuation: string;
  urgentCare: string;
  individualizedNote: string;
  faqs: { question: string; answer: string }[];
  references: string[];
};

export const medications: Medication[] = [
  {
    slug: "ssris-explained",
    name: "SSRIs (Selective Serotonin Reuptake Inhibitors)",
    category: "Antidepressants",
    shortDescription:
      "Educational information on SSRIs — the most commonly prescribed antidepressant class — covering what they treat, common side effects, how long they take to work, and safe discontinuation.",
    whatItIs:
      "SSRIs (selective serotonin reuptake inhibitors) are the most widely prescribed class of antidepressant medication, and include drugs such as escitalopram, sertraline, fluoxetine and others. They work by increasing the availability of serotonin, a neurotransmitter involved in mood, anxiety and sleep regulation, in the brain. SSRIs are considered first-line pharmacological treatment for most cases of depression and many anxiety disorders because of their established effectiveness and generally favourable side-effect profile compared with older antidepressant classes.",
    commonIndications: [
      "Major depressive disorder",
      "Generalized anxiety disorder",
      "Panic disorder",
      "Social anxiety disorder",
      "Obsessive-compulsive disorder (typically at higher doses than for depression)",
      "Post-traumatic stress disorder",
      "Premenstrual dysphoric disorder",
    ],
    commonSideEffects: [
      "Nausea or stomach upset, most common in the first one to two weeks",
      "Headache",
      "Sleep changes — either drowsiness or, less commonly, difficulty sleeping",
      "Sexual side effects, including reduced libido or delayed orgasm",
      "Initial increase in anxiety or restlessness during the first days of treatment",
      "Dry mouth",
      "Changes in appetite or weight over longer-term use",
    ],
    precautions: [
      "Inform the prescriber of all other medications, including over-the-counter drugs and supplements, due to interaction risk (particularly with other serotonergic drugs)",
      "A small increase in suicidal thoughts can occur in some people, particularly younger patients, in the early weeks of treatment — closer monitoring is standard practice during this period",
      "Should generally not be combined with MAOIs due to serious interaction risk",
      "Use in pregnancy and breastfeeding requires individual risk-benefit discussion with a psychiatrist",
      "Alcohol can worsen side effects and is generally best minimised while establishing a new medication",
    ],
    timeToEffect:
      "Some improvement in physical symptoms like sleep or appetite may appear within one to two weeks, but the core mood and anxiety benefits typically take four to six weeks to become clearly noticeable, and a full assessment of response is usually made at six to eight weeks. This gradual onset is normal and expected, not a sign the medication isn't working.",
    discontinuation:
      "SSRIs should not be stopped abruptly, particularly after more than a few weeks of use, since sudden discontinuation can cause a recognised discontinuation syndrome (dizziness, flu-like symptoms, irritability, electric-shock sensations, sleep disturbance). When it's time to stop, the dose is generally tapered gradually under medical supervision rather than stopped all at once.",
    urgentCare:
      "Seek urgent medical attention for a severe allergic reaction, signs of serotonin syndrome (agitation, high fever, rapid heartbeat, muscle rigidity, confusion — especially if another serotonergic drug has also been taken), or any new or worsening thoughts of self-harm or suicide, particularly in the first weeks of treatment or after a dose change.",
    individualizedNote:
      "Which specific SSRI, at what dose, and for how long is an individual decision made with a psychiatrist based on the specific condition, other medications, physical health, prior treatment response and personal preference. This page is general education, not a recommendation for what any specific person should take.",
    faqs: [
      { question: "Are SSRIs addictive?", answer: "No, SSRIs are not addictive in the way substances like benzodiazepines or opioids are — they don't produce craving or a need for increasing doses to get the same effect. However, stopping them abruptly after regular use can cause a discontinuation syndrome, which is why tapering under medical guidance is recommended." },
      { question: "Will an SSRI change my personality?", answer: "SSRIs are not intended to and generally don't change core personality. Some people describe feeling more emotionally 'blunted' or less intensely reactive at certain doses, which is a recognised side effect some people experience and can usually be addressed by adjusting the dose or switching medication if it's troublesome — this is worth discussing with your prescriber rather than assuming it's an unavoidable trade-off." },
      { question: "How long do SSRIs take to start working?", answer: "Some physical symptoms may improve within one to two weeks, but the core antidepressant or anti-anxiety effect typically takes four to six weeks to become clear, with full response assessed around six to eight weeks." },
      { question: "Can I drink alcohol while taking an SSRI?", answer: "It's generally advisable to minimise alcohol, since it can worsen side effects like drowsiness and may affect how well the medication works. Discuss your specific situation with your prescriber." },
      { question: "What happens if I miss a dose?", answer: "Missing an occasional dose is usually not dangerous, but consistent daily use is important for steady effect. If you're unsure what to do after a missed dose, or miss doses frequently, discuss this with your prescriber rather than doubling up without guidance." },
      { question: "Can SSRIs be taken long-term?", answer: "Yes, for some people, particularly those with recurrent or chronic depression or anxiety, longer-term treatment is appropriate and reviewed periodically. Others take an SSRI for a defined period alongside therapy and later taper off. This is an individual decision reviewed over time, not a fixed rule." },
    ],
    references: [
      "National Institute for Health and Care Excellence (NICE). Depression in adults: treatment and management.",
      "Royal College of Psychiatrists. Antidepressants patient information.",
      "American Psychiatric Association. Practice Guideline for the Treatment of Patients with Major Depressive Disorder.",
    ],
  },
  {
    slug: "antipsychotic-medications-explained",
    name: "Antipsychotic Medications",
    category: "Antipsychotics",
    shortDescription:
      "Educational information on antipsychotic medications — what they treat, common side effects, how long treatment typically continues, and why adherence matters for relapse prevention.",
    whatItIs:
      "Antipsychotic medications work primarily by regulating dopamine activity in the brain and are the core treatment for psychotic symptoms such as delusions and hallucinations, as well as mood stabilisation in some conditions. They're broadly divided into older ('first-generation' or 'typical') and newer ('second-generation' or 'atypical') antipsychotics, including drugs such as olanzapine, risperidone, quetiapine and amisulpride, which differ somewhat in their side-effect profiles though all share the same core mechanism of reducing dopamine overactivity.",
    commonIndications: [
      "Schizophrenia and schizoaffective disorder",
      "Acute psychotic episodes and first-episode psychosis",
      "Bipolar disorder (mania and, for some antipsychotics, depression)",
      "Severe agitation in psychiatric emergencies",
      "As an add-on treatment for treatment-resistant depression, in some cases",
      "Severe, treatment-resistant anxiety, occasionally, at low doses and short-term",
    ],
    commonSideEffects: [
      "Sedation or drowsiness, particularly with certain antipsychotics",
      "Weight gain and metabolic changes (blood sugar, cholesterol) — more prominent with some antipsychotics than others",
      "Movement-related side effects, including restlessness (akathisia), stiffness or tremor",
      "Dry mouth and constipation",
      "Elevated prolactin levels, which can affect menstrual cycles or cause breast tenderness",
      "Dizziness, particularly on standing up quickly (orthostatic hypotension)",
    ],
    precautions: [
      "Regular monitoring of weight, blood sugar, cholesterol and, for some antipsychotics, heart rhythm (ECG) is standard practice during treatment",
      "Movement-related side effects should be reported promptly, since some are more manageable if caught early",
      "Should not be combined with other sedating substances, including alcohol, without medical guidance",
      "Use in pregnancy and breastfeeding requires individual risk-benefit discussion",
      "Clozapine specifically requires regular blood monitoring due to a rare but serious risk of reduced white blood cell count, and is only used under specialist supervision",
    ],
    timeToEffect:
      "Sedation and some agitation relief can occur within days, but the core antipsychotic effect on delusions and hallucinations typically builds over one to six weeks, with fuller response sometimes taking longer. Treatment is usually continued and monitored over this period before concluding whether a specific medication and dose are the right fit.",
    discontinuation:
      "Antipsychotics should not be stopped abruptly except in a medical emergency, since sudden discontinuation significantly raises the risk of relapse and can also cause withdrawal-related symptoms. For conditions like schizophrenia, the duration of maintenance treatment after a first episode is a significant individual decision made with a psychiatrist, often extending well beyond symptom resolution to reduce relapse risk — this is discussed and reviewed over time, not decided once.",
    urgentCare:
      "Seek urgent medical care for neuroleptic malignant syndrome (high fever, severe muscle rigidity, confusion, unstable blood pressure — a rare but serious emergency), severe allergic reaction, uncontrollable muscle spasms particularly of the neck or eyes (acute dystonia), or any new chest pain, fainting, or irregular heartbeat.",
    individualizedNote:
      "The specific antipsychotic, dose and expected duration of treatment are individualised based on diagnosis, symptom severity, side-effect tolerance, physical health and prior treatment history. This page provides general education, not a recommendation for what any specific person should take.",
    faqs: [
      { question: "Are antipsychotics only for schizophrenia?", answer: "No. While schizophrenia and psychosis are core indications, antipsychotics are also used for bipolar disorder, severe agitation, and sometimes as an add-on for treatment-resistant depression, at doses and durations tailored to each use." },
      { question: "Will antipsychotics sedate me and make me unable to function?", answer: "Sedation is a genuine, common side effect, but it varies significantly between different antipsychotics and doses, and can often be managed by adjusting the choice of medication, dose or timing — this is worth raising directly with your prescriber rather than assuming it's unavoidable." },
      { question: "How long do antipsychotics need to be taken?", answer: "This varies significantly by diagnosis and individual course. After a first psychotic episode, guidelines generally recommend continuing treatment well beyond symptom resolution to reduce relapse risk, often for one to two years or longer depending on the situation; for chronic or recurrent conditions, longer-term treatment is often appropriate. This is reviewed periodically with your psychiatrist." },
      { question: "Why do antipsychotics cause weight gain?", answer: "Some antipsychotics affect appetite-regulating and metabolic pathways in the body, leading to increased appetite and changes in how the body processes sugar and fat. This effect varies considerably between different antipsychotics, which is one factor considered when choosing a medication, alongside monitoring and lifestyle support during treatment." },
      { question: "Is it dangerous to stop antipsychotics suddenly?", answer: "Yes, stopping abruptly significantly increases the risk of relapse, particularly for psychotic disorders, and can also cause withdrawal-related symptoms. Any change to antipsychotic treatment should be planned and supervised by the prescribing psychiatrist." },
      { question: "Do all antipsychotics work the same way?", answer: "They share a core mechanism involving dopamine regulation, but individual antipsychotics differ in their additional effects on other brain chemicals, which explains why side-effect profiles and, for some people, effectiveness can differ meaningfully between specific medications." },
    ],
    references: [
      "National Institute for Health and Care Excellence (NICE). Psychosis and schizophrenia in adults: prevention and management.",
      "Royal College of Psychiatrists. Antipsychotic medication patient information.",
      "World Health Organization. mhGAP Intervention Guide.",
    ],
  },
  {
    slug: "mood-stabilizers-lithium-explained",
    name: "Mood Stabilizers & Lithium",
    category: "Mood Stabilizers",
    shortDescription:
      "Educational information on mood stabilizers, including lithium — what they treat, common side effects, required monitoring, and why consistent use and blood testing matter.",
    whatItIs:
      "Mood stabilizers are medications used primarily to prevent and treat the mood episodes of bipolar disorder — both manic/hypomanic and depressive episodes. Lithium is the longest-established and most extensively studied mood stabilizer, with strong evidence for both treating acute mania and, importantly, reducing the risk of future episodes and suicide risk over the long term. Other medications used as mood stabilizers include certain anticonvulsants (such as valproate and lamotrigine), which affect mood through different mechanisms than lithium.",
    commonIndications: [
      "Bipolar I and bipolar II disorder — acute mania and long-term relapse prevention",
      "Treatment-resistant depression, as an add-on to an antidepressant, in some cases",
      "Schizoaffective disorder, bipolar type",
      "Reducing suicide risk in mood disorders (specifically established for lithium)",
    ],
    commonSideEffects: [
      "Lithium: increased thirst and urination, fine hand tremor, mild nausea, weight gain",
      "Lithium: changes in thyroid or kidney function over long-term use, monitored via regular blood tests",
      "Valproate: weight gain, hair thinning, tremor, sedation",
      "Lamotrigine: skin rash (usually mild, but requires immediate medical attention if severe — see urgent care)",
      "General: sedation or reduced alertness, particularly when treatment is first started or the dose is adjusted",
    ],
    precautions: [
      "Lithium requires regular blood tests to monitor lithium levels, kidney function and thyroid function, since the effective dose range is relatively narrow and both too little and too much can be a problem",
      "Dehydration, certain other medications (including some painkillers and blood pressure medications), and reduced salt intake can all affect lithium levels — this is discussed as part of ongoing monitoring",
      "Valproate carries significant risk in pregnancy and is generally avoided in women who could become pregnant unless no suitable alternative exists, under specialist guidance",
      "Lamotrigine dose must be increased very gradually according to a specific schedule to reduce the risk of serious rash",
      "Regular follow-up and blood testing is a core, non-optional part of safe mood stabilizer treatment, not an occasional extra",
    ],
    timeToEffect:
      "For acute mania, some effect can be seen within one to two weeks, with fuller control often taking several weeks. For relapse-prevention (the primary long-term goal, particularly with lithium), benefit builds over months, and the medication's real value is often best judged over a longer period of stability rather than a short trial.",
    discontinuation:
      "Mood stabilizers, particularly lithium, should not be stopped abruptly, since doing so — especially suddenly — is associated with a notably increased risk of relapse, including rebound mania. Any decision to reduce or stop a mood stabilizer is made collaboratively with a psychiatrist, typically with a slow taper and close monitoring.",
    urgentCare:
      "Seek urgent medical care for signs of lithium toxicity (severe tremor, confusion, slurred speech, vomiting, unsteady walking — particularly after illness, dehydration or a dose change), any severe or spreading skin rash while taking lamotrigine, or any new severe abdominal pain, jaundice or bleeding while taking valproate.",
    individualizedNote:
      "Choice of mood stabilizer, dosing, and monitoring schedule are individualised based on diagnosis, other health conditions, pregnancy plans, and response and tolerability. This page provides general education, not a recommendation for what any specific person should take.",
    faqs: [
      { question: "Why does lithium need regular blood tests?", answer: "Lithium works within a relatively narrow effective range — too low and it may not control symptoms, too high and it can become toxic. Regular blood tests confirm the level is in the safe, effective range and also monitor kidney and thyroid function, which lithium can affect over long-term use." },
      { question: "Is lithium an old, outdated medication?", answer: "No — despite being one of the oldest psychiatric medications still in use, lithium remains one of the most effective treatments for bipolar disorder, with the strongest evidence of any mood stabilizer for reducing suicide risk specifically, which is why it remains a first-line option." },
      { question: "Can mood stabilizers be taken during pregnancy?", answer: "This requires individual, careful discussion with a psychiatrist — some mood stabilizers (particularly valproate) carry significant risks in pregnancy, while decisions about others depend on the specific situation, balancing medication risk against the risk of an untreated mood episode. This should always be planned in advance where possible, not decided during an unplanned pregnancy." },
      { question: "What happens if I miss a dose of lithium?", answer: "An occasional missed dose is not usually dangerous, but consistent, regular use is important for maintaining a stable level. Do not take a double dose to make up for a missed one without guidance — ask your prescriber for specific advice." },
      { question: "How long is mood stabilizer treatment usually needed?", answer: "For bipolar disorder, long-term maintenance treatment is often recommended given the high risk of relapse without it, though this is an individualised decision reviewed periodically based on episode history and personal circumstances, not a fixed universal duration." },
    ],
    references: [
      "National Institute for Health and Care Excellence (NICE). Bipolar disorder: assessment and management.",
      "Royal College of Psychiatrists. Lithium patient information.",
      "British Association for Psychopharmacology. Guidelines for treating bipolar disorder.",
    ],
  },
  {
    slug: "benzodiazepines-explained",
    name: "Benzodiazepines",
    category: "Anti-Anxiety / Sedative Medications",
    shortDescription:
      "Educational information on benzodiazepines — what they treat, why they're used short-term, dependence risk, common side effects, and safe discontinuation.",
    whatItIs:
      "Benzodiazepines (including drugs such as clonazepam and alprazolam) are fast-acting medications that enhance the effect of GABA, the brain's main calming neurotransmitter, producing rapid relief of anxiety, agitation or acute distress. Unlike SSRIs, which take weeks to build an effect, benzodiazepines work within minutes to hours, which makes them useful for short-term or acute situations but also means they carry a real risk of tolerance and physical dependence with regular ongoing use — this is the central fact that shapes how they're prescribed.",
    commonIndications: [
      "Short-term relief of severe anxiety or panic during an acute crisis",
      "Acute agitation in a psychiatric emergency, under medical supervision",
      "Alcohol withdrawal management, specifically, under medical supervision",
      "Short-term treatment of severe insomnia in specific circumstances",
      "As a bridging treatment for the first weeks of starting an SSRI for anxiety, occasionally, while waiting for the SSRI to take effect",
    ],
    commonSideEffects: [
      "Drowsiness and sedation",
      "Impaired coordination and reaction time (relevant to driving or operating machinery)",
      "Memory difficulties, particularly for events during periods of peak effect",
      "Slurred speech at higher doses",
      "In older adults specifically, increased fall risk",
    ],
    precautions: [
      "Regular, ongoing use — beyond a short defined period — carries a genuine risk of tolerance (needing more for the same effect) and physical dependence, which is why benzodiazepines are generally prescribed for the shortest effective duration",
      "Should not be combined with alcohol or opioid medications, since this combination significantly increases the risk of dangerous sedation and breathing suppression",
      "Use in pregnancy requires individual risk-benefit discussion",
      "Older adults are more sensitive to sedative and fall-risk side effects and are typically prescribed lower doses when benzodiazepines are used at all",
      "A history of substance use disorder is an important factor discussed before starting a benzodiazepine, given the dependence potential",
    ],
    timeToEffect:
      "Benzodiazepines typically produce noticeable calming effects within 30 minutes to a few hours of a dose, which is part of why they are useful for acute, short-term situations rather than as a long-term standalone treatment for an underlying anxiety disorder.",
    discontinuation:
      "After regular use, benzodiazepines should never be stopped abruptly, since withdrawal can include rebound anxiety, insomnia, tremor, and in more severe cases (particularly after high-dose or long-term use), seizures — a genuine medical risk, not simply discomfort. Discontinuation after regular use is done through a gradual, medically supervised taper, sometimes over weeks to months depending on the dose and duration of use.",
    urgentCare:
      "Seek urgent medical care for severe sedation or difficulty breathing (particularly if combined with alcohol or opioids), any seizure occurring after stopping or reducing a benzodiazepine, or severe confusion — and seek help immediately if benzodiazepine use has become difficult to control, rather than waiting for a crisis.",
    individualizedNote:
      "Whether a benzodiazepine is appropriate, at what dose, and for how long is an individual clinical decision that specifically weighs rapid symptom relief against dependence risk. This page provides general education, not a recommendation for what any specific person should take.",
    faqs: [
      { question: "Are benzodiazepines addictive?", answer: "They carry a genuine risk of tolerance and physical dependence with regular ongoing use, which is different from but related to addiction. This is precisely why they're generally prescribed for short, defined periods rather than as an open-ended daily treatment, and why any longer-term use is closely monitored." },
      { question: "Why won't my psychiatrist prescribe benzodiazepines long-term for my anxiety?", answer: "This is standard, evidence-based practice, not a judgment about your symptoms — benzodiazepines are effective for rapid, short-term relief, but for an ongoing anxiety disorder, treatments like SSRIs and CBT provide better long-term outcomes without the dependence risk that comes with regular benzodiazepine use." },
      { question: "Is it dangerous to stop benzodiazepines suddenly?", answer: "Yes, after regular use, particularly at higher doses or for longer periods, sudden discontinuation can cause a serious withdrawal syndrome, including a risk of seizures. Any reduction or stop should be planned as a gradual taper with your prescriber." },
      { question: "Can I drink alcohol while taking a benzodiazepine?", answer: "No — combining benzodiazepines with alcohol significantly increases the risk of dangerous sedation and suppressed breathing, and this combination should be avoided." },
      { question: "How long can benzodiazepines safely be used?", answer: "Guidelines generally recommend the shortest effective duration, often days to a few weeks for most situations, given dependence risk with longer regular use. Specific circumstances vary, and any longer-term use is a decision made and closely monitored individually with your psychiatrist." },
    ],
    references: [
      "National Institute for Health and Care Excellence (NICE). Generalised anxiety disorder and panic disorder in adults: management.",
      "Royal College of Psychiatrists. Benzodiazepines patient information.",
      "World Health Organization. Guidelines for the management of substance withdrawal.",
    ],
  },
];

export function getMedication(slug: string) {
  return medications.find((m) => m.slug === slug);
}
