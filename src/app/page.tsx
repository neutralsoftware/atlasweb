import Navbar from "@/components/layout/Navbar";
import InformationCard from "@/components/ui/InformationCard";
import { ArrowDown, ArrowRight, Code2, Layers3, Sparkles } from "lucide-react";
import { AppleLight } from "@ridemountainpig/svgl-react";
import Image from "next/image";

const modules = [
    ["Atlas", "The foundation", "Scenes, resources, input and a runtime that brings everything together."],
    ["Opal", "The renderer", "A graphics abstraction connecting Metal, Vulkan and OpenGL."],
    ["Aurora", "The world", "Atmosphere, terrain and outdoor systems for worlds with room to explore."],
    ["Bezel", "The physics", "Movement, collisions and simulation that give your world substance."],
    ["Finewave", "The sound", "Spatial audio, playback and real-time sound processing."],
    ["Tracer", "The light", "Path-traced rendering for a different perspective on your scene."],
];

export default function Home() {
    return (
        <main id="top">
            <Navbar />
            <section className="hero">
                <Image src="/images/landingDay.png" alt="A glass dragon in a sunlit mountain landscape" fill priority sizes="100vw" className="hero-image" />
                <div className="hero-shade" />
                <div className="hero-content">
                    <InformationCard contents="Atlas Beta 1 Vela is here." status="info" />
                    <h1>Build everything.<br />Then go beyond.</h1>
                    <p>A powerful, flexible, open-source game engine.<br className="desktop-break" /> From your first idea to a world of your own.</p>
                    <a className="button button-light" href="https://atlasengine.org/download">Download for macOS <AppleLight className="h-4 w-4" /></a>
                </div>
                <a href="#overview" className="hero-explore">Discover Atlas <ArrowDown size={16} /></a>
            </section>

            <section id="overview" className="section container">
                <div className="section-heading">
                    <div><span className="eyebrow">01 / Meet Atlas</span><h2>Engine, without<br />the ceremony.</h2></div>
                    <p>Atlas combines a visual editor, modern rendering and a modular C++ runtime. Start with a scene. Shape every detail. Go as deep as your idea demands.</p>
                </div>
                <figure className="editor-showcase"><Image src="/images/editorPreview.png" alt="Atlas scene editor with a scene hierarchy, 3D viewport, inspector and content browser" width={3726} height={2136} sizes="(max-width: 760px) 100vw, 1200px" /><figcaption><span>The Atlas editor</span><span>Your scene. Everything in reach.</span></figcaption></figure>
                <div className="benefits">
                    <article><Layers3 size={23} /><h3>One connected workflow.</h3><p>Build your scene, organize assets and adjust objects in a workspace that keeps your project in view.</p></article>
                    <article><Sparkles size={23} /><h3>Room to experiment.</h3><p>Explore materials and lighting, then switch from a real-time preview to a path-traced view.</p></article>
                    <article><Code2 size={23} /><h3>Control down to the core.</h3><p>Work visually or dive into C++. Open source means you can understand, extend and make the engine yours.</p></article>
                </div>
            </section>

            <section id="rendering" className="render-section">
                <div className="container section">
                    <div className="section-heading"><div><span className="eyebrow">02 / Look closer</span><h2>Bring your ideas<br />into the light.</h2></div><p>From the first material to the final atmosphere, explore how light changes a scene. Preview as you work, then let the details emerge with path tracing.</p></div>
                    <div className="visual-grid">
                        <article className="visual-card"><div className="visual-image"><Image src="/images/editorRender.png" alt="Path-traced scene in the Atlas editor" width={3726} height={2136} sizes="(max-width: 760px) 100vw, 760px" /></div><div className="visual-copy"><span className="eyebrow">Light & rendering</span><h3>A new way to see your scene.</h3><p>Explore reflections, shadows and indirect light with the integrated path-traced view.</p></div></article>
                        <article className="visual-card"><div className="visual-image"><Image src="/images/editorMaterials.png" alt="Atlas material editing workspace" width={3726} height={2136} sizes="(max-width: 760px) 100vw, 760px" /></div><div className="visual-copy"><span className="eyebrow">Materials & shading</span><h3>Make every surface your own.</h3><p>Refine the materials that give objects their character, all within the editor.</p></div></article>
                    </div>
                </div>
            </section>

            <section id="architecture" className="section container">
                <div className="section-heading"><div><span className="eyebrow">03 / Under the hood</span><h2>Small pieces.<br />Big possibilities.</h2></div><div><p>A family of focused systems, connected by a common foundation. Use Atlas as a complete engine, or explore the pieces that power it.</p><a className="text-link" href="https://atlasengine.org/overview/architecture">Explore the architecture <ArrowRight size={17} /></a></div></div>
                <div className="module-grid">{modules.map(([name, label, description], index) => <article key={name}><span className="module-index">0{index + 1} / {label}</span><h3>{name}</h3><p>{description}</p></article>)}</div>
                <div className="source-strip"><Code2 size={28} /><div><h3>Open source. Open possibilities.</h3><p>Read the code, follow development, or help build what comes next.</p></div><a className="text-link" href="https://github.com/neutralsoftware/atlas">Explore on GitHub <ArrowRight size={17} /></a></div>
            </section>

            <section id="start" className="closing">
                <Image src="/images/landingNight.png" alt="A dragon in a mountain landscape at night" fill sizes="100vw" className="hero-image" />
                <div className="closing-shade" /><div className="closing-content"><span className="eyebrow">Your next world starts here</span><h2>Make something<br />only you could imagine.</h2><p>Meet Atlas. Find your starting point. Go beyond.</p><div className="closing-actions"><a className="button button-light" href="https://atlasengine.org/download">Download for macOS <AppleLight className="h-4 w-4" /></a><a className="button button-outline" href="https://atlasengine.org/learn/first-project">Create your first project <ArrowRight size={16} /></a></div></div>
            </section>
            <footer className="footer container"><div><a href="#top" className="footer-brand">Atlas Engine</a><p>Build everything. Then go beyond.</p><span>by neutral software</span></div><div className="footer-links"><a href="#overview">Overview</a><a href="https://docs.atlasengine.org">Documentation</a><a href="https://atlasengine.org/news">News</a><a href="https://github.com/neutralsoftware/atlas">GitHub</a><a href="https://atlasengine.org/about">About</a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Neutral Software</span><a href="#top">Back to top ↑</a></div></footer>
        </main>
    );
}
