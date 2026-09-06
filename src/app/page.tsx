import Navbar from "@/components/layout/Navbar";
import Image from "next/image";

export default function Home() {
    return (
        <main>
            <Navbar></Navbar>
            <section className="relative h-screen w-full">
                <Image
                    src="/images/landingDay.png"
                    alt="Landing Day"
                    fill
                    priority
                    className="object-cover"
                />
            </section>
            <section className="relative h-screen w-full">
                <Image
                    src="/images/landingDay.png"
                    alt="Landing Day"
                    fill
                    priority
                    className="object-cover"
                />
            </section>
        </main>
    );
}
