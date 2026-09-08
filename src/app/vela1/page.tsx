import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import VelaIntro from "@/components/VelaIntro";
import { container, copy, sectionHead, title } from "@/components/ui/styles";
import Image from "next/image";
import Carousel from "@/components/layout/Carousel";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
    title: "Vela 1 — Atlas Engine",
    description:
        "Welcome to Atlas Vela, the first beta of Atlas Engine. Explore the editor and the journey from pre-alpha to beta.",
};

const evolutionSlides = [
    {
        src: "/images/perRelease/prealpha0.1.0.png",
        alt: "Atlas pre-alpha 0.1.0",
        title: "Pre-Alpha 0.1.0",
        description:
            "The first public release of Atlas, featuring a basic rendering engine.",
    },
    {
        src: "/images/perRelease/prealpha0.1.1.png",
        alt: "Atlas pre-alpha 0.1.1",
        title: "Pre-Alpha 0.1.1",
        description: "Featuring the creation of a CLI and the 'Scene' class.",
    },
    {
        src: "/images/perRelease/prealpha0.2.0.png",
        alt: "Atlas pre-alpha 0.2.0",
        title: "Pre-Alpha 0.2.0",
        description: "An update bringing component support and entities.",
    },
    {
        src: "/images/perRelease/prealpha0.3.0.png",
        alt: "Atlas pre-alpha 0.3.0",
        title: "Pre-Alpha 0.3.0",
        description: "Finewave makes its debut, bringing sound to Atlas.",
    },
    {
        src: "/images/perRelease/alpha2.png",
        alt: "Atlas alpha 1.0.0",
        title: "Alpha 1 & 2",
        description:
            "The first major releases of Atlas, bringing high quality support and text rendering.",
    },
    {
        src: "/images/perRelease/alpha2.1.png",
        alt: "Atlas alpha 2.1.0",
        title: "Alpha 2.1",
        description: "A huge optimization to the rendering pipeline.",
    },
    {
        src: "/images/perRelease/alpha3.png",
        alt: "Atlas alpha 3.0.0",
        title: "Alpha 3",
        description:
            "A huge release featuring: post-processing effects, PBR and Aurora for terrain generation.",
    },
    {
        src: "/images/perRelease/alpha4.png",
        alt: "Atlas alpha 4.0.0",
        title: "Alpha 4",
        description:
            "Introduced Hydra, the atmosphere and volumetric clouds system.",
    },
    {
        src: "/images/perRelease/alpha5.png",
        alt: "Atlas alpha 5.0.0",
        title: "Alpha 5",
        description:
            "Opal makes its first appearance, shifting the rendering of Atlas to Vulkan",
    },
    {
        src: "/images/perRelease/alpha6.png",
        alt: "Atlas alpha 6.0.0",
        title: "Alpha 6",
        description:
            "Opal moves to Metal and Atlas Tracer is the main star of the release along with Bezel Jolt.",
    },
    {
        src: "/images/perRelease/alpha7.png",
        alt: "Atlas alpha 7.0.0",
        title: "Alpha 7",
        description:
            "The first release to include Photon with path tracing and DDGI.",
    },
    {
        src: "/images/perRelease/alpha8.png",
        alt: "Atlas alpha 8.0.0",
        title: "Alpha 8",
        description: "Added Graphite UI for making beautiful interfaces.",
    },
    {
        src: "/images/perRelease/alpha9.png",
        alt: "Atlas alpha 9.0.0",
        title: "Alpha 9 & Release Candidate",
        description: "Hence the editor is born, with a new UI and runtime.",
    },
    {
        src: "/images/editorPreview.png",
        alt: "Atlas Vela",
        title: "Atlas Vela (Beta 1)",
        description:
            "The first Beta release of Atlas, featuring an improved experience.",
    },
];

export default function Vela1() {
    return (
        <main id="top">
            <Navbar adaptive />
            <VelaIntro />
            <section
                id="overview"
                className={`${container} py-28 max-[760px]:py-[72px]`}
            >
                <div className={sectionHead}>
                    <div>
                        <h2 className={title}>
                            Atlas is
                            <br />
                            entering Beta.
                        </h2>
                    </div>
                    <p className={copy}>
                        After a year of development, Atlas is now entering its
                        Beta phase. The Beta release is a major milestone for
                        the project, and we are excited to share it with the
                        world. Welcome to Atlas Vela.
                    </p>
                </div>
                <figure className="overflow-hidden rounded-[18px] bg-[#e9ede6] px-8 pb-5 pt-8 max-[760px]:rounded-[10px] max-[760px]:px-2 max-[760px]:pb-4 max-[760px]:pt-3">
                    <Image
                        src="/images/editorRender.png"
                        alt="Atlas scene editor with a scene hierarchy, 3D viewport, inspector and content browser"
                        width={3726}
                        height={2136}
                        sizes="(max-width: 760px) 100vw, 1200px"
                        className="h-auto w-full"
                    />
                    <figcaption className="flex justify-between px-2 pt-5 text-[11px] text-[#737b70] max-[760px]:gap-[15px] max-[760px]:pt-3 max-[760px]:text-[9px]">
                        <span>A render of a cornell box in Atlas.</span>
                        <span>Your scene. Everything in reach.</span>
                    </figcaption>
                </figure>
                <div className={sectionHead + " mt-20"}>
                    <div>
                        <h2 className={title}>
                            {"We've travelled"}
                            <br />a long way.
                        </h2>
                    </div>
                    <p className={copy}>
                        It has been a long journey to get to this point, and we
                        are proud of the evolution of Atlas. From the first
                        pre-alpha release to the current beta, we have come a
                        long way. We are excited to continue this journey with
                        you, and we cannot wait to see what you create with
                        Atlas.
                    </p>
                </div>
                <Carousel slides={evolutionSlides}></Carousel>
            </section>
            <Footer></Footer>
        </main>
    );
}
