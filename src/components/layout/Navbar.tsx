"use client";

import Link from "next/link";
import Logo from "@/components/ui/Logo";
import {
    Menu,
    X,
    ArrowUpRight,
    ChevronDown,
    Boxes,
    Layers3,
} from "lucide-react";
import { useEffect, useState } from "react";
import GradientLogo from "../ui/GradientLogo";

const links = [
    {
        label: "Overview",
        href: "/overview",
        dropdown: [
            {
                title: "Engine",
                description: "An editor and runtime for your next world.",
                href: "/overview#engine",
                icon: Boxes,
            },
            {
                title: "Rendering",
                description: "Materials, light and atmosphere.",
                href: "/overview#rendering",
                icon: Layers3,
            },
        ],
    },
    { label: "About", href: "/about" },
    { label: "Learn", href: "/learn" },
    { label: "News", href: "/news" },
    { label: "Docs", href: "https://docs.atlasengine.org" },
];

export default function Navbar({ adaptive = false }: { adaptive?: boolean }) {
    const [scrolled, setScrolled] = useState(adaptive ? false : true);
    const [open, setOpen] = useState(false);
    const solid = scrolled || open;
    useEffect(() => {
        const onScroll = () =>
            setScrolled(adaptive ? window.scrollY > 80 : true);
        const onKey = (event: KeyboardEvent) => {
            if (event.key === "Escape") setOpen(false);
        };
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("keydown", onKey);
        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("keydown", onKey);
        };
    }, [adaptive]);
    return (
        <nav
            aria-label="Main navigation"
            className={`fixed inset-x-0 top-0 z-50 grid grid-cols-[1fr_auto_1fr] items-center gap-7 px-10 py-[22px] transition-[background,color] duration-200 max-[1100px]:gap-5 max-[1100px]:px-6 max-[760px]:flex max-[760px]:gap-3 max-[760px]:px-5 max-[760px]:py-4 ${solid ? "border-b border-[#24292312] bg-[#faf8f5f0] text-[#242923] backdrop-blur-[20px]" : "text-white"}`}
        >
            <Link
                href="/"
                className="justify-self-start flex items-center gap-2.5 whitespace-nowrap text-[15px] font-[650] max-[760px]:gap-2 max-[760px]:text-[13px]"
                onClick={() => setOpen(false)}
            >
                {solid ? (
                    <GradientLogo className="h-8 w-8 max-[760px]:h-[25px] max-[760px]:w-[25px]" />
                ) : (
                    <Logo className="h-8 w-8 max-[760px]:h-[25px] max-[760px]:w-[25px]" />
                )}
                <span>
                    Atlas Engine
                    <span className="text-[11px] font-normal opacity-70 max-[1100px]:hidden">
                        {" "}
                        / by neutral software
                    </span>
                </span>
            </Link>
            <div className="flex justify-self-center gap-[26px] text-[13px] max-[760px]:hidden">
                {links.map((link) => (
                    <div key={link.label} className="group relative">
                        <Link
                            href={link.href}
                            className="flex items-center gap-1 transition-colors hover:text-[#70bfae]"
                        >
                            {link.label}

                            {link.dropdown && (
                                <ChevronDown
                                    size={13}
                                    className="transition-transform duration-200 group-hover:rotate-180"
                                />
                            )}
                        </Link>

                        {link.dropdown && (
                            <div
                                className="
                        invisible absolute left-1/2 top-full
                        z-50 w-[420px]
                        -translate-x-1/2 translate-y-2
                        pt-4
                        opacity-0
                        transition-all duration-200
                        group-hover:visible group-focus-within:visible
                        group-hover:translate-y-0 group-focus-within:translate-y-0
                        group-hover:opacity-100 group-focus-within:opacity-100
                    "
                            >
                                <div
                                    className="
                            grid grid-cols-2 gap-2
                            rounded-2xl
                            border border-black/10
                            bg-atlas-bg/90
                            p-3
                            text-[#242923]
                            shadow-[0_20px_60px_rgba(0,0,0,0.15)]
                            backdrop-blur-2xl
                        "
                                >
                                    {link.dropdown.map((item) => {
                                        const Icon = item.icon;

                                        return (
                                            <Link
                                                key={item.title}
                                                href={item.href}
                                                className="
                                        group/card
                                        rounded-xl
                                        p-4
                                        transition-colors
                                        hover:bg-black/[0.045]
                                    "
                                            >
                                                <Icon
                                                    size={20}
                                                    className="mb-5 text-[#2e8b7f]"
                                                />

                                                <div className="mb-1 text-[14px] font-semibold">
                                                    {item.title}
                                                </div>

                                                <div className="text-[12px] leading-[1.45] opacity-60">
                                                    {item.description}
                                                </div>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <Link
                className={`flex justify-self-end  items-center gap-2.5 rounded-[30px] px-[18px] py-[11px] text-[13px] font-semibold max-[760px]:ml-auto max-[760px]:px-3 max-[760px]:py-[9px] max-[760px]:text-[11px] ${solid ? "bg-[#2e8b7f] text-white" : "bg-white text-[#242923]"}`}
                href="/download"
            >
                Download <ArrowUpRight size={15} />
            </Link>
            <button
                className="hidden cursor-pointer border-0 bg-transparent p-2 text-inherit max-[760px]:block"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                aria-controls="mobile-navigation"
                onClick={() => setOpen(!open)}
            >
                {open ? <X /> : <Menu />}
            </button>
            {open && (
                <div
                    className="absolute inset-x-0 top-full flex flex-col gap-1 border-b border-[#d9ded4] bg-[#faf8f5] px-6 pb-6 pt-3 text-[#242923] min-[761px]:hidden"
                    id="mobile-navigation"
                >
                    {links.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className="border-b border-black/5 py-3 text-base"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        className="flex items-center gap-2.5 py-3"
                        href="/download"
                    >
                        Download for macOS <ArrowUpRight size={16} />
                    </Link>
                </div>
            )}
        </nav>
    );
}
