"use client";

import { useState } from "react";
import Link from "next/link";

const facts = [
  ["Common", "चिन्ता धेरैलाई हुने समस्या हो"],
  ["Treatable", "उपचार सम्भव छ"],
  ["CBT helps", "CBT प्रभावकारी हुन सक्छ"],
  ["Medicine can help", "औषधि आवश्यक पर्न सक्छ"],
  ["Sleep matters", "निद्रा र जीवनशैली महत्त्वपूर्ण छन्"],
  ["Early care is better", "समयमै उपचार राम्रो"],
];

const sections = [
  { id: "symptoms", en: "Symptoms", np: "लक्षण" },
  { id: "types", en: "Types", np: "प्रकार" },
  { id: "treatment", en: "Treatment", np: "उपचार" },
  { id: "self-care", en: "Self-care", np: "स्व-हेरचाह" },
  { id: "help", en: "When to seek help", np: "कहिले सहयोग लिने" },
  { id: "faq", en: "FAQ", np: "प्रश्नोत्तर" },
];

const symptoms = [
  ["Excessive worry that is difficult to control", "नियन्त्रण गर्न गाह्रो हुने अत्यधिक चिन्ता"],
  ["Restlessness, irritability or feeling on edge", "बेचैनी, झर्कोपन वा मन अस्थिर हुनु"],
  ["Fast heartbeat, sweating, trembling or chest tightness", "मुटु छिटो धड्किनु, पसिना आउनु, काम्नु वा छाती कसिनु"],
  ["Poor sleep, fatigue and poor concentration", "निद्रा बिग्रिनु, थकान र ध्यान केन्द्रित गर्न गाह्रो हुनु"],
  ["Avoiding places, people or situations because of fear", "डरका कारण ठाउँ, मानिस वा अवस्था टार्न खोज्नु"],
  ["Repeated panic attacks or fear of another attack", "बारम्बार panic attack हुनु वा फेरि हुन्छ कि भन्ने डर"],
];

const treatments = [
  {
    en: "Assessment and diagnosis",
    np: "मूल्याङ्कन र निदान",
    descEn:
      "A psychiatrist reviews symptoms, duration, triggers, medical causes, substance use, sleep, stress and co-existing conditions such as depression or OCD.",
    descNp:
      "मनोचिकित्सकले लक्षण, अवधि, कारण, शारीरिक स्वास्थ्य, पदार्थ प्रयोग, निद्रा, तनाव र depression वा OCD जस्ता सहसमस्याको मूल्याङ्कन गर्छन्।",
  },
  {
    en: "CBT-based therapy",
    np: "CBT आधारित मनोपरामर्श",
    descEn:
      "CBT helps patients understand anxious thoughts, reduce avoidance, practice exposure safely and build skills for long-term recovery.",
    descNp:
      "CBT ले चिन्ताजनक सोच बुझ्न, टार्ने बानी घटाउन, सुरक्षित रूपमा सामना गर्न र दीर्घकालीन सुधारका सीप सिक्न मद्दत गर्छ।",
  },
  {
    en: "Medication when needed",
    np: "आवश्यक परे औषधि",
    descEn:
      "Medication may be recommended for moderate to severe anxiety, panic attacks, poor sleep or major functional impairment. Treatment is individualized and monitored.",
    descNp:
      "मध्यम वा गम्भीर चिन्ता, panic attack, निद्राको समस्या वा दैनिक काममा ठूलो असर भए औषधि उपयोगी हुन सक्छ। उपचार व्यक्तिगत रूपमा मिलाइन्छ।",
  },
];

export default function AnxietyGuide() {
  const [language, setLanguage] = useState<"en" | "np">("en");
  const isEnglish = language === "en";

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-16 pt-28 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:pb-20 lg:pt-32">
          <div>
            <div className="mb-8 inline-flex rounded-full border border-white/15 bg-white/10 p-1">
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  isEnglish ? "bg-white text-slate-950" : "text-white/80"
                }`}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => setLanguage("np")}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  !isEnglish ? "bg-white text-slate-950" : "text-white/80"
                }`}
              >
                नेपाली
              </button>
            </div>

            <p className="text-sm font-semibold uppercase tracking-[3px] text-cyan-200">
              {isEnglish ? "Patient Guide" : "बिरामीका लागि जानकारी"}
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
              {isEnglish
                ? "Anxiety Disorders: Symptoms, Treatment and Recovery"
                : "चिन्ता विकार: लक्षण, उपचार र सुधार"}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              {isEnglish
                ? "Anxiety is treatable. This guide explains when normal worry becomes a disorder, what symptoms to watch for, and how professional psychiatric care can help you recover."
                : "चिन्ता उपचार गर्न सकिने समस्या हो। यो लेखले सामान्य चिन्ता कहिले विकार बन्छ, कुन लक्षणमा ध्यान दिने र विशेषज्ञ उपचारले कसरी मद्दत गर्छ भन्ने सरल रूपमा बुझाउँछ।"}
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="tel:+9779861800547"
                className="rounded-lg bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-100"
              >
                {isEnglish ? "Book Appointment" : "भेटघाट बुक गर्नुहोस्"}
              </a>
              <a
                href="https://wa.me/9779861800547"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/50 px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-slate-950"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <aside className="self-end rounded-lg border border-white/10 bg-white/10 p-6 backdrop-blur">
            <h2 className="text-xl font-bold">
              {isEnglish ? "Quick facts" : "मुख्य जानकारी"}
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {facts.map(([en, np]) => (
                <div key={en} className="rounded-lg bg-white/10 px-4 py-3 text-sm font-semibold">
                  {isEnglish ? en : np}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <nav className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl gap-3 overflow-x-auto px-6 py-4 lg:px-8">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="whitespace-nowrap rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-700 hover:text-blue-700"
            >
              {isEnglish ? section.en : section.np}
            </a>
          ))}
        </div>
      </nav>

      <article className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <section className="prose prose-slate max-w-none">
          <h2>{isEnglish ? "What is anxiety?" : "चिन्ता भनेको के हो?"}</h2>
          <p>
            {isEnglish
              ? "Anxiety is a normal response to stress, uncertainty or danger. It can improve alertness before exams, interviews, public speaking or important life events. It becomes a disorder when worry is excessive, persistent, hard to control and starts affecting sleep, health, study, work or relationships."
              : "चिन्ता तनाव, अनिश्चितता वा सम्भावित जोखिमप्रति शरीर र मनको सामान्य प्रतिक्रिया हो। परीक्षा, अन्तर्वार्ता वा महत्त्वपूर्ण कामअघि चिन्ता हुनु सामान्य हो। तर चिन्ता अत्यधिक, लामो समयसम्म रहने, नियन्त्रण गर्न गाह्रो हुने र निद्रा, स्वास्थ्य, पढाइ, काम वा सम्बन्धमा असर गर्ने भएपछि यसलाई चिन्ता विकार मानिन्छ।"}
          </p>
          <p>
            {isEnglish
              ? "Many people delay treatment because they think anxiety is only a personality weakness. In reality, anxiety disorders are medical and psychological conditions with effective treatment options."
              : "धेरै मानिसले चिन्तालाई कमजोरी ठानेर उपचार ढिला गर्छन्। वास्तवमा चिन्ता विकार चिकित्सा र मनोवैज्ञानिक अवस्था हो, जसको प्रभावकारी उपचार उपलब्ध छ।"}
          </p>
        </section>

        <section id="symptoms" className="mt-14">
          <h2 className="text-3xl font-bold">{isEnglish ? "Common symptoms" : "सामान्य लक्षणहरू"}</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {symptoms.map(([en, np]) => (
              <div key={en} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <p className="font-semibold text-slate-800">{isEnglish ? en : np}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="types" className="mt-14 rounded-lg bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold">{isEnglish ? "Types of anxiety disorders" : "चिन्ता विकारका प्रकार"}</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {[
              ["Generalized Anxiety Disorder", "लगातार धेरै कुरामा चिन्ता भइरहने अवस्था"],
              ["Panic Disorder", "अचानक तीव्र डर, मुटु धड्किने र सास फेर्न गाह्रो हुने panic attack"],
              ["Social Anxiety Disorder", "सामाजिक अवस्था, बोल्ने वा अरूले मूल्याङ्कन गर्ने डर"],
              ["Phobias", "विशेष वस्तु, ठाउँ वा अवस्थाप्रति अत्यधिक डर"],
            ].map(([title, desc]) => (
              <div key={title}>
                <h3 className="text-xl font-bold text-blue-900">{title}</h3>
                <p className="mt-2 leading-7 text-slate-600">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="treatment" className="mt-14">
          <h2 className="text-3xl font-bold">{isEnglish ? "Treatment options" : "उपचारका विकल्प"}</h2>
          <div className="mt-6 grid gap-5">
            {treatments.map((item) => (
              <div key={item.en} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-2xl font-bold text-blue-900">{isEnglish ? item.en : item.np}</h3>
                <p className="mt-3 leading-8 text-slate-600">{isEnglish ? item.descEn : item.descNp}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="self-care" className="mt-14 rounded-lg bg-blue-950 p-8 text-white">
          <h2 className="text-3xl font-bold">{isEnglish ? "What you can start today" : "आजदेखि गर्न सकिने कुरा"}</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {(isEnglish
              ? [
                  "Keep a regular sleep and wake time.",
                  "Reduce caffeine, nicotine and alcohol.",
                  "Practice slow breathing during panic symptoms.",
                  "Avoid repeatedly checking symptoms online.",
                  "Do light daily exercise if medically safe.",
                  "Do not stop psychiatric medicine suddenly without advice.",
                ]
              : [
                  "निद्रा र उठ्ने समय नियमित राख्नुहोस्।",
                  "क्याफिन, निकोटिन र मदिरा कम गर्नुहोस्।",
                  "panic जस्तो हुँदा विस्तारै सास फेर्ने अभ्यास गर्नुहोस्।",
                  "लक्षणहरू बारम्बार इन्टरनेटमा खोज्ने बानी घटाउनुहोस्।",
                  "सम्भव भए दैनिक हल्का व्यायाम गर्नुहोस्।",
                  "चिकित्सकको सल्लाह बिना औषधि अचानक बन्द नगर्नुहोस्।",
                ]).map((item) => (
              <p key={item} className="rounded-lg bg-white/10 p-4 font-medium">
                {item}
              </p>
            ))}
          </div>
        </section>

        <section id="help" className="mt-14 rounded-lg border border-cyan-200 bg-cyan-50 p-8">
          <h2 className="text-3xl font-bold text-slate-950">
            {isEnglish ? "When to seek professional help" : "कहिले विशेषज्ञ सहयोग लिने?"}
          </h2>
          <p className="mt-4 leading-8 text-slate-700">
            {isEnglish
              ? "Please consult a psychiatrist if anxiety lasts for weeks, causes panic attacks, affects sleep or appetite, leads to avoidance, affects study or work, or appears with sadness, hopelessness, substance use or thoughts of self-harm."
              : "चिन्ता हप्तौँसम्म रहिरहेमा, panic attack भएमा, निद्रा वा खानामा असर परेमा, काम वा पढाइ बिग्रिएमा, टार्ने बानी बढेमा, उदासी, निराशा, पदार्थ प्रयोग वा आफैंलाई हानी गर्ने सोच आएमा मनोचिकित्सकसँग परामर्श लिनुहोस्।"}
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a href="tel:+9779861800547" className="rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white">
              +977 9861800547
            </a>
            <Link href="/#services" className="rounded-lg border border-blue-700 px-6 py-3 font-semibold text-blue-800">
              {isEnglish ? "View services" : "सेवाहरू हेर्नुहोस्"}
            </Link>
          </div>
        </section>

        <section id="faq" className="mt-14">
          <h2 className="text-3xl font-bold">{isEnglish ? "Frequently asked questions" : "बारम्बार सोधिने प्रश्नहरू"}</h2>
          <div className="mt-6 space-y-4">
            {[
              [
                isEnglish ? "Can anxiety be cured?" : "के चिन्ता निको हुन्छ?",
                isEnglish
                  ? "Most people improve significantly with the right treatment. Some recover fully, while others learn to manage symptoms well and prevent relapse."
                  : "उचित उपचारले धेरैजसो मानिसमा राम्रो सुधार हुन्छ। केहीमा पूर्ण सुधार हुन्छ भने केहीले लक्षणलाई राम्रोसँग नियन्त्रण गर्न सिक्छन्।",
              ],
              [
                isEnglish ? "Will I need medicine forever?" : "औषधि सधैं खानुपर्छ?",
                isEnglish
                  ? "Usually not. Duration depends on severity, recurrence and response. Medication decisions should be reviewed with a psychiatrist."
                  : "धेरै अवस्थामा सधैं आवश्यक हुँदैन। अवधि लक्षणको गम्भीरता, दोहोरिने सम्भावना र सुधार अनुसार मनोचिकित्सकसँग मिलेर तय गरिन्छ।",
              ],
              [
                isEnglish ? "Can I consult online?" : "अनलाइन परामर्श लिन मिल्छ?",
                isEnglish
                  ? "Yes. Online consultation can be suitable for many anxiety concerns, especially follow-up, psychoeducation and treatment monitoring."
                  : "मिल्छ। धेरै चिन्तासम्बन्धी समस्यामा अनलाइन परामर्श, follow-up, psychoeducation र उपचार अनुगमन उपयोगी हुन सक्छ।",
              ],
            ].map(([question, answer]) => (
              <div key={question} className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-blue-900">{question}</h3>
                <p className="mt-3 leading-8 text-slate-600">{answer}</p>
              </div>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
