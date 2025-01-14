import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section id="hero-section" className="hero-section bg-cokelatmuda  text-white py-20">
            <div className="container mx-auto px-4 sm:px-10">
                <div className="bg-white p-6 sm:p-10 mx-auto rounded-[40px]">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-10">
                        <div className="lg:w-1/2 text-center lg:text-left">
                            <h1 className="font-climatecrisis text-3xl sm:text-4xl md:text-6xl font-bold text-primarycolor mb-4">BAKE THE COOKIES</h1>
                            <h2 className="font-jakartasans text-xl sm:text-2xl text-primarycolor md:text-4xl mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo saepe assumenda voluptas inventore esse maxime harum odit ipsa dolore? Saepe ab quis vero quae, culpa et mollitia recusandae fuga pariatur.</h2>
                            <h3 className="font-jakartasans text-base sm:text-lg text-primarycolor mb-6">Lorem ipsum dolor sit amet.</h3>
                            <Link href={"/posts"}>
                            <Button  className="bg-primarybutton hover:text-primarybutton text-primarycolor px-6 py-3">
                                Cooking Blog
                            </Button>
                            </Link>
                        </div>

                        <div className="lg:w-1/2">
                            <Image
                                src={`/page/imagehero.webp`}
                                alt={"hero"}
                                height={443}
                                width={605}
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Second Section */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                    className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-6"
                    href="/posts"
                    rel="noopener noreferrer"
                >
                    <Button>LIHAT POSTTT</Button>
                    <Image
                        className="dark:invert"
                        src="/vercel.svg"
                        alt="Vercel logomark"
                        width={20}
                        height={20}
                    />
                    LIHAT POSTTT
                </Link>
            </div>
        </section>
    );
}
