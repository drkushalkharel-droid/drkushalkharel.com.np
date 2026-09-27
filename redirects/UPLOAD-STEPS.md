# How to upload the redirects to Cloudflare

**Why this is needed.** Your site is hosted on GitHub Pages, which cannot send permanent (301)
redirects. Cloudflare sits in front of it, and Cloudflare can. Until you do this, old URLs such as
`/depression/` still load a small "This page has moved" page (HTTP 200) instead of a real redirect.
That page stays on the site as a backup either way.

I checked the live site: it is served through Cloudflare (`server: cloudflare` in the response), which
is what makes this possible.

## The files in this folder

| File | What it is | Upload it? |
|---|---|---|
| `cloudflare-redirects.csv` | **66 redirects**: the 41 country pages to their regional pages, the 12 retired city pages, the old pillar pages (`/depression/`, `/adhd/`, `/ocd/`, `/schizophrenia/`, `/bipolar-disorder/`), 5 retired `/knowledge/` pages, the two merged articles (`/blog/panic-attack-treatment-kathmandu/` and `/knowledge/sleep-and-mental-health/`), and `/mental-health-screening/` to `/screening/` | **Yes** |
| `cloudflare-redirects.pending-approval.csv` | 3 redirects for merges that are still on hold (the depression, anxiety and "which doctor for sleep problems" knowledge pages) | **No. Not approved yet.** |

Each redirect appears twice in the file, with and without the trailing `/`, because Cloudflare's
documentation does not say whether it treats them as the same address. The extra lines are harmless.
The file has 132 lines for the 66 redirects.

**If you already uploaded the earlier 20-redirect file:** the new file contains all 20 of those plus the
new ones, so replace that list with this one (or create a new list from this file, point the rule at it,
and delete the old list). Do not keep both lists active with the same addresses.

## Step by step (about 5 minutes)

1. Sign in at **dash.cloudflare.com** and pick the **drkushalkharel.com.np** account/site.
2. Open **Bulk redirects** (in the left menu, or search for "Bulk redirects" at the top of the page).
   It is an account-level tool, so if you cannot find it, look under **Manage account**.
3. Under **Bulk Redirect Lists**, click **Create Bulk Redirect List**.
4. Give it a name such as `legacy-urls-2026` and a short description, then click **Next**.
5. Choose the option to **import a CSV file**, then drag `cloudflare-redirects.csv` onto the box (or click
   **browse** and choose it).
6. Cloudflare shows the redirects it read. Check that the count looks right (132 lines) and click **Next**.
7. Review once more, click **Next**, then **Continue to Redirect Rules**.
8. **This step is easy to miss:** a list does nothing until a rule turns it on. On the next screen:
   - **Rule name:** `Apply legacy URL redirects`
   - **Select the list** you just created.
   - Click **Save and Deploy**.

Cloudflare's free plan allows 10,000 bulk redirects, so 132 lines is well within the limit.

## Check that it worked

Wait a minute, then open each of these in a browser. They should land on the page shown, and the address
bar should change:

| Open this | You should end up on |
|---|---|
| `drkushalkharel.com.np/depression/` | `/conditions/major-depressive-disorder/` |
| `drkushalkharel.com.np/adhd/` | `/conditions/adhd/` |
| `drkushalkharel.com.np/mental-health-screening/` | `/screening/` |
| `drkushalkharel.com.np/cities/biratnagar/` | `/online-psychiatrist-nepal/` |
| `drkushalkharel.com.np/cities/kathmandu/` | `/psychiatry-clinic-kathmandu/` |
| `drkushalkharel.com.np/nepalese-abroad/dubai/` | `/nepalese-abroad/gulf/` |
| `drkushalkharel.com.np/nepalese-abroad/usa/` | `/nepalese-abroad/usa-canada/` |
| `drkushalkharel.com.np/blog/panic-attack-treatment-kathmandu/` | `/panic-attack-treatment-kathmandu/` |

If you (or I) use a terminal: `curl -I https://drkushalkharel.com.np/depression/` should show
`HTTP/2 301` and a `location:` line. Today it shows `HTTP/2 200`.

## If something goes wrong

Open **Bulk redirects**, find the rule `Apply legacy URL redirects`, and turn it off (or delete it). The
site immediately goes back to how it behaves today. Nothing on the website itself is changed by this.

## Order: Cloudflare first, then the website

The country-page, article and city merges are ready on the branch `seo/consolidation-merges` but are
**not on the live site yet**. Do it in this order:

1. **First** upload this CSV (steps above).
2. **Then** tell me, and I publish the website update.

Cloudflare redirects happen before the site is asked, so this way there is never a moment when an old
address returns "page not found". Even if the order slips, the old addresses still load a small "This page
has moved" page that forwards visitors to the right place (and is hidden from Google), so nothing breaks.

## Not needed any more

`public/_redirects` in the repository is a different, Cloudflare *Pages* mechanism. It has no effect
while the site is on GitHub Pages, so this CSV replaces it. I left it in place so it starts working if the
site is ever moved to Cloudflare Pages.
