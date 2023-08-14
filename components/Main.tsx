"use client";

import { MutableRefObject } from "react";

import About from "./About";
import Projects from "./Projects";
import Experience from "./Experience";

export default function Main(props: MainProps) {
  return (
    <div className="max-w-[1000px] mx-auto pt-24">
      <About innerRef={props.aboutRef} isVisible={props.isAboutVisible} />
      <Experience
        innerRef={props.experienceRef}
        isVisible={props.isExperienceVisible}
      />
      <Projects
        innerRef={props.projectsRef}
        isVisible={props.isProjectsVisible}
      />
    </div>
  );
}

type MainProps = {
  experienceRef: MutableRefObject<HTMLDivElement | null>;
  projectsRef: MutableRefObject<HTMLDivElement | null>;
  aboutRef: MutableRefObject<HTMLDivElement | null>;
  isExperienceVisible?: boolean;
  isProjectsVisible?: boolean;
  isAboutVisible?: boolean;
};
