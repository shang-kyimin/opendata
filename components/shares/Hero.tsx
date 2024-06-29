import Image from "next/image";
import { Separator } from "../ui/separator";
import ApiBoard from "./ApiBoard";

const checkLists = [
  "Perfect for prototyping & testing",
  "No API key needed",
  "100% free & open-source",
];

export default function Hero() {
  return (
    <section className="py-10 md:py-14 flex flex-col lg:flex-row lg:justify-center items-center gap-6 md:gap-10 lg:gap-0">
      <div className="h-screen w-full bg-white bg-grid-black/[0.1] absolute flex items-center justify-center flex-col top-0 left-0 -z-10">
        <div className="absolute pointer-events-none inset-0 flex items-between justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_38%,black)]" />
      </div>

      <div className="flex flex-col justify-center items-center space-y-4 sm:space-y-8 text-center lg:text-start">
        <div className="space-y-4 md:space-y-8 w-2/3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl emphasized-font">
            OpenData
          </h1>

          <h6 className="flex flex-col text-sm sm:text-base space-y-2">
            <span>Delivers consistent and reliable APIs from <span className="emphasized-font">Community-generated</span>, <span className="emphasized-font"></span> and <span className="emphasized-font">Randomize</span> data, No Bullsh*t.</span>
            <Separator className="w-3/5 mx-auto md:hidden" />
            <span className="text-sm">Powered by <a href="https://hono.dev" target="_blank" className="underline">Hono</a></span>
          </h6>
        </div>

        <ul className="text-sm sm:text-base text-start space-y-1">
          {checkLists.map(list => (
            <div key={list} className="flex gap-1 justify-start items-center">
              <Image
                src="/assets/check.asset.svg"
                alt="Check asset svg"
                width={24}
                height={24}
              />
              <span>{list}</span>
            </div>
          ))}
        </ul>
      </div>

      <ApiBoard />
    </section>
  );
}


