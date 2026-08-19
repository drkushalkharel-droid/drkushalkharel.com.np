import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageCircle, Phone, Quote } from "lucide-react";
import { abroadGuides } from "../data/abroad";

const siteUrl = "https://drkushalkharel.com.np";
const pageUrl = `${siteUrl}/patient-testimonials`;
const title = "Patient Testimonials | Dr. Kushal Kharel";
const description =
  "Real, anonymised patient testimonials for Dr. Kushal Kharel's online and in-person psychiatric consultations, from patients in Nepal and Nepalis living abroad.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/patient-testimonials",
  },
  keywords: [
    "Dr Kushal Kharel patient reviews",
    "Nepali psychiatrist testimonials",
    "online psychiatrist Nepal reviews",
    "psychiatrist for Nepalis abroad reviews",
  ],
  openGraph: {
    title,
    description,
    url: pageUrl,
    siteName: "Dr. Kushal Kharel",
    images: [{ url: "/images/doctor.png", width: 1200, height: 630 }],
    type: "website",
  },
};

const internationalTestimonials = [
  {
    quote:
      "I was looking for psychiatric support from Nepal while living abroad and came across Dr. Kushal's online consultation service. The entire experience was straightforward and comfortable. He took time to understand my concerns and provided clear explanations rather than giving a quick response. I felt that the consultation was focused on understanding the whole situation. The flexibility of online consultation made it possible for me to seek professional help despite being outside Nepal.",
    attribution: "Confidential international patient",
  },
  {
    quote:
      "One of the things I appreciated most about my consultation was being able to speak openly without feeling judged. Dr. Kushal listened patiently and helped me organise my thoughts about what I had been experiencing. The discussion about symptoms and treatment was clear and understandable. I also appreciated having the opportunity to ask questions instead of simply receiving instructions. The online format was convenient and made it much easier to continue seeking mental health support from abroad.",
    attribution: "Confidential international patient",
  },
  {
    quote:
      "I had been postponing psychiatric consultation because I was unsure whether I really needed professional help. After speaking with Dr. Kushal, I understood my concerns differently. He explained that mental health difficulties can be assessed and treated just like other health problems. I found his approach calm, structured and non-judgemental. The online consultation was easy to arrange and allowed me to discuss my concerns from another country. It was a useful first step toward taking better care of my mental health.",
    attribution: "Confidential international patient",
  },
  {
    quote:
      "The consultation with Dr. Kushal was a positive experience. I was able to discuss concerns that I had been keeping to myself for a long time. He listened carefully and explained the possible psychological and psychiatric factors involved in a way that I could understand. I appreciated the practical guidance and the opportunity to discuss treatment options openly. Receiving psychiatric counselling online was particularly useful for me because I currently live outside Nepal.",
    attribution: "Confidential international patient",
  },
];

const nepaliTestimonials = [
  "धेरै समयदेखि आफ्नो समस्यालाई लिएर अन्योलमा थिएँ र कसैसँग खुलेर कुरा गर्न पनि गाह्रो भइरहेको थियो। Dr. Kushal सँग consultation गरेपछि पहिलो पटक आफ्नो कुरा बिना hesitation राख्न सकेँ। उहाँले ध्यानपूर्वक सुन्नुभयो र मेरो symptoms तथा समस्याको सम्भावित कारणलाई सरल भाषामा बुझाउनुभयो। Consultation पछि आफूलाई के भइरहेको छ भन्ने कुरा धेरै स्पष्ट भयो र अब के गर्ने भन्ने बारेमा पनि राम्रोसँग बुझ्न पाएँ।",
  "पहिले मानसिक स्वास्थ्यको समस्या भनेको धेरै ठूलो समस्या भएपछि मात्र psychiatrist कहाँ जानुपर्छ भन्ने लाग्थ्यो। Dr. Kushal सँग कुरा गरेपछि आफ्नो symptoms लाई समयमै बुझ्नु र आवश्यक सहयोग लिनु पनि महत्वपूर्ण रहेछ भन्ने महसुस भयो। उहाँले मेरो कुरा धैर्यपूर्वक सुन्नुभयो र कुनै judgement गर्नुभएन। Consultation को क्रममा धेरै कुराहरू बुझ्न पाएँ र आफ्नो मानसिक स्वास्थ्यप्रति पहिलेभन्दा धेरै सचेत भएको छु।",
  "मलाई लामो समयदेखि anxiety र धेरै सोच्ने समस्याले दैनिक जीवनमा असर गरिरहेको थियो। आफूले मात्र नियन्त्रण गर्न खोज्दा झन् गाह्रो भइरहेको थियो। Dr. Kushal सँग consultation गरेपछि मेरो समस्या के हो र किन भइरहेको हुन सक्छ भन्ने कुरा बुझ्न पाएँ। उहाँले औषधि र counselling दुवैको बारेमा स्पष्ट रूपमा बताउनुभयो। आफ्नो कुरा खुलेर भन्न पाउँदा नै धेरै सहज महसुस भयो।",
  "Online consultation भएकाले समय मिलाउन धेरै सजिलो भयो। सुरुमा online बाट psychiatrist सँग कुरा गर्दा कस्तो होला भन्ने लागेको थियो, तर consultation निकै सहज भयो। Dr. Kushal ले मेरो कुरा ध्यान दिएर सुन्नुभयो र आवश्यक प्रश्नहरू सोधेर समस्या बुझ्ने प्रयास गर्नुभयो। उहाँले दिएको explanation र guidance ले आफ्नो symptoms लाई बुझ्न धेरै मद्दत गर्‍यो। अहिले मानसिक स्वास्थ्यलाई लिएर पहिलेभन्दा धेरै सकारात्मक छु।",
  "आफ्नो मनमा भएका कुराहरू अरूलाई भन्न निकै गाह्रो भइरहेको थियो। Dr. Kushal सँग कुरा गर्दा भने आफूलाई comfortable महसुस भयो। उहाँले बीचमै रोक्नु भएन र मेरो कुरा पूरा सुन्नुभयो। मेरो emotions, thoughts र behaviour बीचको सम्बन्धबारे बुझ्न पाएँ। Consultation पछि आफ्नै प्रतिक्रियाहरूलाई फरक तरिकाले हेर्न थालेको छु। मानसिक स्वास्थ्यमा पनि professional help लिन सकिन्छ भन्ने कुरा राम्रोसँग बुझ्न पाएँ।",
  "म विदेशमा बसेको कारण नेपालमा psychiatrist सँग consultation गर्न अलि गाह्रो भइरहेको थियो। Online consultation को माध्यमबाट Dr. Kushal सँग कुरा गर्न पाएपछि त्यो समस्या समाधान भयो। नेपाली भाषामा आफ्नो कुरा सहज रूपमा राख्न पाउनु मेरो लागि महत्वपूर्ण थियो। उहाँले मेरो समस्या बुझेर आवश्यक guidance दिनुभयो र treatment का विकल्पहरू पनि स्पष्ट रूपमा बताउनुभयो। Consultation पछि धेरै कुरा स्पष्ट भयो र आफ्नो समस्यालाई लिएर confidence बढेको महसुस भयो।",
  "पहिले आफ्नो समस्या केवल stress होला भनेर बेवास्ता गरिरहेको थिएँ। तर बिस्तारै त्यसले मेरो काम, निद्रा र दैनिक जीवनमा असर गर्न थाल्यो। Dr. Kushal सँग consultation गरेपछि symptoms लाई गम्भीरतापूर्वक बुझ्नुपर्ने रहेछ भन्ने महसुस भयो। उहाँले मेरो कुरा सुनेर समस्या बुझाउनुभयो र आवश्यक treatment तथा counselling को बारेमा जानकारी दिनुभयो। अहिले आफ्नो मानसिक स्वास्थ्यलाई प्राथमिकता दिनुपर्छ भन्ने कुरा राम्रोसँग बुझेको छु।",
];

export default function PatientTestimonialsPage() {
  const countryTestimonials = abroadGuides.filter((guide) => guide.testimonial);

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description,
    url: pageUrl,
    inLanguage: "en",
    about: {
      "@type": "Physician",
      name: "Dr. Kushal Kharel",
      medicalSpecialty: "Psychiatry",
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: title, item: pageUrl },
    ],
  };

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 pb-14 pt-28 lg:px-8 lg:pt-32">
          <Link href="/" className="font-semibold text-sage-700">
            &larr; Back to home
          </Link>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[3px] text-sage-700">
            Patient Testimonials
          </p>
          <h1 className="mt-5 text-4xl font-bold leading-tight text-stone-950 md:text-6xl">
            What patients say about consulting Dr. Kushal Kharel
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-600">
            Names and personally identifying information have been withheld,
            with each patient's permission, to protect their privacy.
            Individual experiences and outcomes vary — read the{" "}
            <Link href="/medical-disclaimer" className="underline hover:text-sage-800">
              medical information disclaimer
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <h2 className="text-3xl font-bold text-stone-950">Nepalis living abroad</h2>
        <p className="mt-4 max-w-3xl leading-8 text-stone-600">
          Online consultations with patients across the diaspora — see also
          the{" "}
          <Link href="/nepalese-abroad" className="font-semibold text-sage-700 underline">
            country-specific guides
          </Link>{" "}
          for Nepalis abroad.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {countryTestimonials.map((guide) => (
            <figure
              key={guide.slug}
              className="flex h-full flex-col rounded-lg border border-stone-200 bg-white p-7 shadow-sm"
            >
              <Quote size={28} className="text-clay-300" aria-hidden="true" />
              <blockquote className="mt-4 flex-1 leading-7 text-stone-700">
                &ldquo;{guide.testimonial!.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 font-semibold text-sage-800">
                &mdash; {guide.testimonial!.attribution}
              </figcaption>
            </figure>
          ))}
          {internationalTestimonials.map((item, index) => (
            <figure
              key={`intl-${index}`}
              className="flex h-full flex-col rounded-lg border border-stone-200 bg-white p-7 shadow-sm"
            >
              <Quote size={28} className="text-clay-300" aria-hidden="true" />
              <blockquote className="mt-4 flex-1 leading-7 text-stone-700">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 font-semibold text-sage-800">
                &mdash; {item.attribution}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <h2 className="text-3xl font-bold text-stone-950">Patients in Nepal</h2>
          <p className="mt-4 max-w-3xl leading-8 text-stone-600">
            Shared in the patients&apos; own words, in Nepali.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {nepaliTestimonials.map((quote, index) => (
              <figure
                key={index}
                className="flex h-full flex-col rounded-lg border border-stone-200 bg-stone-50 p-7 shadow-sm"
              >
                <Quote size={28} className="text-clay-300" aria-hidden="true" />
                <blockquote className="mt-4 flex-1 leading-8 text-stone-700">
                  &ldquo;{quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 font-semibold text-sage-800">
                  &mdash; गोपनीय बिरामी (Confidential patient)
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sage-950 py-16 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold">Ready to book your own consultation?</h2>
          <p className="mt-4 text-lg leading-8 text-sage-100">
            In person in Kathmandu, or online from anywhere in the world.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="tel:+9779861800547"
              className="inline-flex items-center gap-3 rounded-lg bg-white px-8 py-4 font-semibold text-sage-950"
            >
              <Phone size={20} aria-hidden="true" />
              Call +977 9861800547
            </a>
            <a
              href="https://wa.me/9779861800547"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-lg border border-white/50 px-8 py-4 font-semibold text-white"
            >
              <MessageCircle size={20} aria-hidden="true" />
              WhatsApp
            </a>
            <a
              href="mailto:drkushalkharel@gmail.com"
              className="inline-flex items-center gap-3 rounded-lg border border-white/50 px-8 py-4 font-semibold text-white"
            >
              <Mail size={20} aria-hidden="true" />
              Email
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
