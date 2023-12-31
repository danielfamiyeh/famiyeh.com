"use client";

import Link from "@/components/Link";
import LoadingSpinner from "@/components/LoadingSpinner";

import { useDatabaseData } from "@/utils/hooks/useDatabaseData";
import { getProjectsAction } from "@/app/_actions";
import { useFadeIn } from "@/utils/hooks/useFadeIn";
import { Project } from "@/models/Project";
import { linkIcons } from "@/utils/links";
import { fonts } from "@/utils/fonts";

export default function ProjectArchive() {
  const projects = useDatabaseData<Project>({
    getAction: () => getProjectsAction({ limit: 100 }),
    key: "projects",
  });

  const { opacity } = useFadeIn(true);

  return (
    <div
      className={`min-h-screen pb-16 pt-32 px-8 lg:px-48 lg:pt-16 flex flex-col transform transition duration-1000 ease-in-out ${opacity}`}
    >
      <Link href="/">
        <b>Back to Homepage</b>
      </Link>

      <h1 className={`${fonts.title.className} text-[#eeeeee] text-4xl mt-4`}>
        ALL PROJECTS
      </h1>

      <hr className="mb-8" />

      {projects.fetched ? (
        <table
          className={`table-auto self-center text-[#eee] text-sm transform transition duration-1000 ${
            projects.fetched ? "opacity-100" : "opacity-0"
          } `}
        >
          <thead className="p-4 hidden lg:table-header-group bg-[#253956]">
            <tr>
              <td className="py-4 px-4 rounded-tl-lg">Title</td>
              <td className="px-4">Description</td>
              <td className="px-4">Skills</td>
              <td className="px-4 rounded-tr-lg">Links</td>
            </tr>
          </thead>

          <tbody>
            {(projects?.data as Project[])?.map((project) => {
              const id = (project as Project & { _id: string })._id.toString();

              return (
                <tr
                  key={`project-${id}`}
                  className="flex flex-col text-center mt-2 bg-[#253956] pt-4 rounded-md lg:table-row lg:text-left lg:border-t lg:border-[#4a6182]"
                >
                  <td className="px-4 py-2">
                    <b>{project.title}</b>
                  </td>
                  <td className="px-4 py-2">{project.subtitle}</td>
                  <div className="w-full h-px px-4 lg:hidden my-2">
                    <div className="w-full h-full bg-[#eee]" />
                  </div>
                  <td className="px-4 py-2">
                    {project.skills.map((skill) => (
                      <div
                        key={`project-${id}-skill${skill}`}
                        className="bg-slate-500 px-4 py-px m-2 inline-block rounded-lg"
                      >
                        <b>{skill}</b>
                      </div>
                    ))}
                  </td>
                  <td className="px-4 py-4 flex flex-wrap items-center justify-center">
                    {project.links.map((link) => {
                      const Icon =
                        linkIcons[
                          link.site.toLocaleLowerCase() as keyof typeof linkIcons
                        ];

                      return (
                        <Link
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noreferrer moopener"
                        >
                          <Icon
                            key={`project-${id}-link${link.site}`}
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
      ) : (
        <div className="flex justify-center">
          <LoadingSpinner
            className={`transform transition duration-1000 ${
              projects.fetched ? "opacity-0" : "opacity-100"
            }`}
          />
        </div>
      )}
    </div>
  );
}
