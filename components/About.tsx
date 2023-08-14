"use client";

import Image from "next/image";
import { MutableRefObject } from "react";

import { useDatabaseData } from "@/utils/hooks/useDatabaseData";
import { useFadeIn } from "@/utils/hooks/useFadeIn";
import { getAboutContentsAction } from "@/app/_actions";
import AboutContent from "@/models/AboutContent";
import { fonts } from "@/utils/fonts";

export default function About({ innerRef, isVisible }: AboutProps) {
  const aboutContents = useDatabaseData<AboutContent>({
    getAction: getAboutContentsAction,
    key: "aboutContents",
  });

  const { opacity } = useFadeIn(isVisible);

  return (
    <div
      ref={innerRef}
      className={`flex flex-col items-center lg:flex-row justify-between mb-36 transform transition duration-1000 ease-in-out pt-24 ${opacity}`}
    >
      <div className="lg:w-4/12">
        <Image
          className="rounded-full mb-16 lg:mb-0 border-8"
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
        <h1 className={`${fonts.title.className} text-[#eeeeee] text-4xl mb-2`}>
          ABOUT ME
        </h1>
        <hr className="mb-8" />
        <div>
          {aboutContents?.data
            ? (aboutContents.data as AboutContent)?.content?.map((text) => (
                <p key={text} className="text-white mt-2">
                  {text}
                </p>
              ))
            : null}
        </div>
      </div>
    </div>
  );
}

type AboutProps = {
  innerRef: MutableRefObject<HTMLDivElement | null>;
  isVisible?: boolean;
};
