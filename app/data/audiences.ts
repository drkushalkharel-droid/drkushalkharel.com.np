export type AudiencePage = {
  slug: string;
  title: string;
  headline: string;
  shortDescription: string;
  intro: string;
  whoThisIsFor: string[];
  commonConcerns: string[];
  practicalNote: string;
  searchTerms: string[];
  faqs: { question: string; answer: string }[];
};

export const audiencePages: AudiencePage[] = [
  {
    slug: "expatriates-in-nepal",
    title: "Psychiatrist for Expatriates in Nepal",
    headline: "Psychiatric care for expatriates living in Nepal",
    shortDescription:
      "Confidential, English-language psychiatric assessment and treatment for expatriates, foreign workers and international staff living in Nepal.",
    intro:
      "Expatriates living in Nepal — NGO and INGO staff, embassy and diplomatic staff, teachers, volunteers, foreign employees and spouses of Nepali citizens — often face the same mental health conditions seen anywhere, alongside added stress from being away from familiar support systems. Dr. Kushal Kharel provides confidential, English-language psychiatric consultation, in person at the Kalanki clinic in Kathmandu or online, for expatriates who want evidence-based care without a language barrier.",
    whoThisIsFor: [
      "NGO, INGO and development sector staff based in Nepal",
      "Embassy, diplomatic and international organization staff",
      "Foreign teachers, volunteers and researchers",
      "Foreign employees of companies operating in Nepal",
      "Spouses and family members of Nepali citizens",
      "Long-term foreign residents and digital nomads",
    ],
    commonConcerns: [
      "Culture shock and adjustment stress",
      "Homesickness and isolation from usual support networks",
      "Work stress and burnout in a new environment",
      "Anxiety, panic attacks and excessive worry",
      "Depression, low motivation and sleep disturbance",
      "Alcohol use and other coping-related concerns",
      "Relationship and family stress while living abroad",
      "Difficulty navigating an unfamiliar healthcare system",
    ],
    practicalNote:
      "Consultations are conducted in English and follow the same evidence-based, DSM-5/ICD-11-based diagnostic approach used throughout this practice. If you are only in Nepal short-term, online follow-up can continue after you leave, subject to your home country's prescribing regulations.",
    searchTerms: [
      "Psychiatrist for expatriates in Nepal",
      "Foreigner mental health Kathmandu",
      "Expat psychiatrist Nepal",
      "English speaking psychiatrist Kathmandu",
    ],
    faqs: [
      {
        question: "Can expatriates in Nepal see a psychiatrist in English?",
        answer:
          "Yes. Dr. Kushal Kharel conducts consultations fully in English for expatriates and other international patients, with no language barrier in discussing symptoms, diagnosis or treatment.",
      },
      {
        question: "Is psychiatric care in Nepal confidential for foreign nationals?",
        answer:
          "Yes. All consultations, whether in-person or online, are confidential and handled with the same professional discretion given to any patient, in line with standard medical ethics.",
      },
      {
        question: "Can I get an online consultation if I'm only in Nepal temporarily?",
        answer:
          "Yes. Online consultation is available during your time in Nepal and can continue afterward for follow-up, though prescribing rules vary once you're outside Nepal, so this is discussed individually.",
      },
      {
        question: "Are common psychiatric medications available in Nepal?",
        answer:
          "Most standard antidepressants, anxiolytics, mood stabilizers and antipsychotics used internationally are available through pharmacies in Kathmandu, though availability of a specific brand can vary.",
      },
      {
        question: "Do you treat anxiety and depression related to living abroad specifically?",
        answer:
          "Yes. Adjustment-related anxiety, low mood, sleep disturbance and homesickness are common and treatable, using the same evidence-based approaches used for any presentation of these conditions.",
      },
      {
        question: "Can my spouse or family member join the consultation?",
        answer:
          "Yes, with your consent, a spouse or family member can join in person or online, which can be especially helpful when explaining your situation and history in an unfamiliar setting.",
      },
      {
        question: "Where can foreigners obtain psychiatric care in Nepal?",
        answer:
          "Foreigners in Nepal — expatriates, tourists and international staff — can get English-language psychiatric care from Dr. Kushal Kharel at his clinic in Kalanki, Kathmandu, or via online consultation, with assessment, diagnosis and prescriptions all conducted in English.",
      },
    ],
  },
  {
    slug: "english-speaking-psychiatrist",
    title: "English Speaking Psychiatrist in Nepal",
    headline: "English-speaking psychiatric care in Kathmandu, Nepal",
    shortDescription:
      "Psychiatric assessment, diagnosis and treatment conducted fully in English, for expatriates, tourists, international students and Nepalese who prefer English-language consultation.",
    intro:
      "Explaining symptoms accurately matters for getting the right diagnosis and treatment. Dr. Kushal Kharel, a Consultant Psychiatrist in Kathmandu, conducts consultations fully in English on request — no translator needed, no language barrier between you and your psychiatrist, whether you're a foreign resident, a tourist, an international student, or a Nepali speaker who is simply more comfortable discussing mental health in English.",
    whoThisIsFor: [
      "Expatriates and foreign residents living in Nepal",
      "Tourists and short-term visitors",
      "International and English-medium school or university students",
      "Nepalese who prefer to discuss mental health in English",
      "Nepalese living abroad seeking a follow-up consultation in English",
    ],
    commonConcerns: [
      "Accurately describing symptoms without a language barrier",
      "Anxiety disorders, depression and mood symptoms",
      "OCD, ADHD, bipolar disorder and other psychiatric conditions",
      "Addiction and de-addiction treatment",
      "Written summaries, reports or prescriptions in English",
    ],
    practicalNote:
      "Assessment, diagnosis, treatment planning and any written documentation can all be provided in English. This website itself is maintained in English for exactly this reason, so you can review information about your condition in the same language as your consultation.",
    searchTerms: [
      "English speaking psychiatrist in Nepal",
      "English speaking psychiatrist Kathmandu",
      "Psychiatrist for foreigners Nepal",
      "Psychiatrist without translator Kathmandu",
    ],
    faqs: [
      {
        question: "Is the entire consultation conducted in English?",
        answer:
          "Yes, on request the full consultation — history-taking, discussion of diagnosis and treatment options, and any follow-up — is conducted in English.",
      },
      {
        question: "Do I need to bring a translator?",
        answer:
          "No. Consultations can be conducted directly in English without needing a translator or family member to interpret.",
      },
      {
        question: "Can prescriptions and medical reports be written in English?",
        answer:
          "Yes, prescriptions and any requested written summaries or reports are provided in English.",
      },
      {
        question: "Is online consultation available in English for people outside Nepal?",
        answer:
          "Yes. Online consultation in English is available for international patients, tourists who have returned home, and Nepalese living abroad who prefer English.",
      },
      {
        question: "Can English-medium school or university students book a consultation?",
        answer:
          "Yes. Students at English-medium schools, colleges or universities in Nepal can book an in-person or online consultation conducted in English.",
      },
    ],
  },
  {
    slug: "tourists-in-nepal",
    title: "Mental Health Support for Tourists in Nepal",
    headline: "Mental health support for tourists and trekkers in Nepal",
    shortDescription:
      "Confidential, English-language psychiatric support for tourists and trekkers in Nepal experiencing anxiety, panic, sleep problems or needing to continue existing psychiatric medication while traveling.",
    intro:
      "Travel can bring unexpected stress — an unfamiliar environment, altitude, disrupted sleep and routine, or a mental health condition that flares up far from your usual doctor. Dr. Kushal Kharel provides confidential, English-language psychiatric consultation for tourists and trekkers in Nepal, in person in Kathmandu or online, including continuity support for travelers already taking psychiatric medication.",
    whoThisIsFor: [
      "Tourists experiencing anxiety, panic or low mood while traveling",
      "Trekkers with sleep or mood changes during a trek",
      "Travelers who need to continue an existing psychiatric medication",
      "Travelers experiencing a mental health crisis far from home",
      "Anyone wanting a confidential English-language consultation while in Nepal",
    ],
    commonConcerns: [
      "Travel-related anxiety and panic attacks",
      "Sleep disturbance and low mood during travel or trekking",
      "Continuing an existing antidepressant, anxiolytic or other psychiatric medication",
      "Acute stress reactions to an unfamiliar environment",
      "Alcohol or substance use concerns while traveling",
      "Needing an urgent psychiatric opinion far from your regular doctor",
    ],
    practicalNote:
      "This service addresses mental health symptoms — it is not a substitute for altitude sickness (acute mountain sickness) management, which is a separate medical emergency requiring immediate descent and physical evaluation. If you or a travel companion has confusion, severe breathlessness or loss of coordination at altitude, seek emergency medical evacuation immediately rather than a psychiatric consultation.",
    searchTerms: [
      "Mental health support for tourists in Nepal",
      "Psychiatrist for tourists Kathmandu",
      "Psychiatrist near Thamel",
      "English speaking psychiatrist for travelers Nepal",
    ],
    faqs: [
      {
        question: "Can tourists get a psychiatric consultation while visiting Nepal?",
        answer:
          "Yes. Tourists can book an in-person consultation in Kathmandu or an online consultation, conducted in English, for anxiety, low mood, sleep problems or other psychiatric concerns arising during travel.",
      },
      {
        question: "What should I do if I run out of my psychiatric medication while traveling in Nepal?",
        answer:
          "Contact us as soon as possible with the medication name, dose and your prescribing history — many common psychiatric medications are available in Kathmandu pharmacies, and a consultation can help arrange safe continuation.",
      },
      {
        question: "Can altitude and trekking affect mental health?",
        answer:
          "Sleep disruption, low mood and anxiety can occur during high-altitude trekking. This is distinct from acute mountain sickness, a physical medical emergency needing immediate descent — always prioritize emergency evacuation for physical altitude symptoms.",
      },
      {
        question: "Is this an emergency service for tourists in crisis?",
        answer:
          "No. For an immediate safety emergency, go to the nearest hospital emergency department or contact local emergency services first. This service is for psychiatric consultation once you are safe and stable, or for non-emergency symptoms.",
      },
      {
        question: "Can I have a follow-up consultation after I leave Nepal?",
        answer:
          "Online follow-up is possible after you return home, though prescribing rules vary by country, so ongoing medication management is usually best transferred to a local doctor once you're back.",
      },
    ],
  },
  {
    slug: "couple-relationship-counseling",
    title: "Couple and Relationship Counseling in Kathmandu, Nepal",
    headline: "Couple and relationship counseling in Kathmandu, Nepal",
    shortDescription:
      "Confidential counseling for couples facing communication breakdown, trust issues, conflict or life-transition stress, offered in-person in Kathmandu or online.",
    intro:
      "Every relationship goes through periods of strain, but persistent communication breakdown, unresolved conflict or a loss of trust can leave both partners feeling stuck. Dr. Kushal Kharel provides couple and relationship counseling in Kathmandu, working with both partners together and, when useful, individually, to address the specific issues affecting your relationship. Sessions are confidential and available in person at the Kalanki clinic or online, and this is relationship-focused work, distinct from individual therapy for one partner alone.",
    whoThisIsFor: [
      "Couples experiencing frequent conflict or communication breakdown",
      "Partners rebuilding trust after infidelity or a breach of trust",
      "Couples navigating major life transitions such as marriage, parenthood or migration",
      "Long-distance couples managing separation and reconnection",
      "Couples where one partner has a mental health condition affecting the relationship",
      "Couples where one partner's substance use is affecting the relationship",
      "Partners considering separation who want clarity before deciding",
      "Couples wanting to strengthen communication before problems escalate",
    ],
    commonConcerns: [
      "Communication breakdown and repeated arguments",
      "Loss of trust or difficulty rebuilding it after a betrayal",
      "Conflict over parenting, finances or in-laws",
      "Emotional distance or growing apart over time",
      "Stress from marriage, new parenthood or relocation",
      "Long-distance or migration-related relationship strain",
      "Impact of a partner's depression, anxiety or other mental health condition on the relationship",
      "Impact of a partner's alcohol or substance use on the relationship",
    ],
    practicalNote:
      "Sessions can include both partners together, or individual sessions with each partner as needed, depending on what the situation calls for. All sessions are confidential, available in person at the Kalanki clinic in Kathmandu or online, and can be booked by phone or WhatsApp.",
    searchTerms: [
      "Couple counseling Kathmandu",
      "Relationship therapist Nepal",
      "Marriage counseling Kathmandu",
      "Couples therapy Nepal",
      "Premarital counseling Kathmandu",
    ],
    faqs: [
      {
        question: "Is relationship counseling different from individual therapy?",
        answer:
          "Yes. Relationship counseling focuses on the dynamic between partners — communication, trust and conflict patterns — rather than one person's individual diagnosis or treatment, though individual sessions can be part of the process when useful.",
      },
      {
        question: "Do both partners need to attend every session?",
        answer:
          "Not necessarily. While joint sessions are central to relationship counseling, individual sessions with each partner are sometimes included to address concerns more openly, always with transparency about how information is used.",
      },
      {
        question: "Can you help if one partner has a mental health or substance use condition?",
        answer:
          "Yes. When a partner's depression, anxiety, or alcohol or substance use is affecting the relationship, counseling can address both the relationship dynamics and, where appropriate, coordinate individual treatment of the underlying condition.",
      },
      {
        question: "Is couple counseling confidential?",
        answer:
          "Yes. Sessions are confidential, in line with standard medical ethics, whether conducted in person or online.",
      },
      {
        question: "Do you offer premarital counseling?",
        answer:
          "Yes, couples preparing for marriage can use counseling sessions to discuss expectations, communication styles and potential areas of friction before committing.",
      },
      {
        question: "Is online couple counseling available for long-distance couples?",
        answer:
          "Yes. Online sessions work well for long-distance or migration-separated couples, and can include both partners from different locations in the same session.",
      },
      {
        question: "How many sessions does couple counseling typically take?",
        answer:
          "This varies by situation — some couples benefit from a handful of sessions focused on a specific issue, while others engage in longer-term work; this is discussed and reviewed as counseling progresses.",
      },
    ],
  },
  {
    slug: "child-adolescent-psychiatry",
    title: "Child and Adolescent Psychiatrist in Kathmandu, Nepal",
    headline: "Child and adolescent psychiatry in Kathmandu, Nepal",
    shortDescription:
      "Assessment and treatment for children and adolescents with ADHD, autism spectrum concerns, learning difficulties, anxiety, depression, behavioral problems and the effects of childhood trauma, in Kathmandu or online.",
    intro:
      "Children and adolescents can experience the same range of mental health conditions as adults, but assessment and treatment need to be developmentally appropriate and involve parents or caregivers throughout. Dr. Kushal Kharel provides child and adolescent psychiatric assessment and treatment in Kathmandu, covering conditions such as ADHD, autism spectrum concerns, learning difficulties, anxiety and depression, behavioral problems, and support for children affected by trauma or adverse childhood experiences. Detailed guides on ADHD, autism spectrum disorder and specific learning disorder are available elsewhere on this site for parents wanting to read more about a specific condition.",
    whoThisIsFor: [
      "Parents concerned about a child's attention, hyperactivity or impulsivity",
      "Parents noticing possible autism spectrum traits in a young child",
      "Children and teens struggling academically due to a possible learning difficulty",
      "Adolescents experiencing anxiety, depression or mood changes",
      "Children with behavioral problems at home or school",
      "Students experiencing school refusal or school-related anxiety",
      "Children and adolescents affected by trauma, abuse, neglect or bullying",
      "Families wanting a formal diagnostic assessment before starting treatment or school accommodations",
    ],
    commonConcerns: [
      "ADHD: inattention, hyperactivity and impulsivity",
      "Autism spectrum concerns and developmental differences",
      "Specific learning difficulties affecting reading, writing or maths",
      "Anxiety, worry and school-related fears",
      "Depression and mood changes in adolescents",
      "Behavioral problems, defiance and emotional outbursts",
      "School refusal and difficulty attending school",
      "Effects of childhood trauma and adverse experiences such as abuse, neglect, bullying, family conflict or loss",
    ],
    practicalNote:
      "Assessment involves both the child or adolescent and parents or caregivers, and, with consent, may include liaison with schools when relevant to diagnosis or support planning. Consultations are available in person at the Kalanki clinic in Kathmandu or online, and can be booked by phone or WhatsApp.",
    searchTerms: [
      "Child psychiatrist Kathmandu",
      "Adolescent psychiatrist Nepal",
      "ADHD assessment child Nepal",
      "Autism specialist Kathmandu",
      "Child therapist Nepal",
      "Teen mental health Kathmandu",
    ],
    faqs: [
      {
        question: "At what age can a child be assessed for ADHD or autism?",
        answer:
          "Assessment can begin once developmentally reliable signs are present, often from preschool age onward for autism-related concerns and typically from school age for ADHD, though this varies by child and is discussed individually.",
      },
      {
        question: "Will my child's teacher or school be involved?",
        answer:
          "Only with your consent. When useful for diagnosis or planning school accommodations, information can be shared with or gathered from teachers, but this is always coordinated with parents first.",
      },
      {
        question: "Can trauma in childhood cause lasting mental health problems?",
        answer:
          "Yes. Childhood trauma and adverse experiences such as abuse, neglect, bullying, family conflict or loss can affect a child's emotional development and mental health, and trauma-focused assessment and support are part of this practice.",
      },
      {
        question: "Do you provide a written report for schools or specialists?",
        answer:
          "Yes, a written assessment summary or report can be provided when needed for schools, other specialists or accommodation requests.",
      },
      {
        question: "Is medication always necessary for conditions like ADHD?",
        answer:
          "No. Treatment is individualized and may include behavioral strategies, parent guidance and school-based support alongside or instead of medication, depending on the child's needs and the severity of symptoms.",
      },
      {
        question: "Can you assess learning difficulties like dyslexia?",
        answer:
          "Yes, difficulties with reading, writing or maths that suggest a specific learning disorder can be assessed as part of a broader developmental and psychiatric evaluation.",
      },
      {
        question: "Are parents involved in every session?",
        answer:
          "Parent or caregiver involvement is central to child and adolescent assessment and treatment, though adolescents are also given appropriate space to speak with the psychiatrist individually as part of building trust and understanding their perspective.",
      },
    ],
  },
  {
    slug: "iq-psychological-testing",
    title: "IQ and Psychological Testing in Kathmandu, Nepal",
    headline: "IQ and psychological testing in Kathmandu, Nepal",
    shortDescription:
      "Formal, standardized IQ, personality and neuropsychological testing in Kathmandu, used to clarify diagnosis, support school placement decisions and provide objective documentation.",
    intro:
      "A clinical interview gives a strong picture of a person's mental health, but some situations call for formal, standardized testing to clarify a diagnosis or provide objective documentation. Dr. Kushal Kharel's practice offers IQ and cognitive testing, personality assessment and neuropsychological evaluation in Kathmandu, administered and interpreted by qualified professionals as part of a broader clinical assessment. Results are explained to the patient or family in a dedicated feedback session, in plain language rather than technical jargon.",
    whoThisIsFor: [
      "Parents seeking formal IQ testing to clarify a child's learning or developmental profile",
      "Families needing documentation of intellectual disability or giftedness",
      "Students requiring psychometric testing for school or university placement decisions",
      "Adults or children where ADHD needs to be distinguished from other conditions through testing",
      "People needing objective, standardized documentation beyond a clinical interview",
      "Individuals wanting a personality assessment as part of a broader evaluation",
      "Families pursuing a diagnosis of a specific learning disorder",
      "Anyone referred for neuropsychological evaluation after a neurological or developmental concern",
    ],
    commonConcerns: [
      "Clarifying a diagnosis of a specific learning disorder",
      "Assessing intellectual disability or above-average cognitive ability",
      "Distinguishing ADHD from other conditions affecting attention or learning",
      "Documentation needed for school or educational placement decisions",
      "Objective evidence for legal, insurance or academic accommodation purposes",
      "Personality assessment as part of a broader psychiatric evaluation",
      "Neuropsychological evaluation following a developmental or neurological concern",
      "Understanding a child's cognitive strengths and weaknesses in detail",
    ],
    practicalNote:
      "Testing is scheduled separately from a standard consultation, as standardized tests take longer to administer, score and interpret than a clinical interview. A feedback session follows to walk through the results and their practical implications; testing is available at the Kalanki clinic in Kathmandu, and can be booked by phone or WhatsApp.",
    searchTerms: [
      "IQ test Kathmandu",
      "Psychological testing Nepal",
      "Cognitive assessment Kathmandu",
      "Neuropsychological evaluation Nepal",
      "Personality assessment Kathmandu",
      "IQ test for child Nepal",
    ],
    faqs: [
      {
        question: "What is the difference between a clinical interview and formal psychological testing?",
        answer:
          "A clinical interview relies on history and observation, while formal testing uses standardized, validated tools to measure specific abilities such as intelligence, memory or personality traits, giving more objective, comparable results.",
      },
      {
        question: "How long does IQ or psychological testing take?",
        answer:
          "This depends on the specific tests used, but formal testing generally takes longer than a standard consultation and may be spread across more than one session.",
      },
      {
        question: "Will I get a written report after testing?",
        answer:
          "Yes, results are compiled into a report and explained in a feedback session in plain language, and a written report can be provided for schools, specialists or other purposes as needed.",
      },
      {
        question: "Can testing help decide if my child needs school accommodations?",
        answer:
          "Yes, standardized testing results are often used, alongside clinical assessment, to support requests for school accommodations or a specific educational placement.",
      },
      {
        question: "Is testing only for children?",
        answer:
          "No, adults can also undergo IQ, personality or neuropsychological testing, for example to clarify a diagnosis such as ADHD or to support workplace or legal documentation needs.",
      },
      {
        question: "Do I need a referral for psychological testing?",
        answer:
          "A referral is not required, though testing is usually most useful when combined with an initial clinical assessment to determine which tests are appropriate for your situation.",
      },
    ],
  },
  {
    slug: "medical-fitness-certificate",
    title: "Medical and Fitness-to-Work Certificates in Kathmandu, Nepal",
    headline: "Psychiatric medical and fitness-to-work certificates in Kathmandu, Nepal",
    shortDescription:
      "Psychiatric medical certificates for employment, study or travel abroad, insurance or legal purposes, and return-to-work assessments, issued after a genuine clinical assessment in Kathmandu.",
    intro:
      "Employers, schools, insurers and government offices sometimes require a formal medical certificate confirming psychiatric fitness, or documenting a period of unfitness for work or study. Dr. Kushal Kharel provides psychiatric medical certificates in Kathmandu following a genuine clinical assessment — certificates are not issued without an appropriate evaluation, in line with professional and ethical standards. This includes fitness-to-work and unfit-to-work certificates, documentation for study or travel abroad requirements, insurance or legal purposes, and return-to-work assessments after a mental health-related leave.",
    whoThisIsFor: [
      "Employees needing a fitness-to-work or unfit-to-work certificate",
      "Employers requesting a formal psychiatric fitness assessment for an employee",
      "Students needing psychiatric documentation for study abroad applications",
      "Travelers needing documentation of psychiatric fitness or medication for travel abroad",
      "People needing psychiatric documentation for insurance purposes",
      "Individuals needing documentation for a legal or administrative process",
      "Employees returning to work after mental health-related leave",
      "Anyone needing a formal medical opinion on psychiatric fitness for a specific purpose",
    ],
    commonConcerns: [
      "Fitness-to-work certification after a period of psychiatric illness",
      "Unfit-to-work certification during an active psychiatric condition",
      "Documentation for study abroad or visa-related requirements",
      "Documentation for foreign employment or travel purposes",
      "Insurance-related psychiatric documentation",
      "Legal or administrative documentation needs",
      "Return-to-work assessment and planning after mental health leave",
      "Clarifying what a certificate can and cannot state about a person's condition",
    ],
    practicalNote:
      "A certificate is issued only after an appropriate clinical assessment, which may be a single consultation or, for more complex requests, more than one visit. Turnaround time depends on the complexity of the request and any documentation you need to provide beforehand; no certificate fee is quoted here as this depends on the type of assessment, so please call or WhatsApp to discuss your specific requirement.",
    searchTerms: [
      "Fitness to work certificate Kathmandu",
      "Psychiatric medical certificate Nepal",
      "Unfit for work certificate psychiatrist",
      "Medical certificate for study abroad Nepal",
      "Return to work assessment Kathmandu",
      "Psychiatric fitness certificate Nepal",
    ],
    faqs: [
      {
        question: "Can I get a fitness-to-work certificate without a consultation?",
        answer:
          "No. A certificate is only issued after a genuine clinical assessment appropriate to what is being certified — this protects both the accuracy of the document and its acceptance by the requesting organization.",
      },
      {
        question: "How long does it take to get a medical certificate?",
        answer:
          "This depends on the type of certificate and complexity of the assessment required; straightforward requests can often be completed quickly after the assessment, while more complex ones may take longer. Discuss your timeline when booking.",
      },
      {
        question: "Can you issue a certificate for study or travel abroad?",
        answer:
          "Yes, psychiatric fitness documentation for study abroad, visa or travel purposes can be provided following an appropriate assessment of your situation.",
      },
      {
        question: "What is a return-to-work assessment?",
        answer:
          "It is an evaluation, after a period of psychiatric illness or leave, of whether and how a person is ready to resume work, which may include recommendations for a phased return or workplace adjustments.",
      },
      {
        question: "Will the certificate include details of my diagnosis?",
        answer:
          "What is included depends on what the requesting organization requires and your consent; certificates are written to answer the specific question asked (such as fitness for a role) without disclosing more clinical detail than necessary.",
      },
      {
        question: "How much does a medical certificate cost?",
        answer:
          "Fees vary depending on the type of assessment and certificate required, so please contact the clinic directly to discuss your specific need.",
      },
    ],
  },
  {
    slug: "female-counselor-kathmandu",
    title: "Female Counselor in Kathmandu, Nepal",
    headline: "Female counselor in Kathmandu, Nepal",
    shortDescription:
      "For patients who prefer to speak with a female clinician, a qualified female counselor is arranged as part of your care, based on individual need and preference.",
    intro:
      "Some patients feel more comfortable discussing certain concerns — sensitive topics like sexual health, trauma history, domestic issues, or simply a personal preference — with a female clinician. Rather than a single fixed female staff member, this practice arranges a qualified female counselor based on each patient's individual need and preference as part of their overall treatment plan. If this matters to you, simply let us know when booking, and we will arrange your care accordingly, alongside Dr. Kushal Kharel's psychiatric assessment and treatment where relevant.",
    whoThisIsFor: [
      "Patients who feel more comfortable discussing personal concerns with a woman",
      "Women wanting to discuss sexual health or reproductive mental health with a female counselor",
      "Survivors of trauma or abuse who prefer a female clinician",
      "Patients navigating domestic or family issues who prefer to speak with a woman",
      "Adolescent girls and young women who may feel more at ease with a female counselor",
      "Patients from cultural backgrounds where a same-gender clinician is preferred",
      "Couples where one partner prefers a female counselor for individual sessions",
      "Anyone who simply prefers, for any reason, to be counseled by a woman",
    ],
    commonConcerns: [
      "Sensitive topics such as sexual health or reproductive concerns",
      "Trauma, abuse or domestic violence-related concerns",
      "Family and domestic issues that feel easier to discuss with a woman",
      "Body image, self-esteem and identity concerns",
      "Anxiety and depression discussed in a same-gender setting for comfort",
      "Cultural or personal preference for a female clinician",
      "Adolescent and young women's mental health concerns",
      "Postpartum and maternal mental health concerns",
    ],
    practicalNote:
      "A qualified female counselor is arranged according to each patient's individual need, so please mention this preference when you call or message to book, ideally in advance so arrangements can be made. This can be combined with psychiatric consultation from Dr. Kushal Kharel where medication or diagnosis is also needed, and is available in person at the Kalanki clinic or, where appropriate, online.",
    searchTerms: [
      "Female counselor Kathmandu",
      "Female therapist Nepal",
      "Female counsellor Kathmandu",
      "Women's counselor Nepal",
      "Female mental health counselor Kathmandu",
    ],
    faqs: [
      {
        question: "Is there a specific female psychiatrist or counselor I will always see?",
        answer:
          "There isn't one fixed female staff member — instead, a qualified female counselor is arranged based on your individual need and preference, as part of coordinated care alongside Dr. Kushal Kharel's psychiatric assessment.",
      },
      {
        question: "How do I request a female counselor?",
        answer:
          "Simply mention your preference when you call or message to book your appointment, and this will be arranged for your care.",
      },
      {
        question: "Can a female counselor help with sensitive topics like sexual health or trauma?",
        answer:
          "Yes, many patients find it easier to discuss sensitive topics such as sexual health, trauma or domestic issues with a female clinician, and this preference is accommodated.",
      },
      {
        question: "Will I still need to see Dr. Kushal Kharel?",
        answer:
          "If medication, formal diagnosis or psychiatric management is needed, Dr. Kushal Kharel remains involved in your care alongside the female counselor, with both working together on your treatment plan.",
      },
      {
        question: "Is this service confidential?",
        answer:
          "Yes, sessions with a female counselor are confidential, in line with the same professional standards applied throughout this practice.",
      },
      {
        question: "Can adolescent girls or young women request a female counselor?",
        answer:
          "Yes, this is a common and appropriate request, and can be arranged for adolescent or young adult patients.",
      },
      {
        question: "Is a female counselor available for online consultations?",
        answer:
          "Where appropriate, arrangements can be made for online sessions as well as in-person visits at the Kalanki clinic; please discuss this when booking.",
      },
    ],
  },
  {
    slug: "cbt-therapist-kathmandu",
    title: "CBT Therapist in Kathmandu, Nepal",
    headline: "CBT therapist in Kathmandu, Nepal",
    shortDescription:
      "Structured, evidence-based Cognitive Behavioral Therapy (CBT) in Kathmandu for anxiety, depression, OCD, insomnia, anger and health anxiety, explained in plain language for first-time therapy patients.",
    intro:
      "Cognitive Behavioral Therapy (CBT) is a structured, time-limited talk therapy that helps you identify and change the thought patterns and behaviors that keep problems like anxiety or low mood going. Dr. Kushal Kharel provides CBT in Kathmandu for a range of conditions, working collaboratively with you to set clear goals, build practical skills, and practice them between sessions. If you have never done therapy before, CBT is often a good starting point, since it is concrete, goal-focused and explained in plain language rather than abstract theory.",
    whoThisIsFor: [
      "People experiencing anxiety disorders, including generalized anxiety and panic",
      "People with depression looking for a structured, skills-based approach",
      "People with OCD wanting a CBT-based treatment approach",
      "People with persistent insomnia or sleep difficulties",
      "People struggling with anger or irritability",
      "People with health anxiety or excessive worry about physical symptoms",
      "People new to therapy who want a clear, structured, time-limited approach",
      "People who prefer a practical, goal-oriented style of therapy over open-ended talk therapy",
    ],
    commonConcerns: [
      "Generalized anxiety, panic attacks and excessive worry",
      "Depression and persistent low mood",
      "Obsessive-compulsive disorder (OCD)",
      "Insomnia and other sleep difficulties",
      "Anger and irritability",
      "Health anxiety and worry about physical symptoms",
      "Negative thought patterns and unhelpful thinking habits",
      "Avoidance behaviors that maintain anxiety or low mood over time",
    ],
    practicalNote:
      "A typical course of CBT involves weekly or fortnightly sessions over a period of weeks, with specific goals set collaboratively and reviewed as you progress; the exact length depends on the condition and your response to treatment. Sessions are available in person at the Kalanki clinic in Kathmandu or online, and can be booked by phone or WhatsApp.",
    searchTerms: [
      "CBT therapist Kathmandu",
      "Cognitive behavioral therapy Nepal",
      "CBT Nepal",
      "Talk therapy Kathmandu",
      "CBT for anxiety Kathmandu",
      "CBT for depression Nepal",
    ],
    faqs: [
      {
        question: "What is CBT and how does it work?",
        answer:
          "CBT is a structured talk therapy based on the idea that thoughts, feelings and behaviors are connected — by identifying and changing unhelpful thought patterns and behaviors, symptoms of anxiety, depression and other conditions can improve.",
      },
      {
        question: "How long does a course of CBT usually take?",
        answer:
          "This varies by condition and individual response, but CBT is generally time-limited, often delivered over a set number of weekly or fortnightly sessions rather than open-ended ongoing therapy.",
      },
      {
        question: "Do I need to do anything between sessions?",
        answer:
          "Yes, between-session practice — such as monitoring thoughts, trying new behaviors or practicing skills learned in session — is a core part of CBT and helps translate what's discussed into real change.",
      },
      {
        question: "Is CBT effective for OCD?",
        answer:
          "Yes, CBT, and specifically a variant called Exposure and Response Prevention (ERP), is considered a first-line, evidence-based treatment for OCD.",
      },
      {
        question: "I've never done therapy before — is CBT a good place to start?",
        answer:
          "Yes, many people find CBT approachable as a first experience of therapy, since it is concrete, goal-focused and explained step by step rather than relying on abstract or open-ended discussion.",
      },
      {
        question: "Can CBT be combined with medication?",
        answer:
          "Yes, CBT can be used alone or alongside medication, depending on the condition and severity of symptoms, and this is discussed as part of your treatment plan.",
      },
      {
        question: "Is CBT available online?",
        answer:
          "Yes, CBT sessions can be conducted online as well as in person at the Kalanki clinic in Kathmandu.",
      },
    ],
  },
  {
    slug: "erp-therapy-ocd",
    title: "Exposure and Response Prevention (ERP) Therapy in Nepal",
    headline: "Exposure and Response Prevention (ERP) therapy in Nepal",
    shortDescription:
      "Structured, clinician-guided Exposure and Response Prevention (ERP) therapy for OCD and related conditions, offered gradually and collaboratively in Kathmandu or online.",
    intro:
      "Exposure and Response Prevention (ERP) is a specialized form of Cognitive Behavioral Therapy and the first-line, evidence-based treatment for Obsessive-Compulsive Disorder (OCD), also used for certain phobias and body dysmorphic disorder. ERP works by gradually and collaboratively helping you face feared triggers while resisting the compulsive or ritual response that normally follows, allowing anxiety to reduce naturally over time rather than being controlled through rituals. This is always a structured, paced, clinician-guided process — exposures are planned together and built up gradually, never forced or done all at once, and never something you're asked to do alone without support. A separate, more detailed guide to OCD is available elsewhere on this site for readers wanting to understand the condition itself.",
    whoThisIsFor: [
      "People diagnosed with or suspected to have OCD",
      "People experiencing intrusive thoughts and compulsive rituals",
      "People with specific phobias significantly affecting daily life",
      "People with body dysmorphic disorder",
      "People who have tried general talk therapy without improvement in OCD symptoms",
      "People nervous about starting ERP who want to understand the process first",
      "Family members wanting to understand how to support a loved one through ERP",
      "People wanting a structured, evidence-based alternative or addition to medication for OCD",
    ],
    commonConcerns: [
      "Intrusive, unwanted thoughts and the anxiety they cause",
      "Compulsive rituals and checking behaviors",
      "Avoidance of situations, objects or thoughts that trigger obsessions",
      "Specific phobias such as fear of contamination, illness or specific objects",
      "Body dysmorphic disorder and appearance-related preoccupation",
      "Fear that exposure therapy will be overwhelming or forced",
      "Difficulty resisting compulsions without support",
      "Family accommodation of OCD rituals and how to reduce it safely",
    ],
    practicalNote:
      "ERP is delivered gradually, starting with less distressing exposures and building up at a pace agreed with you, with response prevention skills practiced in session and between sessions. It is available in person at the Kalanki clinic in Kathmandu or online, and can be combined with medication when appropriate; book by phone or WhatsApp.",
    searchTerms: [
      "ERP therapy Nepal",
      "Exposure and response prevention Kathmandu",
      "OCD therapy Nepal",
      "OCD treatment Kathmandu",
      "ERP for OCD Nepal",
      "OCD therapist Kathmandu",
    ],
    faqs: [
      {
        question: "What is ERP and how is it different from regular CBT?",
        answer:
          "ERP is a specialized form of CBT designed specifically for OCD and related conditions; it focuses on gradually facing feared triggers (exposure) while resisting the urge to perform compulsions or rituals (response prevention), which is more targeted than general CBT techniques.",
      },
      {
        question: "Will I be forced to face my worst fear right away?",
        answer:
          "No. ERP is built around a gradual, paced hierarchy — starting with less distressing situations and working up collaboratively, never forcing an overwhelming exposure before you're ready.",
      },
      {
        question: "Is ERP only for OCD?",
        answer:
          "ERP is most established as a treatment for OCD, and is also used for certain specific phobias and body dysmorphic disorder, where similar avoidance and ritual patterns are present.",
      },
      {
        question: "Do I have to do exposures alone?",
        answer:
          "No. Exposures are planned and guided by the clinician, and while some practice happens between sessions, this is done with a clear plan and support, not left for you to work out alone.",
      },
      {
        question: "How effective is ERP for OCD?",
        answer:
          "ERP is considered a first-line, evidence-based treatment for OCD, with strong research support, though individual response varies and it is often most effective alongside appropriate medication when needed.",
      },
      {
        question: "Can ERP be combined with medication for OCD?",
        answer:
          "Yes, ERP and medication (typically an SSRI) are often used together for OCD, and this combination is generally more effective than either approach alone for many patients.",
      },
      {
        question: "Is there more information about OCD itself on this website?",
        answer:
          "Yes, a separate, detailed guide to OCD — covering symptoms, diagnosis and treatment options — is available elsewhere on this site.",
      },
    ],
  },
];

export function getAudiencePage(slug: string) {
  return audiencePages.find((page) => page.slug === slug);
}
