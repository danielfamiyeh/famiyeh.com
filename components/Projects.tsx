import { MutableRefObject } from "react";

import LoadingSpinner from "./LoadingSpinner";
import Link from "./Link";

import { fonts } from "@/utils/fonts";
import { linkIcons } from "@/utils/links";
import { Project } from "@/models/Project";
import { getProjectsAction } from "@/app/_actions";
import { useDatabaseData } from "@/utils/hooks/useDatabaseData";
import { useFadeIn } from "@/utils/hooks/useFadeIn";

export default function Projects({ innerRef, isVisible }: ProjectsProps) {
  const projects = useDatabaseData<Project>({
    getAction: () => getProjectsAction({ limit: 2 }),
    key: "projects",
  });

  const { opacity } = useFadeIn(isVisible);

  return (
    <div
      ref={innerRef}
      className={`mt-16 pt-16 transform transition duration-1000 ease-in-out ${opacity}`}
    >
      <div className="mb-4">
        <div className="flex items-end justify-between">
          <h2 className={`text-light text-4xl ${fonts.title.className}`}>
            PROJECTS
          </h2>
          <Link href="/projects/archive">
            <b>View Project Archive</b>
          </Link>
        </div>
        <hr className="mt-1" />
      </div>
      {projects.fetched ? (
        <ul
          className={`flex flex-wrap flex-col lg:flex-row gap-4 justify-center text-white transform transition duration-1000 ${
            projects.fetched ? "opacity-100" : "opacity-0"
          }`}
        >
          {(projects?.data as Project[])?.map(
            ({ title, subtitle, skills, links }, i) => {
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
                      <li
                        key={`${title}-skill-${skill}`}
                        className="m-2 bg-slate-500 px-4 py-px rounded-lg"
                      >
                        <small className="font-bold">{skill}</small>
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-5 flex flex-wrap gap-4 text-sm underline">
                    {links.map(
                      ({ site, url }: { site: string; url: string }) => {
                        const Icon =
                          linkIcons[
                            site.toLocaleLowerCase() as keyof typeof linkIcons
                          ];

                        return (
                          <Link
                            key={url}
                            href={url}
                            target="_blank"
                            rel="noreferrer noopener"
                            className={`transition-opacity ease-in-out duration-300 hover:opacity-25`}
                          >
                            <Icon width={36} height={36} />
                          </Link>
                        );
                      }
                    )}
                  </ul>
                </li>
              );
            }
          )}
        </ul>
      ) : (
        <div
          className={`flex justify-center transform transition duration-1000 ${
            projects.fetched ? "opacity-0" : "opacity-100"
          }`}
        >
          <LoadingSpinner />
        </div>
      )}
    </div>
  );
}

type ProjectsProps = {
  innerRef: MutableRefObject<HTMLDivElement | null>;
  isVisible?: boolean;
};
