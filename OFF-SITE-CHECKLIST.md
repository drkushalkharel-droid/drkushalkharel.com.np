# Off-site checklist for Dr. Kushal Kharel

Things that help your search visibility but happen **outside the website code**, so they are yours to do (or
delegate). Tick them off as you go. Rough order: do sections 1 to 3 first; they are the highest value for the
least effort.

**Rule for everything below:** use exactly the same name, address, phone and credentials everywhere.
Search engines trust details that match across the web.

| Use exactly | Value |
|---|---|
| Name | Dr. Kushal Kharel |
| Title | Consultant Psychiatrist (MD Psychiatry) |
| Nepal Medical Council registration | 27199 |
| Clinic address | Kalanki-14, Near Malpot Road, near Kalanki Bhatbhateni Supermarket, Kathmandu 44600, Nepal |
| Phone / WhatsApp | +977 9861800547 |
| Hours | Sunday to Friday 8:00 AM to 10:00 PM; Saturday 10:00 AM to 4:00 PM |
| Website | https://drkushalkharel.com.np |

---

## 1. Google Business Profile (highest priority)

This is what appears in the map and the box on the right of a search for "psychiatrist Kalanki" or "psychiatrist
near me".

- [ ] **Claim or verify** the profile at business.google.com. Check first whether one already exists (search your
      name and the clinic address); claim it rather than creating a duplicate.
- [ ] **Primary category: "Psychiatrist".** Add secondary categories only if they are true (for example "Mental
      health clinic"). Do not add categories you do not offer.
- [ ] **Address:** the Kalanki address above, exactly. Pin the map marker on the clinic entrance.
- [ ] **Hours:** the hours above. Add special hours for public holidays such as Dashain and Tihar.
- [ ] **Phone and website:** +977 9861800547 and https://drkushalkharel.com.np/. For the appointment link use
      https://drkushalkharel.com.np/appointment/.
- [ ] **Services:** list what the site lists (psychiatric consultation, anxiety, depression, OCD, ADHD, bipolar
      disorder, addiction, sleep problems, online consultation).
- [ ] **Photos:** clinic exterior and entrance, waiting area, consultation room, and a clear portrait. Never
      photograph patients or anything identifying them. Add photos every few weeks; activity helps.
- [ ] **Reviews:** ask **real** patients, in person or by message, if they would be willing to review. Use the
      "Get more reviews" share link in the profile so it is one tap. Never pay for reviews or offer a reward, and
      never write your own.
- [ ] **Replying to reviews:** thank people, but **never confirm that someone is or was your patient**, even when
      they say so publicly. Keep replies general and kind.
- [ ] **Posts:** a short post every few weeks (World Mental Health Day, exam-stress tips, a link to a guide).
- [ ] Note that the site's visible review count (64) comes from `app/data/reviewStats.ts`. Update it when the real
      count changes. It is no longer in the structured data, so it does not affect search listings.

## 2. Google Search Console and Bing Webmaster Tools

- [ ] **Search Console** (search.google.com/search-console): add the property as a **Domain** property
      (drkushalkharel.com.np). Verify with a DNS record in Cloudflare.
- [ ] **Submit the sitemap:** `https://drkushalkharel.com.np/sitemap.xml`. It now has 337 URLs with real
      last-modified dates and hreflang for the Nepali pages.
- [ ] **Request indexing** (URL Inspection, then "Request indexing") for the pages that changed most: the
      homepage, `/faq/`, `/about/`, `/psychiatrist-fee-nepal/`, `/adhd-treatment-kathmandu/`,
      `/depression-treatment-kathmandu/`, `/psychiatry-clinic-kathmandu/`, `/panic-attack-treatment-kathmandu/`
      and the four new region pages `/nepalese-abroad/uk-ireland/`, `/nepalese-abroad/usa-canada/`,
      `/nepalese-abroad/australia-new-zealand/` and `/nepalese-abroad/south-asia/`. Google limits how many you can
      request per day, so start with these.
- [ ] **Bing Webmaster Tools** (bing.com/webmasters): use "Import from Google Search Console" (fastest), then
      submit the same sitemap. (Your deploy already notifies Bing and others through IndexNow.)
- [ ] **Export data for me.** Two exports would let me decide the three merges still on hold (the depression,
      anxiety and "which doctor for sleep problems" knowledge pages, M2 to M4 in `seo-proposals/`):
      *Performance, Pages* for the last 6 to 12 months, and *Performance, Queries*.
- [ ] **After the country pages merge:** in *Performance, Pages*, watch the eight `/nepalese-abroad/` region pages
      for the next 4 to 8 weeks. Clicks that used to go to a country page (for example `/nepalese-abroad/dubai/`)
      should move to its region page. If a big market such as UAE loses clicks and does not recover, tell me and we
      can bring that country back as its own page.
- [ ] **Two weeks after deploying:** open *Pages* (indexing) and look for new errors. Also check *Enhancements*
      for FAQ and breadcrumb problems, and *International Targeting* or the hreflang report for the Nepali pages.
- [ ] Check *Manual actions* and *Security issues* are both empty.

## 3. "Psychiatrist Kalanki": which page ranks?

A crawl found the **privacy policy** showing up for this search, which is the wrong page.

- [ ] Search Google for `psychiatrist Kalanki` and `psychiatrist in Kalanki Kathmandu` (use a private window).
      Note which of your pages appears, and where.
- [ ] In Search Console, *Performance*, filter Queries containing `kalanki`, and see which page gets the clicks.
- [ ] **What I already changed on the site:** the intended page, `/psychiatry-clinic-kathmandu/`, is now titled
      "Psychiatry Clinic in Kalanki, Kathmandu", mentions Kalanki 31 times, and is linked from 135 other pages. The
      privacy policy mentions it twice and has 3 links. Google has to re-crawl before this shows.
- [ ] **Re-check in 3 to 4 weeks.** If the privacy policy still outranks the clinic page, tell me and I will add
      `noindex` to the privacy policy (safe for a legal page) and strengthen the clinic page further.

## 4. Doctor and hospital directory profiles (backlinks)

Every profile below is a place that can link back to your site. Links from trusted, independent sites are worth
more than almost anything else off-site.

- [ ] **Nepal Medical Council:** check that your name and registration number 27199 appear correctly on the NMC
      register, and that your specialty is listed as psychiatry.
- [ ] **Nepal Medical Association and Psychiatrists' Association of Nepal (PAN):** you are a lifetime member of
      both. Ask whether each has a member directory and whether it can link to your website.
- [ ] **Hospitals or clinics where you consult:** ask each to list you on their doctors page with a link to
      https://drkushalkharel.com.np/about/.
- [ ] **Kathmandu Mental Health Clinic** (kathmandumentalhealth.com.np/doctors/dr-kushal-kharel/): you told me the
      degree wording there was being corrected to "MD Psychiatry" with no MBBS/Jalalabad line. **Please confirm it
      has been changed**; the two sites need to say the same thing. Also make sure it links to your own site.
- [ ] **Existing profiles** (already in your website's `sameAs` list): TherapyMantra, UpchaarNepal, about.me,
      Yandex Maps, Quora, Nagarik News author page. Check each for the same name, phone, address and website link.
- [x] **Wording:** the website now describes you simply as a Consultant Psychiatrist (MD Psychiatry). The old
      "Neuropsychiatry" wording was removed everywhere on the site. Use the same plain wording on every profile above.

## 5. Social and "sameAs" profiles

Your site tells search engines which profiles are yours (`sameAs`). Keep these active and identical in name and
bio, with a link to the website.

- [ ] **YouTube** (@dr.kushalkharelpsychiatrist): channel description and a link to the site. Short videos that
      answer common questions (in Nepali) also rank in Google.
- [ ] **Facebook** (cooshal.kharel), **Instagram** (cusalnova), **X/Twitter** (Drkushalpsych), **TikTok**
      (drkushalkharel), **Threads** (cusalnova): same photo, same name, same bio line, link to the site.
- [ ] **LinkedIn:** not currently listed. If you create one, tell me the address and I will add it to the site.
- [ ] Tell me about any other profile you own (a hospital page, a podcast, a conference bio) so I can add it.

## 6. Nepali media: expert quotes and op-eds

Coverage in national outlets builds trust and brings links. Your existing articles already contain good hooks.

- [ ] **Make a short media page or one-paragraph bio** you can paste into emails (name, title, NMC number,
      languages, what you can comment on, phone).
- [ ] **Pitch by topic and date.** Suggested hooks, each tied to an article you already have:
  | When | Hook | Your article |
  |---|---|---|
  | 10 September (World Suicide Prevention Day) | Responsible reporting and the Werther effect | `/knowledge/media-werther-effect-samuhik-jimmewari/` |
  | 10 October (World Mental Health Day) | Everyday mental health habits; stigma | `/knowledge/boost-mental-health/`, `/knowledge/mental-health-stigma/` |
  | Around SEE and board exams | Exam stress in students and parents | `/blog/exam-stress-see-board-exams-nepal/` |
  | Dashain and Tihar | Loneliness and drinking during festivals | `/blog/dashain-tihar-festival-loneliness-depression/`, `/blog/festival-alcohol-use-dashain-nepal/` |
  | Monsoon | Mood and monsoon; disaster stress | `/blog/monsoon-season-mental-health-nepal/`, `/knowledge/psychological-first-aid-flood-landslide-nepal/` |
  | Any time | Mental health of Nepali migrant workers | `/blog/mental-health-nepali-migrant-workers/` |
- [ ] **Outlets to try:** you already have a Nagarik News author profile. Also consider the mental-health, health
      and opinion desks of other national dailies and online news sites, and health radio and TV shows.
- [ ] **Two ways in:** (a) offer a named quote to a journalist writing on a topic; (b) send a 600 to 800 word
      op-ed. Both should link readers to a page on your site (never to a sales page).
- [ ] **Follow safe-messaging rules** on suicide: no method details, no dramatic language, always include help
      information. Your article on responsible reporting is a good reference to share with journalists.
- [ ] **When you are quoted,** ask the outlet to link your name to https://drkushalkharel.com.np/about/, and send
      me the link so I can list it on your About page under "In the media" (the section is built and hidden until
      there is something to show).

---

## What is already done on the website side

For reference, these support the steps above and need nothing from you:

- Every page now has the correct language tag; Nepali pages are marked as Nepali.
- No review-rating markup remains (it risked a manual action); doctor and clinic details appear once, on the
  homepage and About page, and other pages point to them.
- Titles and descriptions are in range and unique on all 337 pages.
- The sitemap has real dates and Nepali alternates.
- The 41 country pages are merged into 8 regional pages (each country is a section on its region's page), two
  overlapping articles are merged into the pages that cover them, and three thin city pages are retired.
- Legacy addresses redirect once you upload `redirects/cloudflare-redirects.csv` (66 redirects; steps in
  `redirects/UPLOAD-STEPS.md`).
