import { AppleLight } from "@ridemountainpig/svgl-react";
import type { ReactNode } from "react";

type PrimaryButtonProps = {
    children: ReactNode;
    theme?: "light" | "dark" | "accent";
    className?: string;
    link: string;
};

export default function PrimaryButton({
    children,
    theme = "light",
    className = "",
    link,
}: PrimaryButtonProps) {
    const themeClasses =
        theme === "light"
            ? "bg-white text-black hover:bg-gray-200"
            : theme === "dark"
              ? "bg-black text-white hover:bg-gray-800"
              : "bg-accent text-white hover:bg-accent-hover";

    const button =
        "inline-flex items-center justify-center gap-3 rounded-[40px] px-[23px] py-[14px] text-sm font-semibold transition-[transform,background] duration-200 hover:-translate-y-0.5";

    return (
        <a
            className={`${button} bg-white text-[#26332e] hover:bg-[#e9f4f0]`}
            href={link}
        >
            {children}
        </a>
    );
}
