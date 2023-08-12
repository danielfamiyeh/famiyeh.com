import { useEffect } from "react";

import Link from "@/components/Link";
import { fonts } from "@/utils/fonts";

export default function ProjectArchive() {
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
