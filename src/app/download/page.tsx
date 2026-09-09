import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import PageShell from "@/components/layout/PageShell";
import DownloadPanel from "@/components/content/DownloadPanel";
import { container } from "@/components/ui/styles";

export const metadata: Metadata = {
    title: "Download",
    description:
        "Get Atlas Engine for macOS or explore the source and available releases on GitHub.",
    alternates: { canonical: "/download" },
    openGraph: {
        title: "Download Atlas Engine",
        description:
            "Get Atlas Engine for macOS or explore the source and available releases on GitHub.",
        url: "/download",
        siteName: "Atlas Engine",
        type: "website",
        images: ["/images/editorPreview.png"],
    },
};

export default function Download() {
    return (
        <PageShell>
            <section
                className={`${container} grid grid-cols-2 items-center gap-16 pb-24 max-[900px]:grid-cols-1 max-[900px]:gap-10`}
            >
                <div>
                    <h1 className="page-title">
                        Your next world
                        <br />
                        starts here.
                    </h1>

                    <p className="page-lede my-8">
                        Get the Atlas editor and runtime. Download the latest
                        release for your platform.
                    </p>

                    <DownloadPanel />

                    <p className="mt-6 text-sm leading-7 text-[#72776f]">
                        For macOS, open the DMG and drag Atlas into
                        Applications. Check the release notes for supported
                        hardware and known issues.
                    </p>

                    <div className="mt-5 flex gap-6">
                        <a
                            className="text-sm text-[#2e8b7f] underline underline-offset-4"
                            href="/learn"
                        >
                            Read the documentation
                        </a>

                        <a
                            className="inline-flex items-center gap-1 text-sm text-[#2e8b7f] underline underline-offset-4"
                            href="https://github.com/neutralsoftware/atlas/releases"
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub releases
                            <ArrowUpRight size={14} />
                        </a>
                    </div>
                </div>

                <Image
                    src="/images/editorPreview.png"
                    width={1863}
                    height={1068}
                    alt="Atlas editor ready to create a project"
                    sizes="(max-width: 900px) 100vw, 600px"
                    priority
                    className="rounded-xl"
                />
            </section>
        </PageShell>
    );
}
