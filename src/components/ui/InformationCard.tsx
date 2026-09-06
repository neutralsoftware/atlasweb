import { Circle } from "lucide-react";

type InformationCardProps = {
    contents: string;
    status: "success" | "error" | "warning" | "info";
    className?: string;
};

export default function InformationCard({
    contents,
    status,
    className = "",
}: InformationCardProps) {
    const statusColor = {
        success: "text-green-400",
        error: "text-red-400",
        warning: "text-yellow-400",
        info: "text-blue-400",
    }[status];

    return (
        <div
            className={`flex flex-row items-center gap-2 rounded-3xl bg-gray-600/50 px-3 py-1 font-mono text-xs text-white backdrop-blur-lg ${className}`}
        >
            <Circle
                className={`h-3 w-3 ${statusColor}`}
                fill="currentColor"
                strokeWidth={0}
            />

            {contents}
        </div>
    );
}
