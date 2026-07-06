import { MetadataRoute } from "next";
import { docArticles } from "./data/docArticles";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: "https://drkushalkharel.com.np",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },

    {
      url: "https://drkushalkharel.com.np/knowledge",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: "https://drkushalkharel.com.np/anxiety",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.95,
    },
  ];

  const articleRoutes: MetadataRoute.Sitemap = docArticles.map((article) => ({
    url: `https://drkushalkharel.com.np/knowledge/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...articleRoutes];
}
