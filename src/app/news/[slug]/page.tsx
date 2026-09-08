import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import PageShell from "@/components/layout/PageShell";
import { getPosts, getPost, formatDate } from "@/lib/news";
import { renderArticle } from "@/lib/article";
import { container } from "@/components/ui/styles";

export async function generateStaticParams() {
    return (await getPosts()).map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const post = await getPost((await params).slug);
    if (!post) return {};
    return {
        title: `${post.title} — Atlas Engine`,
        description: post.description,
        alternates: { canonical: `/news/${post.slug}` },
        openGraph: {
            type: "article",
            title: post.title,
            description: post.description,
            publishedTime: post.date,
            authors: [post.author],
            images: [{ url: post.image, alt: post.imageAlt }],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.description,
            images: [post.image],
        },
    };
}

export default async function Article({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const post = await getPost((await params).slug);
    if (!post) notFound();
    const { content, headings } = await renderArticle(post.body, post.format);
    const posts = await getPosts();
    const index = posts.findIndex((item) => item.slug === post.slug);
    const next = posts[index + 1];
    const previous = posts[index - 1];
    return (
        <PageShell>
            <div className={`${container} pb-24`}>
                <div className="article-layout">
                    <article className="min-w-0">
                        <header>
                            <div className="mb-5 flex flex-wrap gap-3 text-xs text-[#72776f]">
                                <span className="text-[#2e8b7f]">
                                    {post.category}
                                </span>
                                <span aria-hidden="true">/</span>
                                <time dateTime={post.date}>
                                    {formatDate(post.date)}
                                </time>
                            </div>
                            <h1 className="text-[clamp(38px,4.7vw,64px)] font-medium leading-[1.08] tracking-[-.05em]">
                                {post.title}
                            </h1>
                            <p className="page-lede mt-7">{post.description}</p>
                            <p className="my-7 text-xs text-[#72776f]">
                                {post.author} <span className="mx-2">·</span>{" "}
                                {post.readingMinutes} min read
                            </p>
                            <div className="relative mb-12 aspect-[1.6] overflow-hidden rounded-xl bg-[#e9ede6]">
                                <Image
                                    src={post.image}
                                    alt={post.imageAlt}
                                    fill
                                    priority
                                    sizes="(max-width: 900px) 100vw, 800px"
                                    className="object-cover"
                                />
                            </div>
                        </header>
                        <div className="article-body">{content}</div>
                    </article>
                    <aside className="article-sidebar">
                        <nav aria-label="Breadcrumb" className="mb-10">
                            <ol className="flex flex-wrap items-center gap-2 text-xs text-[#72776f]">
                                <li>
                                    <Link href="/">Home</Link>
                                </li>
                                <li aria-hidden="true">
                                    <ChevronRight size={12} />
                                </li>
                                <li>
                                    <Link href="/news">News</Link>
                                </li>
                                <li aria-hidden="true">
                                    <ChevronRight size={12} />
                                </li>
                                <li
                                    aria-current="page"
                                    className="w-full pt-2 leading-relaxed text-[#242923]"
                                >
                                    {post.title}
                                </li>
                            </ol>
                        </nav>
                        {headings.length > 0 && (
                            <nav aria-label="On this page">
                                <p className="mb-5 text-xs font-semibold">
                                    In this story
                                </p>
                                <ul className="space-y-3 border-l border-[#d9ded4]">
                                    {headings.map((heading) => (
                                        <li
                                            key={heading.id}
                                            className={
                                                heading.level === 3
                                                    ? "pl-7"
                                                    : "pl-4"
                                            }
                                        >
                                            <a
                                                href={`#${heading.id}`}
                                                className="block text-xs leading-relaxed text-[#72776f] hover:text-[#2e8b7f]"
                                            >
                                                {heading.text}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        )}
                        <Link
                            href="/news"
                            className="mt-9 inline-flex items-center gap-2 text-xs text-[#2e8b7f]"
                        >
                            <ArrowLeft size={14} />
                            All stories
                        </Link>
                    </aside>
                </div>
                <nav
                    aria-label="More stories"
                    className="mt-20 grid grid-cols-2 gap-8 border-t border-[#d9ded4] pt-8 max-[600px]:grid-cols-1"
                >
                    {previous ? (
                        <Link
                            href={`/news/${previous.slug}`}
                            className="space-y-3"
                        >
                            <span className="flex items-center gap-2 text-xs text-[#72776f]">
                                <ArrowLeft size={14} />
                                Newer story
                            </span>
                            <span className="block text-xl tracking-tight">
                                {previous.title}
                            </span>
                        </Link>
                    ) : (
                        <div />
                    )}
                    {next && (
                        <Link
                            href={`/news/${next.slug}`}
                            className="space-y-3 text-right max-[600px]:text-left"
                        >
                            <span className="flex items-center justify-end gap-2 text-xs text-[#72776f] max-[600px]:justify-start">
                                Older story
                                <ArrowRight size={14} />
                            </span>
                            <span className="block text-xl tracking-tight">
                                {next.title}
                            </span>
                        </Link>
                    )}
                </nav>
            </div>
        </PageShell>
    );
}
