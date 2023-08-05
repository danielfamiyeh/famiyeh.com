"use client";

import { MutableRefObject } from "react";

import { fonts } from "@/utils/fonts";
// import { useIntersectionObserver } from "@/utils/hooks/useIntersectionObserver";
export default function Hero({ heroTitleRef }: HeroProps) {
  return (
    <div className="flex flex-col max-w-[1000px] mx-auto">
      <div
        ref={heroTitleRef}
        className={`text-center lg:text-8xl md:text-6xl text-4xl border-2 border-black rounded-3xl select-none py-4 ${fonts.title.className}`}
      >
        FAMIYEH
      </div>

      <div className="mt-4 flex flex-col">
        <div className="flex flex-col lg:flex-row">
          <div className="text-white lg:w-7/12 bg-[#131313] p-20 rounded-b-[4rem] rounded-tl-[4rem] mb-2 select-none">
            <div className="bg-slate-200 h-px w-12 mb-4 mt-24" />
            Coding the Future: Igniting Ideas, Transforming Visions, and
            Crafting Digital Solutions with Innovation and Passion
          </div>

          <div className="lg:w-1/12" />
          <div className="lg:w-4/12 bg-[#131313] p-20 rounded-tr-[10rem] rounded-bl-[10rem]" />
        </div>

        <div className="flex flex-col lg:flex-row mt-4">
          <div className="lg:w-4/12 bg-[#131313] p-32 rounded-r-[8rem] rounded-tl-[8rem]" />
          <div className="lg:w-1/12" />
          <div className="lg:w-7/12 bg-[#131313] rounded-[8rem]" />
        </div>
      </div>
    </div>
  );
}

type HeroProps = {
  heroTitleRef: MutableRefObject<HTMLDivElement | null>;
};
