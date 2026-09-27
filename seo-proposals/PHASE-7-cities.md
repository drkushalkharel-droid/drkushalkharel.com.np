# Phase 7 proposal: the three remaining `/cities/` pages

**Status: PROPOSAL ONLY. Nothing has been deleted, merged or redirected.**
Machine-readable map: [phase7-cities-redirect-map.json](phase7-cities-redirect-map.json)

## What I found

| Page | Words | Notes |
|---|---:|---|
| `/cities/kathmandu/` | 396 | Built from the same template as the other two |
| `/cities/pokhara/` | 410 | Online-only (no clinic there) |
| `/cities/chitwan/` | 420 | Online-only (no clinic there) |

- All three are under the 450-word "thin" line and written from one template.
- Nine other city pages (Biratnagar, Dhangadhi, Nepalgunj, Lalitpur, Bhaktapur, Butwal, Dharan,
  Janakpur, Hetauda) were already retired and now point to `/online-psychiatrist-nepal/`.
- You asked for one "Online consultation from anywhere in Nepal" page. **That page already exists**:
  `/online-psychiatrist-nepal/` (1,700+ words). Creating another near-identical page would make two pages
  compete for the same searches, so I recommend using it.

## Proposal

| Old URL | New URL | Why |
|---|---|---|
| `/cities/pokhara/` | `/online-psychiatrist-nepal/` | Online-only, same as the nine retired cities |
| `/cities/chitwan/` | `/online-psychiatrist-nepal/` | Same |
| `/cities/kathmandu/` | `/psychiatry-clinic-kathmandu/` | Kathmandu is where the physical clinic is, so the clinic page fits better than the online page |

`/online-psychiatrist-nepal/` already has a short "Online care for patients in your city" section that links
to the three guides. On approval I would keep any city-specific facts worth keeping in that section and 301 the
three URLs (Cloudflare first, then the site update, same order as Phase 3).

## Decisions I need

1. **Approve, change or reject.**
2. **Search Console.** If `/cities/kathmandu/` currently earns clicks for "psychiatrist in Kathmandu", keep it
   and make it distinct rather than redirect it. Please export its clicks and impressions.
