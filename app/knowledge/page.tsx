import type { Metadata } from "next";
import Link from "next/link";
import {
  internalArticles,
  plannedTopics,
  publishedArticles,
  type ArticleLink,
} from "../data/articles";
import { docArticles } from "../data/docArticles";

export const metadata: Metadata = {
  title: "Mental Health Articles & Patient Guides",
  description:
    "Mental health articles and patient guides by Dr. Kushal Kharel on anxiety, depression, addiction, sleep, child psychiatry and evidence-based psychiatric care in Nepal.",
  keywords: [
    "Mental Health Articles Nepal",
    "Psychiatrist Articles Nepal",
    "Best Psychiatrist in Nepal Articles",
    "Top Psychiatrist in Kathmandu",
    "Nepali Mental Health Education",
    "Anxiety Depression Addiction Nepal",
  ],
  alternates: {
    canonical: "/knowledge",
  },
  openGraph: {
    title: "Mental Health Articles & Patient Guides | Dr. Kushal Kharel",
    description:
      "Trusted psychiatric education for patients and families in Nepal.",
    url: "https://drkushalkharel.com.np/knowledge",
    siteName: "Dr. Kushal Kharel",
    images: [{ url: "/images/doctor.png", width: 1200, height: 630 }],
    type: "website",
  },
};

function ArticleCard({ article }: { article: ArticleLink }) {
  const className =
    "block h-full rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-md";

  const content = (
    <>
      <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[2px] text-blue-700">
        <span>{article.category}</span>
        <span aria-hidden="true">/</span>
        <span>{article.language}</span>
      </div>
      <h3 className="mt-4 text-2xl font-bold leading-snug text-slate-950">
        {article.title}
      </h3>
      <p className="mt-3 leading-7 text-slate-600">{article.description}</p>
      <p className="mt-5 font-semibold text-blue-700">
        {article.isExternal ? "Read published article" : "Read guide"}
      </p>
    </>
  );

  if (article.isExternal) {
    return (
      <a href={article.href} target="_blank" rel="noopener noreferrer" className={className}>
        {content}
      </a>
    );
  }

  return (
    <Link href={article.href} className={className}>
      {content}
    </Link>
  );
}

export default function KnowledgePage() {
  const docArticleLinks: ArticleLink[] = docArticles.map((article) => ({
    title: article.title,
    description: article.description,
    href: `/knowledge/${article.slug}`,
    category: article.category,
    language: article.language,
  }));
  const featuredArticles = [...internalArticles, ...publishedArticles];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-28 lg:px-8 lg:pt-32">
          <p className="text-sm font-semibold uppercase tracking-[3px] text-blue-700">
            Mental Health Knowledge
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Articles and patient guides for better mental health decisions
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Practical, evidence-based mental health education from Dr. Kushal
            Kharel for patients, families and caregivers in Nepal.
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

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-bold">Featured guides</h2>
            <p className="mt-3 max-w-2xl leading-7 text-slate-600">
              Start with the most useful patient education pages. These guides
              are designed to answer common search questions and guide patients
              toward appropriate care.
            </p>
          </div>
          <Link href="/anxiety" className="font-semibold text-blue-700">
            View anxiety guide
          </Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredArticles.map((article) => (
            <ArticleCard key={article.href} article={article} />
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold">Nepali patient articles</h2>
            <p className="mt-3 max-w-3xl leading-7 text-slate-600">
              These patient education articles were integrated from Dr. Kharel&apos;s
              existing Nepali medical writing and organized into searchable
              condition-specific pages.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {docArticleLinks.map((article) => (
              <ArticleCard key={article.href} article={article} />
            ))}
          </div>
        </div>
      </section>

      <section id="request-article" className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl font-bold">More topics to publish next</h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-600">
            A steady library of condition-specific articles helps people find
            the site through Google and gives patients clear next steps before
            they book.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {plannedTopics.map((article) => (
              <ArticleCard key={article.title} article={article} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
