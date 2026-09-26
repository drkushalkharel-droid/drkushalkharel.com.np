// Region hub pages for the markets we are growing: the Gulf, Europe, Japan &
// South Korea (East Asia) and Malaysia & Singapore (Southeast Asia).
//
// These sit above the per-country pages in app/data/abroad.ts. They exist so
// that broad searches ("Nepali psychiatrist in the Gulf", "...in Europe") have a
// page to land on, and so every country page links to real neighbours instead of
// the old one-size region labels (which put Israel with the Gulf and left Dubai
// with no neighbours at all).
//
// Time-difference figures in the copy below were checked against the computed
// session-time guide (app/lib/timeGuide.ts). Do not add hand-typed clock times
// here without re-checking them.

import type { OnlineFaq } from "./onlineCare";

export type Region = {
  slug: "gulf" | "europe" | "east-asia" | "southeast-asia";
  shortName: string;
  title: string;
  description: string;
  h1: string;
  quickAnswer: string;
  intro: string[];
  themesHeading: string;
  themes: string[];
  countrySlugs: string[];
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
      "This page brings together the six Gulf countries covered on this site. Each country page has its own concerns, prescription notes and emergency numbers, and the session-time table below shows what your local time is in Nepal.",
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
      "Consultant psychiatrist & online therapy for Nepalis abroad in Europe (Germany, UK, Portugal, Netherlands and more): constant worry, sleep problems. Google Meet.",
    h1: "Nepali psychiatrist and online therapy for Nepalis in Europe",
    quickAnswer:
      "Yes, Nepalis living in Europe can see a Nepali psychiatrist online. Dr. Kushal Kharel, a Nepal Medical Council-registered Consultant Psychiatrist in Kathmandu, offers online therapy and video consultation for Nepalis abroad in Germany, the UK, the Netherlands, France, Portugal and across Europe through Google Meet or WhatsApp video call, in Nepali or English, arranged around your time zone and work shift — including urgent requests. He treats constant worry, anxiety, intrusive thoughts, sleep problems and depression, and every session is confidential.",
    intro: [
      "Europe is a growing destination for Nepali students and workers, from Germany, the UK and the Netherlands to newer communities in Portugal, Romania and Cyprus. Getting mental health care there is not always easy: many systems ask you to see a GP first, waiting lists can run for months, and very few clinicians speak Nepali. Adjusting to a new language, residence-permit paperwork and long dark winters adds to the load.",
      "Europe sits roughly three to six hours behind Nepal. Because the clinic's published hours run until 10 PM Nepal time, early-morning, lunch-break and Sunday sessions fit most European time zones best. Evenings after work often fall too late at night in Nepal, so message first to ask about a time. The session-time table below shows your country exactly.",
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
      "uk",
      "netherlands",
      "france",
      "belgium",
      "portugal",
      "romania",
      "cyprus",
      "ireland",
      "poland",
      "italy",
      "spain",
      "croatia",
      "denmark",
      "finland",
      "norway",
      "sweden",
    ],
    keywords: [
      "Nepali psychiatrist Europe",
      "Nepali psychiatrist online Europe",
      "online therapy for Nepalis in Europe",
      "Nepali mental health Europe students workers",
      "Nepali psychiatrist Germany UK Portugal Netherlands",
      "युरोपमा नेपाली मनोचिकित्सक",
    ],
    nepaliHeading: "युरोपमा बस्ने नेपालीका लागि अनलाइन मनोचिकित्सक",
    nepaliText:
      "युरोपका देश (जर्मनी, बेलायत, नेदरल्यान्ड्स, फ्रान्स, पोर्चुगल, रोमानिया, साइप्रस लगायत) मा बस्ने नेपालीहरूका लागि अनलाइन मनोचिकित्सक। डा. कुशल खरेल (कन्सल्टेन्ट साइकाइट्रिस्ट, काठमाडौं) ले Google Meet भिडियोमार्फत अनलाइन थेरापी र परामर्श दिनुहुन्छ — निरन्तर चिन्ता, एन्जाइटी र प्यानिक, बारम्बार आउने विचार (OCD), निद्राको समस्या र डिप्रेसनको उपचार। परामर्श नेपाली वा अंग्रेजीमा हुन्छ र सबै कुरा गोप्य राखिन्छ। युरोपका धेरै देशका लागि बिहान, खाजा-समय वा आइतबार समय मिलाउन सजिलो हुन्छ; काम सकिएपछिको साँझ नेपालमा ढिलो रात पर्ने भएकाले पहिला सन्देश पठाएर सोध्नुहोस्। भुक्तानी कार्ड, बैंक ट्रान्सफर वा अन्य तरिकाले गर्न सकिन्छ।",
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
];

export function getRegion(slug: Region["slug"]): Region {
  const region = regions.find((r) => r.slug === slug);
  if (!region) throw new Error(`Unknown region: ${slug}`);
  return region;
}

export function getRegionForCountry(countrySlug: string): Region | undefined {
  return regions.find((r) => r.countrySlugs.includes(countrySlug));
}
