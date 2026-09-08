"use client";

import { useRef, useState, type ComponentProps } from "react";
import { Check, Copy } from "lucide-react";

export default function CodeBlock({
    children,
    ...props
}: ComponentProps<"pre">) {
    const ref = useRef<HTMLPreElement>(null);
    const [state, setState] = useState<"idle" | "copied" | "error">("idle");
    return (
        <div className="code-block">
            <button
                type="button"
                aria-label="Copy code"
                onClick={async () => {
                    try {
                        await navigator.clipboard.writeText(
                            ref.current?.textContent ?? "",
                        );
                        setState("copied");
                    } catch {
                        setState("error");
                    }
                }}
            >
                {state === "copied" ? <Check size={14} /> : <Copy size={14} />}
                <span aria-live="polite">
                    {state === "copied"
                        ? "Copied"
                        : state === "error"
                          ? "Select code to copy"
                          : "Copy"}
                </span>
            </button>
            <pre ref={ref} {...props}>
                {children}
            </pre>
        </div>
    );
}
