import { MetadataRoute } from "next";
import { cityGuides } from "./data/cities";
import { docArticles } from "./data/docArticles";

export const dynamic = "force-static";

const lastModified = new Date("2026-07-06");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: "https://drkushalkharel.com.np",
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },

    {
      url: "https://drkushalkharel.com.np/knowledge",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: "https://drkushalkharel.com.np/anxiety",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.95,
    },
  ];

  const articleRoutes: MetadataRoute.Sitemap = docArticles.map((article) => ({
    url: `https://drkushalkharel.com.np/knowledge/${article.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const cityRoutes: MetadataRoute.Sitemap = cityGuides.map((guide) => ({
    url: `https://drkushalkharel.com.np/cities/${guide.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  return [...staticRoutes, ...articleRoutes, ...cityRoutes];
}
