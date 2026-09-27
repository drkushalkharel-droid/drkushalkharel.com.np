import type { Resource, ResourceCategory } from "../data/resources";

// Context for a printable resource page: who it is for, what is inside, how to use it
// and when to seek care. Built from the resource's own data (title, description,
// section headings, category), so it can only say what the resource itself contains.
// It is hidden when printing so the PDF stays exactly as written.
const NOUN: Record<ResourceCategory, string> = {
  "Patient Information Leaflet": "patient information leaflet",
  "Medication Guide": "medication guide",
  "Coping Tool": "coping tool",
  "Family & Caregiver Resource": "family and caregiver guide",
};

const HOW_TO_USE: Record<ResourceCategory, string> = {
  "Patient Information Leaflet":
    "Use it to understand the condition in plain language before or after an appointment. Sharing it with family can make it easier to talk about what is happening and how they can help.",
  "Medication Guide":
    "It gives general information only. Your own dose and plan are decided with your prescriber, so bring your questions to your next visit, and do not stop or change a medicine on your own.",
  "Coping Tool":
    "Try the techniques when you are calm as well as when you are struggling, so they are easier to use when you need them. They support treatment and do not replace it when symptoms are frequent, severe or getting in the way of daily life.",
  "Family & Caregiver Resource":
    "Share it with the people around you. Supporting someone with a mental health condition is easier when everyone understands what helps, and the people who care for others need looking after too.",
};

function listOf(items: string[]): string {
  if (items.length <= 1) return items.join("");
  return `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;
}

export default function ResourceAbout({ resource }: { resource: Resource }) {
  const noun = NOUN[resource.category];
  const headings = resource.sections.map((section) => section.heading.replace(/[:.]+$/, "").trim());

  return (
    <section aria-label={`About this ${noun}`} className="mt-8 rounded-lg border border-sage-200 bg-sage-50 p-6 print:hidden">
      <h2 className="text-lg font-bold text-sage-950">About this {noun}</h2>
      <p className="mt-3 leading-7 text-stone-700">
        {resource.title} is a free {noun} from Dr. Kushal Kharel, a consultant psychiatrist in Kathmandu, written for
        patients, families and caregivers. You can read it on this page, download it as a PDF, or print it.
      </p>
      <p className="mt-3 leading-7 text-stone-700">
        What is inside: {listOf(headings)}. {HOW_TO_USE[resource.category]}
      </p>
      <p className="mt-3 leading-7 text-stone-700">
        This material is educational and is not a diagnosis. If you are worried about your own symptoms or someone else&apos;s, you
        can book an in-person or online consultation with Dr. Kharel. If there is any risk to safety, go to the nearest
        hospital or call your local emergency number.
      </p>
    </section>
  );
}
