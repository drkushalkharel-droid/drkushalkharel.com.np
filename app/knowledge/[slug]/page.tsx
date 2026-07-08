import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { docArticles } from "../../data/docArticles";

const siteUrl = "https://drkushalkharel.com.np";

function getArticle(slug: string) {
  return docArticles.find((article) => article.slug === slug);
}

export function generateStaticParams() {
  return docArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    return {};
  }

  const title = `${article.title} | Nepali Patient Guide`;

  return {
    title,
    description: article.description,
    alternates: {
      canonical: `/knowledge/${article.slug}`,
    },
    keywords: [
      article.title,
      `${article.title} Nepal`,
      `${article.title} treatment Nepal`,
      `${article.title} doctor Nepal`,
      `best psychiatrist in Nepal for ${article.title}`,
      `top psychiatrist in Kathmandu for ${article.title}`,
      "Nepali mental health article",
      "Dr Kushal Kharel",
      "Psychiatrist Kathmandu",
    ],
    openGraph: {
      title,
      description: article.description,
      url: `${siteUrl}/knowledge/${article.slug}`,
      siteName: "Dr. Kushal Kharel",
      images: [
        {
          url: "/images/doctor.png",
          width: 1200,
          height: 630,
          alt: "Dr. Kushal Kharel - Consultant Psychiatrist",
        },
      ],
      locale: "ne_NP",
      type: "article",
    },
  };
}

export default async function KnowledgeArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: article.title,
    description: article.description,
    url: `${siteUrl}/knowledge/${article.slug}`,
    inLanguage: "ne",
    about: {
      "@type": "MedicalCondition",
      name: article.title,
    },
    medicalAudience: ["Patient", "Caregiver"],
    reviewedBy: {
      "@type": "Physician",
      name: "Dr. Kushal Kharel",
      medicalSpecialty: "Psychiatry",
      telephone: "+9779861800547",
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Knowledge", item: `${siteUrl}/knowledge` },
      { "@type": "ListItem", position: 3, name: article.title, item: `${siteUrl}/knowledge/${article.slug}` },
    ],
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 pb-12 pt-28 lg:px-8 lg:pt-32">
          <Link href="/knowledge" className="font-semibold text-blue-700">
            Back to articles
          </Link>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[3px] text-blue-700">
            Nepali Patient Guide
          </p>
          <h1 className="mt-5 text-4xl font-bold leading-tight text-slate-950 md:text-6xl">
            {article.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            {article.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="tel:+9779861800547"
              className="rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
            >
              Book Appointment
            </a>
            <a
              href="https://wa.me/9779861800547"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-green-600 px-6 py-3 font-semibold text-green-700 transition hover:bg-green-600 hover:text-white"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <article className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[280px_1fr] lg:px-8">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="font-bold text-slate-950">विषयसूची</h2>
            <nav className="mt-4 space-y-2">
              {article.sections.map((section) => (
                <a
                  key={section.heading}
                  href={`#${section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                  className="block rounded-md px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-blue-50 hover:text-blue-700"
                >
                  {section.heading}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        <div className="space-y-6">
          <div className="rounded-lg border border-amber-200 bg-amber-50 p-5 leading-7 text-amber-950">
            यो जानकारी बिरामी र परिवारलाई रोगबारे बुझ्न सहयोग गर्ने उद्देश्यले
            तयार गरिएको हो। व्यक्तिगत निदान वा औषधि निर्णयका लागि
            मनोचिकित्सकसँग प्रत्यक्ष परामर्श गर्नुहोस्।
          </div>

          {article.sections.map((section) => (
            <section
              key={section.heading}
              id={section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
              className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <h2 className="text-3xl font-bold text-blue-950">
                {section.heading}
              </h2>
              <div className="mt-5 space-y-4 text-lg leading-9 text-slate-700">
                {section.body.split("\n").map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}

          <section className="rounded-lg bg-blue-950 p-8 text-white">
            <h2 className="text-3xl font-bold">Need professional help?</h2>
            <p className="mt-4 max-w-3xl leading-8 text-blue-100">
              If symptoms are affecting sleep, study, work, relationships,
              safety or daily functioning, a psychiatric assessment can help
              clarify the diagnosis and treatment plan.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="tel:+9779861800547"
                className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-950"
              >
                +977 9861800547
              </a>
              <Link
                href="/knowledge"
                className="rounded-lg border border-white/50 px-6 py-3 font-semibold text-white"
              >
                More articles
              </Link>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
