import { MetadataRoute } from "next";

export const dynamic = "force-static";

const aiCrawlers = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "Bingbot",
  "DuckAssistBot",
  "CCBot",
];

// /_next/ must stay crawlable: it holds the CSS and JavaScript Google needs to render pages.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/404/", "/_not-found/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/404/", "/_not-found/"],
      },
      {
        userAgent: aiCrawlers,
        allow: ["/", "/llms.txt"],
        disallow: ["/404/", "/_not-found/"],
      },
    ],
    sitemap: "https://drkushalkharel.com.np/sitemap.xml",
  };
}
