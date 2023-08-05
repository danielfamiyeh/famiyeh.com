"use client";

import { useState } from "react";

const pages = [
  { title: "About" },
  { title: "Experience" },
  { title: "Projects" },
  { title: "Contact" },
];

export default function Navbar({ isHeroTitleVisible }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center py-4 lg:py-px w-full">
      <div className="flex gap-1">
        <p className="m-0">Daniel</p>
        <b
          className={`transition-opacity ease-in duration-300 ${
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
          className={`flex flex-col fixed right-0 text-right mt-5 bg-[#eeeeee] w-full overflow-hidden ${
            isOpen ? "max-h-[1000px]" : "max-h-0"
          } transition-all duration-700 ease-in-out lg:max-h-[9999px] lg:mt-0 lg:flex-row lg:relative`}
        >
          {pages.map(({ title }) => (
            <li
              key={`nav-link-${title}`}
              className="mr-4 p-2 text-center select-none cursor-pointer border-t-2 lg:border-t-0"
              onClick={() => setIsOpen(false)}
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
};
