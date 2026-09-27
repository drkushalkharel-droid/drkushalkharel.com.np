# Phase 3 proposal: the 41 "Nepalese abroad" country pages

**Status: APPROVED 2026-09-27 and built on branch `seo/consolidation-merges` (not yet on the live site).**
The owner chose to merge **all 41** country pages into the 8 regional pages, including Dubai, USA, Australia and
UK (my recommendation to keep those four standalone was not taken), with Israel in the Europe page and every
other recommendation accepted. The text below is the original proposal, kept for the record.

The full machine-readable redirect map is in [phase3-redirect-map.json](phase3-redirect-map.json).

---

## Bottom line

Merge the 41 country pages into **8 regional pages**. Four already exist (Gulf, Europe, East
Asia, Southeast Asia); four are new (UK & Ireland, USA & Canada, Australia & New Zealand, South
Asia). Each old country URL gets a permanent (301) redirect to its regional page. Every
country's own concerns, prescription note, emergency number and patient quote move onto the
regional page as a section, so no real content is lost, only the copy-pasted framing around it.

## Why (measured, not assumed)

I compared the text of all 41 pages, five words at a time:

| Measure | Result |
|---|---|
| Length of each page | about 1,850 words |
| Phrases that appear on **no other** country page | **only 23%** on average |
| Overlap with the most similar sibling page | 60% on average (up to 71%: Oman vs Saudi Arabia) |
| Most similar pairs | Oman/Saudi Arabia 71%, Denmark/Norway/Sweden ~67%, Poland/Croatia 67% |

So roughly three-quarters of each page is shared template. That is the pattern Google calls
doorway pages: many near-identical pages that differ mostly by a place name.

What is genuinely different per country (and will be kept): visa and permit worries (F-1/OPT/H-1B in
the USA, study permit and Post-Graduation Work Permit in Canada, work-hour limits in Australia and
New Zealand, settled status in the UK), the local route for ongoing prescriptions (NHS GP in the UK,
Overseas Student Health Cover in Australia), seasonal low mood in the darker UK/Canada winters,
academic pressure in India and Bangladesh, and compassion fatigue among Nepali care workers in
Israel.

## Proposed structure

| # | Regional page | Status | Countries folded in |
|---|---|---|---|
| 1 | `/nepalese-abroad/gulf/` | exists | UAE (Dubai), Qatar, Saudi Arabia, Kuwait, Oman, Bahrain |
| 2 | `/nepalese-abroad/europe/` | exists | Germany, Netherlands, France, Belgium, Portugal, Romania, Cyprus, Poland, Italy, Spain, Croatia, Denmark, Finland, Norway, Sweden |
| 3 | `/nepalese-abroad/uk-ireland/` | **new** | UK, Ireland (currently inside the Europe hub) |
| 4 | `/nepalese-abroad/usa-canada/` | **new** | USA, Canada |
| 5 | `/nepalese-abroad/australia-new-zealand/` | **new** | Australia, New Zealand, Fiji |
| 6 | `/nepalese-abroad/east-asia/` | exists | Japan, South Korea, Hong Kong, China |
| 7 | `/nepalese-abroad/southeast-asia/` | exists | Malaysia, Singapore, Thailand, Brunei, Myanmar |
| 8 | `/nepalese-abroad/south-asia/` | **new** | India, Bangladesh, Sri Lanka |

Israel does not fit any of these cleanly. See decision 3.

## What each regional page will contain

The four existing hubs already have a regional introduction, a themes list, a computed session-time
table, a Nepali paragraph and FAQs. I would keep all of that and add, for **every country on the
page**, a short section (its own heading and anchor, e.g. `#dubai`) holding:

1. **Time and scheduling.** The session-time table already computes what a Kathmandu slot means in
   local time for each country (including several US, Canadian and Australian time zones). Region
   pages add region-specific advice on which slots fit: for example, a Nepal evening is late evening
   or night in Japan and Korea, while Europe and the USA usually need early-morning or late-evening
   Nepal slots.
2. **Local emergency numbers.** From the numbers already verified in the site data.
3. **Prescriptions and continuing care.** The existing per-country note (a Nepal prescription usually
   cannot be filled abroad; when to use a local GP, NHS route, student health service, etc.).
4. **Region-specific stressors.** The existing per-country concerns, grouped by region theme:
   migrant-worker issues in the Gulf and Malaysia, visa and study pressure in the USA, Canada, Australia
   and New Zealand, seasonal low mood in the UK, Canada and the Nordic countries, care-worker
   exhaustion in Israel.
5. **Real patient quotes** where they exist (9 of the 41 pages have one: Japan, Korea, Belgium, UK,
   Qatar, USA, Australia, Malaysia, Dubai). They move to the regional page under their country heading.

Europe will be grouped into sub-regions (Western, Southern, Nordic, Central and Eastern) so a
15-country page reads as several short, distinct sections rather than one long list.

## What I will NOT invent

- No new medical, legal or licensing claims. Everything above reuses text already on your site.
  Anything genuinely new (for example rules about a Nepal-licensed doctor treating patients who are
  physically in a particular US state) I will leave as a clearly marked question for you, not write.
- 15 of the 41 countries have no verified emergency number in the site data today (UK, USA, Canada,
  Australia, New Zealand, Fiji, India, Bangladesh, Sri Lanka, Israel, China, Hong Kong, Thailand, Brunei,
  Myanmar). Each will get one only after I look it up from an official source and show you the source.
  I will not type any from memory.

## Decisions I need from you

1. **Do you want me to check Google Search Console first?** This is the most important one. I have
   no traffic data. Please export *Performance > Pages* for the last 6-12 months, filtered to
   `/nepalese-abroad/`. A country page that already gets clicks or brings in consultations should
   probably stay as its own page rather than be redirected. My rule of thumb: keep a page standalone
   if it has meaningful clicks or you know it produces bookings.
2. **UAE / Dubai.** You told me on 24 Sept that UAE consultations already convert well. Redirecting
   `/nepalese-abroad/dubai/` to a six-country Gulf page could lose that. **My recommendation is to keep
   Dubai as its own page** (and make it distinct, not a template). Same question for **USA, Australia
   and UK**, the largest Nepali communities, where "Nepali psychiatrist in Australia" is a real,
   specific search. The map marks these four as standalone candidates.
3. **Israel.** It is not Gulf and not Europe. Options: (a) fold into the Europe page in an "Eastern
   Mediterranean" section next to Cyprus (my default in the map), (b) keep it as its own page, (c) fold
   it into the Gulf page. Your call.
4. **Groupings.** Are you happy with Fiji under Australia & New Zealand, and Bangladesh and Sri Lanka
   under a South Asia page with India?
5. **Testimonials.** Confirm the 9 patient quotes may appear on the merged pages (they are already
   public today, and anonymised).

## How it will be deployed (safe order)

GitHub Pages cannot send 301 redirects, so the redirects run at Cloudflare (Phase 6).
Cloudflare redirects fire before the site is even asked, so the safe order is:

1. I generate `cloudflare-redirects.csv` and give you upload steps.
2. You upload it to Cloudflare *first*.
3. Then we deploy the site. The old URLs redirect at the edge; a small "moved" page stays on the
   site as a fallback (not indexed, not in the sitemap).

Removed pages leave the sitemap immediately, and every internal link that pointed at an old country
URL is updated to the new regional page.

## If you approve

I will: add the four new region pages and per-country sections; move each country's content and quote
onto its regional page; add the fallback "moved" pages; update all internal links, the sitemap, the
`/nepalese-abroad/` index and `llms.txt`; add the redirects to `cloudflare-redirects.csv`; rebuild and
re-audit; and commit. Nothing is removed until you say so.
