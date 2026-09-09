"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Download } from "lucide-react";

type Platform = "macos" | "windows" | "linux";

type GithubAsset = {
    name: string;
    size: number;
    browser_download_url: string;
};

type GithubRelease = {
    tag_name: string;
    name: string;
    published_at?: string;
    html_url: string;
    assets: GithubAsset[];
};

const API_URL =
    "https://api.github.com/repos/neutralsoftware/atlas/releases/latest";

const platforms: Platform[] = ["macos", "windows", "linux"];

function detectPlatform(): Platform {
    const platform = navigator.platform.toLowerCase();
    const userAgent = navigator.userAgent.toLowerCase();

    if (platform.includes("mac") || userAgent.includes("mac")) {
        return "macos";
    }

    if (platform.includes("win") || userAgent.includes("windows")) {
        return "windows";
    }

    return "linux";
}

function platformName(platform: Platform) {
    switch (platform) {
        case "macos":
            return "macOS";

        case "windows":
            return "Windows";

        case "linux":
            return "Linux";
    }
}

function findPlatformAsset(
    assets: GithubAsset[],
    platform: Platform,
): GithubAsset | undefined {
    return assets.find((asset) => {
        const name = asset.name.toLowerCase();

        switch (platform) {
            case "macos":
                return name.endsWith(".dmg");

            case "windows":
                return (
                    name.endsWith(".exe") ||
                    name.endsWith(".msi") ||
                    name.includes("windows")
                );

            case "linux":
                return (
                    name.endsWith(".appimage") ||
                    name.endsWith(".deb") ||
                    name.endsWith(".tar.gz") ||
                    name.includes("linux")
                );
        }
    });
}

function formatBytes(bytes: number) {
    if (bytes === 0) return "0 B";

    const units = ["B", "KB", "MB", "GB"];
    const index = Math.floor(Math.log(bytes) / Math.log(1024));

    return `${(bytes / 1024 ** index).toFixed(1)} ${units[index]}`;
}

function formatDate(value?: string) {
    if (!value) return "Release date unavailable";

    return new Intl.DateTimeFormat("en", {
        year: "numeric",
        month: "long",
        day: "numeric",
    }).format(new Date(value));
}

export default function DownloadPanel() {
    const [selected, setSelected] = useState<Platform>("macos");
    const [release, setRelease] = useState<GithubRelease | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setSelected(detectPlatform());

        async function loadRelease() {
            try {
                const response = await fetch(API_URL, {
                    headers: {
                        Accept: "application/vnd.github+json",
                    },
                });

                if (!response.ok) {
                    throw new Error(`GitHub returned ${response.status}`);
                }

                const data = (await response.json()) as GithubRelease;

                setRelease(data);
            } catch (error) {
                console.error(error);
                setError("Release details are temporarily unavailable.");
            } finally {
                setLoading(false);
            }
        }

        loadRelease();
    }, []);

    if (loading) {
        return (
            <p className="text-sm text-[#72776f]">
                Finding the latest release…
            </p>
        );
    }

    if (error || !release) {
        return (
            <p className="text-sm text-[#72776f]">
                {error ?? "No release is available."}
            </p>
        );
    }

    const asset = findPlatformAsset(release.assets, selected);

    return (
        <div className="mt-10">
            <div className="mb-6 flex gap-2">
                {platforms.map((platform) => (
                    <button
                        key={platform}
                        type="button"
                        onClick={() => setSelected(platform)}
                        className={`rounded-full px-4 py-2 text-sm transition ${
                            selected === platform
                                ? "bg-[#2e8b7f] text-white"
                                : "bg-[#eef0eb] text-[#626860] hover:bg-[#e4e7e1]"
                        }`}
                    >
                        {platformName(platform)}
                    </button>
                ))}
            </div>

            <div className="rounded-2xl border border-black/10 bg-[#f6f7f3] p-6">
                <p className="mb-2 text-xs uppercase tracking-wider text-[#72776f]">
                    {asset ? "Direct download" : "GitHub release"}
                </p>

                <h2 className="text-xl font-semibold">
                    {asset?.name ??
                        `${release.name} for ${platformName(selected)}`}
                </h2>

                <p className="mt-2 text-sm text-[#72776f]">
                    {asset ? (
                        <>
                            {selected === "macos"
                                ? "DMG · Apple silicon"
                                : `${platformName(selected)} package`}
                            {" · "}
                            {formatBytes(asset.size)}
                        </>
                    ) : (
                        <>
                            A dedicated {platformName(selected)} package is not
                            attached to this release yet.
                        </>
                    )}
                </p>

                <a
                    href={asset?.browser_download_url ?? release.html_url}
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#2e8b7f] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#26786e]"
                >
                    {asset ? (
                        <>
                            <Download size={16} />
                            Download for {platformName(selected)}
                        </>
                    ) : (
                        <>
                            View release
                            <ArrowRight size={16} />
                        </>
                    )}
                </a>

                <p className="mt-5 text-xs text-[#858a83]">
                    {release.tag_name} · {formatDate(release.published_at)}
                </p>
            </div>
        </div>
    );
}
