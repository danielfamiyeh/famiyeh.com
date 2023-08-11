"use client";

import { MutableRefObject, useState } from "react";

const pages = [
  { title: "About" },
  { title: "Experience" },
  { title: "Projects" },
  // { title: "Contact" },
];

export default function Navbar({
  isHeroTitleVisible,
  aboutRef,
  experienceRef,
  projectsRef,
  contactRef,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const refs = [aboutRef, experienceRef, projectsRef, contactRef];

  return (
    <nav className="flex justify-between items-center py-4 lg:py-px w-full">
      <div className="flex gap-1 select-none">
        <p className="m-0">Daniel</p>
        <b
          className={`transition-opacity ease-in-out duration-300 ${
            isHeroTitleVisible ? "opacity-0" : "opacity-100"
          }`}
        >
          Famiyeh
        </b>
      </div>
      <div>
        <div
          className="burger lg:hidden flex flex-col gap-1 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className={`h-0.5 w-5 bg-black transform transition duration-500 ease-in-out ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <div
            className={`h-0.5 w-5 bg-black transform transition duration-500 ease-in-out ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <div
            className={`h-0.5 w-5 bg-black transform transition duration-500 ease-in-out ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </div>
        <ul
          className={`flex flex-col fixed right-0 text-right mt-5 bg-[#F0EBD8] w-full overflow-hidden ${
            isOpen ? "max-h-[1000px]" : "max-h-0"
          } transition-all duration-700 ease-in-out lg:max-h-[9999px] lg:mt-0 lg:flex-row lg:relative`}
        >
          {pages.map(({ title }, i) => (
            <li
              key={`nav-link-${title}`}
              className={`mr-4 p-2 text-center select-none cursor-pointer border-t-2 transition transform duration-300 ease-in-out lg:border-t-0 hover:opacity-25`}
              onClick={() => {
                setIsOpen(false);
                refs[i].current?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {title}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

type NavbarProps = {
  isHeroTitleVisible: boolean;
  aboutRef: MutableRefObject<HTMLDivElement | null>;
  experienceRef: MutableRefObject<HTMLDivElement | null>;
  projectsRef: MutableRefObject<HTMLDivElement | null>;
  contactRef: MutableRefObject<HTMLDivElement | null>;
};
