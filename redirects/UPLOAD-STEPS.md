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
| `cloudflare-redirects.csv` | 20 redirects: the old pillar pages (`/depression/`, `/adhd/`, `/ocd/`, `/schizophrenia/`, `/bipolar-disorder/`), the 9 retired city pages, 5 retired `/knowledge/` pages, and `/mental-health-screening/` to `/screening/` | **Yes, now** |
| `cloudflare-redirects.pending-approval.csv` | 49 redirects for the country-page consolidation (Phase 3), article merges (Phase 4) and the three thin city pages (Phase 7) | **No. Wait for your approval and the matching site update** |

Each redirect appears twice in the file, with and without the trailing `/`, because Cloudflare's
documentation does not say whether it treats them as the same address. The extra lines are harmless.

When you approve Phases 3 and 4, I will produce one combined `cloudflare-redirects.csv`
(`node scripts/generate-cloudflare-redirects.mjs --include-pending`) and you will upload that instead.

## Step by step (about 5 minutes)

1. Sign in at **dash.cloudflare.com** and pick the **drkushalkharel.com.np** account/site.
2. Open **Bulk redirects** (in the left menu, or search for "Bulk redirects" at the top of the page).
   It is an account-level tool, so if you cannot find it, look under **Manage account**.
3. Under **Bulk Redirect Lists**, click **Create Bulk Redirect List**.
4. Give it a name such as `legacy-urls-2026` and a short description, then click **Next**.
5. Choose the option to **import a CSV file**, then drag `cloudflare-redirects.csv` onto the box (or click
   **browse** and choose it).
6. Cloudflare shows the redirects it read. Check that the count looks right (40 lines) and click **Next**.
7. Review once more, click **Next**, then **Continue to Redirect Rules**.
8. **This step is easy to miss:** a list does nothing until a rule turns it on. On the next screen:
   - **Rule name:** `Apply legacy URL redirects`
   - **Select the list** you just created.
   - Click **Save and Deploy**.

Cloudflare's free plan allows 10,000 bulk redirects, so 40 (or the 138 in the later combined file) is
well within the limit.

## Check that it worked

Wait a minute, then open each of these in a browser. They should land on the page shown, and the address
bar should change:

| Open this | You should end up on |
|---|---|
| `drkushalkharel.com.np/depression/` | `/conditions/major-depressive-disorder/` |
| `drkushalkharel.com.np/adhd/` | `/conditions/adhd/` |
| `drkushalkharel.com.np/mental-health-screening/` | `/screening/` |
| `drkushalkharel.com.np/cities/biratnagar/` | `/online-psychiatrist-nepal/` |

If you (or I) use a terminal: `curl -I https://drkushalkharel.com.np/depression/` should show
`HTTP/2 301` and a `location:` line. Today it shows `HTTP/2 200`.

## If something goes wrong

Open **Bulk redirects**, find the rule `Apply legacy URL redirects`, and turn it off (or delete it). The
site immediately goes back to how it behaves today. Nothing on the website itself is changed by this.

## When the country-page and article merges are approved (Phases 3 and 4)

Order matters. Cloudflare redirects happen before the site is asked, so:

1. **First** upload the combined CSV (a new list plus rule, or add to the existing list).
2. **Then** deploy the updated website.

That way there is never a moment when an old address returns "page not found". The pending file's
new regional pages (UK & Ireland, USA & Canada, Australia & New Zealand, South Asia) do not exist yet, so
**do not upload the pending file on its own**: it would send visitors to pages that are not there.

## Not needed any more

`public/_redirects` in the repository is a different, Cloudflare *Pages* mechanism. It has no effect
while the site is on GitHub Pages, so this CSV replaces it. I left it in place so it starts working if the
site is ever moved to Cloudflare Pages.
