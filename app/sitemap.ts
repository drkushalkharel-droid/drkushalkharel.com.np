import { MetadataRoute } from "next";
import { abroadGuides } from "./data/abroad";
import { cityGuides } from "./data/cities";
import { conditions } from "./data/conditions";
import { docArticles } from "./data/docArticles";
import { screeningTools } from "./data/screening";
import { resources } from "./data/resources";
import { pillars } from "./data/pillars";
import { supportingArticles } from "./data/supportingArticles";
import { medications } from "./data/medications";

export const dynamic = "force-static";

const siteUrl = "https://drkushalkharel.com.np";
// Keep the sitemap current whenever content changes so crawlers can prioritize
// newly published patient resources and guides.
const lastModified = new Date("2026-07-18");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/appointment`,
      lastModified: new Date("2026-08-03"),
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${siteUrl}/knowledge`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${siteUrl}/best-psychiatrist-nepal`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.95,
    },

    {
      url: `${siteUrl}/online-psychiatrist-nepal`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    { url: `${siteUrl}/psychiatrist-for-nepalis-abroad`, lastModified: new Date("2026-07-29"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/psychiatric-care-for-family-in-nepal`, lastModified: new Date("2026-08-19"), changeFrequency: "monthly", priority: 0.85 },
    { url: `${siteUrl}/patient-testimonials`, lastModified: new Date("2026-08-19"), changeFrequency: "monthly", priority: 0.8 },

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

    { url: `${siteUrl}/couple-relationship-counseling`, lastModified: new Date("2026-08-05"), changeFrequency: "monthly", priority: 0.85 },
    { url: `${siteUrl}/child-adolescent-psychiatry`, lastModified: new Date("2026-08-05"), changeFrequency: "monthly", priority: 0.85 },
    { url: `${siteUrl}/iq-psychological-testing`, lastModified: new Date("2026-08-05"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/medical-fitness-certificate`, lastModified: new Date("2026-08-05"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/female-counselor-kathmandu`, lastModified: new Date("2026-08-05"), changeFrequency: "monthly", priority: 0.75 },
    { url: `${siteUrl}/cbt-therapist-kathmandu`, lastModified: new Date("2026-08-05"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/erp-therapy-ocd`, lastModified: new Date("2026-08-05"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/addiction-treatment-kathmandu`, lastModified: new Date("2026-08-07"), changeFrequency: "monthly", priority: 0.85 },
    { url: `${siteUrl}/psychology-internship-nepal`, lastModified: new Date("2026-08-06"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteUrl}/psychiatrist-fee-nepal`, lastModified: new Date("2026-08-07"), changeFrequency: "monthly", priority: 0.85 },
    { url: `${siteUrl}/psychiatric-hospital-vs-clinic-kathmandu`, lastModified: new Date("2026-08-07"), changeFrequency: "monthly", priority: 0.75 },
    { url: `${siteUrl}/relationship-counselling-kathmandu`, lastModified: new Date("2026-08-07"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/stress-anger-management-kathmandu`, lastModified: new Date("2026-08-07"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/how-to-control-your-mind-nepal`, lastModified: new Date("2026-08-07"), changeFrequency: "monthly", priority: 0.75 },
    { url: `${siteUrl}/psychiatry-clinic-kathmandu`, lastModified: new Date("2026-08-07"), changeFrequency: "monthly", priority: 0.85 },
    { url: `${siteUrl}/medications`, lastModified: new Date("2026-08-07"), changeFrequency: "monthly", priority: 0.75 },
    { url: `${siteUrl}/about`, lastModified: new Date("2026-08-07"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/medication-review-second-opinion-nepal`, lastModified: new Date("2026-08-14"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/psychiatric-medication-side-effects`, lastModified: new Date("2026-08-14"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/returning-to-nepal-after-abroad`, lastModified: new Date("2026-08-14"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/corporate-mental-health-partner-nepal`, lastModified: new Date("2026-08-14"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/depression-treatment-kathmandu`, lastModified: new Date("2026-08-21"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/panic-attack-treatment-kathmandu`, lastModified: new Date("2026-08-21"), changeFrequency: "monthly", priority: 0.85 },
    { url: `${siteUrl}/adhd-treatment-kathmandu`, lastModified: new Date("2026-08-21"), changeFrequency: "monthly", priority: 0.85 },
    { url: `${siteUrl}/bipolar-disorder-treatment-kathmandu`, lastModified: new Date("2026-08-21"), changeFrequency: "monthly", priority: 0.85 },
    { url: `${siteUrl}/schizophrenia-treatment-kathmandu`, lastModified: new Date("2026-08-21"), changeFrequency: "monthly", priority: 0.85 },
    { url: `${siteUrl}/psychosis-treatment-kathmandu`, lastModified: new Date("2026-08-21"), changeFrequency: "monthly", priority: 0.85 },

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
    { url: `${siteUrl}/community-mental-health-programs`, lastModified: new Date("2026-07-29"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/home-visit-psychiatrist-nepal`, lastModified: new Date("2026-07-29"), changeFrequency: "monthly", priority: 0.85 },

    {
      url: `${siteUrl}/blog`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const articleRoutes: MetadataRoute.Sitemap = docArticles.map((article) => ({
    url: `${siteUrl}/knowledge/${article.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const pillarRoutes: MetadataRoute.Sitemap = pillars
    .filter((pillar) => pillar.slug !== "anxiety")
    .map((pillar) => ({
      url: `${siteUrl}/${pillar.slug}`,
      lastModified: new Date("2026-07-29"),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    }));

  const cityRoutes: MetadataRoute.Sitemap = cityGuides.filter((guide) => guide.clinicLocation || guide.published).map((guide) => ({
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

  const blogRoutes: MetadataRoute.Sitemap = supportingArticles.map((article) => ({
    url: `${siteUrl}/blog/${article.slug}`,
    lastModified: new Date("2026-08-05"),
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const medicationRoutes: MetadataRoute.Sitemap = medications.map((med) => ({
    url: `${siteUrl}/medications/${med.slug}`,
    lastModified: new Date("2026-08-07"),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...pillarRoutes,
    ...articleRoutes,
    ...cityRoutes,
    ...abroadRoutes,
    ...conditionRoutes,
    ...screeningRoutes,
    ...resourceRoutes,
    ...blogRoutes,
    ...medicationRoutes,
  ];
}
