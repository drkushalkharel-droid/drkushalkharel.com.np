// Nepali words are plain everyday equivalents. TODO: Dr. Kharel to review the Nepali.
export type Feeling = { en: string; ne: string; closer: string[] };
export type CoreFeeling = {
  en: string;
  ne: string;
  color: string;
  note: string;
  noteNe: string;
  tools: { href: string; label: string }[];
  children: Feeling[];
};

const breathing = { href: "/calm-now/breathing-exercise/", label: "Breathing exercise" };
const grounding = { href: "/calm-now/grounding-5-4-3-2-1/", label: "5-4-3-2-1 grounding" };
const stop = { href: "/calm-now/stop-technique/", label: "STOP technique" };
const tipp = { href: "/calm-now/tipp-technique/", label: "TIPP technique" };

export const feelings: CoreFeeling[] = [
  {
    en: "Joy", ne: "खुशी", color: "#f2c94c",
    note: "Pleasant feelings are worth noticing. Take a moment to let this one register.",
    noteNe: "राम्रो भावनालाई पनि केही क्षण महसुस गर्नुहोस्।",
    tools: [],
    children: [
      { en: "Calm", ne: "शान्त", closer: ["relaxed", "peaceful", "safe"] },
      { en: "Hopeful", ne: "आशावान", closer: ["optimistic", "encouraged", "determined"] },
      { en: "Proud", ne: "गर्वित", closer: ["confident", "accomplished", "respected"] },
      { en: "Grateful", ne: "कृतज्ञ", closer: ["thankful", "appreciated", "content"] },
    ],
  },
  {
    en: "Sadness", ne: "उदासी", color: "#7fb0e0",
    note: "Sadness usually asks for gentleness and company. Reach out to someone you trust. If low mood has lasted two weeks or more, speak to a doctor.",
    noteNe: "उदासीमा आफूप्रति नरम हुनुहोस् र विश्वासिलो मान्छेसँग कुरा गर्नुहोस्। दुई हप्ता वा बढी रह्यो भने डाक्टरसँग भेट्नुहोस्।",
    tools: [grounding, breathing],
    children: [
      { en: "Lonely", ne: "एक्लो", closer: ["isolated", "abandoned", "left out"] },
      { en: "Hurt", ne: "चोट परेको", closer: ["disappointed", "rejected", "betrayed"] },
      { en: "Hopeless", ne: "निराश", closer: ["empty", "defeated", "powerless"] },
      { en: "Drained", ne: "थकित", closer: ["exhausted", "numb", "heavy"] },
    ],
  },
  {
    en: "Anger", ne: "रिस", color: "#ee8f86",
    note: "Anger is a signal, not a command. Give the body time to settle before you speak or act.",
    noteNe: "रिस एउटा सङ्केत हो। बोल्नु वा गर्नु अघि शरीरलाई शान्त हुन समय दिनुहोस्।",
    tools: [stop, tipp],
    children: [
      { en: "Frustrated", ne: "झिँजो लागेको", closer: ["stuck", "blocked", "annoyed"] },
      { en: "Irritated", ne: "चिडचिडा", closer: ["impatient", "bothered", "grumpy"] },
      { en: "Furious", ne: "अत्यन्त रिसाएको", closer: ["enraged", "hostile", "out of control"] },
      { en: "Resentful", ne: "मनमा रिस", closer: ["bitter", "jealous", "disrespected"] },
    ],
  },
  {
    en: "Fear", ne: "डर", color: "#b9a3dd",
    note: "Fear prepares the body to act, so the heart races and breathing gets fast. Slowing the breath tells the body it can ease off.",
    noteNe: "डरले शरीरलाई तयार बनाउँछ, त्यसैले मुटु ढुकढुक र सास छिटो हुन्छ। सास ढिलो गर्दा शरीर बिस्तारै शान्त हुन्छ।",
    tools: [breathing, grounding],
    children: [
      { en: "Anxious", ne: "चिन्तित", closer: ["worried", "nervous", "on edge"] },
      { en: "Panicked", ne: "आत्तिएको", closer: ["terrified", "frozen", "shaky"] },
      { en: "Insecure", ne: "असुरक्षित", closer: ["inadequate", "self-doubting", "exposed"] },
      { en: "Overwhelmed", ne: "बोझिल", closer: ["stressed", "pressured", "swamped"] },
    ],
  },
  {
    en: "Shame", ne: "लाज", color: "#d9a679",
    note: "Shame can make you want to hide. Speaking to someone kind and trustworthy usually eases it more than staying alone with it.",
    noteNe: "लाजले लुक्न मन लाग्छ। विश्वासिलो मान्छेसँग कुरा गर्दा प्रायः हल्का हुन्छ।",
    tools: [breathing, stop],
    children: [
      { en: "Guilty", ne: "दोषी महसुस", closer: ["remorseful", "responsible", "ashamed"] },
      { en: "Embarrassed", ne: "लज्जित", closer: ["humiliated", "awkward", "self-conscious"] },
      { en: "Regretful", ne: "पछुतो", closer: ["sorry", "apologetic", "wishing it were different"] },
      { en: "Inferior", ne: "होच्याएको", closer: ["inadequate", "small", "unworthy"] },
    ],
  },
  {
    en: "Surprise", ne: "आश्चर्य", color: "#8fd0bd",
    note: "A surprise can leave the body alert for a while. Slow breathing or grounding helps you find your footing.",
    noteNe: "अचानक भएको घटनाले शरीर केही बेर सतर्क रहन्छ। ढिलो सास वा ग्राउन्डिङले मद्दत गर्छ।",
    tools: [grounding, breathing],
    children: [
      { en: "Startled", ne: "झसङ्ग", closer: ["jumpy", "alarmed", "caught off guard"] },
      { en: "Confused", ne: "अलमल", closer: ["puzzled", "lost", "unsure"] },
      { en: "Amazed", ne: "छक्क", closer: ["curious", "awed", "excited"] },
      { en: "Shocked", ne: "स्तब्ध", closer: ["stunned", "dazed", "disbelieving"] },
    ],
  },
];
