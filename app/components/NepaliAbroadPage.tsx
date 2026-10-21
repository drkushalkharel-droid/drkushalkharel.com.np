import Link from "next/link";
import { abroadGuides } from "../data/abroad";
import { abroadMeta } from "../data/abroadMeta";
import { regions, type Region } from "../data/abroadRegions";

const phone = "+977 9861800547";

export default function NepaliAbroadPage({ region }: { region?: Region }) {
  const guides = region
    ? region.countrySlugs.map((slug) => abroadGuides.find((guide) => guide.slug === slug)!).filter(Boolean)
    : abroadGuides;
  const title = region?.nepaliHeading ?? "विदेशमा रहेका नेपालीका लागि अनलाइन मनोचिकित्सा सेवा";

  return (
    <main lang="ne" className="bg-stone-50 text-stone-900">
      <section className="mx-auto max-w-6xl px-6 py-14 lg:py-20">
        <p className="text-sm font-semibold uppercase tracking-wide text-teal-800">डा. कुशल खरेल · अनलाइन भिडियो परामर्श</p>
        <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-5xl">{title}</h1>
        <p className="mt-6 max-w-4xl text-lg leading-8 text-stone-700">
          तपाईं विदेशमा हुनुहुन्छ भन्दैमा चिन्ता (anxiety), डिप्रेसन वा अन्य मानसिक स्वास्थ्य समस्याको उपचारका लागि नेपाल फर्कनु पर्दैन।
          नेपालका कन्सल्टेन्ट साइकाइट्रिस्ट तथा प्रमाणित CBT थेरापिस्ट डा. कुशल खरेलसँग Google Meet वा WhatsApp भिडियोमार्फत नेपाली वा अंग्रेजीमा परामर्श लिन सक्नुहुन्छ।
        </p>
        <p className="mt-4 max-w-4xl leading-7 text-stone-700">
          प्रत्येक केसमा परामर्श (counselling) उपचारको हिस्सा हुन्छ। आवश्यकताअनुसार औषधि र संरचित मनोचिकित्सा (जस्तै CBT) पनि व्यक्तिगत उपचार योजनामा समावेश गरिन्छ। औषधि उपयुक्तता, प्रिस्क्रिप्सन र स्थानीय फार्मेसीमा उपलब्धता देशको नियम तथा चिकित्सकीय मूल्याङ्कनअनुसार फरक हुन सक्छ; नेपालबाट औषधि पठाउने व्यवस्था स्वतः सुनिश्चित हुँदैन।
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a className="rounded-lg bg-teal-800 px-5 py-3 font-semibold text-white hover:bg-teal-900" href={`https://wa.me/9779861800547?text=${encodeURIComponent("नमस्कार, म विदेशबाट अनलाइन परामर्शका लागि समय मिलाउन चाहन्छु।")}`}>WhatsApp मा समय मिलाउनुहोस्</a>
          <Link className="rounded-lg border border-stone-300 bg-white px-5 py-3 font-semibold" href="/online-psychiatrist-nepal/#video-consultations">भिडियो परामर्शबारे थप जानकारी</Link>
        </div>
        <p className="mt-4 text-sm text-stone-600">२०० भन्दा बढी व्यक्तिले अनलाइन भिडियो परामर्शबाट सेवा लिइसक्नुभएको छ; सेवा विस्तार हुँदैछ। यो संख्या क्लिनिकले उपलब्ध गराएको जानकारीमा आधारित छ।</p>
      </section>

      <section className="border-y border-stone-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-3">
          <div><h2 className="text-xl font-bold">आफ्नो स्थानीय समयअनुसार</h2><p className="mt-2 leading-7 text-stone-700">WhatsApp मा बसोबासको देश/शहर, समय क्षेत्र र काम वा पढाइको समय पठाउनुहोस्। उपलब्ध क्लिनिक समयसँग मिलाएर सम्भव समय प्रस्ताव गरी पुष्टि गरिन्छ।</p></div>
          <div><h2 className="text-xl font-bold">गोप्य र सहज भिडियो भेट</h2><p className="mt-2 leading-7 text-stone-700">आफूलाई सहज भाषा र भरपर्दो इन्टरनेट भएको Google Meet वा WhatsApp भिडियो रोज्नुहोस्। साझा कोठामा हुनुहुन्छ भने हेडफोन लगाएर निजी ठाउँ छान्नुहोस्।</p></div>
          <div><h2 className="text-xl font-bold">उपचार तपाईंको अवस्थाअनुसार</h2><p className="mt-2 leading-7 text-stone-700">लक्षण, इतिहास र हालका औषधिबारे छलफलपछि उपचार योजना बनाइन्छ। अनलाइन सेवा आकस्मिक उद्धार सेवाको विकल्प होइन। तत्काल जोखिममा स्थानीय आपत्कालीन सेवा वा नजिकको अस्पतालमा सम्पर्क गर्नुहोस्।</p></div>
        </div>
        <div className="mx-auto max-w-6xl px-6 pb-10">
          <p className="text-sm text-stone-600">देशअनुसार समय मिलान र उपलब्ध क्लिनिक समय हेर्नुहोस्: <Link className="font-semibold text-teal-800 underline" href={region ? `/nepalese-abroad/${region.slug}/#session-times` : "/nepalese-abroad/#session-times"}>स्थानीय समय र नेपाल समयको तालिका (अंग्रेजी)</Link>। समय परिवर्तन (daylight saving) हुने देशमा तालिका मौसमअनुसार फरक हुन सक्छ।</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-2xl font-bold">{region ? `${region.nepaliHeading} — देशहरू` : "४१ देशमा रहेका नेपालीका लागि सेवा जानकारी"}</h2>
        <p className="mt-3 max-w-4xl leading-7 text-stone-700">तल आफ्नो देश छान्दा त्यस देशका समय, व्यावहारिक जानकारी र आपत्कालीन स्रोतसहितको विस्तृत गाइड खुल्छ। अनलाइन परामर्शको उपलब्धता, औषधि लेख्ने अधिकार र औषधि पठाउने नियम देशअनुसार फरक हुन सक्छन्।</p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <li key={guide.slug}><Link className="block rounded-xl border border-stone-200 bg-white p-4 font-semibold text-teal-900 hover:border-teal-700" href={`/nepalese-abroad/${(regions.find((item) => item.countrySlugs.includes(guide.slug))?.slug ?? "")}/#${guide.slug}`}>
              {abroadMeta[guide.slug]?.nepaliName ?? guide.country}<span className="mt-1 block text-sm font-normal text-stone-600">{guide.country} · देशअनुसारको विस्तृत जानकारी</span>
            </Link></li>
          ))}
        </ul>
      </section>

      {!region && <section className="border-t border-stone-200 bg-white"><div className="mx-auto max-w-6xl px-6 py-12"><h2 className="text-2xl font-bold">क्षेत्रअनुसार नेपाली पृष्ठहरू</h2><div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{regions.map((item) => <Link key={item.slug} className="rounded-xl border border-stone-200 p-4 font-semibold text-teal-900 hover:border-teal-700" href={`/ne/bideshma-nepali/${item.slug}/`}>{item.nepaliHeading}</Link>)}</div></div></section>}

      <section className="mx-auto max-w-4xl px-6 py-12">
        <h2 className="text-2xl font-bold">बारम्बार सोधिने प्रश्न</h2>
        <div className="mt-5 space-y-5">
          <div><h3 className="font-bold">विदेशमै बसेर उपचार लिन सकिन्छ?</h3><p className="mt-1 leading-7 text-stone-700">धेरै अवस्थामा भिडियो परामर्शबाट मूल्याङ्कन, परामर्श र फलोअप गर्न सकिन्छ। कुन सेवा उपयुक्त हुन्छ भन्ने कुरा चिकित्सकीय मूल्याङ्कन र तपाईं बसेको देशका लागू नियमअनुसार तय हुन्छ।</p></div>
          <div><h3 className="font-bold">नेपालबाट औषधि पठाउन मिल्छ?</h3><p className="mt-1 leading-7 text-stone-700">यो देशको आयात तथा औषधि नियम, औषधिको प्रकार र स्थानीय फार्मेसीका नियममा निर्भर हुन्छ; पठाउन मिल्छ भनेर पहिल्यै ग्यारेन्टी गर्न सकिँदैन। परामर्शमा स्थानीय रूपमा औषधि प्राप्त गर्ने विकल्पबारे छलफल गरिन्छ।</p></div>
          <div><h3 className="font-bold">म कसरी समय बुक गर्ने?</h3><p className="mt-1 leading-7 text-stone-700">{phone} मा WhatsApp सन्देश पठाएर देश/शहर, स्थानीय समय क्षेत्र र आफूलाई मिल्ने समय लेख्नुहोस्। क्लिनिकले समय र शुल्क पुष्टि गरेपछि भेट तय हुन्छ।</p></div>
        </div>
        <p className="mt-8 text-sm leading-6 text-stone-600">आत्महानीको विचार, औषधिको ओभरडोज वा तत्काल सुरक्षा जोखिम छ भने अनलाइन भेटको प्रतीक्षा नगर्नुहोस्—आफ्नो देशको आपत्कालीन नम्बरमा फोन गर्नुहोस् वा नजिकको अस्पताल जानुहोस्।</p>
      </section>

      <footer className="border-t border-stone-200 bg-white"><div className="mx-auto flex max-w-6xl flex-wrap gap-5 px-6 py-8 text-sm"><Link className="underline" href={region ? `/nepalese-abroad/${region.slug}/` : "/nepalese-abroad/"}>English page</Link><Link className="underline" href="/online-psychiatrist-nepal/">अनलाइन परामर्श</Link><Link className="underline" href="/appointment/">अपोइन्टमेन्ट</Link><Link className="underline" href="/">मुख्य पृष्ठ</Link></div></footer>
    </main>
  );
}
