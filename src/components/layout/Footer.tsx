"use client";

import { AppleLight } from "@ridemountainpig/svgl-react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Logo from "@/assets/logo.svg";

export default function Footer() {
    const container =
        "mx-auto w-[min(1200px,calc(100%-96px))] max-[760px]:w-[calc(100%-40px)]";
    const button =
        "inline-flex items-center justify-center gap-3 rounded-[40px] px-[23px] py-[14px] text-sm font-semibold transition-[transform,background] duration-200 hover:-translate-y-0.5";
    return (
        <main>
            <section
                id="start"
                className="relative grid min-h-[550px] place-items-center text-center text-white"
            >
                <Image
                    src="/images/landingDay.png"
                    alt="A dragon in a mountain landscape at night"
                    fill
                    sizes="100vw"
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-[#071c2b88]" />
                <div className="relative px-6 py-[90px]">
                    <span className="mb-[22px] block text-[10px] font-[650] uppercase tracking-[0.17em] text-[#c8dedb] max-[760px]:mb-4">
                        Your next world starts here
                    </span>
                    <h2 className="text-[clamp(38px,4.5vw,64px)] font-medium leading-[1.1] tracking-[-0.045em]">
                        Make something
                        <br />
                        only you could imagine.
                    </h2>
                    <p className="my-6 mb-[30px] text-[15px] text-[#d6e1e6]">
                        Meet Atlas. Find your starting point. Go beyond.
                    </p>
                    <div className="flex justify-center gap-3 max-[760px]:flex-col max-[760px]:items-center">
                        <a
                            className={`${button} bg-white text-[#26332e] hover:bg-[#e9f4f0]`}
                            href="https://atlasengine.org/download"
                        >
                            Download for macOS{" "}
                            <AppleLight className="h-4 w-4" />
                        </a>
                        <a
                            className={`${button} border border-[#ffffff66] bg-[#ffffff0c] backdrop-blur-[10px] hover:bg-[#ffffff20]`}
                            href="https://atlasengine.org/learn/first-project"
                        >
                            Create your first project <ArrowRight size={16} />
                        </a>
                    </div>
                </div>
            </section>
            <footer
                className={`${container} grid grid-cols-2 gap-[50px] pt-16 max-[760px]:grid-cols-1 max-[760px]:gap-[30px] max-[760px]:pt-11`}
            >
                <div>
                    <a
                        href="#top"
                        className="text-xl font-[650] hover:text-[#70bfae] flex flex-row items-center gap-2 transition-all"
                    >
                        <Logo className="h-8 w-8 max-[760px]:h-[25px] max-[760px]:w-[25px]" />
                        Atlas Engine
                    </a>
                    <p className="my-3 mb-[18px] text-[13px] text-[#7a8075]">
                        Build everything. Then go beyond.
                    </p>
                    <span className="text-[11px] text-[#7a8075]">
                        by neutral software
                    </span>
                </div>
                <div className="flex flex-wrap content-start justify-end gap-6 text-[13px] max-[760px]:justify-start max-[760px]:gap-5">
                    {[
                        ["Overview", "#overview"],
                        ["Documentation", "https://docs.atlasengine.org"],
                        ["News", "https://atlasengine.org/news"],
                        ["GitHub", "https://github.com/neutralsoftware/atlas"],
                        ["About", "https://atlasengine.org/about"],
                    ].map(([label, href]) => (
                        <a
                            className="hover:text-[#70bfae]"
                            href={href}
                            key={label}
                        >
                            {label}
                        </a>
                    ))}
                </div>
                <div className="col-span-full flex justify-between border-t border-[#d9ded4] py-6 text-[11px]">
                    <span>© {new Date().getFullYear()} Neutral Software</span>
                    <a href="#top">Back to top ↑</a>
                </div>
            </footer>
        </main>
    );
}
