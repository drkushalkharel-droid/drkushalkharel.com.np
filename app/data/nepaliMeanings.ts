// "<Term> Meaning in Nepali" text for the single-condition pages under /knowledge/.
// One entry per page. It drives the page title, the H1, the meta description and the
// bordered "Meaning in Nepali" box under the H1 (app/components/MeaningInNepali.tsx).
//   term        the English term
//   nepali      the Nepali term people use
//   definition  1-2 sentences in Nepali with the English term, taken from the page's own
//               first paragraph
//   gloss       short English summary used in the meta description
// Titles are full titles with no brand suffix and stay within 60 characters.

export type NepaliMeaning = {
  term: string;
  nepali: string;
  definition: string;
  gloss: string;
  title?: string;
  h1?: string;
};

export const nepaliMeanings: Record<string, NepaliMeaning> = {
  insomnia: {
    term: "Insomnia",
    nepali: "अनिद्रा",
    definition: "Insomnia को नेपाली अर्थ अनिद्रा हो, अर्थात् निद्रा नलाग्ने वा निद्रा नटिक्ने समस्या।",
    gloss: "the problem of not falling asleep or staying asleep",
  },
  schizophrenia: {
    term: "Schizophrenia",
    nepali: "स्किजोफ्रेनिया",
    definition: "Schizophrenia (स्किजोफ्रेनिया) एउटा गम्भीर मानसिक रोग हो, जसले सोचाइ, भावना र व्यवहारमा परिवर्तन ल्याउँछ र दैनिक तथा सामाजिक जीवनमा असर गर्छ।",
    gloss: "a serious mental illness that changes thinking, feelings and behaviour",
  },
  delirium: {
    term: "Delirium",
    nepali: "डेलिरियम",
    definition: "Delirium (डेलिरियम) भनेको अचानक सुरु हुने दिमागको सन्तुलन बिग्रिएको अवस्था हो, जसमा होस, ध्यान, सोच र सम्झने शक्तिमा परिवर्तन आउँछ।",
    gloss: "a sudden state of confusion with changes in alertness, attention and memory",
  },
  adhd: {
    term: "ADHD",
    nepali: "एडीएचडी",
    definition: "ADHD (एडीएचडी) भनेको ध्यान केन्द्रित गर्न गाह्रो हुने, अत्यधिक सक्रिय हुने र आवेगमा काम गर्ने विकासात्मक अवस्था हो।",
    gloss: "difficulty paying attention, overactivity and acting on impulse",
  },
  "adjustment-disorder": {
    term: "Adjustment Disorder",
    nepali: "एडजस्टमेन्ट डिसअर्डर",
    definition: "Adjustment Disorder (एडजस्टमेन्ट डिसअर्डर) भनेको क्षति, रोग, सम्बन्धको समस्या वा बसाइँसराइ जस्ता ठूला जीवन परिवर्तनपछि तीन महिनाभित्र देखिने अत्यधिक तनावको प्रतिक्रिया हो।",
    gloss: "a strong stress reaction to a major life change",
  },
  "alcohol-dependence-syndrome": {
    term: "Alcohol Dependence",
    nepali: "रक्सी निर्भरता",
    definition: "Alcohol Dependence Syndrome (रक्सी निर्भरता सिन्ड्रोम) भनेको रक्सीमा निर्भर हुने अवस्था हो, जसमा बढी मात्रा चाहिने र नखाँदा शारीरिक लक्षण देखिन्छन्।",
    gloss: "dependence on alcohol, with craving and withdrawal symptoms",
  },
  "autism-spectrum-disorder": {
    term: "Autism",
    nepali: "अटिजम",
    definition: "Autism Spectrum Disorder (अटिजम स्पेक्ट्रम डिसअर्डर) भनेको बाल्यकालमा सुरु हुने मस्तिष्कको विकाससम्बन्धी अवस्था हो, जसमा कुराकानी र सामाजिक सम्बन्ध बनाउन गाह्रो हुन्छ।",
    gloss: "a developmental condition that affects communication and social connection",
  },
  "bipolar-disorder": {
    term: "Bipolar Disorder",
    nepali: "बाइपोलर डिसअर्डर",
    definition: "Bipolar Disorder (बाइपोलर डिसअर्डर) भनेको मुड कहिले अत्यधिक उच्च (म्यानिया) र कहिले उदास (डिप्रेसन) हुने मानसिक रोग हो।",
    gloss: "a mood condition with episodes of high mood and depression",
  },
  dementia: {
    term: "Dementia",
    nepali: "डिमेन्सिया",
    definition: "Dementia (डिमेन्सिया) भनेको दिमागको काम गर्ने क्षमता बिस्तारै घट्दै जाने अवस्था हो, जसले सम्झने र सोच्ने शक्तिमा असर पार्छ।",
    gloss: "a gradual decline in memory and thinking",
  },
  "eating-disorder": {
    term: "Eating Disorder",
    nepali: "खाने विकार",
    definition: "Eating Disorder (खाने विकार) भनेको खाने व्यवहारमा निरन्तर गडबडी हुने अवस्था हो, जहाँ तौल र शरीरको आकारबारे अत्यधिक चिन्ता हुन्छ।",
    gloss: "lasting disturbance in eating, with intense concern about weight and body shape",
  },
  "elimination-disorder": {
    term: "Elimination Disorder",
    nepali: "एलिमिनेशन डिसअर्डर",
    definition: "Elimination Disorder (एलिमिनेशन डिसअर्डर) भनेको बाल्यकालमा अनुपयुक्त ठाउँमा पिसाब वा दिसा निस्कने अवस्था हो।",
    gloss: "repeated passing of urine or stool in unsuitable places in childhood",
  },
  "gender-dysphoria": {
    term: "Gender Dysphoria",
    nepali: "लिङ्ग डिस्फोरिया",
    definition: "Gender Dysphoria (लिङ्ग डिस्फोरिया) भनेको तोकिएको लिङ्ग र आफूले अनुभव गरेको लिङ्गबीच असंगति हुँदा हुने असहजता हो।",
    gloss: "distress when the assigned gender and the experienced gender do not match",
  },
  "grief-and-loss": {
    term: "Grief",
    nepali: "शोक",
    definition: "Grief (शोक) भनेको कसैको मृत्यु वा महत्त्वपूर्ण कुरा गुमाउँदा हुने स्वाभाविक भावनात्मक प्रतिक्रिया हो।",
    gloss: "the natural response to losing a person or something that mattered",
  },
  "intellectual-development-disorder": {
    term: "Intellectual Disability",
    nepali: "बौद्धिक असक्तता",
    definition: "Intellectual Disability (बौद्धिक असक्तता) भनेको सिक्ने क्षमता र दैनिक व्यावहारिक सीपमा सीमितता हुने विकासात्मक अवस्था हो।",
    gloss: "limits in learning and in everyday practical skills",
  },
  mania: {
    term: "Mania",
    nepali: "म्यानिया",
    definition: "Mania (म्यानिया) भनेको केही समयसम्म मुड अत्यधिक खुसी वा रिसाहा हुने, धेरै सक्रिय हुने र निद्रा कम चाहिने मानसिक अवस्था हो।",
    gloss: "a period of unusually high or irritable mood with high energy and little need for sleep",
  },
  "motor-disorder": {
    term: "Motor Disorder",
    nepali: "मोटर डिसअर्डर",
    definition: "Motor Disorder (मोटर डिसअर्डर) भनेको शरीरका चाल सुरु गर्न, सिक्न र नियन्त्रण गर्न गाह्रो हुने विकासात्मक अवस्था हो।",
    gloss: "difficulty starting, learning and controlling body movements",
  },
  "obsessive-compulsive-disorder": {
    term: "OCD",
    nepali: "ओसीडी",
    definition: "OCD (ओसीडी) भनेको अनचाहिँदो विचार बारम्बार आउने र चिन्ता घटाउन कुनै काम बारम्बार दोहोर्‍याउनुपर्ने मानसिक अवस्था हो।",
    gloss: "unwanted repeated thoughts and rituals done to reduce anxiety",
  },
  ptsd: {
    term: "PTSD",
    nepali: "पीटीएसडी",
    definition: "PTSD (पीटीएसडी, आघातपछिको तनाव) भनेको गम्भीर दर्दनाक घटनाको सामना गरेपछि देखिने मानसिक विकार हो।",
    gloss: "stress that follows a serious frightening event",
  },
  "restless-legs-syndrome": {
    term: "Restless Legs",
    nepali: "रेस्टलेस लेग्स",
    definition: "Restless Legs Syndrome (रेस्टलेस लेग सिन्ड्रोम) भनेको आरामको समयमा खुट्टामा अप्रिय संवेदना भई खुट्टा चलाउन मन लाग्ने अवस्था हो।",
    gloss: "unpleasant leg sensations at rest with an urge to move",
  },
  "substance-use-disorder": {
    term: "Substance Use Disorder",
    nepali: "दुर्व्यसन",
    definition: "Substance Use Disorder (लागूपदार्थ दुर्व्यसन) भनेको हानि भए पनि रक्सी वा लागूपदार्थ बारम्बार प्रयोग गर्ने र नियन्त्रण गर्न नसक्ने अवस्था हो।",
    gloss: "repeated use of alcohol or drugs despite harm",
  },
};

const nepaliLength = (text: string) => [...text].length;

export function meaningTitle(m: NepaliMeaning): string {
  if (m.title) return m.title;
  const full = `${m.term} Meaning in Nepali: ${m.nepali}, Symptoms & Treatment`;
  return nepaliLength(full) <= 60 ? full : `${m.term} Meaning in Nepali: ${m.nepali}`;
}

export function meaningHeading(m: NepaliMeaning): string {
  return m.h1 ?? `${m.term} Meaning in Nepali: ${m.nepali}, लक्षण र उपचार`;
}

export function meaningDescription(m: NepaliMeaning): string {
  const head = `${m.term} meaning in Nepali is ${m.nepali}, ${m.gloss}.`;
  const tails = [
    " Symptoms, causes, treatment and when to see a psychiatrist. Book online.",
    " Symptoms, causes and treatment. Book online.",
    " Book online.",
  ];
  const tail = tails.find((t) => nepaliLength(head + t) <= 155) ?? "";
  return head + tail;
}
