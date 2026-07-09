import { MetadataRoute } from "next";
import { abroadGuides } from "./data/abroad";
import { cityGuides } from "./data/cities";
import { conditions } from "./data/conditions";
import { docArticles } from "./data/docArticles";
import { screeningTools } from "./data/screening";
import { resources } from "./data/resources";

export const dynamic = "force-static";

const siteUrl = "https://drkushalkharel.com.np";
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
      alternates: {
        languages: {
          en: `${siteUrl}/anxiety`,
          ne: `${siteUrl}/anxiety/np`,
        },
      },
    },

    {
      url: `${siteUrl}/anxiety/np`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          en: `${siteUrl}/anxiety`,
          ne: `${siteUrl}/anxiety/np`,
        },
      },
    },

    {
      url: `${siteUrl}/screening`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${siteUrl}/conditions`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${siteUrl}/privacy-policy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },

    {
      url: `${siteUrl}/medical-disclaimer`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },

    {
      url: `${siteUrl}/nepalese-abroad`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },

    {
      url: `${siteUrl}/expatriates-in-nepal`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${siteUrl}/english-speaking-psychiatrist`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${siteUrl}/tourists-in-nepal`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${siteUrl}/counselling-in-nepal`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },

    {
      url: `${siteUrl}/resources`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
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

  const conditionRoutes: MetadataRoute.Sitemap = conditions.map((condition) => ({
    url: `${siteUrl}/conditions/${condition.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const screeningRoutes: MetadataRoute.Sitemap = screeningTools.map((tool) => ({
    url: `${siteUrl}/screening/${tool.id}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const resourceRoutes: MetadataRoute.Sitemap = resources.map((resource) => ({
    url: `${siteUrl}/resources/${resource.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [
    ...staticRoutes,
    ...articleRoutes,
    ...cityRoutes,
    ...abroadRoutes,
    ...conditionRoutes,
    ...screeningRoutes,
    ...resourceRoutes,
  ];
}
