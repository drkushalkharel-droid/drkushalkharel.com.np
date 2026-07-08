import type { Condition } from "../data/conditions";

// Extracts a trailing parenthetical from a title as an alternate name,
// e.g. "Body Dysmorphic Disorder (BDD)" -> "BDD". Used only when the
// title already carries the alternate name, so nothing is invented.
function extractAlternateName(title: string): string | undefined {
  const match = title.match(/\(([^)]+)\)\s*$/);
  return match ? match[1] : undefined;
}

export function buildMedicalConditionJsonLd(condition: Condition, pageUrl: string) {
  const alternateName = extractAlternateName(condition.title);

  return {
    "@type": "MedicalCondition",
    "@id": `${pageUrl}#condition`,
    name: condition.title,
    ...(alternateName ? { alternateName } : {}),
    description: condition.shortDescription,
    url: pageUrl,
    relevantSpecialty: "Psychiatry",
    signOrSymptom: condition.symptoms.map((name) => ({
      "@type": "MedicalSignOrSymptom",
      name,
    })),
    riskFactor: condition.riskFactors.map((name) => ({
      "@type": "MedicalRiskFactor",
      name,
    })),
    pathophysiology: condition.brainMechanisms,
    typicalTest: condition.investigations.map((name) => ({
      "@type": "MedicalTest",
      name,
    })),
    possibleTreatment: condition.psychotherapy.map((item) => ({
      "@type": "MedicalTherapy",
      name: item.name,
      description: item.note,
    })),
    drug: condition.medications.map((item) => ({
      "@type": "Drug",
      name: item.name,
      description: item.note,
    })),
    expectedPrognosis: condition.prognosis,
    primaryPrevention: condition.prevention.map((name) => ({
      "@type": "MedicalTherapy",
      name,
    })),
    differentialDiagnosis: condition.differentialDiagnosis.map((item) => ({
      "@type": "DDxElement",
      diagnosis: { "@type": "MedicalCondition", name: item.name },
      distinguishingSign: item.note,
    })),
  };
}

export function buildSpeakableSpec(cssSelectors: string[]) {
  return {
    "@type": "SpeakableSpecification",
    cssSelector: cssSelectors,
  };
}

export type HowToStep = { name: string; text: string };

export function buildHowToJsonLd(params: {
  id: string;
  name: string;
  description: string;
  totalTime?: string;
  steps: HowToStep[];
}) {
  return {
    "@type": "HowTo",
    "@id": params.id,
    name: params.name,
    description: params.description,
    ...(params.totalTime ? { totalTime: params.totalTime } : {}),
    step: params.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

// Trims to a target word count without cutting mid-sentence where possible,
// used only to shorten already-approved copy (never to generate new claims).
function truncateToWords(text: string, maxWords: number): string {
  const words = text.trim().split(/\s+/);
  if (words.length <= maxWords) return text.trim();
  return `${words.slice(0, maxWords).join(" ").replace(/[,;:]$/, "")}...`;
}

export function buildQuickFacts(condition: Condition) {
  return {
    quickAnswer: condition.shortDescription,
    extendedSummary: truncateToWords(condition.overview, 100),
    keySymptoms: condition.symptoms.slice(0, 4),
    keyRiskFactors: condition.riskFactors.slice(0, 3),
  };
}
