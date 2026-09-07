import Navbar from "@/components/layout/Navbar";
import InformationCard from "@/components/ui/InformationCard";
import { ArrowDown, ArrowRight, Code2, Layers3, Sparkles } from "lucide-react";
import { AppleLight } from "@ridemountainpig/svgl-react";
import Image from "next/image";
import Footer from "@/components/layout/Footer";

const modules = [
    [
        "Atlas",
        "The foundation",
        "Scenes, resources, input and a runtime that brings everything together.",
    ],
    [
        "Opal",
        "The renderer",
        "A graphics abstraction connecting Metal, Vulkan and OpenGL.",
    ],
    [
        "Aurora",
        "The world",
        "Atmosphere, terrain and outdoor systems for worlds with room to explore.",
    ],
    [
        "Bezel",
        "The physics",
        "Movement, collisions and simulation that give your world substance.",
    ],
    [
        "Finewave",
        "The sound",
        "Spatial audio, playback and real-time sound processing.",
    ],
    [
        "Tracer",
        "The light",
        "Path-traced rendering for a different perspective on your scene.",
    ],
];
const container =
    "mx-auto w-[min(1200px,calc(100%-96px))] max-[760px]:w-[calc(100%-40px)]";
const eyebrow =
    "mb-[22px] block text-[10px] font-[650] uppercase tracking-[0.17em] text-[#5c8173] max-[760px]:mb-4";
const title =
    "text-[clamp(36px,4vw,58px)] font-medium leading-[1.1] tracking-[-0.045em]";
const copy = "text-[15px] leading-[1.8] text-[#72776f]";
const button =
    "inline-flex items-center justify-center gap-3 rounded-[40px] px-[23px] py-[14px] text-sm font-semibold transition-[transform,background] duration-200 hover:-translate-y-0.5";
const featureTitle = "text-xl font-[550] leading-[1.35] tracking-[-0.025em]";
const sectionHead =
    "mb-[52px] grid grid-cols-[1.1fr_1fr] items-end gap-[100px] max-[1100px]:gap-12 max-[760px]:mb-8 max-[760px]:grid-cols-1 max-[760px]:gap-6";

export default function Home() {
    return (
        <main id="top">
            <Navbar />
            <section className="relative h-[max(760px,100svh)] max-h-[1150px] text-white max-[760px]:h-[100svh] max-[760px]:min-h-[740px] max-[760px]:max-h-[950px]">
                <Image
                    src="/images/landingDay.png"
                    alt="A glass dragon in a sunlit mountain landscape"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,#122b465c,#17334e22_52%,#0b202632)]" />
                <div className="relative flex flex-col items-center px-6 pt-[155px] text-center min-[1600px]:pt-[140px] max-[760px]:pt-[145px]">
                    <InformationCard
                        contents="Atlas Beta 1 Vela is here."
                        status="info"
                    />
                    <h1 className="my-6 text-[clamp(48px,5.3vw,82px)] font-[550] leading-[1.07] tracking-[-0.055em] max-[760px]:text-[clamp(40px,8.5vw,62px)]">
                        Build everything.
                        <br />
                        Then go beyond.
                    </h1>
                    <p className="mb-[25px] text-lg leading-[1.65] [text-shadow:0_1px_12px_#213e5570] max-[760px]:max-w-[330px] max-[760px]:text-[15px]">
                        A powerful, flexible, open-source game engine.
                        <br className="max-[760px]:hidden" /> From your first
                        idea to a world of your own.
                    </p>
                    <a
                        className={`${button} bg-white text-[#26332e] hover:bg-[#e9f4f0]`}
                        href="https://atlasengine.org/download"
                    >
                        Download for macOS <AppleLight className="h-4 w-4" />
                    </a>
                </div>
                <a
                    href="#overview"
                    className="absolute bottom-[30px] left-1/2 flex -translate-x-1/2 items-center gap-3 text-xs"
                >
                    Discover Atlas <ArrowDown size={16} />
                </a>
            </section>
            <section
                id="overview"
                className={`${container} py-28 max-[760px]:py-[72px]`}
            >
                <div className={sectionHead}>
                    <div>
                        <span className={eyebrow}>01 / Meet Atlas</span>
                        <h2 className={title}>
                            Engine, without
                            <br />
                            the ceremony.
                        </h2>
                    </div>
                    <p className={copy}>
                        Atlas combines a visual editor, modern rendering and a
                        modular C++ runtime. Start with a scene. Shape every
                        detail. Go as deep as your idea demands.
                    </p>
                </div>
                <figure className="overflow-hidden rounded-[18px] bg-[#e9ede6] px-8 pb-5 pt-8 max-[760px]:rounded-[10px] max-[760px]:px-2 max-[760px]:pb-4 max-[760px]:pt-3">
                    <Image
                        src="/images/editorPreview.png"
                        alt="Atlas scene editor with a scene hierarchy, 3D viewport, inspector and content browser"
                        width={3726}
                        height={2136}
                        sizes="(max-width: 760px) 100vw, 1200px"
                        className="h-auto w-full"
                    />
                    <figcaption className="flex justify-between px-2 pt-5 text-[11px] text-[#737b70] max-[760px]:gap-[15px] max-[760px]:pt-3 max-[760px]:text-[9px]">
                        <span>The Atlas editor</span>
                        <span>Your scene. Everything in reach.</span>
                    </figcaption>
                </figure>
                <div className="mt-12 grid grid-cols-3 gap-[50px] max-[760px]:mt-9 max-[760px]:grid-cols-1 max-[760px]:gap-8">
                    {(
                        [
                            [
                                Layers3,
                                "One connected workflow.",
                                "Build your scene, organize assets and adjust objects in a workspace that keeps your project in view.",
                            ],
                            [
                                Sparkles,
                                "Room to experiment.",
                                "Explore materials and lighting, then switch from a real-time preview to a path-traced view.",
                            ],
                            [
                                Code2,
                                "Control down to the core.",
                                "Work visually or dive into C++. Open source means you can understand, extend and make the engine yours.",
                            ],
                        ] as const
                    ).map(([Icon, name, description]) => (
                        <article key={name}>
                            <Icon
                                size={23}
                                className="mb-[22px] text-[#488a76] max-[760px]:mb-[14px]"
                            />
                            <h3 className={featureTitle}>{name}</h3>
                            <p className="mt-3 text-sm leading-[1.8] text-[#72776f]">
                                {description}
                            </p>
                        </article>
                    ))}
                </div>
            </section>
            <section id="rendering" className="bg-[#eaece6]">
                <div className={`${container} py-28 max-[760px]:py-[72px]`}>
                    <div className={sectionHead}>
                        <div>
                            <span className={eyebrow}>02 / Look closer</span>
                            <h2 className={title}>
                                Bring your ideas
                                <br />
                                into the light.
                            </h2>
                        </div>
                        <p className={copy}>
                            From the first material to the final atmosphere,
                            explore how light changes a scene. Preview as you
                            work, then let the details emerge with path tracing.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-6 max-[760px]:grid-cols-1">
                        {[
                            [
                                "/images/editorRender.png",
                                "Path-traced scene in the Atlas editor",
                                "Light & rendering",
                                "A new way to see your scene.",
                                "Explore reflections, shadows and indirect light with the integrated path-traced view.",
                            ],
                            [
                                "/images/editorMaterials.png",
                                "Atlas material editing workspace",
                                "Materials & shading",
                                "Make every surface your own.",
                                "Refine the materials that give objects their character, all within the editor.",
                            ],
                        ].map(([src, alt, label, name, description]) => (
                            <article
                                className="overflow-hidden rounded-2xl bg-[#f8f9f5]"
                                key={src}
                            >
                                <div className="bg-[#dde2d8] px-3 pt-5">
                                    <Image
                                        src={src}
                                        alt={alt}
                                        width={3726}
                                        height={2136}
                                        sizes="(max-width: 760px) 100vw, 760px"
                                        className="h-auto w-full"
                                    />
                                </div>
                                <div className="p-8 max-[760px]:p-[26px]">
                                    <span className="mb-[14px] block text-[10px] font-[650] uppercase tracking-[0.17em] text-[#5c8173]">
                                        {label}
                                    </span>
                                    <h3 className={featureTitle}>{name}</h3>
                                    <p className="mt-[14px] text-sm leading-[1.8] text-[#72776f]">
                                        {description}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
            <section
                id="architecture"
                className={`${container} py-28 max-[760px]:py-[72px]`}
            >
                <div className={sectionHead}>
                    <div>
                        <span className={eyebrow}>03 / Under the hood</span>
                        <h2 className={title}>
                            Small pieces.
                            <br />
                            Big possibilities.
                        </h2>
                    </div>
                    <div>
                        <p className={copy}>
                            A family of focused systems, connected by a common
                            foundation. Use Atlas as a complete engine, or
                            explore the pieces that power it.
                        </p>
                        <a
                            className="mt-[22px] inline-flex items-center gap-3 text-[13px] font-semibold text-[#2e7865] hover:underline hover:underline-offset-[5px]"
                            href="https://atlasengine.org/overview/architecture"
                        >
                            Explore the architecture <ArrowRight size={17} />
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-3 border-t border-[#d9ded4] max-[760px]:grid-cols-2 max-[760px]:gap-x-5">
                    {modules.map(([name, label, description], index) => (
                        <article
                            className="border-b border-[#d9ded4] py-8 pr-[30px] max-[760px]:py-6 max-[760px]:pr-0"
                            key={name}
                        >
                            <span className="text-[11px] text-[#7b8477]">
                                0{index + 1} / {label}
                            </span>
                            <h3 className="my-[18px] mb-2 text-[28px] font-[550] leading-[1.35] tracking-[-0.025em]">
                                {name}
                            </h3>
                            <p className="max-w-[290px] text-sm leading-[1.8] text-[#72776f] max-[760px]:text-[13px]">
                                {description}
                            </p>
                        </article>
                    ))}
                </div>
                <div className="mt-[42px] flex items-center gap-6 rounded-xl bg-[#edf0e9] p-8 max-[760px]:flex-wrap max-[760px]:gap-4 max-[760px]:p-6">
                    <Code2 size={28} className="shrink-0 text-[#5c8173]" />
                    <div className="min-w-[180px] flex-1">
                        <h3 className="text-[17px] font-[550]">
                            Open source. Open possibilities.
                        </h3>
                        <p className="mt-[5px] text-[13px] leading-[1.8] text-[#72776f]">
                            Read the code, follow development, or help build
                            what comes next.
                        </p>
                    </div>
                    <a
                        className="ml-auto inline-flex items-center gap-3 whitespace-nowrap text-[13px] font-semibold text-[#2e7865] hover:underline hover:underline-offset-[5px] max-[760px]:ml-0"
                        href="https://github.com/neutralsoftware/atlas"
                    >
                        Explore on GitHub <ArrowRight size={17} />
                    </a>
                </div>
            </section>
            <Footer></Footer>
        </main>
    );
}
