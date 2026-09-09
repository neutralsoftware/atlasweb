import type { MetadataRoute } from "next";
import { getPosts } from "@/lib/news";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    return [
        {
            url: "https://atlasengine.org",
            changeFrequency: "weekly",
            priority: 1,
        },
        ...["/about", "/overview", "/download", "/releases/vela1"].map(
            (route) => ({
                url: `https://atlasengine.org${route}`,
                changeFrequency: "monthly" as const,
                priority: 0.8,
            }),
        ),
        {
            url: "https://atlasengine.org/news",
            changeFrequency: "weekly",
            priority: 0.8,
        },
        ...(await getPosts()).map((post) => ({
            url: `https://atlasengine.org/news/${post.slug}`,
            lastModified: post.date,
            changeFrequency: "monthly" as const,
            priority: 0.7,
        })),
    ];
}
