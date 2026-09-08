"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDown, Pause, Play } from "lucide-react";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function VelaIntro() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [playing, setPlaying] = useState(false);

    useEffect(() => {
        const video = videoRef.current;
        const preference = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        );
        if (!video) return;
        const update = () => {
            if (preference.matches) video.pause();
            else void video.play().catch(() => setPlaying(false));
        };
        update();
        preference.addEventListener("change", update);
        return () => preference.removeEventListener("change", update);
    }, []);

    return (
        <section className="relative flex min-h-[740px] h-[100svh] items-end overflow-hidden text-white max-[760px]:min-h-[640px]">
            <video
                ref={videoRef}
                src="/videos/velaDay.mp4"
                poster="/images/landingDay.png"
                muted
                playsInline
                preload="metadata"
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
                onError={() => setPlaying(false)}
                onTimeUpdate={() => {
                    const video = videoRef.current;
                    if (
                        video &&
                        Number.isFinite(video.duration) &&
                        video.currentTime >= Math.max(0, video.duration - 2)
                    )
                        video.pause();
                }}
                className="absolute inset-0 h-full w-full bg-[#102f4e] object-cover max-[760px]:object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071c2bdd] via-transparent to-[#071c2b44]" />
            <div className="relative mx-auto flex w-[min(1200px,calc(100%-96px))] items-end justify-between gap-8 pb-24 max-[760px]:w-[calc(100%-40px)] max-[760px]:flex-col max-[760px]:items-start">
                <div>
                    <h1 className="text-[clamp(64px,9vw,128px)] font-medium leading-none tracking-[-0.065em]">
                        Hello, Vela.
                    </h1>
                    <p className="mt-6 max-w-md text-lg text-white/85">
                        A new chapter for Atlas. The first beta, and the
                        beginning of your next world.
                    </p>
                </div>
                <PrimaryButton link="/download">Get Atlas Vela</PrimaryButton>
            </div>
            <a
                href="#overview"
                className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-2 text-sm"
            >
                Explore the release <ArrowDown size={16} />
            </a>
            <button
                type="button"
                aria-label={
                    playing ? "Pause introduction" : "Replay introduction"
                }
                className="absolute bottom-6 right-6 rounded-full border border-white/40 bg-black/20 p-3 backdrop-blur"
                onClick={() => {
                    const video = videoRef.current;
                    if (!video) return;
                    if (playing) video.pause();
                    else {
                        video.currentTime = 0;
                        void video.play().catch(() => setPlaying(false));
                    }
                }}
            >
                {playing ? <Pause size={16} /> : <Play size={16} />}
            </button>
        </section>
    );
}
