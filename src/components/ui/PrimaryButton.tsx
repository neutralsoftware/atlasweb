import type { ReactNode } from "react";

type PrimaryButtonProps = {
    children: ReactNode;
    theme?: "light" | "dark" | "accent";
    className?: string;
    onClick?: () => void;
};

export default function PrimaryButton({
    children,
    theme = "light",
    className = "",
    onClick,
}: PrimaryButtonProps) {
    const themeClasses =
        theme === "light"
            ? "bg-white text-black hover:bg-gray-200"
            : theme === "dark"
              ? "bg-black text-white hover:bg-gray-800"
              : "bg-accent text-white hover:bg-accent-hover";

    return (
        <button
            onClick={onClick}
            className={`flex items-center gap-2 rounded-3xl px-4 py-2 font-semibold transition-all duration-200 hover:cursor-pointer hover:shadow-lg ${themeClasses} ${className}`}
        >
            {children}
        </button>
    );
}
