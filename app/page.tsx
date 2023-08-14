"use client";

import { useRef } from "react";

import Hero from "@/components/Hero";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import { useIntersectionObserver } from "@/utils/hooks/useIntersectionObserver";

export default function Home() {
  const heroTitleRef = useRef<HTMLDivElement | null>(null);
  const heroTitleEntry = useIntersectionObserver(heroTitleRef, {});

  const homeRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const experienceRef = useRef<HTMLDivElement | null>(null);

  const isHeroTitleVisible = heroTitleEntry
    ? heroTitleEntry.isIntersecting
    : true;

  return (
    <main>
      <div className="fixed w-full bg-[#D4D4D4] z-50">
        <Navbar
          homeRef={homeRef}
          aboutRef={aboutRef}
          contactRef={contactRef}
          projectsRef={projectsRef}
          experienceRef={experienceRef}
          isHeroTitleVisible={isHeroTitleVisible}
        />
      </div>
      <div
        ref={homeRef}
        className="px-4 lg:px-48 flex items-center border-black justify-center min-h-screen pt-16 pb-16 bg-[#D4D4D4]"
      >
        <Hero heroTitleRef={heroTitleRef} />
      </div>
      <div className="min-h-screen w-full bg-[#1D2D44] px-4 lg:px-48 pb-16">
        <Main
          aboutRef={aboutRef}
          projectsRef={projectsRef}
          experienceRef={experienceRef}
        />
      </div>
      <Footer innerRef={contactRef} />
    </main>
  );
}
