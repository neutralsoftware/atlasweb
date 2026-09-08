import { evaluate } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import { visit } from "unist-util-visit";
import type { Root, Element } from "hast";
import type { ComponentProps, ReactNode } from "react";
import Image from "next/image";
import CodeBlock from "@/components/content/CodeBlock";
import Mermaid from "@/components/content/Mermaid";
import Chart from "@/components/content/Chart";

export type Heading = { id: string; text: string; level: number };

function textOf(node: Element) {
    let text = "";
    visit(node, "text", (child) => { text += child.value; });
    return text;
}

const components = {
    pre: CodeBlock,
    Mermaid,
    Chart,
    Callout: ({ children, title = "Note" }: { children: ReactNode; title?: string }) => <aside className="article-callout"><strong>{title}</strong><div>{children}</div></aside>,
    img: ({ src, alt, ...props }: ComponentProps<"img">) => typeof src === "string" ? <Image src={src} alt={alt ?? ""} width={1200} height={675} sizes="(max-width: 900px) 100vw, 800px" className="article-image" unoptimized={src.endsWith(".svg")} title={props.title} /> : null,
    table: ({ children }: { children?: ReactNode }) => <div className="article-table" tabIndex={0} role="region" aria-label="Scrollable table"><table>{children}</table></div>,
    a: ({ children, href, ...props }: ComponentProps<"a">) => <a {...props} href={href} rel={href?.startsWith("https://") ? "noopener noreferrer" : undefined}>{children}</a>,
};

export async function renderArticle(body: string, format: "md" | "mdx") {
    const headings: Heading[] = [];
    function articleElements() {
        return (tree: Root) => {
            visit(tree, "element", (node) => {
                if (/^h[23]$/.test(node.tagName)) headings.push({ id: String(node.properties.id), text: textOf(node), level: Number(node.tagName[1]) });
                if (node.tagName === "pre") {
                    const code = node.children[0];
                    if (code?.type === "element" && Array.isArray(code.properties.className) && code.properties.className.includes("language-mermaid")) {
                        node.tagName = "Mermaid";
                        node.properties = { chart: textOf(code) };
                        node.children = [];
                    }
                }
            });
        };
    }
    const { default: Content } = await evaluate(body, {
        ...runtime, format,
        remarkPlugins: [remarkGfm, remarkMath],
        rehypePlugins: [rehypeSlug, articleElements, rehypeKatex, [rehypePrettyCode, { theme: "github-dark", keepBackground: true }]],
    });
    return { content: <Content components={components}/>, headings };
}
