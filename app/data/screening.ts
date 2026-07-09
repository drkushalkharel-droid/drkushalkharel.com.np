export type ScreeningOption = {
  label: string;
  value: number;
};

export type ScreeningItem = {
  id: string;
  label: string;
  helper?: string;
  // Marks an item where any score above 0 should trigger the on-page
  // safety notice (self-harm / suicidal thoughts items only).
  flagsSelfHarm?: boolean;
};

export type ScreeningToolId =
  | "depression"
  | "sleepiness"
  | "anxiety"
  | "social-anxiety"
  | "ocd"
  | "ptsd"
  | "bipolar"
  | "adult-adhd"
  | "alcohol-use"
  | "insomnia"
  | "panic-disorder"
  | "eating-disorder"
  | "postpartum-depression";

export type ScreeningTool = {
  id: ScreeningToolId;
  title: string;
  shortTitle: string;
  // The everyday Google-search phrasing this tool targets, e.g. "Do I have depression?"
  searchQuestion: string;
  description: string;
  sourceNote: string;
  maxScore: number;
  options: ScreeningOption[];
  items: ScreeningItem[];
  interpretations: {
    min: number;
    max: number;
    label: string;
    guidance: string;
  }[];
  // Links this screening tool to its matching condition detail page.
  relatedConditionSlug?: string;
  seoDescription: string;
  keywords: string[];
};

const severityOptions: ScreeningOption[] = [
  { label: "0 - Not present", value: 0 },
  { label: "1 - Mild", value: 1 },
  { label: "2 - Moderate", value: 2 },
  { label: "3 - Severe", value: 3 },
];

const frequencyOptions: ScreeningOption[] = [
  { label: "0 - Never", value: 0 },
  { label: "1 - Rarely", value: 1 },
  { label: "2 - Sometimes", value: 2 },
  { label: "3 - Often", value: 3 },
  { label: "4 - Very often", value: 4 },
];

const yesNoOptions: ScreeningOption[] = [
  { label: "No", value: 0 },
  { label: "Yes", value: 1 },
];

export const screeningTools: ScreeningTool[] = [
  {
    id: "depression",
    title: "Depression Symptom Screening",
    shortTitle: "Depression",
    searchQuestion: "Do I have depression?",
    description:
      "A 21-domain depression symptom check based on common BDI-style areas such as mood, sleep, appetite, energy, concentration and self-critical thoughts.",
    sourceNote:
      "This public web version uses symptom domains and severity scoring rather than reproducing proprietary questionnaire wording.",
    maxScore: 63,
    options: severityOptions,
    relatedConditionSlug: "major-depressive-disorder",
    seoDescription:
      "Wondering 'do I have depression?' Take a free, confidential self-rated depression symptom screening covering mood, sleep, energy and concentration. Get a score and next steps from Dr. Kushal Kharel, Consultant Psychiatrist in Kathmandu.",
    keywords: [
      "do I have depression",
      "depression test Nepal",
      "depression screening Kathmandu",
      "depression symptoms quiz",
      "am I depressed",
    ],
    items: [
      { id: "sadness", label: "Sadness or low mood" },
      { id: "pessimism", label: "Pessimism or hopeless expectations" },
      { id: "failure", label: "Feeling like a failure" },
      { id: "pleasure", label: "Loss of pleasure" },
      { id: "guilt", label: "Guilty feelings" },
      { id: "punishment", label: "Feeling punished" },
      { id: "self_dislike", label: "Self-dislike or low confidence" },
      { id: "self_critical", label: "Self-critical thoughts" },
      {
        id: "suicidal",
        label: "Thoughts of self-harm or suicide",
        helper:
          "Any score above 0 needs urgent discussion with a trusted person or clinician. If there is immediate danger, seek emergency help now.",
        flagsSelfHarm: true,
      },
      { id: "crying", label: "Crying more than usual" },
      { id: "agitation", label: "Agitation or restlessness" },
      { id: "interest", label: "Loss of interest in people or activities" },
      { id: "decisions", label: "Difficulty making decisions" },
      { id: "worthlessness", label: "Worthlessness" },
      { id: "energy", label: "Loss of energy" },
      { id: "sleep", label: "Change in sleeping pattern" },
      { id: "irritability", label: "Irritability" },
      { id: "appetite", label: "Change in appetite" },
      { id: "concentration", label: "Concentration difficulty" },
      { id: "fatigue", label: "Tiredness or fatigue" },
      { id: "sex_interest", label: "Reduced interest in sex" },
    ],
    interpretations: [
      {
        min: 0,
        max: 13,
        label: "Minimal depressive symptoms",
        guidance:
          "Monitor symptoms, sleep, stress and functioning. Consider consultation if symptoms persist or cause concern.",
      },
      {
        min: 14,
        max: 19,
        label: "Mild depressive symptoms",
        guidance:
          "A psychiatric consultation can help identify causes, stressors and early treatment options.",
      },
      {
        min: 20,
        max: 28,
        label: "Moderate depressive symptoms",
        guidance:
          "Please consider professional assessment with Dr. Kushal Kharel or a qualified local mental health professional.",
      },
      {
        min: 29,
        max: 63,
        label: "Severe depressive symptoms",
        guidance:
          "Prompt psychiatric assessment is recommended. If there are self-harm thoughts or safety concerns, seek emergency help immediately.",
      },
    ],
  },
  {
    id: "sleepiness",
    title: "Daytime Sleepiness Screening",
    shortTitle: "Sleepiness",
    searchQuestion: "Am I too sleepy during the day?",
    description:
      "A sleepiness check using common Epworth-style daily situations to estimate the chance of dozing during routine activities.",
    sourceNote:
      "The provided PDF notes that a total score of 10 or greater raises concern and may need sleep or medical evaluation.",
    maxScore: 24,
    options: [
      { label: "0 - Would never doze", value: 0 },
      { label: "1 - Slight chance", value: 1 },
      { label: "2 - Moderate chance", value: 2 },
      { label: "3 - High chance", value: 3 },
    ],
    relatedConditionSlug: "insomnia",
    seoDescription:
      "Free daytime sleepiness self-screening based on the Epworth Sleepiness Scale structure. Check whether excessive daytime sleepiness may need medical or psychiatric evaluation.",
    keywords: [
      "excessive daytime sleepiness test",
      "Epworth sleepiness scale Nepal",
      "am I too sleepy",
      "sleep screening Kathmandu",
    ],
    items: [
      { id: "reading", label: "Sitting and reading" },
      { id: "tv", label: "Watching TV" },
      { id: "public_place", label: "Sitting inactive in a public place" },
      { id: "passenger", label: "Passenger in a car for an hour or more" },
      { id: "lying_down", label: "Lying down to rest when possible" },
      { id: "talking", label: "Sitting and talking to someone" },
      { id: "after_meal", label: "Sitting quietly after a meal without alcohol" },
      { id: "traffic", label: "In a car while stopped briefly in traffic" },
    ],
    interpretations: [
      {
        min: 0,
        max: 9,
        label: "Lower daytime sleepiness score",
        guidance:
          "If sleepiness still affects driving, work, study or mood, discuss sleep quality and mental health with a clinician.",
      },
      {
        min: 10,
        max: 24,
        label: "Raised concern for excessive daytime sleepiness",
        guidance:
          "Consider sleep hygiene review and medical or psychiatric assessment to look for sleep deprivation, insomnia, depression, medication effects or sleep disorders.",
      },
    ],
  },
  {
    id: "anxiety",
    title: "Anxiety Severity Screening",
    shortTitle: "Anxiety",
    searchQuestion: "Do I have anxiety?",
    description:
      "A HAM-A style anxiety severity check across 14 clinician-rated symptom groups. Self-ratings can guide discussion, but HAM-A is best interpreted by a clinician.",
    sourceNote:
      "The provided HAM-A PDF describes a 0-56 total score range: less than 17 mild, 18-24 mild to moderate, and 25-30 moderate to severe.",
    maxScore: 56,
    options: [
      { label: "0 - Not present", value: 0 },
      { label: "1 - Mild", value: 1 },
      { label: "2 - Moderate", value: 2 },
      { label: "3 - Severe", value: 3 },
      { label: "4 - Very severe", value: 4 },
    ],
    relatedConditionSlug: "generalized-anxiety-disorder",
    seoDescription:
      "Wondering 'do I have anxiety?' Take a free, confidential self-rated anxiety severity screening covering worry, physical tension and autonomic symptoms. Get a score and guidance from a Kathmandu psychiatrist.",
    keywords: [
      "do I have anxiety",
      "anxiety test Nepal",
      "anxiety screening Kathmandu",
      "am I anxious",
      "GAD test online",
    ],
    items: [
      { id: "anxious_mood", label: "Anxious mood, worry or fearful anticipation" },
      { id: "tension", label: "Tension, trembling, restlessness or inability to relax" },
      { id: "fears", label: "Fears such as crowds, traffic, strangers or being alone" },
      { id: "insomnia", label: "Insomnia or unrefreshing sleep" },
      { id: "intellectual", label: "Poor concentration or memory difficulty" },
      { id: "depressed_mood", label: "Depressed mood or loss of interest" },
      { id: "muscular", label: "Muscle aches, stiffness, twitching or tension" },
      { id: "sensory", label: "Sensory symptoms such as tinnitus, blurred vision or weakness" },
      { id: "cardio", label: "Palpitations, chest discomfort, faint feeling or racing heart" },
      { id: "respiratory", label: "Chest tightness, choking feeling or shortness of breath" },
      { id: "gi", label: "Gastrointestinal discomfort, nausea, bowel changes or fullness" },
      { id: "gu", label: "Urinary, menstrual or sexual symptoms related to anxiety" },
      { id: "autonomic", label: "Dry mouth, sweating, flushing, dizziness or tension headache" },
      { id: "interview_behavior", label: "Observable restlessness, fidgeting or strained appearance" },
    ],
    interpretations: [
      {
        min: 0,
        max: 16,
        label: "Mild anxiety range",
        guidance:
          "Monitor triggers, sleep, caffeine, stress and functioning. Consultation is helpful if symptoms persist or interfere with life.",
      },
      {
        min: 17,
        max: 24,
        label: "Mild to moderate anxiety range",
        guidance:
          "Professional assessment can clarify anxiety type, panic symptoms, medical contributors and treatment options.",
      },
      {
        min: 25,
        max: 30,
        label: "Moderate to severe anxiety range",
        guidance:
          "Psychiatric consultation is recommended, especially if symptoms affect sleep, work, study, relationships or avoidance.",
      },
      {
        min: 31,
        max: 56,
        label: "High anxiety severity range",
        guidance:
          "Prompt clinical assessment is recommended. Severe physical symptoms should also be medically assessed.",
      },
    ],
  },
  {
    id: "social-anxiety",
    title: "Social Anxiety Screening",
    shortTitle: "Social Anxiety",
    searchQuestion: "Do I have social anxiety?",
    description:
      "A SPIN-style social anxiety check covering fear of judgment, avoidance of social situations and physical discomfort such as blushing or trembling around others.",
    sourceNote:
      "This public web version uses symptom domains from the widely studied Social Phobia Inventory (SPIN) rather than reproducing its proprietary item wording. SPIN scores of roughly 21 and above are commonly associated with clinically significant social anxiety.",
    maxScore: 48,
    options: frequencyOptions,
    relatedConditionSlug: "social-anxiety-disorder",
    seoDescription:
      "Wondering 'do I have social anxiety?' Take a free, confidential self-rated social anxiety screening covering fear of judgment, avoidance and physical symptoms in social situations.",
    keywords: [
      "do I have social anxiety",
      "social anxiety test Nepal",
      "social phobia screening",
      "fear of judgment test",
    ],
    items: [
      { id: "embarrassment", label: "Fear of embarrassing yourself in front of others" },
      { id: "parties", label: "Avoiding parties or social gatherings" },
      { id: "eating_public", label: "Fear of eating or drinking in front of others" },
      { id: "strangers", label: "Fear of talking to people you don't know well" },
      { id: "center_of_attention", label: "Fear of being the center of attention" },
      { id: "public_speaking", label: "Fear of public speaking or performing" },
      { id: "starting_conversation", label: "Avoiding starting conversations" },
      { id: "being_watched", label: "Fear of being watched or judged while doing something" },
      { id: "physical_symptoms", label: "Blushing, sweating or trembling in social situations" },
      { id: "phone_calls", label: "Avoiding calling or messaging people you don't know well" },
      { id: "meetings", label: "Fear of meetings or structured social events" },
      { id: "criticism", label: "Avoiding situations where you might be criticized" },
    ],
    interpretations: [
      {
        min: 0,
        max: 11,
        label: "Minimal social anxiety",
        guidance:
          "Occasional social discomfort is common. Consultation is worth considering only if it starts limiting your activities.",
      },
      {
        min: 12,
        max: 19,
        label: "Mild social anxiety symptoms",
        guidance:
          "Monitor how much avoidance is affecting school, work or relationships. Early support can prevent it from growing.",
      },
      {
        min: 20,
        max: 27,
        label: "Moderate social anxiety symptoms",
        guidance:
          "A psychiatric consultation can clarify whether this reflects Social Anxiety Disorder and discuss CBT and treatment options.",
      },
      {
        min: 28,
        max: 48,
        label: "Significant social anxiety symptoms",
        guidance:
          "Professional assessment is recommended, especially if avoidance is affecting daily functioning, school, work or relationships.",
      },
    ],
  },
  {
    id: "ocd",
    title: "OCD Symptom Screening",
    shortTitle: "OCD",
    searchQuestion: "Do I have OCD?",
    description:
      "An OCI-R-style check across washing, checking, ordering, obsessing, hoarding and mental rituals — the core symptom domains of Obsessive-Compulsive Disorder.",
    sourceNote:
      "This public web version uses symptom domains from the widely studied Obsessive-Compulsive Inventory-Revised (OCI-R) rather than reproducing its proprietary item wording. OCI-R scores of roughly 21 and above are commonly used as a screening cutoff for probable OCD.",
    maxScore: 48,
    options: frequencyOptions,
    relatedConditionSlug: "ocd",
    seoDescription:
      "Wondering 'do I have OCD?' Take a free, confidential self-rated OCD screening covering washing, checking, ordering, intrusive thoughts and mental rituals.",
    keywords: [
      "do I have OCD",
      "OCD test Nepal",
      "OCD screening Kathmandu",
      "obsessive compulsive disorder quiz",
      "intrusive thoughts test",
    ],
    items: [
      { id: "washing", label: "Repeated washing or cleaning due to contamination worries" },
      { id: "checking", label: "Repeated checking, such as locks, switches or appliances" },
      { id: "ordering", label: "Needing things arranged in a particular order" },
      { id: "intrusive_thoughts", label: "Unwanted, intrusive thoughts that are hard to dismiss" },
      { id: "hoarding", label: "Difficulty discarding items even of little value" },
      { id: "repeating", label: "Repeating routine actions until it feels right" },
      { id: "mental_rituals", label: "Mental rituals to neutralize a bad or unwanted thought" },
      { id: "time_consuming", label: "Excessive time spent on cleaning, checking or ordering" },
      { id: "distress_interrupted", label: "Distress when a ritual or routine is interrupted" },
      { id: "avoidance", label: "Avoiding situations that trigger obsessive thoughts" },
      { id: "reassurance", label: "Seeking reassurance repeatedly about the same worry" },
      { id: "responsibility", label: "Feeling responsible for preventing harm through rituals" },
    ],
    interpretations: [
      {
        min: 0,
        max: 11,
        label: "Minimal obsessive-compulsive symptoms",
        guidance:
          "Occasional checking or orderliness preferences are common. Consider consultation only if it starts consuming significant time.",
      },
      {
        min: 12,
        max: 20,
        label: "Mild obsessive-compulsive symptoms",
        guidance:
          "Monitor whether rituals or intrusive thoughts are growing in frequency or time consumed.",
      },
      {
        min: 21,
        max: 28,
        label: "Moderate obsessive-compulsive symptoms",
        guidance:
          "A psychiatric consultation can clarify whether this reflects OCD and discuss Exposure and Response Prevention (ERP) and medication options.",
      },
      {
        min: 29,
        max: 48,
        label: "Significant obsessive-compulsive symptoms",
        guidance:
          "Professional assessment is recommended, especially if rituals are causing physical harm or preventing work, school or daily activities.",
      },
    ],
  },
  {
    id: "ptsd",
    title: "PTSD Symptom Screening",
    shortTitle: "PTSD",
    searchQuestion: "Do I have PTSD?",
    description:
      "A PCL-5-style check across intrusive memories, avoidance, negative changes in mood or thinking, and hyperarousal following a stressful or traumatic event.",
    sourceNote:
      "This is a simplified, public web adaptation inspired by the PTSD Checklist for DSM-5 (PCL-5) symptom domains, not the full 20-item instrument. It is a starting point for discussion, not a diagnostic tool.",
    maxScore: 48,
    options: frequencyOptions,
    relatedConditionSlug: "ptsd",
    seoDescription:
      "Wondering 'do I have PTSD?' Take a free, confidential self-rated screening for post-traumatic stress symptoms — intrusive memories, avoidance, negative mood changes and hyperarousal.",
    keywords: [
      "do I have PTSD",
      "PTSD test Nepal",
      "trauma screening Kathmandu",
      "post-traumatic stress test",
    ],
    items: [
      { id: "memories", label: "Repeated, disturbing memories of a stressful or traumatic event" },
      { id: "nightmares", label: "Nightmares related to the event" },
      { id: "flashbacks", label: "Feeling as if the event were happening again (flashbacks)" },
      { id: "distress_reminders", label: "Intense distress when reminded of the event" },
      { id: "avoiding_thoughts", label: "Avoiding thoughts or feelings related to the event" },
      { id: "avoiding_reminders", label: "Avoiding people, places or activities that are reminders" },
      { id: "negative_beliefs", label: "Persistent negative beliefs about yourself or the world since the event" },
      { id: "loss_of_interest", label: "Loss of interest in activities you used to enjoy" },
      { id: "detachment", label: "Feeling distant or cut off from other people" },
      { id: "irritability", label: "Irritability or angry outbursts" },
      { id: "hypervigilance", label: "Feeling constantly on guard or easily startled" },
      { id: "concentration_sleep", label: "Difficulty concentrating or sleeping since the event" },
    ],
    interpretations: [
      {
        min: 0,
        max: 11,
        label: "Minimal post-traumatic stress symptoms",
        guidance:
          "Some reaction after a difficult event is normal. Monitor whether symptoms persist beyond a few weeks.",
      },
      {
        min: 12,
        max: 19,
        label: "Mild post-traumatic stress symptoms",
        guidance:
          "If symptoms persist beyond a month or affect daily life, a psychiatric consultation can help.",
      },
      {
        min: 20,
        max: 27,
        label: "Moderate post-traumatic stress symptoms",
        guidance:
          "Professional assessment is recommended to discuss trauma-focused therapy and treatment options.",
      },
      {
        min: 28,
        max: 48,
        label: "Significant post-traumatic stress symptoms",
        guidance:
          "Prompt psychiatric assessment is recommended, especially with flashbacks, severe avoidance or safety concerns.",
      },
    ],
  },
  {
    id: "bipolar",
    title: "Bipolar Mood Screening",
    shortTitle: "Bipolar",
    searchQuestion: "Do I have bipolar disorder?",
    description:
      "An MDQ-style checklist of elevated-mood (hypomanic/manic) experiences — energy, sleep need, talkativeness, racing thoughts and risk-taking — to discuss alongside any depressive episodes.",
    sourceNote:
      "This public web version uses symptom domains from the widely used Mood Disorder Questionnaire (MDQ) rather than reproducing its proprietary item wording. Unlike the validated MDQ, it does not assess symptom co-occurrence or functional impact, both of which a clinician needs to consider — this checklist alone cannot diagnose bipolar disorder.",
    maxScore: 52,
    options: frequencyOptions,
    relatedConditionSlug: "bipolar-i-disorder",
    seoDescription:
      "Wondering 'do I have bipolar disorder?' Take a free, confidential self-rated screening for elevated mood (hypomania/mania) symptoms — energy, sleep, racing thoughts and risk-taking.",
    keywords: [
      "do I have bipolar disorder",
      "bipolar test Nepal",
      "mania screening",
      "hypomania test",
      "mood disorder questionnaire",
    ],
    items: [
      { id: "elevated_mood", label: "Feeling so good or hyper that others thought you weren't your normal self" },
      { id: "irritable", label: "So irritable you shouted at people or started fights" },
      { id: "confidence", label: "Much more self-confident than usual" },
      { id: "less_sleep", label: "Getting much less sleep than usual without feeling tired" },
      { id: "talkative", label: "Much more talkative than usual, or talking faster" },
      { id: "racing_thoughts", label: "Thoughts racing in your head" },
      { id: "distractible", label: "Easily distracted by things around you" },
      { id: "more_energy", label: "Much more energy than usual" },
      { id: "more_active", label: "Much more active or did many more things than usual" },
      { id: "more_social", label: "Much more social or outgoing than usual" },
      { id: "more_interested_risk", label: "Doing things that were unusual for you, or that others thought excessive or risky" },
      { id: "spending", label: "Spending money in a way that caused problems for you or your family" },
      { id: "sex_interest", label: "Much more interested in sex than usual" },
    ],
    interpretations: [
      {
        min: 0,
        max: 13,
        label: "Minimal elevated-mood symptoms",
        guidance:
          "Little indication of hypomanic or manic experiences. If mood is a concern, a general mood screening may be more relevant.",
      },
      {
        min: 14,
        max: 22,
        label: "Mild elevated-mood symptoms",
        guidance:
          "Note when these experiences happen, for how long, and whether they alternate with low mood, and discuss with a clinician.",
      },
      {
        min: 23,
        max: 31,
        label: "Moderate elevated-mood symptoms",
        guidance:
          "A psychiatric consultation can assess whether these experiences reflect hypomania or mania, and clarify diagnosis and treatment.",
      },
      {
        min: 32,
        max: 52,
        label: "Significant elevated-mood symptoms",
        guidance:
          "Prompt psychiatric assessment is recommended, especially if risky behavior, spending or safety concerns are involved.",
      },
    ],
  },
  {
    id: "adult-adhd",
    title: "Adult ADHD Screening",
    shortTitle: "Adult ADHD",
    searchQuestion: "Do I have ADHD?",
    description:
      "An ASRS-style check across inattention and hyperactivity-impulsivity symptoms in daily adult life — organization, follow-through, restlessness and impulsivity.",
    sourceNote:
      "This public web version uses symptom domains from the WHO Adult ADHD Self-Report Scale (ASRS-v1.1) rather than reproducing its exact item wording. Adult ADHD screening is most informative alongside a childhood symptom history.",
    maxScore: 48,
    options: frequencyOptions,
    relatedConditionSlug: "adhd",
    seoDescription:
      "Wondering 'do I have ADHD?' Take a free, confidential self-rated adult ADHD screening covering inattention, disorganization, restlessness and impulsivity.",
    keywords: [
      "do I have ADHD",
      "adult ADHD test Nepal",
      "ADHD screening Kathmandu",
      "ADHD self-assessment",
    ],
    items: [
      { id: "final_details", label: "Trouble wrapping up the final details of a project" },
      { id: "getting_organized", label: "Difficulty getting things in order for a task" },
      { id: "remembering", label: "Problems remembering appointments or obligations" },
      { id: "avoiding_thought_tasks", label: "Avoiding or delaying tasks that require a lot of thought" },
      { id: "fidgeting", label: "Fidgeting or squirming when sitting for a long time" },
      { id: "driven", label: "Feeling overly active, as if driven by a motor" },
      { id: "careless_mistakes", label: "Careless mistakes on a boring or difficult task" },
      { id: "keeping_attention", label: "Difficulty keeping attention on tasks or activities" },
      { id: "listening", label: "Trouble listening closely when spoken to directly" },
      { id: "losing_things", label: "Losing or misplacing things needed for tasks" },
      { id: "distracted", label: "Easily distracted by activity or noise around you" },
      { id: "interrupting", label: "Interrupting others or blurting out answers" },
    ],
    interpretations: [
      {
        min: 0,
        max: 11,
        label: "Minimal ADHD-type symptoms",
        guidance:
          "Little indication of significant attention or hyperactivity symptoms in daily life.",
      },
      {
        min: 12,
        max: 19,
        label: "Mild ADHD-type symptoms",
        guidance:
          "Monitor how much these patterns affect work, study or relationships over time.",
      },
      {
        min: 20,
        max: 27,
        label: "Moderate ADHD-type symptoms",
        guidance:
          "A psychiatric consultation can review symptom history since childhood and discuss assessment and treatment options.",
      },
      {
        min: 28,
        max: 48,
        label: "Significant ADHD-type symptoms",
        guidance:
          "Professional assessment is recommended, especially if these patterns are significantly affecting work, study or relationships.",
      },
    ],
  },
  {
    id: "alcohol-use",
    title: "Alcohol Use Screening",
    shortTitle: "Alcohol Use",
    searchQuestion: "Do I have a drinking problem?",
    description:
      "An AUDIT-style check covering drinking frequency and quantity, signs of dependence, and alcohol-related harm — used worldwide as a first-step alcohol use screening tool.",
    sourceNote:
      "This public web version follows the structure and interpretation zones of the WHO Alcohol Use Disorders Identification Test (AUDIT), adapted into original wording rather than reproducing the official item text.",
    maxScore: 40,
    options: frequencyOptions,
    relatedConditionSlug: "alcohol-use-disorder",
    seoDescription:
      "Wondering 'do I have a drinking problem?' Take a free, confidential AUDIT-style alcohol use self-screening covering drinking patterns, dependence signs and alcohol-related harm.",
    keywords: [
      "do I have a drinking problem",
      "alcohol use test Nepal",
      "AUDIT screening Kathmandu",
      "am I an alcoholic quiz",
    ],
    items: [
      { id: "frequency", label: "How often you have a drink containing alcohol" },
      { id: "quantity", label: "How many drinks you typically have on a day you're drinking" },
      { id: "heavy_episodes", label: "How often you have six or more drinks on one occasion" },
      { id: "unable_to_stop", label: "Being unable to stop drinking once you started" },
      { id: "failed_expectations", label: "Failing to do what was normally expected of you because of drinking" },
      { id: "morning_drinking", label: "Needing a drink in the morning to get going after heavy drinking" },
      { id: "guilt", label: "Feeling guilt or remorse after drinking" },
      { id: "blackouts", label: "Being unable to remember what happened the night before due to drinking" },
      { id: "injury", label: "Injury to yourself or someone else because of your drinking" },
      { id: "others_concerned", label: "A relative, friend or doctor expressing concern about your drinking" },
    ],
    interpretations: [
      {
        min: 0,
        max: 7,
        label: "Lower-risk drinking pattern",
        guidance:
          "Continue to monitor your drinking pattern, especially if life circumstances or stress change.",
      },
      {
        min: 8,
        max: 15,
        label: "Increasing / hazardous risk",
        guidance:
          "This pattern is associated with increasing health risk. A conversation with a clinician about cutting down can help.",
      },
      {
        min: 16,
        max: 19,
        label: "Higher risk, possible harmful use",
        guidance:
          "This pattern suggests possible harmful alcohol use. A psychiatric consultation can assess for Alcohol Use Disorder and discuss support options.",
      },
      {
        min: 20,
        max: 40,
        label: "Possible alcohol dependence",
        guidance:
          "This pattern suggests possible alcohol dependence. Professional assessment is recommended, since stopping abruptly after heavy regular use can be medically risky and may need supervised care.",
      },
    ],
  },
  {
    id: "insomnia",
    title: "Insomnia Severity Screening",
    shortTitle: "Insomnia",
    searchQuestion: "Do I have insomnia?",
    description:
      "An ISI-style check covering difficulty falling asleep, staying asleep, waking too early, and how much sleep problems affect your daytime life and worry.",
    sourceNote:
      "This public web version closely follows the structure of the widely used Insomnia Severity Index (ISI), adapted into original wording. Its scoring range (0-28) mirrors the ISI's published severity bands.",
    maxScore: 28,
    options: [
      { label: "0 - None", value: 0 },
      { label: "1 - Mild", value: 1 },
      { label: "2 - Moderate", value: 2 },
      { label: "3 - Severe", value: 3 },
      { label: "4 - Very severe", value: 4 },
    ],
    relatedConditionSlug: "insomnia",
    seoDescription:
      "Wondering 'do I have insomnia?' Take a free, confidential Insomnia Severity Index-style self-screening covering sleep onset, sleep maintenance, and daytime impact.",
    keywords: [
      "do I have insomnia",
      "insomnia test Nepal",
      "insomnia severity index online",
      "sleep problem screening Kathmandu",
    ],
    items: [
      { id: "onset", label: "Difficulty falling asleep" },
      { id: "maintenance", label: "Difficulty staying asleep during the night" },
      { id: "early_waking", label: "Problems waking up too early and not returning to sleep" },
      { id: "satisfaction", label: "Dissatisfaction with your current sleep pattern" },
      { id: "noticeable", label: "How noticeable your sleep problem is to others, in terms of impairing your quality of life" },
      { id: "worry", label: "How worried or distressed you are about your current sleep problem" },
      { id: "interference", label: "How much your sleep problem interferes with daytime functioning — fatigue, mood, concentration" },
    ],
    interpretations: [
      {
        min: 0,
        max: 7,
        label: "No clinically significant insomnia",
        guidance:
          "Your sleep pattern doesn't suggest significant insomnia. Maintain good sleep hygiene proactively.",
      },
      {
        min: 8,
        max: 14,
        label: "Subthreshold insomnia",
        guidance:
          "Sleep hygiene changes can help. If it persists 3 or more months, a psychiatric consultation about CBT-I can help.",
      },
      {
        min: 15,
        max: 21,
        label: "Moderate clinical insomnia",
        guidance:
          "A psychiatric consultation is recommended to discuss Cognitive Behavioral Therapy for Insomnia (CBT-I) and other treatment options.",
      },
      {
        min: 22,
        max: 28,
        label: "Severe clinical insomnia",
        guidance:
          "Professional assessment is recommended, since severe insomnia significantly affects health, mood and safety (e.g. driving).",
      },
    ],
  },
  {
    id: "panic-disorder",
    title: "Panic Disorder Screening",
    shortTitle: "Panic Disorder",
    searchQuestion: "Do I have panic disorder?",
    description:
      "A PDSS-style check covering panic attack frequency, distress, anticipatory worry about future attacks, and avoidance — the core features of Panic Disorder.",
    sourceNote:
      "This public web version uses symptom domains from the Panic Disorder Severity Scale (PDSS) rather than reproducing its proprietary item wording.",
    maxScore: 28,
    options: [
      { label: "0 - None", value: 0 },
      { label: "1 - Mild", value: 1 },
      { label: "2 - Moderate", value: 2 },
      { label: "3 - Severe", value: 3 },
      { label: "4 - Extreme", value: 4 },
    ],
    relatedConditionSlug: "panic-disorder",
    seoDescription:
      "Wondering 'do I have panic disorder?' Take a free, confidential self-rated screening for panic attack frequency, anticipatory anxiety and avoidance.",
    keywords: [
      "do I have panic disorder",
      "panic attack test Nepal",
      "panic disorder screening Kathmandu",
      "am I having panic attacks",
    ],
    items: [
      { id: "frequency", label: "How often you have panic attacks" },
      { id: "distress_during", label: "How distressing your panic attacks are while they're happening" },
      { id: "anticipatory_worry", label: "Worry about having another panic attack" },
      { id: "place_avoidance", label: "Avoiding places or situations for fear of a panic attack" },
      { id: "sensation_avoidance", label: "Avoiding activities like exercise or caffeine for fear of triggering symptoms" },
      { id: "work_interference", label: "How much panic symptoms interfere with work or study" },
      { id: "social_interference", label: "How much panic symptoms interfere with social life or relationships" },
    ],
    interpretations: [
      {
        min: 0,
        max: 7,
        label: "Minimal panic symptoms",
        guidance:
          "Little indication of a panic disorder pattern. Isolated panic attacks can still be discussed with a clinician if they recur.",
      },
      {
        min: 8,
        max: 13,
        label: "Mild panic symptoms",
        guidance:
          "Monitor frequency and any growing avoidance of places or situations.",
      },
      {
        min: 14,
        max: 19,
        label: "Moderate panic symptoms",
        guidance:
          "A psychiatric consultation can clarify whether this reflects Panic Disorder and discuss CBT and treatment options.",
      },
      {
        min: 20,
        max: 28,
        label: "Significant panic symptoms",
        guidance:
          "Professional assessment is recommended, especially if avoidance is significantly restricting your daily life.",
      },
    ],
  },
  {
    id: "eating-disorder",
    title: "Eating Disorder Screening",
    shortTitle: "Eating Disorder",
    searchQuestion: "Do I have an eating disorder?",
    description:
      "A short 5-question SCOFF-style screen covering control over eating, weight loss, body image and how much food dominates your thinking.",
    sourceNote:
      "This public web version follows the structure of the widely used SCOFF questionnaire. In the original validated tool, 2 or more 'yes' answers suggest a possible eating disorder and warrant further assessment.",
    maxScore: 5,
    options: yesNoOptions,
    relatedConditionSlug: "anorexia-nervosa",
    seoDescription:
      "Wondering 'do I have an eating disorder?' Take the free, confidential 5-question SCOFF-style eating disorder self-screening used in clinical settings worldwide.",
    keywords: [
      "do I have an eating disorder",
      "SCOFF questionnaire online",
      "eating disorder test Nepal",
      "eating disorder screening Kathmandu",
    ],
    items: [
      { id: "sick", label: "Do you make yourself sick because you feel uncomfortably full?" },
      { id: "control", label: "Do you worry you have lost control over how much you eat?" },
      { id: "weight_loss", label: "Have you recently lost more than about 6 kg in a 3-month period?" },
      { id: "fat_perception", label: "Do you believe yourself to be fat when others say you are too thin?" },
      { id: "food_dominates", label: "Would you say food dominates your life?" },
    ],
    interpretations: [
      {
        min: 0,
        max: 1,
        label: "Lower likelihood of an eating disorder",
        guidance:
          "Continue to monitor your relationship with food and body image, especially during stressful periods.",
      },
      {
        min: 2,
        max: 5,
        label: "Possible eating disorder — worth a professional assessment",
        guidance:
          "Two or more 'yes' answers on this screen warrant a psychiatric or medical assessment for anorexia, bulimia or another eating disorder.",
      },
    ],
  },
  {
    id: "postpartum-depression",
    title: "Postpartum Depression Screening",
    shortTitle: "Postpartum Depression",
    searchQuestion: "Do I have postpartum depression?",
    description:
      "An EPDS-style check for mood, anxiety and enjoyment during pregnancy or the months after childbirth, including a safety item on thoughts of self-harm.",
    sourceNote:
      "This public web version uses symptom domains from the widely used Edinburgh Postnatal Depression Scale (EPDS) in original wording, scored in a consistent symptom direction rather than the original's mixed reverse-scoring. EPDS scores of roughly 13 and above are commonly associated with probable depression.",
    maxScore: 30,
    options: [
      { label: "0 - Not at all", value: 0 },
      { label: "1 - Sometimes", value: 1 },
      { label: "2 - Often", value: 2 },
      { label: "3 - Most of the time", value: 3 },
    ],
    relatedConditionSlug: "postpartum-depression",
    seoDescription:
      "Wondering 'do I have postpartum depression?' Take a free, confidential EPDS-style self-screening for mood and anxiety during pregnancy or after childbirth.",
    keywords: [
      "do I have postpartum depression",
      "postnatal depression test Nepal",
      "EPDS screening online",
      "baby blues or depression test",
    ],
    items: [
      { id: "enjoyment", label: "Difficulty seeing the funny side of things or laughing like usual" },
      { id: "looking_forward", label: "Reduced enjoyment or looking forward to things" },
      { id: "self_blame", label: "Blaming yourself unnecessarily when things go wrong" },
      { id: "anxious", label: "Feeling anxious or worried without a clear reason" },
      { id: "scared", label: "Feeling scared or panicky without a clear reason" },
      { id: "overwhelmed", label: "Feeling overwhelmed, like things are getting on top of you" },
      { id: "sleep_unhappy", label: "Difficulty sleeping because of feeling unhappy" },
      { id: "sad", label: "Feeling sad or miserable" },
      { id: "crying", label: "Crying more than usual because of feeling unhappy" },
      {
        id: "self_harm",
        label: "Thoughts of harming yourself",
        helper:
          "Any score above 0 needs urgent discussion with a trusted person or clinician. If there is immediate danger, seek emergency help now.",
        flagsSelfHarm: true,
      },
    ],
    interpretations: [
      {
        min: 0,
        max: 9,
        label: "Lower likelihood of postpartum depression",
        guidance:
          "Continue to monitor your mood, sleep and support during pregnancy or after childbirth.",
      },
      {
        min: 10,
        max: 12,
        label: "Possible mild symptoms",
        guidance:
          "Consider discussing how you've been feeling with your doctor or a psychiatrist at your next check-up.",
      },
      {
        min: 13,
        max: 19,
        label: "Probable postpartum depression",
        guidance:
          "Professional assessment is recommended. Postpartum depression is treatable, and support is available for both you and your baby.",
      },
      {
        min: 20,
        max: 30,
        label: "Significant symptoms",
        guidance:
          "Prompt psychiatric assessment is recommended. If there are thoughts of harming yourself or your baby, seek emergency help immediately.",
      },
    ],
  },
];

export function getScreeningTool(id: string) {
  return screeningTools.find((tool) => tool.id === id);
}
