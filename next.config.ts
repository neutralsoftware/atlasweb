import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    outputFileTracingIncludes: { "/*": ["./content/news/**/*"] },
    async redirects() {
        return [
            {
                source: "/learn/:path*",
                destination: "https://docs.atlasengine.org",
                permanent: true,
            },
            {
                source: "/docs/:path*",
                destination: "https://docs.atlasengine.org",
                permanent: true,
            },
            {
                source: "/overview/atlas",
                destination: "/overview",
                permanent: true,
            },
            {
                source: "/overview/engine",
                destination: "/overview#engine",
                permanent: true,
            },
            {
                source: "/overview/rendering",
                destination: "/overview#rendering",
                permanent: true,
            },
            {
                source: "/overview/architecture",
                destination: "/overview#architecture",
                permanent: true,
            },
            {
                source: "/overview/contributing",
                destination:
                    "https://github.com/neutralsoftware/atlas/blob/main/CONTRIBUTING.md",
                permanent: true,
            },
            {
                source: "/overview/releases",
                destination:
                    "https://github.com/neutralsoftware/atlas/releases",
                permanent: true,
            },
            {
                source: "/rendering",
                destination: "/overview#rendering",
                permanent: true,
            },
        ];
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ["@svgr/webpack"],
        });

        return config;
    },
};

export default nextConfig;
