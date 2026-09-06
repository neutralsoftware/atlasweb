"use client";

import Logo from "@/assets/logo.svg";
import { AppleDark, AppleLight } from "@ridemountainpig/svgl-react";
import { Apple, AppleIcon, ChevronDown } from "lucide-react";

import React, { useEffect, useState } from "react";
import GradientLogo from "../ui/GradientLogo";
import PrimaryButton from "../ui/PrimaryButton";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 100);
        };

        onScroll();
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav
            className={
                "fixed top-0 left-0 z-50 grid w-full grid-cols-3 items-center px-8 py-4 transition-all duration-100 " +
                (scrolled
                    ? "text-black bg-atlas-bg/80 backdrop-blur-lg border-b-2 border-gray-400"
                    : "text-white")
            }
        >
            <div className="flex justify-start items-center font-bold">
                {(scrolled && <GradientLogo className="h-9 mr-3" />) || (
                    <Logo className="h-9 mr-3" />
                )}
                Atlas Engine
                <span
                    className={
                        "text-sm ml-2 font-manrope mt-0 " +
                        (scrolled ? "text-gray-500" : "text-gray-200")
                    }
                >
                    / by neutral software
                </span>
            </div>

            <div className="flex justify-center gap-8">
                <a href="/about" className="flex items-center gap-1">
                    Overview <ChevronDown className="w-5"> </ChevronDown>
                </a>
                <a href="/about" className="flex items-center gap-1">
                    Learn <ChevronDown className="w-5"> </ChevronDown>
                </a>
                <a href="/docs">News</a>
                <a href="/about">About</a>
                <a href="/docs">Docs</a>
            </div>

            <div className="flex justify-end">
                <PrimaryButton theme={scrolled ? "accent" : "light"}>
                    Download for macOS{" "}
                    {(scrolled && (
                        <AppleDark className="w-3 mb-0.5"></AppleDark>
                    )) || <AppleLight className="w-3 mb-0.5"></AppleLight>}
                </PrimaryButton>
            </div>
        </nav>
    );
}
