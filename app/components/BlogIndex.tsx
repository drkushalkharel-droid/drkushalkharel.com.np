"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import type { SupportingArticle } from "../data/supportingArticles";

type Group = { category: string; items: SupportingArticle[] };

function ArticleCard({ article }: { article: SupportingArticle }) {
  return (
    <Link
      href={`/blog/${article.slug}`}
      className="block h-full rounded-lg border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-sage-300 hover:shadow-md"
    >
      <span className="text-xs font-semibold uppercase tracking-[2px] text-sage-700">
        {article.category}
      </span>
      <h3 className="mt-3 text-xl font-bold leading-snug text-stone-950">{article.h1}</h3>
      <p className="mt-3 leading-7 text-stone-600">{article.description}</p>
      <p className="mt-5 font-semibold text-sage-700">Read article</p>
    </Link>
  );
}

export default function BlogIndex({ groups }: { groups: Group[] }) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return null;
    const all = groups.flatMap((group) => group.items);
    return all.filter((article) => {
      const haystack = [article.h1, article.description, ...article.keywords]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [query, groups]);

  const visibleGroups =
    activeCategory === "All" ? groups : groups.filter((group) => group.category === activeCategory);

  return (
    <div>
      <div className="sticky top-16 z-10 -mx-6 border-b border-stone-200 bg-stone-50/95 px-6 py-4 backdrop-blur lg:-mx-8 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative">
            <Search
              size={18}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-stone-400"
              aria-hidden="true"
            />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search articles — e.g. panic attacks, alcohol, marriage pressure"
              aria-label="Search articles"
              className="w-full rounded-lg border border-stone-300 bg-white py-3 pl-11 pr-4 text-stone-900 shadow-sm focus:border-sage-500 focus:outline-none focus:ring-2 focus:ring-sage-200"
            />
          </div>

          {!query && (
            <div className="mt-4 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setActiveCategory("All")}
                className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition ${
                  activeCategory === "All"
                    ? "border-sage-700 bg-sage-700 text-white"
                    : "border-stone-300 text-stone-700 hover:border-sage-300 hover:text-sage-800"
                }`}
              >
                All topics
              </button>
              {groups.map((group) => (
                <button
                  key={group.category}
                  type="button"
                  onClick={() => setActiveCategory(group.category)}
                  className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition ${
                    activeCategory === group.category
                      ? "border-sage-700 bg-sage-700 text-white"
                      : "border-stone-300 text-stone-700 hover:border-sage-300 hover:text-sage-800"
                  }`}
                >
                  {group.category} ({group.items.length})
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        {searchResults ? (
          <div>
            <h2 className="text-2xl font-bold text-stone-950">
              {searchResults.length === 0
                ? "No articles match your search"
                : `${searchResults.length} article${searchResults.length === 1 ? "" : "s"} found`}
            </h2>
            {searchResults.length === 0 && (
              <p className="mt-3 max-w-xl leading-7 text-stone-600">
                Try a different word, or{" "}
                <button type="button" onClick={() => setQuery("")} className="font-semibold text-sage-700 underline">
                  browse all topics
                </button>{" "}
                instead.
              </p>
            )}
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {searchResults.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-16">
            {visibleGroups.map((group) => (
              <section key={group.category} id={group.category.replace(/[^a-zA-Z]+/g, "-").toLowerCase()}>
                <div className="flex items-baseline justify-between gap-4">
                  <h2 className="text-3xl font-bold text-stone-950">{group.category}</h2>
                  <span className="text-sm font-semibold text-stone-500">
                    {group.items.length} article{group.items.length === 1 ? "" : "s"}
                  </span>
                </div>
                <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {group.items.map((article) => (
                    <ArticleCard key={article.slug} article={article} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
