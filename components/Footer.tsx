"use client";

import Link from "next/link";
import Image from "next/image";
import { MutableRefObject } from "react";

import { useIntersectionObserver } from "@/utils/hooks/useIntersectionObserver";
import { contactLinks } from "@/utils/contact";

export default function Footer({ innerRef }: FooterProps) {
  const intersector = useIntersectionObserver(innerRef, {});
  const isVisible = intersector?.isIntersecting;

  return (
    <div
      ref={innerRef}
      className={`mt-16 p-4 text-center text-[#eeeeee] transform transition duration-1000 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex flex-wrap items-center justify-center mb-2">
        {contactLinks.map(({ url, site, Icon }) => (
          <Link key={url} href={url} target="_blank" rel="noopener noreferrer">
            {Icon ? (
              <Icon
                className="fill-white hover:opacity-50 transform transition duration-300 ease-in-out"
                width={50}
                height={50}
              />
            ) : (
              site
            )}
          </Link>
        ))}
      </div>
      Copyright &copy; {new Date().getFullYear()} Daniel Famiyeh
    </div>
  );
}

type FooterProps = {
  innerRef: MutableRefObject<HTMLDivElement | null>;
};
