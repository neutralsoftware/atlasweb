import Link from "next/link";
import PageShell from "@/components/layout/PageShell";
import { container } from "@/components/ui/styles";
export default function NotFound() {
    return (
        <PageShell>
            <div className={`${container} py-12 pb-28`}>
                <h1 className="page-title">A little off the map.</h1>
                <p className="page-lede my-8">
                    We could not find that page. Let’s get you back to Atlas.
                </p>
                <Link
                    href="/"
                    className="inline-block rounded-full bg-[#2e8b7f] px-6 py-4 text-sm text-white"
                >
                    Back to Atlas
                </Link>
            </div>
        </PageShell>
    );
}
