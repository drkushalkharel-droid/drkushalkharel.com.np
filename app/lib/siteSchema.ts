// The site's core entities (clinic, doctor, website) in schema.org JSON-LD.
//
// These are defined in full ONLY on the homepage and /about/ (see
// app/components/SiteEntitySchema.tsx). Every other page refers to them by @id
// through `doctorRef` / `clinicRef` / `websiteRef` instead of repeating the block,
// so there is one definition of each entity rather than 400 copies.
//
// Deliberately absent: AggregateRating / Review. Google treats a business's
// self-authored review markup on its own site as ineligible for rich results, and
// repeating it site-wide risks a manual action. Review counts can still appear as
// visible text (app/data/reviewStats.ts feeds those).

export const siteUrl = "https://drkushalkharel.com.np";
const doctorImage = "/images/doctor.png";

// Fragment ids are kept exactly as before so existing references keep resolving.
export const ids = {
  clinic: `${siteUrl}#clinic`,
  psychiatrist: `${siteUrl}#psychiatrist`,
  website: `${siteUrl}#website`,
} as const;

// A reference to the doctor entity. Carries a type and name so parsers that do
// not follow cross-page @id links still see who the author/reviewer is, but none of
// the full Physician block.
export const doctorRef = {
  "@type": "Person",
  "@id": ids.psychiatrist,
  name: "Dr. Kushal Kharel",
} as const;

export const clinicRef = { "@id": ids.clinic } as const;
export const websiteRef = { "@id": ids.website } as const;

const address = {
  "@type": "PostalAddress",
  streetAddress: "Kalanki-14, Near Malpot Road, Near Kalanki Bhatbhateni Supermarket",
  addressLocality: "Kathmandu",
  addressRegion: "Bagmati",
  postalCode: "44600",
  addressCountry: "NP",
} as const;

const geo = {
  "@type": "GeoCoordinates",
  latitude: 27.6914922,
  longitude: 85.2807309,
} as const;

const hasMap = "https://maps.app.goo.gl/2t5B2EqgDKYMRLE48";

const doctorDescription =
  "Dr. Kushal Kharel is a Consultant Psychiatrist based in Kalanki, Kathmandu. He provides evidence-based psychiatric assessment, diagnosis, and treatment for children, adolescents, adults, and older adults, including care for anxiety disorders, depression, mood disorders, psychotic disorders, and substance addiction. In addition to in-person consultations at the Kalanki clinic, Dr. Kharel offers telepsychiatry and online psychiatric consultation for patients across Nepal and Nepalese communities abroad. As an NMC-licensed Specialist Psychiatrist, he is committed to confidential, compassionate, and evidence-based mental health care.";

export function buildClinicJsonLd() {
  return {
    "@type": ["MedicalBusiness", "MedicalClinic"],
    "@id": ids.clinic,
    name: "Kathmandu Mental Health Clinic",
    alternateName: [
      "Dr. Kushal Kharel - Consultant Psychiatrist",
      "Dr Kushal Kharel Psychiatry Clinic",
    ],
    description: doctorDescription,
    url: siteUrl,
    telephone: "+9779861800547",
    email: "drkushalkharel@gmail.com",
    address,
    geo,
    hasMap,
    sameAs: [
      "https://facebook.com/cooshal.kharel",
      "https://www.instagram.com/cusalnova",
      "https://www.youtube.com/@dr.kushalkharelpsychiatrist",
      "https://www.twitter.com/Drkushalpsych",
      "https://www.tiktok.com/@drkushalkharel",
      "https://www.threads.net/@cusalnova",
      hasMap,
    ],
    medicalSpecialty: "Psychiatry",
    isAcceptingNewPatients: true,
    areaServed: ["Kathmandu", "Nepal"],
    availableService: [
      "Psychiatric Consultation",
      "Depression Treatment",
      "Anxiety Treatment",
      "OCD Treatment",
      "ADHD Treatment",
      "Bipolar Disorder Treatment",
      "Addiction Treatment",
      "Online Consultation",
      "Corporate Mental Health Screening",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Psychiatric Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Anxiety Disorder Treatment" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Depression Treatment" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "OCD Treatment" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "ADHD Management" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Addiction Treatment" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Online Telepsychiatry" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate Mental Health Screening & Stress Management Workshops" } },
      ],
    },
    image: `${siteUrl}${doctorImage}`,
    priceRange: "$$",
    paymentAccepted: "Card, bank transfer",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "22:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "16:00",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      telephone: "+9779861800547",
      email: "drkushalkharel@gmail.com",
    },
  };
}

// Typed as both Physician and Person: Physician carries the practice semantics
// (specialty, address, area served); Person is what makes author / reviewedBy
// references valid and what covers jobTitle, alumniOf, worksFor and hasCredential.
export function buildPhysicianJsonLd() {
  return {
    "@type": ["Physician", "Person"],
    "@id": ids.psychiatrist,
    name: "Dr. Kushal Kharel",
    jobTitle: "Consultant Psychiatrist",
    description: doctorDescription,
    url: siteUrl,
    image: `${siteUrl}${doctorImage}`,
    telephone: "+9779861800547",
    email: "drkushalkharel@gmail.com",
    medicalSpecialty: "Psychiatry",
    mainEntityOfPage: siteUrl,
    worksFor: [clinicRef, { "@type": "Organization", name: "TherapyMantra" }],
    address,
    geo,
    hasMap,
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "license",
        name: "Nepal Medical Council Registered Psychiatrist",
        identifier: "27199",
        recognizedBy: {
          "@type": "Organization",
          name: "Nepal Medical Council",
        },
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        name: "MD Psychiatry",
      },
    ],
    memberOf: [
      {
        "@type": "Organization",
        name: "Nepal Medical Association",
      },
      {
        "@type": "Organization",
        name: "Psychiatrists' Association of Nepal",
      },
    ],
    alumniOf: {
      "@type": "MedicalOrganization",
      name: "KIST Medical College Teaching Hospital",
    },
    areaServed: ["Kathmandu", "Nepal", "Online"],
    knowsLanguage: ["English", "Nepali"],
    knowsAbout: [
      "Anxiety disorders",
      "Depression",
      "OCD",
      "ADHD",
      "Bipolar disorder",
      "Schizophrenia",
      "Addiction psychiatry",
      "Telepsychiatry",
      "Corporate mental health screening",
      "Workplace stress management",
    ],
    sameAs: [
      "https://facebook.com/cooshal.kharel",
      "https://www.instagram.com/cusalnova",
      "https://www.youtube.com/@dr.kushalkharelpsychiatrist",
      "https://www.twitter.com/Drkushalpsych",
      "https://www.tiktok.com/@drkushalkharel",
      "https://www.threads.net/@cusalnova",
      "https://nagariknews.nagariknetwork.com/author/dr.kushal-kharel",
      "https://therapists.therapymantra.co/list/therapist/268690/dr-kushal-kharel",
      "https://www.upchaarnepal.com/find/doctors/CjxZEz8BmbNtVtVl3kz38wbCRAv1",
      "https://kathmandumentalhealth.com.np/doctors/dr-kushal-kharel/",
      "https://about.me/dr.kushalkharelpsychiatrist",
      "https://yandex.com/maps/org/dr_kushal_kharel/209638868435/reviews/",
      "https://www.quora.com/profile/Dr-Kushal-Kharel",
    ],
  };
}

export function buildWebSiteJsonLd() {
  return {
    "@type": "WebSite",
    "@id": ids.website,
    name: "Dr. Kushal Kharel Psychiatry",
    alternateName: "Dr. Kushal Kharel",
    url: siteUrl,
    inLanguage: ["en", "ne"],
    publisher: clinicRef,
  };
}

export type ArticleDates = { published: string; modified: string; reviewed?: string };

// The authorship and freshness fields for a medical article: who wrote it, who
// reviewed it, and when. `lastReviewed` falls back to the last-modified date, since
// the content is reviewed by the doctor whenever it is edited; supply `reviewed`
// in the date map if a review ever happens without an edit.
export function buildArticleProvenance(dates: ArticleDates) {
  return {
    author: doctorRef,
    reviewedBy: doctorRef,
    datePublished: dates.published,
    dateModified: dates.modified,
    lastReviewed: dates.reviewed ?? dates.modified,
  };
}
