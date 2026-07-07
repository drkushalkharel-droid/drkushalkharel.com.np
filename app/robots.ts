import { MetadataRoute } from "next";

export const dynamic = "force-static";

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
    ],
    sitemap: "https://drkushalkharel.com.np/sitemap.xml",
    host: "https://drkushalkharel.com.np",
  };
}
