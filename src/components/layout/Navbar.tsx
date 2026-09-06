"use client";

import Logo from "@/assets/logo.svg";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import GradientLogo from "../ui/GradientLogo";

const links = [["Overview", "#overview"], ["Rendering", "#rendering"], ["Learn", "https://atlasengine.org/learn/first-project"], ["News", "https://atlasengine.org/news"], ["Docs", "https://docs.atlasengine.org"]];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 80);
        const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("keydown", onKey);
        return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("keydown", onKey); };
    }, []);

    return (
        <nav aria-label="Main navigation" className={`navbar ${scrolled || open ? "navbar-solid" : ""}`}>
            <a href="#top" className="brand" onClick={() => setOpen(false)}>{scrolled || open ? <GradientLogo className="h-8 w-8" /> : <Logo className="h-8 w-8" />}<span>Atlas Engine<span className="brand-by"> / by neutral software</span></span></a>
            <div className="nav-desktop">{links.map(([label, href]) => <a key={label} href={href}>{label}</a>)}</div>
            <a className="nav-download" href="https://atlasengine.org/download">Download <ArrowUpRight size={15} /></a>
            <button className="menu-toggle" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
            {open && <div className="nav-mobile" id="mobile-navigation">{links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}<a href="https://atlasengine.org/download">Download for macOS <ArrowUpRight size={16} /></a></div>}
        </nav>
    );
}
