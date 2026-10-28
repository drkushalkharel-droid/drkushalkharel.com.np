// Verbatim 5-star reviews from the clinic's public Google Business Profile
// (Dr. Kushal Kharel Psychiatrist Clinic). Text is exactly as the reviewer wrote it;
// reviewers are shown as "Anonymous patient": names are deliberately NOT stored here.
// To add more, copy the reviewer's own words unchanged and keep the same shape.

export type GoogleReview = {
  text: string;
  topic?: string;
};

export const googleReviews: GoogleReview[] = [
  {
    topic: "In-person",
    text: "Dr.kushal kharel is very empathetic psychiatric doctor and I had good experience . His clinic has smooth appointments system and gives emergency appointments as well. Highly recommended.",
  },
  {
    topic: "Fear",
    text: "He understands the problem and helped me overcome my deepest fear and I feel much better than before it’s giving me more peace",
  },
  {
    topic: "Anxiety",
    text: "Expert in consultation for anxiety related issues. Doctor kushal listened well and was kind enough to explore all issues. Thank you. I recommend for psychiatrist In kathmandu.",
  },
  {
    topic: "In-person",
    text: "Dr. Kushal Kharel is an excellent doctor who listens patiently, explains everything clearly, and provides compassionate care. I felt comfortable and well-supported throughout my consultation. Highly recommended.",
  },
  {
    topic: "Anxiety, depression, sleep",
    text: "Best psychiatrist in Kathmandu with excellent skills on empathy and compassion. Recommended to people going through mental illness like anxiety, depression and sleep problems.",
  },
  {
    topic: "In-person",
    text: "Professional, caring, and a good listener. Really appreciated the support and guidance.",
  },
  {
    topic: "Online, anxiety, depression",
    text: "Best psychiatrist\nRecommended for online psychiatrist for consultation. Treatment for anxiety and depression in nepal and Kathmandu.",
  },
  {
    topic: "Online, anxiety",
    text: "Online consultation was helpful for anxiety issues. Thank you.",
  },
  {
    topic: "From abroad",
    text: "Best psychiatrist especially counslting from aborad. Thanks for telepsychiatry.",
  },
  {
    topic: "Relative abroad",
    text: "really helpful for my relative who received online consultation for psychiatry illness from abroad\nBest psychiatric doctor in kathmandu",
  },
];
