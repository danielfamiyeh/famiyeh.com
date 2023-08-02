import Link from "next/link";

import { fonts } from "@/utils/fonts";
import { projects } from "@/data/project";

export default function Projects() {
  return (
    <div className="mt-16">
      <h2 className={`text-light text-4xl ${fonts.title.className} mb-4`}>
        PROJECTS
        <hr className="mt-1" />
      </h2>
      <ul className="flex flex-wrap flex-col lg:flex-row gap-4 justify-center text-white">
        {projects.map(({ title, subtitle, skills, links }, i) => {
          return (
            // TODO: replace with project id

            <li
              key={`project-${title}`}
              className={`basis-5/12 lg py-32 bg-[#253956] flex flex-col items-center justify-center p-4 text-center rounded-tr-[4rem] select-none rounded-bl-[4rem] ${
                i & 1 ? "rounded-br-[4rem]" : "rounded-tl-[4rem]"
              }`}
            >
              <p className="m-0 text-2xl">{title}</p>
              <small>{subtitle}</small>
              <hr className="my-4" />
              <ul className="flex flex-wrap justify-center">
                {skills.map((skill: string) => (
                  <li key={`${title}-skill-${skill}`} className="mx-2">
                    <small className="font-bold">{skill}</small>
                  </li>
                ))}
              </ul>

              <ul>
                {links.map(({ site, url }: { site: string; url: string }) => (
                  <Link
                    key={url}
                    href={url}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {site}
                  </Link>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
