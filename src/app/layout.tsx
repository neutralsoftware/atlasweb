import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "katex/dist/katex.min.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://atlasengine.org"),
    openGraph: { siteName: "Atlas Engine", type: "website", images: [{ url: "/images/landingDay.png", alt: "A glass dragon in a landscape rendered in Atlas" }] },
    twitter: { card: "summary_large_image" },
    title: "Atlas Engine — Build everything. Then go beyond.",
    description: "An open-source C++ game engine with a visual editor, modern rendering and a modular runtime. Build your next world with Atlas Engine.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html
            lang="en"
            className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
        >
            <body className="min-h-full flex flex-col"><a className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:p-4" href="#top">Skip to content</a>{children}</body>
        </html>
    );
}
