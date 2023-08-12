"use client";

import Link from "@/components/Link";
import { fonts } from "@/utils/fonts";
import { Project } from "@/models/Project";
import { getProjectsAction } from "@/app/_actions";
import { useDatabaseData } from "@/utils/hooks/useDatabaseData";
import { linkIcons } from "@/utils/links";

export default function ProjectArchive() {
  const projects = useDatabaseData<Project>({
    getAction: () => getProjectsAction({ limit: 100 }),
    key: "projects",
  });

  return (
    <div className="px-4 lg:px-48 min-h-screen pt-32 lg:pt-16 pb-16 flex flex-col">
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
              <tr key={`project-${id}`} className="border-t border-neutral-300">
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
