# Phase 9 briefs: new content

**Status update 2026-09-27 (branch `seo/content-improvements`, not yet published):**
- **B (fee page):** built using only facts already on the site: a fee table in the first screen, what the fee
  includes, what affects the price, follow-up fees, online and paying from abroad, three more FAQs, and a visible
  "Page last updated" date. Payment wording reuses what you confirmed on 24 and 26 Sept (card, bank transfer, family
  member in Nepal). **Still open: B1 (online fee), B3 (certificate, testing, home-visit fees), B4, B5, B6, B7.**
- **C (ADHD section):** built from what the page already says: what an assessment involves, what it costs (points to
  the fee page and says the clinic confirms the ADHD fee), what happens after diagnosis, two more FAQs.
  **Still open: C1 to C5.**
- **Insomnia upgrade (topic 4 in section D):** done for `/knowledge/insomnia/` (Nepali) and `/conditions/insomnia/`
  (English). `/knowledge/non-restorative-sleep-nepal/` is not done yet.
- Section A (Nepali twins) and the other topics in D are untouched.

The original brief follows.

Original status: BRIEFS ONLY. Each brief says what I would build, what I
would reuse, and exactly what I need from you first. Section E collects the questions in one place.

The rule for all of it: I use only facts already on your site or facts you give me. Where a number or a
clinical detail is missing, the brief says so and I ask; I never fill a gap myself.

---

## A. Nepali versions of five pages

### Shared approach

| Decision | Proposal | Why |
|---|---|---|
| URL pattern | Add `/np/` to each address: `/np/` (homepage), `/psychiatrist-fee-nepal/np/`, `/online-psychiatrist-nepal/np/`, `/depression-treatment-kathmandu/np/`, `/adhd-treatment-kathmandu/np/` | Matches your existing `/anxiety/np/`. |
| Language tags | `lang="ne"`, `og:locale` `ne_NP`, and hreflang to the English page with the English page as x-default | All of this is already wired (Phase 1). Each new page is one line in `app/data/translationPairs.ts`. |
| Length | 900 to 1,300 words each, not a full translation | The English homepage is about 2,900 words; a Nepali visitor needs the essentials and a way to book. |
| Wording | Plain Nepali with English medical terms in brackets, like your existing guides | Your existing Nepali articles already use this style. |
| Review | **You review every Nepali page before it goes live** | Medical Nepali needs a clinician's eye. I write from your existing English text and add no claims. |
| Numbers | Arabic numerals with रु. (for example रु. 800), not Devanagari digits | People search "NPR 800" and "रु 800"; this matches both. **Tell me if you prefer ८००.** |
| Links | Each Nepali page links to its English twin (visible switch link, already built) and to your existing Nepali guides | Passes relevance both ways. |

### The five pages

| # | Page | Target searches (Nepali) | Draft title (max 47) | Notes |
|---|---|---|---|---|
| 1 | `/np/` (homepage) | मनोचिकित्सक काठमाडौं, डा. कुशल खरेल, मानसिक स्वास्थ्य उपचार | मनोचिकित्सक काठमाडौं: डा. कुशल खरेल | Sections: who and where, services, conditions (each linking to a Nepali guide), booking, 8 FAQs, credentials (MD Psychiatry, NMC #27199). |
| 2 | `/psychiatrist-fee-nepal/np/` | मनोचिकित्सक परामर्श शुल्क, मनोचिकित्सकको फी कति | मनोचिकित्सक परामर्श शुल्क, काठमाडौं | Waits on section B. Uses only fee numbers you confirm. |
| 3 | `/online-psychiatrist-nepal/np/` | अनलाइन मनोचिकित्सक नेपाल, भिडियो परामर्श | अनलाइन मनोचिकित्सक: घरबाटै परामर्श | How it works, who it suits, when in-person is needed, prescriptions, privacy. |
| 4 | `/depression-treatment-kathmandu/np/` | डिप्रेसन उपचार काठमाडौं, निराशा रोगको उपचार, डिप्रेसनका लक्षण | डिप्रेसन उपचार काठमाडौं: लक्षण र उपचार | Becomes the Nepali landing page for the depression group; Nepali depression articles would link here (see below). |
| 5 | `/adhd-treatment-kathmandu/np/` | एडीएचडी उपचार काठमाडौं, बच्चामा ADHD का लक्षण, ADHD जाँच | एडीएचडी उपचार काठमाडौं: जाँच र उपचार | Parents searching for a child are the main audience; links to `/knowledge/adhd/` for the explainer. |

Draft descriptions (120 to 150 characters, ending "परामर्श बुक गर्नुहोस्।") will be written with each page and
shown to you with it.

**Link to Phase 4.** Once page 4 or 5 exists, the Nepali articles in that group point to it instead of to the
English page (one line in `app/data/contentClusters.ts`). For depression this also gives merge **M2** a cleaner
alternative: M2 has been done by folding `/knowledge/depression-treatment-nepal/` into the English page, with
its Nepali sections shown in a Nepali block at the bottom of that page. When page 4 is built, those Nepali sections
can move onto it and the English page can drop them.

**What I need for A:** approval of the five URLs, a decision on numerals, and your review time.

---

## B. Improving `/psychiatrist-fee-nepal/`

### What competitors do (public pages, structure only)

| Page | Fee table | Distinguishes initial / follow-up / online | Length | Trust signals |
|---|---|---|---|---|
| drpurushottam.com.np fee article | No; one range, NPR 700–1,500 | No | about 550 words | Doctor name and phone; no dates or reviews |
| bhattpsychotherapy.com fee guide (psychologist) | No; publishes **no** figures on purpose | Talks about format and session length, gives no numbers | 1,500–2,000 words | Author credentials, date (June 2026), table of contents, FAQ, emergency note |

Your page is already more specific than both (it separates initial, follow-up and repeat, and states the free
follow-up). It just does not *look* like the clearest answer: no table, no online/in-person line, no date.

### What your page already states (I will not change these)

- Initial consultation: **NPR 800–1,500**, depending on complexity and length.
- First follow-up within one week: **free**, once. Repeat consultation after that: **NPR 800**.
- Medication is bought at the pharmacy and is **not** in the consultation fee.
- Certificates and testing are confirmed with the clinic before booking.

### Proposed structure

1. **A fee table** (the answer in the first screen), using the rows above plus the rows you fill in below.
2. **What the fee includes and does not include.**
3. **Follow-up fees**, kept as they are.
4. **Online vs in person**, and how to pay (including from abroad).
5. **What affects the price**, in your own words (complexity, length, first visit vs return).
6. **FAQ**, extended (payment methods, receipts and insurance paperwork, certificates, children, families paying from abroad).
7. **Visible "last updated" and "medically reviewed" dates** (the date machinery from Phase 2 already exists).
8. The Nepali twin (page 2 above).

### What I need from you for B

| # | Question | Where it goes |
|---|---|---|
| B1 | Is the online consultation fee the same as in person? If different, what is it? | Table row |
| B2 | Payment for patients abroad. Your online-consultation page already says "card, bank transfer or another method that works for you, including from abroad", but the fee page does not. Should the fee page say the same, and can a family member pay in Nepal? | Payment section and FAQ |
| B3 | Fees for: medical certificate, IQ/psychometric testing, home visit, a counselling session (any that apply) | Table rows. Currently "confirmed with the clinic" |
| B4 | Does the initial fee cover the whole first assessment even if it takes two visits? | "What is included" |
| B5 | Do you give receipts for reimbursement or insurance? | FAQ |
| B6 | Do you offer reduced or free consultations? Your page mentions "free and low-cost outreach programmes in some settings"; how should a patient ask? | FAQ |
| B7 | Should the page compare with typical private fees in Nepal? I would only do this with a source you are happy to cite (public figures vary widely: about NPR 700–1,500 in some directories, higher in others) | Optional |

---

## C. "ADHD assessment cost and process in Nepal" section

Goes on `/adhd-treatment-kathmandu/`. It answers the question people ask before they book, using what the page
already says about how you assess ADHD.

### What your page already states about the process

- A detailed developmental and symptom history; for children this includes parents and, where useful, school input.
- For adults, a childhood history consistent with the diagnosis.
- Where the picture is unclear, referral for formal psychometric testing.
- Medication is one option, not automatic; behavioural strategies go alongside it.

### Proposed outline (about 350 to 450 words)

1. **What an ADHD assessment involves** (the four points above, as short steps).
2. **How many visits and how long** (needs your answer).
3. **What to bring** (school reports and old records are typical; medication list is already on your FAQ).
4. **What it costs**: the standard initial fee, plus testing if used (needs your answer).
5. **What happens after the diagnosis**: treatment options, follow-up, school letters (needs your answer).
6. **Three to four FAQs** (adult first diagnosis is already there).

### What I need for C

| # | Question |
|---|---|
| C1 | Is an ADHD assessment done in one visit or more? Roughly how long is the first appointment? |
| C2 | Do you use rating scales or questionnaires yourself? Which, if any, may I name? |
| C3 | Is psychometric testing done at your clinic (see `/iq-psychological-testing/`) or referred out? What does it cost? |
| C4 | Do you provide a written diagnosis or report for schools or employers? Any charge? |
| C5 | Is the ADHD assessment fee the standard initial fee (NPR 800–1,500) or different? |

---

## D. Ten Romanized-Nepali topics (briefs only)

**Two honest caveats first.**
1. **I have no search-volume data.** Please check each phrase in Search Console (Performance, filter "Queries
   containing") or Google Trends. The Ahrefs connector in this session needs you to authorise it before I can
   pull volumes myself.
2. **Your site already has Romanised slugs** (for example `overthinking-kasari-niko-parne-nepal`), so this
   pattern is established: a Nepali-script article with a Romanised address and Romanised phrases used naturally
   in a heading or two. Five of the ten topics (4 to 8) overlap an existing Nepali page. For three of them
   (4, 5, 6) I recommend *upgrading the existing page* rather than adding a competing one.

| # | Search phrase | Devanagari | What the person wants | Recommendation | Existing page it overlaps |
|---|---|---|---|---|---|
| 1 | tension ko upchar | टेन्सनको उपचार | Relief from stress or anxiety they call "tension" | **New** Nepali guide: what "tension" usually means, self-help, when to see a doctor | `/knowledge/coping-with-anxiety/` (English) only; no Nepali page |
| 2 | dimag ko doctor | दिमागको डाक्टर | Who to see: psychiatrist, neurologist or psychologist | **New** Nepali guide explaining the three roles | `/counselling-in-nepal/`, `/best-psychiatrist-nepal/` (English) |
| 3 | manasik rog ko lakshan | मानसिक रोगका लक्षण | Whether what they see is a mental illness | **New** Nepali hub: common signs, links to each condition guide | None as a hub |
| 4 | nidra napareko upchar | निद्रा नपरेको उपचार | Help with not sleeping | **Upgrade** `/knowledge/insomnia/` and `/knowledge/non-restorative-sleep-nepal/`: add the phrase and a "when to see a doctor" block | Both |
| 5 | dar lagne rog / panic attack ko upchar | डर लाग्ने रोग / प्यानिक अट्याकको उपचार | Chest tightness, sudden fear | **Upgrade** `/knowledge/panic-attack-nepali-guide/` | Yes |
| 6 | overthinking kasari rokne | ओभरथिंकिङ कसरी रोक्ने | Stop racing thoughts | **Upgrade** `/knowledge/overthinking-kasari-niko-parne-nepal/` (retitle, add phrase) | Yes |
| 7 | depression ko lakshan | डिप्रेसनका लक्षण | Recognise depression | **Covered by** the Nepali depression page (A, page 4) | `/knowledge/smiling-depression-nepal/`, `/knowledge/aalash-ho-ki-manasik-samasya-nepal/` |
| 8 | rakshi chhodne upay | रक्सी छोड्ने उपाय | Quit or cut down alcohol | **New**, written with care: stopping suddenly can be dangerous, so it leads with medical supervision | `/knowledge/morning-drinking-alcohol-nepal/`, `/knowledge/alcohol-dependence-syndrome/` |
| 9 | dimag shant kasari rakhne | दिमाग शान्त कसरी राख्ने | Calm a busy mind | **New** Nepali version of the practical techniques | `/how-to-control-your-mind-nepal/` (English) |
| 10 | manasik samasya ko upchar kaha garne | मानसिक समस्याको उपचार कहाँ गर्ने | Where to get treatment in Kathmandu | **New** Nepali page: options and how to book, honest about alternatives | `/psychiatry-clinic-kathmandu/` (English) |

**Split:** 5 new guides (1, 2, 3, 9, 10), 1 careful new guide (8), 3 upgrades to existing pages (4, 5, 6), 1 covered
by section A (7).

**For each new guide I will provide, before writing:** target phrase and two variants, the one question it
answers, a five-line outline, which existing pages it links to and which link back, and any safety wording
(topics 5 and 8 need explicit "seek urgent help" language).

**What I need for D:** your view of the split above and Search Console data for the phrases.

---

## E. Everything I need from you, in one list

1. **A:** approve the five `/np/` URLs; choose numerals (Arabic recommended); agree to review each Nepali page.
2. **B1 to B7:** the fee questions in section B.
3. **C1 to C5:** the ADHD process and cost questions in section C.
4. **D:** approve the split of ten topics; share Search Console data for the phrases.
5. **Order of work.** My suggestion: B and C first (they improve pages that already exist and rank or convert),
   then the Nepali depression and ADHD pages, then the rest.
