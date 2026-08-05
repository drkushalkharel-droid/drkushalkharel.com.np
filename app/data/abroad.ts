export type AbroadGuide = {
  country: string;
  slug: string;
  region: string;
  headline: string;
  intro: string;
  commonConcerns: string[];
  searchTerms: string[];
  practicalNote: string;
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
  },
];

export function getAbroadGuide(slug: string) {
  return abroadGuides.find((guide) => guide.slug === slug);
}
