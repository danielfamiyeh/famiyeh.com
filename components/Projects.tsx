import Link from "next/link";
import { MutableRefObject, useEffect, useState } from "react";

import { useIntersectionObserver } from "@/utils/hooks/useIntersectionObserver";
import { getProjectsAction } from "@/app/_actions";
import { fonts } from "@/utils/fonts";
import { FetchedData } from "@/type";
import { Project } from "@/models/Project";

export default function Projects({ innerRef }: ProjectsProps) {
  const intersector = useIntersectionObserver(innerRef, {});
  const isVisible = intersector?.isIntersecting;
  const [projects, setProjects] = useState<FetchedData<Project>>({
    fetched: false,
    error: null,
    data: [],
  });

  useEffect(() => {
    const init = async () => {
      try {
        const res = await getProjectsAction();
        setProjects({ ...projects, fetched: true, data: res.projects });
      } catch (error: any) {
        setProjects({ ...projects, error: error.message, fetched: true });
      }
    };

    init();
  }, []);

  console.log({ projects });

  return (
    <div
      ref={innerRef}
      className={`mt-16 transform transition duration-1000 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <h2 className={`text-light text-4xl ${fonts.title.className} mb-4`}>
        PROJECTS
        <hr className="mt-1" />
      </h2>
      <ul className="flex flex-wrap flex-col lg:flex-row gap-4 justify-center text-white">
        {projects.data.map(({ title, subtitle, skills, links }, i) => {
          return (
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

              <ul className="mt-5 flex flex-wrap gap-4 text-sm underline">
                {links.map(({ site, url }: { site: string; url: string }) => (
                  <Link
                    key={url}
                    href={url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className={`transition-opacity ease-in-out duration-300 hover:opacity-25`}
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

type ProjectsProps = {
  innerRef: MutableRefObject<HTMLDivElement | null>;
};
