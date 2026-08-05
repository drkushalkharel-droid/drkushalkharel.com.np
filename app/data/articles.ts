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
  {
    title: "Anxiety Treatment in Nepal: Symptoms, Panic Attacks & Help",
    description:
      "A practical guide to anxiety symptoms, panic attacks, CBT, medication and when to see a psychiatrist.",
    href: "/knowledge/anxiety-treatment-nepal",
    category: "Anxiety",
    language: "Bilingual",
  },
  {
    title: "Depression Treatment in Nepal: Symptoms, Help & Recovery",
    description:
      "A patient guide to depression symptoms, therapy, medication, online consultation and urgent warning signs.",
    href: "/knowledge/depression-treatment-nepal",
    category: "Depression",
    language: "Bilingual",
  },
];

// Add Dr. Kharel's published web article URLs here as they become available.
// They will automatically appear on /knowledge without changing the page design.
export const publishedArticles: ArticleLink[] = [
  {
    title: "Coping with Anxiety: 12 Evidence-Based Strategies",
    description: "Practical, evidence-based techniques to manage anxiety symptoms today and build long-term resilience.",
    href: "/knowledge/coping-with-anxiety",
    category: "Anxiety",
    language: "Bilingual",
  },
  {
    title: "Understanding and Managing Depression: Practical Steps That Help",
    description: "Compassionate guidance on spotting depression and practical steps to find relief and support.",
    href: "/knowledge/managing-depression",
    category: "Depression",
    language: "Bilingual",
  },
  {
    title: "Burnout at Work: How to Recognize It and Recover",
    description: "Learn how to spot workplace burnout early and proven steps to recover and prevent relapse.",
    href: "/knowledge/burnout-at-work",
    category: "Workplace",
    language: "Bilingual",
  },
  {
    title: "Sleep and Mental Health: Improve Your Mood with Better Sleep",
    description: "Discover how improving sleep can boost mood and practical steps to sleep better starting tonight.",
    href: "/knowledge/sleep-and-mental-health",
    category: "Sleep",
    language: "Bilingual",
  },
  {
    title: "Mindfulness & Meditation for Beginners: A Simple Guide",
    description: "Easy mindfulness practices for beginners to reduce stress and improve focus—no experience required.",
    href: "/knowledge/mindfulness-for-beginners",
    category: "Wellness",
    language: "Bilingual",
  },
  {
    title: "Teen Mental Health: How Parents Can Help",
    description: "Practical, compassionate guidance for parents supporting teen mental health and wellbeing.",
    href: "/knowledge/teen-mental-health-parents",
    category: "Parenting",
    language: "Bilingual",
  },
  {
    title: "Social Media and Mental Health: Protect Your Wellbeing",
    description: "How to use social media without it harming your mental health—practical tips and a 7-day detox plan.",
    href: "/knowledge/social-media-mental-health",
    category: "Digital Wellbeing",
    language: "Bilingual",
  },
  {
    title: "Building Resilience: Habits That Make You More Mentally Strong",
    description: "Evidence-based habits and a 30-day plan to strengthen resilience and bounce back from life’s challenges.",
    href: "/knowledge/building-resilience",
    category: "Resilience",
    language: "Bilingual",
  },
  {
    title: "Panic Attacks: What to Do When One Happens",
    description: "Clear, calming steps to manage a panic attack in the moment and reduce future risk.",
    href: "/knowledge/panic-attacks-what-to-do",
    category: "Anxiety",
    language: "Bilingual",
  },
  {
    title: "Therapy Types Explained: CBT, DBT, EMDR, and More",
    description: "A friendly guide to common therapy types, what they treat, and how to pick the right approach.",
    href: "/knowledge/therapy-types-explained",
    category: "Therapy",
    language: "Bilingual",
  },
  {
    title: "Mental Health Stigma: How to Recognize and Reduce It",
    description: "Practical steps individuals and organisations can take to reduce mental health stigma and encourage help-seeking.",
    href: "/knowledge/mental-health-stigma",
    category: "Public Health",
    language: "Bilingual",
  },
  {
    title: "Self-Care for Caregivers: Preventing Compassion Fatigue",
    description: "Essential self-care strategies for caregivers to prevent burnout and maintain wellbeing.",
    href: "/knowledge/self-care-caregivers",
    category: "Caregiving",
    language: "Bilingual",
  },
];

export const plannedTopics: ArticleLink[] = [
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
