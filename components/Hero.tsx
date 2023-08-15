"use client";

import { MutableRefObject, useRef } from "react";

import { useIntersectionObserver } from "@/utils/hooks/useIntersectionObserver";
import { useFadeIn } from "@/utils/hooks/useFadeIn";
import { fonts } from "@/utils/fonts";

export default function Hero({ heroTitleRef }: HeroProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const containerIntersector = useIntersectionObserver(containerRef, {});

  const { opacity } = useFadeIn(containerIntersector?.isIntersecting);

  return (
    <div
      ref={containerRef}
      className={`flex flex-col max-w-[1000px] mx-auto transform transition duration-1000 ease-in-out ${opacity}`}
    >
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
          <div className="lg:w-4/12 bg-[#131313] p-20 rounded-tr-[10rem] rounded-bl-[10rem] bg-[url('/hero/sky.jpg')] bg-cover grayscale brightness-90" />
        </div>

        <div className="flex flex-col lg:flex-row mt-4">
          <div className="lg:w-4/12 bg-[#131313] p-32 rounded-r-[8rem] rounded-tl-[8rem] bg-[url('/hero/city.jpg')] bg-cover grayscale brightness-75 mb-2" />
          <div className="lg:w-1/12" />
          <div className="lg:w-7/12 bg-[#131313] p-16 rounded-[8rem] flex items-center justify-center mt-2">
            <div>
              <div className="rounded-full bg-white w-10 h-10" />
              <div className="rounded-full bg-white w-10 h-10" />
            </div>
            <div>
              <div className="rounded-full bg-white w-10 h-10" />
              <div className="rounded-full bg-white w-10 h-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

type HeroProps = {
  heroTitleRef: MutableRefObject<HTMLDivElement | null>;
};
