"use client";

import Image from "next/image";
import { MutableRefObject } from "react";

import { useIntersectionObserver } from "@/utils/hooks/useIntersectionObserver";
import { useDatabaseData } from "@/utils/hooks/useDatabaseData";
import AboutContent from "@/models/AboutContent";
import { fonts } from "@/utils/fonts";
import { getAboutContentsAction } from "@/app/_actions";

export default function About({ innerRef }: AboutProps) {
  const intersector = useIntersectionObserver(innerRef, {});
  const isVisible = intersector?.isIntersecting;

  const aboutContents = useDatabaseData<AboutContent>({
    getAction: getAboutContentsAction,
    key: "aboutContents",
  });

  return (
    <div
      ref={innerRef}
      className={`flex flex-col items-center lg:flex-row justify-between mb-36 transform transition duration-1000 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="lg:w-4/12">
        <Image
          className="rounded-full mb-16 lg:mb-0"
          alt="Picture of Daniel Famiyeh"
          src="/profile.jpg"
          width={400}
          height={400}
        />
      </div>
      <div className="lg:w-2/12"></div>
      <div
        className={`lg:w-6/12 text-center lg:text-left transform transition duratio-10000 ease-in-out ${
          aboutContents.fetched ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className={`${fonts.title.className} text-[#eeeeee] text-6xl mb-2`}>
          Welcome!
        </h1>
        {aboutContents?.data
          ? (aboutContents.data as AboutContent)?.content?.map((text) => (
              <p key={text} className="text-white mt-2">
                {text}
              </p>
            ))
          : null}
      </div>
    </div>
  );
}

type AboutProps = {
  innerRef: MutableRefObject<HTMLDivElement | null>;
};
