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

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/_next/", "/404/", "/_not-found/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/_next/", "/404/", "/_not-found/"],
      },
      {
        userAgent: aiCrawlers,
        allow: ["/", "/llms.txt"],
        disallow: ["/_next/", "/404/", "/_not-found/"],
      },
    ],
    sitemap: "https://drkushalkharel.com.np/sitemap.xml",
    host: "https://drkushalkharel.com.np",
  };
}
