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

  const aboutRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const experienceRef = useRef<HTMLDivElement | null>(null);

  const isHeroTitleVisible = !!heroTitleEntry?.isIntersecting;

  return (
    <main>
      <div className="px-4 lg:px-48 fixed w-full bg-[#eeeeee] z-50">
        <Navbar
          aboutRef={aboutRef}
          contactRef={contactRef}
          projectsRef={projectsRef}
          experienceRef={experienceRef}
          isHeroTitleVisible={isHeroTitleVisible}
        />
      </div>
      <div className="px-4 lg:px-48 min-h-screen pt-32 lg:pt-16 pb-16 bg-[#eeeeee]">
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
