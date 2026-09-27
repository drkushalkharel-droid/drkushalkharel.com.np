# Phase 4 proposal: pages competing for the same condition

**Status: PROPOSAL ONLY for the 5 merges below. Nothing has been deleted, merged or redirected.**
The non-destructive parts (internal links, "Related" boxes, sharper titles and H1s) do not need
approval and I will do them in Phases 5 and 7. They leave every URL alive.

Full detail (every page in each cluster, current title, H1, word count, inlinks) is in
[phase4-cluster-map.json](phase4-cluster-map.json).

---

## What I found (and one correction to the brief)

I compared the actual text of pages in each condition group. **The pages are not copies of each
other.** Overlap between same-topic pages is 19% at most, and usually near zero. So this is not
duplicate content. It is two other problems:

1. **The wrong pages get the internal links.** The commercial page for each condition is the one
   patients should land on, and it is starved:

   | Condition | Commercial page (should win) | Links in | Clinical reference page | Links in |
   |---|---|---:|---|---:|
   | ADHD | `/adhd-treatment-kathmandu/` | **0** | `/conditions/adhd/` | 8 |
   | Depression | `/depression-treatment-kathmandu/` | **0** | 4 pages under `/conditions/` | **93** |
   | Bipolar | `/bipolar-disorder-treatment-kathmandu/` | **0** | 3 pages | 16 |
   | Schizophrenia | `/schizophrenia-treatment-kathmandu/` | **0** | 5 pages | 29 |
   | OCD | `/erp-therapy-ocd/` | 49 | 2 pages | 17 |
   | Anxiety | `/anxiety/` | 62 | 6 pages | 65 |
   | Sleep | `/sleep-problems-treatment-nepal/` | 48 | 3 pages | 17 |

2. **Several pages aim at the same search phrase.** Examples: `/panic-attack-treatment-kathmandu/` and
   `/blog/panic-attack-treatment-kathmandu/` have the same title target. Nepali-language guides such as
   `/knowledge/schizophrenia/` carry an English title and H1 ("Schizophrenia"), so they compete with
   `/conditions/schizophrenia/` for the English word while their text is in Nepali.

## The rule I will apply

| Role | URL pattern | Aims at | Title/H1 style |
|---|---|---|---|
| **Primary** (commercial) | `/x-treatment-kathmandu/` or the service page | "X treatment Kathmandu", "X doctor Nepal" | "X Treatment in Kathmandu, Nepal" |
| **Reference** | `/conditions/x/` | "X symptoms, causes, diagnosis" | "X: Symptoms, Causes & Diagnosis" |
| **Nepali guide** | `/knowledge/x/` (Nepali) | Nepali-language searches | Nepali first: "सिजोफ्रेनिया (Schizophrenia): लक्षण, कारण र उपचार" |
| **Sub-topic** | `/blog/...` | one specific question | the question itself ("Adult ADHD in Nepal") |
| **Tool / leaflet** | `/screening/`, `/resources/` | "test" / "download" | as now |

Every supporting page will link to its primary page with descriptive anchor text ("ADHD treatment in
Kathmandu"), not "click here" or the bare condition name.

## The 8 clusters (124 pages)

| Cluster | Primary page | Also primary | Notes |
|---|---|---|---|
| ADHD | `/adhd-treatment-kathmandu/` | | 1 reference, 1 Nepali guide, 1 blog, 1 screening, 2 leaflets |
| Depression | `/depression-treatment-kathmandu/` | | 4 reference, 2 Nepali guides, 10 blogs |
| Bipolar | `/bipolar-disorder-treatment-kathmandu/` | | 3 reference, 2 Nepali guides |
| Schizophrenia & psychosis | `/schizophrenia-treatment-kathmandu/` | `/psychosis-treatment-kathmandu/` | Two commercial pages: "schizophrenia" (a diagnosis) and "psychosis" (the umbrella, first-episode, "when to seek help") are different searches, so I would keep both and make the difference explicit |
| OCD | `/erp-therapy-ocd/` | | See decision 4 |
| Anxiety & panic | `/anxiety/` | `/panic-attack-treatment-kathmandu/` | 6 reference, 4 Nepali guides, 16 sub-topics |
| Insomnia & sleep | `/sleep-problems-treatment-nepal/` | | |
| Addiction | `/addiction-treatment-kathmandu/` | | Included because it has the same structure |

## The 5 merges I propose (each needs your OK)

Each is a case of **the same query and the same intent** on two pages. In every one I would move any
worthwhile content from the page being removed into the page being kept, then 301 the old URL.

Worth knowing: the commercial pages (`/depression-treatment-kathmandu/`, `/panic-attack-treatment-kathmandu/`,
`/sleep-problems-treatment-nepal/` and the rest) are all built from one short template ("Who this is
for / Common concerns / FAQ / Related services", about 800 words). The pages proposed for removal carry the
real substance, so folding them in makes the commercial page stronger rather than just smaller.

| # | Remove (301) | Keep | Why | Check first |
|---|---|---|---|---|
| M1 | `/blog/panic-attack-treatment-kathmandu/` | `/panic-attack-treatment-kathmandu/` | Identical title target and commercial intent. The blog (1,670 words) is fuller than the service page (781): symptoms, causes, assessment, treatment and urgent-help sections move across. | |
| M2 | `/knowledge/depression-treatment-nepal/` | `/depression-treatment-kathmandu/` | "Depression treatment Nepal / Kathmandu": same searcher, same intent. Its symptoms, diagnosis, treatment and urgent-help sections (English and Nepali) move across. | Its title is hand-tuned in the code, so it may already rank. |
| M3 | `/knowledge/anxiety-treatment-nepal/` | `/anxiety/` | Same query family. `/anxiety/` already covers the English content; the Nepali sections move to `/anxiety/np/` (only 631 words today). | Title hand-tuned in the code; may already rank. |
| M4 | `/knowledge/sleep-problems-which-doctor-kathmandu/` | `/sleep-problems-treatment-nepal/` | "Which doctor for sleep problems in Kathmandu" and "sleep problems treatment Nepal" are the same searcher. Its "which doctor / what happens at a consultation / how to book" sections are what the commercial page lacks. | Very long bilingual title (137 characters). |
| M5 | `/knowledge/sleep-and-mental-health/` | `/blog/sleep-problems-and-mental-health/` | Same topic; the removed page is 395 words against 1,317. Its "sleep hygiene basics" and "techniques for insomnia" sections move across. | |

**Redirect chains to flatten.** `public/_redirects` already sends
`/knowledge/best-therapy-for-anxiety/` and `/knowledge/anxiety-depression-treatment-options-nepal/` to
`/knowledge/anxiety-treatment-nepal/`. If M3 goes ahead they should point straight at `/anxiety/`
(one hop, not two). I will do this in the redirect file.

Everything else I looked at (for example the blog's generalized-anxiety and social-anxiety posts against
their `/conditions/` pages) I would **keep and sharpen**, not merge. They answer different framings of the
question, and merging them would lose long-tail traffic.

## Decisions I need from you

1. **Search Console, again.** For M2, M3 and M4 the "removed" page might currently outrank the "kept"
   one. If so, the safer move is the reverse direction, or re-scoping the knowledge page as a Nepali-only guide
   instead of merging it. Please export *Performance > Pages* (last 6-12 months) for those URLs, or
   tell me to go ahead without it.
2. **Approve, change or reject each of M1-M5.**
3. **Psychosis vs schizophrenia.** Keep both as separate commercial pages (my recommendation) or merge?
4. **OCD has no "OCD treatment in Kathmandu" page.** The nearest is `/erp-therapy-ocd/` (ERP therapy).
   Options: (a) widen it to "OCD treatment in Kathmandu: ERP therapy and medication" (my recommendation,
   keeps the URL and its 49 inlinks), or (b) create a new `/ocd-treatment-kathmandu/` page.
5. **English titles on Nepali pages.** Confirm I may retitle the Nepali knowledge guides Nepali-first
   (for example `/knowledge/schizophrenia/`, `/knowledge/adhd/`, `/knowledge/insomnia/`). This changes
   title and H1 text only, never the URL.

## What I will do without waiting (no page is removed)

- Point internal links at the primary pages with descriptive anchors, add a "Related" box (same
  cluster) and a primary-service callout to every article (Phase 5).
- Rewrite titles and H1s so each role targets a different query, skipping the five pages above until
  you decide (Phase 7).
