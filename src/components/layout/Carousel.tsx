"use client";

import Image, { StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

export type CarouselSlide = {
    src: string | StaticImageData;
    alt: string;
    title?: string;
    description?: string;
};

type CarouselProps = {
    slides: CarouselSlide[];
    className?: string;
};

export default function Carousel({ slides, className = "" }: CarouselProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const scrollTo = useCallback(
        (index: number) => {
            const container = containerRef.current;
            if (!container) return;

            const next = Math.max(0, Math.min(index, slides.length - 1));
            const slide = container.children[next] as HTMLElement | undefined;

            slide?.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "start",
            });

            setActiveIndex(next);
        },
        [slides.length],
    );

    const previous = () => scrollTo(activeIndex - 1);
    const next = () => scrollTo(activeIndex + 1);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort(
                        (a, b) => b.intersectionRatio - a.intersectionRatio,
                    )[0];

                if (!visible) return;

                const index = Array.from(container.children).indexOf(
                    visible.target,
                );

                if (index !== -1) {
                    setActiveIndex(index);
                }
            },
            {
                root: container,
                threshold: [0.5, 0.75, 0.9],
            },
        );

        Array.from(container.children).forEach((child) =>
            observer.observe(child),
        );

        return () => observer.disconnect();
    }, [slides]);

    return (
        <section
            className={`relative ${className}`}
            aria-roledescription="carousel"
        >
            <div
                ref={containerRef}
                className="
                    flex snap-x snap-mandatory gap-4
                    overflow-x-auto scroll-smooth
                    [scrollbar-width:none]
                    [&::-webkit-scrollbar]:hidden
                "
                onKeyDown={(event) => {
                    if (event.key === "ArrowLeft") previous();
                    if (event.key === "ArrowRight") next();
                }}
                tabIndex={0}
            >
                {slides.map((slide, index) => (
                    <figure
                        key={`${slide.alt}-${index}`}
                        className="
                            min-w-[92%] snap-start
                            overflow-hidden rounded-[18px]
                            bg-[#e9ede6]
                            px-8 pb-5 pt-8

                            max-[760px]:min-w-[96%]
                            max-[760px]:rounded-[10px]
                            max-[760px]:px-2
                            max-[760px]:pb-4
                            max-[760px]:pt-3
                        "
                        aria-label={`Slide ${index + 1} of ${slides.length}`}
                    >
                        <Image
                            src={slide.src}
                            alt={slide.alt}
                            width={3726}
                            height={2136}
                            sizes="(max-width: 760px) 96vw, 92vw"
                            className="h-auto w-full"
                        />

                        {(slide.title || slide.description) && (
                            <figcaption
                                className="
                                    flex justify-between gap-6
                                    px-2 pt-5
                                    text-[11px] text-[#737b70]

                                    max-[760px]:gap-[15px]
                                    max-[760px]:pt-3
                                    max-[760px]:text-[9px]
                                "
                            >
                                <span>{slide.title}</span>

                                <span className="text-right">
                                    {slide.description}
                                </span>
                            </figcaption>
                        )}
                    </figure>
                ))}
            </div>

            {slides.length > 1 && (
                <div className="mt-5 flex items-center justify-between">
                    <div className="flex gap-1.5">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                type="button"
                                onClick={() => scrollTo(index)}
                                className={`
                                    h-1.5 rounded-full transition-all duration-300
                                    ${
                                        activeIndex === index
                                            ? "w-6 bg-[#252a24]"
                                            : "w-1.5 bg-[#b7beb4] hover:bg-[#858d82]"
                                    }
                                `}
                                aria-label={`Go to slide ${index + 1}`}
                                aria-current={
                                    activeIndex === index ? "true" : undefined
                                }
                            />
                        ))}
                    </div>

                    <div className="flex gap-2">
                        <CarouselButton
                            direction="previous"
                            disabled={activeIndex === 0}
                            onClick={previous}
                        />

                        <CarouselButton
                            direction="next"
                            disabled={activeIndex === slides.length - 1}
                            onClick={next}
                        />
                    </div>
                </div>
            )}
        </section>
    );
}

function CarouselButton({
    direction,
    disabled,
    onClick,
}: {
    direction: "previous" | "next";
    disabled: boolean;
    onClick: () => void;
}) {
    const Icon = direction === "previous" ? ChevronLeft : ChevronRight;

    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            aria-label={`${direction === "previous" ? "Previous" : "Next"} slide`}
            className="
                grid size-9 place-items-center
                rounded-full border border-black/10
                transition
                hover:bg-black hover:text-white
                disabled:pointer-events-none
                disabled:opacity-30
            "
        >
            <Icon size={16} strokeWidth={1.7} />
        </button>
    );
}
