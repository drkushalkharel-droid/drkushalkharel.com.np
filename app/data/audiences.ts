import { paymentStatement } from "./onlineCare";

export type AudiencePage = {
  slug: string;
  title: string;
  headline: string;
  shortDescription: string;
  intro: string;
  // First-person-adjacent, jargon-free paragraph on how Dr. Kharel personally
  // approaches this specific audience/concern — not a generic clinical
  // description. See app/components/AudienceLandingPage.tsx for where it renders.
  doctorsApproach: string;
  whoThisIsFor: string[];
  commonConcerns: string[];
  practicalNote: string;
  searchTerms: string[];
  faqs: { question: string; answer: string }[];
  // Optional explanatory diagram shown between the intro and "Who this is for"
  // sections. Only set where a genuine, informative diagram exists — not
  // used as generic decoration.
  diagram?: { src: string; alt: string; caption: string };
  // Longer clinical sections shown between "Common concerns" and the FAQ. Used where a
  // separate article on the same topic was merged into this page.
  guideSections?: { heading: string; body: string; link?: { href: string; label: string } }[];
  // Nepali-language sections (rendered as lang="ne") merged in from a Nepali guide on the same topic.
  nepaliSections?: { heading: string; body: string }[];
  // A short table of facts shown in the first screen (used for prices). Only put confirmed facts here.
  factTable?: { caption: string; rows: { label: string; value: string; note?: string }[] };
  // Show "Page last updated" (from app/data/pageDates.ts) under the intro.
  showLastUpdated?: boolean;
  // A screening tool id from app/data/screening.ts to offer on this page.
  screeningId?: string;
};

export const audiencePages: AudiencePage[] = [
  {
    slug: "expatriates-in-nepal",
    doctorsApproach:
      "When an expatriate comes to see me, I don't assume the usual cultural context applies — I ask more, not less, about what's normal for them, their support system back home, and what's actually changed since moving to Nepal. Sessions run fully in English, and I'm just as direct about medication side effects and alternatives as I would be with any patient, so you're not guessing at what I'm not saying.",
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
    doctorsApproach:
      "I run the whole consultation in English if that's what puts you at ease — history, diagnosis, medication explanation, all of it — rather than switching to Nepali partway and losing precision on the details that matter. If a term doesn't have a natural English equivalent for how you're feeling, I'd rather you describe it in your own words than force it into clinical language.",
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
    doctorsApproach:
      "With a tourist or trekker, my first question is practical: how long are you actually in Nepal for, and what do you need before you leave. That shapes everything — whether we can do a short course of therapy, whether medication makes sense given the timeline, and what I write down for you to hand to a doctor back home if follow-up is needed.",
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
    doctorsApproach:
      "I see both partners together for most of the session, but I also make space for a few minutes one-on-one with each person, because some things are easier to say without the other person in the room. I'm not there to decide who's right — I'm there to help you both hear what's actually being said underneath the argument.",
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
    doctorsApproach:
      "With a younger patient, I talk to the parents first to get the history, then I make sure the child or teenager gets real time to talk to me directly, in their own words, without a parent answering for them. Where a concern turns out to need specialised child-and-adolescent input beyond general psychiatric care, I'll say so and help point you toward it rather than stretch past what I do well.",
    title: "Child & Adolescent Mental Health Care in Kathmandu, Nepal",
    headline: "Psychiatric care for children and adolescents in Kathmandu, Nepal",
    shortDescription:
      "General psychiatric assessment for children and adolescents with ADHD, autism spectrum concerns, learning difficulties, anxiety, depression, behavioral problems and the effects of childhood trauma, in Kathmandu or online.",
    intro:
      "Children and adolescents can experience the same range of mental health conditions as adults, but assessment and treatment need to be developmentally appropriate and involve parents or caregivers throughout. Dr. Kushal Kharel is a Consultant Psychiatrist who assesses and treats children and adolescents as part of general psychiatric practice — this is general psychiatric care for younger patients, not a distinct child and adolescent psychiatry subspecialty, and more complex or severe presentations may be referred to a specialist when that's a better fit. Within general practice, this covers conditions such as ADHD, autism spectrum concerns, learning difficulties, anxiety and depression, behavioral problems, and support for children affected by trauma or adverse childhood experiences. Detailed guides on ADHD, autism spectrum disorder and specific learning disorder are available elsewhere on this site for parents wanting to read more about a specific condition.",
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
    doctorsApproach:
      "Before I arrange any testing, I want to know what the result is actually going to be used for — school placement, a work requirement, your own curiosity — because that changes which test is appropriate. I sit down afterward and go through what the numbers actually mean in plain terms, since a score sheet on its own tells you very little.",
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
    doctorsApproach:
      "A fitness certificate isn't a rubber stamp for me — I do a proper assessment first, because signing off on someone's fitness for work, travel or a licence is a real medical judgment. If I have any doubt, I'll tell you directly what needs to be sorted out first rather than issue something I'm not confident in.",
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
    doctorsApproach:
      "I'm upfront that I'm male, so if you'd feel more comfortable speaking with a woman about what's going on, say so when you book and I'll help arrange a qualified female counsellor as part of your care — alongside my own psychiatric assessment where that's still useful, not instead of it. There's no need to explain or justify the preference.",
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
    doctorsApproach:
      "I run CBT as structured, between-session work, not just a conversation once a week — you'll leave most sessions with something specific to practice, and we review what happened with it next time. Where medication would speed things up or CBT alone genuinely isn't enough, I say so plainly rather than pushing therapy as the only answer.",
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
    diagram: {
      src: "/images/diagrams/cbt-thought-cycle.webp",
      alt: "Diagram of the CBT thought cycle showing thoughts, feelings and behaviors reinforcing one another in a loop",
      caption: "The CBT thought cycle: thoughts, feelings and behaviors reinforce each other, which is why CBT works on all three.",
    },
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
          "Yes. CBT sessions can be conducted by Google Meet video consultation as well as in person at the Kalanki clinic in Kathmandu, including for Nepalis living abroad.",
      },
    ],
  },
  {
    slug: "erp-therapy-ocd",
    doctorsApproach:
      "ERP only works if it's paced right, so I build the hierarchy of triggers together with the patient, starting with something genuinely manageable rather than the worst fear on the list — going too fast just teaches someone to avoid the process. I check in on what happened between sessions in detail, because the between-session practice matters as much as anything we do together in the room.",
    title: "OCD Treatment in Kathmandu: ERP Therapy and Medication",
    headline: "OCD treatment in Kathmandu, Nepal: ERP therapy and medication",
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
      "ERP is delivered gradually, starting with less distressing exposures and building up at a pace agreed with you, with response prevention skills practiced in session and between sessions. It is available in person at the Kalanki clinic in Kathmandu or online through Google Meet video consultation, where Dr. Kushal uses ERP and medication together when appropriate, including for Nepalis living abroad; book by phone or WhatsApp.",
    searchTerms: [
      "ERP therapy Nepal",
      "Exposure and response prevention Kathmandu",
      "OCD therapy Nepal",
      "OCD treatment Kathmandu",
      "ERP for OCD Nepal",
      "OCD therapist Kathmandu",
    ],
    diagram: {
      src: "/images/diagrams/erp-exposure-ladder.webp",
      alt: "ERP exposure ladder showing five graded steps from least to most anxiety-provoking triggers",
      caption: "An ERP exposure ladder: triggers are faced in small, agreed steps, from least to most anxiety-provoking.",
    },
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
        question: "Can ERP therapy be done online?",
        answer:
          "Yes. Dr. Kushal Kharel provides ERP and medication together through Google Meet video consultation. Exposures are planned in the session and practised in your own surroundings between sessions.",
      },
      {
        question: "Is there more information about OCD itself on this website?",
        answer:
          "Yes, a separate, detailed guide to OCD — covering symptoms, diagnosis and treatment options — is available elsewhere on this site.",
      },
    ],
  },
  {
    slug: "addiction-treatment-kathmandu",
    doctorsApproach:
      "I don't start an addiction consultation with a lecture — I start by understanding what the substance is actually doing for the person, because that's usually where the real treatment plan begins. Withdrawal from alcohol or sedatives can be medically dangerous, so I'm direct about when that needs to be managed safely rather than attempted alone, and family involvement is offered, never forced.",
    title: "Best Addiction Treatment in Kathmandu, Nepal",
    headline: "Best addiction treatment and alcohol counselling in Kathmandu",
    shortDescription:
      "Evidence-based addiction psychiatry and counselling in Kathmandu for alcohol, nicotine, cannabis, gambling and internet/gaming use, with medication, therapy, family support and rehab referral when needed.",
    intro:
      "There is no official ranking for \"best addiction treatment\" in Kathmandu — it's a search phrase people use when comparing options, not a clinical credential. A reasonable way to judge addiction care is a Nepal Medical Council-registered psychiatrist with genuine addiction psychiatry experience, an approach that combines medical treatment with counselling rather than one alone, and a plan that includes the family, not just the individual. Dr. Kushal Kharel is a Consultant Psychiatrist (MD Psychiatry, registration #27199) practicing in Kalanki, Kathmandu, providing assessment, withdrawal management guidance, medication where appropriate, structured counselling, and referral to residential rehabilitation when a higher level of care is needed — for alcohol, nicotine, cannabis, opioid, gambling and internet or gaming use.",
    whoThisIsFor: [
      "Anyone concerned about their own drinking or alcohol use, or looking for alcohol counselling",
      "Family members worried about a loved one's alcohol or substance use",
      "People wanting to quit nicotine, gutkha or other tobacco products",
      "People concerned about cannabis or other substance use",
      "People whose gambling has become difficult to control",
      "People whose internet, gaming or mobile use is affecting daily life",
      "Patients who have tried to cut down or stop before without lasting success",
      "Families needing referral to residential rehabilitation for more severe dependence",
    ],
    commonConcerns: [
      "Alcohol use that has become difficult to control or cut down",
      "Withdrawal symptoms when trying to stop drinking or using a substance",
      "Nicotine, gutkha and tobacco dependence",
      "Cannabis, opioid or other substance use",
      "Problem gambling and its financial and family impact",
      "Internet, gaming or mobile overuse affecting work, study or relationships",
      "Relapse after a previous attempt to quit",
      "Family conflict, denial or enabling around a loved one's substance use",
    ],
    practicalNote:
      "The first step is usually an assessment to understand the pattern of use, any withdrawal risk, and what level of care fits — outpatient counselling and medication management, or referral to residential rehabilitation for more severe dependence. Family involvement is welcomed and often genuinely improves outcomes. Sessions are available in person at the Kalanki clinic in Kathmandu or online, and can be booked by phone or WhatsApp.",
    searchTerms: [
      "Best addiction treatment in Kathmandu",
      "Best counselling for alcohol use in Kathmandu",
      "Alcohol de-addiction Kathmandu",
      "Addiction psychiatrist Nepal",
      "De-addiction center Kathmandu",
      "Alcohol rehab referral Nepal",
      "Addiction treatment doctor Kathmandu",
      "Addiction recovery specialist Nepal",
    ],
    diagram: {
      src: "/images/diagrams/addiction-craving-cycle.webp",
      alt: "Diagram of the addiction craving and reward cycle: use, dopamine spike, tolerance, withdrawal, and craving looping back to use",
      caption: "The addiction craving/reward cycle — use, dopamine spike, tolerance, withdrawal and craving reinforce each other, which is why treatment and support are needed to break it.",
    },
    faqs: [
      {
        question: "What is the best addiction treatment available in Kathmandu?",
        answer:
          "The most reliable approach combines a proper psychiatric assessment, medical management of withdrawal risk where relevant, structured counselling, and family involvement, rather than any single method alone. Dr. Kushal Kharel provides this combined approach in Kathmandu, and refers to residential rehabilitation when a higher level of care is needed.",
      },
      {
        question: "Is there good counselling for alcohol use in Kathmandu?",
        answer:
          "Yes. Dr. Kushal Kharel provides alcohol counselling alongside medical assessment at his Kalanki clinic, covering the pattern of drinking, withdrawal risk, triggers, relapse-prevention planning and, where useful, family sessions — available in person or online.",
      },
      {
        question: "Do I need to go to a rehabilitation center, or can outpatient treatment work?",
        answer:
          "This depends on severity. Many people are treated effectively as outpatients with counselling and medication where needed. More severe dependence, significant withdrawal risk, or repeated relapse may need residential rehabilitation, which is discussed and referred on when appropriate.",
      },
      {
        question: "Is medication used to treat alcohol or substance use?",
        answer:
          "Medication can help manage withdrawal safely and reduce cravings for some substances, used alongside counselling rather than instead of it. Whether medication is appropriate is decided individually after assessment.",
      },
      {
        question: "Can family members be involved in addiction treatment?",
        answer:
          "Yes, and this is encouraged. Family involvement in understanding the treatment plan, reducing enabling patterns, and supporting recovery meaningfully improves outcomes, with the patient's consent.",
      },
      {
        question: "Is addiction treatment confidential?",
        answer:
          "Yes. Addiction assessment and treatment, whether in person or online, are confidential and handled with the same professional discretion given to any patient.",
      },
      {
        question: "Do you treat gambling and internet or gaming addiction, not just substance use?",
        answer:
          "Yes. Gambling disorder and problematic internet or gaming use are treated using the same evidence-based, non-judgemental approach as substance addictions, since they share similar underlying patterns of loss of control.",
      },
    ],
  },
  {
    slug: "psychiatrist-fee-nepal",
    showLastUpdated: true,
    factTable: {
      caption: "Consultation fees at Dr. Kushal Kharel's clinic",
      rows: [
        { label: "Initial consultation", value: "NPR 800–1,500", note: "Depends on the complexity and length of the assessment." },
        { label: "First follow-up within one week of the initial visit", value: "Free", note: "Once." },
        { label: "Repeat consultation", value: "NPR 800", note: "After the free follow-up, or once the one-week window has passed." },
        { label: "Online consultation (Google Meet or WhatsApp video call)", value: "Confirmed when you book", note: "The clinic confirms the fee and the payment options before your consultation." },
        { label: "Medication", value: "Not included", note: "Bought separately at a pharmacy." },
        { label: "Medical certificate", value: "NPR 2,000", note: "Issued only when needed, after an evaluation." },
        { label: "Home visit", value: "NPR 5,000 per visit", note: "Kathmandu Valley, case by case." },
        { label: "Psychometric testing and unusual situations", value: "Confirmed before booking", note: "Call or WhatsApp +977 9861800547." },
      ],
    },
    guideSections: [
      {
        heading: "What the consultation fee includes",
        body:
          "The consultation fee covers the psychiatric assessment and consultation itself. Any prescribed medication is bought separately at a pharmacy and is not part of the clinic's fee. A receipt is given for insurance purposes. Fees for psychometric testing or unusual situations are confirmed directly with the clinic before booking.",
      },
      {
        heading: "What affects the price of a psychiatric consultation",
        body:
          "An initial assessment costs more than a follow-up because it takes longer, and that is the only reason for the difference. Within the initial range of NPR 800–1,500, the fee depends on the complexity and length of the assessment, which is why the clinic confirms the fee for your specific appointment type before you book.",
      },
      {
        heading: "Follow-up fees",
        body:
          "If you return within one week of your initial visit, that first follow-up is free, once. After that free follow-up, or once the one-week window has passed, each repeat consultation costs NPR 800.",
      },
      {
        heading: "Medical certificates and home visits",
        body:
          "A medical certificate costs NPR 2,000. It is issued only when needed, after an evaluation. A home visit costs NPR 5,000 per visit, in the Kathmandu Valley and case by case.",
        link: { href: "/home-visit-psychiatrist-nepal/", label: "Home-visit psychiatrist in Nepal" },
      },
      {
        heading: "Online consultations and paying from abroad",
        body:
          "Online consultations are held by Google Meet or WhatsApp video call, in Nepali or English. " + paymentStatement,
        link: { href: "/online-psychiatrist-nepal/", label: "How online psychiatric consultation works" },
      },
    ],
    doctorsApproach:
      "I'd rather you know the cost before you sit down than be surprised afterward — call or message and the clinic will confirm the fee for your specific appointment type up front. An initial assessment costs more than a follow-up because it takes longer, and that's the only reason for the difference.",
    title: "Psychiatrist Consultation Fees in Kathmandu, Nepal",
    headline: "What does a psychiatrist consultation cost in Kathmandu?",
    shortDescription:
      "Dr. Kushal Kharel's psychiatric consultation fees in Kathmandu: NPR 800–1,500 for an initial assessment, one free follow-up within a week, and NPR 800 for repeat consultations after that.",
    intro:
      "An initial psychiatric consultation with Dr. Kushal Kharel costs NPR 800–1,500, depending on the complexity and length of the assessment. If you return for a follow-up within one week of your initial visit, that first follow-up is free. After that free follow-up (or once the one-week window has passed), a repeat consultation costs NPR 800. Medication is charged separately at the pharmacy and is not included in the consultation fee. Call or WhatsApp +977 9861800547 to confirm the current fee for your specific situation before booking.",
    whoThisIsFor: [
      "Anyone comparing psychiatrists in Kathmandu and wanting to understand cost before booking",
      "Patients unsure whether an initial visit costs more than a follow-up",
      "Patients wanting to know if a quick follow-up after their first visit is free",
      "Patients wondering whether medication costs are included in the consultation fee",
      "Families budgeting for a child or adolescent's ongoing psychiatric care",
      "Patients who need a fee estimate before requesting reimbursement or insurance documentation",
    ],
    commonConcerns: [
      "Initial assessment cost (NPR 800–1,500)",
      "Whether a follow-up soon after the first visit is free (yes, within one week, once)",
      "Repeat consultation cost after the free follow-up window (NPR 800)",
      "Medication costs, which are separate from the consultation fee and paid at the pharmacy",
      "Cost of a medical certificate (NPR 2,000) and of a home visit (NPR 5,000)",
      "Whether reduced-cost options exist for those who need them",
    ],
    practicalNote:
      "In practice: the initial assessment is NPR 800–1,500 depending on complexity; if you come back within a week for a quick follow-up, that visit is free, once; after that, repeat consultations are NPR 800 each. A medical certificate is NPR 2,000 (only when needed, after an evaluation) and a home visit is NPR 5,000 per visit. Pricing for psychometric testing or unusual situations is confirmed directly with the clinic before booking. If cost is a genuine barrier, mention this when you call — it's worth asking rather than avoiding care altogether.",
    searchTerms: [
      "Psychiatrist fee Nepal",
      "Psychiatrist consultation cost Kathmandu",
      "Psychiatrist fee in Kathmandu",
      "How much does a psychiatrist cost in Nepal",
      "Affordable psychiatrist Kathmandu",
    ],
    faqs: [
      {
        question: "How much does a psychiatrist consultation cost in Kathmandu?",
        answer:
          "An initial consultation with Dr. Kushal Kharel costs NPR 800–1,500, depending on the complexity and length of the assessment. Repeat consultations after that are NPR 800.",
      },
      {
        question: "Is the first visit more expensive than follow-up visits?",
        answer:
          "The initial assessment (NPR 800–1,500) is more thorough than a routine follow-up and is priced accordingly. Once you've had your initial visit, repeat consultations cost NPR 800.",
      },
      {
        question: "Is a follow-up visit ever free?",
        answer:
          "Yes. If you return within one week of your initial consultation, that follow-up is free, once. After that free visit, or once the one-week window has passed, the standard repeat consultation fee of NPR 800 applies.",
      },
      {
        question: "Are medications included in the consultation fee?",
        answer:
          "No. The consultation fee covers the psychiatric assessment and consultation itself; any prescribed medications are purchased separately at a pharmacy and are not included in the clinic's fee.",
      },
      {
        question: "Can I get a fee estimate before booking?",
        answer:
          "Yes. Call or WhatsApp +977 9861800547 and describe your situation (first visit or follow-up) and you'll be given a current fee estimate before you commit to booking.",
      },
      {
        question: "What if I can't afford the standard consultation fee?",
        answer:
          "Mention this when you contact the clinic. It's worth asking directly rather than avoiding care altogether. Free guidance over text message is given in urgent cases and for people in genuine need, and Dr. Kharel's community mental-health work includes free and low-cost outreach programmes in some settings.",
      },
      {
        question: "Is the fee the same for an online consultation?",
        answer:
          "The clinic confirms the fee for your appointment type, including online consultations, when you book. Call or WhatsApp +977 9861800547 and say whether you prefer online or in person.",
      },
      {
        question: "Can I pay for an online consultation from abroad?",
        answer: paymentStatement,
      },
      {
        question: "How much does a medical certificate cost?",
        answer:
          "A medical certificate costs NPR 2,000. It is issued only when needed, after an evaluation.",
      },
      {
        question: "How much does a home visit cost?",
        answer:
          "A home visit costs NPR 5,000 per visit, in the Kathmandu Valley and case by case.",
      },
      {
        question: "Do you give a receipt for insurance or reimbursement?",
        answer:
          "Yes. A receipt is given for insurance purposes.",
      },
    ],
  },
  {
    slug: "psychiatric-hospital-vs-clinic-kathmandu",
    doctorsApproach:
      "If what you're describing needs a hospital — safety risk, severe confusion, a level of care my clinic can't provide — I'll tell you that directly and help point you toward appropriate emergency or inpatient care rather than try to manage it here. Most ongoing psychiatric care doesn't need a hospital setting, and that's the judgment I make with you at the first assessment, not a default either way.",
    title: "Psychiatric Hospital vs. Clinic in Kathmandu: What's the Difference?",
    headline: "Psychiatric hospital or psychiatric clinic — which do you need?",
    shortDescription:
      "The difference between a psychiatric hospital and a psychiatric clinic in Kathmandu, when each is appropriate, and how to know whether you need emergency hospital care or an outpatient consultation.",
    intro:
      "\"Psychiatric hospital\" and \"psychiatric clinic\" get used interchangeably in everyday conversation, but they serve different purposes, and knowing the difference can save time in an urgent situation. A psychiatric hospital provides inpatient admission, 24-hour monitoring, and emergency psychiatric care for situations involving serious safety risk, severe psychosis, or medically complex withdrawal. A psychiatric clinic, like Dr. Kushal Kharel's practice in Kalanki, Kathmandu, provides outpatient assessment, diagnosis, medication management, and psychotherapy for the great majority of mental health concerns that don't require hospital admission.",
    whoThisIsFor: [
      "Anyone unsure whether their situation needs a hospital or an outpatient clinic",
      "Families trying to find urgent psychiatric care for a loved one",
      "Patients being discharged from hospital who need ongoing outpatient follow-up",
      "People searching for a psychiatric hospital in Kathmandu who may actually need outpatient care",
      "Patients who want in-person or online outpatient consultation without hospital admission",
    ],
    commonConcerns: [
      "Not knowing whether a situation is a psychiatric emergency requiring hospital care",
      "Confusing an outpatient clinic with an inpatient hospital when searching for help",
      "Needing follow-up care after a hospital discharge",
      "Wanting ongoing medication management and therapy without hospital admission",
      "Uncertainty about where to go for a first psychiatric assessment",
    ],
    practicalNote:
      "If there is an immediate risk of self-harm or harm to others, severe confusion, an overdose, dangerous withdrawal symptoms, or an inability to stay safe, go to the nearest hospital emergency department immediately rather than booking an outpatient appointment. For the great majority of concerns — persistent low mood, anxiety, sleep problems, ADHD, OCD, addiction follow-up, and routine medication management — an outpatient psychiatric clinic is the appropriate and usually faster starting point. Dr. Kushal Kharel's clinic in Kalanki, Kathmandu provides outpatient consultation in person or online, and can help coordinate hospital referral when a higher level of care is genuinely needed.",
    searchTerms: [
      "Psychiatric hospital Kathmandu",
      "Psychiatric hospital vs clinic Nepal",
      "Mental hospital Kathmandu",
      "Psychiatric clinic near me Kathmandu",
      "Outpatient psychiatric care Nepal",
    ],
    faqs: [
      {
        question: "What's the difference between a psychiatric hospital and a psychiatric clinic?",
        answer:
          "A psychiatric hospital provides inpatient admission and 24-hour monitoring for emergencies, severe psychosis, or complex withdrawal. A psychiatric clinic provides outpatient assessment, diagnosis, medication management, and therapy — appropriate for the majority of mental health concerns that don't need admission.",
      },
      {
        question: "How do I know if I need hospital care instead of an outpatient consultation?",
        answer:
          "If there is immediate risk of self-harm or harm to others, severe confusion, an overdose, dangerous withdrawal, or inability to stay safe, go to the nearest hospital emergency department immediately. Most other concerns — mood, anxiety, sleep, addiction follow-up — are appropriately managed on an outpatient basis.",
      },
      {
        question: "Can an outpatient clinic help after I'm discharged from hospital?",
        answer:
          "Yes. Outpatient follow-up after a hospital admission — for ongoing medication management, therapy, and monitoring — is a common and important part of continued recovery, and Dr. Kushal Kharel's clinic provides this kind of follow-up care.",
      },
      {
        question: "Is Dr. Kushal Kharel's clinic a hospital?",
        answer:
          "No. It is an outpatient psychiatric clinic in Kalanki, Kathmandu, offering in-person and online consultation. For situations needing inpatient admission or emergency care, the clinic can help coordinate referral to an appropriate hospital.",
      },
      {
        question: "Can I get a referral to a psychiatric hospital if needed?",
        answer:
          "Yes. If an assessment indicates a higher level of care is needed, the clinic will discuss this directly and help coordinate appropriate hospital referral rather than continuing outpatient care alone.",
      },
    ],
  },
  {
    slug: "relationship-counselling-kathmandu",
    doctorsApproach:
      "I treat relationship difficulty as its own legitimate reason to come in, not something you need a diagnosis to justify. Where I notice depression, anxiety or another condition sitting underneath the relationship stress, I'll say so and fold that into the plan, but plenty of people just need a structured space to work through a specific problem with a partner or family member.",
    title: "Relationship Counselling in Kathmandu, Nepal",
    headline: "Relationship counselling in Kathmandu: what it is, and when to use it",
    shortDescription:
      "What relationship counselling (RC) actually is, premarital counselling before marriage, how to find a counsellor who's a good fit, and when relationship issues call for individual psychiatric care instead.",
    intro:
      "Relationship counselling is structured support — usually with both partners together, sometimes individually — for working through communication breakdown, conflict, trust issues or a major transition like marriage or parenthood, with a trained counsellor or psychiatrist facilitating rather than taking sides. It's different from individual therapy, which focuses on one person's own diagnosis or treatment. Dr. Kushal Kharel provides relationship and premarital counselling in Kalanki, Kathmandu, in person or online, and can also address an individual mental-health condition — depression, anxiety, or substance use — affecting the relationship when that's part of the picture.",
    whoThisIsFor: [
      "Couples with frequent conflict, communication breakdown or growing distance",
      "Couples preparing for marriage who want premarital counselling",
      "Partners rebuilding trust after a breach of trust",
      "Couples navigating a major transition — marriage, new parenthood, migration",
      "Anyone unsure how to find a relationship counsellor who's actually a good fit",
      "Couples where one partner's mental health or substance use is affecting the relationship",
    ],
    commonConcerns: [
      "What relationship counselling actually involves, versus individual therapy",
      "What premarital counselling covers before a wedding",
      "How to find a counsellor who's a genuine fit for your situation",
      "Whether online relationship counselling actually works",
      "Communication breakdown and repeated arguments",
      "Impact of a partner's depression, anxiety or substance use on the relationship",
    ],
    practicalNote:
      "Sessions can include both partners together or individually as needed, in person at the Kalanki clinic or online. There's no fixed number of sessions — some couples benefit from a few focused on one issue, others engage in longer-term work, reviewed as you go. Book by phone or WhatsApp.",
    searchTerms: [
      "Relationship counselling Kathmandu",
      "Relationship counselling Nepal",
      "Premarital counselling Kathmandu",
      "How to find a relationship counsellor Nepal",
      "Online relationship counselling Nepal",
    ],
    faqs: [
      {
        question: "What is relationship counselling (RC)?",
        answer:
          "Relationship counselling is structured support for a relationship — most often a couple, sometimes family members — focused on communication, conflict and trust, facilitated by a trained counsellor or psychiatrist. It's different from individual therapy, which centres on one person's own diagnosis or treatment, though the two can run alongside each other.",
      },
      {
        question: "What does premarital counselling cover?",
        answer:
          "Premarital counselling gives couples a structured space to discuss expectations before marriage — communication style, finances, family and in-law dynamics, roles and responsibilities, values, and conflict resolution — surfacing potential friction points while they're still easy to talk through, rather than after they've become entrenched.",
      },
      {
        question: "How do I find the best relationship counsellor?",
        answer:
          "There's no official ranking of relationship counsellors. Look for genuine relevant qualifications and experience, a style you and your partner both feel comfortable with, and — if a mental health condition is part of what's affecting the relationship — someone who can address that clinically too, not only the relationship dynamic. A first session is a reasonable way to judge fit before committing further.",
      },
      {
        question: "Is online relationship counselling actually effective?",
        answer:
          "Yes, for many couples, particularly for ongoing sessions once the initial dynamic is understood, and it works well for long-distance or migration-separated couples who can't attend in person together. Some situations — significant conflict, safety concerns — are better started in person.",
      },
      {
        question: "Do both partners have to attend every session?",
        answer:
          "Not necessarily. Joint sessions are central to relationship counselling, but individual sessions with each partner are sometimes included to address concerns more openly, always with transparency about how that information is used.",
      },
      {
        question: "What if one partner has a mental health condition affecting the relationship?",
        answer:
          "This is common and can be addressed on both fronts at once — the relationship dynamic through counselling, and the underlying condition (depression, anxiety, substance use) through individual psychiatric assessment and treatment, coordinated together rather than treated as separate problems.",
      },
    ],
  },
  {
    slug: "stress-anger-management-kathmandu",
    doctorsApproach:
      "I look for the pattern behind the anger or the stress — what's actually feeding it, and what's already been tried — rather than just handing over generic coping tips. If it turns out sleep, alcohol use or an underlying mood problem is driving it, we treat that directly instead of only working on the anger itself.",
    title: "Stress and Anger Management in Kathmandu, Nepal",
    headline: "Stress and anger management in Kathmandu, Nepal",
    shortDescription:
      "Structured support for chronic stress, burnout and difficulty managing anger or irritability in Kathmandu — practical skills, and when it's worth a psychiatric assessment rather than coping alone.",
    intro:
      "Stress is a normal response to pressure, but when it becomes constant, it shows up as irritability, poor sleep, headaches, low motivation and difficulty concentrating — and for some people, that pressure comes out as anger that feels hard to control. Dr. Kushal Kharel provides stress and anger management support in Kalanki, Kathmandu, in person or online, ranging from practical counselling for everyday pressure to full psychiatric assessment when stress or anger is severe, persistent, or tied to an underlying condition like depression, anxiety or intermittent explosive disorder.",
    whoThisIsFor: [
      "People with chronic work, family or academic stress affecting daily life",
      "People experiencing burnout — exhaustion, cynicism, reduced ability to function",
      "People struggling with anger or irritability that feels hard to control",
      "Families concerned about a member's angry outbursts affecting relationships",
      "People whose stress shows up physically — headaches, poor sleep, muscle tension",
      "Anyone wanting practical coping skills before stress escalates further",
    ],
    commonConcerns: [
      "Chronic stress and burnout from work, family or academic pressure",
      "Anger or irritability that feels disproportionate or hard to control",
      "Physical symptoms of stress — headaches, poor sleep, muscle tension, fatigue",
      "Impact of anger outbursts on relationships or work",
      "Distinguishing everyday stress from an underlying anxiety or mood disorder",
      "Building practical, sustainable coping strategies rather than quick fixes",
    ],
    practicalNote:
      "Not every case of stress or anger needs a psychiatric label — many people benefit from counselling focused on triggers, communication and coping skills. A fuller psychiatric assessment is useful when stress or anger is severe, persistent, affecting safety, or possibly linked to depression, anxiety or another condition. Available in person at the Kalanki clinic or online; book by phone or WhatsApp.",
    searchTerms: [
      "Stress management Kathmandu",
      "Anger management Kathmandu",
      "Anger management Nepal",
      "Burnout treatment Kathmandu",
      "Stress counselling Nepal",
      "Work stress counselling Kathmandu",
      "Burnout recovery Kathmandu",
    ],
    faqs: [
      {
        question: "When does stress need professional help rather than just coping alone?",
        answer:
          "Consider an assessment when stress is accompanied by persistent low mood, anxiety, heavy alcohol or substance use, significant sleep disturbance, thoughts of self-harm, or an inability to function at work or in relationships — not just difficult days, but a pattern that isn't easing.",
      },
      {
        question: "Is anger management therapy or medical treatment?",
        answer:
          "It can be either, depending on the underlying picture. Many people benefit from counselling focused on triggers, communication and de-escalation skills alone. When anger is tied to an underlying condition such as depression, anxiety or intermittent explosive disorder, psychiatric assessment and treatment address that directly.",
      },
      {
        question: "Can stress cause physical symptoms like headaches or stomach problems?",
        answer:
          "Yes. Chronic stress commonly produces physical symptoms — headaches, muscle tension, stomach discomfort, fatigue — through its effect on the body's stress-response system, alongside the more expected emotional symptoms like irritability and poor concentration.",
      },
      {
        question: "What's the difference between normal anger and a problem that needs treatment?",
        answer:
          "Occasional frustration is normal. It becomes worth addressing when anger is frequent, disproportionate to the situation, damages relationships or work, or is followed by regret you can't seem to act on differently next time — a pattern rather than an isolated bad day.",
      },
      {
        question: "Is burnout the same as depression?",
        answer:
          "They overlap but aren't identical. Burnout is specifically tied to chronic, unmanaged workplace or role-related stress and often improves with changes to that specific situation alongside support; depression is a broader mood disorder that can occur with or without a burnout trigger. Assessment helps clarify which — or both — is present.",
      },
    ],
  },
  {
    slug: "how-to-control-your-mind-nepal",
    doctorsApproach:
      "\"Controlling your mind\" usually isn't really the goal I end up working on with someone — it's understanding why a thought pattern keeps recurring and building specific skills to respond to it differently. I'll tell you plainly if what you're describing sounds like it needs a proper assessment rather than a technique, because sometimes it does.",
    title: "How to Control Your Mind: Practical Techniques in Nepal",
    headline: "How to control your mind: practical techniques that actually work",
    shortDescription:
      "Realistic, evidence-based techniques for managing intrusive thoughts, racing thoughts, overthinking and difficult emotions — and when persistent difficulty controlling your thoughts is worth a psychiatric assessment.",
    intro:
      "\"How to control your mind\" is one of the most common ways people search for help with racing thoughts, overthinking, intrusive thoughts, or difficulty managing emotions — and the honest starting point is that you can't fully control which thoughts show up, but you can change how you respond to them, which is where real, lasting relief comes from. Techniques like grounding, structured worry time, and cognitive behavioural approaches are genuinely effective and teachable. When overthinking, intrusive thoughts or emotional overwhelm are persistent and disrupting daily life, that's usually a sign worth a proper assessment rather than continuing to manage it alone.",
    whoThisIsFor: [
      "People experiencing racing thoughts or constant overthinking",
      "People with unwanted, intrusive thoughts that feel hard to switch off",
      "People wanting practical techniques for managing anxiety or stress in the moment",
      "People whose mind feels 'out of control' during stressful periods",
      "People who've tried self-help techniques without lasting relief",
      "Anyone wondering whether their difficulty controlling their thoughts points to an underlying condition",
    ],
    commonConcerns: [
      "Racing thoughts, especially at night or during stress",
      "Overthinking and difficulty switching off worry",
      "Intrusive, unwanted thoughts that feel distressing or shameful",
      "Difficulty concentrating because the mind keeps wandering to worries",
      "Emotional overwhelm that feels hard to regulate in the moment",
      "Wanting practical, teachable techniques rather than vague advice",
    ],
    practicalNote:
      "Techniques like grounding (bringing attention back to the present through the senses), scheduled 'worry time' (containing worry to a set period rather than letting it run all day), and cognitive restructuring (examining and challenging unhelpful thought patterns) are taught and practised collaboratively, not just handed over as a leaflet. When these alone aren't enough — because an underlying condition like GAD, OCD or depression is driving the pattern — that's assessed and treated directly. Available in person at the Kalanki clinic in Kathmandu or online; book by phone or WhatsApp.",
    searchTerms: [
      "How to control your mind Nepal",
      "How to control overthinking Kathmandu",
      "How to stop racing thoughts Nepal",
      "Mind control techniques Nepal",
      "How to control intrusive thoughts",
    ],
    faqs: [
      {
        question: "Is it actually possible to fully control your thoughts?",
        answer:
          "Not entirely, and that's an important starting point — everyone has unwanted or unhelpful thoughts sometimes, and trying to forcibly suppress them often backfires and makes them more persistent. What genuinely works is changing your relationship to the thoughts (not fighting them) and building skills that reduce how much they drive your emotions and behaviour.",
      },
      {
        question: "What's a technique I can try right now for racing thoughts?",
        answer:
          "Grounding techniques — such as naming five things you can see, four you can hear, three you can touch — bring attention back to the present moment and can interrupt a spiral of racing thoughts within a few minutes. This is a short-term tool, most useful alongside, not instead of, addressing what's driving the pattern.",
      },
      {
        question: "Does constant overthinking mean I have an anxiety disorder?",
        answer:
          "Not necessarily — everyone overthinks sometimes, especially under stress. It's worth an assessment when overthinking is persistent (most days for six months or more), hard to control, and accompanied by physical symptoms like restlessness or poor sleep, since that pattern is consistent with generalized anxiety disorder.",
      },
      {
        question: "Are intrusive thoughts a sign of something seriously wrong with me?",
        answer:
          "No. Intrusive thoughts — unwanted, sometimes disturbing thoughts that pop up uninvited — are extremely common and experienced by most people at some point. They become a clinical concern when they're frequent, highly distressing, and drive compulsive behaviours to neutralise them, which is a pattern associated with OCD and treatable.",
      },
      {
        question: "Can breathing exercises really help control my mind?",
        answer:
          "Yes, slow, deliberate breathing (particularly a longer out-breath than in-breath) genuinely activates the body's calming nervous-system response and can reduce the physical intensity of anxious or angry thoughts in the moment. It works best as one tool within a broader approach, not a standalone fix for a persistent pattern.",
      },
      {
        question: "When should I stop trying to manage this myself and see someone?",
        answer:
          "When self-help techniques bring only brief relief, the pattern keeps returning, or it's affecting your sleep, work, relationships or sense of safety, a psychiatric assessment can identify whether an underlying condition is driving it and offer more effective, lasting treatment than technique alone.",
      },
    ],
  },
  {
    slug: "psychiatry-clinic-kathmandu",
    doctorsApproach:
      "This is my own clinic in Kalanki, not a franchise or a rotating roster of doctors — you see me, and I'm the one reviewing your file at every follow-up, so the plan actually builds on what we discussed last time instead of starting over. I run it the same way whether you're there in person or joining by Google Meet.",
    title: "Psychiatry Clinic in Kathmandu, Nepal",
    headline: "Dr. Kushal Kharel's psychiatry clinic in Kalanki, Kathmandu",
    shortDescription:
      "Location, hours, what to expect on your first visit, and how to reach Dr. Kushal Kharel's outpatient psychiatry clinic in Kalanki, Kathmandu, in person or online.",
    intro:
      "Dr. Kushal Kharel's psychiatry clinic is an outpatient practice in Kalanki, Kathmandu — near Malpot Road and Kalanki Bhatbhateni Supermarket — offering psychiatric assessment, diagnosis, medication management and psychotherapy for children, adolescents, adults and older adults. It is a clinic, not a hospital: there's no inpatient admission or 24-hour emergency service, so it suits scheduled assessment and ongoing care rather than emergencies. Online consultation is available for patients elsewhere in Nepal or abroad who can't visit in person.",
    whoThisIsFor: [
      "Anyone looking for a psychiatry clinic they can visit in person in Kathmandu",
      "Patients wanting to know exactly where the clinic is and how to get there",
      "First-time patients wanting to know what a visit actually involves",
      "Patients deciding between an in-person visit and online consultation",
      "Patients needing to know clinic hours before planning a visit",
    ],
    commonConcerns: [
      "Exact clinic location and how to find it",
      "Parking and accessibility near the clinic",
      "Clinic hours and days open",
      "What happens during a first in-person visit",
      "Whether this is a hospital or an outpatient clinic",
      "Choosing between an in-person visit and online consultation",
    ],
    practicalNote:
      "The clinic is at Kalanki-14, Near Malpot Road, near Kalanki Bhatbhateni Supermarket, Kathmandu 44600, with roadside parking available nearby. Hours are Sunday–Friday 8:00 AM–10:00 PM and Saturday 10:00 AM–4:00 PM. Call or WhatsApp +977 9861800547 to book; for a psychiatric or medical emergency, go to the nearest hospital emergency department rather than waiting for a clinic appointment.",
    searchTerms: [
      "Psychiatry clinic in Kathmandu",
      "Psychiatric clinic Kathmandu",
      "Psychiatrist clinic Kalanki",
      "Mental health clinic Kathmandu",
      "Psychiatry clinic near me Kathmandu",
    ],
    faqs: [
      {
        question: "Where exactly is the psychiatry clinic located?",
        answer:
          "Kalanki-14, Near Malpot Road, near Kalanki Bhatbhateni Supermarket, Kathmandu 44600, Nepal. Roadside parking is available nearby.",
      },
      {
        question: "What are the clinic's opening hours?",
        answer:
          "Sunday to Friday, 8:00 AM to 10:00 PM, and Saturday, 10:00 AM to 4:00 PM. The clinic is not a 24-hour or emergency service.",
      },
      {
        question: "Is this a hospital or an outpatient clinic?",
        answer:
          "It's an outpatient psychiatry clinic — assessment, diagnosis, medication management and psychotherapy by appointment, with no inpatient admission or emergency department. For a psychiatric emergency, go to the nearest hospital instead.",
      },
      {
        question: "What happens during a first visit to the clinic?",
        answer:
          "A structured conversation about your main difficulties, when they started, how they affect daily life, previous treatment, physical health, current medicines, sleep and family history, ending with a shared plan for what comes next.",
      },
      {
        question: "Can I visit without booking an appointment first?",
        answer:
          "Calling or messaging ahead is strongly recommended so a suitable time can be arranged and any preparation discussed, rather than arriving without notice.",
      },
      {
        question: "Is online consultation available instead of visiting the clinic?",
        answer:
          "Yes, for patients elsewhere in Nepal or abroad, or anyone who prefers it for follow-up visits. Some situations — a first complex assessment, safety concerns, or anything needing physical examination — are better suited to an in-person visit.",
      },
    ],
  },
  {
    slug: "medication-review-second-opinion-nepal",
    doctorsApproach:
      "For a second opinion, I want to see what you're actually taking and why, not just hear a summary — bring the medicines or the prescription. I'll tell you honestly if I agree with the current plan; a second opinion isn't obligated to disagree just to justify the visit, and I won't change anything without a full assessment first.",
    title: "Medication Review & Second Opinion in Nepal",
    headline: "A second opinion on medication you're already taking",
    shortDescription:
      "Already on psychiatric medication and want an independent review? Dr. Kushal Kharel offers medication review and second-opinion consultations in Kathmandu and online across Nepal.",
    intro:
      "If you're already taking psychiatric medication — started by another doctor in Nepal, a physician abroad, or a previous prescriber — and want an independent review, Dr. Kushal Kharel offers medication review and second-opinion consultations. This isn't about automatically changing what's working; it's a fresh, structured look at your diagnosis, current medications, doses and response, so you and your doctor can decide together whether to continue, adjust or taper anything.",
    whoThisIsFor: [
      "Patients already on psychiatric medication who want an independent review",
      "People whose medication was started abroad or by a non-specialist and want specialist confirmation",
      "Patients unsure if their current dose or combination is still appropriate",
      "People experiencing side effects who want a second opinion before changing anything themselves",
      "Patients relocating to or from Kathmandu who need continuity of psychiatric care",
      "Family members seeking a second opinion on a relative's treatment plan, with the patient's consent",
    ],
    commonConcerns: [
      "Whether current medication and dose are still appropriate",
      "Bothersome side effects that haven't been addressed",
      "Long-term use of benzodiazepines or other sedatives",
      "Medication started without a clear diagnosis being explained",
      "Multiple medications prescribed together (polypharmacy)",
      "Wanting to reduce or safely stop a medication",
    ],
    practicalNote:
      "Bring (or send in advance) your current prescriptions, past reports and a note of when each medication was started and any doses that have changed. A medication review usually takes longer than a routine follow-up, since it involves going through your full history rather than a quick check-in. Never stop or change a psychiatric medication on your own before this review — some medications, particularly benzodiazepines and antidepressants taken regularly, need to be adjusted gradually under medical supervision to avoid withdrawal or relapse.",
    searchTerms: [
      "Second opinion psychiatrist Nepal",
      "Medication review Kathmandu",
      "Change psychiatrist Nepal",
      "Review psychiatric medication Nepal",
      "Psychiatric medication second opinion Kathmandu",
    ],
    faqs: [
      {
        question: "Can I get a second opinion on medication another doctor prescribed?",
        answer:
          "Yes. A second-opinion consultation reviews your diagnosis, current medications and response so far, and gives an independent view on whether the current plan still fits, without requiring you to have already decided to switch doctors.",
      },
      {
        question: "Will Dr. Kharel automatically change my medication?",
        answer:
          "No. Many patients are already on a reasonable treatment plan, and a second opinion may simply confirm that. Changes are only suggested when there's a clear clinical reason — such as inadequate response, troublesome side effects, an outdated diagnosis, or a safer alternative — and are discussed with you rather than made unilaterally.",
      },
      {
        question: "What should I bring to a medication review appointment?",
        answer:
          "Current prescriptions or medication packaging, any past psychiatric reports or discharge summaries, a rough timeline of when each medication started and any dose changes, and a list of side effects or concerns you want to raise.",
      },
      {
        question: "Is it safe to stop my psychiatric medication on my own before this review?",
        answer:
          "No. Stopping antidepressants, antipsychotics, mood stabilizers or especially benzodiazepines abruptly can cause withdrawal symptoms, rebound symptoms or relapse. Continue your current medication as prescribed and raise your concerns at the review rather than stopping beforehand.",
      },
      {
        question: "Can medication started abroad be reviewed and continued in Nepal?",
        answer:
          "Yes. Many patients return to Nepal or move to Kathmandu already taking medication started by a doctor abroad. These can be reviewed, confirmed or adjusted, and prescriptions can be continued locally where the medication is available and clinically appropriate.",
      },
      {
        question: "How is a medication review different from a first psychiatric consultation?",
        answer:
          "A first consultation usually starts from scratch with a full diagnostic assessment. A medication review starts from your existing diagnosis and treatment history and focuses specifically on whether the current medication plan is working well, though a fresh diagnostic assessment can still be part of it if needed.",
      },
    ],
  },
  {
    slug: "psychiatric-medication-side-effects",
    doctorsApproach:
      "Before I prescribe anything, I go through the realistic side effects — not the worst-case list, the actually likely ones — and what to do if they show up, so you're not caught off guard or tempted to just stop taking it. If a side effect is genuinely hard to live with, tell me; there's almost always another option worth trying rather than pushing through it silently.",
    title: "Common Side Effects of Psychiatric Medications (FAQ)",
    headline: "Common side effects of psychiatric medications, explained",
    shortDescription:
      "Plain-language FAQ on common side effects of sertraline, escitalopram, fluoxetine, amitriptyline, olanzapine, clonazepam, lorazepam and propranolol.",
    intro:
      "Side effects vary from person to person, and most people tolerate these medications reasonably well, but knowing what's common and what needs urgent attention helps you use them safely. This is general education about widely prescribed medications, not personal medical advice — your own experience should always be discussed with the doctor who prescribed it, and no psychiatric medication should be stopped or changed on your own.",
    whoThisIsFor: [
      "Patients starting one of these medications who want to know what to expect",
      "Patients already taking one of these medications who've noticed a new symptom",
      "Family members supporting someone on psychiatric medication",
      "Patients weighing treatment options with their psychiatrist",
    ],
    commonConcerns: [
      "Sertraline side effects",
      "Escitalopram side effects",
      "Fluoxetine side effects",
      "Amitriptyline side effects",
      "Olanzapine side effects",
      "Clonazepam side effects",
      "Lorazepam side effects",
      "Propranolol side effects",
    ],
    practicalNote:
      "Contact your prescriber promptly for severe, worsening or allergic-type reactions (such as rash, swelling, severe dizziness, fainting or chest pain), rather than waiting for a routine follow-up. Don't stop antidepressants, antipsychotics, benzodiazepines or propranolol abruptly on your own — several of these need a gradual taper to avoid withdrawal or rebound symptoms, and this page is not a substitute for that conversation with your own doctor.",
    searchTerms: [
      "Sertraline side effects Nepal",
      "Escitalopram side effects",
      "Fluoxetine side effects",
      "Olanzapine side effects",
      "Clonazepam side effects",
      "Psychiatric medication side effects Nepal",
    ],
    faqs: [
      {
        question: "What are the common side effects of sertraline?",
        answer:
          "Nausea or stomach upset (especially in the first one to two weeks), diarrhea, headache, sleep changes (insomnia or drowsiness), sexual side effects such as reduced libido or delayed orgasm, dry mouth, sweating, and initial jitteriness. Most of these ease within a few weeks as the body adjusts; anything severe or persistent should be discussed with your prescriber.",
      },
      {
        question: "What are the common side effects of escitalopram?",
        answer:
          "A similar profile to other SSRIs: nausea, headache, sleep changes, sexual side effects, dry mouth, sweating and occasionally mild weight change. Escitalopram is generally well tolerated with fewer drug interactions than some other antidepressants, but individual response varies.",
      },
      {
        question: "What are the common side effects of fluoxetine?",
        answer:
          "Nausea, reduced appetite, headache, sexual side effects, and — compared with some other SSRIs — a somewhat more 'activating' effect that can cause initial restlessness, agitation or insomnia in some people. Its long half-life means missed doses cause milder effects, but it also stays in the body longer after stopping.",
      },
      {
        question: "What are the common side effects of amitriptyline?",
        answer:
          "Anticholinergic effects such as dry mouth, constipation, blurred vision and difficulty urinating; drowsiness (often why it's taken at night); weight gain; and dizziness on standing up. At higher doses it can affect heart rhythm, so it's used cautiously, especially in older adults or anyone with a heart condition, and is more dangerous in overdose than SSRIs, so quantities prescribed at a time are managed carefully.",
      },
      {
        question: "What are the common side effects of olanzapine?",
        answer:
          "Significant weight gain and increased appetite, sedation, and metabolic effects such as raised blood sugar and cholesterol, which need periodic monitoring with blood tests and weight checks. Movement-related side effects are less common than with older antipsychotics but can still occur.",
      },
      {
        question: "What are the common side effects of clonazepam?",
        answer:
          "Drowsiness, dizziness, unsteadiness and fall risk (particularly in older adults), and memory or concentration difficulties. Regular use carries a real risk of tolerance and dependence, which is why it's typically prescribed short-term or reviewed regularly. Stopping abruptly after regular use can cause withdrawal, including seizures in significant dependence — any reduction should be gradual and medically supervised.",
      },
      {
        question: "What are the common side effects of lorazepam?",
        answer:
          "Similar to clonazepam: sedation, dizziness, unsteadiness and memory effects, with a real risk of dependence if used regularly over time. It acts for a shorter duration than clonazepam, so it's sometimes used for more short-term or acute anxiety. The same warning applies — never stop regular use abruptly without medical guidance.",
      },
      {
        question: "What are the common side effects of propranolol?",
        answer:
          "A slowed heart rate, low blood pressure or dizziness, fatigue, cold hands and feet, and occasionally sleep disturbance or vivid dreams. It can worsen asthma or other breathing problems, so it's used cautiously or avoided in people with those conditions. In psychiatry it's often used off-label for the physical symptoms of anxiety (such as tremor or a racing heart) rather than as a primary psychiatric medication, and shouldn't be stopped abruptly if taken regularly, since sudden withdrawal can cause rebound increases in heart rate and blood pressure.",
      },
    ],
  },
  {
    slug: "returning-to-nepal-after-abroad",
    doctorsApproach:
      "Reverse culture shock is something I take as seriously as any other adjustment difficulty, even though people often minimise it themselves. I spend time on the specific friction — family expectations, pace of life, a sense of not fitting back into a place that's supposed to feel like home — rather than treating it as something you should just get over quickly.",
    title: "Mental Health Support for Nepalis Returning from Abroad",
    headline: "Readjusting to life in Nepal after years abroad",
    shortDescription:
      "Support for reverse culture shock, reintegration stress and family pressure after returning to Nepal from a labour contract, degree or long stay abroad.",
    intro:
      "Coming home after years in the Gulf, Malaysia, Korea, Japan, Europe or the West is often expected to feel like relief, but for many it brings its own quiet strain: feeling like a stranger in your own country, struggling to fit back into family roles built around your absence, or facing pressure to show that the years away were 'worth it.' Dr. Kushal Kharel provides psychiatric support in Kathmandu, in person or online, for the specific stress of readjusting to life in Nepal after an extended period abroad — whether that means processing difficult working conditions that were endured quietly, adjusting to a slower or less structured routine, or simply feeling unexpectedly low despite finally being home.",
    whoThisIsFor: [
      "Migrant workers returning after multi-year labour contracts in the Gulf, Malaysia or elsewhere",
      "Students returning to Nepal after completing a degree abroad",
      "Anyone struggling to reintegrate into family and social life after years away",
      "Returnees experiencing reverse culture shock or feeling disconnected from life in Nepal",
      "Family members who've noticed a change in a returning relative's mood or behaviour",
      "Anyone uncertain about career or life direction after coming home",
    ],
    commonConcerns: [
      "Reverse culture shock and feeling like a stranger in one's own country",
      "Low mood or emptiness once the structure and purpose of life abroad ends",
      "Family and social pressure to show the years away 'paid off'",
      "Disappointment or financial stress if savings or plans didn't go as hoped",
      "Carryover stress, anxiety or trauma from difficult working conditions abroad",
      "Difficulty readjusting to family roles and expectations after years of independence",
      "Uncertainty about work, purpose or next steps after returning",
    ],
    practicalNote:
      "An in-person consultation at the Kalanki clinic in Kathmandu can be useful for a first, fuller conversation, with online follow-up available for anyone based outside the valley. Readjustment difficulty is not a sign of ingratitude or weakness, and it's common enough to deserve a proper conversation rather than being dismissed as something that will simply pass with time. If low mood, anxiety or distress from time abroad is severe, persistent or includes thoughts of self-harm, seek an assessment promptly rather than waiting.",
    searchTerms: [
      "Reverse culture shock Nepal",
      "Returning to Nepal after working abroad mental health",
      "Readjustment after working abroad Nepal",
      "Returnee mental health Nepal",
    ],
    faqs: [
      {
        question: "Is reverse culture shock after returning to Nepal a real thing?",
        answer:
          "Yes. After adapting to a different routine, pace of life and level of independence abroad, readjusting to family expectations, bureaucracy and daily life in Nepal can genuinely feel disorienting, even though you're back in a familiar country. This is a recognised pattern, not a personal failing.",
      },
      {
        question: "How long does it usually take to readjust after years abroad?",
        answer:
          "It varies widely and depends on how long you were away, what you experienced, and your circumstances after returning. For some it eases within months; for others, ongoing low mood, anxiety or difficulty functioning deserves a proper assessment rather than waiting indefinitely for it to resolve on its own.",
      },
      {
        question: "Can difficult working conditions abroad still affect me after I've returned?",
        answer:
          "Yes. Stress, anxiety or trauma symptoms from a difficult job, unsafe conditions, or prolonged isolation abroad don't necessarily end the moment you land back in Nepal, and can surface more clearly once the pressure of daily survival abroad is gone. This is treatable, and worth discussing rather than carrying alone.",
      },
      {
        question: "What if my family doesn't understand why I feel low after finally being home?",
        answer:
          "This is common. Family members often expect relief and celebration, which can make it harder to admit that returning feels complicated. A confidential consultation gives you space to talk about this honestly, without needing family to understand it first.",
      },
      {
        question: "Is it normal to feel uncertain about work or direction after returning to Nepal?",
        answer:
          "Yes, particularly if your original plans, savings goals or job prospects didn't unfold as expected. This uncertainty is a common and legitimate source of stress, and is addressed alongside any mood or anxiety symptoms as part of a fuller assessment.",
      },
      {
        question: "Is online consultation available for returnees living outside Kathmandu?",
        answer:
          "Yes. Online consultation is available for anyone in Nepal, useful for ongoing support after an initial assessment, while an in-person visit to the Kalanki clinic can be arranged for those able to travel to Kathmandu.",
      },
    ],
  },
  {
    slug: "corporate-mental-health-partner-nepal",
    doctorsApproach:
      "When I work with an organisation, individual employee consultations stay completely confidential from the employer — I'll discuss aggregate themes for a workshop or screening program, never a specific person's details. That boundary is what makes it safe for staff to actually use the service rather than avoid it.",
    title: "Corporate, School & College Mental Health Partner in Nepal",
    headline: "A confidential psychiatric referral partner for workplaces, schools and colleges",
    shortDescription:
      "For HR teams, company leadership, and school or college administrations in Nepal wanting a confidential referral option, crisis-management support, or a stress-management workshop for employees or students.",
    intro:
      "Organisations increasingly want a straightforward, confidential way to point employees or students toward professional mental health support rather than leaving them to manage alone. Dr. Kushal Kharel, a Consultant Psychiatrist in Kalanki, Kathmandu, is available as a referral point for companies wanting to offer employees confidential access to psychiatric assessment and treatment, and has also run crisis-management and stress-management programs directly with schools and colleges, including suicide-prevention awareness sessions and student stress-management workshops (see the Community Mental Health Programs page for documented examples). This is not a fixed package with predetermined terms — HR teams, school administrations or leadership are welcome to get in touch directly to discuss what an arrangement could look like.",
    whoThisIsFor: [
      "HR teams and company leadership wanting a confidential referral option for employee mental health",
      "School and college administrations wanting a stress-management or crisis-management program for students",
      "Employees or students experiencing stress, burnout or a mental health concern who want support outside their workplace or institution",
      "Organisations building or improving workplace wellness support",
      "Managers or teachers unsure how to support someone who seems to be struggling",
      "Companies with remote or distributed teams needing accessible online psychiatric consultation",
    ],
    commonConcerns: [
      "Confidentiality and what is or isn't shared with the employer or institution",
      "Work-related stress, burnout and anxiety affecting performance, or exam and academic stress among students",
      "How a referral pathway from HR or school staff to psychiatric consultation would work in practice",
      "Crisis-management and suicide-prevention awareness for a school or college community",
      "Supporting someone without a diagnosis affecting their standing at work or school",
      "Providing accessible online consultation for people outside Kathmandu or working remotely",
      "Guidance for managers or teachers on recognising when someone needs professional support",
    ],
    practicalNote:
      "Individual consultations remain confidential to the standard expected of any psychiatric care: session content is not shared with an employer, school or college without the individual's consent, except in the narrow circumstances required by law or immediate safety. Organisations, HR teams or school and college administrations interested in a referral arrangement, a stress-management or crisis-management workshop, or a point of contact for mental health can call or message directly to discuss what would work for you, rather than a one-size-fits-all package.",
    searchTerms: [
      "Workplace mental health Nepal",
      "Corporate mental health partner Kathmandu",
      "Employee mental health referral Nepal",
      "EAP psychiatrist Nepal",
      "School mental health program Nepal",
      "College stress management workshop Nepal",
      "Crisis management psychiatrist Nepal",
    ],
    faqs: [
      {
        question: "Can our company refer employees for psychiatric consultation?",
        answer:
          "Yes. Companies and HR teams can get in touch to discuss a referral arrangement, and employees can also be pointed to book directly, in person in Kathmandu or online, using the same confidential process as any other patient.",
      },
      {
        question: "Will anything discussed in a session be shared with the employer?",
        answer:
          "No, not without the employee's consent. Standard professional psychiatric confidentiality applies, with the same narrow safety-related exceptions that apply to any patient. An employer would not receive details of diagnosis or treatment.",
      },
      {
        question: "Is there a specific corporate package or pricing?",
        answer:
          "There's no fixed package advertised here — organisations interested in a referral arrangement, ongoing partnership, or a workplace talk are welcome to call or message directly to discuss what would suit your company and team size.",
      },
      {
        question: "How should a manager raise a concern about a struggling employee?",
        answer:
          "Managers are generally best placed to express care and point the employee toward available support (such as this referral option) rather than attempting to assess or diagnose the issue themselves. The decision to seek an assessment remains the employee's own.",
      },
      {
        question: "Can employees based outside Kathmandu or working remotely access this?",
        answer:
          "Yes. Online consultation is available for employees anywhere in Nepal, useful for both initial assessment where appropriate and ongoing follow-up, alongside in-person visits at the Kalanki clinic for those who prefer or need it.",
      },
      {
        question: "Does this replace our company's existing insurance or benefits coverage?",
        answer:
          "No. This is a referral and consultation option, not an insurance product. Any existing health insurance or benefits coverage your company provides operates separately, and employees should check their own policy for what it covers.",
      },
      {
        question: "Do you run mental health programs for schools and colleges?",
        answer:
          "Yes. Dr. Kushal Kharel has run crisis-management and stress-management programs directly with schools and colleges, including suicide-prevention awareness sessions and student stress-management workshops, documented on the Community Mental Health Programs page. School and college administrations can get in touch to discuss a program for their students.",
      },
    ],
  },
  {
    slug: "depression-treatment-kathmandu",
    guideSections: [
      {
        heading: "Is it depression or just stress?",
        body:
          "People looking for a depression doctor in Nepal often describe feeling empty, exhausted, unmotivated, tearful, irritable or disconnected from life. Stress and sadness are part of being human, especially after a loss, illness, relationship problem or financial difficulty. Depression may be present when low mood or loss of interest persists for at least two weeks and makes daily life, work, study, relationships or self-care significantly harder.\n\nDepression does not look the same in everyone. Some people feel sad; others mainly notice fatigue, body aches, poor concentration, anger, sleep changes, appetite changes or a loss of hope. Men, young people and older adults may describe depression differently. There is no need to prove that you are “depressed enough” before asking for an assessment.",
      },
      {
        heading: "Common depression symptoms",
        body:
          "Possible symptoms include feeling low, numb or hopeless; losing interest or pleasure; low energy; difficulty thinking or making decisions; feeling worthless or guilty; moving or speaking more slowly; changes in sleep or appetite; withdrawing from other people; and thoughts that life is not worth living. Symptoms can be emotional, physical and behavioural.\n\nNot every low mood is major depressive disorder, and depression can occur alongside anxiety, grief, trauma, alcohol or drug use, chronic pain and physical health conditions. A psychiatrist may also check for bipolar disorder, because episodes of unusually high energy, reduced need for sleep, impulsive behaviour or elevated mood change which treatment approach is safest.",
      },
      {
        heading: "How is depression diagnosed?",
        body:
          "There is no single blood test or brain scan that proves depression. Diagnosis is based on a careful clinical conversation about symptoms, their duration, daily functioning, medical history, current medicines, sleep, substance use, family history and safety. A doctor may recommend tests or a physical-health review if symptoms could be caused or worsened by another condition, such as thyroid problems, anaemia, nutritional deficiency or medication effects.\n\nAn assessment is not about labelling a person. It is about understanding what is happening, ruling out important causes and building a plan that fits the person’s life. You can bring a trusted family member or notes about symptoms if that makes the conversation easier.",
      },
      {
        heading: "Depression treatment: counselling, therapy and medication",
        body:
          "Effective depression treatment is personalised. Counselling can offer support during a difficult period, while structured therapies such as CBT, behavioural activation and interpersonal therapy help people change patterns that maintain low mood and rebuild daily activity, connection and confidence. Treatment may also include support for sleep, nutrition, routine, exercise, grief, relationship stress or substance use.\n\nAntidepressant medication may be recommended when depression is moderate to severe, long-lasting, recurrent, or not improving enough with therapy alone. A psychiatrist should discuss the expected benefits, possible side effects, interactions, alternatives and when treatment will be reviewed. Medicines do not erase personality or solve every life problem; when used appropriately, they can reduce symptoms enough for a person to engage with recovery.",
      },
      {
        heading: "How long does depression treatment take?",
        body:
          "Recovery is individual. Some people feel an early improvement in sleep, appetite or daily routine before mood improves. Therapy skills take practice, and medication may need time and review before its effect is clear. Follow-up appointments help monitor progress, side effects, safety and whether a different approach is needed.\n\nA temporary improvement does not mean care should stop suddenly. The plan should be reviewed with the clinician, particularly if symptoms have returned before or if there are major changes in stress, physical health, pregnancy plans or substance use. Small steps—getting out of bed, eating a regular meal, replying to one message or attending one appointment—can be meaningful parts of recovery.",
      },
      {
        heading: "When depression needs urgent help",
        body:
          "Seek urgent help now if you are thinking about suicide or self-harm, have made a plan or attempt, feel unable to stay safe, are severely confused, or are not eating, drinking or caring for yourself. Tell a trusted person, go to the nearest emergency department or contact local emergency services. Do not stay alone with an immediate safety risk.\n\nIf you are worried about someone else, ask directly and calmly whether they are thinking of harming themselves, listen without judgement, remove immediate dangers only if it is safe to do so, and help them reach emergency or professional care. Asking about suicide does not put the idea into someone’s mind; it can open a path to support.",
      },
      {
        heading: "Can I consult a psychiatrist online for depression?",
        body:
          "Online psychiatric consultation can be appropriate for many follow-ups, medication reviews, psychoeducation and selected initial assessments. It can make care more accessible for people outside Kathmandu or people who find travel difficult. Be in a private place, keep a list of medicines and previous reports nearby, and tell the clinician where you are during the appointment in case urgent local support is needed.\n\nOnline care is not a replacement for emergency support. Severe safety risk, overdose, severe withdrawal, psychosis or urgent medical symptoms need immediate in-person help. The clinic can advise whether an online or in-person appointment is right for your first consultation.",
      },
    ],
    nepaliSections: [
      {
        heading: "डा. खरेलको उपचार शैली",
        body:
          "आफूलाई खाली, थकित वा उत्साहविहीन महसुस भइरहेको बताउने बिरामीसँग म पहिलो भेटमै यो कति समयदेखि रहेको छ र दैनिक जीवनका कुन-कुन भाग असर परेको छ भनेर बुझ्न समय लगाउँछु, तुरुन्तै औषधि लेख्दिन। धेरैलाई परामर्श र दिनचर्या पुनर्निर्माण गर्ने संरचित थेरापीले नै सघाउँछ; डिप्रेसन मध्यम वा गम्भीर वा लामो समयदेखिको भएमा एन्टिडिप्रेसेन्ट थप्छु, र के आशा गर्ने र कहिले पुनरावलोकन गर्ने भनेर स्पष्ट बुझाउँछु। सुधार प्रायः सीधा रेखामा हुँदैन, त्यसैले फलोअपमा निरन्तर संलग्न रहन्छु।",
      },
      {
        heading: "डिप्रेसनका लक्षणहरू के के हुन्?",
        body:
          "उदासी, शून्यता वा निराशा महसुस हुनु, पहिले मन पर्ने कुरामा रुचि नरहनु, ऊर्जा कम हुनु, सोच्न वा निर्णय गर्न गाह्रो हुनु, आफूलाई दोषी वा बेकम्मा ठान्नु, चाल वा बोली सुस्त हुनु, निद्रा वा भोकमा परिवर्तन हुनु, मानिसबाट टाढा हुँदै जानु, र जीवन बाँच्न लायक छैन जस्तो सोच आउनु डिप्रेसनका सामान्य लक्षण हुन्।\n\nसबैमा डिप्रेसन उस्तै तरिकाले देखिँदैन — कसैलाई उदासी लाग्छ भने कसैलाई मुख्यतया थकान, शरीर दुखाइ, रिस वा ध्यान केन्द्रित गर्न गाह्रो हुने समस्या हुन्छ। डिप्रेसन चिन्ता, शोक, आघात (trauma), रक्सी वा लागुऔषध सेवन र अन्य शारीरिक रोगसँगै पनि देखिन सक्छ।",
      },
      {
        heading: "डिप्रेसनको निदान कसरी हुन्छ?",
        body:
          "डिप्रेसन छ कि छैन भनेर पत्ता लगाउने कुनै एउटै रगत जाँच वा स्क्यान हुँदैन। निदान लक्षणको अवधि, दैनिक कामकाजमा परेको असर, स्वास्थ्य इतिहास, हालका औषधि, निद्रा, लागुऔषध सेवन, पारिवारिक इतिहास र सुरक्षाबारे विस्तृत कुराकानीमा आधारित हुन्छ। थाइरोइड समस्या, रक्तअल्पता वा पोषणको कमी जस्ता कारणले पनि यस्तै लक्षण देखा पर्न सक्ने भएकाले आवश्यक परेमा थप जाँच सिफारिस गरिन्छ।\n\nमूल्याङ्कन कसैलाई लेबल लगाउनका लागि होइन — यो के भइरहेको छ भन्ने बुझ्न, महत्त्वपूर्ण कारण पहिचान गर्न र व्यक्तिको जीवनसँग मिल्ने योजना बनाउनका लागि हो। सजिलो होस् भनेर विश्वासिलो परिवारको सदस्य वा लक्षणको टिपोट साथमा ल्याउन सक्नुहुन्छ।",
      },
      {
        heading: "डिप्रेसनको उपचारमा के के समावेश हुन्छ?",
        body:
          "डिप्रेसनको उपचार व्यक्तिगत हुन्छ। परामर्शले गाह्रो समयमा सहयोग दिन सक्छ, भने CBT, behavioural activation जस्ता संरचित थेरापीले उदासी कायम राख्ने ढाँचा बदल्न र दैनिक गतिविधि, सम्बन्ध र आत्मविश्वास पुनर्निर्माण गर्न मद्दत गर्छ। निद्रा, पोषण, दिनचर्या, व्यायाम, शोक वा सम्बन्धगत तनावमा पनि सहयोग समावेश हुन सक्छ।\n\nडिप्रेसन मध्यम वा गम्भीर, लामो समयदेखिको वा थेरापीले मात्र पर्याप्त सुधार नल्याएको अवस्थामा एन्टिडिप्रेसेन्ट औषधि सिफारिस गर्न सकिन्छ। मनोचिकित्सकले फाइदा, सम्भावित साइड इफेक्ट, अन्य विकल्प र कहिले पुनरावलोकन गरिने बताउनुपर्छ। औषधिले व्यक्तित्व मेटाउँदैन वा हरेक समस्या समाधान गर्दैन, तर उपयुक्त प्रयोग गर्दा रिकभरीमा संलग्न हुन सक्ने बनाउँछ।",
      },
      {
        heading: "डिप्रेसनमा तत्काल सहयोग कहिले लिने?",
        body:
          "आत्महत्या वा आफूलाई हानि पुर्‍याउने सोच आइरहेको छ, योजना वा प्रयास भइसकेको छ, आफू सुरक्षित रहन सक्दिन जस्तो लाग्छ, गम्भीर भ्रम छ, वा खान, पिउन वा आफ्नो हेरचाह गर्न सकिरहनुभएको छैन भने तुरुन्त सहयोग लिनुहोस्। विश्वासिलो व्यक्तिलाई बताउनुहोस्, नजिकको अस्पतालको आकस्मिक सेवामा जानुहोस् वा आकस्मिक सेवामा सम्पर्क गर्नुहोस्। तत्काल जोखिम भएमा एक्लै नबस्नुहोस्।\n\nअरू कसैको बारेमा चिन्तित हुनुहुन्छ भने सीधै तर शान्त भएर सोध्नुहोस् — के उनी आफूलाई हानि पुर्‍याउने सोचमा छन्? कुनै पूर्वाग्रह नराखी सुन्नुहोस्, सुरक्षित भएसम्म तत्काल खतरा हुने वस्तु हटाउनुहोस्, र आकस्मिक वा पेशेवर सहयोगसम्म पुर्‍याउन मद्दत गर्नुहोस्। आत्महत्याबारे सोध्नु हानिकारक होइन — यसले सहयोगको बाटो खोल्न सक्छ।",
      },
      {
        heading: "डिप्रेसनबारे छोटो जानकारी",
        body:
          "डिप्रेसन कमजोरी वा इच्छाशक्तिको कमी होइन। दुई हप्ता वा बढी समयदेखि उदासी, रुचि हराउने, थकान, निद्रा वा भोकमा परिवर्तन, निराशा, एक्लोपन वा दैनिक काममा असर भइरहेको छ भने मनोचिकित्सक वा मानसिक स्वास्थ्यकर्मीसँग कुरा गर्नु उपयोगी हुन्छ। परामर्श, थेरापी, दिनचर्यामा सुधार र आवश्यक परेमा औषधिको संयोजनबाट धेरै मानिसमा सुधार हुन्छ।\n\nआफूलाई हानि पुर्‍याउने सोच, आत्महत्याको विचार वा आफू सुरक्षित रहन नसक्ने अवस्था भएमा तुरुन्त नजिकको अस्पतालको आकस्मिक सेवामा जानुहोस् वा विश्वासिलो व्यक्तिलाई साथमा राख्नुहोस्।",
      },
    ],
    doctorsApproach:
      "My first priority with depression is always a safety check, done gently and without alarm, before anything else. From there I look at what's realistic for that person specifically — sometimes therapy alone is enough, sometimes medication helps someone get to a place where therapy can actually work — and I review that at every follow-up rather than deciding it once and leaving it.\n\nWhen someone describes feeling empty, exhausted or unmotivated, I spend the first consultation understanding how long this has lasted and what parts of daily life it is affecting, rather than jumping straight to a prescription. For many patients, counselling and structured approaches like behavioural activation help rebuild routine and connection; when depression is moderate to severe or long-lasting, I add antidepressant medication, explaining clearly what to expect and when we will review it together. Recovery is rarely a straight line, so I stay closely involved through follow-up rather than treating one appointment as the whole plan.",
    title: "Depression Treatment in Kathmandu, Nepal",
    headline: "Depression treatment in Kathmandu, Nepal",
    shortDescription:
      "Evidence-based depression treatment in Kathmandu — psychiatric assessment, antidepressant medication where appropriate, and structured therapy such as CBT — from Dr. Kushal Kharel, Consultant Psychiatrist.",
    intro:
      "Depression is more than ordinary sadness — it's a persistent low mood, loss of interest or energy, and changes in sleep, appetite or concentration that last most of the day, most days, for two weeks or more, and it is genuinely treatable. Dr. Kushal Kharel, a Nepal Medical Council-registered Consultant Psychiatrist (MD Psychiatry, registration #27199) in Kalanki, Kathmandu, provides a full psychiatric assessment to confirm the diagnosis and its severity, followed by an individualised treatment plan — which may include antidepressant medication, structured therapy such as CBT, or both — available in person or online.",
    whoThisIsFor: [
      "Anyone with persistent low mood, loss of interest or low energy lasting two weeks or more",
      "People whose sleep, appetite or concentration has changed alongside a low mood",
      "People who've tried to manage low mood alone without lasting improvement",
      "Anyone unsure whether what they're feeling is depression or ordinary sadness",
      "People with depression accompanied by anxiety or physical symptoms",
      "Postpartum, adolescent or elderly patients with depression needing an age-appropriate approach",
      "Family members concerned about a loved one who seems persistently low or withdrawn",
    ],
    commonConcerns: [
      "Persistent low mood, tearfulness or emptiness",
      "Loss of interest or pleasure in previously enjoyed activities",
      "Low energy, fatigue and reduced motivation",
      "Sleep disturbance — insomnia or oversleeping",
      "Appetite and weight changes",
      "Difficulty concentrating or making decisions",
      "Feelings of worthlessness, guilt or hopelessness",
      "Thoughts of self-harm or that life isn't worth living",
    ],
    practicalNote:
      "Dr. Kushal provides CBT and medication together, in person at the Kalanki clinic or through Google Meet video consultation, including for Nepalis living abroad. Treatment is individualised: mild depression often responds well to structured therapy alone, moderate-to-severe depression generally needs a combination of antidepressant medication and therapy, and response to medication is reviewed and adjusted over the following weeks rather than assumed to be right the first time. If depression includes any thoughts of self-harm or suicide, or is accompanied by hallucinations or delusions, seek an urgent assessment or go to the nearest emergency department rather than waiting for a scheduled appointment.",
    searchTerms: [
      "Depression treatment Kathmandu",
      "Depression treatment Nepal",
      "Psychiatrist for depression Kathmandu",
      "Depression doctor Nepal",
      "Antidepressant treatment Kathmandu",
      "Clinical depression treatment Nepal",
    ],
    diagram: {
      src: "/images/diagrams/depression-spiral.webp",
      alt: "Diagram of the depression spiral showing low mood, withdrawal and reduced activity reinforcing one another",
      caption: "The depression spiral: low mood, withdrawal and inactivity feed each other, which is why treatment works on breaking the cycle, not just the mood.",
    },
    faqs: [
      {
        question: "How is depression treated in Kathmandu?",
        answer:
          "Treatment follows the same evidence-based approach used internationally: a full psychiatric assessment to confirm diagnosis and severity, followed by antidepressant medication, structured therapy such as CBT, or a combination of both, individualised to the severity and nature of your symptoms.",
      },
      {
        question: "Do I need medication, or can therapy alone treat depression?",
        answer:
          "This depends on severity. Mild depression often responds well to therapy alone. Moderate-to-severe depression generally benefits from combining medication with therapy, since the two work through different but complementary mechanisms.",
      },
      {
        question: "How long does it take for antidepressants to work?",
        answer:
          "Most antidepressants take two to four weeks to show a noticeable effect, with full benefit often taking six to eight weeks, so dosing and choice of medication are reviewed and adjusted over this period rather than expected to be right immediately.",
      },
      {
        question: "Is depression treatment available online?",
        answer:
          "Yes. Dr. Kushal Kharel provides CBT and medication together through Google Meet video consultation, for assessment and follow-up, alongside in-person consultation at the Kalanki clinic in Kathmandu. Nepalis living abroad can use it too; a prescription written in Nepal may not be valid abroad, so medication is planned individually.",
      },
      {
        question: "What if I've tried an antidepressant before and it didn't help?",
        answer:
          "This is common and doesn't mean depression is untreatable — it often means the medication, dose or diagnosis needs re-evaluating. A fresh assessment can review what was tried before and adjust the approach accordingly.",
      },
      {
        question: "Is postpartum or adolescent depression treated differently?",
        answer:
          "Yes, treatment is adapted for the specific context — postpartum depression involves considerations around breastfeeding and the baby, while adolescent depression involves family involvement and developmentally appropriate therapy, both handled as part of general psychiatric practice.",
      },
      {
        question: "What should I do if depression includes thoughts of self-harm?",
        answer:
          "Seek an urgent assessment or go to the nearest emergency department immediately rather than waiting for a scheduled appointment — this is treated as a safety priority, not routine follow-up.",
      },
    ],
  },
  {
    slug: "panic-attack-treatment-kathmandu",
    screeningId: "panic-disorder",
    guideSections: [
      {
        heading: "What are the symptoms of a panic attack?",
        body:
          "During an attack the body’s alarm system fires as though facing real danger, producing a racing or pounding heart, chest tightness or pain, shortness of breath, sweating, trembling, and a sense of choking or smothering. Many people also describe dizziness, lightheadedness, nausea, hot flushes or chills, tingling in the hands and lips, and a strange sense of unreality about themselves or their surroundings known as derealisation or depersonalisation. The psychological symptoms can be as distressing as the physical ones: a sudden conviction that something catastrophic is happening, such as a heart attack, stroke or loss of control, along with an overwhelming urge to escape. Attacks can occur unexpectedly, in specific situations, or occasionally during deep sleep, waking the person in a state of fear. Because the physical symptoms genuinely overlap with cardiac and respiratory emergencies, new chest pain, fainting, one-sided weakness or severe unexplained breathlessness should always be assessed medically rather than assumed to be panic, particularly for a first episode.",
      },
      {
        heading: "What causes panic attacks, and what are the risk factors?",
        body:
          "Panic reflects a false alarm in the body’s threat-detection system rather than any real danger, and it typically involves a self-reinforcing loop between physical sensations and catastrophic interpretation. A normal bodily sensation, such as a slightly faster heartbeat after climbing stairs or jitteriness after caffeine, is misread by the brain as a sign of imminent danger, which triggers a genuine stress response and produces more of the very sensations that felt alarming in the first place. Biological vulnerability, family history, heightened sensitivity to internal bodily sensations, chronic stress, poor sleep, excess caffeine, nicotine, alcohol withdrawal, and certain physical illnesses can all lower the threshold for an attack. Once a person starts avoiding places associated with past attacks, or relies on safety behaviours such as always carrying medication, the disorder is usually reinforced rather than resolved, because avoidance prevents the person from ever learning that the feared catastrophe does not occur.",
      },
      {
        heading: "How are panic attacks assessed?",
        body:
          "A psychiatric assessment for panic maps the pattern of attacks in detail: their frequency, typical triggers or lack thereof, physical symptoms, catastrophic thoughts during an episode, anticipatory anxiety between attacks, and any places or activities that have come to be avoided. It also reviews caffeine, nicotine, alcohol and other substance use, current medicines, and any physical symptoms that warrant medical investigation, since conditions such as thyroid disease, arrhythmias, asthma and vestibular disorders can produce genuinely similar sensations. Because panic frequently overlaps with other conditions, the assessment also screens for generalised anxiety, social anxiety, health anxiety, depression and trauma-related symptoms, all of which change the treatment plan. A basic physical examination or targeted investigations, arranged with a physician when indicated, are often a reasonable part of a first assessment, particularly when symptoms began later in life.",
      },
      {
        heading: "How are panic attacks and panic disorder treated?",
        body:
          "Cognitive behavioural therapy (CBT) tailored to panic disorder is the best-established psychological treatment and usually runs over a structured course of weekly sessions. Early sessions focus on psychoeducation about the panic cycle and breathing retraining; the central technique is interoceptive exposure, in which the person deliberately and safely brings on the physical sensations they fear, such as brief spinning to trigger dizziness or breathing through a straw to trigger breathlessness, so the brain gradually relearns that these sensations are uncomfortable but not dangerous. Where avoidance has developed, situational exposure to avoided places is added in a graded, collaborative way. Cognitive work targets catastrophic misinterpretations, such as ‘this means I am dying’, and replaces them with more accurate appraisals built from the person’s own experience during exposure. Medication, typically an SSRI, may be considered after individual psychiatric assessment for more severe or persistent presentations, usually alongside therapy; benzodiazepines are used cautiously and briefly, if at all, given dependence risk.",
      },
      {
        heading: "Getting support for panic attacks in Nepal",
        body:
          "For a first severe panic attack, or whenever new or unexplained physical symptoms are involved, an in-person assessment in Kathmandu, Lalitpur or Bhaktapur allows a proper physical check alongside the psychiatric one, which matters most when the presentation is unfamiliar or alarming. Once serious medical causes have been reasonably excluded and a treatment plan is underway, regular CBT and medication follow-up can often continue through online consultation, which suits people balancing work, study or travel across Nepal. Patients from Pokhara, Biratnagar, Dharan and further afield frequently combine an initial in-person visit with ongoing video follow-up for convenience. Many workplaces and educational institutions in Kathmandu are increasingly willing to accommodate medical leave for mental health reasons, which can make it easier to attend an initial appointment without extended disruption to studies or employment.",
      },
    ],
    doctorsApproach:
      "For a first severe panic attack I'd rather rule out a physical cause properly before we call it panic, especially if the chest symptoms were new. Once that's settled, most people do well with CBT built around the specific triggers and bodily sensations they fear — I only bring in medication when attacks are frequent or severe enough that therapy alone is a slow start.",
    title: "Panic Attack Treatment in Kathmandu, Nepal",
    headline: "Panic attack treatment in Kathmandu, Nepal",
    shortDescription:
      "Assessment and evidence-based treatment for panic attacks and panic disorder in Kathmandu, including CBT-based techniques and medication where appropriate, from Dr. Kushal Kharel, Consultant Psychiatrist.",
    intro:
      "A panic attack — a sudden surge of intense fear with a racing heart, breathlessness, chest tightness and a feeling of losing control — is frightening enough that many people first go to an emergency room believing it's a heart attack. Once a medical cause has been ruled out, panic attacks are highly treatable. Dr. Kushal Kharel provides psychiatric assessment and treatment for panic attacks and panic disorder in Kathmandu, in person at the Kalanki clinic or online, combining CBT-based techniques with medication when needed.",
    whoThisIsFor: [
      "Anyone who has had one or more sudden episodes of intense fear with physical symptoms",
      "People who've been to an emergency room for panic symptoms and been told their heart is fine",
      "People experiencing recurrent panic attacks with ongoing worry about the next one",
      "People avoiding places or situations for fear of triggering an attack",
      "Anyone unsure whether their symptoms are panic, a medical condition, or both",
      "People whose panic attacks are affecting work, travel or daily routine",
    ],
    commonConcerns: [
      "Sudden episodes of intense fear peaking within minutes",
      "Racing heart, chest tightness, breathlessness and dizziness during an attack",
      "Fear of dying, losing control or having a heart attack during an episode",
      "Persistent worry about when the next attack will happen",
      "Avoidance of places associated with a previous attack",
      "Distinguishing panic symptoms from a cardiac or other medical emergency",
      "Panic attacks occurring alongside generalized anxiety or social anxiety",
    ],
    practicalNote:
      "Treatment typically combines CBT-based techniques — including breathing retraining and gradual exposure to avoided situations — with short-term or longer-term medication where appropriate, depending on frequency and severity. A first-ever panic attack, new or unexplained chest pain, or any symptoms you cannot confidently attribute to panic should be evaluated urgently as a possible medical emergency before being treated as psychiatric.",
    searchTerms: [
      "Panic attack treatment Kathmandu",
      "Panic attack doctor Nepal",
      "Panic disorder treatment Kathmandu",
      "Psychiatrist for panic attacks Nepal",
      "Panic attack vs heart attack Kathmandu",
    ],
    diagram: {
      src: "/images/diagrams/panic-attack-cycle.webp",
      alt: "Diagram of the panic attack cycle showing a bodily sensation, catastrophic thought and fear response reinforcing each other",
      caption: "The panic cycle: a bodily sensation is misread as danger, which triggers fear and more of the same sensations.",
    },
    faqs: [
      {
        question: "How are panic attacks treated in Kathmandu?",
        answer:
          "After ruling out a medical cause where relevant, treatment combines CBT-based techniques — such as breathing retraining, understanding the panic cycle, and gradual exposure to avoided situations — with medication where the frequency or severity of attacks warrants it.",
      },
      {
        question: "How can I tell if it's a panic attack or a heart attack?",
        answer:
          "You generally can't tell reliably in the moment, which is why a first-ever episode, new chest pain, or symptoms you're unsure about should be evaluated urgently as a possible medical emergency. Once a medical cause has been ruled out, recurring similar episodes are more confidently treated as panic.",
      },
      {
        question: "Is medication necessary, or can panic attacks be treated with therapy alone?",
        answer:
          "Many people improve significantly with CBT-based therapy alone, particularly with consistent practice of the techniques between sessions. Medication is added when attacks are frequent, severe, or significantly restricting daily life, and this is decided individually.",
      },
      {
        question: "Why do I feel like I'm going to die during a panic attack?",
        answer:
          "The physical symptoms of panic — racing heart, breathlessness, chest tightness — genuinely mimic a life-threatening event, which is the body's alarm system firing when there is no actual danger. Understanding this pattern is a core part of treatment.",
      },
      {
        question: "I've started avoiding places where I've had attacks before — is this a problem?",
        answer:
          "Yes, avoidance tends to reinforce panic over time and can narrow your daily life considerably. Gradual, structured exposure to avoided situations, done at a manageable pace, is a core part of effective treatment.",
      },
      {
        question: "Is panic attack treatment available online?",
        answer:
          "Yes. Dr. Kushal Kharel treats panic and anxiety with medication and CBT together through Google Meet video consultation, for assessment and ongoing treatment, alongside in-person consultation at the Kalanki clinic in Kathmandu, including for Nepalis living abroad.",
      },
      {
        question: "How long does treatment for panic attacks usually take?",
        answer:
          "This varies by individual, but many people see meaningful improvement within weeks of starting structured treatment, with the exact course depending on frequency of attacks, degree of avoidance, and response to initial treatment.",
      },
      {
        question: "Can panic attacks happen during sleep?",
        answer:
          "Yes. Nocturnal panic attacks can wake a person from sleep in a state of sudden fear with a racing heart and breathlessness, without any dream or nightmare preceding it. They are treated the same way as daytime panic attacks, though they can feel more disorienting because there is no obvious trigger.",
      },
      {
        question: "Does having panic attacks mean I have an anxiety disorder?",
        answer:
          "Not necessarily. A single panic attack, especially during unusual stress, illness or sleep deprivation, is common and does not by itself mean someone has panic disorder. The diagnosis is generally considered when attacks recur and are followed by persistent worry about future attacks or noticeable changes in behaviour to avoid them.",
      },
      {
        question: "What should I do if I feel a panic attack starting?",
        answer:
          "Slowing the breath, especially lengthening the out-breath, naming what is happening (‘this is panic, it will pass, it is not dangerous’), and staying in the situation where it is safe to do so all help over time. These skills are useful for short-term relief but work best alongside structured therapy.",
      },
      {
        question: "Can panic disorder be cured completely?",
        answer:
          "Many people who complete a course of CBT for panic disorder become free of attacks or have only occasional, much milder episodes. Others have a good response with some residual vulnerability during high-stress periods. Outcomes vary, which is why ongoing follow-up and relapse-prevention skills are part of a complete treatment plan.",
      },
    ],
  },
  {
    slug: "adhd-treatment-kathmandu",
    guideSections: [
      {
        heading: "What does an ADHD assessment involve?",
        body:
          "An ADHD assessment is a full clinical evaluation, and it is done in a single visit. It starts with a detailed developmental and symptom history, looking at how symptoms affect life across settings such as home, school and work, and it follows standard diagnostic criteria. Relevant family history is taken, and the ASRS (Adult ADHD Self-Report Scale) rating scale is used.\n\nFor children, the history involves parents and, where useful and with your consent, school input. For adults, the assessment looks at current symptoms and at a childhood history consistent with the diagnosis, even if ADHD was never named at the time. It also considers whether the symptoms are ADHD, anxiety, or both together.\n\nWhere the clinical picture is unclear, psychometric testing is done with a psychologist to clarify the diagnosis. An initial consultation can be held online, but psychometric testing, when needed, requires an in-person visit to the Kalanki clinic in Kathmandu.",
      },
      {
        heading: "How much does an ADHD assessment cost in Kathmandu?",
        body:
          "An ADHD assessment is charged at the clinic's standard consultation fees, which are set out on the fee page. For an in-person initial consultation that is NPR 800–1,500 depending on the complexity and length of the assessment, and repeat consultations are NPR 800. If psychometric testing with a psychologist is needed, its cost is confirmed with the clinic before you book. Call or WhatsApp +977 9861800547 for any question about the fee.",
        link: { href: "/psychiatrist-fee-nepal/", label: "Psychiatrist consultation fees in Kathmandu" },
      },
      {
        heading: "What happens after an ADHD diagnosis?",
        body:
          "Treatment is individualised. It may include stimulant or non-stimulant medication, behavioral strategies, or both, depending on symptom severity, age and personal preference. Medication is one option, not a default. For adults, practical strategies for work or study routines usually go alongside it; for children, parent guidance and school-based support may be added. The plan is adjusted at follow-up based on what is actually helping.\n\nIf a school or an employer needs documentation, Dr. Kharel writes a report based on the genuine clinical findings.",
      },
    ],
    doctorsApproach:
      "With adult ADHD especially, I spend real time on the childhood history, because the diagnosis needs that pattern to have been there early even if it was never named at the time. Treatment is rarely medication alone in my practice — practical strategies for work or study routines usually go alongside it, and I adjust based on what's actually helping at follow-up.",
    title: "ADHD Assessment & Treatment in Kathmandu, Nepal",
    headline: "ADHD assessment and treatment in Kathmandu, Nepal",
    shortDescription:
      "Psychiatric assessment and treatment for ADHD in children, adolescents and adults in Kathmandu, including stimulant and non-stimulant medication options and behavioral strategies.",
    intro:
      "ADHD (Attention-Deficit/Hyperactivity Disorder) affects children, adolescents and adults, and often goes unrecognised in adults who were never assessed as children, showing up instead as chronic disorganisation, procrastination or underachievement relative to ability. Dr. Kushal Kharel provides ADHD assessment and treatment in Kathmandu — a full clinical evaluation, followed by an individualised plan that may include stimulant or non-stimulant medication, behavioral strategies, or, where testing would clarify the picture further, referral for formal psychometric assessment.",
    whoThisIsFor: [
      "Parents concerned about a child's inattention, hyperactivity or impulsivity",
      "Adults who suspect they have ADHD but were never assessed as children",
      "Adults with chronic disorganisation, procrastination or difficulty finishing tasks",
      "Students struggling academically despite putting in effort",
      "Adults or children where ADHD needs to be distinguished from anxiety or a mood disorder",
      "People who've tried general willpower-based strategies without lasting success",
      "Families wanting a formal diagnosis before starting medication or requesting school accommodations",
    ],
    commonConcerns: [
      "Inattention, distractibility and difficulty sustaining focus",
      "Hyperactivity and restlessness (more prominent in children)",
      "Impulsivity affecting decisions, relationships or work",
      "Chronic disorganisation, procrastination and missed deadlines",
      "Underachievement relative to ability at school, university or work",
      "Emotional dysregulation and low frustration tolerance",
      "Whether symptoms are ADHD, anxiety, or overlapping with both",
      "Concerns about starting stimulant medication",
    ],
    practicalNote:
      "Assessment includes a detailed developmental and symptom history — for children, this involves parents and, where useful, school input — and, where the clinical picture is unclear, referral for formal psychometric testing to clarify the diagnosis. Medication is not automatic: treatment is individualised and may combine stimulant or non-stimulant medication with behavioral strategies and, for children, parent guidance and school-based support.",
    searchTerms: [
      "ADHD assessment Kathmandu",
      "ADHD treatment Nepal",
      "ADHD doctor Kathmandu",
      "Adult ADHD diagnosis Nepal",
      "ADHD medication Kathmandu",
      "ADHD psychiatrist Nepal",
    ],
    diagram: {
      src: "/images/diagrams/adhd-executive-function.webp",
      alt: "Diagram of ADHD executive function difficulties affecting attention, organization and impulse control",
      caption: "ADHD affects the brain's executive function system — attention, organization, and impulse control — not just \"focus.\"",
    },
    faqs: [
      {
        question: "How is ADHD diagnosed in Kathmandu?",
        answer:
          "Diagnosis is based on a detailed clinical history of symptoms and their impact across settings (home, school or work), following standard diagnostic criteria. For children, parent and, where useful, school input is included; formal psychometric testing can be added when the picture needs further clarification.",
      },
      {
        question: "Can adults be diagnosed with ADHD for the first time?",
        answer:
          "Yes. Many adults were never assessed as children and instead grew up managing ADHD symptoms without a name for them. An adult ADHD assessment looks at both current symptoms and a childhood history consistent with the diagnosis.",
      },
      {
        question: "Is medication always needed for ADHD?",
        answer:
          "No. Treatment is individualised and may include stimulant or non-stimulant medication, behavioral strategies, or both, depending on symptom severity, age and personal preference — medication is discussed as one option, not a default.",
      },
      {
        question: "What's the difference between ADHD and anxiety, since both affect concentration?",
        answer:
          "Both can cause difficulty concentrating, but the underlying pattern differs — ADHD involves a longstanding, cross-situational pattern of inattention or hyperactivity typically present since childhood, while anxiety-related concentration difficulty is usually tied to worry and can have a later onset. Distinguishing between them, or identifying both together, is part of the assessment.",
      },
      {
        question: "Are stimulant medications for ADHD available in Nepal?",
        answer:
          "Yes, though availability of a specific brand can vary by pharmacy; this is discussed as part of treatment planning, alongside non-stimulant alternatives where appropriate.",
      },
      {
        question: "Is ADHD assessment available online?",
        answer:
          "An initial consultation can be conducted online, though formal psychometric testing, when needed, requires an in-person visit to the Kalanki clinic in Kathmandu.",
      },
      {
        question: "Will my child's school be involved in the assessment?",
        answer:
          "Only with your consent. School input can be useful for a fuller picture of how symptoms affect functioning across settings, and is coordinated with parents rather than sought independently.",
      },
      {
        question: "How much does an ADHD assessment cost in Kathmandu?",
        answer:
          "An ADHD assessment is charged at the clinic's standard consultation fees, listed on the fee page: an initial in-person consultation is NPR 800–1,500 depending on complexity and length, and repeat consultations are NPR 800. If psychometric testing with a psychologist is needed, its cost is confirmed before you book.",
      },
      {
        question: "Is an ADHD assessment done in one visit?",
        answer:
          "Yes, the assessment is done in a single visit. Relevant family history is taken and the ASRS rating scale is used. If psychometric testing is needed, it is done with a psychologist.",
      },
      {
        question: "Can I get a report for my child's school or for my employer?",
        answer:
          "Yes. Dr. Kharel writes a report for schools or employers based on the genuine clinical findings.",
      },
      {
        question: "What happens after an ADHD diagnosis?",
        answer:
          "You and Dr. Kharel agree an individualised plan. It may combine stimulant or non-stimulant medication with behavioral strategies and, for children, parent guidance and school-based support, and it is adjusted at follow-up based on what is helping.",
      },
    ],
  },
  {
    slug: "bipolar-disorder-treatment-kathmandu",
    doctorsApproach:
      "Getting the diagnosis right matters more here than almost anywhere else in psychiatry, because treating bipolar depression like ordinary depression can make things worse rather than better — so I ask carefully about past periods of unusually high energy or reduced need for sleep, not just the low periods. Medication is usually central, and I explain clearly why stopping it suddenly is risky rather than just telling you not to.",
    title: "Bipolar Disorder Treatment in Kathmandu, Nepal",
    headline: "Bipolar disorder treatment in Kathmandu, Nepal",
    shortDescription:
      "Diagnosis and long-term management of Bipolar I and Bipolar II disorder in Kathmandu, including mood stabilizer medication, relapse prevention, and family psychoeducation.",
    intro:
      "Bipolar disorder involves episodes of depression alongside episodes of mania or hypomania — elevated, expansive or irritable mood with a marked increase in energy — and is frequently misdiagnosed as depression alone for years before the bipolar pattern is recognised, since hypomania can feel productive rather than problematic. Dr. Kushal Kharel provides assessment and long-term management of Bipolar I and Bipolar II disorder in Kathmandu, centred on mood stabilizer medication, relapse prevention, and helping both patients and families understand the illness and its early warning signs.",
    whoThisIsFor: [
      "Anyone diagnosed with, or suspected to have, Bipolar I or Bipolar II disorder",
      "People treated for depression who've never fully responded to antidepressants alone",
      "People who've experienced periods of unusually high energy, reduced need for sleep or racing thoughts",
      "Family members noticing dramatic mood swings or risky behaviour in a loved one",
      "Patients wanting a second opinion on an existing bipolar diagnosis or medication plan",
      "People newly diagnosed who want to understand what long-term management involves",
      "Families wanting guidance on recognising early warning signs of relapse",
    ],
    commonConcerns: [
      "Distinguishing a manic or hypomanic episode from ordinary high energy or good mood",
      "Depressive episodes that haven't responded to antidepressants alone",
      "Reduced need for sleep, racing thoughts or rapid speech during high periods",
      "Impulsive or risky behaviour during elevated mood — spending, driving, relationships",
      "Understanding the difference between Bipolar I and Bipolar II",
      "Starting and staying on mood stabilizer medication long-term",
      "Recognising early warning signs of an emerging episode",
      "Risk that antidepressants alone can trigger or worsen mania if not paired with a mood stabilizer",
    ],
    practicalNote:
      "Mood stabilizer medication, with lithium as one gold-standard option, forms the cornerstone of both acute treatment and long-term relapse prevention, and antidepressants are generally avoided as monotherapy because of the risk of triggering mania. Ongoing follow-up, mood monitoring and family psychoeducation about early warning signs are central to reducing relapse. Seek emergency care immediately for severe mania with psychotic features, dangerous or risky behaviour, or any suicidal thoughts during a depressive phase.",
    searchTerms: [
      "Bipolar disorder treatment Kathmandu",
      "Bipolar disorder doctor Nepal",
      "Bipolar disorder psychiatrist Kathmandu",
      "Mood stabilizer treatment Nepal",
      "Bipolar I disorder treatment Kathmandu",
      "Bipolar II disorder treatment Nepal",
    ],
    diagram: {
      src: "/images/diagrams/bipolar-mood-cycle.webp",
      alt: "Diagram of the bipolar mood cycle showing depressive and manic or hypomanic episodes over time",
      caption: "Bipolar disorder involves swings between depressive and manic or hypomanic episodes, which is why accurate diagnosis changes the treatment plan.",
    },
    faqs: [
      {
        question: "How is bipolar disorder treated in Kathmandu?",
        answer:
          "Treatment centres on mood stabilizer medication for both acute episodes and long-term relapse prevention, combined with regular follow-up, mood monitoring, and psychoeducation for the patient and, where helpful, the family, about early warning signs of relapse.",
      },
      {
        question: "How is bipolar disorder different from ordinary mood swings or just depression?",
        answer:
          "Bipolar disorder involves distinct episodes of mania or hypomania — a clear change in mood and energy lasting days or longer, noticeable to others, and going beyond ordinary ups and downs — not simply variable mood day to day.",
      },
      {
        question: "I've been treated for depression for years without full improvement — could it be bipolar?",
        answer:
          "This is worth assessing. A history of unrecognised hypomanic or manic periods is a common reason depression treatment doesn't fully work, since bipolar depression is managed differently from unipolar depression.",
      },
      {
        question: "Is medication needed for life?",
        answer:
          "For most people with Bipolar I, and many with Bipolar II, long-term mood stabilizer treatment substantially reduces relapse risk, and stopping medication is generally discussed carefully with a psychiatrist rather than done independently, given the risk of relapse.",
      },
      {
        question: "Can antidepressants make bipolar disorder worse?",
        answer:
          "Yes, if used alone without a mood stabilizer, antidepressants can trigger a manic episode or speed up cycling between mood states in some people with bipolar disorder, which is why they are generally avoided as monotherapy once bipolar disorder is diagnosed.",
      },
      {
        question: "What is the difference between Bipolar I and Bipolar II?",
        answer:
          "Bipolar I requires at least one full manic episode, which can be severe enough to need hospitalization. Bipolar II involves hypomania — a milder, shorter form — together with major depressive episodes, without ever a full manic episode.",
      },
      {
        question: "Can family members be involved in ongoing management?",
        answer:
          "Yes, and this is encouraged. Family members are often the first to notice early warning signs of an emerging episode, and psychoeducation for the family is a meaningful part of relapse prevention, with the patient's consent.",
      },
    ],
  },
  {
    slug: "schizophrenia-treatment-kathmandu",
    doctorsApproach:
      "I try to bring family into the picture early where the patient welcomes it, because recognising an early warning sign at home matters as much as anything I do in a consultation. I explain what each medication is doing and why sudden stopping is risky, and I stay focused on helping the person keep their daily roles and dignity, not just reducing symptoms on paper.",
    title: "Schizophrenia Treatment in Kathmandu, Nepal",
    headline: "Schizophrenia treatment in Kathmandu, Nepal",
    shortDescription:
      "Diagnosis and ongoing management of schizophrenia in Kathmandu, including antipsychotic medication, relapse prevention, and family psychoeducation, from Dr. Kushal Kharel, Consultant Psychiatrist.",
    intro:
      "Schizophrenia is a serious but treatable psychiatric condition involving hallucinations, delusions, disorganised thinking or speech, and a decline in functioning, typically emerging in late adolescence or early adulthood. With consistent, appropriate treatment, many people achieve meaningful symptom control and stability. Dr. Kushal Kharel provides assessment and long-term management of schizophrenia in Kathmandu — antipsychotic medication, monitoring for side effects, relapse prevention, and psychoeducation for families, coordinating with hospital-based care for acute episodes when inpatient treatment is needed.",
    whoThisIsFor: [
      "Anyone experiencing hallucinations, delusions or disorganised thinking for the first time",
      "People diagnosed with schizophrenia needing ongoing outpatient management",
      "Family members trying to understand a loved one's psychotic symptoms and how to respond",
      "Patients being discharged from hospital after an acute psychotic episode who need outpatient follow-up",
      "Patients wanting a second opinion on an existing diagnosis or medication",
      "Families concerned about early warning signs of relapse or medication non-adherence",
      "Patients whose current antipsychotic medication is causing troublesome side effects",
    ],
    commonConcerns: [
      "Hallucinations — hearing, seeing or sensing things that aren't there",
      "Delusions — fixed, false beliefs not shared by others",
      "Disorganised thinking, speech or behaviour",
      "Reduced motivation, social withdrawal and flattened emotional expression",
      "Starting, tolerating and staying consistent with antipsychotic medication",
      "Managing side effects of antipsychotic treatment",
      "Family understanding of the illness and how to respond supportively",
      "Recognising early warning signs of relapse before a full crisis develops",
    ],
    practicalNote:
      "Antipsychotic medication is the cornerstone of treatment for both acute symptoms and long-term relapse prevention, with dosing adjusted to balance symptom control against side effects, and long-acting injectable options considered when adherence to daily tablets is difficult. Family psychoeducation and involvement meaningfully improve outcomes. Seek emergency psychiatric care immediately for an acute psychotic crisis involving risk to self or others, command hallucinations, severe self-neglect, or any suicidal ideation — a first episode of psychosis in particular warrants prompt assessment, since early treatment improves long-term outcomes.",
    searchTerms: [
      "Schizophrenia treatment Kathmandu",
      "Schizophrenia doctor Nepal",
      "Schizophrenia psychiatrist Kathmandu",
      "Antipsychotic treatment Nepal",
      "Schizophrenia management Kathmandu",
    ],
    diagram: {
      src: "/images/diagrams/schizophrenia-relapse-pathway.webp",
      alt: "Diagram of the schizophrenia relapse pathway showing early warning signs, stress and reduced medication adherence",
      caption: "Relapse in schizophrenia usually follows a recognizable pathway — which is why family education on early warning signs matters.",
    },
    faqs: [
      {
        question: "Is schizophrenia treatable?",
        answer:
          "Yes. While not curable in the sense of being permanently eliminated, schizophrenia is highly treatable — with consistent antipsychotic medication and ongoing support, many people achieve meaningful symptom control, stability and a functional daily life.",
      },
      {
        question: "How is schizophrenia treated in Kathmandu?",
        answer:
          "Treatment centres on antipsychotic medication, chosen and dosed to balance symptom control against side effects, combined with regular follow-up, monitoring, and family psychoeducation, with coordination to hospital-based care when an acute episode needs inpatient treatment.",
      },
      {
        question: "Is medication needed for life?",
        answer:
          "For most people with schizophrenia, long-term antipsychotic treatment substantially reduces the risk of relapse, and decisions about reducing or stopping medication are made carefully and gradually with a psychiatrist, not independently, given the high relapse risk otherwise.",
      },
      {
        question: "What should I do if a loved one is having a first psychotic episode?",
        answer:
          "Seek prompt psychiatric assessment — a first episode of psychosis responds especially well to early treatment, and delaying assessment is associated with worse long-term outcomes. If there is any risk to safety, go to the nearest emergency department immediately.",
      },
      {
        question: "Are long-acting injectable antipsychotics available in Nepal?",
        answer:
          "Long-acting injectable options are considered for patients who find daily oral medication difficult to maintain consistently, and availability of specific formulations is discussed individually as part of treatment planning.",
      },
      {
        question: "Can family members be involved in treatment and care?",
        answer:
          "Yes, and this is strongly encouraged. Family psychoeducation about the illness, its early warning signs and how to respond supportively is a core part of relapse prevention, with the patient's consent.",
      },
      {
        question: "What are early warning signs that someone with schizophrenia may be relapsing?",
        answer:
          "Common early signs include social withdrawal, disrupted sleep, increasing suspiciousness, difficulty concentrating, or stopping medication, and recognising these early allows treatment to be adjusted before a full crisis develops.",
      },
    ],
  },
  {
    slug: "psychosis-treatment-kathmandu",
    doctorsApproach:
      "A first episode of psychosis needs a careful look at physical causes too — substance use, sleep deprivation, medical illness can all produce something that looks similar — so I don't assume the diagnosis before that's been considered. Once a plan is in place, family education on early warning signs is something I actively offer, because catching a relapse early changes the whole course.",
    title: "Psychosis Treatment in Kathmandu: When to Seek Help",
    headline: "Psychosis treatment in Kathmandu — when to seek help",
    shortDescription:
      "Urgent assessment and treatment for a first or recurring episode of psychosis in Kathmandu — hallucinations, delusions or disorganised thinking — with guidance on when hospital-level care is needed.",
    intro:
      "Psychosis — losing touch with reality through hallucinations, delusions or severely disorganised thinking — can be a one-off episode triggered by extreme stress, substance use or a medical condition, or the first sign of an underlying condition such as schizophrenia or bipolar disorder. It is always worth taking seriously and assessing promptly. Dr. Kushal Kharel provides urgent psychiatric assessment for psychosis in Kathmandu, clarifying the likely cause, starting treatment, and coordinating with hospital-based inpatient care when the situation calls for it.",
    whoThisIsFor: [
      "Anyone experiencing hallucinations, delusions or a sudden change in thinking for the first time",
      "Family members noticing a loved one acting confused, suspicious or out of touch with reality",
      "People with psychosis linked to cannabis or other substance use",
      "New mothers with sudden confusion, hallucinations or delusions after childbirth (postpartum psychosis)",
      "Patients with a known psychiatric condition experiencing a return or worsening of psychotic symptoms",
      "Families unsure whether a loved one's symptoms need emergency hospital care or an outpatient appointment",
    ],
    commonConcerns: [
      "Hearing, seeing or sensing things that others don't (hallucinations)",
      "Fixed, false beliefs not shared by others (delusions)",
      "Confused, disorganised or hard-to-follow thinking and speech",
      "Sudden onset of suspiciousness or paranoia",
      "Psychosis triggered or worsened by cannabis or other substance use",
      "Postpartum psychosis in the days or weeks after childbirth",
      "Whether symptoms mean an emergency hospital visit or an urgent outpatient assessment",
      "Fear and stigma around what a psychotic episode means for the future",
    ],
    practicalNote:
      "Psychosis with any risk to safety — command hallucinations instructing self-harm or harm to others, severe agitation, or an inability to keep oneself safe — is a psychiatric emergency requiring immediate hospital evaluation, not a scheduled outpatient visit; go to the nearest emergency department or call for urgent help. Once safety is confirmed, a full psychiatric assessment clarifies the likely cause and appropriate treatment, typically antipsychotic medication, with close early follow-up given how much early treatment improves long-term outcomes.",
    searchTerms: [
      "Psychosis treatment Kathmandu",
      "Psychosis doctor Nepal",
      "First episode psychosis Kathmandu",
      "Psychotic episode treatment Nepal",
      "When to see a psychiatrist for psychosis",
    ],
    faqs: [
      {
        question: "What are the warning signs of psychosis?",
        answer:
          "Warning signs include hallucinations (hearing, seeing or sensing things that aren't there), delusions (fixed false beliefs), disorganised or hard-to-follow speech, sudden suspiciousness, and a noticeable decline in functioning or self-care — any of these warrant prompt assessment.",
      },
      {
        question: "Is psychosis always a sign of schizophrenia?",
        answer:
          "No. Psychosis can occur as a one-off episode from extreme stress, sleep deprivation, substance use or a medical condition, or as part of conditions including schizophrenia, bipolar disorder, severe depression or postpartum psychosis — assessment is needed to clarify the cause.",
      },
      {
        question: "When is psychosis a medical emergency versus something that can wait for an appointment?",
        answer:
          "Any risk to safety — command hallucinations to harm oneself or others, severe agitation, or an inability to keep oneself safe — is an emergency requiring immediate hospital care. Without an immediate safety risk, prompt (same-day or next-day) psychiatric assessment is still important, since early treatment of a first episode significantly improves outcomes.",
      },
      {
        question: "Can cannabis or other substances cause psychosis?",
        answer:
          "Yes, cannabis and certain other substances can trigger a psychotic episode, particularly with heavy or early use, and can also worsen an existing psychotic condition — assessment includes a careful review of substance use as part of identifying the cause.",
      },
      {
        question: "Is postpartum psychosis different from postpartum depression?",
        answer:
          "Yes, and this distinction matters urgently. Postpartum psychosis is a rare but serious emergency involving hallucinations, delusions or disorganised behaviour, usually within the first two weeks after childbirth, and requires immediate hospitalization, unlike postpartum depression.",
      },
      {
        question: "How is a first episode of psychosis treated?",
        answer:
          "Treatment typically begins with antipsychotic medication alongside a safe environment, sometimes requiring initial hospital admission depending on severity, followed by close outpatient follow-up — early, consistent treatment of a first episode is associated with substantially better long-term outcomes.",
      },
      {
        question: "Will someone who has had a psychotic episode need lifelong treatment?",
        answer:
          "This depends on the underlying cause. A single substance-induced or stress-triggered episode may not require indefinite medication, while psychosis linked to an underlying condition such as schizophrenia usually needs longer-term management — this is clarified through assessment and follow-up over time.",
      },
    ],
  },
  {
    slug: "sleep-problems-treatment-nepal",
    guideSections: [
      {
        heading: "What should I actually do about my sleep problem?",
        body:
          "Start with the basics that make the biggest difference for most people: a consistent wake-up time every day (even on weekends), reducing caffeine after midday, keeping screens away for the last 30-60 minutes before bed, and getting out of bed if you're lying awake and frustrated rather than forcing sleep. These changes alone resolve many mild, short-term sleep problems within a few weeks. If sleep hasn't improved after genuinely trying this for two to three weeks, it's time to see a doctor rather than continuing to self-manage.",
      },
      {
        heading: "When sleep problems need more than self-help",
        body:
          "See a doctor sooner, not later, if poor sleep has lasted more than a month, if you're loudly snoring or someone has noticed you stop breathing briefly during sleep, if you feel excessively sleepy during the day despite enough time in bed, if worry or racing thoughts are what's keeping you awake, or if low mood, alcohol use or a physical health condition might be contributing. Sleep problems are rarely just about sleep itself — they're often connected to anxiety, depression, physical health or a specific sleep disorder that needs its own diagnosis.",
      },
      {
        heading: "Which doctor should I actually see in Kathmandu?",
        body:
          "If your sleep problem seems connected to stress, worry, low mood, racing thoughts, or you're not sure what's causing it, a psychiatrist is the right starting point — this is by far the most common underlying picture behind ongoing insomnia. If you or someone else has noticed loud snoring with breathing pauses (suggesting possible sleep apnea), an ENT specialist or a sleep-study referral may be needed first. Restless, uncomfortable legs at night that improve with movement point toward a specific neurological pattern worth mentioning to whichever doctor you see first, since it changes the approach. When in doubt, a psychiatric assessment can help clarify which direction is right rather than guessing which specialist to book first.",
      },
      {
        heading: "What happens at a sleep-focused psychiatric consultation",
        body:
          "A sleep-focused consultation covers your sleep pattern in detail (timing, quality, what happens when you wake at night), daytime functioning, caffeine and alcohol use, mood and anxiety symptoms, physical health, and current medicines, since several common medicines and health conditions can disrupt sleep. Treatment may include structured sleep-focused CBT (the most evidence-based approach for chronic insomnia), addressing an underlying mood or anxiety condition, or medication for short-term relief while other approaches take effect, rather than long-term sleeping pills as a default.",
      },
      {
        heading: "Booking a sleep consultation in Kathmandu, in person or online",
        body:
          "Dr. Kushal Kharel assesses and treats sleep problems as part of general psychiatric practice at the Kalanki, Kathmandu clinic, in person or online, and can advise whether a referral to another specialist is needed based on your specific pattern. Call or WhatsApp +977 9861800547 to describe your sleep problem and how long it's been going on.",
      },
    ],
    nepaliSections: [
      {
        heading: "डा. खरेलको उपचार शैली",
        body:
          "निद्रा बिग्रिनु 'तनाव मात्र' हो कि अरू केही हो भनेर अलमलिएर आउने बिरामीलाई म तुरुन्तै निद्राको औषधि नदिई पहिले समय, घुर्ने बानी, दौडिरहेको सोचाइ र मुडबारे विस्तृत सोध्छु। यो प्रायः चिन्ता वा उदासीसँग जोडिएको देखिन्छ भने सामान्य मनोचिकित्सा उपचारकै भागको रूपमा हेर्छु, तर सास रोकिने खालको घुर्ने आवाज सुनिएमा पहिले ENT विशेषज्ञकहाँ रेफर गर्छु। जुनसुकै अवस्थामा पनि फलोअपमा प्रगति पुनरावलोकन गर्छु, औषधि अनिश्चित कालसम्म जारी राख्दिन।",
      },
      {
        heading: "निद्राको समस्याका लागि वास्तवमा के गर्ने?",
        body:
          "धेरैलाई सबैभन्दा फरक पार्ने आधारभूत कुराबाट सुरु गर्नुहोस्: हरेक दिन (शनिबार-आइतबार पनि) एउटै समयमा उठ्ने बानी, मध्यान्हपछि क्याफिन घटाउने, सुत्नुभन्दा ३०-६० मिनेटअघि स्क्रिनबाट टाढा रहने, र निद्रा नलागी झर्किरहनुभएको छ भने जबरजस्ती सुत्ने प्रयास नगरी ओछ्यानबाट उठ्ने। यी परिवर्तनले मात्र धेरैको हल्का, छोटो समयको निद्रा समस्या केही हप्तामै समाधान हुन्छ। साँच्चै दुई-तीन हप्ता प्रयास गर्दा पनि निद्रा नसुध्रिए डाक्टरलाई भेट्ने बेला भइसक्यो।",
      },
      {
        heading: "कहिले निद्रा समस्या स्व-सहयोगभन्दा बढी चाहिन्छ?",
        body:
          "निद्रा समस्या एक महिनाभन्दा बढी रहेको छ, ठूलो घुर्ने आवाज आउने वा सुतिरहँदा केही समय सास रोकिएको कसैले याद गरेको छ, ओछ्यानमा पर्याप्त समय बिताउँदा पनि दिनभरि अत्यधिक निद्रा लाग्छ, चिन्ता वा दौडिरहेको सोचाइले निदाउन दिइरहेको छैन, वा उदासी, रक्सी सेवन वा शारीरिक स्वास्थ्य समस्याले योगदान गरिरहेको हुन सक्छ भने ढिलो नगरी डाक्टरलाई भेट्नुहोस्। निद्रा समस्या प्रायः निद्राको मात्र विषय हुँदैन — यो प्रायः चिन्ता, डिप्रेसन, शारीरिक स्वास्थ्य वा छुट्टै निदान चाहिने निद्रा विकारसँग जोडिएको हुन्छ।",
      },
      {
        heading: "काठमाडौंमा वास्तवमा कुन डाक्टरलाई देखाउने?",
        body:
          "तपाईंको निद्रा समस्या तनाव, चिन्ता, उदासी, दौडिरहेको सोचाइसँग जोडिएको जस्तो लाग्छ भने, वा कारण थाहा छैन भने, मनोचिकित्सक नै सही सुरुवात बिन्दु हो — लगातार अनिद्राको पछाडि प्रायः यही सबैभन्दा सामान्य कारण हुन्छ। तपाईं वा कसैले सास रोकिने खालको ठूलो घुर्ने आवाज याद गर्नुभएको छ (सम्भावित स्लिप एप्निया संकेत गर्दै) भने, पहिले ENT विशेषज्ञ वा स्लिप-स्टडी रेफरल चाहिन सक्छ। राति खुट्टा बेचैन र असजिलो हुने तर हल्लाउँदा सजिलो हुने लक्षणले एउटा विशिष्ट स्नायु सम्बन्धी ढाँचा संकेत गर्छ, जुन जुनसुकै डाक्टरलाई पहिले भेटे पनि उल्लेख गर्नुपर्छ किनकि यसले उपचारको दृष्टिकोण बदल्छ। अन्योल भएमा, कुन विशेषज्ञलाई पहिले भेट्ने भनेर अड्कल गर्नुभन्दा मनोचिकित्सकीय मूल्याङ्कनले सही दिशा छुट्याउन मद्दत गर्न सक्छ।",
      },
      {
        heading: "निद्रा समस्याका लागि मनोचिकित्सकीय परामर्शमा के हुन्छ?",
        body:
          "निद्राकेन्द्रित परामर्शमा तपाईंको निद्राको ढाँचा (समय, गुणस्तर, राति ब्युँझँदा के हुन्छ), दिनको कामकाज, क्याफिन र रक्सी सेवन, मुड र चिन्ताका लक्षण, शारीरिक स्वास्थ्य, र हालका औषधिबारे विस्तृत कुराकानी हुन्छ, किनभने धेरै सामान्य औषधि र स्वास्थ्य समस्याले निद्रामा बाधा पुर्‍याउन सक्छन्। उपचारमा संरचित निद्राकेन्द्रित CBT (दीर्घकालीन अनिद्राको लागि सबैभन्दा प्रमाणित विधि), अन्तर्निहित मुड वा चिन्ता समस्याको उपचार, वा अन्य विधिले काम गर्दासम्म छोटो समयका लागि औषधि समावेश हुन सक्छ — दीर्घकालीन निद्राको औषधि पहिलो विकल्पका रूपमा होइन।",
      },
      {
        heading: "काठमाडौंमा निद्रा परामर्शका लागि बुक गर्ने, प्रत्यक्ष वा अनलाइन",
        body:
          "डा. कुशल खरेलले कालंकी, काठमाडौंको क्लिनिकमा सामान्य मनोचिकित्सा अभ्यासकै भागको रूपमा निद्रा समस्याको मूल्याङ्कन र उपचार गर्नुहुन्छ, प्रत्यक्ष वा अनलाइन, र तपाईंको विशिष्ट ढाँचाअनुसार अर्को विशेषज्ञकहाँ रेफर गर्नुपर्ने हो कि होइन भनेर सल्लाह दिन सक्नुहुन्छ। आफ्नो निद्रा समस्या र त्यो कति समयदेखि भइरहेको छ भनेर बताउन +977 9861800547 मा फोन वा ह्वाट्सएप गर्नुहोस्।",
      },
    ],
    doctorsApproach:
      "I ask about sleep in detail before reaching for a sleeping tablet — habits, screen use, caffeine timing, and whether an underlying anxiety or low mood is actually what's keeping you up. Medication has a place for some people, but it's rarely my starting point, since fixing the underlying driver usually holds up better over time.\n\nWhen someone comes to me unsure whether poor sleep is 'just stress' or something else, I start by asking about the pattern in detail -- timing, snoring, racing thoughts, mood -- rather than reaching straight for a sleeping pill. If it looks connected to anxiety or low mood, which is the most common picture I see, I treat it as part of general psychiatric care; if snoring with breathing pauses suggests sleep apnea, I refer to an ENT specialist first. Either way, I review progress at follow-up rather than leaving someone on medication indefinitely.",
    title: "Sleep Problems & Insomnia Treatment in Nepal",
    headline: "Sleep problems and insomnia treatment in Nepal, and online",
    shortDescription:
      "Help for sleep problems and insomnia: trouble falling asleep, waking at night or too early. Dr. Kushal Kharel, in Kathmandu or by Google Meet from anywhere.",
    intro:
      "Sleep problems — trouble falling asleep, waking in the night, waking too early or not feeling rested — are common and treatable. Dr. Kushal Kharel, a Nepal Medical Council-registered Consultant Psychiatrist (MD Psychiatry, registration #27199), looks for why your sleep is disturbed — stress, anxiety, low mood, shift work, alcohol, medicines or a separate sleep disorder — and treats it with CBT for insomnia (CBT-I) and, when appropriate, medication. Consultations are in person at the Kalanki clinic in Kathmandu, or by Google Meet video consultation for people elsewhere in Nepal and Nepalis living abroad, in Nepali or English.",
    whoThisIsFor: [
      "People who struggle to fall asleep, or lie awake with racing thoughts at bedtime",
      "People who wake during the night, or very early, and cannot get back to sleep",
      "People who sleep enough hours but wake unrefreshed and tired through the day",
      "Anyone whose sleep difficulty has lasted several weeks or is affecting work, study or mood",
      "People whose sleep is disturbed alongside low mood, anxiety, OCD or heavy stress",
      "Nepalis abroad whose sleep is disrupted by shift work, night duty, a new time zone or homesickness",
      "People using sleeping tablets or alcohol to fall asleep who want a safer long-term plan",
      "Family members worried about a loved one who is barely sleeping",
    ],
    commonConcerns: [
      "Difficulty falling asleep",
      "Waking often during the night",
      "Waking very early and not being able to go back to sleep",
      "Racing thoughts or worry at bedtime",
      "Tiredness, low energy and poor concentration in the day",
      "Irritability, low mood or anxiety linked to poor sleep",
      "Sleep disrupted by shift work, night duty or an irregular schedule",
      "A reversed day-night pattern, or trouble adjusting to a new time zone",
      "Relying on sleeping tablets or alcohol to fall asleep",
    ],
    practicalNote:
      "Video consultations for sleep problems are held on Google Meet, and sessions are arranged in your own time zone. Before the first call, note roughly when you go to bed and wake up, how long it takes to fall asleep, how often you wake, and your caffeine, alcohol and any medicines. If you snore loudly, stop breathing in your sleep or fall asleep without meaning to in the day, mention it — that may need a separate physical sleep assessment. If poor sleep comes with thoughts of self-harm, confusion or hallucinations, seek urgent help rather than waiting for a scheduled appointment.",
    searchTerms: [
      "Sleep problems treatment Nepal",
      "Insomnia treatment Kathmandu",
      "Sleep difficulty psychiatrist Nepal",
      "Can't sleep at night doctor Nepal",
      "Online insomnia treatment for Nepalis abroad",
      "Insomnia doctor Kathmandu",
      "निद्राको समस्या उपचार",
      "अनिद्रा उपचार",
    ],
    diagram: {
      src: "/images/diagrams/circadian-sleep-cycle.webp",
      alt: "Diagram of the circadian sleep-wake cycle showing how light, routine and body clock timing affect sleep",
      caption: "Sleep follows the body's circadian rhythm — which is why consistent timing and habits are central to treating insomnia, alongside CBT-I.",
    },
    faqs: [
      {
        question: "What counts as a sleep problem?",
        answer:
          "Trouble falling asleep, waking during the night, waking too early, or feeling unrefreshed even though you had enough time in bed. It is worth getting help if this happens most nights and affects your day.",
      },
      {
        question: "Can sleep problems be treated online?",
        answer:
          "Yes. Dr. Kushal Kharel treats sleep problems by Google Meet video consultation — assessment, CBT for insomnia (CBT-I) and, when appropriate, medication — for people in Nepal and Nepalis living abroad.",
      },
      {
        question: "Will I need sleeping pills?",
        answer:
          "Not always. CBT-I is recommended as the first-line treatment for long-term insomnia, and medication may be added for a short period or when CBT-I alone is not enough. This is decided individually.",
      },
      {
        question: "Why can't I sleep when I am stressed, anxious or low?",
        answer:
          "Stress, anxiety and depression are among the most common causes of poor sleep, and poor sleep in turn makes mood and anxiety worse. Treating both together usually works best.",
      },
      {
        question: "Can night shifts or moving to a new time zone cause sleep problems?",
        answer:
          "Yes. Shift work, night duty and time-zone changes disrupt the body clock and are a common cause of poor sleep among Nepalis working or studying abroad. A plan can be built around your working hours.",
      },
      {
        question: "Is it safe to use alcohol or sleeping tablets to fall asleep?",
        answer:
          "Alcohol and sleeping tablets can make sleep worse over time and can become habit-forming. Please do not stop a prescribed sleeping medicine suddenly — talk to the prescriber about a gradual, safe plan.",
      },
      {
        question: "What if I snore loudly or stop breathing during sleep?",
        answer:
          "That can be a sign of sleep apnoea, which needs a physical sleep assessment rather than psychiatric treatment alone. Tell the doctor at the start of your consultation.",
      },
    ],
  },
];

export function getAudiencePage(slug: string) {
  return audiencePages.find((page) => page.slug === slug);
}
