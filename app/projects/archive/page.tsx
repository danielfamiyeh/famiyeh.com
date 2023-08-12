"use client";

import Link from "@/components/Link";
import { fonts } from "@/utils/fonts";
import { Project } from "@/models/Project";
import { getProjectsAction } from "@/app/_actions";
import { useDatabaseData } from "@/utils/hooks/useDatabaseData";

export default function ProjectArchive() {
  const projects = useDatabaseData<Project>({
    getAction: () => getProjectsAction({ limit: 100 }),
    key: "projects",
  });

  console.log({ projects });
  return (
    <div>
      <div className="px-4 lg:px-48 min-h-screen pt-32 lg:pt-16 pb-16">
        <Link href="/">
          <b>Back to Homepage</b>
        </Link>

        <h1 className={`${fonts.title.className} text-[#eeeeee] text-6xl mt-4`}>
          All Projects
        </h1>

        <hr />
      </div>

      <table className="border-2">
        <tr>
          <td>Title</td>
          <td>Subtitle</td>
          <td>Skills</td>
        </tr>
        <tr></tr>
      </table>
    </div>
  );
}
