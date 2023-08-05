"use client";

import Link from "next/link";
import Image from "next/image";
import { MutableRefObject } from "react";

import { useIntersectionObserver } from "@/utils/hooks/useIntersectionObserver";
import { contactLinks } from "@/utils/contact";

export default function Footer({ innerRef }: FooterProps) {
  const intersector = useIntersectionObserver(innerRef, {});
  const isVisbible = intersector?.isIntersecting;

  return (
    <div
      ref={innerRef}
      className={`mt-16 p-4 text-center text-[#eeeeee] transform transition duration-1000 ease-in-out ${
        isVisbible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex flex-wrap items-center justify-center">
        {contactLinks.map(({ url, site, icon }) => (
          <Link key={url} href={url} target="_blank" rel="noopener noreferrer">
            {icon ? (
              <Image src={icon} width={48} height={48} alt={`${site} link`} />
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
