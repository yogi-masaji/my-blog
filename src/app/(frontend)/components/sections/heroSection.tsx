import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
export default function HeroSection() {
    return (
        <section id="hero-section" className="hero-section bg-cokelatmuda text-white py-20">
            <div className="container mx-auto p-10 text-center bg-blue-200">
                <div className="bg-red-200 p-10 mx-auto rounded-[40px]">
                  <div className="p-5 bg-green-300">
                   <h1 className="text-4xl text-start md:text-6xl font-bold mb-4">BAKE THE COOKIES</h1>
                  </div>
                <div className="flex justify-between bg-orange-400 mx-auto p-5">
                    <div className="w-1/2 ">
                        <h2 className="text-2xl md:text-4xl font-bold mb-4">A modern web design framework</h2>
                    </div>
                    <div className="w-1/2">
                        <h2 className="text-2xl md:text-4xl font-bold mb-4">A modern web design framework</h2>
                    </div>
                </div>
                </div>
            </div>
            <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/posts"
            rel="noopener noreferrer"
          >
            <Button> LIHAT POSTTT</Button>
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
