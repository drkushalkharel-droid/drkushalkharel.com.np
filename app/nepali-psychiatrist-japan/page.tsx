import type { Metadata } from "next";
import Link from "next/link";
import { CalendarClock, Globe2, Languages, MessageCircle, ShieldCheck, Video } from "lucide-react";
import { abroadGuides } from "../data/abroad";
import { buildFaqPageJsonLd, buildOnlineServiceJsonLd, buildSpeakableSpec, serializeJsonLd } from "../lib/schema";
import { buildZoneGuide } from "../lib/timeGuide";
import RelatedContent from "../components/RelatedContent";
import { metaFor } from "../lib/seoText";

const site = "https://drkushalkharel.com.np";
const path = "/nepali-psychiatrist-japan/";
const url = `${site}${path}`;
const phone = "+977 9861800547";

const meta = metaFor(path, {
  title: "Nepali Psychiatrist in Japan, Online in Nepali",
  description:
    "Online psychiatrist for Nepalis in Japan: students, workers and families. Consult in Nepali or English by video, at a time that suits Japan time. Book online.",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: path },
  keywords: [
    "Nepali psychiatrist Japan",
    "Nepali psychiatrist in Japan online",
    "psychiatrist for Nepali students in Japan",
    "Nepali speaking psychiatrist Japan",
    "online therapy Nepali Japan",
    "mental health support for Nepalis in Japan",
    "Nepali doctor online Japan",
    "ネパール語 精神科 オンライン 日本",
  ],
  openGraph: {
    title: meta.title,
    description: meta.description,
    url,
    type: "article",
    images: [{ url: "/images/dr-kushal-headshot.jpg", width: 1200, height: 630, alt: "Dr. Kushal Kharel, Nepali psychiatrist for Nepalis in Japan" }],
  },
  twitter: { card: "summary_large_image", title: meta.title, description: meta.description },
};

const japan = abroadGuides.find((g) => g.slug === "japan")!;
const zone = buildZoneGuide({ label: "Japan", tz: "Asia/Tokyo" });
const openWindows = zone.rows.filter((row) => row.views.every((v) => v.status === "open"));

const faqs = [
  {
    question: "Is there a Nepali psychiatrist I can see from Japan?",
    answer:
      "Yes. Dr. Kushal Kharel, a Nepal Medical Council-registered Consultant Psychiatrist in Kathmandu (registration #27199), sees patients living in Japan by online video consultation, in Nepali or English. You do not need to travel to Nepal.",
  },
  {
    question: "What time can I book from Japan?",
    answer:
      "Japan is 3 hours 15 minutes ahead of Nepal all year. The published clinic hours are Sunday to Friday 8:00 AM to 10:00 PM and Saturday 10:00 AM to 4:00 PM Nepal time, which is about 11:15 AM to 1:15 AM Japan time Sunday to Friday and 1:15 PM to 7:15 PM Japan time on Saturday. After-work sessions at 6 to 9 PM Japan time fall in the Nepal afternoon. Availability is confirmed individually.",
  },
  {
    question: "I am an international student working part-time. Can I book?",
    answer:
      "Yes. Students at language schools, universities and vocational schools use online consultations around classes and part-time shifts. Sessions are arranged for your timetable, including late evenings and weekends where the clinic can confirm availability.",
  },
  {
    question: "I work under the Specified Skilled Worker or another work visa. Will my employer know?",
    answer:
      "No. Consultations are confidential. The clinic does not contact your employer, school or company. You decide what to share and with whom, and the clinic does not give information to anyone without your consent, except where the law requires it or there is a serious safety risk.",
  },
  {
    question: "Can I get medicine from Nepal in Japan?",
    answer:
      "Not automatically. A prescription written in Nepal cannot be assumed to be valid at a Japanese pharmacy, and Japan has strict rules on importing prescription medicines. In Japan, medicines are prescribed by a doctor licensed in Japan. Dr. Kharel will discuss this honestly with you and, where useful, help you prepare a clear summary to show a Japanese doctor.",
  },
  {
    question: "How much does a consultation cost and how do I pay from Japan?",
    answer:
      "The fee and the payment method are confirmed by the clinic when you book. Message the clinic on WhatsApp with your preferred times and ask about payment from Japan. Nothing is charged by this website.",
  },
  {
    question: "Is online consultation the same as seeing a doctor in Japan?",
    answer:
      "It is not a replacement for local emergency care or for a Japanese doctor where one is needed, for example for prescriptions or certificates. It can give you a proper assessment in your own language, a treatment plan, counselling and follow-up, and help you decide what local care to arrange.",
  },
  {
    question: "What should I do in an emergency in Japan?",
    answer:
      "Call 119 for an ambulance or 110 for police, or go to the nearest hospital emergency department. An online appointment is not an emergency service. If you are thinking of ending your life, do not wait for an appointment: call 119 or 110, or contact a helpline listed on this page.",
  },
  {
    question: "Can a family member in Nepal book for me?",
    answer:
      "Your family can contact the clinic to ask about booking, but the consultation itself needs your own consent and participation. If you are worried about a relative in Japan, you can message the clinic to ask how to approach it.",
  },
  {
    question: "Which problems can online consultation help with?",
    answer:
      "Anxiety and constant worry, panic attacks, low mood and depression, sleep problems and insomnia, OCD, overthinking, stress and burnout, and adjustment problems after moving abroad. Treatment is tailored to the person and may include counselling, CBT-based therapy and, where appropriate, medication through a prescriber who can legally prescribe for you.",
  },
];

const whoItIsFor = [
  ["International students", "Language school, university and vocational school students balancing study, part-time work and money."],
  ["Part-time and shift workers", "Convenience-store, restaurant, hotel, factory, warehouse and delivery work, often at night or on rotating shifts."],
  ["Skilled and technical workers", "Specified Skilled Worker, Engineer/Specialist in Humanities and similar visa holders, and those switching from a student visa."],
  ["Families and dependents", "Spouses, parents and children adjusting to life in Japan, and couples living apart."],
  ["Long-term residents", "People settled in Japan for years who still prefer to explain their feelings in Nepali."],
];

const concerns = [
  ["Money against the 28-hour limit", "International students are generally limited to about 28 hours of part-time work a week during term. Rent, tuition and loans taken in Nepal can feel impossible to cover, and money worry is one of the strongest triggers of anxiety, panic and low mood."],
  ["Visa status and the move from study to work", "Uncertainty about visa renewal, changing status from student to worker, or finding a sponsor can keep people awake at night."],
  ["Language and being misunderstood", "Trying to work, study and explain symptoms in a second language is exhausting. Many people find it hard to describe emotional pain in Japanese or English."],
  ["Long hours, night shifts and exhaustion", "Combining study with overtime or night work disrupts sleep and can lead to burnout, irritability and depression."],
  ["Loneliness, dormitory life and homesickness", "Shared housing, little privacy and missing family, Dashain and Tihar make isolation worse, especially in smaller towns."],
  ["Family expectations and remittances", "Pressure to send money home, repay loans and succeed can make it hard to admit you are struggling."],
  ["Workplace stress and feeling unable to speak up", "A strict workplace hierarchy and fear of losing a job or visa can make people endure harsh conditions silently."],
  ["Alcohol, gambling and coping behaviours", "Heavy after-work drinking is normalised in Japan, and pachinko is easy to access. Both can turn from a way of coping into a problem."],
  ["Anxiety, panic, OCD and overthinking", "Racing thoughts, checking, panic attacks and constant worry are common and treatable, and often get worse when sleep and routines are disrupted."],
];

const cities = ["Tokyo", "Osaka", "Nagoya", "Yokohama", "Kyoto", "Fukuoka", "Saitama", "Chiba", "Kobe", "Sapporo", "Sendai", "Hiroshima"];

export default function NepaliPsychiatristJapanPage() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        name: meta.title,
        url,
        description: meta.description,
        inLanguage: ["en", "ne", "ja"],
        dateModified: "2026-10-29",
        medicalAudience: ["Patient", "Caregiver"],
        about: { "@id": `${site}#clinic` },
        mainEntity: { "@id": `${url}#service` },
        author: { "@id": `${site}#psychiatrist` },
        reviewedBy: { "@id": `${site}#psychiatrist` },
        speakable: buildSpeakableSpec(["#japan-quick-answer"]),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site },
          { "@type": "ListItem", position: 2, name: "Nepalis abroad", item: `${site}/nepalese-abroad/` },
          { "@type": "ListItem", position: 3, name: "Nepali psychiatrist in Japan", item: url },
        ],
      },
    ],
  };
  const serviceJsonLd = buildOnlineServiceJsonLd({
    id: `${url}#service`,
    name: "Online psychiatrist for Nepalis in Japan",
    description: "Online video consultation in Nepali or English with a Kathmandu-based Consultant Psychiatrist for Nepalis living in Japan.",
    url,
    audienceType: "Nepalis living in Japan",
    areaServed: ["Japan"],
  });

  return (
    <main id="main" className="min-h-screen bg-[#f5f4ef] text-[#1f2927]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(graph) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildFaqPageJsonLd(faqs)) }} />

      {/* Hero */}
      <section className="bg-sage-950 text-white">
        <div className="mx-auto max-w-5xl px-6 pb-14 pt-28">
          <nav aria-label="Breadcrumb" className="text-sm text-sage-200">
            <Link href="/" className="underline">Home</Link> / <Link href="/nepalese-abroad/" className="underline">Nepalis abroad</Link> / Japan
          </nav>
          <p className="mt-6 text-[13px] font-bold uppercase tracking-[.12em] text-[#e6b579]">For Nepalis in Japan</p>
          <h1 className="mt-4 text-4xl leading-[1.05] tracking-[-.03em] md:text-6xl">
            Nepali psychiatrist for Nepalis in Japan, <em className="text-[#f6a995]">online in Nepali</em>
          </h1>
          <p id="japan-quick-answer" className="mt-6 max-w-3xl text-lg leading-8 text-sage-100">
            Nepalis living in Japan can see Dr. Kushal Kharel, a Nepal Medical Council-registered Consultant Psychiatrist in Kathmandu, by online video
            consultation in Nepali or English, at a time that suits Japan time. Students, part-time and shift workers, skilled workers and families use it for
            anxiety, panic attacks, depression, sleep problems, OCD, overthinking, stress and adjustment difficulties.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/book/" className="inline-flex items-center gap-2 bg-clay-700 px-6 py-4 text-sm font-semibold text-white transition hover:bg-clay-800">
              <CalendarClock size={18} aria-hidden="true" /> Book an online session
            </Link>
            <a
              href={`https://wa.me/9779861800547?text=${encodeURIComponent("Hello Dr. Kharel, I live in Japan and would like to book an online consultation. My preferred times (Japan time) are: ")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/40 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <MessageCircle size={18} aria-hidden="true" /> WhatsApp from Japan
            </a>
          </div>
          <ul className="mt-10 grid gap-3 text-sm sm:grid-cols-2 lg:grid-cols-4">
            {[
              [Video, "Google Meet or WhatsApp video"],
              [Languages, "Nepali, English, Hindi, Bangla"],
              [Globe2, "Japan is 3 h 15 min ahead of Nepal"],
              [ShieldCheck, "Confidential, no contact with employer"],
            ].map(([Icon, text]) => {
              const I = Icon as typeof Video;
              return (
                <li key={text as string} className="flex items-center gap-3 bg-white/5 p-4">
                  <I size={20} className="shrink-0 text-[#e6b579]" aria-hidden="true" />
                  <span>{text as string}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Scale of the community */}
      <section className="mx-auto max-w-5xl px-6 py-14">
        <h2 className="text-3xl md:text-4xl">A large Nepali community, a small number of Nepali-speaking mental health options</h2>
        <p className="mt-5 max-w-3xl leading-8 text-[#3d4743]">
          Japan is now home to one of the largest Nepali communities outside South Asia. Nepali media, citing Japan&apos;s Immigration Services Agency,
          reported about{" "}
          <a className="font-semibold text-sage-800 underline" href="https://ekantipur.com/diaspora/2025/12/30/en/japan-reducing-the-number-of-foreign-workers-13-01.html" target="_blank" rel="noopener noreferrer">274,000 Nepalis living in Japan by June 2025</a>,
          with estimates close to 300,000 by the end of 2025, and Tokyo the largest concentration. A large share are students, many of them also working
          part-time. Most arrived within the last few years, far from family, in a second language, and under real financial pressure.
        </p>
        <p className="mt-4 max-w-3xl leading-8 text-[#3d4743]">
          Mental health services in Japan exist, but finding one that works in Nepali, fits around shifts and classes, and is affordable can be hard. That
          gap is why many people look for a Nepali-speaking psychiatrist online. In 2026 the{" "}
          <a className="font-semibold text-sage-800 underline" href="https://kathmandupost.com/nepali-diaspora/2026/06/25/67-nepalis-die-in-japan-in-over-ten-months-25-by-suicide" target="_blank" rel="noopener noreferrer">Kathmandu Post reported</a>,
          citing Nepal&apos;s Ministry of Foreign Affairs, that 67 Nepalis died in Japan in about ten months, 25 of them by suicide, and that high living
          costs, loans and visa uncertainty were among the pressures described. These numbers are a reminder that distress among Nepalis in Japan is real,
          and that help is available before things reach a crisis.
        </p>
      </section>

      {/* Who */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl md:text-4xl">Who this is for</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {whoItIsFor.map(([title, text]) => (
              <article key={title} className="border border-[#d6d8d2] bg-[#f5f4ef] p-6">
                <h3 className="text-xl">{title}</h3>
                <p className="mt-2 leading-7 text-[#3d4743]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Concerns */}
      <section className="mx-auto max-w-5xl px-6 py-14">
        <h2 className="text-3xl md:text-4xl">What Nepalis in Japan commonly struggle with</h2>
        <p className="mt-4 max-w-3xl leading-8 text-[#3d4743]">{japan.intro}</p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {concerns.map(([title, text]) => (
            <article key={title} className="border border-[#d6d8d2] bg-white p-6">
              <h3 className="text-xl">{title}</h3>
              <p className="mt-2 leading-7 text-[#3d4743]">{text}</p>
            </article>
          ))}
        </div>
        <p className="mt-6 text-sm text-[#5a635e]">
          These problems are common and treatable. Reading yourself in this list is not a sign of weakness. If it has lasted more than two weeks or is
          affecting sleep, study, work or relationships, an assessment is worth having.
        </p>
      </section>

      {/* How it works + times */}
      <section className="bg-sage-100 py-14">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl md:text-4xl">How an online session works from Japan</h2>
          <ol className="mt-8 grid gap-5 md:grid-cols-4">
            {[
              ["Send your times", "Book on the website or WhatsApp the clinic two or three times that suit you in Japan time."],
              ["Clinic confirms", "The clinic converts the time to Nepal time, checks the schedule and confirms. Fee and payment are explained then."],
              ["Join by video", "Open the Google Meet or WhatsApp video link on your phone or laptop from a quiet, private spot."],
              ["Plan and follow-up", "Dr. Kharel explains the assessment, options and next steps in plain Nepali or English, with follow-up as needed."],
            ].map(([title, text], i) => (
              <li key={title} className="bg-white p-6">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-clay-700 font-bold text-white">{i + 1}</span>
                <h3 className="mt-4 text-lg">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#3d4743]">{text}</p>
              </li>
            ))}
          </ol>

          <h3 className="mt-12 text-2xl">Japan time and Nepal time</h3>
          <p className="mt-3 max-w-3xl leading-8 text-[#3d4743]">
            Japan (JST) is 3 hours 15 minutes ahead of Nepal all year, because neither
            country uses daylight saving time. Published clinic hours are Sunday to Friday 8:00 AM to 10:00 PM and Saturday 10:00 AM to 4:00 PM Nepal time,
            which is roughly <strong>11:15 AM to 1:15 AM Japan time</strong> (Sunday to Friday) and <strong>1:15 PM to 7:15 PM Japan time</strong> (Saturday).
          </p>
          <div className="mt-6 overflow-x-auto border border-[#d6d8d2] bg-white">
            <table className="w-full min-w-[520px] text-left text-sm">
              <caption className="sr-only">Suggested session windows in Japan time and the matching Nepal time</caption>
              <thead className="bg-[#ebe9e1]">
                <tr>
                  <th className="px-4 py-3 font-bold">Window</th>
                  <th className="px-4 py-3 font-bold">Japan time</th>
                  <th className="px-4 py-3 font-bold">Nepal time</th>
                </tr>
              </thead>
              <tbody>
                {openWindows.map((row) => (
                  <tr key={row.key} className="border-t border-[#d6d8d2]">
                    <td className="px-4 py-3 font-semibold">{row.label}</td>
                    <td className="px-4 py-3">{row.local}</td>
                    <td className="px-4 py-3">{row.views[0].nepal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-[#5a635e]">
            A planning guide, not a live calendar. Availability is confirmed individually, and the clinic can check times outside these windows on request.
          </p>
          <p className="mt-6 leading-8 text-[#3d4743]">
            <strong>Privacy in shared housing.</strong> Use headphones, choose a quiet moment, and consider a private room, a booked study room or a quiet
            spot elsewhere if your dormitory or share house has thin walls. You do not need to turn your camera on for the whole session if that helps you
            speak freely, though it helps the doctor to see you at the start.
          </p>
        </div>
      </section>

      {/* Medication & local care */}
      <section className="mx-auto max-w-5xl px-6 py-14">
        <h2 className="text-3xl md:text-4xl">Medication and local care in Japan: the honest version</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <article className="border border-[#d6d8d2] bg-white p-6">
            <h3 className="text-xl">Prescriptions</h3>
            <p className="mt-2 leading-7 text-[#3d4743]">
              A prescription from Nepal cannot be used at a Japanese pharmacy, and importing prescription medicine is tightly regulated. In Japan, medicine is
              prescribed by a doctor licensed in Japan. Many problems improve substantially with counselling and CBT-based work alone. Where medicine would
              help, Dr. Kharel will tell you so, explain what to ask for, and help you prepare a short English summary to take to a local psychiatry or
              心療内科 (shinryo-naika) clinic.
            </p>
          </article>
          <article className="border border-[#d6d8d2] bg-white p-6">
            <h3 className="text-xl">Using local services alongside online care</h3>
            <p className="mt-2 leading-7 text-[#3d4743]">
              Residents staying in Japan for more than three months generally join public health insurance and pay around 30% of treatment costs.
              Psychiatric outpatient care may qualify for reduced costs under the local support system for outpatient psychiatric treatment, which your city or
              ward office can explain. Universities have counselling centres, many companies have an occupational physician, and each prefecture has a
              mental health and welfare centre (精神保健福祉センター) with consultation, although language support varies.
            </p>
          </article>
        </div>
      </section>

      {/* Helplines */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl md:text-4xl">If you are in crisis in Japan</h2>
          <p className="mt-4 max-w-3xl leading-8 text-[#3d4743]">
            An online appointment is not an emergency service. If you are in danger, thinking of ending your life or have taken an overdose, call for help
            now. Please double-check hours on each service&apos;s website, as they can change.
          </p>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            <li className="border border-[#d6d8d2] bg-[#f5f4ef] p-5"><strong className="block text-lg">119</strong> Ambulance and fire (free, nationwide). Say &ldquo;kyuukyuu&rdquo; (ambulance) and your address.</li>
            <li className="border border-[#d6d8d2] bg-[#f5f4ef] p-5"><strong className="block text-lg">110</strong> Police (free, nationwide).</li>
            <li className="border border-[#d6d8d2] bg-[#f5f4ef] p-5">
              <strong className="block text-lg">Yorisoi Hotline: 0120-279-338</strong> Free, nationwide. After the recorded message press 2 for foreign-language support. Nepali is among the languages offered at set times.{" "}
              <a className="font-semibold text-sage-800 underline" href="https://www.since2011.net/yorisoi/en/" target="_blank" rel="noopener noreferrer">Check hours</a>
            </li>
            <li className="border border-[#d6d8d2] bg-[#f5f4ef] p-5">
              <strong className="block text-lg">Japan Helpline: 0570-000-911</strong> English-language, 24-hour assistance line for emergencies and everyday problems.{" "}
              <a className="font-semibold text-sage-800 underline" href="https://jhelp.com/" target="_blank" rel="noopener noreferrer">jhelp.com</a>
            </li>
            <li className="border border-[#d6d8d2] bg-[#f5f4ef] p-5 md:col-span-2">
              <strong className="block text-lg">TELL Lifeline: 03-5774-0992</strong> Free and anonymous English-language counselling and support across Japan, with online chat as well.{" "}
              <a className="font-semibold text-sage-800 underline" href="https://telljp.com/" target="_blank" rel="noopener noreferrer">telljp.com</a>
            </li>
          </ul>
        </div>
      </section>

      {/* Where */}
      <section className="mx-auto max-w-5xl px-6 py-14">
        <h2 className="text-3xl md:text-4xl">Anywhere in Japan, because it is online</h2>
        <p className="mt-4 max-w-3xl leading-8 text-[#3d4743]">
          The consultation is by video, so your city does not matter. Dr. Kharel&apos;s Nepali-language online sessions are used by people living across Japan, including:
        </p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {cities.map((c) => (
            <li key={c} className="border border-[#d6d8d2] bg-white px-4 py-2 text-sm font-medium">{c}</li>
          ))}
          <li className="border border-[#d6d8d2] bg-white px-4 py-2 text-sm font-medium">and smaller towns and rural areas</li>
        </ul>
      </section>

      {/* Patient voice */}
      {japan.testimonial && (
        <section className="bg-sage-100 py-14">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-3xl md:text-4xl">A patient in Japan</h2>
            <figure className="mt-6 border border-[#d6d8d2] bg-white p-7">
              <blockquote className="leading-8 text-[#3d4743]">&ldquo;{japan.testimonial.quote}&rdquo;</blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-sage-900">{japan.testimonial.attribution}</figcaption>
            </figure>
            <p className="mt-3 text-sm text-[#5a635e]">
              Shared with the patient&apos;s permission and kept anonymous. Individual experiences differ. See more on the{" "}
              <Link href="/patient-testimonials/" className="underline">patient testimonials page</Link>.
            </p>
          </div>
        </section>
      )}

      {/* Nepali */}
      <section lang="ne" className="mx-auto max-w-5xl px-6 py-14">
        <h2 className="text-3xl md:text-4xl">जापानमा बस्ने नेपालीका लागि नेपाली मनोचिकित्सक</h2>
        <p className="mt-5 max-w-3xl leading-8 text-[#3d4743]">
          जापानमा पढ्दै वा काम गर्दै हुनुहुन्छ भने चिन्ता, डर, पैनिक, डिप्रेसन, निद्रा नलाग्ने समस्या, OCD वा धेरै सोच्ने बानीका लागि नेपाल फर्कनु पर्दैन।
          काठमाडौँका कन्सल्टेन्ट मनोचिकित्सक डा. कुशल खरेल (NMC दर्ता नं. २७१९९) सँग Google Meet वा WhatsApp भिडियोमार्फत नेपाली वा अंग्रेजी भाषामा परामर्श लिन सकिन्छ।
        </p>
        <p className="mt-4 max-w-3xl leading-8 text-[#3d4743]">
          जापानको समय नेपालभन्दा ३ घण्टा १५ मिनेट अगाडि छ। नेपालको क्लिनिक समय आइतबारदेखि शुक्रबार बिहान ८ देखि राति १० बजेसम्म र शनिबार बिहान १० देखि दिउँसो ४ बजेसम्म हो;
          जापानको समयमा यो करिब बिहान ११:१५ देखि राति १:१५ (शनिबार दिउँसो १:१५ देखि बेलुका ७:१५) बराबर हुन्छ। काम र पढाइपछि बेलुकीको समय प्रायः मिल्छ।
        </p>
        <p className="mt-4 max-w-3xl leading-8 text-[#3d4743]">
          औषधि चाहिने अवस्थामा नेपालको प्रिस्क्रिप्सन जापानका फार्मेसीमा चल्दैन, र जापानमा औषधि जापानको लाइसेन्स भएका डाक्टरले मात्र लेख्न सक्छन्। यसबारे परामर्शमा इमानदार रूपमा छलफल गरिन्छ।
          आपत्कालीन अवस्थामा १९९ (एम्बुलेन्स) वा ११० (प्रहरी) मा फोन गर्नुहोस्। आफूलाई हानि पुर्‍याउने विचार आएमा अपोइन्टमेन्टको पर्खाइ नगर्नुहोस्।
          समय मिलाउन +977 9861800547 मा WhatsApp गर्नुहोस् वा{" "}
          <Link href="/book/" className="font-semibold text-sage-800 underline">वेबसाइटबाट अनुरोध पठाउनुहोस्</Link>। थप जानकारी:{" "}
          <Link href="/ne/bideshma-nepali/east-asia/" className="font-semibold text-sage-800 underline">विदेशमा नेपालीका लागि सेवा (जापान र कोरिया)</Link>।
        </p>
      </section>

      {/* Japanese */}
      <section lang="ja" className="bg-white py-14">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl md:text-4xl">日本在住ネパール人のためのオンライン精神科相談</h2>
          <p className="mt-5 max-w-3xl leading-8 text-[#3d4743]">
            ネパール・カトマンズの精神科専門医(コンサルタント精神科医)Dr. Kushal Kharel(ネパール医療評議会登録番号 27199)は、日本に住むネパール人の留学生・就労者・ご家族を対象に、
            Google Meet または WhatsApp のビデオ通話でオンライン相談を行っています。ネパール語と英語で相談でき、不安、うつ、不眠、パニック発作、強迫症、ストレスなどに対応します。
          </p>
          <p className="mt-4 max-w-3xl leading-8 text-[#3d4743]">
            診療時間(ネパール時間)は日曜〜金曜 8:00〜22:00、土曜 10:00〜16:00 で、日本時間では日曜〜金曜 約11:15〜翌1:15、土曜 約13:15〜19:15 にあたります。
            日本語学校・大学・企業の担当者の方が、ネパール語で相談できる窓口をお探しの学生・従業員を案内する場合にもご利用いただけます。
          </p>
          <p className="mt-4 max-w-3xl leading-8 text-[#3d4743]">
            ご注意:オンライン相談は救急医療の代わりではありません。緊急時は 119(救急)または 110(警察)にご連絡ください。日本国内での薬の処方は日本の医師免許を持つ医師のみが行えるため、
            ネパールの処方箋は日本の薬局では使えません。診察や処方が必要な場合は、日本の医療機関(精神科・心療内科)の受診をご検討ください。ご予約は{" "}
            <a href="https://wa.me/9779861800547" className="font-semibold text-sage-800 underline">WhatsApp(+977 9861800547)</a> または{" "}
            <Link href="/book/" className="font-semibold text-sage-800 underline">予約フォーム</Link> から。
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-6 py-14">
        <h2 className="text-3xl md:text-4xl">Questions from Nepalis in Japan</h2>
        <div className="mt-6 border-b border-[#d6d8d2]">
          {faqs.map((f) => (
            <details key={f.question} className="group border-t border-[#d6d8d2] py-5">
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold">
                <h3 className="font-semibold">{f.question}</h3>
                <span className="text-2xl text-clay-700 transition group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="mt-3 max-w-3xl leading-8 text-[#3d4743]">{f.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 pb-14">
        <div className="bg-sage-900 p-9 text-center text-white">
          <h2 className="text-3xl">Take the first step from wherever you are in Japan</h2>
          <p className="mt-3 text-sage-100">Choose a time in Japan time and send your request. The clinic replies to confirm.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link href="/book/" className="bg-clay-700 px-6 py-3.5 text-sm font-semibold text-white hover:bg-clay-800">Book an online session</Link>
            <a href="tel:+9779861800547" className="bg-white px-6 py-3.5 text-sm font-semibold text-sage-950">{phone}</a>
          </div>
        </div>
        <p className="mt-6 text-sm leading-6 text-[#5a635e]">
          This page gives general information and is not a substitute for personal medical advice. Dr. Kushal Kharel is registered with the Nepal Medical Council
          (#27199). Online consultation has limits and is not an emergency service. Related:{" "}
          <Link href="/nepalese-abroad/east-asia/" className="underline">Japan and South Korea hub</Link>,{" "}
          <Link href="/psychiatrist-for-nepalis-abroad/" className="underline">psychiatrist for Nepalis abroad</Link>,{" "}
          <Link href="/online-psychiatrist-nepal/" className="underline">online psychiatrist</Link>.
        </p>
      </section>

      <div className="mx-auto max-w-5xl px-6 pb-20">
        <RelatedContent path={path} heading="Related reading" showCallout={false} />
      </div>
    </main>
  );
}
