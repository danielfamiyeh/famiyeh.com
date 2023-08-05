"use client";

import { MutableRefObject } from "react";

import About from "./About";
import Projects from "./Projects";
import Experience from "./Experience";

export default function Main({
  aboutRef,
  experienceRef,
  projectsRef,
}: MainProps) {
  return (
    <div className="max-w-[1000px] mx-auto pt-24">
      <About innerRef={aboutRef} />
      <Experience innerRef={experienceRef} />
      <Projects innerRef={projectsRef} />
    </div>
  );
}

type MainProps = {
  aboutRef: MutableRefObject<HTMLDivElement | null>;
  experienceRef: MutableRefObject<HTMLDivElement | null>;
  projectsRef: MutableRefObject<HTMLDivElement | null>;
};
