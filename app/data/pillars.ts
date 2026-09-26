export type Pillar = {
  slug: string; title: string; meta: string; condition: string; keyword: string;
  symptoms: string; causes: string; risks: string; diagnosis: string; differential: string;
  investigations: string; treatment: string; medication: string; therapy: string; family: string;
  lifestyle: string; relapse: string; journey: string; imagePrompt: string; alt: string;
  doctorsApproach: string;
};

// depression, ocd, adhd, bipolar-disorder and schizophrenia pillar entries were
// retired 2026-08-26 and 301-redirected (see public/_redirects) to their
// deeper, more complete /conditions/[slug] counterparts — the two page types
// covered the same clinical ground and were splitting ranking signal between
// duplicate URLs. The "anxiety" entry below is unused for routing (the
// catch-all in app/[slug]/page.tsx and app/sitemap.ts both filter it out)
// because /anxiety has its own dedicated bilingual page — kept here only so
// getPillar("anxiety") continues to resolve if referenced elsewhere.
export const pillars: Pillar[] = [
  {
    slug: "anxiety", title: "Anxiety Treatment in Kathmandu, Nepal", keyword: "Anxiety Treatment Kathmandu",
    meta: "Anxiety treatment in Kathmandu by Dr. Kushal Kharel. Learn about panic attacks, CBT, diagnosis, medication options and online psychiatric consultation.", condition: "anxiety disorders",
    symptoms: "Anxiety can be emotional, physical and behavioural. Persistent worry, dread, irritability, overthinking and difficulty relaxing are common. People may also notice a racing heart, chest tightness, trembling, sweating, nausea, dizziness, muscle tension, poor sleep or trouble concentrating. Panic attacks are sudden waves of intense fear that can peak within minutes. Avoiding buses, crowds, meetings, travel or places linked with a previous attack can quietly make life smaller.",
    causes: "There is rarely one cause. A sensitive threat system may interact with temperament, family vulnerability, difficult experiences, prolonged stress, illness, sleep loss, caffeine or substance use. Generalised anxiety, panic disorder, social anxiety and phobias can look different, but each deserves a careful assessment rather than a dismissive reassurance that it is “just stress.”",
    risks: "Symptoms are more likely to persist when someone is under sustained pressure, has experienced trauma, has a family history of anxiety or mood problems, sleeps poorly, uses nicotine or excess caffeine, or is living with chronic pain or medical illness. These are risk factors, not a verdict about a person’s future.",
    diagnosis: "Diagnosis is a clinical conversation, not a single blood test. The psychiatrist asks when symptoms began, what triggers them, how often they occur and how they affect sleep, work, study, relationships and daily decisions. Past mental-health care, medicines, substance use, physical health and safety are also important. The aim is to understand the pattern and make a practical plan together.",
    differential: "Anxiety symptoms can overlap with depression, OCD, trauma-related conditions, bipolar disorder, substance effects and adjustment difficulties. Palpitations, tremor, breathlessness or weight change can also have medical causes. New chest pain, fainting or severe breathlessness should be assessed urgently rather than assumed to be anxiety.",
    investigations: "Most people do not need extensive investigations. A physical examination or targeted tests may be arranged when the history suggests a thyroid problem, anaemia, medication effect, heart rhythm concern, sleep disorder or another medical contributor. Tests support clinical judgement; they do not replace listening to the person.",
    treatment: "Treatment is individualised after psychiatric assessment. Psychoeducation helps patients understand the alarm-and-avoidance cycle. CBT is a first-line approach for many anxiety disorders: it teaches people to test fearful predictions, reduce reassurance-seeking and gradually return to avoided situations. For panic, social anxiety and phobias, carefully planned exposure is often central. Some people need brief focused work; others benefit from a longer plan when symptoms are recurrent or complex.",
    medication: "Medication may be considered when symptoms are moderate to severe, persistent, recurrent or limiting access to therapy. The right option depends on diagnosis, physical health, other medicines, pregnancy plans, previous response and personal preference. A psychiatrist should explain expected benefits, possible side effects, alternatives and follow-up. No medicine is universally appropriate, and prescribed psychiatric medicine should not be started, stopped or changed without professional advice.",
    therapy: "CBT has the strongest role in anxiety care. Mindfulness-informed skills, behavioural experiments, sleep work and, where emotion dysregulation is prominent, selected DBT skills can add useful tools. Therapy is not simply positive thinking: it is structured practice between sessions.",
    family: "Families can help by listening without ridicule, supporting gradual return to normal activities and avoiding taking over every feared task. Repeated reassurance can bring a short relief but may unintentionally keep the anxiety cycle going. A family meeting can clarify how to offer steady, practical support.",
    lifestyle: "Regular sleep and wake times, meals, movement, a measured reduction in caffeine, less nicotine and alcohol, and brief daily calming practices can reduce vulnerability. These are supports, not a substitute for care when anxiety is severe.",
    relapse: "Relapse prevention means noticing early signs—poor sleep, increased avoidance, constant checking or escalating worry—and acting early. Keep a written plan, continue learned CBT skills and arrange review before symptoms become overwhelming.",
    journey: "A first consultation usually lasts long enough to hear the story properly. Together, you identify the problem, rule out urgent concerns and agree on next steps. Follow-ups review progress, side effects if medication is used, and whether the plan still fits.",
    imagePrompt: "Warm, respectful editorial photograph of an adult Nepali patient speaking with a compassionate psychiatrist in a calm, light-filled Kathmandu clinic; no visible medical records, no stereotypes, natural documentary style, 16:9.", alt: "Psychiatric consultation for anxiety treatment in Kathmandu",
    doctorsApproach: "When someone comes to me with anxiety, I spend the first session simply understanding their particular pattern — is it constant background worry, sudden panic attacks, or fear tied to specific situations like crowds or public speaking — because the plan differs for each. I explain the alarm-and-avoidance cycle in plain terms, without jargon, so it makes sense to the patient rather than just to me. Most people start with CBT, and I only bring medication into the conversation if symptoms are more severe or CBT alone isn't enough, always walking through what to expect and for how long. I see patients in person at Kalanki or by Google Meet, and I check in at follow-up to see what's actually changed, not just how it looks on paper.",
  }
];

export function getPillar(slug: string) { return pillars.find((pillar) => pillar.slug === slug); }
