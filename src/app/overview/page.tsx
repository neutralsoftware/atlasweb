import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import PageShell from "@/components/layout/PageShell";
import { container, title, copy, sectionHead } from "@/components/ui/styles";

export const metadata: Metadata = {
    title: "Overview",
    description:
        "Explore the Atlas editor, modular C++ runtime, rendering, physics and audio systems.",
    alternates: { canonical: "/overview" },
    openGraph: {
        title: "Atlas Engine Overview",
        description:
            "Explore the Atlas editor, modular C++ runtime, rendering, physics and audio systems.",
        url: "/overview",
        siteName: "Atlas Engine",
        type: "website",
        images: ["/images/editorPreview.png"],
    },
};
const systems = [
    [
        "Atlas",
        "The foundation",
        "Scenes, entities, resources and input. A focused C++ runtime connects your content to the systems that bring it to life.",
    ],
    [
        "Opal",
        "The renderer",
        "An abstraction over modern graphics APIs, with Metal, Vulkan and OpenGL backends.",
    ],
    [
        "Aurora & Hydra",
        "The world outside",
        "Terrain generation, atmospheric scattering, volumetric clouds and skies that respond to the sun.",
    ],
    [
        "Bezel",
        "The simulation",
        "Physics, collision and movement, with Jolt integration for worlds that react to the player.",
    ],
    [
        "Finewave",
        "The sound",
        "Spatial audio and real-time sound processing to give every scene a sense of place.",
    ],
    [
        "Graphite & Tracer",
        "The tools",
        "Build in-game interfaces with Graphite. Understand your runtime with Atlas Tracer.",
    ],
];

export default function Overview() {
    return (
        <PageShell>
            <header className={`${container} pb-16`}>
                <h1 className="page-title max-w-4xl">
                    A whole world.
                    <br />
                    Within your reach.
                </h1>
                <p className="page-lede mt-8 max-w-2xl">
                    A visual editor, a modern renderer and a modular C++
                    runtime. Atlas gives you the tools to create, and the source
                    to go further.
                </p>
            </header>
            <div
                className={`${container} overflow-hidden rounded-2xl bg-[#e9ede6] p-5 max-[760px]:p-2`}
            >
                <Image
                    src="/images/editorPreview.png"
                    alt="Atlas editor showing a scene viewport, hierarchy and inspector"
                    width={3726}
                    height={2136}
                    priority
                    sizes="(max-width: 760px) 100vw, 1200px"
                    className="h-auto w-full"
                />
            </div>
            <section
                id="engine"
                className={`${container} py-28 max-[760px]:py-16`}
            >
                <div className={sectionHead}>
                    <h2 className={title}>
                        From an idea.
                        <br />
                        To a living scene.
                    </h2>
                    <p className={copy}>
                        Create a project, shape its hierarchy, edit materials
                        and preview the result. The editor and runtime work with
                        the same scene data, so your project stays in motion.
                    </p>
                </div>
                <div className="grid grid-cols-3 gap-10 max-[760px]:grid-cols-1">
                    {[
                        [
                            "01",
                            "Make it yours",
                            "Arrange entities, inspect properties and bring assets together in one visual workspace.",
                        ],
                        [
                            "02",
                            "Bring it to life",
                            "Connect behavior with scripting, add physics and sound, and run your scene as you work.",
                        ],
                        [
                            "03",
                            "Go beyond the editor",
                            "Read the source, extend a module or work directly with C++. Atlas keeps its systems within reach.",
                        ],
                    ].map(([n, h, p]) => (
                        <div key={n} className="border-t border-[#d9ded4] pt-6">
                            <span className="font-mono text-xs text-[#2e8b7f]">
                                {n}
                            </span>
                            <h3 className="my-4 text-2xl tracking-tight">
                                {h}
                            </h3>
                            <p className={copy}>{p}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section
                id="rendering"
                className="bg-[#e9ede6] py-24 max-[760px]:py-16"
            >
                <div className={container}>
                    <div className={sectionHead}>
                        <h2 className={title}>
                            Light. Material.
                            <br />
                            Atmosphere.
                        </h2>
                        <p className={copy}>
                            Physically based materials, deferred rendering and
                            an extensible post-processing pipeline. Explore path
                            tracing and global illumination with Photon, or
                            build an outdoor scene with Aurora and Hydra.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-6 max-[760px]:grid-cols-1">
                        {[
                            [
                                "editorMaterials.png",
                                "Shape the surface.",
                                "Material editing in the Atlas editor",
                            ],
                            [
                                "editorRender.png",
                                "Find the light.",
                                "Path-traced Cornell box in Atlas",
                            ],
                        ].map(([src, label, alt]) => (
                            <figure key={src}>
                                <Image
                                    src={`/images/${src}`}
                                    alt={alt}
                                    width={1863}
                                    height={1068}
                                    sizes="(max-width: 760px) 100vw, 600px"
                                    className="rounded-xl"
                                />
                                <figcaption className="mt-4 text-sm text-[#596653]">
                                    {label}
                                </figcaption>
                            </figure>
                        ))}
                    </div>
                </div>
            </section>
            <section
                id="architecture"
                className={`${container} py-28 max-[760px]:py-16`}
            >
                <div className={sectionHead}>
                    <h2 className={title}>
                        One engine.
                        <br />
                        Clear boundaries.
                    </h2>
                    <p className={copy}>
                        Each system has a purpose. Use the Atlas family
                        together, inspect how the pieces connect, or extend the
                        boundary your project needs.
                    </p>
                </div>
                <div className="grid grid-cols-3 gap-x-12 gap-y-10 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">
                    {systems.map(([name, label, description]) => (
                        <div
                            key={name}
                            className="border-t border-[#d9ded4] pt-6"
                        >
                            <p className="mb-3 text-xs text-[#677c70]">
                                {label}
                            </p>
                            <h3 className="mb-4 text-2xl tracking-tight">
                                {name}
                            </h3>
                            <p className={copy}>{description}</p>
                        </div>
                    ))}
                </div>
                <a
                    href="https://github.com/neutralsoftware/atlas"
                    className="mt-12 inline-flex items-center gap-3 font-medium text-[#2e8b7f]"
                >
                    Explore the source <ArrowRight size={18} />
                </a>
            </section>
        </PageShell>
    );
}
