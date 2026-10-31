import type { DocArticle } from "./docArticles";

// Bilingual (English + Nepali) patient guides on sexual-health conditions. Each section gives
// the English paragraph first and the Nepali paragraph second. They describe standard,
// evidence-based care and general practice at the clinic. They make no promise of results,
// contain no patient stories and give no drug names or doses.
// TODO(Dr. Kharel): review each article before it is relied on, and correct anything that does
// not match how you practise.

const CONFIDENTIAL = [
  "Confidentiality: sexual-health concerns are discussed in a private consultation, and what you share stays between you and the clinician within the limits of the law and medical ethics. You can book an in-person visit in Kalanki, Kathmandu, or an online video consultation from home or abroad, and you do not need to bring your partner or family. Call or WhatsApp +977 9861800547, or request a time at drkushalkharel.com.np/book.",
  "गोपनीयता: यौन स्वास्थ्यसम्बन्धी समस्या निजी परामर्शमा सोधिन्छ, र तपाईंले भनेको कुरा कानुन र चिकित्सकीय नैतिकताको सीमाभित्र रहेर तपाईं र चिकित्सकबीच मात्र रहन्छ। काठमाडौँको कलंकीमा प्रत्यक्ष भेट वा घर वा विदेशबाट अनलाइन भिडियो परामर्श लिन सकिन्छ, र जीवनसाथी वा परिवारलाई साथ ल्याउनै पर्दैन। +977 9861800547 मा कल वा WhatsApp गर्नुहोस्, वा drkushalkharel.com.np/book मा समय अनुरोध गर्नुहोस्।",
].join("\n");

const NOTE = [
  "This guide is general education and not a personal diagnosis or a replacement for medical care.",
  "यो जानकारी सामान्य शिक्षाका लागि हो र व्यक्तिगत निदान वा उपचारको विकल्प होइन।",
].join("\n");

export const sexualHealthArticles: DocArticle[] = [
  {
    slug: "sexual-performance-anxiety-treatment-nepal",
    title: "Sexual Performance Anxiety Treatment in Nepal",
    category: "Sexual Health",
    language: "Bilingual",
    sourceFile: "website-seo-content",
    topic: "sexual performance anxiety",
    description:
      "What sexual performance anxiety is, why worry about 'performing' can itself cause erection or ejaculation problems, and how confidential psychiatric treatment in Nepal helps. English and Nepali guide by Dr. Kushal Kharel.",
    sections: [
      {
        heading: "What is sexual performance anxiety? | यौन प्रदर्शन चिन्ता भनेको के हो?",
        body: [
          "Sexual performance anxiety is persistent worry before or during sex about whether your body will respond, whether you will satisfy your partner, or whether you will 'fail'. It affects men and women, and it is one of the most common psychological reasons for sexual difficulty.",
          "यौन प्रदर्शन चिन्ता भनेको यौन सम्पर्कअघि वा बेला आफ्नो शरीरले साथ दिन्छ कि दिँदैन, साथीलाई सन्तुष्ट पार्न सकिन्छ कि सकिँदैन, वा 'असफल' हुने हो कि भन्ने निरन्तर चिन्ता हो। यो पुरुष र महिला दुवैमा देखिन्छ र यौन समस्याका सबैभन्दा सामान्य मानसिक कारणमध्ये एक हो।",
        ].join("\n"),
      },
      {
        heading: "How worry itself causes the problem | चिन्ताले नै समस्या कसरी बढाउँछ?",
        body: [
          "Arousal needs the body to relax. Anxiety switches on the body's stress response, which works against arousal. One difficult experience leads to fear of the next, you start watching and judging yourself during sex, and the watching makes it more likely to happen again. This cycle can continue even when nothing is wrong with the body.",
          "उत्तेजनाका लागि शरीर आराम अवस्थामा हुनुपर्छ। चिन्ताले शरीरको तनाव प्रतिक्रिया सक्रिय गर्छ, जसले उत्तेजनालाई कमजोर बनाउँछ। एक पटकको कठिन अनुभवपछि अर्को पटकको डर बस्छ, यौन सम्पर्कका बेला आफैंलाई हेर्ने र जाँच्ने बानी पर्छ, र यही जाँच्ने बानीले फेरि समस्या हुने सम्भावना बढाउँछ। शरीरमा कुनै रोग नभए पनि यो चक्र चलिरहन सक्छ।",
        ].join("\n"),
      },
      {
        heading: "Common triggers | सामान्य कारणहरू",
        body: [
          "Common triggers include a first experience of losing an erection or finishing quickly, comparing yourself with pornography or friends' stories, fear of pregnancy or infection, relationship conflict, pressure after marriage, work or financial stress, depression, and general anxiety. In Nepal, silence and shame around the topic often mean people carry the worry alone for months or years.",
          "सामान्य कारणमा एक पटक इरेक्सन गुमाएको वा छिट्टै वीर्यपतन भएको अनुभव, अश्लील सामग्री वा साथीका कुरासँग तुलना, गर्भ वा संक्रमणको डर, सम्बन्धमा तनाव, विवाहपछिको दबाब, काम वा आर्थिक तनाव, डिप्रेसन र सामान्य चिन्ता पर्छन्। हाम्रो समाजमा यस विषयमा चुप लाग्ने र लाज मान्ने चलनले धेरैले महिनौँ वा वर्षौंसम्म एक्लै चिन्ता बोकिरहन्छन्।",
        ].join("\n"),
      },
      {
        heading: "How is it treated? | उपचार कसरी गरिन्छ?",
        body: [
          "Treatment starts with an assessment of your symptoms, relationship, sleep, mood, alcohol or drug use, and any medical conditions or medicines that could play a part. The main treatment is talking therapy, especially CBT and sex-therapy-style exercises that reduce self-monitoring and build comfort step by step. Treating anxiety or depression, if present, often improves sexual function too. Medicine for a physical cause or for anxiety is considered only after assessment. Most people improve with the right care, though no outcome can be promised.",
          "उपचार लक्षण, सम्बन्ध, निद्रा, मनोदशा, मदिरा वा लागूऔषधको प्रयोग, र असर पार्न सक्ने शारीरिक रोग वा औषधिको मूल्याङ्कनबाट सुरु हुन्छ। मुख्य उपचार कुराकानीमा आधारित थेरापी हो, विशेषगरी CBT र आफैंलाई जाँच्ने बानी घटाउने र क्रमशः सहज बनाउने यौन-थेरापी शैलीका अभ्यास। चिन्ता वा डिप्रेसन भए त्यसको उपचारले यौन क्षमतामा पनि सुधार ल्याउन सक्छ। शारीरिक कारण वा चिन्ताका लागि औषधि मूल्याङ्कनपछि मात्र विचार गरिन्छ। सही उपचारले धेरैलाई सुधार हुन्छ, तर नतिजाको ग्यारेन्टी दिन सकिँदैन।",
        ].join("\n"),
      },
      {
        heading: "What you can try yourself | आफैं के गर्न सकिन्छ?",
        body: [
          "Talk openly with your partner, since silence often makes pressure worse. Take the focus away from penetration or 'performance' and towards closeness and touch. Reduce pornography use, limit alcohol before sex, protect your sleep, and practise slow breathing when you notice anxiety rising. Avoid buying 'power' tablets or capsules from shops or online sellers, which can be unsafe and mask the real cause.",
          "जीवनसाथीसँग खुलेर कुरा गर्नुहोस्, किनभने चुपचाप बस्दा दबाब झन् बढ्छ। ध्यान 'प्रदर्शन' मा होइन, निकटता र स्पर्शमा लैजानुहोस्। अश्लील सामग्री घटाउनुहोस्, यौन सम्पर्कअघि मदिरा सीमित गर्नुहोस्, निद्रा जोगाउनुहोस्, र चिन्ता बढेको महसुस हुँदा ढिलो सास फेर्ने अभ्यास गर्नुहोस्। पसल वा अनलाइनबाट 'शक्तिवर्धक' चक्की वा क्याप्सुल नकिन्नुहोस्, किनभने ती असुरक्षित हुन सक्छन् र वास्तविक कारण ढाकिदिन्छन्।",
        ].join("\n"),
      },
      {
        heading: "When to see a psychiatrist | मनोचिकित्सकलाई कहिले भेट्ने?",
        body: [
          "Consider a visit if the worry has lasted more than a few weeks, you are avoiding sex or relationships, it is straining your marriage, you feel low or hopeless, or you are using alcohol or other substances to cope. If you have chest pain, diabetes, high blood pressure or take regular medicines, also tell your doctor, since these can affect sexual function.",
          "चिन्ता केही हप्ताभन्दा बढी रहेको, यौन सम्पर्क वा सम्बन्धबाट टाढा भइरहेको, वैवाहिक जीवनमा तनाव आएको, उदास वा निराश लागिरहेको, वा सामना गर्न मदिरा वा अन्य नशा प्रयोग गरिरहेको छ भने भेट्नुहोस्। छाती दुख्ने, मधुमेह, उच्च रक्तचाप वा नियमित औषधि चलिरहेको भए चिकित्सकलाई पनि बताउनुहोस्, किनभने यीले यौन क्षमतामा असर पार्न सक्छन्।",
        ].join("\n"),
      },
      {
        heading: "Confidential care with Dr. Kushal Kharel | डा. कुशल खरेलसँग गोपनीय परामर्श",
        body: CONFIDENTIAL + "\n" + NOTE,
      },
    ],
  },
  {
    slug: "erectile-dysfunction-psychological-causes-nepal-guide",
    title: "Erectile Dysfunction: Causes and Tests | स्तम्भन दोष: कारण र जाँच",
    category: "Sexual Health",
    language: "Bilingual",
    sourceFile: "website-seo-content",
    topic: "erectile dysfunction",
    description:
      "Erectile dysfunction explained in English and Nepali: physical and psychological causes, what assessment involves, treatment options and confidential care in Kathmandu or online, by Dr. Kushal Kharel.",
    sections: [
      {
        heading: "What is erectile dysfunction? | स्तम्भन दोष (Erectile Dysfunction) भनेको के हो?",
        body: [
          "Erectile dysfunction (ED) means repeatedly being unable to get or keep an erection firm enough for satisfying sex. An occasional difficulty, for example when tired, stressed or after alcohol, is common and not a disorder. It is usually considered a problem when it happens often for a few months.",
          "स्तम्भन दोष (ED) भनेको सन्तोषजनक यौन सम्पर्कका लागि पर्याप्त कडा इरेक्सन बारम्बार हुन नसक्नु वा टिकाउन नसक्नु हो। थकान, तनाव वा मदिरापछि कहिलेकाहीँ गाह्रो हुनु सामान्य हो र रोग होइन। केही महिनासम्म बारम्बार भइरहेमा मात्र समस्या मानिन्छ।",
        ].join("\n"),
      },
      {
        heading: "What causes it? | कारण के के हुन्?",
        body: [
          "Causes can be physical, psychological, or both. Physical causes include diabetes, high blood pressure, heart and blood-vessel disease, high cholesterol, obesity, low testosterone, nerve problems, smoking, heavy alcohol use and some medicines. Psychological causes include performance anxiety, stress, depression, relationship conflict, trauma and guilt or shame about sex. A rough clue is that erections that still happen on waking or during masturbation but fail with a partner often point towards a psychological component, but this needs proper assessment.",
          "कारण शारीरिक, मानसिक वा दुवै हुन सक्छन्। शारीरिक कारणमा मधुमेह, उच्च रक्तचाप, मुटु र रक्तनलीका रोग, उच्च कोलेस्ट्रोल, मोटोपन, टेस्टोस्टेरोनको कमी, स्नायु समस्या, धूम्रपान, अत्यधिक मदिरा र केही औषधि पर्छन्। मानसिक कारणमा प्रदर्शन चिन्ता, तनाव, डिप्रेसन, सम्बन्धमा द्वन्द्व, आघात र यौनप्रति अपराधबोध वा लाज पर्छन्। बिहान उठ्दा वा हस्तमैथुनमा इरेक्सन हुने तर साथीसँग नहुने भए मानसिक कारणको सङ्केत हुन सक्छ, तर यसको सही मूल्याङ्कन आवश्यक छ।",
        ].join("\n"),
      },
      {
        heading: "Why it can be an early warning sign | किन यसलाई सतर्कताको सङ्केत मान्नुपर्छ?",
        body: [
          "Because the blood vessels that supply the penis are small, ED can appear before heart disease or diabetes is diagnosed. For this reason, a first assessment should look at your general health, and blood pressure, blood sugar and cholesterol checks are often advised alongside the mental-health assessment.",
          "लिङ्गमा रगत पुर्‍याउने नली साना हुने भएकाले मुटुको रोग वा मधुमेह थाहा हुनुअघि नै ED देखिन सक्छ। त्यसैले पहिलो मूल्याङ्कनमा सामान्य स्वास्थ्य हेरिनुपर्छ, र मानसिक स्वास्थ्य मूल्याङ्कनसँगै रक्तचाप, रगतमा चिनी र कोलेस्ट्रोल जाँच सल्लाह गरिन्छ।",
        ].join("\n"),
      },
      {
        heading: "What does assessment involve? | मूल्याङ्कनमा के हुन्छ?",
        body: [
          "The clinician asks about when it began, whether it is sudden or gradual, morning erections, desire, relationship, mood, sleep, stress, smoking, alcohol, drug use and current medicines. Depending on findings, you may be advised to have blood tests or a physical examination with a physician, urologist or endocrinologist, and the psychiatric care is coordinated with them.",
          "चिकित्सकले यो कहिलेदेखि सुरु भयो, अचानक वा बिस्तारै, बिहानको इरेक्सन, इच्छा, सम्बन्ध, मनोदशा, निद्रा, तनाव, धूम्रपान, मदिरा, नशा र हाल चलिरहेका औषधिबारे सोध्छन्। निष्कर्ष अनुसार रगत जाँच वा फिजिसियन, युरोलोजिस्ट वा एन्डोक्राइनोलोजिस्टसँग शारीरिक परीक्षण सल्लाह गर्न सकिन्छ, र मनोचिकित्सा उनीहरूसँग समन्वय गरेर गरिन्छ।",
        ].join("\n"),
      },
      {
        heading: "Treatment options | उपचारका विकल्प",
        body: [
          "Treatment depends on the cause. It can include lifestyle changes (stopping smoking, reducing alcohol, exercise, weight and sleep), treating diabetes or blood pressure, reviewing medicines that may contribute, therapy for anxiety, depression or relationship issues, and prescription treatment chosen by a doctor after checking it is safe for your heart and other medicines. Never combine such treatment with other products without medical advice, and avoid unregulated 'power' products.",
          "उपचार कारणमा भर पर्छ। यसमा जीवनशैली परिवर्तन (धूम्रपान छोड्ने, मदिरा घटाउने, व्यायाम, तौल र निद्रा), मधुमेह वा रक्तचापको उपचार, असर पार्न सक्ने औषधिको समीक्षा, चिन्ता, डिप्रेसन वा सम्बन्धका समस्याका लागि थेरापी, र मुटु तथा अन्य औषधिसँग सुरक्षित छ भनी जाँचेपछि चिकित्सकले छनोट गरेको प्रेस्क्रिप्सन उपचार पर्न सक्छन्। चिकित्सकीय सल्लाहबिना अन्य उत्पादनसँग मिसाउनुहुँदैन, र नियमन नभएका 'शक्तिवर्धक' उत्पादन नलिनुहोस्।",
        ].join("\n"),
      },
      {
        heading: "Support for partners | जीवनसाथीका लागि सहयोग",
        body: [
          "ED is a medical and emotional condition and not a sign that attraction or love has gone. Partners often feel rejected or blamed. When both understand this and talk openly, treatment tends to work better, and couple sessions can be arranged if you both wish.",
          "ED चिकित्सकीय र भावनात्मक अवस्था हो, आकर्षण वा माया सकिएको सङ्केत होइन। जीवनसाथीले प्रायः आफूलाई अस्वीकार गरिएको वा दोष दिइएको महसुस गर्छन्। दुवैले यो बुझेर खुलेर कुरा गर्दा उपचार राम्रो काम गर्छ, र दुवै चाहेमा जोडी परामर्श मिलाउन सकिन्छ।",
        ].join("\n"),
      },
      {
        heading: "Confidential care with Dr. Kushal Kharel | डा. कुशल खरेलसँग गोपनीय परामर्श",
        body: CONFIDENTIAL + "\n" + NOTE,
      },
    ],
  },
  {
    slug: "premature-ejaculation-shighra-skhalan-treatment-nepal",
    title: "Premature Ejaculation Treatment in Nepal | शीघ्रपतन: कारण र उपचार",
    category: "Sexual Health",
    language: "Bilingual",
    sourceFile: "website-seo-content",
    topic: "premature ejaculation",
    description:
      "Premature ejaculation (शीघ्रपतन) explained in English and Nepali: what counts as premature, causes, behavioural techniques, medical options and confidential treatment in Kathmandu or online, by Dr. Kushal Kharel.",
    sections: [
      {
        heading: "What is premature ejaculation? | शीघ्रपतन (Premature Ejaculation) भनेको के हो?",
        body: [
          "Premature ejaculation (PE) means ejaculating sooner than you or your partner would like, with little control over it, causing distress. In the usual medical definition, lifelong PE happens within about one minute of penetration, and the problem must be present for at least six months. Many men worry without meeting this definition, and reassurance and education alone help some of them.",
          "शीघ्रपतन भनेको आफूले वा जीवनसाथीले चाहेभन्दा चाँडो, कम नियन्त्रणसहित वीर्यपतन भई मन अशान्त हुने अवस्था हो। चिकित्सकीय परिभाषामा जीवनभर रहने PE मा प्रवेशको करिब एक मिनेटभित्रै वीर्यपतन हुन्छ र समस्या कम्तीमा छ महिनादेखि हुनुपर्छ। धेरै पुरुष यो परिभाषामा नपरे पनि चिन्तित हुन्छन्, र केहीलाई जानकारी र आश्वासनले नै सहयोग गर्छ।",
        ].join("\n"),
      },
      {
        heading: "Causes | कारणहरू",
        body: [
          "Lifelong PE may involve how sensitive the body's ejaculation reflex is and, in some men, runs in families. Acquired PE, which starts later, is often linked to anxiety, stress, relationship difficulty, erectile problems, prostate or thyroid conditions, or substance use. Early rushed sexual experiences and fear of being caught can also train the body to ejaculate quickly. Often several causes overlap, and anxiety then makes it worse.",
          "जीवनभरको PE मा वीर्यपतन रिफ्लेक्सको संवेदनशीलता भूमिका खेल्न सक्छ र केही पुरुषमा यो पारिवारिक पनि हुन्छ। पछि सुरु हुने PE प्रायः चिन्ता, तनाव, सम्बन्धमा कठिनाइ, इरेक्सनको समस्या, प्रोस्टेट वा थाइरोइडका अवस्था वा नशाको प्रयोगसँग जोडिएको हुन्छ। सुरुका हतारका र पक्राउ पर्ने डरका अनुभवले पनि शरीरलाई छिटो वीर्यपतन गर्ने बानी पार्न सक्छ। प्रायः धेरै कारण मिलेका हुन्छन्, र चिन्ताले अवस्था झन् बिगार्छ।",
        ].join("\n"),
      },
      {
        heading: "Treatment options | उपचारका विकल्प",
        body: [
          "Options include behavioural techniques such as the start-stop and squeeze methods and pelvic-floor exercises, which need practice over weeks; CBT and couple counselling to reduce anxiety and pressure; treating coexisting erectile difficulty, depression or anxiety; and, after assessment, prescription medicine or topical products that a doctor judges suitable for you. Combining approaches often works better than any one alone. Do not use leftover antidepressants or products from unregulated sellers, as they can cause side effects and are not a safe way to treat PE.",
          "विकल्पमा स्टार्ट-स्टप र स्क्विज जस्ता व्यवहारगत प्रविधि र पेल्भिक फ्लोर व्यायाम (केही हप्ता अभ्यास चाहिन्छ), चिन्ता र दबाब घटाउन CBT र जोडी परामर्श, साथमा रहेको इरेक्सन समस्या, डिप्रेसन वा चिन्ताको उपचार, र मूल्याङ्कनपछि चिकित्सकले उपयुक्त ठहर्‍याएको प्रेस्क्रिप्सन औषधि वा लगाउने उत्पादन पर्छन्। एउटा मात्र उपायभन्दा मिलाएर गर्दा प्रायः राम्रो हुन्छ। बाँकी रहेका एन्टिडिप्रेसन्ट वा नियमन नभएका विक्रेताका उत्पादन नलिनुहोस्, किनभने तिनले साइड इफेक्ट गर्न सक्छन् र PE को सुरक्षित उपचार होइनन्।",
        ].join("\n"),
      },
      {
        heading: "Myths worth dropping | हटाउनुपर्ने भ्रम",
        body: [
          "Premature ejaculation is not caused by masturbation in itself, it is not a sign of weak character, and it is not a loss of 'vital fluid' that needs herbal or street remedies. It is a common, treatable condition, and shame is what usually delays help the longest.",
          "शीघ्रपतन हस्तमैथुनले मात्र हुने होइन, कमजोर चरित्रको सङ्केत पनि होइन, र जडीबुटी वा सडकछाप उपचार चाहिने 'धातु क्षय' पनि होइन। यो सामान्य र उपचार गर्न सकिने अवस्था हो, र लाजले नै प्रायः सहयोग लिन सबैभन्दा बढी ढिलो गराउँछ।",
        ].join("\n"),
      },
      {
        heading: "When to seek help | सहयोग कहिले लिने?",
        body: [
          "Seek help if it happens most times for more than a few months, causes distress or avoidance, affects your relationship, or comes with erection problems, low mood or anxiety. A new onset after years of normal function is also worth discussing, since it can have a medical cause.",
          "धेरैजसो पटक केही महिनाभन्दा बढी भइरहेको, मन अशान्त वा यौन सम्पर्कबाट टाढा हुने गरेको, सम्बन्धमा असर परेको, वा इरेक्सन समस्या, उदासी वा चिन्ता पनि भएको भए सहयोग लिनुहोस्। वर्षौं सामान्य रहेपछि नयाँ रूपमा सुरु भएको भए पनि जानकारी दिनुहोस्, किनभने त्यसको चिकित्सकीय कारण हुन सक्छ।",
        ].join("\n"),
      },
      {
        heading: "Confidential care with Dr. Kushal Kharel | डा. कुशल खरेलसँग गोपनीय परामर्श",
        body: CONFIDENTIAL + "\n" + NOTE,
      },
    ],
  },
  {
    slug: "low-sexual-desire-arousal-problems-men-women-nepal",
    title: "Low Sexual Desire Treatment in Nepal",
    category: "Sexual Health",
    language: "Bilingual",
    sourceFile: "website-seo-content",
    topic: "low sexual desire and arousal problems",
    description:
      "Low sexual desire and difficulty with arousal in men and women: causes such as stress, depression, medicines, hormones and relationship strain, and confidential psychiatric treatment in Nepal. English and Nepali guide by Dr. Kushal Kharel.",
    sections: [
      {
        heading: "What are desire and arousal problems? | यौन इच्छा र उत्तेजनाका समस्या भनेको के हो?",
        body: [
          "Sexual desire is the wish for sex, and arousal is the body and mind responding once sex starts. Problems with either, for example little interest, difficulty becoming aroused, or arousal that fades, are common in both men and women and may come and go with life stages. They count as a clinical problem when they last for months and cause distress to you or strain in the relationship.",
          "यौन इच्छा भनेको सम्भोगको चाहना हो, र उत्तेजना भनेको सम्पर्क सुरु भएपछि शरीर र मनले दिने प्रतिक्रिया हो। कम रुचि, उत्तेजित हुन गाह्रो, वा उत्तेजना बीचमै घट्ने जस्ता समस्या पुरुष र महिला दुवैमा सामान्य छन् र जीवनका चरणसँगै आउँजाउ गर्न सक्छन्। केही महिनासम्म रहेर तपाईंलाई चिन्ता वा सम्बन्धमा तनाव दिएमा मात्र यो उपचार चाहिने समस्या मानिन्छ।",
        ].join("\n"),
      },
      {
        heading: "Common causes | सामान्य कारणहरू",
        body: [
          "Common causes include stress and exhaustion, depression and anxiety, poor sleep, relationship conflict or lack of closeness, past trauma, body-image worries, alcohol or drug use, and medicines such as some antidepressants, blood-pressure medicines and hormonal contraceptives. Medical causes include diabetes, thyroid disease, low testosterone, menopause, pregnancy and the postpartum period, chronic pain and long-term illness. Several of these often act together.",
          "सामान्य कारणमा तनाव र थकान, डिप्रेसन र चिन्ता, कमजोर निद्रा, सम्बन्धमा द्वन्द्व वा निकटताको कमी, पुराना आघात, शरीरको छविबारे चिन्ता, मदिरा वा नशाको प्रयोग, र केही एन्टिडिप्रेसन्ट, रक्तचापका औषधि र हर्मोनल गर्भनिरोधक जस्ता औषधि पर्छन्। चिकित्सकीय कारणमा मधुमेह, थाइरोइड रोग, टेस्टोस्टेरोनको कमी, रजोनिवृत्ति, गर्भावस्था र सुत्केरीपछिको समय, दीर्घ दुखाइ र लामो रोग पर्छन्। प्रायः यीमध्ये धेरै कारण एकैसाथ काम गरिरहेका हुन्छन्।",
        ].join("\n"),
      },
      {
        heading: "Mind, body and relationship together | मन, शरीर र सम्बन्ध सँगै हेर्नुपर्छ",
        body: [
          "Good assessment looks at all three: your mood and stress, your physical health and medicines, and the quality of your relationship and communication. Desire between partners also often differs, and a mismatch in desire is not by itself a disorder. Often what helps most is understanding what each person needs to feel close.",
          "राम्रो मूल्याङ्कनले तीनै कुरा हेर्छ: तपाईंको मनोदशा र तनाव, शारीरिक स्वास्थ्य र औषधि, र सम्बन्ध तथा संवादको गुणस्तर। जोडीबीच इच्छा फरक हुनु पनि सामान्य हो, र इच्छामा फरक हुनु आफैंमा रोग होइन। प्रायः हरेकले निकट महसुस गर्न के चाहिन्छ भन्ने बुझ्नु नै सबैभन्दा सहयोगी हुन्छ।",
        ].join("\n"),
      },
      {
        heading: "Treatment | उपचार",
        body: [
          "Treatment targets the cause: treating depression or anxiety, adjusting a medicine in discussion with the prescribing doctor (never stop a medicine on your own), improving sleep and stress, therapy such as CBT or couple counselling, and gradual exercises to rebuild comfort and closeness. Referral to a gynaecologist, physician or endocrinologist is arranged where hormones or another medical condition may be involved. No quick fix exists, and unregulated 'booster' products are not advised.",
          "उपचारले कारणलाई लक्ष्य गर्छ: डिप्रेसन वा चिन्ताको उपचार, औषधि लेख्ने चिकित्सकसँग छलफल गरी औषधि मिलाउने (आफैं औषधि कहिल्यै नरोक्नुहोस्), निद्रा र तनाव सुधार, CBT वा जोडी परामर्श जस्ता थेरापी, र सहजता तथा निकटता पुनः बनाउने क्रमिक अभ्यास। हर्मोन वा अन्य चिकित्सकीय अवस्था सम्बद्ध हुन सक्ने भए स्त्रीरोग विशेषज्ञ, फिजिसियन वा एन्डोक्राइनोलोजिस्टकहाँ रेफर गरिन्छ। छिटो समाधान हुँदैन, र नियमन नभएका 'बुस्टर' उत्पादन सल्लाह गरिँदैन।",
        ].join("\n"),
      },
      {
        heading: "Who should come | को आउन सक्छन्?",
        body: [
          "Men, women and couples are all welcome, and you can come alone. Women are free to say if they would prefer to discuss the topic in a particular way, and the clinician will respect this. Safety matters too: if sex is happening under pressure, force or fear, that is a separate and serious concern, and it can be discussed in confidence.",
          "पुरुष, महिला र जोडी सबै आउन सक्छन्, र एक्लै आउन पनि सकिन्छ। महिलाले आफूलाई कसरी छलफल गर्न सहज हुन्छ भनी भन्न स्वतन्त्र छन्, र चिकित्सकले त्यसको सम्मान गर्छन्। सुरक्षा पनि महत्त्वपूर्ण छ: दबाब, जबरजस्ती वा डरमा यौन सम्पर्क भइरहेको छ भने त्यो छुट्टै र गम्भीर विषय हो, र गोपनीयतामा छलफल गर्न सकिन्छ।",
        ].join("\n"),
      },
      {
        heading: "Confidential care with Dr. Kushal Kharel | डा. कुशल खरेलसँग गोपनीय परामर्श",
        body: CONFIDENTIAL + "\n" + NOTE,
      },
    ],
  },
];
