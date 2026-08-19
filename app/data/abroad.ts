export type AbroadGuide = {
  country: string;
  slug: string;
  region: string;
  headline: string;
  intro: string;
  commonConcerns: string[];
  searchTerms: string[];
  practicalNote: string;
  // Real, anonymised patient quotes. Names and identifying details are
  // withheld by the patient's request — do not add a name or invent one.
  testimonial?: {
    quote: string;
    attribution: string;
  };
};

export const abroadGuides: AbroadGuide[] = [
  {
    country: "USA",
    slug: "usa",
    region: "North America",
    headline: "Mental health support for Nepalese in the USA",
    intro:
      "Nepalese in the USA range from international students on F-1 visas juggling tuition, coursework and Optional Practical Training deadlines, to H-1B professionals whose right to remain depends on employer sponsorship, to green-card holders and long-settled families raising children between two cultures, with sizeable communities in cities like Dallas, Columbus, Falls Church and New York. Many carry the quiet weight of education debt, long part-time work hours on top of study, and a roughly ten-to-thirteen-hour time difference from Kathmandu that turns even a phone call home into a scheduling puzzle. US health insurance often covers mental health care only partially, and working out co-pays, in-network therapists and referral requirements can itself become a source of stress on top of the original symptoms. Many also describe a particular strain in explaining psychiatric symptoms to a general practitioner who has never worked with Nepali patients before, which is where a Nepali-speaking psychiatrist can make the first conversation easier. Festivals like Dashain and Tihar, weddings and family emergencies are often experienced from a distance, and the shift from a close-knit joint family culture to a more individualistic society can feel disorienting even years after arrival.",
    commonConcerns: [
      "Anxiety and panic attacks tied to F-1, OPT or H-1B visa deadlines and sponsorship uncertainty, especially around renewal season",
      "Homesickness and grief at missing family milestones, weddings and festivals such as Dashain and Tihar from across the world",
      "Depression, low motivation or burnout linked to tuition debt, a competitive job search and pressure to justify the cost of studying abroad",
      "Sleep disruption from balancing coursework, part-time campus jobs and irregular or overnight work shifts",
      "Confusion or frustration navigating US health insurance, co-pays, deductibles and referral requirements for mental health care",
      "Alcohol or substance use as a way of coping with loneliness or sustained workplace stress",
      "Difficulty adjusting to a more individualistic culture and smaller social circle after growing up in a close-knit joint family",
    ],
    searchTerms: [
      "Nepali psychiatrist USA",
      "Nepalese mental health USA",
      "online psychiatrist for Nepali in USA",
      "psychiatrist for Nepali international students USA",
    ],
    practicalNote:
      "Video consultations with Kathmandu can usually be arranged for early morning or late evening on the Nepal side, which lines up with evening or morning hours across most US time zones, so it helps to mention your specific state when booking. A prescription written in Nepal cannot be assumed to be valid or fillable at a US pharmacy, so medication questions are discussed honestly, including when it makes more sense to arrange ongoing care with a licensed local prescriber who can also work with US insurance. Many university campuses also offer a counselling center that can provide free short-term support between psychiatric appointments, and it helps to have your current medicines and any prior diagnosis ready before the call. If there is any thought of self-harm, a safety crisis, confusion or an overdose, calling 911 or going to the nearest emergency department is the right first step rather than waiting for a scheduled online appointment.",
    testimonial: {
      quote:
        "I had been dealing with my mental health concerns for quite some time before deciding to seek professional help. Dr. Kushal created a comfortable environment where I could discuss things openly. He listened carefully and asked questions that helped clarify what I had been experiencing. I particularly appreciated the clear explanation of the symptoms and treatment options. The online format made it possible for me to receive psychiatric support while living in the USA, which was extremely convenient.",
      attribution: "Confidential patient, USA",
    },
  },
  {
    country: "UK",
    slug: "uk",
    region: "Europe",
    headline: "Mental health support for Nepalese in the UK",
    intro:
      "Nepalese communities in the UK include Gurkha and ex-servicemen families settled for generations in towns like Aldershot, Reading and Ashford, alongside a fast-growing wave of international students and Skilled Worker visa holders in cities such as London, Manchester, Leeds and Cardiff. Settled and pre-settled status paperwork, high rents, and grey, short winter days that can trigger seasonal low mood are common stressors, especially for those living outside London in smaller university towns with little Nepali community nearby. NHS mental health referral waiting lists can run for many months, which leaves some people searching for a faster or culturally familiar alternative while they wait, and simply registering with a local GP as a newcomer can itself take several weeks. For those who grew up watching family manage distress quietly rather than naming it, the more clinical, direct style of a first UK mental health appointment can itself feel like an adjustment. Balancing part-time work with study, and worrying about family back in Nepal while managing bills in pounds sterling, adds to a pressure many carry quietly, without family nearby to notice the change.",
    commonConcerns: [
      "Anxiety about settled or pre-settled status, visa renewal and right-to-work paperwork deadlines",
      "Seasonal low mood, fatigue and reduced motivation during the darker autumn and winter months, sometimes worsening into a full depressive episode",
      "Isolation for those living in smaller university towns with very few other Nepalis nearby",
      "Financial strain from high rent, energy bills and the rising cost of living",
      "Frustration and worsening symptoms while waiting months for an NHS mental health referral or therapy place",
      "Depression, low motivation and sleep disturbance linked to study, work or exam pressure",
      "Intergenerational tension between UK-raised children and parents who grew up in Nepal, particularly around expectations and communication style",
    ],
    searchTerms: [
      "Nepali psychiatrist UK",
      "Nepalese mental health UK",
      "online psychiatrist for Nepali in UK",
      "Nepali mental health support UK students",
    ],
    practicalNote:
      "Nepal is typically only a few hours behind UK clocks, which usually makes it straightforward to find a video-call slot that works for both sides without very early or late hours. As with any consultation from abroad, a Nepal-written prescription cannot simply be taken to a UK pharmacy, so medication needs are discussed openly, including whether registering with a local GP for an NHS mental health referral, or continuing privately, is the more appropriate route for ongoing prescribing. University wellbeing services and student unions can also offer interim support while longer-term care is arranged, and bringing any previous diagnosis or GP letters to the first call helps build a fuller picture quickly. If there are thoughts of self-harm, a mental health crisis or safety concerns, contacting UK emergency services or attending A&E is safer than waiting for a scheduled online appointment.",
    testimonial: {
      quote:
        "My experience with Dr. Kushal through online psychiatric counselling was very positive. I felt that my concerns were taken seriously and that I had enough time to explain what I was going through. He communicated clearly and explained the possible treatment approaches without making things unnecessarily complicated. I also appreciated the professional and confidential nature of the consultation. Being able to access psychiatric support online while living in the UK made the process much easier for me.",
      attribution: "Confidential patient, United Kingdom",
    },
  },
  {
    country: "Australia",
    slug: "australia",
    region: "Oceania",
    headline: "Mental health support for Nepalese in Australia",
    intro:
      "A large share of Nepal's diaspora in Australia arrived on student visas to cities like Sydney, Melbourne, Adelaide, Perth and Brisbane, often taking on significant education loans and living costs that push many into demanding part-time jobs alongside full-time study. Pressure to maintain attendance and grades to protect visa conditions, the cap on permitted work hours, and the long, expensive path many hope will lead toward permanent residency all add ongoing background stress. Overseas Student Health Cover generally does not extend to an overseas-based doctor, so many international students are unsure where mental health support fits into their insurance at all, and some delay seeking help simply because they assume it will not be covered. Group houses shared with several other international students, common in the first year or two, can also mean little privacy to talk about what is actually going on. Being roughly four to six hours ahead of Kathmandu can make it easier to reach family than from other Western countries, but the distance still means missing weddings and the daily texture of home. Many also arrive having sold family land or taken large loans to fund the move, which can turn ordinary academic setbacks into a much heavier sense of failure and obligation.",
    commonConcerns: [
      "Anxiety and stress tied to student visa conditions, work-hour limits and residency pathway uncertainty",
      "Financial pressure and guilt from education loans, high rent and family land or savings sold to fund the move",
      "Depression, low motivation and burnout from combining full-time study with paid work over long semesters",
      "Homesickness and missing family events, weddings and religious occasions back home",
      "Sleep disturbance and fatigue from irregular shift work in hospitality or retail jobs",
      "Alcohol use linked to social pressure, fitting in with a new peer group, or coping with isolation",
      "Relationship strain in couples separated by long-distance study or work commitments",
    ],
    searchTerms: [
      "Nepali psychiatrist Australia",
      "Nepalese mental health Australia",
      "online psychiatrist for Nepali in Australia",
      "Nepali student mental health Australia",
    ],
    practicalNote:
      "Australia is usually four to six hours ahead of Kathmandu depending on the state and season, which generally makes it easier to schedule a video consultation without very unsociable hours on either side. A prescription issued in Nepal cannot be assumed to be recognised at an Australian pharmacy, so this is discussed honestly, including whether registering with a local GP or student health service, often accessible through Overseas Student Health Cover, is the better long-term option for ongoing prescribing. University counselling services can also provide free interim support between appointments, and it is worth checking what your specific OSHC policy actually covers before assuming mental health visits are excluded. For urgent risk, suicidal thoughts, or a mental health crisis, calling 000 or presenting to a local emergency department is safer than waiting for a booked online appointment.",
    testimonial: {
      quote:
        "Living in Australia, I wanted to speak with a psychiatrist who understood my background and with whom I could communicate comfortably. My online consultation with Dr. Kushal was professional and supportive. He took time to understand my concerns and explained the possible reasons behind my symptoms in simple language. I appreciated that the consultation was not rushed. It helped me understand what I was experiencing and gave me a clearer plan for managing my mental health.",
      attribution: "Confidential patient, Australia",
    },
  },
  {
    country: "Canada",
    slug: "canada",
    region: "North America",
    headline: "Mental health support for Nepalese in Canada",
    intro:
      "Nepal has become one of the largest source countries for international students in Canada in recent years, with many arriving on study permits to cities such as Toronto, Winnipeg, Regina and Ottawa, often carrying significant tuition debt and pressure to eventually secure a Post-Graduation Work Permit. Long, dark winters and months of extreme cold can worsen low mood for those unused to the climate, and smaller prairie cities with fewer Nepali families nearby can feel especially isolating compared to larger hubs like Toronto or Vancouver. For many, the first Canadian winter is the hardest, arriving with summer clothing and little understanding of how much daylight and mood can shift by December. Provincial health coverage generally applies only to services within Canada, so an online consultation with a doctor in Nepal is usually arranged privately rather than through a student health plan. Financial stress from part-time gig or service work, uncertainty about the path to permanent residency, and the emotional weight of family responsibilities back home are common threads running through many consultations. A rejected study permit renewal or a program that later loses its Post-Graduation Work Permit eligibility can also arrive as a sudden shock after years of planning, throwing an entire settlement plan into question overnight.",
    commonConcerns: [
      "Anxiety over study permit conditions, Post-Graduation Work Permit eligibility and residency pathway uncertainty",
      "Seasonal low mood and fatigue during long, dark Canadian winters, especially the first one",
      "Isolation in smaller prairie cities and towns with few other Nepalis nearby",
      "Financial stress from tuition debt and part-time or gig work in an unfamiliar job market",
      "Depression, low motivation and sleep disturbance tied to academic or settlement pressure",
      "Alcohol or substance use as a coping response to loneliness or cold-weather isolation",
      "Family strain and a sense of failure when a residency or work-permit plan does not go as expected",
    ],
    searchTerms: [
      "Nepali psychiatrist Canada",
      "Nepalese mental health Canada",
      "online psychiatrist for Nepali in Canada",
      "Nepali international student mental health Canada",
    ],
    practicalNote:
      "Canada is usually around eleven to fourteen hours behind Kathmandu depending on the province and time of year, so video consultations are often easiest to schedule for a Nepal-morning slot that lands in the previous Canadian evening. A Nepal-issued prescription cannot be assumed to be fillable at a Canadian pharmacy, so medication decisions are discussed transparently, including whether a local family doctor, walk-in clinic or campus health service should take on ongoing prescribing. Campus international student offices can also help connect students with local counselling in the meantime, and having your provincial health card details or study permit information handy speeds up any local referral. If there is any risk of self-harm or a mental health emergency, calling 911 or going to the nearest emergency department is the appropriate first step rather than waiting for an online appointment.",
  },
  {
    country: "Netherlands",
    slug: "netherlands",
    region: "Europe",
    headline: "Mental health support for Nepalese in the Netherlands",
    intro:
      "The Netherlands has a notably concentrated Nepali student population around Wageningen University, drawn by strong agricultural and environmental science programmes, alongside smaller communities in Amsterdam, The Hague and Rotterdam. Adjusting to blunt, direct Dutch communication after growing up with more indirect Nepali social norms, along with heavily bureaucratic systems for municipal registration, health insurance and residence permits, can feel overwhelming in the first year. Dutch law requires everyone living there to hold Dutch basic health insurance, and the system generally requires a referral from a local huisarts before seeing a specialist, which is unfamiliar to many newcomers who expect to book a psychiatrist directly as they might at home. Group or shared student housing, common in Dutch university towns, can also mean little private space for a difficult phone call home. The Nepali community here is smaller and more spread out than in the UK or Australia, so peer support and festival gatherings are harder to find nearby, and the flat, grey winter light can add to low mood. Many Nepali graduate students also carry the added weight of a thesis or research project with a hard deadline, working largely independently in a system that expects self-direction rather than the closer academic supervision common in Nepal.",
    commonConcerns: [
      "Anxiety and stress navigating Dutch bureaucracy, mandatory health insurance and residence permit renewal",
      "Isolation from having a smaller, more spread-out Nepali community nearby than in other study destinations",
      "Culture shock adjusting to blunt, direct Dutch communication styles after growing up with more indirect norms",
      "Depression and low mood linked to grey winters and short daylight hours",
      "Academic pressure and financial strain balancing study, thesis deadlines and part-time work limits",
      "Sleep disturbance and anxiety tied to coursework deadlines and independent research pressure",
      "Difficulty discussing emotional struggles openly due to stigma carried from home",
    ],
    searchTerms: [
      "Nepali psychiatrist Netherlands",
      "Nepalese mental health Netherlands",
      "online psychiatrist for Nepali in Netherlands",
      "Nepali student mental health Wageningen",
    ],
    practicalNote:
      "The Netherlands is usually around three to four hours behind Kathmandu, which generally allows for a video consultation slot in the Nepal evening that lands in the Dutch afternoon or early evening. A Nepal-written prescription cannot be assumed to be usable at a Dutch pharmacy, so this is discussed openly, including whether registering with a local huisarts (GP) for prescribing and referral into the Dutch system is the right next step. University student psychologists can also offer short-term support while this is arranged, and it is worth checking your specific Dutch health insurance policy for what mental health cover it already includes. If there is a mental health crisis, suicidal thinking or urgent safety concern, contacting Dutch emergency services or the nearest hospital is safer than waiting for a scheduled online session.",
  },
  {
    country: "Dubai",
    slug: "dubai",
    region: "UAE",
    headline: "Mental health support for Nepalese in Dubai",
    intro:
      "The Nepali community in Dubai and the wider UAE includes a large number of labour migrants working in construction, hospitality, security, retail and domestic work, many on residency tied directly to a single employer's sponsorship, which can make even raising a health concern feel risky. Long shifts, often outdoors or in kitchens and warehouses through extreme summer heat, are frequently combined with shared, crowded labour accommodation that leaves little privacy or quiet time to make a phone call, let alone attend an appointment. The steady pressure of sending remittances home to support parents, spouses or children, combined with distance from family for months or years at a stretch, weighs heavily. Researchers have documented real psychological strain among South Asian migrant workers in the Gulf linked to overwork, isolation and financial pressure, and many describe feeling unable to mention it to an employer or company doctor for fear it could affect their job. A smaller but growing group of Nepali professionals and business owners in Dubai face a different mix of pressures around performance, visibility and financial risk.",
    commonConcerns: [
      "Stress related to employer-sponsored visa status and fear of job loss affecting residency",
      "Exhaustion and sleep disruption from long shifts and extreme heat exposure during summer months",
      "Loneliness from living in shared labour accommodation with little personal privacy",
      "Depression and hopelessness linked to remittance pressure and prolonged distance from family",
      "Anxiety and panic attacks worsened by job insecurity or difficult workplace conditions",
      "Alcohol or substance use as a limited outlet for stress relief",
      "Reluctance to seek help due to stigma and fear it may affect employment or standing with a sponsor",
    ],
    searchTerms: [
      "Nepali psychiatrist Dubai",
      "Nepalese mental health Dubai",
      "online psychiatrist for Nepali in Dubai",
      "Nepali migrant worker mental health UAE",
    ],
    practicalNote:
      "Dubai is usually around one to two hours behind Kathmandu, so video consultations can often be scheduled fairly easily around work shifts, with only a small time difference to plan around and finding a private moment away from shared accommodation the bigger practical challenge. A Nepal-issued prescription cannot be assumed to be recognised by a UAE pharmacy, so medication questions are discussed honestly, including when arranging care through a local clinic is the safer option. Consultations are kept confidential and are never shared with an employer, and using headphones and stepping outside during a break can help protect privacy during a call. If there is a medical emergency, thoughts of self-harm or an urgent safety concern, contacting local emergency services, the nearest hospital, or the Nepali embassy or a trusted community welfare contact should not wait for a scheduled online appointment. It is also worth telling the clinic in advance if your shift pattern rotates, so a workable slot can be found without you needing to request time off.",
    testimonial: {
      quote:
        "I consulted Dr. Kushal online while living in Dubai. What I appreciated most was his patient and understanding approach. He tried to understand my situation rather than simply focusing on individual symptoms. The treatment options were explained clearly, and I felt comfortable asking questions. The online consultation was especially useful because I could receive professional psychiatric support without having to travel. Overall, the experience was reassuring and helped me take my mental health more seriously.",
      attribution: "Confidential patient, Dubai, UAE",
    },
  },
  {
    country: "Qatar",
    slug: "qatar",
    region: "Middle East",
    headline: "Mental health support for Nepalese in Qatar",
    intro:
      "Many Nepalis in Qatar work in construction, infrastructure, hospitality and security roles, often on contracts tied to a single sponsoring employer, in a country that has relied heavily on South Asian migrant labour for its rapid development over the past two decades. Long working hours, physically demanding outdoor work, separation from spouses and children for extended periods, and the responsibility of sending money home every month create sustained financial and emotional pressure. Contract lengths of two or three years without a home visit are still common in some sectors, which stretches the emotional distance from family even further and can make ordinary homesickness harder to bear. Shared accommodation with limited privacy, restricted free time to attend appointments, and cultural stigma that discourages men in particular from naming emotional distress all make it harder to seek support early, even when sleep problems, low mood or anxiety are clearly affecting daily functioning. Many workers only reach out once symptoms have become severe enough to affect their ability to work safely, by which point what began as ordinary stress may have progressed into a more serious depressive or anxiety disorder that takes longer to treat.",
    commonConcerns: [
      "Stress and anxiety related to employer-sponsored visa status and contract renewal",
      "Depression and low mood linked to prolonged separation from spouse and children, sometimes across multi-year contracts",
      "Financial pressure and worry from ongoing remittance responsibilities to support family in Nepal",
      "Sleep disruption from long, physically demanding or irregular working hours in extreme heat",
      "Loneliness and limited privacy while living in shared worker accommodation",
      "Reluctance to seek help due to stigma, especially among male workers raised to appear strong",
      "Alcohol or substance use as a coping response to isolation and stress",
    ],
    searchTerms: [
      "Nepali psychiatrist Qatar",
      "Nepalese mental health Qatar",
      "online psychiatrist for Nepali in Qatar",
      "Nepali migrant worker mental health Qatar",
    ],
    practicalNote:
      "Qatar is usually around one to two hours behind Kathmandu, so arranging a video consultation is generally easier than for countries much further away, though shift patterns and limited free time still need to be planned around. A prescription from Nepal cannot be assumed to be usable at a pharmacy in Qatar, so medication needs are discussed openly, including when local clinic care is the more practical option. Consultations are confidential and kept separate from any workplace record, so concerns can be raised honestly without fear of it reaching an employer. Mental health symptoms are treatable and nothing to be ashamed of; for a medical emergency, safety concern or thoughts of self-harm, contacting local emergency services, a workplace welfare officer, or the Nepali embassy should not wait for a scheduled appointment. Bringing a rough timeline of symptoms and any recent changes at work or home to the first call helps make the most of a limited window of free time.",
    testimonial: {
      quote:
        "Living in Qatar, I wanted to seek psychiatric support while being able to communicate comfortably about my concerns. My consultation with Dr. Kushal was reassuring and professional. He listened carefully, asked relevant questions and explained the situation in a way that was easy to understand. I felt respected throughout the consultation and did not feel judged for discussing my difficulties. The session gave me greater clarity about my mental health and helped me understand the available options for treatment.",
      attribution: "Confidential patient, Qatar",
    },
  },
  {
    country: "Japan",
    slug: "japan",
    region: "Asia",
    headline: "Mental health support for Nepalese in Japan",
    intro:
      "Nepal's community in Japan has grown quickly through language schools, university programmes and the Specified Skilled Worker route, with many arriving in Tokyo, Osaka and other cities needing to reach a working level of Japanese fast while adjusting to a demanding culture of workplace hierarchy, punctuality and long overtime hours. Part-time jobs in convenience stores, restaurants or factories are often combined with study or shift work that leaves little time to rest, and the pressure to send money home adds another layer of responsibility. Company or shared dormitory housing can also mean very little private space to speak openly, even during a phone call. The pressure to appear composed and not burden others, valued in both Nepali and Japanese culture, can make it especially hard to admit that something is wrong. Japan's own strong cultural stigma around discussing emotional difficulty, even among Japanese colleagues, can make it doubly hard for a Nepali worker or student to find the words in a second language. Those who came through the Technical Intern Training or Specified Skilled Worker routes may also face a rigid employer relationship that makes it harder to change jobs or push back on difficult working conditions, which can leave symptoms of anxiety or depression unaddressed for far longer than they otherwise would be.",
    commonConcerns: [
      "Anxiety and stress from needing to reach a working level of Japanese quickly for work, study or daily life",
      "Difficulty adjusting to workplace hierarchy and a long working-hour, overtime-heavy culture",
      "Isolation from being one of few Nepalis in a workplace, school or town",
      "Depression and burnout linked to combining shift work with study or long hours",
      "Sleep disturbance from irregular schedules and part-time night shifts",
      "Difficulty naming or explaining emotional distress across a language and cultural barrier",
      "Financial pressure from tuition, living costs and remittance responsibilities, sharpened by a rigid employer relationship",
    ],
    searchTerms: [
      "Nepali psychiatrist Japan",
      "Nepalese mental health Japan",
      "online psychiatrist for Nepali in Japan",
      "Nepali worker mental health Japan",
    ],
    practicalNote:
      "Japan is usually around three hours ahead of Kathmandu, so an evening video consultation on the Nepal side generally lines up well with a Japanese night-time slot after work or classes. A Nepal-issued prescription cannot be assumed to be usable at a Japanese pharmacy, so this is discussed honestly, including when registering with a local clinic for prescribing is the more realistic path. If there is a medical or safety emergency, calling Japan's emergency services or attending a nearby hospital is the right first step, and a Nepali psychiatrist can still help organise the story and next steps in Nepali when language makes explaining symptoms locally difficult, including preparing what to say to a local doctor or workplace health office if follow-up in Japanese becomes necessary.",
    testimonial: {
      quote:
        "I was living in Japan when I decided to seek professional help for my mental health concerns. The online consultation with Dr. Kushal was comfortable and convenient. He listened carefully, asked relevant questions and explained my symptoms in a way that was easy to understand. I never felt rushed during the consultation. Being able to speak with a psychiatrist from Nepal while living abroad made accessing mental health support much easier for me.",
      attribution: "Confidential patient, Japan",
    },
  },
  {
    country: "Korea",
    slug: "korea",
    region: "Asia",
    headline: "Mental health support for Nepalese in Korea",
    intro:
      "Many Nepalis in South Korea arrive through the Employment Permit System labour agreement between the two governments, working in manufacturing, agriculture, fishing or construction, often in smaller industrial towns rather than Seoul, alongside a smaller but growing number of international students. A hierarchical workplace culture, demanding shift patterns, and the Korean language requirement for both work permits and daily life can be genuinely isolating, especially outside the capital where fewer Nepali workers are nearby. Company dormitories or shared worker housing can also mean little privacy, and taking time off during the day for an appointment is not always straightforward to arrange. Physically demanding labour, restricted free time, and the pressure of remittances to support family back home combine with the everyday difficulty of being far from familiar food, festivals and community. Mental health struggles are still something many feel they must hide from employers or colleagues, fearing it could be read as a sign of weakness or unreliability. Younger Nepalis who arrive drawn by an idealised, media-shaped image of Korea sometimes face a harder adjustment when the reality of factory floors and dormitory life does not match that picture, and that gap between expectation and daily experience is itself something worth discussing openly rather than carrying alone.",
    commonConcerns: [
      "Stress related to Employment Permit System visa status, contract renewal and workplace conditions",
      "Workplace stress from a hierarchical culture and demanding shift or overtime patterns",
      "Isolation in smaller industrial towns with few other Nepali workers nearby",
      "Depression and low mood linked to physically demanding labour and long hours",
      "Sleep problems and fatigue from irregular or rotating shift work",
      "Alcohol use as a coping response to loneliness or workplace pressure",
      "Disappointment and adjustment stress when daily reality differs sharply from expectations before arrival",
    ],
    searchTerms: [
      "Nepali psychiatrist Korea",
      "Nepalese mental health Korea",
      "online psychiatrist for Nepali in Korea",
      "Nepali EPS worker mental health Korea",
    ],
    practicalNote:
      "South Korea is usually around three hours and fifteen minutes ahead of Kathmandu, so an evening video consultation from Nepal typically lines up with a Korean night-time slot after work. A Nepal-written prescription cannot be assumed to be recognised at a Korean pharmacy, so this is discussed openly, including when local clinic care is the more workable long-term option. Sleep problems, panic, anger, persistent sadness or increasing alcohol use can be early signs professional support is needed, and naming these early rather than waiting until a crisis makes treatment considerably easier. It also helps to know that a phone or video consultation from a dormitory room can be kept just as confidential as an in-person visit, with nothing shared with an employer. For a medical emergency or safety concern, local emergency services or the nearest hospital should be contacted rather than waiting for a scheduled appointment.",
    testimonial: {
      quote:
        "I had been struggling with several personal and emotional difficulties and was unsure whether online psychiatric counselling would be helpful. Dr. Kushal made me feel comfortable from the beginning. He listened without judgement and gave me enough time to explain what I was going through. His explanations helped me understand my symptoms and reactions much better. The consultation gave me clarity and a sense of direction regarding what I could do next.",
      attribution: "Confidential patient, South Korea",
    },
  },
  {
    country: "India",
    slug: "india",
    region: "South Asia",
    headline: "Mental health support for Nepalese in India",
    intro:
      "India's open border and long-standing treaty relationship with Nepal mean many Nepalis move there for medical, engineering, nursing or general university education in cities like Delhi, Pune, Bangalore and Manipal, or for informal-sector and daily-wage work, often assuming the cultural closeness will make adjustment easy. In practice, the pressure of India's fiercely competitive academic environment, financial strain for students on tight family budgets, and the instability of informal work with no fixed contract or protection are all real sources of distress. Some also describe pressure to outperform local peers to justify the cost and distance of studying away from Nepal, adding another layer to ordinary academic stress. Geographic closeness to Nepal does not remove the emotional weight of living away from home, and some Nepalis in India describe subtle friction around identity and belonging despite shared language and culture, feeling caught between two places without being fully at home in either. Hostel life away from family supervision for the first time can also be its own adjustment, especially for younger students who move to India straight after school, and comparisons with better-resourced local classmates can add a further layer of pressure to already demanding coursework.",
    commonConcerns: [
      "Academic pressure and anxiety in highly competitive medical, engineering or nursing programmes",
      "Financial stress from tuition, hostel costs and tight family budgets",
      "Job insecurity and stress for those in informal-sector or daily-wage work without a fixed contract",
      "Depression and low motivation linked to academic performance and future career uncertainty",
      "Identity and belonging struggles despite geographic and cultural closeness to home",
      "Substance use concerns, particularly among students living independently for the first time away from family",
      "Family conflict and pressure around academic or career expectations",
    ],
    searchTerms: [
      "Nepali psychiatrist India",
      "Nepalese mental health India",
      "online psychiatrist for Nepali in India",
      "Nepali student mental health India",
    ],
    practicalNote:
      "India shares almost the same time zone as Nepal, with only a fifteen-minute difference, so scheduling a video consultation is usually simple and does not require planning around odd hours. A Nepal-written prescription may not automatically be accepted at every Indian pharmacy, so this is discussed directly, alongside whether local psychiatric care, a hostel or college counselling service, or continued follow-up with Dr. Kushal Kharel is the best fit. Many private colleges now have a counselling cell, though Nepali-language support there is uncommon, which is where a familiar language and cultural context can make a real difference. For a medical emergency, safety risk or acute crisis, the nearest hospital or local emergency services should be used rather than waiting for an online appointment. Many families also find it reassuring that a first conversation can happen in Nepali, which often makes it easier to describe symptoms accurately before deciding on next steps.",
  },
  {
    country: "France",
    slug: "france",
    region: "Europe",
    headline: "Mental health support for Nepalese in France",
    intro:
      "Nepal's community in France is smaller and more concentrated around Paris than in countries like the UK or Australia, which means fewer chances to casually meet other Nepalis, attend a Dashain gathering, or speak Nepali outside the home. Reaching a workable level of French is often necessary for study, work and even routine administrative tasks, and navigating France's paperwork-heavy systems, such as securing a carte de séjour, registering for social security, or booking a préfecture appointment, can be a genuine source of chronic stress on top of study or job pressures. The distance from Nepal can feel compounded by distance from other diaspora hubs in Europe, since visiting Nepali friends elsewhere often means another visa or a long train journey, and everyday tasks that would take minutes at home, from opening a bank account to registering for health cover, can stretch into weeks of paperwork. Explaining emotional or psychiatric symptoms in a second or third language to an unfamiliar healthcare system adds another barrier that keeps some people from seeking help until symptoms have become severe. France's public psychiatric system, organised by catchment sector, can also mean a long wait for a first appointment for someone newly registered in the area.",
    commonConcerns: [
      "Anxiety and stress navigating French bureaucracy, residence permits and préfecture appointments",
      "Isolation from having a small, dispersed Nepali community outside Paris",
      "Language barrier making it hard to access, trust or fully understand local mental health services",
      "Depression and low mood linked to academic or work pressure and cultural distance",
      "Sleep disturbance and anxiety tied to visa or study-permit renewal timelines",
      "Difficulty discussing emotional symptoms in a second or third language",
      "Frustration with long waits for a first appointment within the local public psychiatric system",
    ],
    searchTerms: [
      "Nepali psychiatrist France",
      "Nepalese mental health France",
      "online psychiatrist for Nepali in France",
      "Nepali student mental health Paris",
    ],
    practicalNote:
      "France is usually around three to four hours behind Kathmandu, so a video consultation booked for the Nepal evening typically falls in the French afternoon or early evening, which tends to work well for most schedules. A Nepal-issued prescription cannot be assumed to be usable at a French pharmacy, so this is discussed honestly, including whether registering with a local médecin traitant (GP) for prescribing and referral into the French system is the more realistic path. Being able to describe symptoms first in Nepali or English before facing a French-language appointment can make that later conversation considerably less daunting, and it can also help to prepare a short written summary of symptoms in French beforehand for a later local appointment. For a medical emergency, suicidal thoughts or an urgent safety concern, contacting French emergency services (SAMU) or the nearest hospital is safer than waiting for a scheduled online session.",
  },
  {
    country: "Belgium",
    slug: "belgium",
    region: "Europe",
    headline: "Mental health support for Nepalese in Belgium",
    intro:
      "Nepal's community in Belgium is small and spread across Brussels, Leuven and Ghent, often centred around international student programmes, EU-institution-adjacent work, or family reunification, which can leave newcomers with few Nepali peers nearby to share festivals or simply speak the language socially. Belgium's linguistic split between French and Dutch-speaking regions adds an extra layer of complexity to an already bureaucratic system for residence permits, health insurance registration and municipal paperwork, and it can be genuinely unclear which office or language applies where. Because the community is so small, some also worry about privacy and being recognised within it, which can make people hesitant to seek support locally even when they want to. Long grey winters, a demanding academic or work culture, and the emotional labour of explaining oneself in a new language and system, on top of ordinary homesickness for family and food back in Nepal, all accumulate quietly over time. Many also travel regularly to Brussels for administrative appointments even if they live or study in Leuven, Ghent or elsewhere, adding another layer of practical friction to daily life, and switching between French, Dutch and English at short notice across different offices is its own quiet source of fatigue that builds up over months without ever feeling like a single, nameable problem.",
    commonConcerns: [
      "Anxiety navigating Belgian residence permits, municipal registration and health insurance paperwork",
      "Isolation from a very small, spread-out Nepali community",
      "Adjustment stress from Belgium's French-Dutch linguistic divide and unfamiliar administrative systems",
      "Depression and low mood during long, grey winters",
      "Academic or work pressure combined with the effort of settling into a new culture",
      "Sleep disturbance and worry tied to visa, study or work-permit renewal",
      "Homesickness and difficulty finding Nepali food, festivals or community events nearby, even in Brussels",
    ],
    searchTerms: [
      "Nepali psychiatrist Belgium",
      "Nepalese mental health Belgium",
      "online psychiatrist for Nepali in Belgium",
      "Nepali student mental health Brussels",
    ],
    practicalNote:
      "Belgium is usually around three to four hours behind Kathmandu, so a Nepal-evening video consultation slot generally falls in the Belgian afternoon or early evening without unreasonable hours for either side. A Nepal-written prescription cannot be assumed to be valid at a Belgian pharmacy, so medication questions are discussed openly, including whether registering with a local huisarts or médecin généraliste for prescribing is the better long-term step. Speaking with a psychiatrist in Nepali or English first can also help clarify what to say later in a French or Dutch-language appointment if one becomes necessary, particularly for anyone unsure which regional health service applies to their address. Professional guidance is especially important if symptoms persist, affect work or study, or involve thoughts of self-harm or substance use, and any safety emergency should go to local emergency services rather than wait for an online appointment.",
    testimonial: {
      quote:
        "I consulted Dr. Kushal from Belgium and found the online session very helpful. I was initially hesitant about discussing my mental health through an online appointment, but the consultation felt natural and comfortable. He listened patiently and tried to understand my concerns in the context of my personal circumstances. The explanations were clear and practical. I finished the consultation with a much better understanding of my difficulties and felt more confident about taking the appropriate next steps.",
      attribution: "Confidential patient, Belgium",
    },
  },
  {
    country: "Germany",
    slug: "germany",
    region: "Europe",
    headline: "Mental health support for Nepalese in Germany",
    intro:
      "Germany has become one of the fastest-growing destinations for Nepalese in recent years, drawn by tuition-free or low-cost public universities for Master's study in engineering, computer science and business, with growing student communities in Berlin, Munich, Stuttgart, Frankfurt and Hamburg, alongside a newer and rapidly expanding group arriving through Ausbildung (vocational training) pathways in nursing and elderly care. Many find that a course taught in English does little to prepare them for the largely German-language bureaucracy of an Anmeldung (address registration), a residence permit appointment at the Ausländerbehörde, or a routine visit to a Hausarzt, and the gap between fluent classroom English and everyday German can feel isolating in its own right. Statutory health insurance is mandatory for every resident, and, as in much of Europe, the system generally expects a referral from a general practitioner before a specialist appointment, which surprises many who expect to book a psychiatrist directly as they would at home. Long, dark winters in northern and central Germany, combined with academic pressure to justify a costly move abroad, financial strain from Ausbildung trainee wages that are modest by German standards, and distance from family during festivals, all add up quietly over time.",
    commonConcerns: [
      "Anxiety and stress navigating German-language bureaucracy for Anmeldung, residence permits and health insurance",
      "Isolation from a language gap between English-taught coursework and everyday German-language life",
      "Depression and low mood during long, dark winters, especially in northern and central Germany",
      "Financial strain and burnout among Ausbildung nursing and care trainees on modest trainee wages",
      "Academic pressure and homesickness balancing a demanding Master's programme with distance from family",
      "Difficulty accessing a psychiatrist directly due to the German Hausarzt referral system",
      "Loneliness during festivals such as Dashain and Tihar, spent far from a still-growing Nepali community",
    ],
    searchTerms: [
      "Nepali psychiatrist Germany",
      "Nepalese mental health Germany",
      "online psychiatrist for Nepali in Germany",
      "Nepali student mental health Berlin Munich",
    ],
    practicalNote:
      "Germany is usually around three to four hours behind Kathmandu, so a Nepal-evening video consultation slot generally falls in the German afternoon or early evening for either side. A Nepal-written prescription cannot be assumed to be valid at a German pharmacy (Apotheke), so medication questions are discussed openly, including whether registering with a local Hausarzt for prescribing and referral into the German system is the right next step. Many universities also offer a free Studierendenwerk psychosocial counselling service that can provide short-term support in English while this is arranged, and Ausbildung trainees can typically raise a health concern with their training provider without it affecting their residence status. If there is a mental health crisis, suicidal thinking or urgent safety concern, calling 112 or going to the nearest hospital emergency department is safer than waiting for a scheduled online appointment.",
  },
  {
    country: "Saudi Arabia",
    slug: "saudi-arabia",
    region: "Middle East",
    headline: "Mental health support for Nepalese in Saudi Arabia",
    intro:
      "Saudi Arabia has been one of the largest single destinations for Nepali labour migration for decades, with hundreds of thousands of Nepalis working in construction, security, hospitality, retail and domestic work across cities like Riyadh, Jeddah and Dammam, almost all on employer-sponsored (kafala-linked) work visas. Contracts of two years are common, sometimes without a home visit in between, and long shifts in extreme summer heat are frequently combined with shared labour-camp accommodation offering little privacy for a phone call, let alone a video appointment. The steady weight of remittance responsibility, distance from spouse and children for years at a stretch, and a workplace culture where raising a mental health concern can feel risky to job security all build up quietly. Domestic workers, largely women, face an additional layer of isolation, often living within an employer's household with very limited free time and little contact with other Nepalis. Many describe not having language to name what they're feeling as anything other than 'homesickness,' when what has developed over months is a genuine depressive or anxiety disorder that deserves proper treatment, not just endurance.",
    commonConcerns: [
      "Stress and anxiety tied to employer-sponsored (kafala) visa status and contract renewal",
      "Depression and hopelessness from prolonged separation from spouse and children across multi-year contracts",
      "Isolation for domestic workers living within an employer's household with very limited free time",
      "Exhaustion and sleep disruption from long shifts and extreme summer heat",
      "Financial pressure from ongoing remittance responsibility to family in Nepal",
      "Reluctance to seek help due to stigma and fear it could affect job security or standing with a sponsor",
      "Alcohol or substance use as a limited, sometimes risky, outlet for stress relief",
    ],
    searchTerms: [
      "Nepali psychiatrist Saudi Arabia",
      "Nepalese mental health Saudi Arabia",
      "online psychiatrist for Nepali in Saudi Arabia",
      "Nepali migrant worker mental health Saudi",
    ],
    practicalNote:
      "Saudi Arabia is usually around two to three hours behind Kathmandu, so video consultations can generally be scheduled around work shifts without an unreasonable time difference, with finding a private moment away from shared accommodation often the bigger practical challenge than the time zone itself. A Nepal-issued prescription cannot be assumed to be recognised at a Saudi pharmacy, so medication needs are discussed honestly, including when local clinic care is the safer option. Consultations are confidential and never shared with an employer or sponsor. For a medical emergency, safety concern or thoughts of self-harm, contacting local emergency services, the nearest hospital, or the Nepali embassy or a trusted community welfare contact should not wait for a scheduled appointment.",
  },
  {
    country: "Malaysia",
    slug: "malaysia",
    region: "Southeast Asia",
    headline: "Mental health support for Nepalese in Malaysia",
    intro:
      "Malaysia has historically been one of the top destinations for Nepali labour migration, with large numbers working in manufacturing, plantations, security and services across Kuala Lumpur, Penang and industrial areas like Shah Alam and Klang, typically on employer-sponsored work permits arranged through recruitment agencies. Factory dormitory housing shared among many workers, long shift patterns including night shifts, and recruitment debt — money borrowed in Nepal to pay agency and processing fees before ever earning a wage — are common sources of sustained financial and emotional pressure from the very start of the contract. Passport retention by employers, though restricted by law, still occurs in practice for some workers and can add a real sense of being trapped on top of ordinary homesickness. Distance from family, limited days off, and a workplace culture where health complaints, including mental health, can be met with suspicion rather than support, all discourage people from raising a concern until it has become severe. Malaysia's own tropical climate and unfamiliar food can add a quieter layer of adjustment difficulty that's easy to dismiss as trivial but adds up over months.",
    commonConcerns: [
      "Financial pressure and anxiety from recruitment debt taken on before departure from Nepal",
      "Stress tied to employer-sponsored work permit status and, for some, passport retention",
      "Sleep disruption from long or rotating shift work, including night shifts, in factory or plantation settings",
      "Depression and low mood linked to prolonged separation from family and limited days off",
      "Isolation in shared dormitory housing with little privacy or personal space",
      "Reluctance to raise health concerns due to workplace stigma or fear it could affect employment",
      "Alcohol use as a coping response to isolation and physically demanding work",
    ],
    searchTerms: [
      "Nepali psychiatrist Malaysia",
      "Nepalese mental health Malaysia",
      "online psychiatrist for Nepali in Malaysia",
      "Nepali migrant worker mental health Malaysia",
    ],
    practicalNote:
      "Malaysia is usually around two hours and fifteen minutes ahead of Kathmandu, so an evening video consultation from Nepal typically lines up with a Malaysian night-time slot after work. A Nepal-issued prescription cannot be assumed to be recognised at a Malaysian pharmacy, so medication needs are discussed openly, including when local clinic care is the more practical option. Consultations are confidential and kept separate from any workplace record. If a passport has been retained by an employer, this is a separate legal and welfare matter best raised with the Nepali embassy or a labour welfare organisation alongside any mental health support. For a medical emergency, safety concern or thoughts of self-harm, contacting local emergency services, the nearest hospital, or the Nepali embassy should not wait for a scheduled appointment.",
    testimonial: {
      quote:
        "The online psychiatric consultation was convenient and professional. Dr. Kushal gave me adequate time to explain my concerns and listened carefully before discussing possible explanations and treatment options. I appreciated the fact that I could ask questions and clarify my doubts during the session. The consultation helped me understand my symptoms better and reduced some of the uncertainty I had been experiencing. Being able to access psychiatric care remotely while living in Malaysia was particularly helpful.",
      attribution: "Confidential patient, Malaysia",
    },
  },
  {
    country: "Kuwait",
    slug: "kuwait",
    region: "Middle East",
    headline: "Mental health support for Nepalese in Kuwait",
    intro:
      "Kuwait has long been one of the largest destinations for Nepali labour migration, with an especially large number of Nepali women working as live-in domestic helpers and housemaids inside private households, alongside men in construction, security and service roles, almost all on employer-sponsored (kafala-linked) work visas. Live-in domestic work brings a particular kind of isolation: little or no day off, no coworkers to talk to, and daily life entirely inside a single household under an employer's supervision, which can make even recognising a mental health problem difficult when there is no one nearby to notice a change. Passport retention by employers, though restricted by law, still happens in practice for some domestic workers and can add a real sense of being trapped. Contracts of two years without a home visit remain common, and the combination of remittance pressure, distance from children being raised by relatives back home, and fear that raising a complaint could mean losing the job entirely keeps many enduring symptoms silently for months before reaching out.",
    commonConcerns: [
      "Isolation and lack of free time for live-in domestic workers with little or no day off",
      "Stress and anxiety tied to employer-sponsored (kafala) visa status and, for some, passport retention",
      "Depression and hopelessness from prolonged separation from children being raised by relatives in Nepal",
      "Fear that raising a health concern could put the job or standing with a sponsor at risk",
      "Financial pressure from ongoing remittance responsibility to family in Nepal",
      "Exhaustion and sleep disruption from long hours with little defined rest time",
      "Difficulty finding a private moment or place to make a confidential phone call",
    ],
    searchTerms: [
      "Nepali psychiatrist Kuwait",
      "Nepalese mental health Kuwait",
      "online psychiatrist for Nepali in Kuwait",
      "Nepali domestic worker mental health Kuwait",
    ],
    practicalNote:
      "Kuwait is usually around two to three hours behind Kathmandu, so video consultations can generally be arranged without an unreasonable time difference, though finding a private moment away from an employer's household is often the harder practical challenge, particularly for live-in domestic workers. A Nepal-issued prescription cannot be assumed to be recognised at a Kuwaiti pharmacy, so medication needs are discussed honestly, including when local clinic care is the safer option. Consultations are confidential and never shared with an employer or sponsor. If a passport has been retained or there are safety concerns beyond a mental health symptom, this is a separate welfare matter best raised with the Nepali embassy or a labour welfare organisation alongside any mental health support. For a medical emergency, safety concern or thoughts of self-harm, contacting local emergency services, the nearest hospital, or the Nepali embassy should not wait for a scheduled appointment.",
  },
  {
    country: "Romania",
    slug: "romania",
    region: "Europe",
    headline: "Mental health support for Nepalese in Romania",
    intro:
      "Romania has become the largest and fastest-growing destination in Europe for Nepali workers in just a few years, drawing large numbers into manufacturing, construction, warehouse logistics and hospitality roles around Bucharest and other industrial towns, as Gulf recruitment has grown more uncertain. For many, Romania is the first EU country they have lived or worked in, and the appeal of eventual EU labour mobility sits alongside the reality of a workplace culture, language and climate that few arrive fully prepared for. Winters are far colder than almost anywhere most workers have experienced, and a Romanian-language-dominant workplace and healthcare system can make even simple daily tasks feel effortful in the first months. Because the Nepali community here is newer and smaller than in the Gulf or in longer-established European destinations, there are fewer countrymen nearby to share the adjustment with, and recruitment debt taken on in Nepal to secure the job adds financial pressure from the very start of the contract.",
    commonConcerns: [
      "Adjustment stress from being in a newer, smaller Nepali community with fewer countrymen nearby",
      "Financial pressure and anxiety from recruitment debt taken on before departure from Nepal",
      "Depression and low mood during Romanian winters that are far colder than most workers have experienced",
      "Language barrier making daily tasks and healthcare access feel effortful",
      "Sleep disruption and fatigue from factory or warehouse shift work",
      "Isolation and homesickness with limited access to Nepali food, festivals or community events",
      "Uncertainty and stress around contract renewal and the path to longer-term EU work status",
    ],
    searchTerms: [
      "Nepali psychiatrist Romania",
      "Nepalese mental health Romania",
      "online psychiatrist for Nepali in Romania",
      "Nepali migrant worker mental health Romania",
    ],
    practicalNote:
      "Romania is usually around three to four hours behind Kathmandu, so a Nepal-evening video consultation slot generally falls in the Romanian afternoon or early evening, which tends to work well around most shift patterns. A Nepal-issued prescription cannot be assumed to be recognised at a Romanian pharmacy, so medication needs are discussed openly, including when registering with local clinic care is the more realistic path for ongoing prescribing. Consultations are confidential and kept separate from any workplace record. For a medical emergency, safety concern or thoughts of self-harm, contacting local emergency services (112), the nearest hospital, or the Nepali embassy should not wait for a scheduled appointment.",
  },
  {
    country: "Cyprus",
    slug: "cyprus",
    region: "Europe",
    headline: "Mental health support for Nepalese in Cyprus",
    intro:
      "Cyprus has quickly become one of the largest destinations in Europe for Nepali workers, with a notably high share of women recruited into domestic work, hospitality, agriculture and care roles across Nicosia, Limassol and other towns. As an EU member state, Cyprus offers a different legal footing than Gulf employment, but many still arrive on contracts tied closely to a single employer, and live-in domestic or care roles can bring the same kind of isolation found in other countries — long hours inside someone else's household, limited free time, and few opportunities to meet other Nepalis. The island's Mediterranean climate is a welcome change from the Gulf for some, but distance from family, recruitment costs paid before departure, and the emotional labour of adjusting to a new language and employer relationship remain real sources of strain, particularly for women managing both the pressure of the job and expectations from family back home about sending money and staying safe.",
    commonConcerns: [
      "Isolation for women in live-in domestic, care or hospitality roles with limited free time",
      "Financial pressure from recruitment costs paid before departure from Nepal",
      "Stress tied to a work contract closely bound to a single employer",
      "Depression and low mood linked to distance from family and limited community nearby",
      "Anxiety around navigating a new language and employer relationship",
      "Sleep disruption and fatigue from long or irregular working hours",
      "Pressure and worry around meeting family expectations for remittances while managing a demanding job",
    ],
    searchTerms: [
      "Nepali psychiatrist Cyprus",
      "Nepalese mental health Cyprus",
      "online psychiatrist for Nepali in Cyprus",
      "Nepali migrant worker mental health Cyprus",
    ],
    practicalNote:
      "Cyprus is usually around three to four hours behind Kathmandu, so a Nepal-evening video consultation slot generally falls in the Cypriot afternoon or early evening. A Nepal-issued prescription cannot be assumed to be recognised at a Cypriot pharmacy, so medication needs are discussed openly, including when registering with local clinic care is the more realistic path for ongoing prescribing. Consultations are confidential and kept separate from any workplace record. For a medical emergency, safety concern or thoughts of self-harm, contacting local emergency services (112), the nearest hospital, or the Nepali embassy should not wait for a scheduled appointment.",
  },
  {
    country: "Israel",
    slug: "israel",
    region: "Middle East",
    headline: "Mental health support for Nepalese in Israel",
    intro:
      "A structured government-to-government agreement between Nepal and Israel now sends Nepali caregivers, most of them women, to work in geriatric homes and long-term care centres across Israel, a role that is emotionally demanding in ways quite different from factory or domestic work elsewhere. Caregivers spend their days closely supporting elderly residents, often through serious illness, cognitive decline and death, in a language and culture that takes real time to learn, and the emotional weight of that work, known as compassion fatigue in the caregiving field, is a genuine and under-discussed occupational risk. Unlike some Gulf or Southeast Asian labour routes, this programme is more formally structured, which can mean fewer risks around passport retention or recruitment debt, but it does not remove the difficulty of the work itself, the distance from one's own family while caring intensively for someone else's elderly relative, or the disorientation of adjusting to Hebrew and a healthcare system built very differently from home.",
    commonConcerns: [
      "Compassion fatigue and emotional exhaustion from caregiving work involving serious illness, decline and death",
      "Depression and grief reactions after the death of a resident cared for closely over time",
      "Isolation and language barrier while adjusting to Hebrew and daily life in an unfamiliar system",
      "Guilt and distress from caring intensively for someone else's elderly relative while distant from one's own family",
      "Sleep disruption and burnout from demanding, emotionally intensive caregiving schedules",
      "Anxiety around contract terms, workplace expectations and adjusting to a new care culture",
      "Reluctance to name emotional strain as anything more than tiredness, delaying proper treatment",
    ],
    searchTerms: [
      "Nepali psychiatrist Israel",
      "Nepalese mental health Israel",
      "online psychiatrist for Nepali in Israel",
      "Nepali caregiver mental health Israel",
    ],
    practicalNote:
      "Israel is usually around three hours behind Kathmandu, so a Nepal-evening video consultation slot generally falls in the Israeli afternoon or early evening. A Nepal-issued prescription cannot be assumed to be recognised at an Israeli pharmacy, so medication needs are discussed honestly, including when local clinic care is the more practical option. Consultations are confidential and kept separate from any workplace or agency record. Compassion fatigue and grief after a resident's death are genuine, treatable conditions, not a sign of being unsuited to caregiving work. For a medical emergency, safety concern or thoughts of self-harm, contacting local emergency services, the nearest hospital, or the Nepali embassy should not wait for a scheduled appointment.",
  },
  {
    country: "Portugal",
    slug: "portugal",
    region: "Europe",
    headline: "Mental health support for Nepalese in Portugal",
    intro:
      "Portugal has grown quickly as a newer European destination for Nepalis, drawn by agricultural, hospitality and service-sector work around Lisbon, Porto and smaller towns, with EU residency prospects that many hope will eventually open the door to work or study elsewhere in Europe. As a still-developing community, the Nepali diaspora here is smaller and more scattered than in the Gulf or longer-established European hubs, and Portuguese-language bureaucracy for residence permits, tax registration (NIF) and healthcare enrolment can be genuinely difficult to navigate without local support. Seasonal agricultural work in particular can mean irregular hours, remote rural placements far from any Nepali community, and housing arranged directly by an employer with little personal choice involved. The gap between the hope that brought many to Portugal, a stable EU foothold, and the slower, more uncertain reality of early years there, including modest wages relative to the cost of settling in, can be a quiet but persistent source of low mood.",
    commonConcerns: [
      "Isolation from a small, scattered and still-developing Nepali community",
      "Anxiety navigating Portuguese-language bureaucracy for residence permits, tax registration and healthcare",
      "Depression and low mood from the gap between expectations before arrival and the slower reality of early settlement",
      "Isolation for seasonal agricultural workers placed in remote rural areas with little community nearby",
      "Financial strain from modest wages relative to the cost of settling into a new country",
      "Sleep disruption and fatigue from irregular seasonal or hospitality shift work",
      "Uncertainty and stress around residence permit renewal and the pathway to longer-term EU status",
    ],
    searchTerms: [
      "Nepali psychiatrist Portugal",
      "Nepalese mental health Portugal",
      "online psychiatrist for Nepali in Portugal",
      "Nepali migrant worker mental health Portugal",
    ],
    practicalNote:
      "Portugal is usually around five to six hours behind Kathmandu, the largest gap of any country covered here, so a Nepal late-evening or night video consultation slot generally lines up best with the Portuguese afternoon or early evening. A Nepal-issued prescription cannot be assumed to be recognised at a Portuguese pharmacy, so medication needs are discussed openly, including when registering with a local clinic for prescribing is the more realistic path. Consultations are confidential and kept separate from any workplace record. For a medical emergency, safety concern or thoughts of self-harm, contacting local emergency services (112), the nearest hospital, or the Nepali embassy should not wait for a scheduled appointment.",
  },
  {
    country: "Oman",
    slug: "oman",
    region: "Middle East",
    headline: "Mental health support for Nepalese in Oman",
    intro:
      "Oman has quietly become one of the steadier Gulf destinations for Nepali labour migration, with large numbers working in construction, security, hospitality, retail and domestic work across Muscat, Sohar, Salalah and Sur, almost all on employer-sponsored work visas. Contracts of two years are common, often without a home visit in between, and long shifts through Oman's intense summer heat are frequently combined with shared labour accommodation that leaves little privacy for a phone call, let alone a video appointment. The steady pressure of sending remittances home, distance from spouse and children for years at a stretch, and a workplace culture where raising a health concern, especially a mental health concern, can feel risky to job security all build up quietly over a contract. Domestic workers, most of them women living within an employer's household, face an additional layer of isolation with very limited free time and little contact with other Nepalis. Many describe not having language for what they're feeling beyond 'homesickness,' when months of accumulated strain have in fact become a genuine depressive or anxiety disorder that deserves proper treatment rather than quiet endurance.",
    commonConcerns: [
      "Stress and anxiety tied to employer-sponsored visa status and contract renewal",
      "Depression and hopelessness from prolonged separation from spouse and children across multi-year contracts",
      "Isolation for domestic workers living within an employer's household with very limited free time",
      "Exhaustion and sleep disruption from long shifts and extreme summer heat",
      "Financial pressure from ongoing remittance responsibility to family in Nepal",
      "Reluctance to seek help due to stigma and fear it could affect job security or standing with a sponsor",
      "Alcohol or substance use as a limited, sometimes risky, outlet for stress relief",
    ],
    searchTerms: [
      "Nepali psychiatrist Oman",
      "Nepalese mental health Oman",
      "online psychiatrist for Nepali in Oman",
      "Nepali migrant worker mental health Oman",
    ],
    practicalNote:
      "Oman is usually around one hour and forty-five minutes behind Kathmandu, so video consultations can generally be scheduled around work shifts without an unreasonable time difference, with finding a private moment away from shared accommodation often the bigger practical challenge. A Nepal-issued prescription cannot be assumed to be recognised at an Omani pharmacy, so medication needs are discussed honestly, including when local clinic care is the safer option. Consultations are confidential and never shared with an employer or sponsor. For a medical emergency, safety concern or thoughts of self-harm, contacting local emergency services, the nearest hospital, or the Nepali embassy or a trusted community welfare contact should not wait for a scheduled appointment.",
  },
  {
    country: "Bahrain",
    slug: "bahrain",
    region: "Middle East",
    headline: "Mental health support for Nepalese in Bahrain",
    intro:
      "Bahrain is a smaller Gulf nation but hosts a significant Nepali workforce relative to its size, in construction, hospitality, retail, security and services concentrated mostly around Manama and Muharraq, most on employer-sponsored work visas arranged through recruitment agencies. As one of the more service- and finance-oriented Gulf economies, Bahrain draws a slightly wider mix of Nepalis than purely construction-heavy neighbours, from hotel and restaurant staff to security guards and a smaller number of skilled and semi-skilled professionals, though the underlying pressures of recruitment debt, distance from family and a workplace culture where health concerns are rarely raised openly are much the same as elsewhere in the Gulf. Shared worker accommodation with limited privacy, long shifts, and the steady responsibility of remittances back to Nepal build up quietly over a contract, and Bahrain's small size means the Nepali community, while close-knit, is also small enough that some worry about privacy and being recognised if they seek support locally.",
    commonConcerns: [
      "Stress and anxiety tied to employer-sponsored visa status and contract renewal",
      "Financial pressure and anxiety from recruitment debt taken on before departure from Nepal",
      "Isolation from living in shared worker accommodation with little personal privacy",
      "Depression and low mood linked to prolonged separation from family in Nepal",
      "Sleep disruption and fatigue from long or irregular shift work in hospitality, retail or construction",
      "Reluctance to seek help locally due to Bahrain's small, close-knit Nepali community and privacy concerns",
      "Alcohol or substance use as a coping response to isolation and workplace stress",
    ],
    searchTerms: [
      "Nepali psychiatrist Bahrain",
      "Nepalese mental health Bahrain",
      "online psychiatrist for Nepali in Bahrain",
      "Nepali migrant worker mental health Bahrain",
    ],
    practicalNote:
      "Bahrain is usually around two hours and forty-five minutes behind Kathmandu, so video consultations can generally be scheduled around work shifts with a moderate time difference to plan around. A Nepal-issued prescription cannot be assumed to be recognised at a Bahraini pharmacy, so medication needs are discussed openly, including when local clinic care is the more practical option. Consultations are confidential and kept separate from any workplace or sponsor record, which can matter especially given how small and closely connected the local Nepali community is. For a medical emergency, safety concern or thoughts of self-harm, contacting local emergency services, the nearest hospital, or the Nepali embassy should not wait for a scheduled appointment.",
  },
  {
    country: "Singapore",
    slug: "singapore",
    region: "Southeast Asia",
    headline: "Mental health support for Nepalese in Singapore",
    intro:
      "Singapore's Nepali community sits across two quite different worlds: a large group of Work Permit holders in construction, marine and shipyard work and security services, many housed in large purpose-built dormitories, and a smaller but growing group of professionals on Employment Passes in finance, technology and other skilled sectors, often drawn by Singapore's reputation as a stable, well-run hub in the region. For Work Permit holders, long shifts, strict dormitory living arrangements, and recruitment costs paid before departure from Nepal create sustained financial and emotional pressure, while limited free time and distance from family in Nepal add to the strain, even though Singapore's regulated labour system generally protects against the passport retention and outright exploitation sometimes seen elsewhere. For Employment Pass professionals, the pressure looks different: a demanding, highly competitive work culture, a minimum salary threshold tied directly to visa renewal, and the isolation of building a career and social life from scratch in one of the world's most expensive cities. Both groups can feel that admitting to struggling with mental health risks looking weak in a system that prizes performance and self-reliance.",
    commonConcerns: [
      "Stress tied to Work Permit renewal, salary thresholds for Employment Pass holders, and overall visa security",
      "Exhaustion and sleep disruption from long shifts in construction, marine or shipyard work",
      "Financial pressure and anxiety from recruitment costs taken on before departure from Nepal",
      "Isolation in large dormitory housing with little personal privacy for Work Permit holders",
      "Career and performance pressure, isolation and burnout for Employment Pass professionals building a life from scratch",
      "Depression and low mood linked to prolonged separation from family and the high cost of living",
      "Reluctance to seek help due to stigma and fear it could affect employment or professional standing",
    ],
    searchTerms: [
      "Nepali psychiatrist Singapore",
      "Nepalese mental health Singapore",
      "online psychiatrist for Nepali in Singapore",
      "Nepali migrant worker mental health Singapore",
    ],
    practicalNote:
      "Singapore is usually around two hours and fifteen minutes ahead of Kathmandu, so a Nepal-evening video consultation slot generally lines up with a Singapore night-time slot after work, without an unreasonable time difference on either side. A Nepal-issued prescription cannot be assumed to be recognised at a Singapore pharmacy, so medication needs are discussed openly, including when local clinic care is the more practical option for ongoing prescribing. Consultations are confidential and kept separate from any workplace, dormitory or employer record. For a medical emergency, safety concern or thoughts of self-harm, contacting local emergency services, the nearest hospital, or the Nepali embassy should not wait for a scheduled appointment.",
  },
  {
    country: "New Zealand",
    slug: "new-zealand",
    region: "Oceania",
    headline: "Mental health support for Nepalese in New Zealand",
    intro:
      "New Zealand has drawn a steadily growing number of Nepalis on student visas to Auckland, Wellington, Christchurch and Hamilton, many hoping a diploma or degree will lead to a post-study work visa and, eventually, residence. The cap on permitted work hours during study, high tuition and living costs relative to a smaller local job market than Australia's, and the long-running uncertainty of successive changes to post-study work and residence pathway rules all create sustained background stress, and a policy change can arrive with little warning after years of a family's financial planning around it. Many students take on physically demanding part-time work in hospitality, retail, aged care or orchards to cover fees and rent, often sharing a house with several other international students with little privacy for a difficult phone call home. Being roughly six to seven hours ahead of Kathmandu still allows for reasonably timed calls with family, but New Zealand's small size and geographic isolation from the rest of the world can itself add to a sense of distance beyond what the clock suggests, especially for those in smaller cities with only a handful of other Nepalis nearby.",
    commonConcerns: [
      "Anxiety and stress tied to student visa conditions, work-hour limits and shifting post-study work or residence pathway rules",
      "Financial pressure from tuition, rent and living costs relative to a smaller local job market",
      "Depression, low motivation and burnout from combining full-time study with physically demanding part-time work",
      "Isolation in smaller cities and towns with very few other Nepalis nearby",
      "Homesickness and a heightened sense of distance from family due to New Zealand's geographic remoteness",
      "Sleep disturbance and fatigue from irregular hospitality, retail or aged-care shift work",
      "Alcohol use linked to social pressure or coping with isolation in shared student housing",
    ],
    searchTerms: [
      "Nepali psychiatrist New Zealand",
      "Nepalese mental health New Zealand",
      "online psychiatrist for Nepali in New Zealand",
      "Nepali student mental health New Zealand",
    ],
    practicalNote:
      "New Zealand is usually around six to seven hours ahead of Kathmandu depending on daylight saving, so a Nepal-morning video consultation slot generally lines up with a New Zealand afternoon or evening on the same day. A prescription written in Nepal cannot be assumed to be valid or fillable at a New Zealand pharmacy, so medication questions are discussed honestly, including whether registering with a local GP or student health service is the more appropriate route for ongoing prescribing. Many institutions also offer a free student wellbeing or counselling service that can provide interim support between appointments. For urgent risk, suicidal thoughts, or a mental health crisis, calling 111 or presenting to a local emergency department is safer than waiting for a scheduled online appointment.",
  },
  {
    country: "Ireland",
    slug: "ireland",
    region: "Europe",
    headline: "Mental health support for Nepalese in Ireland",
    intro:
      "Ireland has become one of Europe's fastest-growing destinations for Nepali students in just a few years, drawn largely by a generous two-year post-study stay-back visa attached to a master's degree, with most settling in Dublin and smaller numbers in Cork, Galway and Limerick. What many don't fully appreciate before arriving is Dublin's acute accommodation crisis: rents that can consume most of a part-time income, long commutes from shared houses far outside the city, and a genuinely difficult search for any room at all in the first weeks, which can turn what should be an exciting new chapter into a stressful scramble before classes have even begun. The permitted part-time work-hour cap during term, competition for the limited part-time and graduate jobs available, and pressure to convert the stay-back period into a long-term visa or job offer before it expires all add to sustained anxiety. As in the UK, Ireland's grey, short winter days can worsen low mood, and a still-young, fast-expanding Nepali community means fewer long-settled families or community organisations to lean on compared with more established diaspora hubs.",
    commonConcerns: [
      "Anxiety and stress from Dublin's accommodation shortage and high rents relative to part-time income",
      "Pressure to convert the two-year post-study stay-back visa into a long-term job or immigration pathway before it expires",
      "Financial strain from tuition, high rent and a competitive part-time and graduate job market",
      "Isolation from being part of a still-young, fast-growing Nepali community with fewer established support networks",
      "Seasonal low mood and fatigue during grey, short-daylight Irish winters",
      "Depression, low motivation and sleep disturbance tied to study, work or job-search pressure",
      "Homesickness and missing family milestones and festivals from across the world",
    ],
    searchTerms: [
      "Nepali psychiatrist Ireland",
      "Nepalese mental health Ireland",
      "online psychiatrist for Nepali in Ireland",
      "Nepali student mental health Dublin",
    ],
    practicalNote:
      "Ireland is usually around five to six hours behind Kathmandu depending on daylight saving, so a Nepal late-evening video consultation slot generally lines up with an Irish afternoon or early evening. A Nepal-written prescription cannot be assumed to be valid at an Irish pharmacy, so medication needs are discussed openly, including whether registering with a local GP for prescribing and referral into the Irish system, often through the HSE, is the right next step. University student health and counselling services can also offer interim support while this is arranged. For urgent risk, suicidal thoughts or a mental health crisis, calling 112 or 999 or attending a local emergency department is safer than waiting for a scheduled online appointment.",
  },
  {
    country: "Hong Kong",
    slug: "hong-kong",
    region: "Asia",
    headline: "Mental health support for Nepalese in Hong Kong",
    intro:
      "Hong Kong is home to one of the oldest and most established Nepali communities outside South Asia, rooted in generations of Gurkha military service with the British Army and the right of abode this created for many families, concentrated in areas such as Yuen Long, Tsuen Wan and Jordan. Alongside these long-settled, often multi-generational families are newer arrivals working in hospitality, retail, construction and domestic or care work. For Hong Kong-born younger Nepalis, tension between Cantonese-medium schooling and mainstream society and a Nepali-speaking home life can create a genuine sense of caught-between-two-worlds identity strain, while newer arrivals face the same Cantonese-language barrier in reverse when trying to access local healthcare or navigate daily life. Hong Kong's famously high cost of living and cramped housing, even for long-settled families, adds ongoing financial pressure, and elderly Gurkha veterans and their spouses can carry their own under-discussed burden of past service-related trauma alongside the ordinary difficulties of ageing far from ancestral villages in Nepal.",
    commonConcerns: [
      "Identity and belonging strain for Hong Kong-raised younger Nepalis caught between Cantonese-medium schooling and Nepali home life",
      "Language barrier for newer arrivals trying to access local healthcare or navigate daily bureaucracy in Cantonese",
      "Financial pressure from Hong Kong's high cost of living and limited, expensive housing",
      "Depression and low mood linked to isolation among domestic or care workers with limited free time",
      "Unaddressed trauma or emotional strain among elderly Gurkha veterans and their spouses",
      "Intergenerational tension between long-settled families and Hong Kong-raised children",
      "Anxiety tied to work permit or visa status for newer arrivals in service, retail or construction roles",
    ],
    searchTerms: [
      "Nepali psychiatrist Hong Kong",
      "Nepalese mental health Hong Kong",
      "online psychiatrist for Nepali in Hong Kong",
      "Gurkha family mental health Hong Kong",
    ],
    practicalNote:
      "Hong Kong is usually around two hours and fifteen minutes ahead of Kathmandu, so an evening video consultation from Nepal generally lines up with a Hong Kong night-time slot after work or school. A Nepal-issued prescription cannot be assumed to be recognised at a Hong Kong pharmacy, so medication needs are discussed openly, including whether registering with a local general practitioner or public clinic for prescribing is the right next step. Consultations can be conducted in Nepali, which can be a genuine relief for elderly Gurkha veterans, spouses or newer arrivals who find explaining symptoms in English or Cantonese difficult. For a medical emergency, safety concern or thoughts of self-harm, calling 999 or attending the nearest hospital accident and emergency department should not wait for a scheduled online appointment.",
  },
  {
    country: "Poland",
    slug: "poland",
    region: "Europe",
    headline: "Mental health support for Nepalese in Poland",
    intro:
      "Poland has emerged rapidly as an EU alternative to Gulf labour migration for Nepalis, drawing growing numbers into manufacturing, warehouse logistics, food processing and construction roles around Warsaw, Wrocław and Kraków, often through recruitment agencies that arrange work permits tied to a specific employer. For many, Poland is a first foothold in the EU labour market, and the hope of eventual mobility to work elsewhere in Europe sits alongside the reality of a Polish-language-dominant workplace and healthcare system that few arrive prepared for. Winters are far colder and darker than almost anywhere most workers have experienced, and recruitment debt taken on in Nepal to secure the job adds real financial pressure from the very start of the contract, compounded if the promised role or pay differs from what was arranged before departure. Because the Nepali community here is newer and smaller than in the Gulf or longer-established European destinations, there are fewer countrymen nearby to share the adjustment with, and shared worker housing arranged by an employer can mean little say over living conditions.",
    commonConcerns: [
      "Financial pressure and anxiety from recruitment debt taken on before departure from Nepal",
      "Distress when the actual job, pay or conditions differ from what was promised before leaving Nepal",
      "Depression and low mood during Polish winters that are far colder and darker than most workers have experienced",
      "Language barrier making daily tasks and healthcare access feel effortful",
      "Isolation from being part of a newer, smaller and more spread-out Nepali community",
      "Sleep disruption and fatigue from manufacturing, warehouse or food-processing shift work",
      "Uncertainty and stress around work permit renewal and the path to longer-term EU status",
    ],
    searchTerms: [
      "Nepali psychiatrist Poland",
      "Nepalese mental health Poland",
      "online psychiatrist for Nepali in Poland",
      "Nepali migrant worker mental health Poland",
    ],
    practicalNote:
      "Poland is usually around four to five hours behind Kathmandu depending on daylight saving, so a Nepal-evening video consultation slot generally falls in the Polish afternoon or early evening, which tends to work well around most shift patterns. A Nepal-issued prescription cannot be assumed to be recognised at a Polish pharmacy, so medication needs are discussed openly, including when registering with local clinic care is the more realistic path for ongoing prescribing. Consultations are confidential and kept separate from any workplace or agency record. For a medical emergency, safety concern or thoughts of self-harm, contacting local emergency services (112), the nearest hospital, or the Nepali embassy should not wait for a scheduled appointment.",
  },
  {
    country: "Italy",
    slug: "italy",
    region: "Europe",
    headline: "Mental health support for Nepalese in Italy",
    intro:
      "Italy is home to one of the largest and longest-established Nepali communities in Europe, concentrated especially in Rome, with smaller communities in Florence, Milan and other northern cities, many families now into a second generation. Elderly and home care work (known locally as badante roles), hospitality and retail have long been common paths into the Italian labour market, and while the community's long history means more established support networks and Nepali shops, restaurants and cultural associations than in newer destinations, it does not remove real pressures. Overstretched Italian bureaucracy for permesso di soggiorno (residence permit) renewal can mean months of legal limbo even for those who followed every rule, and this uncertainty alone is a significant source of chronic anxiety. Care workers living in with an elderly Italian client face an isolation similar to live-in domestic work elsewhere, with limited free time and the emotional weight of caring closely for someone else's ageing relative while unable to be present for their own family's milestones back in Nepal. Younger, Italian-raised Nepalis can also feel caught between two cultures, fluent in Italian but navigating expectations rooted in a Nepal many have visited only occasionally.",
    commonConcerns: [
      "Chronic anxiety from prolonged permesso di soggiorno (residence permit) renewal delays and bureaucratic limbo",
      "Isolation for live-in care workers (badanti) with limited free time and privacy",
      "Depression and guilt from caring for someone else's elderly relative while distant from one's own family",
      "Intergenerational and identity tension for Italian-raised children of Nepali families",
      "Financial pressure from the cost of living balanced against often modest care, hospitality or retail wages",
      "Sleep disruption and burnout from demanding live-in care or hospitality shift schedules",
      "Reluctance to seek mental health support due to stigma, even within a large and established community",
    ],
    searchTerms: [
      "Nepali psychiatrist Italy",
      "Nepalese mental health Italy",
      "online psychiatrist for Nepali in Italy",
      "Nepali community mental health Rome",
    ],
    practicalNote:
      "Italy is usually around four to five hours behind Kathmandu depending on daylight saving, so a Nepal-evening video consultation slot generally falls in the Italian afternoon or early evening. A Nepal-written prescription cannot be assumed to be valid at an Italian pharmacy, so medication needs are discussed openly, including whether registering with a local medico di base (GP) for prescribing and referral into the Italian system is the right next step. Speaking with a psychiatrist in Nepali first can also help for live-in care workers who find it hard to leave their workplace household to attend a local appointment. For a medical emergency, safety concern or thoughts of self-harm, calling 112 or attending the nearest hospital emergency department should not wait for a scheduled online session.",
  },
  {
    country: "Myanmar",
    slug: "myanmar",
    region: "Southeast Asia",
    headline: "Mental health support for Nepalese in Myanmar",
    intro:
      "Myanmar is home to one of the largest and oldest Nepali-origin communities anywhere in the world, numbering in the hundreds of thousands and rooted in generations of Gorkha settlement dating back to British colonial rule, concentrated especially in Shan State towns such as Kalaw, Taunggyi and Pyin Oo Lwin, alongside communities in Yangon and Mandalay. Many families have lived in Myanmar for four or five generations, yet a meaningful number still face unresolved citizenship status under Myanmar's 1982 Citizenship Law, which recognises only certain 'national races' and has left some Nepali-origin residents functionally stateless despite generations of residence, unable to fully access services, travel freely, or feel secure about their children's future. The ongoing political instability and armed conflict in Myanmar since 2021 adds a further layer of uncertainty and, for some families, direct exposure to danger or displacement, compounding the everyday strain of raising children and running a business or farm in a country where full legal belonging has never been guaranteed. For a long-settled community, the pull toward an ancestral homeland many have never actually visited sits alongside a genuine, complicated love for the only home most have ever known.",
    commonConcerns: [
      "Chronic anxiety and insecurity linked to unresolved or unclear citizenship status under Myanmar's Citizenship Law",
      "Acute stress, fear or trauma linked to the ongoing political instability and armed conflict in parts of Myanmar since 2021",
      "Identity strain from feeling caught between a Nepali heritage and a Myanmar home across multiple generations",
      "Depression and hopelessness linked to restricted travel, education or work opportunities tied to unclear legal status",
      "Grief and displacement-related distress for families affected by conflict, relocation or loss of property",
      "Isolation for Nepali-origin families in more remote Shan State towns with limited access to specialist mental health care",
      "Difficulty accessing culturally and linguistically appropriate mental health support locally",
    ],
    searchTerms: [
      "Nepali psychiatrist Myanmar",
      "Nepalese mental health Myanmar",
      "online psychiatrist for Nepali in Myanmar",
      "Gorkha community mental health Myanmar",
    ],
    practicalNote:
      "Myanmar is usually around forty-five minutes ahead of Kathmandu, which makes scheduling a video consultation straightforward without a significant time difference to plan around, where internet access and safety conditions allow. A Nepal-issued prescription cannot be assumed to be recognised at a Myanmar pharmacy, so medication needs are discussed openly, including when local clinic care is the safer and more realistic option. Consultations can be conducted in Nepali, which can be a genuine relief for families who find explaining symptoms in Burmese or a local Shan dialect difficult. Given the current instability in parts of the country, safety always comes first: for any medical emergency, threat to safety, or urgent risk, contacting local emergency services, a trusted community welfare contact, or the Nepali embassy should not wait for a scheduled online appointment.",
  },
  {
    country: "Bangladesh",
    slug: "bangladesh",
    region: "South Asia",
    headline: "Mental health support for Nepalese in Bangladesh",
    intro:
      "Bangladesh's proximity and long-standing ties to Nepal draw students into medical, engineering and other university programmes in Dhaka, Chittagong and other cities, alongside a smaller number of business owners and workers, often assuming that geographic and cultural closeness will make the adjustment easier than moving further afield. In practice, Bangladesh's own intensely competitive academic culture, the pressure of studying medicine or engineering in a foreign curriculum and sometimes a different teaching language, and the financial strain of tuition and hostel costs on a family budget are all genuine sources of stress. Traffic congestion, monsoon flooding, and a much larger, more crowded urban environment than most home towns in Nepal can also take a toll that's easy to underestimate before arrival. As with India, closeness to Nepal does not remove the emotional weight of being away from home, and some students describe a subtle sense of being neither fully at home in Bangladesh nor able to easily pop back to Nepal for a weekend the way the map might suggest.",
    commonConcerns: [
      "Academic pressure and anxiety in competitive medical, engineering or business programmes taught in an unfamiliar curriculum",
      "Financial stress from tuition, hostel costs and tight family budgets",
      "Adjustment difficulty to Dhaka's dense urban environment, traffic and monsoon flooding",
      "Depression and low motivation linked to academic performance and future career uncertainty",
      "Homesickness sharpened by the mistaken assumption that geographic closeness would make missing home easier to manage",
      "Language barrier navigating Bengali-medium daily life and healthcare outside the classroom",
      "Isolation for students living independently in hostel accommodation away from family supervision for the first time",
    ],
    searchTerms: [
      "Nepali psychiatrist Bangladesh",
      "Nepalese mental health Bangladesh",
      "online psychiatrist for Nepali in Bangladesh",
      "Nepali student mental health Dhaka",
    ],
    practicalNote:
      "Bangladesh is usually only around fifteen minutes ahead of Kathmandu, so scheduling a video consultation is simple and does not require planning around odd hours, similar to India. A Nepal-written prescription may not automatically be accepted at every Bangladeshi pharmacy, so this is discussed directly, alongside whether local psychiatric care, a hostel or college counselling service, or continued follow-up with Dr. Kushal Kharel is the best fit. For a medical emergency, safety risk or acute crisis, the nearest hospital or local emergency services should be used rather than waiting for an online appointment. Many families find it reassuring that a first conversation can happen in Nepali, which often makes it easier to describe symptoms accurately before deciding on next steps.",
  },
  {
    country: "Thailand",
    slug: "thailand",
    region: "Southeast Asia",
    headline: "Mental health support for Nepalese in Thailand",
    intro:
      "Thailand draws a mixed group of Nepalis, from workers in hospitality, restaurants and construction around Bangkok and tourist hubs like Phuket and Chiang Mai, to a smaller number of students and long-term residents, often on tourist-turned-work arrangements or employer-sponsored permits that carry their own uncertainty. Thailand's role as a major transit and tourism hub for the wider region means some Nepalis pass through on their way to or from other Southeast Asian work destinations, which can bring its own instability and short-term, insecure housing arrangements. Long hours in hospitality and food service, a Thai-language-dominant daily life and healthcare system, and distance from the more established Nepali diaspora networks found in the Gulf or the West all add to the everyday strain of building a life in Thailand. For workers whose status is less formally regulated than in some other destinations, worry about their legal standing sits alongside the ordinary pressures of remittances and distance from family.",
    commonConcerns: [
      "Anxiety and stress tied to informal, tourist-turned-work or employer-sponsored visa arrangements",
      "Depression and low mood linked to long hospitality or service-sector shifts and irregular income",
      "Isolation from being more dispersed and less organised than Nepali communities in other major destinations",
      "Financial pressure from unstable or informal work arrangements and ongoing remittance responsibility",
      "Language barrier navigating Thai-language daily life, healthcare and any legal or work paperwork",
      "Instability and stress for workers using Thailand as a transit point to or from other regional destinations",
      "Alcohol use linked to Thailand's tourism and hospitality work culture and social isolation",
    ],
    searchTerms: [
      "Nepali psychiatrist Thailand",
      "Nepalese mental health Thailand",
      "online psychiatrist for Nepali in Thailand",
      "Nepali migrant worker mental health Thailand",
    ],
    practicalNote:
      "Thailand is usually around one hour and fifteen minutes ahead of Kathmandu, so video consultations can generally be scheduled around work shifts without a significant time difference to plan around. A Nepal-issued prescription cannot be assumed to be recognised at a Thai pharmacy, so medication needs are discussed openly, including when local clinic care is the more practical option. Consultations are confidential and kept separate from any workplace record. For a medical emergency, safety concern or thoughts of self-harm, contacting local emergency services, the nearest hospital, or the Nepali embassy should not wait for a scheduled appointment.",
  },
  {
    country: "Croatia",
    slug: "croatia",
    region: "Europe",
    headline: "Mental health support for Nepalese in Croatia",
    intro:
      "Croatia has emerged rapidly as a new EU destination for Nepali workers over the past few years, drawing growing numbers into hospitality, tourism, construction and food service roles around Zagreb, Split, and the Adriatic coastal resort towns, as recruitment agencies increasingly present it as an accessible alternative to the Gulf or more established Western European destinations. Much of the work is seasonal, tied to Croatia's intense summer tourism season along the coast, which brings long hours during peak months followed by uncertainty about work and income during the quieter off-season. As one of Europe's newest Nepali worker destinations, the community is still small and dispersed, and Croatian-language bureaucracy for residence permits and healthcare registration can feel genuinely disorienting for workers who arrived with limited preparation for the paperwork involved. Recruitment costs paid before departure from Nepal, combined with the seasonal, sometimes precarious nature of tourism-sector work, add real financial pressure from the very start of a contract.",
    commonConcerns: [
      "Financial pressure and anxiety from recruitment debt taken on before departure from Nepal",
      "Stress and income uncertainty tied to Croatia's seasonal tourism work cycle and off-season gaps",
      "Isolation from being part of a very new, small and dispersed Nepali worker community",
      "Anxiety navigating Croatian-language bureaucracy for residence permits and healthcare registration",
      "Sleep disruption and fatigue from long shifts during the intense summer tourism season",
      "Distress when the actual job, pay or conditions differ from what was promised before leaving Nepal",
      "Uncertainty and stress around contract renewal and the pathway to longer-term EU work status",
    ],
    searchTerms: [
      "Nepali psychiatrist Croatia",
      "Nepalese mental health Croatia",
      "online psychiatrist for Nepali in Croatia",
      "Nepali migrant worker mental health Croatia",
    ],
    practicalNote:
      "Croatia is usually around four to five hours behind Kathmandu depending on daylight saving, so a Nepal-evening video consultation slot generally falls in the Croatian afternoon or early evening, which tends to work well around most shift patterns. A Nepal-issued prescription cannot be assumed to be recognised at a Croatian pharmacy, so medication needs are discussed openly, including when registering with local clinic care is the more realistic path for ongoing prescribing. Consultations are confidential and kept separate from any workplace or agency record. For a medical emergency, safety concern or thoughts of self-harm, contacting local emergency services (112), the nearest hospital, or the Nepali embassy should not wait for a scheduled appointment.",
  },
  {
    country: "Fiji",
    slug: "fiji",
    region: "Oceania",
    headline: "Mental health support for Nepalese in Fiji",
    intro:
      "Fiji is home to a small but historic Nepali-origin community, with roots stretching back to the era of indentured labour migration to Fiji from the Indian subcontinent, alongside a smaller, more recent group of Nepali students and professionals drawn to Fiji's role as a regional hub in the Pacific for education and business. For the long-settled community, questions of identity and belonging can run deep across generations of connection to Fiji layered over a distant, sometimes largely symbolic connection to Nepal itself, while newer arrivals face a different, more immediate set of adjustment challenges: a small, dispersed community with limited Nepali-language services, distance from any major hub of Nepali diaspora life, and a healthcare system that few arrive familiar with. Fiji's Pacific island geography also means genuine physical isolation, both from Nepal and from other, larger diaspora communities elsewhere in the world, which can compound the ordinary strain of settling far from family.",
    commonConcerns: [
      "Identity and belonging questions for a long-settled, multi-generational Nepali-origin community with a distant ancestral connection to Nepal",
      "Isolation from being part of a very small, geographically remote Pacific community",
      "Difficulty accessing Nepali-language or culturally specific mental health support locally",
      "Adjustment stress for newer students or professionals arriving with limited preparation for local systems",
      "Homesickness compounded by Fiji's physical distance from Nepal and from larger diaspora hubs",
      "Financial pressure and uncertainty for those building a business or career in a smaller island economy",
      "Family strain from limited opportunities to travel to Nepal given cost and distance",
    ],
    searchTerms: [
      "Nepali psychiatrist Fiji",
      "Nepalese mental health Fiji",
      "online psychiatrist for Nepali in Fiji",
      "Nepali community mental health Fiji",
    ],
    practicalNote:
      "Fiji is usually around six to seven hours ahead of Kathmandu depending on daylight saving, so a Nepal-morning video consultation slot generally lines up with a Fiji afternoon or evening on the same day. A prescription written in Nepal cannot be assumed to be valid or fillable at a Fijian pharmacy, so medication questions are discussed honestly, including whether registering with a local doctor is the more appropriate route for ongoing prescribing. Consultations can be conducted in Nepali, which can be a genuine relief for a community with deep roots but limited access to Nepali-language services locally. For urgent risk, suicidal thoughts, or a mental health crisis, contacting local emergency services or the nearest hospital is safer than waiting for a scheduled online appointment.",
  },
  {
    country: "Denmark",
    slug: "denmark",
    region: "Europe",
    headline: "Mental health support for Nepalese in Denmark",
    intro:
      "Denmark's Nepali community is small but steadily growing, centred mainly around Copenhagen, drawn by university programmes, a well-regarded public system, and, for some, family reunification with a partner already settled there. Danish bureaucracy for residence permits, the CPR personal registration number that unlocks nearly everything from a bank account to healthcare, and Denmark's own high cost of living relative to typical student or entry-level wages are all genuine early hurdles. Denmark's long, dark winters, with only a few hours of daylight at the depth of the season, can meaningfully worsen mood for those unused to the climate, and a small, still-developing Nepali community means fewer natural opportunities to speak Nepali socially or mark festivals like Dashain and Tihar with a wider community. Danish social culture, often described as reserved and private on first meeting even by other Europeans, can add a further layer of adjustment for newcomers used to a more immediately warm, communal social style.",
    commonConcerns: [
      "Anxiety navigating Danish residence permits, CPR registration and unfamiliar bureaucratic systems",
      "Depression and low mood during long, dark Danish winters with very limited daylight",
      "Isolation from being part of a small, still-developing Nepali community",
      "Financial strain from Denmark's high cost of living relative to student or entry-level wages",
      "Adjustment stress from Danish social culture feeling more reserved than home",
      "Academic or work pressure combined with the effort of settling into a new system",
      "Homesickness and difficulty finding Nepali food, festivals or community events nearby",
    ],
    searchTerms: [
      "Nepali psychiatrist Denmark",
      "Nepalese mental health Denmark",
      "online psychiatrist for Nepali in Denmark",
      "Nepali student mental health Copenhagen",
    ],
    practicalNote:
      "Denmark is usually around four to five hours behind Kathmandu depending on daylight saving, so a Nepal-evening video consultation slot generally falls in the Danish afternoon or early evening. A Nepal-written prescription cannot be assumed to be valid at a Danish pharmacy (apotek), so medication needs are discussed openly, including whether registering with a local læge (GP) for prescribing and referral into the Danish system is the right next step. University student counselling services can also offer interim support while this is arranged. For a mental health crisis, suicidal thinking or urgent safety concern, calling 112 or attending the nearest hospital emergency department is safer than waiting for a scheduled online session.",
  },
  {
    country: "Brunei",
    slug: "brunei",
    region: "Southeast Asia",
    headline: "Mental health support for Nepalese in Brunei",
    intro:
      "Brunei is home to a distinctive Nepali community centred on the Gurkha Reserve Unit, an elite force of Nepali Gurkha soldiers who have served the Sultanate for decades, alongside their families and a smaller number of workers in construction, hospitality and services. Military family life brings its own particular pressures: long deployments or duty postings away from home even while stationed in Brunei, a base community that can feel both close-knit and quite closed off from the wider Bruneian population, and the eventual, often emotionally complex transition when a soldier's service ends and the family must decide whether to stay in Brunei, return to Nepal, or seek settlement elsewhere. For the smaller group of civilian workers, Brunei's strict laws, small size, and limited nightlife or social outlets compared with other destinations can make off-duty time feel quite restricted, and the extremely small, tightly-knit expatriate Nepali community means very little anonymity when seeking help locally.",
    commonConcerns: [
      "Stress and family separation linked to Gurkha Reserve Unit deployments and duty postings",
      "Anxiety and identity strain around the transition when military service in Brunei ends",
      "Isolation for military spouses and children adjusting to base life away from wider Bruneian society",
      "Privacy concerns and reluctance to seek help locally given how small and close-knit the community is",
      "Adjustment stress to Brunei's strict social norms and limited off-duty outlets for civilian workers",
      "Depression and low mood linked to prolonged distance from extended family in Nepal",
      "Financial and future-planning anxiety around life after Gurkha service concludes",
    ],
    searchTerms: [
      "Nepali psychiatrist Brunei",
      "Nepalese mental health Brunei",
      "online psychiatrist for Nepali in Brunei",
      "Gurkha family mental health Brunei",
    ],
    practicalNote:
      "Brunei is usually around two hours and fifteen minutes ahead of Kathmandu, so an evening video consultation from Nepal generally lines up with a Brunei night-time slot. A Nepal-issued prescription cannot be assumed to be recognised at a Brunei pharmacy, so medication needs are discussed openly, including whether registering with a local clinic, including on-base medical services where relevant, is the right next step. Consultations can be conducted in Nepali, which can be a genuine relief given how small and interconnected the local Nepali community is, and confidentiality is maintained separately from any military or employer record. For a medical emergency, safety concern or thoughts of self-harm, contacting local emergency services or the nearest hospital should not wait for a scheduled online appointment.",
  },
  {
    country: "Sri Lanka",
    slug: "sri-lanka",
    region: "South Asia",
    headline: "Mental health support for Nepalese in Sri Lanka",
    intro:
      "Sri Lanka draws a small community of Nepalis, mainly students pursuing medical, engineering or hospitality-management programmes in Colombo and Kandy, alongside a smaller number of business travellers and workers, often choosing Sri Lanka for its relatively affordable, English-medium higher education compared with Western destinations. Sri Lanka's own recent economic instability, including periods of currency devaluation, fuel and goods shortages, and political uncertainty, has added a layer of everyday practical stress for students and workers alike that sits on top of the ordinary pressures of academic performance and distance from family. A small, dispersed Nepali community means fewer natural opportunities to connect with other Nepalis or mark festivals together, and English-medium instruction, while easing the academic transition, does not remove the emotional weight of being far from home in an unfamiliar culture.",
    commonConcerns: [
      "Academic pressure and anxiety in competitive medical, engineering or hospitality-management programmes",
      "Financial stress sharpened by Sri Lanka's recent economic instability and currency devaluation",
      "Isolation from being part of a very small, dispersed Nepali community",
      "Depression and low motivation linked to academic performance and future career uncertainty",
      "Everyday practical stress from periods of shortages, price rises or political uncertainty",
      "Homesickness and difficulty finding Nepali food, festivals or community events nearby",
      "Family conflict and pressure around academic or career expectations",
    ],
    searchTerms: [
      "Nepali psychiatrist Sri Lanka",
      "Nepalese mental health Sri Lanka",
      "online psychiatrist for Nepali in Sri Lanka",
      "Nepali student mental health Colombo",
    ],
    practicalNote:
      "Sri Lanka is usually only around fifteen minutes behind Kathmandu, so scheduling a video consultation is simple and does not require planning around odd hours. A Nepal-written prescription may not automatically be accepted at every Sri Lankan pharmacy, so this is discussed directly, alongside whether local psychiatric care, a college counselling service, or continued follow-up with Dr. Kushal Kharel is the best fit. For a medical emergency, safety risk or acute crisis, the nearest hospital or local emergency services should be used rather than waiting for an online appointment. Many families find it reassuring that a first conversation can happen in Nepali, which often makes it easier to describe symptoms accurately before deciding on next steps.",
  },
  {
    country: "Finland",
    slug: "finland",
    region: "Europe",
    headline: "Mental health support for Nepalese in Finland",
    intro:
      "Finland has drawn a small but growing number of Nepalis, mainly students pursuing master's programmes in technology, business and engineering in Helsinki, Tampere and other university cities, alongside a smaller group working in cleaning, care and hospitality roles. Historically low or tuition-free university fees made Finland an attractive destination before recent policy changes introduced fees for non-EU students, which now adds real financial planning pressure for newer arrivals. Finland's extremely long, dark winters, among the most extreme in Europe for daylight variation, can significantly affect mood, energy and sleep for those unused to the climate, while the short, intense summer with nearly round-the-clock daylight brings its own adjustment. Finnish social culture, often characterised by comfort with silence and a slower pace of forming close friendships than many Nepalis are used to, combined with a small, still-developing Nepali community, can leave newcomers feeling socially isolated even in a country widely regarded as safe, well-organised and genuinely welcoming to newcomers.",
    commonConcerns: [
      "Seasonal low mood, fatigue and disrupted sleep during Finland's extremely long, dark winters",
      "Financial pressure and planning stress following the introduction of tuition fees for non-EU students",
      "Isolation from being part of a small, still-developing Nepali community",
      "Adjustment stress from Finnish social culture's slower pace of building close friendships",
      "Depression and low motivation linked to academic pressure and distance from family",
      "Sleep disruption during Finland's short, nearly round-the-clock daylight summer",
      "Homesickness and difficulty finding Nepali food, festivals or community events nearby",
    ],
    searchTerms: [
      "Nepali psychiatrist Finland",
      "Nepalese mental health Finland",
      "online psychiatrist for Nepali in Finland",
      "Nepali student mental health Helsinki",
    ],
    practicalNote:
      "Finland is usually around three to four hours behind Kathmandu depending on daylight saving, so a Nepal-evening video consultation slot generally falls in the Finnish afternoon or early evening. A Nepal-written prescription cannot be assumed to be valid at a Finnish pharmacy (apteekki), so medication needs are discussed openly, including whether registering with a local lääkäri (doctor) for prescribing and referral into the Finnish system is the right next step. University student wellbeing services can also offer interim support while this is arranged. For a mental health crisis, suicidal thinking or urgent safety concern, calling 112 or attending the nearest hospital emergency department is safer than waiting for a scheduled online session.",
  },
  {
    country: "Spain",
    slug: "spain",
    region: "Europe",
    headline: "Mental health support for Nepalese in Spain",
    intro:
      "Spain's Nepali community, while still relatively small, has grown steadily around Madrid, Barcelona and other cities, drawn by hospitality, retail and service-sector work as well as a smaller number of students, often as a more affordable entry point into Western Europe than some neighbouring countries. Spanish-language bureaucracy for the empadronamiento (municipal registration), residence permits (NIE) and healthcare enrolment can be genuinely difficult to navigate without local support, and the process for regularising status for those who arrived through less formal routes can involve years of uncertainty. Spain's relaxed, later-paced social and working culture, often a relief for some, can also be disorienting for others used to a more structured daily rhythm, and the community's smaller size relative to countries like Italy or the UK means fewer established Nepali cultural or religious organisations to lean on for support during difficult periods.",
    commonConcerns: [
      "Anxiety navigating Spanish-language bureaucracy for residence permits, NIE and healthcare registration",
      "Prolonged uncertainty and stress during the process of regularising immigration status",
      "Isolation from being part of a smaller, less established Nepali community than in some other European countries",
      "Financial strain from modest hospitality or service-sector wages relative to the cost of living in major cities",
      "Depression and low mood linked to work pressure and distance from family",
      "Language barrier making healthcare access and daily bureaucracy feel effortful",
      "Adjustment stress to Spain's different daily rhythm and social culture",
    ],
    searchTerms: [
      "Nepali psychiatrist Spain",
      "Nepalese mental health Spain",
      "online psychiatrist for Nepali in Spain",
      "Nepali migrant worker mental health Madrid Barcelona",
    ],
    practicalNote:
      "Spain is usually around four to five hours behind Kathmandu depending on daylight saving, so a Nepal-evening video consultation slot generally falls in the Spanish afternoon or early evening. A Nepal-written prescription cannot be assumed to be valid at a Spanish pharmacy (farmacia), so medication needs are discussed openly, including whether registering with a local médico de cabecera (GP) for prescribing and referral into the Spanish system is the right next step. Consultations are confidential and kept separate from any workplace record. For a medical emergency, suicidal thoughts or an urgent safety concern, contacting Spanish emergency services (112) or the nearest hospital is safer than waiting for a scheduled online session.",
  },
  {
    country: "Norway",
    slug: "norway",
    region: "Europe",
    headline: "Mental health support for Nepalese in Norway",
    intro:
      "Norway's Nepali community is small, centred mainly around Oslo and a handful of other cities, drawn by university programmes and, for some, family reunification or work in fields such as engineering, IT and healthcare support roles. Norway's exceptionally high cost of living relative to typical student or entry-level income is a genuine early shock for many newcomers, and Norwegian-language requirements for longer-term residence, work in many sectors, and full participation in daily life add a substantial adjustment on top of purely academic or work pressures. Long, dark winters in a country stretching well into the Arctic Circle can meaningfully affect mood and energy, particularly in the northern regions, and a very small, geographically spread Nepali community means fewer opportunities to mark festivals together or simply speak Nepali socially outside the home. Norway's strong social welfare system and generally high quality of life sit alongside these real, often underestimated adjustment challenges for newcomers building a life from scratch.",
    commonConcerns: [
      "Financial strain from Norway's exceptionally high cost of living relative to student or entry-level income",
      "Anxiety and pressure around meeting Norwegian-language requirements for residence, work or further study",
      "Seasonal low mood and fatigue during long, dark Norwegian winters, especially further north",
      "Isolation from being part of a very small, geographically spread Nepali community",
      "Academic or work pressure combined with the effort of settling into a new system",
      "Depression and low motivation linked to distance from family and limited community nearby",
      "Homesickness and difficulty finding Nepali food, festivals or community events nearby",
    ],
    searchTerms: [
      "Nepali psychiatrist Norway",
      "Nepalese mental health Norway",
      "online psychiatrist for Nepali in Norway",
      "Nepali student mental health Oslo",
    ],
    practicalNote:
      "Norway is usually around four to five hours behind Kathmandu depending on daylight saving, so a Nepal-evening video consultation slot generally falls in the Norwegian afternoon or early evening. A Nepal-written prescription cannot be assumed to be valid at a Norwegian pharmacy (apotek), so medication needs are discussed openly, including whether registering with a local fastlege (regular GP) for prescribing and referral into the Norwegian system is the right next step. University student wellbeing services can also offer interim support while this is arranged. For a mental health crisis, suicidal thinking or urgent safety concern, calling 113 or attending the nearest hospital emergency department is safer than waiting for a scheduled online session.",
  },
  {
    country: "Sweden",
    slug: "sweden",
    region: "Europe",
    headline: "Mental health support for Nepalese in Sweden",
    intro:
      "Sweden's Nepali community, though small, has grown around Stockholm, Gothenburg and university towns like Uppsala and Lund, drawn by strong master's programmes in engineering, technology and design, though the introduction of tuition fees for non-EU students some years ago made Sweden a more significant financial commitment than it once was. Swedish bureaucracy for residence permits, personnummer (personal identity number) registration and healthcare enrolment can feel slow and impersonal to newcomers used to more direct systems, and Sweden's long, dark winters, similar to its Nordic neighbours, can meaningfully affect mood and motivation. Swedish social culture, valuing personal space, independence and a more reserved style of forming friendships, can be a genuine adjustment for those used to closer, more immediately communal social norms in Nepal, and a small, still-developing Nepali diaspora means fewer natural opportunities to build community or mark festivals together.",
    commonConcerns: [
      "Financial pressure and planning stress from tuition fees and Sweden's cost of living relative to income",
      "Anxiety navigating Swedish bureaucracy for residence permits, personnummer and healthcare registration",
      "Seasonal low mood and fatigue during long, dark Swedish winters",
      "Isolation from being part of a small, still-developing Nepali community",
      "Adjustment stress from Swedish social culture's more reserved approach to forming friendships",
      "Academic pressure and homesickness balancing demanding coursework with distance from family",
      "Depression and low motivation linked to social isolation and limited community nearby",
    ],
    searchTerms: [
      "Nepali psychiatrist Sweden",
      "Nepalese mental health Sweden",
      "online psychiatrist for Nepali in Sweden",
      "Nepali student mental health Stockholm",
    ],
    practicalNote:
      "Sweden is usually around four to five hours behind Kathmandu depending on daylight saving, so a Nepal-evening video consultation slot generally falls in the Swedish afternoon or early evening. A Nepal-written prescription cannot be assumed to be valid at a Swedish pharmacy (apotek), so medication needs are discussed openly, including whether registering with a local vårdcentral (health centre) for prescribing and referral into the Swedish system is the right next step. University student health services can also offer interim support while this is arranged. For a mental health crisis, suicidal thinking or urgent safety concern, calling 112 or attending the nearest hospital emergency department is safer than waiting for a scheduled online session.",
  },
  {
    country: "China",
    slug: "china",
    region: "Asia",
    headline: "Mental health support for Nepalese in China",
    intro:
      "China draws a steady stream of Nepali students, many on Chinese government scholarships, into medical, engineering and Mandarin-language programmes in cities such as Beijing, Shanghai, Kunming and Chengdu, alongside a smaller number of business owners and traders, particularly those connected to Nepal-China border trade. Mandarin-language demands, both for academic coursework and for daily life outside a relatively insulated international-student environment, can be intense, and China's own strict internet regulations mean some of the everyday tools students might otherwise use to stay connected with family and friends back home are unavailable or require a workaround, adding a subtle but real layer of disconnection. China's vast scale and fast-paced, high-pressure academic and work culture can also feel overwhelming, particularly for students arriving from smaller towns in Nepal, and a Nepali community that is significant in aggregate but often spread thinly across a huge country means the actual day-to-day experience for many students is one of real isolation.",
    commonConcerns: [
      "Anxiety and stress from intensive Mandarin-language requirements for coursework and daily life",
      "Isolation from disrupted contact with family due to internet restrictions and unfamiliar communication platforms",
      "Academic pressure in competitive, scholarship-tied medical, engineering or language programmes",
      "Adjustment stress to China's fast-paced, high-pressure academic and urban culture",
      "Depression and homesickness sharpened by China's vast scale and thinly-spread Nepali community",
      "Financial pressure for students and traders navigating an unfamiliar, large-scale economy",
      "Difficulty accessing Nepali-language or culturally familiar mental health support locally",
    ],
    searchTerms: [
      "Nepali psychiatrist China",
      "Nepalese mental health China",
      "online psychiatrist for Nepali in China",
      "Nepali student mental health Beijing",
    ],
    practicalNote:
      "China is usually around two hours and fifteen minutes ahead of Kathmandu, so an evening video consultation from Nepal typically lines up with a Chinese night-time slot after classes or work. A Nepal-issued prescription cannot be assumed to be recognised at a Chinese pharmacy, so medication needs are discussed openly, including whether registering with a local clinic or university health service for prescribing is the right next step. Given China's internet restrictions, it's worth confirming in advance which video-call platform will work reliably for a scheduled consultation. For a medical emergency, safety concern or thoughts of self-harm, contacting local emergency services or the nearest hospital should not wait for a scheduled online appointment.",
  },
];

export function getAbroadGuide(slug: string) {
  return abroadGuides.find((guide) => guide.slug === slug);
}
