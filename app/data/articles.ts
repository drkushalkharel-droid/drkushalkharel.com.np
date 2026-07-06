export type ArticleLink = {
  title: string;
  description: string;
  href: string;
  category: string;
  language: "English" | "Nepali" | "Bilingual";
  isExternal?: boolean;
};

export const internalArticles: ArticleLink[] = [
  {
    title: "Anxiety Disorders: Symptoms, Treatment and Recovery",
    description:
      "A bilingual guide for patients and families about anxiety symptoms, panic attacks, CBT, medication and when to consult a psychiatrist.",
    href: "/anxiety",
    category: "Anxiety",
    language: "Bilingual",
  },
];

// Add Dr. Kharel's published web article URLs here as they become available.
// They will automatically appear on /knowledge without changing the page design.
export const publishedArticles: ArticleLink[] = [];

export const plannedTopics: ArticleLink[] = [
  {
    title: "Depression Treatment in Nepal",
    description:
      "Symptoms of depression, warning signs, treatment options, therapy, medication and family support.",
    href: "/knowledge#request-article",
    category: "Depression",
    language: "Bilingual",
  },
  {
    title: "Panic Attack: What to Do During an Episode",
    description:
      "Simple guidance for panic symptoms, breathing, safety checks and when panic attacks need professional care.",
    href: "/anxiety#faq",
    category: "Anxiety",
    language: "English",
  },
  {
    title: "Addiction and De-addiction Care",
    description:
      "Understanding alcohol, nicotine and substance use disorders, relapse prevention and psychiatric support.",
    href: "/#services",
    category: "Addiction",
    language: "English",
  },
];
