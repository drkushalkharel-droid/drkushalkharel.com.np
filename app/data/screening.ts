export type ScreeningOption = {
  label: string;
  value: number;
};

export type ScreeningItem = {
  id: string;
  label: string;
  helper?: string;
};

export type ScreeningTool = {
  id: "depression" | "sleepiness" | "anxiety";
  title: string;
  shortTitle: string;
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
};

const severityOptions: ScreeningOption[] = [
  { label: "0 - Not present", value: 0 },
  { label: "1 - Mild", value: 1 },
  { label: "2 - Moderate", value: 2 },
  { label: "3 - Severe", value: 3 },
];

export const screeningTools: ScreeningTool[] = [
  {
    id: "depression",
    title: "Depression Symptom Screening",
    shortTitle: "Depression",
    description:
      "A 21-domain depression symptom check based on common BDI-style areas such as mood, sleep, appetite, energy, concentration and self-critical thoughts.",
    sourceNote:
      "This public web version uses symptom domains and severity scoring rather than reproducing proprietary questionnaire wording.",
    maxScore: 63,
    options: severityOptions,
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
];

export function getScreeningTool(id: ScreeningTool["id"]) {
  return screeningTools.find((tool) => tool.id === id);
}
