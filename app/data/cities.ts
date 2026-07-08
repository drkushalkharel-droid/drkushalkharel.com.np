export type CityMentalHealthTopic = {
  name: string;
  description: string;
};

export type CityGuide = {
  city: string;
  slug: string;
  province: string;
  headline: string;
  intro: string;
  searchTerms: string[];
  commonConcerns: CityMentalHealthTopic[];
  localContext: string;
  // Only populated for the city with an actual in-person clinic (Kathmandu).
  // Leave undefined for online-consultation-only cities.
  clinicLocation?: {
    streetAddress: string;
    landmark: string;
    postalCode: string;
    parkingInfo: string;
    directionsUrl: string;
  };
};

const sharedConcerns: CityMentalHealthTopic[] = [
  {
    name: "Anxiety, panic attacks and stress",
    description:
      "Persistent worry, palpitations, fear of losing control, avoidance and stress-related sleep problems are common reasons to seek psychiatric care.",
  },
  {
    name: "Depression and mood changes",
    description:
      "Low mood, loss of interest, fatigue, hopelessness, irritability and suicidal thoughts need timely assessment and support.",
  },
  {
    name: "Alcohol, nicotine and substance use",
    description:
      "Problem drinking, tobacco dependence, cannabis or other substance use can affect work, study, family life and physical health.",
  },
  {
    name: "Sleep and concentration problems",
    description:
      "Insomnia, poor sleep routine, exam stress, attention problems and burnout often overlap with anxiety, depression or ADHD.",
  },
];

export const cityGuides: CityGuide[] = [
  {
    city: "Kathmandu",
    slug: "kathmandu",
    province: "Bagmati Province",
    headline: "Psychiatrist in Kathmandu for anxiety, depression and addiction care",
    intro:
      "Kathmandu patients often look for confidential psychiatric help close to work, college and family responsibilities. Dr. Kushal Kharel provides in-person psychiatric consultation in Kathmandu and online follow-up when appropriate.",
    searchTerms: [
      "best psychiatrist in Kathmandu",
      "top psychiatrist in Kathmandu",
      "anxiety doctor Kathmandu",
      "depression treatment Kathmandu",
    ],
    commonConcerns: sharedConcerns,
    localContext:
      "Busy urban life, migration for study or work, traffic stress, academic pressure and changing family support systems can all affect mental health in Kathmandu.",
    clinicLocation: {
      streetAddress: "Kalanki-14, Near Malpot Road",
      landmark: "Near Kalanki Bhatbhateni Supermarket, Kalanki",
      postalCode: "44600",
      parkingInfo: "Roadside parking available near the clinic.",
      directionsUrl: "https://maps.app.goo.gl/2t5B2EqgDKYMRLE48",
    },
  },
  {
    city: "Chitwan",
    slug: "chitwan",
    province: "Bagmati Province",
    headline: "Psychiatrist for Chitwan patients through online consultation",
    intro:
      "People in Chitwan may need psychiatric advice for anxiety, depression, addiction, sleep problems or family stress. Dr. Kushal Kharel can be contacted for guidance and online psychiatric consultation from Chitwan.",
    searchTerms: [
      "best psychiatrist in Chitwan",
      "psychiatrist near Chitwan",
      "mental health doctor Chitwan",
      "online psychiatrist Chitwan",
    ],
    commonConcerns: sharedConcerns,
    localContext:
      "Students, working adults, business owners and families in Chitwan may face stress from education, employment, caregiving, alcohol use and chronic health concerns.",
  },
  {
    city: "Biratnagar",
    slug: "biratnagar",
    province: "Koshi Province",
    headline: "Psychiatrist for Biratnagar patients needing mental health support",
    intro:
      "If you are searching for a psychiatrist in Biratnagar or nearby areas, Dr. Kushal Kharel provides evidence-based psychiatric guidance and online consultation for common mental health concerns.",
    searchTerms: [
      "best psychiatrist in Biratnagar",
      "psychiatrist Biratnagar",
      "anxiety treatment Biratnagar",
      "depression doctor Biratnagar",
    ],
    commonConcerns: sharedConcerns,
    localContext:
      "Work stress, academic pressure, family conflict, substance use and untreated anxiety or depression can affect daily life for people in Biratnagar and nearby communities.",
  },
  {
    city: "Dhangadhi",
    slug: "dhangadhi",
    province: "Sudurpashchim Province",
    headline: "Psychiatrist for Dhangadhi and far-west Nepal mental health needs",
    intro:
      "For patients in Dhangadhi looking for psychiatric advice, online consultation can help with assessment, treatment planning and follow-up for anxiety, depression, addiction and sleep concerns.",
    searchTerms: [
      "best psychiatrist in Dhangadhi",
      "psychiatrist Dhangadhi",
      "mental health doctor Dhangadhi",
      "online psychiatrist Dhangadhi",
    ],
    commonConcerns: sharedConcerns,
    localContext:
      "People in Dhangadhi may delay psychiatric care because of distance, privacy concerns or limited specialist access. Online consultation can be a practical first step.",
  },
  {
    city: "Pokhara",
    slug: "pokhara",
    province: "Gandaki Province",
    headline: "Psychiatrist for Pokhara patients seeking confidential care",
    intro:
      "People searching for a psychiatrist in Pokhara can contact Dr. Kushal Kharel for mental health guidance, online psychiatric consultation and follow-up when clinically suitable.",
    searchTerms: [
      "best psychiatrist in Pokhara",
      "psychiatrist Pokhara",
      "anxiety doctor Pokhara",
      "depression treatment Pokhara",
    ],
    commonConcerns: sharedConcerns,
    localContext:
      "Tourism work, education, migration, family expectations and substance use can contribute to anxiety, depression, sleep difficulties and stress in Pokhara.",
  },
  {
    city: "Nepalgunj",
    slug: "nepalgunj",
    province: "Lumbini Province",
    headline: "Psychiatrist for Nepalgunj patients and nearby western Nepal",
    intro:
      "Patients in Nepalgunj and nearby areas can contact Dr. Kushal Kharel for psychiatric guidance and online consultation for anxiety, depression, addiction, sleep and family mental health concerns.",
    searchTerms: [
      "best psychiatrist in Nepalgunj",
      "psychiatrist Nepalgunj",
      "mental health doctor Nepalgunj",
      "online psychiatrist Nepalgunj",
    ],
    commonConcerns: sharedConcerns,
    localContext:
      "Heat, work pressure, cross-border mobility, family stress and limited specialist access may make early mental health support especially important in Nepalgunj.",
  },
];

export function getCityGuide(slug: string) {
  return cityGuides.find((guide) => guide.slug === slug);
}
