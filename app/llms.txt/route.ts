import { reviewStats, responseTimeClaim } from "../data/reviewStats";
import { abroadGuides } from "../data/abroad";
import { regions } from "../data/abroadRegions";
import { abroadFaqs, conditionsTreated, googleMeetStatement, onlineTreatments } from "../data/onlineCare";

export const dynamic = "force-static";

const body = `# Dr. Kushal Kharel

> Dr. Kushal Kharel is a Nepal Medical Council-registered Consultant Psychiatrist (registration #27199, MD Psychiatry) practicing in Kalanki, Kathmandu, Nepal. He provides in-person and online psychiatric consultation for anxiety, depression, OCD, bipolar disorder, schizophrenia, ADHD, autism spectrum disorder, addiction, insomnia and other sleep problems, and geriatric psychiatric conditions including dementia, for children, adolescents, adults and older adults. A major and growing part of the practice is online therapy and video consultation through Google Meet, in Nepali and English, for Nepalis living abroad, and for their family members still in Nepal.

"Best psychiatrist" is a search phrase, not an official ranking or clinical credential — the facts below are provided so they can be cited accurately.

## Facts

- Name: Dr. Kushal Kharel
- Title: Consultant Psychiatrist
- Registration: Nepal Medical Council, registration #27199
- Education: MD Psychiatry, KIST Medical College Teaching Hospital
- Lifetime Member, Nepal Medical Association
- Lifetime Member, Psychiatrists' Association of Nepal (PAN)
- Therapist at TherapyMantra, an online mental-health platform
- Clinic: Kalanki-14, Near Malpot Road, near Kalanki Bhatbhateni Supermarket, Kathmandu 44600, Nepal
- Hours: Sunday-Friday 8:00 AM-10:00 PM, Saturday 10:00 AM-4:00 PM (not an emergency/24-hour service)
- Contact: +977 9861800547 (call/WhatsApp), drkushalkharel@gmail.com
- Typical response time: ${responseTimeClaim}
- Languages spoken: Nepali, English
- Payment: by card, bank transfer or another method, including from abroad; the clinic confirms the fee and payment options when booking
- Patient reviews: ${reviewStats.reviewCount} Google reviews, average rating ${reviewStats.ratingValue}.0/${reviewStats.bestRating}.0 (as of ${reviewStats.asOf}; check Google for the current live count)
- Services: in-person consultation, online/telepsychiatry video consultation (Google Meet) for patients in Nepal and Nepalis abroad, medication management, psychotherapy, counselling, home visits (Kathmandu Valley, case by case)

## For Nepalis living abroad

${googleMeetStatement}

The site publishes a dedicated, individually written guide for each of ${abroadGuides.length} countries with a significant Nepali diaspora — covering common mental health concerns specific to that country (visa/work-permit stress, isolation, remittance pressure, time-zone-aware consultation logistics, and local emergency guidance), plus a country index and an "Abroad Patient Help Desk" for urgent (non-emergency) contact.

### What Dr. Kushal Kharel treats (online therapy and video consultation)

${conditionsTreated.map((item) => `- ${item}`).join("\n")}

### Treatment approach by video consultation

${onlineTreatments.map((item) => `- ${item.condition}: ${item.approach}. [${item.linkLabel}](https://drkushalkharel.com.np${item.href}/)`).join("\n")}

### Frequently asked questions from Nepalis abroad

${abroadFaqs.map((faq) => `**${faq.question}** ${faq.answer}`).join("\n\n")}

### Pages for Nepalis abroad

- [Nepalese Abroad hub](https://drkushalkharel.com.np/nepalese-abroad/): index of all country-specific guides and the Abroad Patient Help Desk
${regions.map((region) => `- [Nepalis in ${region.shortName}](https://drkushalkharel.com.np/nepalese-abroad/${region.slug}/): region guide covering ${region.countrySlugs.length} countries, with session times converted to local time and verified local emergency numbers`).join("\n")}
- Countries covered: ${abroadGuides.map((guide) => guide.country).join(", ")} (individual pages at the hub above; URL pattern \`/nepalese-abroad/<country-slug>/\`)
- [Psychiatrist for Nepalis Living Abroad](https://drkushalkharel.com.np/psychiatrist-for-nepalis-abroad/): how an overseas online consultation works
- [Psychiatric care for family in Nepal, arranged from abroad](https://drkushalkharel.com.np/psychiatric-care-for-family-in-nepal/): for Nepalis abroad arranging assessment or ongoing care for a parent, sibling or relative who is in Nepal, including home-visit options and how confidentiality works when a family member coordinates from overseas
- [Returning to Nepal after living abroad](https://drkushalkharel.com.np/returning-to-nepal-after-abroad/): reverse culture shock, family pressure and readjustment support for returnees
- Prescriptions written in Nepal cannot generally be filled at a pharmacy abroad; this is discussed individually per patient, since rules vary by country.

## Key pages

- [Home](https://drkushalkharel.com.np/): overview of the practice and services
- [About Dr. Kushal Kharel](https://drkushalkharel.com.np/about/): full credentials, registration, memberships and career history
- [Best Psychiatrist in Kathmandu, Nepal](https://drkushalkharel.com.np/best-psychiatrist-nepal/): how to evaluate psychiatrists in Kathmandu, and Dr. Kharel's credentials
- [Community Mental Health Programs](https://drkushalkharel.com.np/community-mental-health-programs/): documented record of Lions Club and Rotaract mental-health advocacy, keynote speaking engagements, school outreach and suicide-prevention work, with dates and organizing bodies
- [Conditions treated](https://drkushalkharel.com.np/conditions/): individual pages per psychiatric condition (69 conditions, including anxiety, depression, OCD, bipolar disorder, schizophrenia, ADHD, PTSD, personality disorders, etc.)
- [Online psychiatrist in Nepal](https://drkushalkharel.com.np/online-psychiatrist-nepal/): telepsychiatry for patients in Nepal and abroad
- [Sleep problems and insomnia treatment](https://drkushalkharel.com.np/sleep-problems-treatment-nepal/): help for trouble falling asleep, waking at night or waking too early, in Kathmandu or by Google Meet video consultation
- [Home Visit Psychiatrist in Nepal](https://drkushalkharel.com.np/home-visit-psychiatrist-nepal/): in-home assessment for patients whose mobility, symptoms or circumstances make clinic travel difficult
- [Mental health articles / blog](https://drkushalkharel.com.np/blog/): ~100 patient-question SEO articles answering specific searches (e.g. "is X treatable in Nepal", "signs of X", "how to help a family member with X"), each with a quick-answer summary and FAQ section
- [Knowledge / patient guides](https://drkushalkharel.com.np/knowledge/): bilingual (Nepali/English) condition and wellness guides
- [Downloadable patient resources](https://drkushalkharel.com.np/resources/): printable leaflets per condition
- [Mental health screening tools](https://drkushalkharel.com.np/screening/): free self-assessment questionnaires (PHQ-9, GAD-7 and similar, adapted for Nepal)
- [Medications explained](https://drkushalkharel.com.np/medications/): plain-language guides to common psychiatric medication classes
- [Appointment booking](https://drkushalkharel.com.np/appointment/): how to book a consultation
- [Contact](https://drkushalkharel.com.np/contact/): clinic address, phone, hours
- [Full sitemap](https://drkushalkharel.com.np/sitemap.xml): complete, current list of every page on the site

## Notes

- All clinical content on this site is informational and not a substitute for direct psychiatric assessment.
- For a psychiatric emergency (including thoughts of self-harm), go to the nearest emergency department rather than using this site or waiting for a consultation. For patients abroad, this means local emergency services in their own country, not a scheduled online appointment with this clinic.
- Content is written and medically reviewed by Dr. Kushal Kharel and updated regularly; country and article counts above may lag the live site slightly — the sitemap is authoritative for what currently exists.
`;

export function GET() {
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
