"use client";

import { useEffect, useState } from "react";

import { useDatabaseData } from "@/utils/hooks/useDatabaseData";
import { getProjectsAction } from "@/app/_actions";
import { Project } from "@/models/Project";
import { linkIcons } from "@/utils/links";
import { fonts } from "@/utils/fonts";
import Link from "@/components/Link";

export default function ProjectArchive() {
  const projects = useDatabaseData<Project>({
    getAction: () => getProjectsAction({ limit: 100 }),
    key: "projects",
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) setIsVisible(true);
  }, [isVisible]);

  return (
    <div
      className={`px-4 lg:px-48 min-h-screen pt-32 lg:pt-16 pb-16 flex flex-col transform transition duration-1000 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <Link href="/">
        <b>Back to Homepage</b>
      </Link>

      <h1 className={`${fonts.title.className} text-[#eeeeee] text-6xl mt-4`}>
        All Projects
      </h1>

      <hr className="mb-8" />

      <table className="table-auto bg-[#253956] self-center text-[#eee] rounded-lg">
        <thead className="p-4">
          <tr>
            <td className="py-4 px-4">Title</td>
            <td className="px-4">Subtitle</td>
            <td className="px-4">Skills</td>
            <td className="px-4">Links</td>
          </tr>
        </thead>

        <tbody>
          {projects?.data?.map((project) => {
            const id = (project as Project & { _id: string })._id.toString();

            return (
              <tr key={`project-${id}`} className="border-t border-[#4a6182]">
                <td className="px-4 py-2">{project.title}</td>
                <td className="px-4 py-2">{project.subtitle}</td>
                <td className="px-4 py-2">{project.skills.join(", ")}</td>
                <td className="px-4 py-2 flex flex-wrap items-center justify-center">
                  {project.links.map((link) => {
                    const Icon =
                      linkIcons[
                        link.site.toLocaleLowerCase() as keyof typeof linkIcons
                      ];

                    return (
                      <Link href={link.url}>
                        <Icon
                          key={`project-${id}-link${link.site}`}
                          className="invert"
                          height={24}
                          width={24}
                        />
                      </Link>
                    );
                  })}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
