"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Search } from "lucide-react";
import type { NewsPost } from "@/lib/news";

type CardPost = Omit<NewsPost, "body" | "format" | "draft"> & { displayDate: string };

export default function NewsGrid({ posts }: { posts: CardPost[] }) {
    const [query, setQuery] = useState("");
    const [category, setCategory] = useState("All");
    const categories = ["All", ...new Set(posts.map((post) => post.category))];
    const filtered = useMemo(() => posts.filter((post) => (category === "All" || post.category === category) && `${post.title} ${post.description}`.toLowerCase().includes(query.trim().toLowerCase())), [posts, query, category]);
    return <>
        <div className="mb-12 flex flex-wrap items-center justify-between gap-6 border-b border-[#d9ded4] pb-6"><div className="flex flex-wrap gap-2" role="group" aria-label="Filter news by category">{categories.map((item) => <button type="button" key={item} aria-pressed={category === item} onClick={() => setCategory(item)} className={`rounded-full px-4 py-2 text-sm transition-colors ${category === item ? "bg-[#242923] text-white" : "text-[#72776f] hover:bg-[#e9ede6]"}`}>{item}</button>)}</div><label className="flex items-center gap-3 border-b border-[#9ea89a] py-2"><Search size={16} className="text-[#72776f]"/><span className="sr-only">Search news</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search stories" className="w-48 bg-transparent text-sm outline-none"/></label></div>
        <p className="sr-only" role="status">{filtered.length} {filtered.length === 1 ? "story" : "stories"}</p>
        {filtered.length ? <div className="grid grid-cols-3 gap-x-7 gap-y-14 max-[1000px]:grid-cols-2 max-[600px]:grid-cols-1">{filtered.map((post,index) => <article key={post.slug}><Link href={`/news/${post.slug}`} className="group block"><div className="relative aspect-[1.5] overflow-hidden rounded-xl bg-[#e9ede6]"><Image src={post.image} alt={post.imageAlt} fill priority={index < 3} sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 400px" className="object-cover transition-transform duration-500 group-hover:scale-[1.035]"/><span className="absolute bottom-4 right-4 rounded-full bg-[#faf8f5] p-2 text-[#242923]"><ArrowUpRight size={18}/></span></div><div className="mb-3 mt-5 flex items-center gap-3 text-[11px] text-[#72776f]"><span className="text-[#2e8b7f]">{post.category}</span><span aria-hidden="true">/</span><time dateTime={post.date}>{post.displayDate}</time></div><h2 className="text-[25px] leading-[1.2] tracking-[-.035em] transition-colors group-hover:text-[#2e8b7f]">{post.title}</h2><p className="mt-3 text-sm leading-7 text-[#72776f]">{post.description}</p></Link></article>)}</div> : <div className="py-20 text-center"><h2 className="text-2xl">No stories found.</h2><p className="my-4 text-[#72776f]">Try a different search or explore all stories.</p><button className="text-[#2e8b7f] underline underline-offset-4" onClick={() => { setQuery(""); setCategory("All"); }}>Clear filters</button></div>}
    </>;
}
