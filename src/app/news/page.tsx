import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import NewsGrid from "@/components/content/NewsGrid";
import { getPosts, formatDate } from "@/lib/news";
import { container } from "@/components/ui/styles";

export const metadata: Metadata = { title: "Newsroom — Atlas Engine", description: "Release notes, development stories and news from Atlas Engine and Neutral Software.", alternates: { types: { "application/rss+xml": "/feed.xml" } } };
export default async function News() {
    const posts = (await getPosts()).map(({ body, format, draft, ...post }) => {
        void body; void format; void draft;
        return { ...post, displayDate: formatDate(post.date) };
    });
    return <PageShell><div className={`${container} pb-28 max-[760px]:pb-16`}><header className="mb-16 flex items-end justify-between gap-8 max-[760px]:flex-col max-[760px]:items-start"><div><h1 className="page-title">The newsroom.</h1><p className="page-lede mt-7 max-w-xl">New releases. Work in progress.<br/>Stories from the world of Atlas.</p></div><a className="text-sm text-[#2e8b7f] underline underline-offset-4" href="/feed.xml">Follow via RSS</a></header><NewsGrid posts={posts}/></div></PageShell>;
}
