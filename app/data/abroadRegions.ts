// The eight regional pages for Nepalis abroad. Each country in app/data/abroad.ts
// is a section (`#<country-slug>`) on exactly one of these pages: there are no
// separate per-country pages any more. The old /nepalese-abroad/<country>/ URLs
// are "page moved" stubs that redirect here (see app/nepalese-abroad/[slug]).
//
// Why: the 41 country pages shared about three quarters of their text (a doorway-page
// pattern). A region page keeps every country's own concerns, prescription note,
// emergency number and patient quote, and drops only the repeated framing.
//
// Time-difference figures in the copy below were checked against the computed
// session-time guide (app/lib/timeGuide.ts). Do not add hand-typed clock times
// here without re-checking them.

import { abroadGuides } from "./abroad";
import type { OnlineFaq } from "./onlineCare";

export type RegionSlug =
  | "gulf"
  | "europe"
  | "uk-ireland"
  | "usa-canada"
  | "australia-new-zealand"
  | "east-asia"
  | "southeast-asia"
  | "south-asia";

export type Region = {
  slug: RegionSlug;
  shortName: string;
  title: string;
  description: string;
  h1: string;
  quickAnswer: string;
  intro: string[];
  themesHeading: string;
  themes: string[];
  countrySlugs: string[];
  // Optional sub-headings for long pages (Europe). Every slug in `countrySlugs`
  // must appear in exactly one group, in the same order.
  groups?: { heading: string; countrySlugs: string[] }[];
  keywords: string[];
  nepaliHeading: string;
  nepaliText: string;
  faqs: OnlineFaq[];
};

export const regions: Region[] = [
  {
    slug: "gulf",
    shortName: "the Gulf",
    title: "Nepali Psychiatrist for Nepalis in the Gulf – Online Therapy",
    description:
      "Consultant psychiatrist & online therapy for Nepalis abroad in the Gulf (UAE, Qatar, Saudi Arabia, Kuwait, Oman, Bahrain): constant worry, sleep problems. Google Meet.",
    h1: "Nepali psychiatrist and online therapy for Nepalis in the Gulf",
    quickAnswer:
      "Yes, Nepalis working or living in the Gulf can see a Nepali psychiatrist online. Dr. Kushal Kharel, a Nepal Medical Council-registered Consultant Psychiatrist in Kathmandu, offers online therapy and video consultation for Nepalis abroad in the UAE, Qatar, Saudi Arabia, Kuwait, Oman and Bahrain through Google Meet or WhatsApp video call, in Nepali or English, arranged around your time zone and work shift — including urgent requests. He treats constant worry, anxiety, intrusive thoughts, sleep problems and depression, and every session is confidential, including from employers.",
    intro: [
      "Hundreds of thousands of Nepalis work in the Gulf, most on employer-sponsored visas, in construction, hospitality, security, retail and domestic work. Long shifts in extreme heat, shared rooms with little privacy, months or years away from family and the steady pressure to send money home are common. This often shows up as constant worry, poor sleep, low mood or irritability, and many people hesitate to speak up because they fear it could affect their job.",
      "This page covers the six Gulf countries on this site. Each has its own section below with its own concerns, prescription notes and emergency numbers, and the session-time table shows what your local time is in Nepal.",
    ],
    themesHeading: "What Nepalis in the Gulf commonly struggle with",
    themes: [
      "Constant worry, low mood and irritability from long shifts, heat and little rest",
      "Sleep problems from night shifts, shared rooms and irregular hours",
      "Loneliness and homesickness after months or years away from family",
      "Money worries: remittances, debts and fear of losing the job",
      "Fear of speaking up because of the employer or sponsor",
      "Alcohol or other substances used to cope",
    ],
    countrySlugs: ["dubai", "qatar", "saudi-arabia", "kuwait", "oman", "bahrain"],
    keywords: [
      "Nepali psychiatrist Gulf",
      "Nepali psychiatrist online Gulf countries",
      "online therapy for Nepalis in the Gulf",
      "Nepali mental health Gulf workers",
      "Nepali psychiatrist UAE Qatar Saudi Kuwait Oman Bahrain",
      "खाडी मुलुकमा नेपाली मनोचिकित्सक",
    ],
    nepaliHeading: "खाडी मुलुकमा बस्ने नेपालीका लागि अनलाइन मनोचिकित्सक",
    nepaliText:
      "खाडी मुलुक (यूएई, कतार, साउदी अरब, कुवेत, ओमान र बहराइन) मा काम गर्ने वा बस्ने नेपालीहरूका लागि अनलाइन मनोचिकित्सक। डा. कुशल खरेल (कन्सल्टेन्ट साइकाइट्रिस्ट, काठमाडौं) ले Google Meet भिडियोमार्फत अनलाइन थेरापी र परामर्श दिनुहुन्छ — निरन्तर चिन्ता, एन्जाइटी र प्यानिक, बारम्बार आउने विचार (OCD), निद्राको समस्या र डिप्रेसनको उपचार। परामर्श नेपाली वा अंग्रेजीमा हुन्छ, समय तपाईंको समयअनुसार मिलाइन्छ, र तपाईंको अनुमतिबिना परिवार, साथी वा रोजगारदातालाई कुनै जानकारी दिइँदैन। भुक्तानी कार्ड, बैंक ट्रान्सफर वा अन्य तरिकाले गर्न सकिन्छ।",
    faqs: [
      {
        question: "Can I have a session from the Gulf without my employer knowing?",
        answer:
          "Sessions are confidential and are not shared with employers or sponsors without your permission. For privacy on your side, use headphones and choose a quiet moment, such as a break, away from shared rooms.",
      },
      {
        question: "What time is best for someone working in the Gulf?",
        answer:
          "The Gulf is less than three hours behind Nepal, so a slot after your shift usually falls in the Nepal evening. Check the session-time table on this page for your country, then message to confirm a time.",
      },
    ],
  },
  {
    slug: "europe",
    shortName: "Europe",
    title: "Nepali Psychiatrist for Nepalis in Europe – Online Therapy",
    description:
      "Consultant psychiatrist & online therapy for Nepalis abroad in Europe and Israel (Germany, Portugal, Netherlands and more): constant worry, sleep problems. Google Meet.",
    h1: "Nepali psychiatrist and online therapy for Nepalis in Europe",
    quickAnswer:
      "Yes, Nepalis living in Europe can see a Nepali psychiatrist online. Dr. Kushal Kharel, a Nepal Medical Council-registered Consultant Psychiatrist in Kathmandu, offers online therapy and video consultation for Nepalis abroad in Germany, the Netherlands, France, Portugal, Israel and across Europe through Google Meet or WhatsApp video call, in Nepali or English, arranged around your time zone and work shift — including urgent requests. He treats constant worry, anxiety, intrusive thoughts, sleep problems and depression, and every session is confidential.",
    intro: [
      "Europe is a growing destination for Nepali students and workers, from Germany and the Netherlands to newer communities in Portugal, Romania and Cyprus. Getting mental health care there is not always easy: many systems ask you to see a GP first, waiting lists can run for months, and very few clinicians speak Nepali. Adjusting to a new language, residence-permit paperwork and long dark winters adds to the load.",
      "Europe sits roughly three to six hours behind Nepal. Because the clinic's published hours run until 10 PM Nepal time, early-morning, lunch-break and Sunday sessions fit most European time zones best. Evenings after work often fall too late at night in Nepal, so message first to ask about a time. The session-time table below shows your country exactly. The UK and Ireland have their own page. Israel is included here, in an Eastern Mediterranean section next to Cyprus, because it fits no other region.",
    ],
    themesHeading: "What Nepalis in Europe commonly struggle with",
    themes: [
      "Constant worry about residence permits, visas and paperwork in a new language",
      "Low mood and sleep problems in long, dark winters",
      "Isolation in small towns or rural work placements with few Nepalis nearby",
      "Study, thesis and money pressure on student, trainee or part-time wages",
      "Difficulty getting a psychiatrist appointment: GP referrals and long waiting lists",
      "Homesickness during Dashain, Tihar and family events",
    ],
    countrySlugs: [
      "germany",
      "netherlands",
      "france",
      "belgium",
      "portugal",
      "spain",
      "italy",
      "croatia",
      "poland",
      "romania",
      "denmark",
      "finland",
      "norway",
      "sweden",
      "cyprus",
      "israel",
    ],
    groups: [
      { heading: "Western Europe", countrySlugs: ["germany", "netherlands", "france", "belgium"] },
      { heading: "Southern Europe", countrySlugs: ["portugal", "spain", "italy", "croatia"] },
      { heading: "Central and Eastern Europe", countrySlugs: ["poland", "romania"] },
      { heading: "The Nordic countries", countrySlugs: ["denmark", "finland", "norway", "sweden"] },
      { heading: "The Eastern Mediterranean", countrySlugs: ["cyprus", "israel"] },
    ],
    keywords: [
      "Nepali psychiatrist Europe",
      "Nepali psychiatrist online Europe",
      "online therapy for Nepalis in Europe",
      "Nepali mental health Europe students workers",
      "Nepali psychiatrist Germany Portugal Netherlands",
      "Nepali psychiatrist Israel",
      "युरोपमा नेपाली मनोचिकित्सक",
    ],
    nepaliHeading: "युरोपमा बस्ने नेपालीका लागि अनलाइन मनोचिकित्सक",
    nepaliText:
      "युरोपका देश (जर्मनी, नेदरल्यान्ड्स, फ्रान्स, पोर्चुगल, रोमानिया, साइप्रस लगायत) र इजरायलमा बस्ने नेपालीहरूका लागि अनलाइन मनोचिकित्सक। डा. कुशल खरेल (कन्सल्टेन्ट साइकाइट्रिस्ट, काठमाडौं) ले Google Meet भिडियोमार्फत अनलाइन थेरापी र परामर्श दिनुहुन्छ — निरन्तर चिन्ता, एन्जाइटी र प्यानिक, बारम्बार आउने विचार (OCD), निद्राको समस्या र डिप्रेसनको उपचार। परामर्श नेपाली वा अंग्रेजीमा हुन्छ र सबै कुरा गोप्य राखिन्छ। युरोपका धेरै देशका लागि बिहान, खाजा-समय वा आइतबार समय मिलाउन सजिलो हुन्छ; काम सकिएपछिको साँझ नेपालमा ढिलो रात पर्ने भएकाले पहिला सन्देश पठाएर सोध्नुहोस्। भुक्तानी कार्ड, बैंक ट्रान्सफर वा अन्य तरिकाले गर्न सकिन्छ।",
    faqs: [
      {
        question: "Do I need a referral from a European GP to book?",
        answer:
          "No. A consultation with Dr. Kushal Kharel does not go through a European referral system, so you can book directly. A Nepal-issued prescription cannot be assumed to be valid in Europe, so medication is planned individually, sometimes together with a local doctor.",
      },
      {
        question: "What time is best for someone in Europe?",
        answer:
          "Early morning, your lunch break and Sunday mornings usually fall inside the clinic's published hours. Evenings after work are late at night in Nepal, so message first to ask. The session-time table on this page shows your country.",
      },
    ],
  },
  {
    slug: "east-asia",
    shortName: "Japan and South Korea",
    title: "Nepali Psychiatrist in Japan & South Korea – Online Therapy",
    description:
      "Consultant psychiatrist & online therapy for Nepalis abroad in Japan and South Korea: constant worry, intrusive thoughts, sleep problems. Google Meet, Nepali or English.",
    h1: "Nepali psychiatrist and online therapy for Nepalis in Japan and South Korea",
    quickAnswer:
      "Yes, Nepalis in Japan and South Korea can see a Nepali psychiatrist online. Dr. Kushal Kharel, a Nepal Medical Council-registered Consultant Psychiatrist in Kathmandu, offers online therapy and video consultation for Nepalis abroad through Google Meet or WhatsApp video call, in Nepali or English, arranged around your time zone and work shift — including urgent requests. He treats constant worry, anxiety, intrusive thoughts, sleep problems and depression, and every session is confidential.",
    intro: [
      "Nepalis in Japan and South Korea arrive mainly as students and workers: in Japan through language schools, universities and skilled-worker routes, and in South Korea largely through the Employment Permit System. Language pressure, hierarchical workplaces, long overtime and shift work, and dormitory living with little privacy are common, and it can be hard to explain emotional distress across a language and cultural barrier.",
      "Japan and South Korea are about three hours and fifteen minutes ahead of Nepal. Sessions after work, around 6 to 8 PM your time, fall in the Nepal afternoon, well inside clinic hours. The session-time table below shows exact times.",
    ],
    themesHeading: "What Nepalis in Japan and South Korea commonly struggle with",
    themes: [
      "Constant worry and stress from needing to learn Japanese or Korean quickly for work or study",
      "Long hours, overtime and a hierarchical workplace culture",
      "Isolation in a small town, dormitory or workplace with few other Nepalis",
      "Sleep problems and exhaustion from shift work and night jobs",
      "Difficulty explaining emotional distress across a language and cultural barrier",
      "Money pressure from tuition, living costs and sending money home",
    ],
    countrySlugs: ["japan", "korea", "hong-kong", "china"],
    keywords: [
      "Nepali psychiatrist Japan",
      "Nepali psychiatrist South Korea",
      "Nepali psychiatrist online Japan Korea",
      "online therapy for Nepalis in Japan",
      "online therapy for Nepalis in South Korea",
      "जापानमा नेपाली मनोचिकित्सक",
      "कोरियामा नेपाली मनोचिकित्सक",
    ],
    nepaliHeading: "जापान र दक्षिण कोरियामा बस्ने नेपालीका लागि अनलाइन मनोचिकित्सक",
    nepaliText:
      "जापान र दक्षिण कोरिया (हङकङ र चीन पनि) मा पढ्न वा काम गर्न बसेका नेपालीहरूका लागि अनलाइन मनोचिकित्सक। डा. कुशल खरेल (कन्सल्टेन्ट साइकाइट्रिस्ट, काठमाडौं) ले Google Meet भिडियोमार्फत अनलाइन थेरापी र परामर्श दिनुहुन्छ — निरन्तर चिन्ता, एन्जाइटी र प्यानिक, बारम्बार आउने विचार (OCD), निद्राको समस्या र डिप्रेसनको उपचार। परामर्श नेपाली वा अंग्रेजीमा हुन्छ र सबै कुरा गोप्य राखिन्छ। जापान र कोरियामा काम सकिएपछिको साँझ नेपालमा दिउँसो पर्छ, जुन क्लिनिकको समयभित्र पर्छ। भुक्तानी कार्ड, बैंक ट्रान्सफर वा अन्य तरिकाले गर्न सकिन्छ।",
    faqs: [
      {
        question: "Is there Nepali-language crisis support in Japan?",
        answer:
          "Yes. The Yorisoi Hotline (0120-279-338, then press 2 for foreign languages, every day 10 AM to 10 PM) lists Nepali among its languages, though which languages are available varies by time. It is a general support line, not a replacement for psychiatric care. For immediate danger, call 119.",
      },
      {
        question: "What time is best for someone in Japan or South Korea?",
        answer:
          "After work, around 6 to 8 PM your time, falls in the Nepal afternoon and inside the clinic's published hours. Your lunch break also fits. Message to confirm a time.",
      },
    ],
  },
  {
    slug: "southeast-asia",
    shortName: "Malaysia and Singapore",
    title: "Nepali Psychiatrist in Malaysia & Singapore – Online Therapy",
    description:
      "Consultant psychiatrist & online therapy for Nepalis abroad in Malaysia and Singapore: constant worry, intrusive thoughts, sleep problems. Google Meet, Nepali or English.",
    h1: "Nepali psychiatrist and online therapy for Nepalis in Malaysia and Singapore",
    quickAnswer:
      "Yes, Nepalis in Malaysia and Singapore can see a Nepali psychiatrist online. Dr. Kushal Kharel, a Nepal Medical Council-registered Consultant Psychiatrist in Kathmandu, offers online therapy and video consultation for Nepalis abroad through Google Meet or WhatsApp video call, in Nepali or English, arranged around your time zone and work shift — including urgent requests. He treats constant worry, anxiety, intrusive thoughts, sleep problems and depression, and every session is confidential, including from employers.",
    intro: [
      "Malaysia and Singapore are among the most common destinations for Nepali workers, and Singapore also draws professionals. Many workers carry recruitment debt from before they left, work long or night shifts in factories, construction and shipyards, and live in large shared dormitories with little privacy. Professionals in Singapore face a different pressure: performance, visa requirements and building a life from scratch.",
      "Malaysia and Singapore are two hours and fifteen minutes ahead of Nepal. Sessions after work, around 6 to 8 PM your time, fall in the Nepal late afternoon, inside clinic hours. The session-time table below shows exact times, including for Thailand, Brunei and Myanmar.",
    ],
    themesHeading: "What Nepalis in Malaysia and Singapore commonly struggle with",
    themes: [
      "Money worries and constant anxiety from recruitment debt taken before leaving Nepal",
      "Sleep problems from long or rotating shifts and night work",
      "Low mood from months away from family and few days off",
      "Isolation in crowded dormitories with little privacy",
      "Pressure to keep the job and stay silent about health problems",
      "Performance pressure and burnout for professionals building a life abroad",
    ],
    countrySlugs: ["malaysia", "singapore", "thailand", "brunei", "myanmar"],
    keywords: [
      "Nepali psychiatrist Malaysia",
      "Nepali psychiatrist Singapore",
      "Nepali psychiatrist online Malaysia Singapore",
      "online therapy for Nepalis in Malaysia",
      "online therapy for Nepalis in Singapore",
      "मलेसियामा नेपाली मनोचिकित्सक",
      "सिंगापुरमा नेपाली मनोचिकित्सक",
    ],
    nepaliHeading: "मलेसिया र सिंगापुरमा बस्ने नेपालीका लागि अनलाइन मनोचिकित्सक",
    nepaliText:
      "मलेसिया र सिंगापुर (थाइल्यान्ड, ब्रुनाइ र म्यानमार पनि) मा काम गर्ने वा बस्ने नेपालीहरूका लागि अनलाइन मनोचिकित्सक। डा. कुशल खरेल (कन्सल्टेन्ट साइकाइट्रिस्ट, काठमाडौं) ले Google Meet भिडियोमार्फत अनलाइन थेरापी र परामर्श दिनुहुन्छ — निरन्तर चिन्ता, एन्जाइटी र प्यानिक, बारम्बार आउने विचार (OCD), निद्राको समस्या र डिप्रेसनको उपचार। परामर्श नेपाली वा अंग्रेजीमा हुन्छ, समय तपाईंको समयअनुसार मिलाइन्छ, र तपाईंको अनुमतिबिना परिवार, साथी वा रोजगारदातालाई कुनै जानकारी दिइँदैन। भुक्तानी कार्ड, बैंक ट्रान्सफर वा अन्य तरिकाले गर्न सकिन्छ।",
    faqs: [
      {
        question: "What time is best for someone in Malaysia or Singapore?",
        answer:
          "After work, around 6 to 8 PM your time, falls in the Nepal late afternoon and inside the clinic's published hours. Your lunch break also fits. Message to confirm a time.",
      },
      {
        question: "Will my employer or dormitory find out?",
        answer:
          "No. Sessions are confidential and are not shared with employers without your permission. For privacy on your side, use headphones and choose a quiet moment away from shared rooms.",
      },
    ],
  },
  {
    slug: "uk-ireland",
    shortName: "the UK and Ireland",
    title: "Nepali Psychiatrist for Nepalis in the UK & Ireland – Online Therapy",
    description:
      "Consultant psychiatrist & online therapy for Nepalis abroad in the UK and Ireland: constant worry, low mood, sleep problems. Google Meet, Nepali or English.",
    h1: "Nepali psychiatrist and online therapy for Nepalis in the UK and Ireland",
    quickAnswer:
      "Yes, Nepalis in the UK and Ireland can see a Nepali psychiatrist online. Dr. Kushal Kharel, a Nepal Medical Council-registered Consultant Psychiatrist in Kathmandu, offers online therapy and video consultation for Nepalis abroad through Google Meet or WhatsApp video call, in Nepali or English, arranged around your time zone and work shift — including urgent requests. He treats constant worry, anxiety, intrusive thoughts, sleep problems and depression, and every session is confidential.",
    intro: [
      "The UK is home to Gurkha and ex-servicemen families settled for generations, alongside a fast-growing group of international students and Skilled Worker visa holders. Ireland has become one of Europe's fastest-growing destinations for Nepali students in just a few years, mostly in Dublin. In both, settled-status or stay-back visa deadlines, high rents, and grey, short winter days that can lower mood are common pressures, and NHS mental health referral waiting lists in the UK can run for many months.",
      "Early-morning, lunch-break and Sunday sessions fit most European time zones best. Evenings after work often fall late at night in Nepal, so message first to ask about a time. The session-time table below shows each country exactly.",
    ],
    themesHeading: "What Nepalis in the UK and Ireland commonly struggle with",
    themes: [
      "Constant worry about settled or pre-settled status, visa renewal and post-study stay-back deadlines",
      "Low mood, tiredness and poor sleep in the grey, short days of winter",
      "Rent, energy bills and the cost of living on student or part-time income",
      "Waiting months for an NHS mental health referral or therapy place in the UK",
      "Isolation in smaller towns, or in a young and fast-growing Nepali community with few established networks",
      "Homesickness during Dashain, Tihar and family events",
    ],
    countrySlugs: ["uk", "ireland"],
    keywords: [
      "Nepali psychiatrist UK",
      "Nepali psychiatrist Ireland",
      "Nepali psychiatrist online UK Ireland",
      "online therapy for Nepalis in the UK",
      "online therapy for Nepalis in Ireland",
      "बेलायतमा नेपाली मनोचिकित्सक",
      "आयरल्यान्डमा नेपाली मनोचिकित्सक",
    ],
    nepaliHeading: "बेलायत र आयरल्यान्डमा बस्ने नेपालीका लागि अनलाइन मनोचिकित्सक",
    nepaliText:
      "बेलायत र आयरल्यान्ड (UK र Ireland) मा बस्ने नेपालीहरूका लागि अनलाइन मनोचिकित्सक। डा. कुशल खरेल (कन्सल्टेन्ट साइकाइट्रिस्ट, काठमाडौं) ले Google Meet भिडियोमार्फत अनलाइन थेरापी र परामर्श दिनुहुन्छ — निरन्तर चिन्ता, एन्जाइटी र प्यानिक, बारम्बार आउने विचार (OCD), निद्राको समस्या र डिप्रेसनको उपचार। परामर्श नेपाली वा अंग्रेजीमा हुन्छ र सबै कुरा गोप्य राखिन्छ। बिहान, खाजा-समय वा आइतबार समय मिलाउन सजिलो हुन्छ; काम सकिएपछिको साँझ नेपालमा ढिलो रात पर्ने भएकाले पहिला सन्देश पठाएर सोध्नुहोस्। भुक्तानी कार्ड, बैंक ट्रान्सफर वा अन्य तरिकाले गर्न सकिन्छ।",
    faqs: [
      {
        question: "Do I need to see an NHS or HSE GP before I can book?",
        answer:
          "No. A consultation with Dr. Kushal Kharel does not go through the NHS or HSE referral system, so you can book directly. A Nepal-issued prescription cannot be assumed to be valid at a UK or Irish pharmacy, so medication is planned individually, sometimes together with a local GP.",
      },
      {
        question: "What time is best for someone in the UK or Ireland?",
        answer:
          "Early morning, your lunch break and Sunday mornings usually fall inside the clinic's published hours. Evenings after work are late at night in Nepal, so message first to ask. The session-time table on this page shows both countries.",
      },
    ],
  },
  {
    slug: "usa-canada",
    shortName: "the USA and Canada",
    title: "Nepali Psychiatrist for Nepalis in the USA & Canada – Online Therapy",
    description:
      "Consultant psychiatrist & online therapy for Nepalis abroad in the USA and Canada: constant worry, visa stress, sleep problems. Google Meet, Nepali or English.",
    h1: "Nepali psychiatrist and online therapy for Nepalis in the USA and Canada",
    quickAnswer:
      "Yes, Nepalis in the USA and Canada can see a Nepali psychiatrist online. Dr. Kushal Kharel, a Nepal Medical Council-registered Consultant Psychiatrist in Kathmandu, offers online therapy and video consultation for Nepalis abroad through Google Meet or WhatsApp video call, in Nepali or English, arranged around your time zone and work shift — including urgent requests. He treats constant worry, anxiety, intrusive thoughts, sleep problems and depression, and every session is confidential.",
    intro: [
      "Nepalis in the USA range from international students on F-1 visas to H-1B professionals and long-settled families, with sizeable communities in cities like Dallas, Columbus, Falls Church and New York. Nepal has also become one of the largest source countries for international students in Canada, many of them on study permits in cities such as Toronto, Winnipeg, Regina and Ottawa. Visa and permit deadlines, tuition debt, part-time work on top of study and, in Canada, long dark winters are common pressures.",
      "Sessions can usually be arranged for early morning or late evening on the Nepal side, which lines up with evening or morning hours across most US and Canadian time zones. It helps to say which state or province you are in when you book. The session-time table below lists each time zone.",
    ],
    themesHeading: "What Nepalis in the USA and Canada commonly struggle with",
    themes: [
      "Constant worry about F-1, OPT or H-1B deadlines, and study permit or Post-Graduation Work Permit conditions",
      "Tuition debt and pressure to justify the cost of studying abroad",
      "Homesickness and missing Dashain, Tihar, weddings and family milestones",
      "Long, dark winters and isolation in smaller cities with few other Nepalis nearby",
      "Sleep disruption from coursework combined with part-time or overnight shift work",
      "Working out insurance, co-pays or provincial coverage for mental health care",
    ],
    countrySlugs: ["usa", "canada"],
    keywords: [
      "Nepali psychiatrist USA",
      "Nepali psychiatrist Canada",
      "Nepali psychiatrist online USA Canada",
      "online therapy for Nepalis in the USA",
      "online therapy for Nepalis in Canada",
      "अमेरिकामा नेपाली मनोचिकित्सक",
      "क्यानडामा नेपाली मनोचिकित्सक",
    ],
    nepaliHeading: "अमेरिका र क्यानडामा बस्ने नेपालीका लागि अनलाइन मनोचिकित्सक",
    nepaliText:
      "अमेरिका र क्यानडा (USA र Canada) मा पढ्न वा काम गर्न बसेका नेपालीहरूका लागि अनलाइन मनोचिकित्सक। डा. कुशल खरेल (कन्सल्टेन्ट साइकाइट्रिस्ट, काठमाडौं) ले Google Meet भिडियोमार्फत अनलाइन थेरापी र परामर्श दिनुहुन्छ — निरन्तर चिन्ता, एन्जाइटी र प्यानिक, बारम्बार आउने विचार (OCD), निद्राको समस्या र डिप्रेसनको उपचार। परामर्श नेपाली वा अंग्रेजीमा हुन्छ, समय तपाईंको समयअनुसार मिलाइन्छ, र सबै कुरा गोप्य राखिन्छ। नेपालको बिहान वा ढिलो साँझ समय मिलाउन सकिन्छ, जुन अमेरिका र क्यानडाका धेरैजसो समय क्षेत्रमा साँझ वा बिहान पर्छ। भुक्तानी कार्ड, बैंक ट्रान्सफर वा अन्य तरिकाले गर्न सकिन्छ।",
    faqs: [
      {
        question: "What time is best for someone in the USA or Canada?",
        answer:
          "Sessions can usually be arranged for early morning or late evening on the Nepal side, which lines up with evening or morning hours across most US and Canadian time zones. Tell us your state or province when you book, and check the session-time table on this page.",
      },
      {
        question: "What should I do in an emergency in the USA or Canada?",
        answer:
          "An online appointment is not an emergency service. If there is any thought of self-harm, an overdose or a safety crisis, call 911 or go to the nearest emergency department rather than waiting for a scheduled appointment.",
      },
    ],
  },
  {
    slug: "australia-new-zealand",
    shortName: "Australia and New Zealand",
    title: "Nepali Psychiatrist for Nepalis in Australia & New Zealand – Online Therapy",
    description:
      "Consultant psychiatrist & online therapy for Nepalis abroad in Australia, New Zealand and Fiji: constant worry, study stress, sleep problems. Google Meet.",
    h1: "Nepali psychiatrist and online therapy for Nepalis in Australia and New Zealand",
    quickAnswer:
      "Yes, Nepalis in Australia, New Zealand and Fiji can see a Nepali psychiatrist online. Dr. Kushal Kharel, a Nepal Medical Council-registered Consultant Psychiatrist in Kathmandu, offers online therapy and video consultation for Nepalis abroad through Google Meet or WhatsApp video call, in Nepali or English, arranged around your time zone and work shift — including urgent requests. He treats constant worry, anxiety, intrusive thoughts, sleep problems and depression, and every session is confidential.",
    intro: [
      "A large share of Nepal's diaspora in Australia arrived on student visas to cities like Sydney, Melbourne, Adelaide, Perth and Brisbane, and New Zealand has drawn a steadily growing number of Nepalis to Auckland, Wellington, Christchurch and Hamilton. Work-hour limits during study, high tuition and living costs, and shared student houses with little privacy are common pressures. Fiji, included here as the nearest Pacific neighbour, has a small, historic Nepali-origin community as well as newer students and professionals.",
      "The session-time table below shows exact times for each country, including Perth, so you can see which of your everyday windows fall inside the clinic's published hours.",
    ],
    themesHeading: "What Nepalis in Australia and New Zealand commonly struggle with",
    themes: [
      "Constant worry about student visa conditions, work-hour limits and residency or post-study work pathways",
      "Education loans, high rent and family savings or land sold to fund the move",
      "Burnout from full-time study combined with paid work over long semesters",
      "Sleep disruption from irregular hospitality, retail or aged-care shifts",
      "Isolation in smaller cities and shared student houses with little privacy",
      "Homesickness and missing weddings, festivals and family events",
    ],
    countrySlugs: ["australia", "new-zealand", "fiji"],
    keywords: [
      "Nepali psychiatrist Australia",
      "Nepali psychiatrist New Zealand",
      "Nepali psychiatrist online Australia New Zealand",
      "online therapy for Nepalis in Australia",
      "online therapy for Nepalis in New Zealand",
      "अष्ट्रेलियामा नेपाली मनोचिकित्सक",
      "न्युजिल्यान्डमा नेपाली मनोचिकित्सक",
    ],
    nepaliHeading: "अष्ट्रेलिया र न्युजिल्यान्डमा बस्ने नेपालीका लागि अनलाइन मनोचिकित्सक",
    nepaliText:
      "अष्ट्रेलिया र न्युजिल्यान्ड (फिजी पनि) मा पढ्न वा काम गर्न बसेका नेपालीहरूका लागि अनलाइन मनोचिकित्सक। डा. कुशल खरेल (कन्सल्टेन्ट साइकाइट्रिस्ट, काठमाडौं) ले Google Meet भिडियोमार्फत अनलाइन थेरापी र परामर्श दिनुहुन्छ — निरन्तर चिन्ता, एन्जाइटी र प्यानिक, बारम्बार आउने विचार (OCD), निद्राको समस्या र डिप्रेसनको उपचार। परामर्श नेपाली वा अंग्रेजीमा हुन्छ, समय तपाईंको समयअनुसार मिलाइन्छ, र सबै कुरा गोप्य राखिन्छ। भुक्तानी कार्ड, बैंक ट्रान्सफर वा अन्य तरिकाले गर्न सकिन्छ।",
    faqs: [
      {
        question: "Does Overseas Student Health Cover pay for an online session?",
        answer:
          "Overseas Student Health Cover generally does not extend to an overseas-based doctor, so check what your specific policy covers before assuming, and ask when you book.",
      },
      {
        question: "What time is best for someone in Australia, New Zealand or Fiji?",
        answer:
          "Look at the session-time table on this page for your city, then message with the times that suit your study or work shifts. A slot is arranged around them, and the time is confirmed when you book.",
      },
    ],
  },
  {
    slug: "south-asia",
    shortName: "South Asia",
    title: "Nepali Psychiatrist for Nepalis in India, Bangladesh & Sri Lanka",
    description:
      "Consultant psychiatrist & online therapy for Nepalis in India, Bangladesh and Sri Lanka: study pressure, constant worry, sleep problems. Google Meet, Nepali or English.",
    h1: "Nepali psychiatrist and online therapy for Nepalis in India, Bangladesh and Sri Lanka",
    quickAnswer:
      "Yes, Nepalis in India, Bangladesh and Sri Lanka can see a Nepali psychiatrist online. Dr. Kushal Kharel, a Nepal Medical Council-registered Consultant Psychiatrist in Kathmandu, offers online therapy and video consultation for Nepalis abroad through Google Meet or WhatsApp video call, in Nepali or English, arranged around your time zone and work shift — including urgent requests. He treats constant worry, anxiety, intrusive thoughts, sleep problems and depression, and every session is confidential.",
    intro: [
      "Many Nepalis in India, Bangladesh and Sri Lanka are students in medical, engineering, nursing or hospitality-management programmes, alongside a smaller number of workers and business owners. Competitive academic cultures, tuition and hostel costs on a tight family budget, and living away from family supervision for the first time are common pressures. Being close to Nepal does not remove the weight of being away from home.",
      "India, Bangladesh and Sri Lanka are almost in the same time zone as Nepal, so scheduling a video consultation is usually simple and does not require planning around odd hours. The session-time table below shows each country.",
    ],
    themesHeading: "What Nepalis in South Asia commonly struggle with",
    themes: [
      "Academic pressure and constant worry in competitive medical, engineering and nursing programmes",
      "Tuition, hostel costs and tight family budgets",
      "Feeling caught between two places, despite the closeness of language, culture and geography",
      "Living independently in a hostel, away from family supervision, for the first time",
      "Language barriers outside the classroom, such as Bengali-medium daily life in Bangladesh",
      "Insecure informal or daily-wage work, and everyday strain from economic uncertainty",
    ],
    countrySlugs: ["india", "bangladesh", "sri-lanka"],
    keywords: [
      "Nepali psychiatrist India",
      "Nepali psychiatrist Bangladesh",
      "Nepali psychiatrist Sri Lanka",
      "Nepali student mental health India",
      "online therapy for Nepalis in India",
      "भारतमा नेपाली मनोचिकित्सक",
      "बंगलादेशमा नेपाली मनोचिकित्सक",
    ],
    nepaliHeading: "भारत, बंगलादेश र श्रीलङ्कामा बस्ने नेपालीका लागि अनलाइन मनोचिकित्सक",
    nepaliText:
      "भारत, बंगलादेश र श्रीलङ्कामा पढ्न वा काम गर्न बसेका नेपालीहरूका लागि अनलाइन मनोचिकित्सक। डा. कुशल खरेल (कन्सल्टेन्ट साइकाइट्रिस्ट, काठमाडौं) ले Google Meet भिडियोमार्फत अनलाइन थेरापी र परामर्श दिनुहुन्छ — निरन्तर चिन्ता, एन्जाइटी र प्यानिक, बारम्बार आउने विचार (OCD), निद्राको समस्या र डिप्रेसनको उपचार। परामर्श नेपाली वा अंग्रेजीमा हुन्छ, समय तपाईंको समयअनुसार मिलाइन्छ, र सबै कुरा गोप्य राखिन्छ। यी देशको समय नेपालको समयसँग लगभग उस्तै भएकाले समय मिलाउन सजिलो हुन्छ। भुक्तानी कार्ड, बैंक ट्रान्सफर वा अन्य तरिकाले गर्न सकिन्छ।",
    faqs: [
      {
        question: "What time is best for someone in India, Bangladesh or Sri Lanka?",
        answer:
          "These countries are almost in the same time zone as Nepal, so any time inside the clinic's published hours usually works without odd hours. Message with the times that suit your classes or work and a slot is arranged around them.",
      },
      {
        question: "Will a Nepal prescription be accepted by a local pharmacy?",
        answer:
          "It may not be accepted at every pharmacy, so this is discussed directly, alongside whether local psychiatric care, a college counselling service or continued follow-up with Dr. Kushal Kharel is the best fit.",
      },
    ],
  },
];

export function getRegion(slug: Region["slug"]): Region {
  const region = regions.find((r) => r.slug === slug);
  if (!region) throw new Error(`Unknown region: ${slug}`);
  return region;
}

export function getRegionForCountry(countrySlug: string): Region | undefined {
  return regions.find((r) => r.countrySlugs.includes(countrySlug));
}

// Link to a country's section on its regional page. Country pages no longer exist as
// URLs of their own, so every internal link to "Germany" etc. goes through this.
export function countryHref(countrySlug: string): string {
  const region = getRegionForCountry(countrySlug);
  return region ? `/nepalese-abroad/${region.slug}/#${countrySlug}` : "/nepalese-abroad/";
}

// Build-time guard: every country in abroad.ts belongs to exactly one region, and every
// group lists exactly the region's countries in order. A country left out would silently
// lose its page, so fail the build instead.
(function assertRegionsCoverCountries() {
  const seen = new Map<string, string>();
  for (const region of regions) {
    for (const slug of region.countrySlugs) {
      if (seen.has(slug)) throw new Error(`Country "${slug}" is in both ${seen.get(slug)} and ${region.slug}`);
      seen.set(slug, region.slug);
    }
    if (region.groups) {
      const grouped = region.groups.flatMap((g) => g.countrySlugs);
      if (grouped.join(",") !== region.countrySlugs.join(",")) {
        throw new Error(`Region ${region.slug}: groups must list countrySlugs exactly, in order`);
      }
    }
  }
  for (const guide of abroadGuides) {
    if (!seen.has(guide.slug)) throw new Error(`Country "${guide.slug}" has no regional page (see app/data/abroadRegions.ts)`);
  }
  for (const slug of seen.keys()) {
    if (!abroadGuides.some((g) => g.slug === slug)) throw new Error(`Region lists unknown country "${slug}"`);
  }
})();
