import type { Metadata } from "next";
import Link from "next/link";
import { getSupportingArticlesByCategory } from "../data/supportingArticles";
import BlogIndex from "../components/BlogIndex";

const siteUrl = "https://drkushalkharel.com.np";

export const metadata: Metadata = {
  title: "Mental Health Articles & Psychiatry Guides for Nepal",
  description:
    "Browse mental health articles by topic — anxiety, depression, addiction, relationships, sleep and more — from Dr. Kushal Kharel, Consultant Psychiatrist in Kathmandu, Nepal.",
  keywords: [
    "Mental Health Articles Nepal",
    "Psychiatry Blog Nepal",
    "Anxiety Depression Articles Kathmandu",
    "Dr Kushal Kharel Blog",
    "Psychiatrist Articles Nepal",
  ],
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Mental Health Articles & Psychiatry Guides for Nepal",
    description: "Browse mental health articles by topic, from Dr. Kushal Kharel, Consultant Psychiatrist in Kathmandu, Nepal.",
    url: `${siteUrl}/blog`,
    siteName: "Dr. Kushal Kharel",
    images: [{ url: "/images/doctor.png", width: 1200, height: 630 }],
    type: "website",
  },
};

export default function BlogPage() {
  const groups = getSupportingArticlesByCategory();
  const totalArticles = groups.reduce((sum, group) => sum + group.items.length, 0);

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 pb-14 pt-28 lg:px-8 lg:pt-32">
          <p className="text-sm font-semibold uppercase tracking-[3px] text-sage-700">Mental Health Articles</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Psychiatry guides for Nepal
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-600">
            {totalArticles} articles organised by topic, covering anxiety, depression, addiction, relationships, sleep, trauma and more, written by Dr. Kushal Kharel for patients and families in Nepal. Search below or browse by category.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="tel:+9779861800547" className="rounded-lg bg-sage-700 px-6 py-3 font-semibold text-white transition hover:bg-sage-800">
              Book Appointment
            </a>
            <Link href="/knowledge" className="rounded-lg border border-sage-700 px-6 py-3 font-semibold text-sage-700 transition hover:bg-sage-700 hover:text-white">
              Nepali Patient Guides
            </Link>
          </div>
        </div>
      </section>

      <div className="border-t border-stone-200">
        <BlogIndex groups={groups} />
      </div>
    </main>
  );
}
