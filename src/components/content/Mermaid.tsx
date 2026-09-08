"use client";

import { useEffect, useId, useRef, useState } from "react";

export default function Mermaid({ chart }: { chart: string }) {
    const id = useId().replace(/[^a-zA-Z0-9]/g, "");
    const target = useRef<HTMLDivElement>(null);
    const [error, setError] = useState(false);
    useEffect(() => {
        let cancelled = false;
        async function render() {
            try {
                const { default: mermaid } = await import("mermaid");
                mermaid.initialize({
                    startOnLoad: false,
                    securityLevel: "strict",
                    theme: "base",
                    themeVariables: {
                        primaryColor: "#e9ede6",
                        primaryTextColor: "#242923",
                        primaryBorderColor: "#82988b",
                        lineColor: "#2e8b7f",
                        fontFamily: "Arial, sans-serif",
                    },
                });
                const result = await mermaid.render(
                    `atlas-diagram-${id}`,
                    chart,
                );
                if (!cancelled && target.current)
                    target.current.innerHTML = result.svg;
            } catch {
                if (!cancelled) setError(true);
            }
        }
        void render();
        return () => {
            cancelled = true;
        };
    }, [chart, id]);
    return (
        <figure className="diagram">
            <div ref={target} role="img" aria-label="Article diagram" />
            {error && (
                <p role="status">
                    This diagram could not be rendered. Its source is available
                    below.
                </p>
            )}
            <details>
                <summary>Diagram source</summary>
                <pre>{chart}</pre>
            </details>
        </figure>
    );
}
