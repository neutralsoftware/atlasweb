import Navbar from "@/components/layout/Navbar";
import InformationCard from "@/components/ui/InformationCard";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { AppleLight } from "@ridemountainpig/svgl-react";
import { Apple } from "lucide-react";
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
                <div className="relative z-10 flex h-full items-center justify-center mb-40">
                    <div className="text-center text-white mb-80 w-1/2 flex flex-col gap-4 items-center">
                        <h1 className="text-7xl">
                            Build everything. Then go beyond.{" "}
                        </h1>
                        <p className="mt-4 text-xl">
                            Atlas Engine is a powerful, flexible, open-source
                            game engine that empowers developers to create
                            immersive experiences.
                        </p>
                        <InformationCard
                            contents="Atlas Beta 1 Vela is here."
                            status="info"
                        ></InformationCard>
                        <PrimaryButton className="mt-4">
                            Download for macOS
                            <AppleLight className="w-3 mb-0.5"></AppleLight>
                        </PrimaryButton>
                    </div>
                </div>
            </section>
        </main>
    );
}
