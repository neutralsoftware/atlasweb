"use client";

import Navbar from "@/components/layout/Navbar";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { AppleLight } from "@ridemountainpig/svgl-react";
import { useEffect, useRef, useState } from "react";
import { container, copy, eyebrow, sectionHead, title } from "../page";
import Image from "next/image";

export default function Vela1() {
    const videoRef = useRef<HTMLVideoElement>(null);

    const [finished, setFinished] = useState(false);

    const slowingRef = useRef(false);
    const animationRef = useRef<number | null>(null);

    const startSmoothFinish = () => {
        const video = videoRef.current;

        if (!video || slowingRef.current) return;

        slowingRef.current = true;

        const startRate = video.playbackRate;

        const slowdownDuration = 500;

        const finalRate = 0.35;

        const startTime = performance.now();

        const animate = (now: number) => {
            const video = videoRef.current;
            if (!video) return;

            const t = Math.min((now - startTime) / slowdownDuration, 1);

            const eased = 1 - Math.pow(1 - t, 3);

            video.playbackRate = startRate + (finalRate - startRate) * eased;

            if (t < 1 && !video.ended) {
                animationRef.current = requestAnimationFrame(animate);
            }
        };

        animationRef.current = requestAnimationFrame(animate);
    };

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        let frameCallbackId: number | undefined;

        const watchVideo = () => {
            const remaining = video.duration - video.currentTime;

            if (
                Number.isFinite(video.duration) &&
                remaining <= 1.25 &&
                remaining > 0 &&
                !slowingRef.current
            ) {
                startSmoothFinish();
            }

            if (!video.ended) {
                if ("requestVideoFrameCallback" in video) {
                    frameCallbackId =
                        video.requestVideoFrameCallback(watchVideo);
                }
            }
        };

        if ("requestVideoFrameCallback" in video) {
            frameCallbackId = video.requestVideoFrameCallback(watchVideo);
        }

        return () => {
            if (
                frameCallbackId !== undefined &&
                "cancelVideoFrameCallback" in video
            ) {
                video.cancelVideoFrameCallback(frameCallbackId);
            }

            if (animationRef.current !== null) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!finished) {
            const previousOverflow = document.body.style.overflow;

            document.body.style.overflow = "hidden";

            return () => {
                document.body.style.overflow = previousOverflow;
            };
        }
    }, [finished]);

    return (
        <main>
            <section className="relative h-screen overflow-hidden">
                <video
                    ref={videoRef}
                    src="/videos/velaDay.mp4"
                    autoPlay
                    muted
                    playsInline
                    preload="auto"
                    controls={false}
                    onEnded={() => {
                        setFinished(true);
                    }}
                    className="
                    absolute inset-0
                    h-full w-full
                    object-cover
                "
                />

                <div
                    className={`
                    relative z-10
                    transition-opacity
                    duration-1000
                    ease-out
                    ${finished ? "opacity-100" : "opacity-0"}
                `}
                >
                    <Navbar adaptive />
                    <div className="flex h-screen items-center justify-center mt-50">
                        <PrimaryButton link="https://atlasengine.org/download">
                            Download for macOS{" "}
                            <AppleLight className="h-4 w-4" />
                        </PrimaryButton>
                    </div>
                </div>
            </section>
            <section
                id="overview"
                className={`${container} py-28 max-[760px]:py-[72px]`}
            >
                <div className={sectionHead}>
                    <div>
                        <span className={eyebrow}>01 / Meet Atlas</span>
                        <h2 className={title}>
                            Atlas is
                            <br />
                            entering Beta.
                        </h2>
                    </div>
                    <p className={copy}>
                        After a year of development, Atlas is now entering its
                        Beta phase. The Beta release is a major milestone for
                        hte project, and we are excited to share it with the
                        world. Welcome to Atlas Vela.
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
            </section>
        </main>
    );
}
