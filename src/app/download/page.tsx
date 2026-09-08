import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import PageShell from "@/components/layout/PageShell";
import { container } from "@/components/ui/styles";

export const metadata: Metadata = {
    title: "Download — Atlas Engine",
    description:
        "Get Atlas Engine for macOS or explore the source and available releases on GitHub.",
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
                        Get the Atlas editor and runtime. Find the available
                        packages and release notes on GitHub, including beta and
                        pre-release builds.
                    </p>
                    <a
                        href="https://github.com/neutralsoftware/atlas/releases"
                        className="inline-flex items-center gap-3 rounded-full bg-[#2e8b7f] px-7 py-4 text-sm font-semibold text-white hover:bg-[#26786e]"
                    >
                        Get Atlas on GitHub <ArrowUpRight size={17} />
                    </a>
                    <p className="mt-6 text-sm leading-7 text-[#72776f]">
                        For macOS, choose the DMG attached to a release, open
                        it, and drag Atlas into Applications. Check that
                        release’s notes for supported hardware and known issues.
                    </p>
                    <a
                        className="mt-5 inline-block text-sm text-[#2e8b7f] underline underline-offset-4"
                        href="/learn"
                    >
                        Read the documentation
                    </a>
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
