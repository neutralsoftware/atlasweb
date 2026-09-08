import Navbar from "./Navbar";
import Footer from "./Footer";
import type { ReactNode } from "react";

export default function PageShell({ children }: { children: ReactNode }) {
    return <><Navbar /><main id="top" className="pt-36 max-[760px]:pt-28">{children}</main><Footer /></>;
}
