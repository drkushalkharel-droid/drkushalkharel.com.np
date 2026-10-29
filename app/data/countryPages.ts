// Extra, country-specific facts for the dedicated /nepali-psychiatrist/<country>/ pages. They sit
// alongside app/data/abroad.ts (intro, concerns, prescription note) and app/data/abroadMeta.ts (time
// zones, verified emergency numbers). Japan has its own hand-written page and is not listed here.
//
// Keep to widely known, stable facts and leave a field out when unsure. Emergency numbers and
// crisis lines are safety information: re-check one on the service's own site before changing it,
// never from memory.

export type CountryExtra = {
  cities: string[];
  // Why Nepalis are there and who they are: one or two plain sentences.
  routes: string;
  // How local mental health care is usually reached, in safe general terms.
  localCare: string;
  // General emergency number text, used only when abroadMeta has none for the country.
  emergency?: string;
  // A national crisis or suicide-prevention line.
  crisis?: { name: string; contact: string };
};

export const countryExtras: Record<string, CountryExtra> = {
  usa: {
    cities: ["New York", "Dallas", "Columbus", "Washington DC area", "Houston", "Boston", "Atlanta", "Seattle"],
    routes: "Many Nepalis arrive as F-1 students, H-1B and other work-visa holders, or through the diversity visa lottery, and later settle as green-card holders with families.",
    localCare: "Care is mostly reached through health insurance, an employer programme or a university counselling centre; community health centres often charge by income. Ask what your plan covers before booking.",
    emergency: "In the USA, call 911 for police, ambulance or fire.",
    crisis: { name: "988 Suicide & Crisis Lifeline", contact: "call or text 988, free, 24 hours" },
  },
  uk: {
    cities: ["London", "Aldershot", "Reading", "Ashford", "Folkestone", "Manchester", "Leeds", "Cardiff"],
    routes: "The UK has long-settled Gurkha and ex-service families, a growing number of students, and Skilled Worker and care-sector visa holders.",
    localCare: "In the NHS you register with a GP, who can refer you. In England you can usually refer yourself to NHS Talking Therapies for anxiety and depression without seeing a GP first.",
    emergency: "In the UK, call 999 for police, ambulance or fire.",
    crisis: { name: "Samaritans", contact: "116 123, free, 24 hours" },
  },
  australia: {
    cities: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Canberra"],
    routes: "Most Nepalis come as international students, then move to temporary graduate, skilled or family routes; many work long hours alongside study.",
    localCare: "Your access depends on your visa. International students usually hold overseas student health cover, so check what it includes for mental health, and ask your campus counselling service about free short-term support.",
    emergency: "In Australia, call 000 for police, ambulance or fire.",
    crisis: { name: "Lifeline Australia", contact: "13 11 14, 24 hours" },
  },
  canada: {
    cities: ["Toronto", "Vancouver", "Calgary", "Edmonton", "Ottawa", "Winnipeg"],
    routes: "Nepalis in Canada are mostly students, post-graduation work-permit holders and permanent residents building a life with their families.",
    localCare: "Public health coverage and the cost of therapy depend on your province and immigration status. Campus counselling and community health centres are the usual first routes.",
    emergency: "In Canada, call 911 for police, ambulance or fire.",
    crisis: { name: "9-8-8 Suicide Crisis Helpline", contact: "call or text 988, free, 24 hours" },
  },
  netherlands: {
    cities: ["Amsterdam", "Rotterdam", "The Hague", "Utrecht", "Eindhoven"],
    routes: "Nepalis in the Netherlands include master's students, skilled workers and people running food and service businesses.",
    localCare: "You register with a GP (huisarts), who refers you to mental health care. Basic health insurance is compulsory for residents, and a referral is normally needed for specialist care.",
    crisis: { name: "113 Zelfmoordpreventie", contact: "113 or 0800-0113, free, 24 hours" },
  },
  dubai: {
    cities: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah"],
    routes: "Most Nepalis in the UAE work on employer-sponsored visas in construction, hospitality, security, retail, driving and domestic work, often on long shifts in shared accommodation.",
    localCare: "Health insurance is normally arranged through your employer, and whether it covers psychiatric care varies. Ask HR or your insurer before assuming it does.",
  },
  qatar: {
    cities: ["Doha", "Al Wakrah", "Al Khor", "Industrial Area"],
    routes: "Most Nepalis in Qatar work on employer contracts in construction, security, hospitality, cleaning and domestic roles, often with long hours, shared rooms and limited privacy.",
    localCare: "Your first local route is usually the health card or clinic arranged through your employer. Ask what mental health care it covers.",
  },
  korea: {
    cities: ["Seoul", "Ansan", "Uijeongbu", "Incheon", "Busan", "Daegu"],
    routes: "Many Nepalis in South Korea arrive through the Employment Permit System to work in factories, farms and construction, alongside a growing number of students.",
    localCare: "Foreign residents who stay more than six months generally join the National Health Insurance, and many cities have foreign-resident support centres that can help with interpretation.",
    crisis: { name: "Suicide prevention hotline", contact: "109, free, 24 hours" },
  },
  india: {
    cities: ["Delhi", "Mumbai", "Bengaluru", "Kolkata", "Siliguri", "Dehradun"],
    routes: "Because of the open border and shared culture, Nepalis in India include students, long-term workers, security staff and families who have lived there for generations.",
    localCare: "Government and private hospitals both offer psychiatry; cost and waiting times vary widely. Free national tele-counselling is available through Tele-MANAS.",
    emergency: "In India, call 112, the single emergency number.",
    crisis: { name: "Tele-MANAS", contact: "14416, free, 24 hours, in several languages" },
  },
  france: {
    cities: ["Paris", "Lyon", "Marseille", "Toulouse", "Lille"],
    routes: "Nepalis in France are mainly students and workers, many of them in or near Paris.",
    localCare: "Residents are covered by public health insurance once registered, and you usually start with a general practitioner (médecin traitant) who can refer you to a psychiatrist.",
    emergency: "In France, call 112 (or 15 for medical emergencies, SAMU).",
    crisis: { name: "3114, national suicide prevention line", contact: "3114, free, 24 hours" },
  },
  belgium: {
    cities: ["Brussels", "Antwerp", "Ghent", "Leuven"],
    routes: "Nepalis in Belgium include students, skilled workers and people in the hospitality trade.",
    localCare: "Residents join a health insurance fund (mutualité) and usually see a GP first, who can refer you to a psychiatrist or psychologist.",
    emergency: "In Belgium, call 112 for ambulance and fire, or 101 for police.",
    crisis: { name: "Suicide prevention line", contact: "1813, free, 24 hours" },
  },
  germany: {
    cities: ["Berlin", "Munich", "Frankfurt", "Hamburg", "Cologne", "Stuttgart"],
    routes: "Germany has a large and growing number of Nepali students, as well as people in vocational training, nursing and other skilled work.",
    localCare: "Health insurance is compulsory, and you can usually see a psychiatrist (Facharzt) directly. Waiting times for therapy places can be long, so ask early.",
    emergency: "In Germany, call 112 for ambulance and fire, or 110 for police.",
    crisis: { name: "TelefonSeelsorge", contact: "0800 111 0 111 or 0800 111 0 222, free, 24 hours" },
  },
  "saudi-arabia": {
    cities: ["Riyadh", "Jeddah", "Dammam", "Al Khobar", "Makkah"],
    routes: "Most Nepalis in Saudi Arabia work on employer-sponsored contracts in construction, security, retail and service roles.",
    localCare: "Private-sector employers are generally expected to provide health insurance. Ask your employer or insurer what it covers for mental health.",
  },
  malaysia: {
    cities: ["Kuala Lumpur", "Petaling Jaya", "Shah Alam", "Penang", "Johor Bahru"],
    routes: "Nepalis in Malaysia work mainly in factories, restaurants, security, plantations and construction, often on contracts arranged through agents.",
    localCare: "Public hospitals charge foreigners higher fees than citizens, and many workers rely on employer-arranged clinics. Ask what your employer covers.",
    emergency: "In Malaysia, call 999 for police, ambulance or fire.",
    crisis: { name: "Befrienders Kuala Lumpur", contact: "03-7627 2929, 24 hours" },
  },
  kuwait: {
    cities: ["Kuwait City", "Hawalli", "Farwaniya", "Salmiya"],
    routes: "Most Nepalis in Kuwait work in security, retail, hospitality, cleaning and domestic roles under employer sponsorship.",
    localCare: "Health coverage is usually arranged through your sponsor or employer, so ask what it includes for mental health.",
  },
  romania: {
    cities: ["Bucharest", "Cluj-Napoca", "Timișoara", "Iași"],
    routes: "Nepalis in Romania are a newer community, mostly workers in construction, delivery and hospitality, plus students.",
    localCare: "Health care is linked to your employment and insurance contributions, so check your coverage and ask your employer how to register with a family doctor.",
    emergency: "In Romania, call 112 for police, ambulance and fire.",
  },
  cyprus: {
    cities: ["Nicosia", "Limassol", "Larnaca", "Paphos"],
    routes: "Nepalis in Cyprus mostly work in hospitality, agriculture, care and service jobs.",
    localCare: "Access to public health care depends on your permit and registration status, so check your entitlement with your employer or local migrant support groups.",
    emergency: "In Cyprus, call 112 for police, ambulance and fire.",
  },
  israel: {
    cities: ["Tel Aviv", "Jerusalem", "Haifa", "Be'er Sheva"],
    routes: "Nepalis in Israel are known for work as live-in caregivers, often looking after one elderly person at a time and spending long periods with little time off.",
    localCare: "Health insurance for foreign workers is arranged through the employer and a private insurer, so ask what is covered before you need it.",
    emergency: "In Israel, call 101 for an ambulance or 100 for police.",
    crisis: { name: "ERAN", contact: "1201, 24 hours" },
  },
  portugal: {
    cities: ["Lisbon", "Porto", "Faro", "Setúbal"],
    routes: "Nepalis in Portugal are mostly workers in agriculture, hospitality and services, as well as students.",
    localCare: "Registered residents can use the national health service (SNS), which provides a 24-hour health line.",
    emergency: "In Portugal, call 112 for police, ambulance and fire.",
    crisis: { name: "SNS 24 health line", contact: "808 24 24 24, 24 hours" },
  },
  oman: {
    cities: ["Muscat", "Salalah", "Sohar"],
    routes: "Most Nepalis in Oman work on employer contracts in construction, hospitality, retail and service jobs.",
    localCare: "Health cover is usually arranged through your employer, so ask what it includes for mental health care.",
    emergency: "In Oman, call 9999 for police, ambulance and fire.",
  },
  bahrain: {
    cities: ["Manama", "Muharraq", "Riffa"],
    routes: "Nepalis in Bahrain work mainly in construction, hospitality, security and service roles on employer-sponsored permits.",
    localCare: "Health cover is usually arranged through your employer, so ask what it includes for mental health care.",
    emergency: "In Bahrain, call 999 for police, ambulance and fire.",
  },
  singapore: {
    cities: ["Singapore (all areas)"],
    routes: "Nepalis in Singapore include construction, marine and service workers on work permits, skilled employees and students.",
    localCare: "Polyclinics and general practitioners are the usual first step, and costs depend on your pass and insurance. Many workers' dormitories have a medical post.",
    emergency: "In Singapore, call 995 for an ambulance or fire, or 999 for police.",
    crisis: { name: "Samaritans of Singapore", contact: "1767, 24 hours" },
  },
  "new-zealand": {
    cities: ["Auckland", "Wellington", "Christchurch", "Hamilton"],
    routes: "Nepalis in New Zealand are mostly students and work-visa holders, with a growing settled community.",
    localCare: "Public funding depends on your visa status. Many tertiary institutions run free counselling services for students.",
    emergency: "In New Zealand, call 111 for police, ambulance or fire.",
    crisis: { name: "1737, Need to talk?", contact: "call or text 1737, free, 24 hours" },
  },
  ireland: {
    cities: ["Dublin", "Cork", "Galway", "Limerick"],
    routes: "Nepalis in Ireland are mainly students and workers in health care, hospitality and services.",
    localCare: "Start with a GP, who can refer you to public or private mental health services. Cost depends on your status and insurance.",
    emergency: "In Ireland, call 999 or 112 for police, ambulance or fire.",
    crisis: { name: "Samaritans Ireland", contact: "116 123, free, 24 hours" },
  },
  "hong-kong": {
    cities: ["Yau Ma Tei", "Jordan", "Kowloon", "New Territories"],
    routes: "Hong Kong has a long-established Nepali community, including families settled for generations, many born in Hong Kong, alongside workers and students.",
    localCare: "Public hospitals and clinics are available to eligible residents, and private psychiatrists are widely used. Cost and waiting times differ between the two.",
    emergency: "In Hong Kong, call 999 for police, ambulance or fire.",
    crisis: { name: "The Samaritans Hong Kong", contact: "2896 0000, 24 hours" },
  },
  poland: {
    cities: ["Warsaw", "Kraków", "Wrocław", "Gdańsk"],
    routes: "Nepalis in Poland are mostly workers in logistics, hospitality, construction and services, plus some students.",
    localCare: "Public care is linked to health insurance through your employment, and many workers use private clinics for faster appointments.",
    emergency: "In Poland, call 112 for police, ambulance and fire.",
    crisis: { name: "Support line for adults", contact: "116 123, free" },
  },
  italy: {
    cities: ["Rome", "Milan", "Turin", "Naples"],
    routes: "Nepalis in Italy include workers in hospitality, care and services, and students.",
    localCare: "Residents can register with the national health service and a family doctor, who can refer you to local mental health services.",
    emergency: "In Italy, call 112 for police, ambulance and fire.",
  },
  myanmar: {
    cities: ["Yangon", "Mandalay"],
    routes: "Myanmar has small Nepali-origin communities, including long-settled families, alongside people in business and work.",
    localCare: "Mental health services can be limited and unevenly spread, which is one reason many people prefer an online consultation.",
  },
  bangladesh: {
    cities: ["Dhaka", "Chittagong"],
    routes: "Many Nepalis in Bangladesh are students, particularly in medical and other professional programmes, with a smaller working community.",
    localCare: "University counselling and private clinics are the usual routes, and student health services may offer first support.",
    emergency: "In Bangladesh, call 999, the national emergency number.",
  },
  thailand: {
    cities: ["Bangkok", "Chiang Mai", "Pattaya"],
    routes: "Nepalis in Thailand work in the restaurant and tourism trades and as skilled and informal workers, and a smaller number study.",
    localCare: "Private hospitals in Bangkok and other cities offer psychiatry with English-speaking staff, at higher cost than public services.",
    emergency: "In Thailand, call 1669 for a medical emergency or 191 for police.",
    crisis: { name: "Department of Mental Health hotline", contact: "1323, 24 hours" },
  },
  croatia: {
    cities: ["Zagreb", "Split", "Rijeka", "Zadar"],
    routes: "Nepalis in Croatia are a recent community, mostly workers in tourism, construction and services.",
    localCare: "Your coverage depends on your work permit and employer's contributions. Ask your employer how to register with a family doctor.",
    emergency: "In Croatia, call 112 for police, ambulance and fire.",
  },
  fiji: {
    cities: ["Suva", "Nadi", "Lautoka"],
    routes: "Fiji has a small Nepali community of workers and professionals who are often far from other Nepali speakers.",
    localCare: "Mental health services are limited outside the main towns, so online consultation can be a practical first step.",
  },
  denmark: {
    cities: ["Copenhagen", "Aarhus", "Odense", "Aalborg"],
    routes: "Nepalis in Denmark are mainly students and workers, with long winters that can affect mood.",
    localCare: "Residents register with a GP, who can refer you to specialist mental health care. Short, dark winter days are a common trigger for low mood.",
    emergency: "In Denmark, call 112 for police, ambulance and fire.",
    crisis: { name: "Livslinien", contact: "70 201 201, 24 hours" },
  },
  brunei: {
    cities: ["Bandar Seri Begawan", "Kuala Belait", "Seria"],
    routes: "Brunei has a Nepali community linked to the long-standing Gurkha presence, plus workers and their families.",
    localCare: "Public and private clinics both operate, and coverage for foreign workers is usually arranged through the employer.",
  },
  "sri-lanka": {
    cities: ["Colombo", "Kandy"],
    routes: "Nepalis in Sri Lanka are a small community of professionals, workers and students.",
    localCare: "Colombo has private hospitals with psychiatrists, but services are limited elsewhere, so online consultation can bridge the gap.",
    emergency: "In Sri Lanka, call 119 for police or 1990 for an ambulance.",
    crisis: { name: "CCC Line", contact: "1333, 24 hours" },
  },
  finland: {
    cities: ["Helsinki", "Espoo", "Tampere", "Oulu"],
    routes: "Nepalis in Finland are largely students and workers, including many in health care and cleaning, living with long, dark winters.",
    localCare: "Residents are served through municipal health centres. Waiting times for specialist care can be long, so ask early.",
    emergency: "In Finland, call 112 for police, ambulance and fire.",
    crisis: { name: "Mieli Crisis Helpline", contact: "09 2525 0111" },
  },
  spain: {
    cities: ["Madrid", "Barcelona", "Valencia", "Málaga"],
    routes: "Nepalis in Spain are mostly workers in hospitality, services and agriculture, plus a number of long-term residents.",
    localCare: "Residents can register with the public health system and a family doctor, who can refer you to mental health services.",
    emergency: "In Spain, call 112 for police, ambulance and fire.",
    crisis: { name: "Suicide behaviour helpline", contact: "024, free, 24 hours" },
  },
  norway: {
    cities: ["Oslo", "Bergen", "Stavanger", "Trondheim"],
    routes: "Nepalis in Norway are students and workers living through long, dark winters and high living costs.",
    localCare: "Residents have a regular GP (fastlege) who can refer you to specialist mental health care.",
    emergency: "In Norway, call 113 for an ambulance or 112 for police.",
    crisis: { name: "Mental Helse helpline", contact: "116 123, 24 hours" },
  },
  sweden: {
    cities: ["Stockholm", "Gothenburg", "Malmö", "Uppsala"],
    routes: "Nepalis in Sweden are mainly students and workers, with long winters and a reserved social culture that can feel isolating.",
    localCare: "Start at a local health centre (vårdcentral), which can refer you to specialist services.",
    emergency: "In Sweden, call 112 for police, ambulance and fire.",
    crisis: { name: "Suicide prevention line", contact: "90101, 24 hours" },
  },
  china: {
    cities: ["Beijing", "Shanghai", "Guangzhou", "Chengdu"],
    routes: "Nepalis in China include many students, particularly in medical and engineering programmes, and traders and workers.",
    localCare: "University international offices and large city hospitals are the usual routes. Language is often the biggest barrier to explaining symptoms.",
    emergency: "In China, call 120 for an ambulance or 110 for police.",
  },
};
