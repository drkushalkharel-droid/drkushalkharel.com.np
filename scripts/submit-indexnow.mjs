// Submits every URL in the live sitemap to the IndexNow API so participating
// search engines (Bing, Yandex, and others) can crawl changed pages promptly
// instead of waiting for their next scheduled visit. Run after a successful
// deploy, once the new sitemap is actually live.
//
// Requires the IndexNow key file to already exist at the site root (see
// public/6622976d6f6249e5a74fc579662e223f.txt) — this script does not create
// or rotate that key, it only submits URLs using it.
//
// Usage: node scripts/submit-indexnow.mjs [siteUrl]

const siteUrl = (process.argv[2] ?? "https://drkushalkharel.com.np").replace(/\/$/, "");
const key = "6622976d6f6249e5a74fc579662e223f";
const keyLocation = `${siteUrl}/${key}.txt`;
const host = new URL(siteUrl).host;

async function main() {
  const sitemapRes = await fetch(`${siteUrl}/sitemap.xml`);
  if (!sitemapRes.ok) {
    throw new Error(`Failed to fetch sitemap.xml: HTTP ${sitemapRes.status}`);
  }
  const sitemapXml = await sitemapRes.text();
  const urlList = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

  if (urlList.length === 0) {
    throw new Error("No <loc> entries found in sitemap.xml — refusing to submit an empty list.");
  }

  console.log(`Submitting ${urlList.length} URLs from ${siteUrl}/sitemap.xml to IndexNow...`);

  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host, key, keyLocation, urlList }),
  });

  // IndexNow returns 200 or 202 on success; treat anything else as a
  // (non-fatal) warning so a transient IndexNow outage never fails a deploy.
  if (res.ok || res.status === 202) {
    console.log(`IndexNow submission accepted (HTTP ${res.status}).`);
  } else {
    console.warn(`IndexNow submission returned HTTP ${res.status}: ${await res.text()}`);
  }
}

main().catch((err) => {
  console.warn(`IndexNow submission failed (non-fatal): ${err.message}`);
});
