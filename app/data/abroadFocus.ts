// Focus conditions shown in every country section of the regional pages
// (/nepalese-abroad/<region>/). Each country adds one sentence of local context on
// gambling, alcohol and drugs. Keep these to widely known, stable facts: laws and
// services change, so the visible text tells readers to confirm locally.

export type FocusCondition = {
  id: string;
  label: string;
  href: string;
  summary: string;
};

export const focusConditions: FocusCondition[] = [
  {
    id: "anxiety",
    label: "Anxiety and panic",
    href: "/anxiety",
    summary: "constant worry, panic attacks, racing thoughts and sleepless nights",
  },
  {
    id: "depression",
    label: "Depression",
    href: "/depression",
    summary: "low mood, loss of interest, exhaustion, hopelessness and homesickness that does not lift",
  },
  {
    id: "gambling",
    label: "Gambling addiction",
    href: "/blog/gambling-addiction-nepalese-abroad",
    summary: "betting apps, casinos or cards that have become hard to stop, with debt or secrecy",
  },
  {
    id: "alcohol",
    label: "Alcohol problems",
    href: "/blog/alcohol-addiction-treatment-nepal",
    summary: "drinking more than planned, drinking alone or to cope, and failed attempts to cut down",
  },
  {
    id: "opioid",
    label: "Opioid and drug use",
    href: "/conditions/opioid-use-disorder",
    summary: "dependence on heroin, painkillers or other opioids, and the fear of seeking help",
  },
  {
    id: "anger",
    label: "Anger and stress",
    href: "/stress-anger-management-kathmandu",
    summary: "explosive temper, constant irritability and conflict at work or at home",
  },
];

// One sentence per country, keyed by the guide slug in app/data/abroad.ts.
export const countryFocusContext: Record<string, string> = {
  usa: "Gambling laws differ by state and online sports betting is legal in many; 1-800-GAMBLER is the national helpline. Alcohol is legal from 21, and opioid use is a major public-health problem.",
  uk: "Gambling is legal and heavily advertised; GAMSTOP blocks you from UK-licensed sites and the GamCare helpline is 0808 8020 133. Alcohol is easy to buy and is often tied to loneliness.",
  australia: "Pokies in pubs and clubs and online sports betting make gambling harm common; Gambling Help Online is 1800 858 858 and BetStop is the national self-exclusion register.",
  canada: "Gambling is regulated by each province, and Ontario has a licensed online market; ConnexOntario (1-866-531-2600) and Gambling Support BC (1-888-795-6111) offer free help.",
  netherlands: "Online gambling is licensed and the CRUKS register lets you exclude yourself. Alcohol is widely available, and many Nepalis work shifts that leave long evenings alone.",
  dubai: "Gambling and drug use are illegal in the UAE and alcohol is allowed only in licensed venues, so problems are often hidden. Confidential online care does not involve your employer.",
  qatar: "Gambling and drug use are illegal in Qatar and alcohol is tightly restricted, so many workers hide a problem for fear of legal trouble. Confidential online care is a private first step.",
  japan: "Pachinko parlours near stations are legal for adults and are the main gambling risk; online casinos are illegal. Heavy after-work drinking is also normalised.",
  korea: "Casinos that admit foreigners, legal sports betting and illegal online betting all exist; the Korea Center on Gambling Problems helpline is 1336. Drinking is common in work culture.",
  india: "Real-money online games are banned nationally under the 2025 Act, but informal betting and card games continue. Alcohol rules differ by state.",
  france: "Gambling is licensed, and the ANJ register lets you exclude yourself. Alcohol is part of everyday life, which can make heavy use easy to miss.",
  belgium: "Gambling is licensed and the EPIS list excludes you from casinos and licensed sites. Alcohol is cheap and widely available.",
  germany: "Licensed gambling comes with the OASIS national self-exclusion system. Alcohol is easy to buy from age 16 for beer and wine, and loneliness in a new city can push drinking up.",
  "saudi-arabia": "Gambling, alcohol and drug use are all prohibited in Saudi Arabia, so problems are usually hidden. Confidential online care is a private route that does not involve your employer.",
  malaysia: "Licensed gambling is open to non-Muslims, and illegal phone-based betting is common. Alcohol is legal but costly, and drug laws are very strict.",
  kuwait: "Gambling, alcohol and drug use are all illegal in Kuwait, so problems are usually hidden. Confidential online care is a private route to help.",
  romania: "Casinos and betting shops are widespread and licensed. Alcohol is cheap and widely available, and many workers are far from family.",
  cyprus: "Casinos and betting shops are licensed, and alcohol is cheap and easy to get. Long shifts and isolation raise the risk of both.",
  israel: "Most gambling is limited to state-run lotteries and sports betting, though offshore sites are reachable. Live-in caregivers can be very isolated.",
  portugal: "Gambling is licensed, with a national self-exclusion option. Alcohol is cheap and widely served, and drug use is treated mainly as a health issue.",
  oman: "Gambling and drug use are illegal in Oman and alcohol is allowed only in licensed venues, so problems are often hidden. Confidential online care is a private first step.",
  bahrain: "Gambling and drug use are illegal in Bahrain and alcohol is allowed only in licensed venues. Confidential online care is a private way to get help without involving an employer.",
  singapore: "Casinos charge citizens and permanent residents a S$150 daily levy, but work-pass holders can still enter and bet; the National Problem Gambling Helpline is 1800-6-668-668. Drug laws are very strict, which keeps people from seeking help, so confidential online care matters.",
  "new-zealand": "Pokies in pubs and clubs and online betting drive gambling harm; the free Gambling Helpline is 0800 654 655. Alcohol is a common coping habit among students and shift workers.",
  ireland: "Gambling regulation is being reformed, and betting shops and apps are everywhere. Alcohol is deeply tied to social life, which can make heavy use easy to hide.",
  "hong-kong": "Betting is legal only through the Hong Kong Jockey Club; the Ping Wo Fund counselling hotline is 1834 633. Long hours and small housing add to stress and anger.",
  poland: "Gambling is licensed and betting apps are common. Alcohol is cheap and widely used, and many Nepali workers are far from family.",
  italy: "Betting shops, scratch cards and online gambling are widespread and licensed. Alcohol is part of meals and social life.",
  myanmar: "Gambling is largely illegal and informal, which leaves no protection against fraud or debt. Drug use is a serious problem in parts of the country.",
  bangladesh: "Most gambling and drug use is illegal and happens informally, and alcohol is restricted, so problems are often hidden. Confidential online care avoids the stigma.",
  thailand: "Only the government lottery and horse racing are legal, so other gambling is underground or online. Alcohol is cheap and easy to find, and drug laws are strict.",
  croatia: "Casinos and sports betting are licensed, and alcohol is cheap and widely available. Seasonal and shift work can be lonely.",
  fiji: "Dedicated gambling and addiction services are limited, so online care fills a gap. Kava and alcohol are part of social life.",
  denmark: "Gambling is licensed, and the ROFUS register lets you exclude yourself from all licensed operators. Dark winters and a quiet social life can raise low mood and drinking.",
  brunei: "Gambling is prohibited and alcohol is tightly restricted in Brunei, so problems are often hidden. Confidential online care is a private route to help.",
  "sri-lanka": "Casinos exist but are aimed largely at visitors, and informal betting and arrack drinking are common. Dedicated services are limited.",
  finland: "Gambling is run by a state operator with identification-based play and a self-exclusion option. Long dark winters raise the risk of low mood and heavy drinking.",
  spain: "Gambling is licensed, and the RGIAJ register lets you exclude yourself from licensed sites. Alcohol is part of social life, and betting shops are easy to find.",
  norway: "Gambling is run by state operators with identification-based play. Alcohol is very expensive, so some people drink in secret, and winters are dark and isolating.",
  sweden: "Licensed gambling comes with the Spelpaus national self-exclusion service. Alcohol is sold through state shops, and long winters raise the risk of low mood.",
  china: "Gambling is prohibited on the mainland, though casinos operate legally in Macau (21+). Long working hours and language barriers raise stress and isolation.",
};
