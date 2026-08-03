import Link from "next/link";
import { supportingArticles } from "../data/supportingArticles";

export default function BlogPage() { return <main className="min-h-screen bg-slate-50 px-6 pb-16 pt-28"><div className="mx-auto max-w-6xl"><p className="text-sm font-semibold uppercase tracking-[3px] text-blue-700">Mental health articles</p><h1 className="mt-4 text-4xl font-bold">Psychiatry guides for Nepal</h1><div className="mt-8 grid gap-5 md:grid-cols-2">{supportingArticles.map(a=><Link key={a.slug} href={`/blog/${a.slug}`} className="rounded-lg bg-white p-6 shadow-sm"><h2 className="text-xl font-bold">{a.h1}</h2><p className="mt-3 leading-7 text-slate-600">{a.description}</p></Link>)}</div></div></main>; }
