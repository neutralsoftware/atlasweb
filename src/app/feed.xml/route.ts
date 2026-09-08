import { getPosts } from "@/lib/news";

export const dynamic = "force-static";
const escape = (text: string) =>
    text.replace(
        /[<>&"']/g,
        (char) =>
            ({
                "<": "&lt;",
                ">": "&gt;",
                "&": "&amp;",
                '"': "&quot;",
                "'": "&apos;",
            })[char]!,
    );
export async function GET() {
    const posts = await getPosts();
    const items = posts
        .map(
            (post) =>
                `<item><title>${escape(post.title)}</title><link>https://atlasengine.org/news/${post.slug}</link><guid>https://atlasengine.org/news/${post.slug}</guid><pubDate>${new Date(post.date).toUTCString()}</pubDate><description>${escape(post.description)}</description></item>`,
        )
        .join("");
    return new Response(
        `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Atlas Engine News</title><link>https://atlasengine.org/news</link><description>Stories from the world of Atlas.</description><language>en</language>${items}</channel></rss>`,
        { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } },
    );
}
