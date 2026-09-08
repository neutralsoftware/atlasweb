import type { MetadataRoute } from "next";
import { getPosts } from "@/lib/news";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    return [
        ...["", "/about", "/overview", "/download", "/vela1", "/news"].map(
            (route) => ({ url: `https://atlasengine.org${route}` }),
        ),
        ...(await getPosts()).map((post) => ({
            url: `https://atlasengine.org/news/${post.slug}`,
            lastModified: post.date,
        })),
    ];
}
