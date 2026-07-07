import { MetadataRoute } from "next";
import { abroadGuides } from "./data/abroad";
import { cityGuides } from "./data/cities";
import { docArticles } from "./data/docArticles";
import { siteUrl } from "./lib/seo";

export const dynamic = "force-static";

const lastModified = new Date("2026-07-07");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },

    {
      url: `${siteUrl}/knowledge`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${siteUrl}/anxiety`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.95,
    },

    {
      url: `${siteUrl}/screening`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  const articleRoutes: MetadataRoute.Sitemap = docArticles.map((article) => ({
    url: `${siteUrl}/knowledge/${article.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const cityRoutes: MetadataRoute.Sitemap = cityGuides.map((guide) => ({
    url: `${siteUrl}/cities/${guide.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: guide.slug === "kathmandu" ? 0.9 : 0.8,
  }));

  const abroadRoutes: MetadataRoute.Sitemap = abroadGuides.map((guide) => ({
    url: `${siteUrl}/nepalese-abroad/${guide.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...staticRoutes, ...articleRoutes, ...cityRoutes, ...abroadRoutes];
}
