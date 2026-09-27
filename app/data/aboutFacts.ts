// Facts for the About page that only Dr. Kharel can supply.
//
// Each list is empty until filled in, and the About page shows a section ONLY when its
// list has entries, so nothing unverified is ever published. Nothing here is guessed.
//
// TODO(Dr. Kharel): fill in what applies, then commit. Give exact names and years.
// The credentials table on /about/ already covers MD Psychiatry (KIST Medical College
// Teaching Hospital), NMC registration #27199, NMA and PAN memberships.

export type AboutEducation = { qualification: string; institution: string; years?: string };
export type AboutAffiliation = { organisation: string; role: string; years?: string; url?: string };
export type AboutPublication = { title: string; venue: string; year: string; url?: string };
export type AboutMention = { outlet: string; title: string; year: string; url: string };

export const aboutFacts = {
  // TODO(Dr. Kharel): degrees, residency, fellowships and certifications not already in the credentials table (MBBS, training abroad, CBT/ERP/EMDR certificates, ...).
  education: [] as AboutEducation[],
  // TODO(Dr. Kharel): hospitals, clinics and programs where you practice, consult or teach, with your role.
  affiliations: [] as AboutAffiliation[],
  // TODO(Dr. Kharel): papers, conference presentations, posters, book chapters.
  publications: [] as AboutPublication[],
  // TODO(Dr. Kharel): interviews, op-eds, radio/TV or newspaper quotes (link to each).
  mediaMentions: [] as AboutMention[],
};
