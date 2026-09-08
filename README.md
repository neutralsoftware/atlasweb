# Atlas Engine website

The Atlas Engine site, built with Next.js and Bun. Pages follow the existing Atlas visual system; historical stories and imagery come from the previous website.

## Development

```sh
bun install --frozen-lockfile
bun run dev
```

Open http://localhost:3000. Check code with `bun run lint` and `bunx tsc --noEmit`. Production commands are `bun run build` and `bun run start`; run the production build before deploying.

## Writing news

Create `content/news/your-slug.md` or `.mdx`. The filename becomes `/news/your-slug`. No registry or page code needs to change. Use `.md` for Markdown and `.mdx` for JSX components. Copy `content/examples/post.mdx` for a complete authoring example.

```yaml
---
title: "Your story"
description: "A short summary for the image grid and social previews."
date: "2026-09-08"
image: "/images/your-cover.png"
imageAlt: "Describe what the cover shows"
author: "Neutral Software"
category: "Development"
draft: true
---
```

Put images in `public/images/`. All fields above except `draft` are required. Keep the date quoted. Set `draft: false` or remove it to publish; drafts are excluded from article routes, the grid, RSS and sitemap in every environment. To preview a draft locally, temporarily set it to false and restore it before committing. Future dates do not schedule publication.

The newsroom sorts by date, supports full-title/summary search and automatically creates category filters. Use `##` and `###` headings for the right-hand article navigation. The page supplies the title, date, author, cover, reading time, breadcrumbs and adjacent stories; do not repeat the title as an H1.

Supported in Markdown and MDX:

- Images, lists, quotes, links, horizontal rules, GFM tables and task lists.
- Fenced code with a language, syntax highlighting and a copy button. Optional `title="file.cpp"` and `{2-4}` highlight metadata.
- Inline `$math$` and display `$$math$$` rendered with KaTeX.
- Fenced `mermaid` diagrams, loaded only when used, with a readable source disclosure.

MDX also provides `<Callout title="Note">...</Callout>` and `<Chart title="Measurements" data={[{ label: "Scene A", value: 12 }]} unit=" ms" caption="Test conditions" />`. Charts accept non-negative numeric values and include a data table. Use native `<video controls ... />`, `<details>` or other semantic HTML for richer posts. Add reusable components to `src/lib/article.tsx` when needed. Keep MDX in this trusted repository: it executes as code on the server, so never use this renderer for untrusted submissions. Markdown mode does not execute JSX or raw HTML.

The example in `content/examples/` includes all features and is never published automatically. The historical archive is preserved under its existing slugs. `/feed.xml`, `/sitemap.xml` and `/robots.txt` are generated from the published collection.

## Routing and release

- `/vela1`: first beta release presentation.
- `/overview`: editor, rendering and architecture overview.
- `/about`: Neutral Software and the creator’s story.
- `/news`: searchable image grid and article pages.
- `/download`: installation guidance and the official GitHub releases.
- `/learn` and its old subpaths redirect to `https://docs.atlasengine.org`.

Deployment must include `content/news`; Next.js output tracing is configured to include it. Production URLs and social metadata use `https://atlasengine.org`. Download links use the official releases list so beta assets remain discoverable without a dependency on the GitHub API.

Use Jujutsu for history: `jj commit -m "Describe the change"`, then `jj bookmark set main -r @-`. Push only when you intend to update the remote with `jj git push --bookmark main`. Local commits do not publish the website.
