import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PillarArticle from "../components/PillarArticle";
import { getPillar, pillars } from "../data/pillars";

export function generateStaticParams() { return pillars.filter((p) => p.slug !== "anxiety").map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const p = getPillar((await params).slug); if (!p) return {}; return { title: p.title, description: p.meta, alternates: { canonical: `/${p.slug}` }, keywords: [p.keyword, `${p.condition} Nepal`, "Psychiatrist Kathmandu", "Dr. Kushal Kharel"], openGraph: { title: p.title, description: p.meta, url: `https://drkushalkharel.com.np/${p.slug}`, type: "article", images: [{ url: "/images/doctor.png", width: 1200, height: 630 }] } }; }
export default async function Page({ params }: { params: Promise<{ slug: string }> }) { const p = getPillar((await params).slug); if (!p || p.slug === "anxiety") notFound(); return <PillarArticle pillar={p} />; }
