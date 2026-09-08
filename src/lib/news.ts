import fs from "node:fs/promises";
import path from "node:path";
import { cache } from "react";
import matter from "gray-matter";

export type NewsPost = {
    slug: string;
    title: string;
    description: string;
    date: string;
    image: string;
    imageAlt: string;
    author: string;
    category: string;
    draft: boolean;
    readingMinutes: number;
    body: string;
    format: "md" | "mdx";
};

const directory = path.join(process.cwd(), "content/news");

export const getPosts = cache(async (): Promise<NewsPost[]> => {
    const files = (await fs.readdir(directory)).filter((file) =>
        /\.mdx?$/.test(file),
    );
    const posts = await Promise.all(
        files.map(async (file): Promise<NewsPost> => {
            const { data, content } = matter(
                await fs.readFile(path.join(directory, file), "utf8"),
            );
            const slug = file.replace(/\.mdx?$/, "");
            if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug))
                throw new Error(`Invalid news filename: ${file}`);
            for (const field of [
                "title",
                "description",
                "date",
                "image",
                "imageAlt",
                "author",
                "category",
            ] as const) {
                if (typeof data[field] !== "string" || !data[field].trim())
                    throw new Error(
                        `${file}: ${field} must be a non-empty string`,
                    );
            }
            if (
                !/^\d{4}-\d{2}-\d{2}$/.test(data.date) ||
                Number.isNaN(Date.parse(data.date)) ||
                new Date(data.date).toISOString().slice(0, 10) !== data.date
            )
                throw new Error(
                    `${file}: date must be a quoted YYYY-MM-DD date`,
                );
            if (!data.image.startsWith("/images/") || data.image.includes(".."))
                throw new Error(`${file}: image must be in /images/`);
            await fs.access(path.join(process.cwd(), "public", data.image));
            if (data.draft !== undefined && typeof data.draft !== "boolean")
                throw new Error(`${file}: draft must be true or false`);
            return {
                slug,
                title: data.title,
                description: data.description,
                date: data.date,
                image: data.image,
                imageAlt: data.imageAlt,
                author: data.author,
                category: data.category,
                draft: data.draft === true,
                body: content,
                format: file.endsWith(".mdx") ? "mdx" : "md",
                readingMinutes: Math.max(
                    1,
                    Math.ceil(content.split(/\s+/).length / 220),
                ),
            };
        }),
    );
    const slugs = new Set<string>();
    for (const post of posts) {
        if (slugs.has(post.slug))
            throw new Error(`Duplicate news slug: ${post.slug}`);
        slugs.add(post.slug);
    }
    return posts
        .filter((post) => !post.draft)
        .sort(
            (a, b) =>
                b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug),
        );
});

export const getPost = cache(async (slug: string) =>
    (await getPosts()).find((post) => post.slug === slug),
);

export function formatDate(date: string) {
    return new Intl.DateTimeFormat("en", {
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "UTC",
    }).format(new Date(date));
}
