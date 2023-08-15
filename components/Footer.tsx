"use client";

import Link from "next/link";
import { MutableRefObject } from "react";

import { useIntersectionObserver } from "@/utils/hooks/useIntersectionObserver";
import { useFadeIn } from "@/utils/hooks/useFadeIn";
import { contactLinks } from "@/utils/contact";

export default function Footer({ innerRef }: FooterProps) {
  const intersector = useIntersectionObserver(innerRef, {});
  const isVisible = intersector?.isIntersecting;

  const { opacity } = useFadeIn(isVisible);

  return (
    <div
      ref={innerRef}
      className={`mt-16 p-4 text-center text-[#eeeeee] transform transition duration-1000 ease-in-out ${opacity}`}
    >
      <div className="flex flex-wrap items-center justify-center mb-2">
        {contactLinks.map(({ url, site, Icon }) => (
          <Link
            className="mx-2"
            key={url}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {Icon ? (
              <Icon
                className="hover:opacity-50 transform transition duration-300 ease-in-out"
                height={36}
                width={36}
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
