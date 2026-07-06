export type AbroadGuide = {
  country: string;
  slug: string;
  region: string;
  headline: string;
  intro: string;
  commonConcerns: string[];
  searchTerms: string[];
  practicalNote: string;
};

const commonDiasporaConcerns = [
  "Loneliness, homesickness and adjustment stress",
  "Anxiety, panic attacks and excessive worry",
  "Depression, low motivation and sleep disturbance",
  "Alcohol, nicotine or substance use problems",
  "Relationship stress, family conflict and academic or work pressure",
];

export const abroadGuides: AbroadGuide[] = [
  {
    country: "USA",
    slug: "usa",
    region: "North America",
    headline: "Mental health support for Nepalese in the USA",
    intro:
      "Nepalese students, workers and families in the USA may face loneliness, academic pressure, immigration stress, time-zone separation from family and difficulty finding culturally familiar psychiatric guidance.",
    commonConcerns: commonDiasporaConcerns,
    searchTerms: [
      "Nepali psychiatrist USA",
      "Nepalese mental health USA",
      "online psychiatrist for Nepali in USA",
    ],
    practicalNote:
      "Because licensing rules vary by country and state, online guidance can help with education, second opinion style discussion and planning appropriate local care when needed.",
  },
  {
    country: "UK",
    slug: "uk",
    region: "Europe",
    headline: "Mental health support for Nepalese in the UK",
    intro:
      "Nepalese in the UK may experience adjustment stress, winter-related low mood, academic pressure, work stress, isolation and worries about family back home.",
    commonConcerns: commonDiasporaConcerns,
    searchTerms: [
      "Nepali psychiatrist UK",
      "Nepalese mental health UK",
      "online psychiatrist for Nepali in UK",
    ],
    practicalNote:
      "If urgent risk, self-harm thoughts or severe symptoms are present, contact local UK emergency or crisis services immediately while arranging psychiatric follow-up.",
  },
  {
    country: "Australia",
    slug: "australia",
    region: "Oceania",
    headline: "Mental health support for Nepalese in Australia",
    intro:
      "Nepalese in Australia often balance study, work, finances, visa pressure, family expectations and isolation from familiar support systems.",
    commonConcerns: commonDiasporaConcerns,
    searchTerms: [
      "Nepali psychiatrist Australia",
      "Nepalese mental health Australia",
      "online psychiatrist for Nepali in Australia",
    ],
    practicalNote:
      "Online consultation can help clarify symptoms and next steps, especially when cultural language and family context are important to explain.",
  },
  {
    country: "Canada",
    slug: "canada",
    region: "North America",
    headline: "Mental health support for Nepalese in Canada",
    intro:
      "Nepalese in Canada may face winter mood changes, settlement stress, study pressure, job uncertainty, isolation and distance from family support.",
    commonConcerns: commonDiasporaConcerns,
    searchTerms: [
      "Nepali psychiatrist Canada",
      "Nepalese mental health Canada",
      "online psychiatrist for Nepali in Canada",
    ],
    practicalNote:
      "Persistent low mood, panic attacks, sleep disruption or substance use concerns should be discussed with a qualified mental health professional.",
  },
  {
    country: "Netherlands",
    slug: "netherlands",
    region: "Europe",
    headline: "Mental health support for Nepalese in the Netherlands",
    intro:
      "Nepalese in the Netherlands may experience cultural adjustment, academic demands, work stress, loneliness and difficulty discussing emotional concerns openly.",
    commonConcerns: commonDiasporaConcerns,
    searchTerms: [
      "Nepali psychiatrist Netherlands",
      "Nepalese mental health Netherlands",
      "online psychiatrist for Nepali in Netherlands",
    ],
    practicalNote:
      "A culturally informed psychiatric discussion can help decide whether symptoms need therapy, medication review, sleep care or local emergency support.",
  },
  {
    country: "Dubai",
    slug: "dubai",
    region: "UAE",
    headline: "Mental health support for Nepalese in Dubai",
    intro:
      "Nepalese workers and families in Dubai may face work stress, heat, shift schedules, debt pressure, loneliness and limited time for health appointments.",
    commonConcerns: commonDiasporaConcerns,
    searchTerms: [
      "Nepali psychiatrist Dubai",
      "Nepalese mental health Dubai",
      "online psychiatrist for Nepali in Dubai",
    ],
    practicalNote:
      "If symptoms are affecting sleep, safety, work attendance or substance use, early psychiatric guidance can prevent worsening.",
  },
  {
    country: "Qatar",
    slug: "qatar",
    region: "Middle East",
    headline: "Mental health support for Nepalese in Qatar",
    intro:
      "Nepalese in Qatar may struggle with work pressure, separation from family, financial responsibility, sleep disruption and stigma around mental health.",
    commonConcerns: commonDiasporaConcerns,
    searchTerms: [
      "Nepali psychiatrist Qatar",
      "Nepalese mental health Qatar",
      "online psychiatrist for Nepali in Qatar",
    ],
    practicalNote:
      "Mental health symptoms are treatable. Confidential guidance can help decide when specialist assessment or local care is needed.",
  },
  {
    country: "Japan",
    slug: "japan",
    region: "Asia",
    headline: "Mental health support for Nepalese in Japan",
    intro:
      "Nepalese in Japan may face language barriers, strict work or study routines, loneliness, sleep disturbance and pressure to support family financially.",
    commonConcerns: commonDiasporaConcerns,
    searchTerms: [
      "Nepali psychiatrist Japan",
      "Nepalese mental health Japan",
      "online psychiatrist for Nepali in Japan",
    ],
    practicalNote:
      "When language and cultural context make symptoms hard to explain locally, a Nepali psychiatrist can help organize the story and next steps.",
  },
  {
    country: "Korea",
    slug: "korea",
    region: "Asia",
    headline: "Mental health support for Nepalese in Korea",
    intro:
      "Nepalese in Korea may experience workplace stress, shift-work sleep problems, isolation, relationship strain and difficulty accessing familiar mental health support.",
    commonConcerns: commonDiasporaConcerns,
    searchTerms: [
      "Nepali psychiatrist Korea",
      "Nepalese mental health Korea",
      "online psychiatrist for Nepali in Korea",
    ],
    practicalNote:
      "Sleep problems, panic, anger, sadness or alcohol use can be early signs that professional support is needed.",
  },
  {
    country: "India",
    slug: "india",
    region: "South Asia",
    headline: "Mental health support for Nepalese in India",
    intro:
      "Nepalese students, workers and families in India may seek culturally familiar psychiatric guidance for stress, anxiety, depression, addiction or family concerns.",
    commonConcerns: commonDiasporaConcerns,
    searchTerms: [
      "Nepali psychiatrist India",
      "Nepalese mental health India",
      "online psychiatrist for Nepali in India",
    ],
    practicalNote:
      "Online contact can help clarify symptoms and guide whether local psychiatric care, therapy or follow-up with Dr. Kushal Kharel is appropriate.",
  },
  {
    country: "France",
    slug: "france",
    region: "Europe",
    headline: "Mental health support for Nepalese in France",
    intro:
      "Nepalese in France may face language barriers, loneliness, academic or work pressure, identity stress and difficulty discussing mental health in a new system.",
    commonConcerns: commonDiasporaConcerns,
    searchTerms: [
      "Nepali psychiatrist France",
      "Nepalese mental health France",
      "online psychiatrist for Nepali in France",
    ],
    practicalNote:
      "A culturally familiar consultation can help patients explain symptoms clearly and choose the right next step.",
  },
  {
    country: "Belgium",
    slug: "belgium",
    region: "Europe",
    headline: "Mental health support for Nepalese in Belgium",
    intro:
      "Nepalese in Belgium may experience adjustment stress, loneliness, sleep problems, work pressure, study stress and difficulty navigating mental health services.",
    commonConcerns: commonDiasporaConcerns,
    searchTerms: [
      "Nepali psychiatrist Belgium",
      "Nepalese mental health Belgium",
      "online psychiatrist for Nepali in Belgium",
    ],
    practicalNote:
      "Professional guidance is especially important if symptoms persist, affect work or study, or involve self-harm thoughts or substance use.",
  },
];

export function getAbroadGuide(slug: string) {
  return abroadGuides.find((guide) => guide.slug === slug);
}
