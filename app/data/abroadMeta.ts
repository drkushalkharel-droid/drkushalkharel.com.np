// Per-country facts that sit alongside app/data/abroad.ts: the Nepali spelling
// of the country name, the time zone(s) used to build the session-time guide,
// and (for the markets we are growing) verified local emergency numbers and
// helplines.
//
// Emergency numbers and helplines were checked against official or
// widely-cited sources when this file was written (Sept 2026). They are safety
// information: if you add or change one, verify it first rather than relying on
// memory, and leave the field out when unsure.

export type ZoneRef = { label: string; tz: string };

export type CountryMeta = {
  nepaliName: string;
  zones: ZoneRef[];
  // One-line, verified emergency guidance for this country.
  emergency?: string;
  // Optional local support line that is especially relevant to Nepalis.
  helpline?: { name: string; detail: string; url?: string };
};

export const abroadMeta: Record<string, CountryMeta> = {
  usa: {
    nepaliName: "अमेरिका",
    zones: [
      { label: "US Eastern", tz: "America/New_York" },
      { label: "US Central", tz: "America/Chicago" },
      { label: "US Pacific", tz: "America/Los_Angeles" },
    ],
  },
  uk: { nepaliName: "बेलायत", zones: [{ label: "UK", tz: "Europe/London" }] },
  australia: {
    nepaliName: "अष्ट्रेलिया",
    zones: [
      { label: "Sydney / Melbourne", tz: "Australia/Sydney" },
      { label: "Perth", tz: "Australia/Perth" },
    ],
  },
  canada: {
    nepaliName: "क्यानडा",
    zones: [
      { label: "Toronto (Eastern)", tz: "America/Toronto" },
      { label: "Vancouver (Pacific)", tz: "America/Vancouver" },
    ],
  },
  netherlands: {
    nepaliName: "नेदरल्यान्ड्स",
    zones: [{ label: "the Netherlands", tz: "Europe/Amsterdam" }],
    emergency: "In the Netherlands, call 112 for police, ambulance and fire.",
  },
  dubai: {
    nepaliName: "दुबई / यूएई",
    zones: [{ label: "the UAE", tz: "Asia/Dubai" }],
    emergency: "In the UAE, call 999 for police, 998 for an ambulance or 997 for fire.",
  },
  qatar: {
    nepaliName: "कतार",
    zones: [{ label: "Qatar", tz: "Asia/Qatar" }],
    emergency: "In Qatar, call 999 for police, ambulance and fire.",
  },
  japan: {
    nepaliName: "जापान",
    zones: [{ label: "Japan", tz: "Asia/Tokyo" }],
    emergency: "In Japan, call 119 for an ambulance or fire, or 110 for police.",
    helpline: {
      name: "Yorisoi Hotline",
      detail:
        "0120-279-338, then press 2 for foreign languages. Open every day from 10 AM to 10 PM, in several languages including Nepali, though which languages are available varies by time of day.",
      url: "https://www.since2011.net/yorisoi/en/",
    },
  },
  korea: {
    nepaliName: "दक्षिण कोरिया",
    zones: [{ label: "South Korea", tz: "Asia/Seoul" }],
    emergency:
      "In South Korea, call 119 for an ambulance or fire, or 112 for police. The national suicide prevention hotline is 109, open 24 hours.",
  },
  india: { nepaliName: "भारत", zones: [{ label: "India", tz: "Asia/Kolkata" }] },
  france: {
    nepaliName: "फ्रान्स",
    zones: [{ label: "France", tz: "Europe/Paris" }],
    emergency: "In France, call 112 (or 15 for a medical emergency).",
  },
  belgium: {
    nepaliName: "बेल्जियम",
    zones: [{ label: "Belgium", tz: "Europe/Brussels" }],
    emergency: "In Belgium, call 112 for police, ambulance and fire.",
  },
  germany: {
    nepaliName: "जर्मनी",
    zones: [{ label: "Germany", tz: "Europe/Berlin" }],
    emergency: "In Germany, call 112 for an ambulance or fire, or 110 for police.",
  },
  "saudi-arabia": {
    nepaliName: "साउदी अरब",
    zones: [{ label: "Saudi Arabia", tz: "Asia/Riyadh" }],
    emergency: "In Saudi Arabia, call 997 for an ambulance or 999 for police.",
  },
  malaysia: {
    nepaliName: "मलेसिया",
    zones: [{ label: "Malaysia", tz: "Asia/Kuala_Lumpur" }],
    emergency: "In Malaysia, call 999 for police, ambulance and fire (112 also works from a mobile phone).",
  },
  kuwait: {
    nepaliName: "कुवेत",
    zones: [{ label: "Kuwait", tz: "Asia/Kuwait" }],
    emergency: "In Kuwait, call 112 for police, ambulance and fire.",
  },
  romania: {
    nepaliName: "रोमानिया",
    zones: [{ label: "Romania", tz: "Europe/Bucharest" }],
    emergency: "In Romania, call 112 for police, ambulance and fire.",
  },
  cyprus: {
    nepaliName: "साइप्रस",
    zones: [{ label: "Cyprus", tz: "Asia/Nicosia" }],
    emergency: "In Cyprus, call 112 for police, ambulance and fire.",
  },
  israel: { nepaliName: "इजरायल", zones: [{ label: "Israel", tz: "Asia/Jerusalem" }] },
  portugal: {
    nepaliName: "पोर्चुगल",
    zones: [{ label: "Portugal", tz: "Europe/Lisbon" }],
    emergency: "In Portugal, call 112 for police, ambulance and fire.",
  },
  oman: {
    nepaliName: "ओमान",
    zones: [{ label: "Oman", tz: "Asia/Muscat" }],
    emergency: "In Oman, call 9999 for police, ambulance and fire.",
  },
  bahrain: {
    nepaliName: "बहराइन",
    zones: [{ label: "Bahrain", tz: "Asia/Bahrain" }],
    emergency: "In Bahrain, call 999 for police, ambulance and fire.",
  },
  singapore: {
    nepaliName: "सिंगापुर",
    zones: [{ label: "Singapore", tz: "Asia/Singapore" }],
    emergency:
      "In Singapore, call 995 for an ambulance or fire, or 999 for police. The Samaritans of Singapore (SOS) 24-hour line is 1767.",
  },
  "new-zealand": { nepaliName: "न्युजिल्यान्ड", zones: [{ label: "New Zealand", tz: "Pacific/Auckland" }] },
  ireland: {
    nepaliName: "आयरल्यान्ड",
    zones: [{ label: "Ireland", tz: "Europe/Dublin" }],
    emergency: "In Ireland, call 999 or 112 for police, ambulance and fire.",
  },
  "hong-kong": { nepaliName: "हङकङ", zones: [{ label: "Hong Kong", tz: "Asia/Hong_Kong" }] },
  poland: {
    nepaliName: "पोल्यान्ड",
    zones: [{ label: "Poland", tz: "Europe/Warsaw" }],
    emergency: "In Poland, call 112 for police, ambulance and fire.",
  },
  italy: {
    nepaliName: "इटाली",
    zones: [{ label: "Italy", tz: "Europe/Rome" }],
    emergency: "In Italy, call 112 for police, ambulance and fire.",
  },
  myanmar: { nepaliName: "म्यानमार", zones: [{ label: "Myanmar", tz: "Asia/Yangon" }] },
  bangladesh: { nepaliName: "बंगलादेश", zones: [{ label: "Bangladesh", tz: "Asia/Dhaka" }] },
  thailand: { nepaliName: "थाइल्यान्ड", zones: [{ label: "Thailand", tz: "Asia/Bangkok" }] },
  croatia: {
    nepaliName: "क्रोएसिया",
    zones: [{ label: "Croatia", tz: "Europe/Zagreb" }],
    emergency: "In Croatia, call 112 for police, ambulance and fire.",
  },
  fiji: { nepaliName: "फिजी", zones: [{ label: "Fiji", tz: "Pacific/Fiji" }] },
  denmark: {
    nepaliName: "डेनमार्क",
    zones: [{ label: "Denmark", tz: "Europe/Copenhagen" }],
    emergency: "In Denmark, call 112 for police, ambulance and fire.",
  },
  brunei: { nepaliName: "ब्रुनाइ", zones: [{ label: "Brunei", tz: "Asia/Brunei" }] },
  "sri-lanka": { nepaliName: "श्रीलङ्का", zones: [{ label: "Sri Lanka", tz: "Asia/Colombo" }] },
  finland: {
    nepaliName: "फिनल्यान्ड",
    zones: [{ label: "Finland", tz: "Europe/Helsinki" }],
    emergency: "In Finland, call 112 for police, ambulance and fire.",
  },
  spain: {
    nepaliName: "स्पेन",
    zones: [{ label: "Spain", tz: "Europe/Madrid" }],
    emergency: "In Spain, call 112 for police, ambulance and fire.",
  },
  norway: {
    nepaliName: "नर्वे",
    zones: [{ label: "Norway", tz: "Europe/Oslo" }],
    emergency: "In Norway, call 113 for an ambulance or 112 for police.",
  },
  sweden: {
    nepaliName: "स्विडेन",
    zones: [{ label: "Sweden", tz: "Europe/Stockholm" }],
    emergency: "In Sweden, call 112 for police, ambulance and fire.",
  },
  china: { nepaliName: "चीन", zones: [{ label: "China", tz: "Asia/Shanghai" }] },
};
