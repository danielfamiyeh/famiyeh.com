import { Project } from "@/types";

const projects: Project[] = [
  { title: "Rose", description: "Typescript bioinformatics library" },
  { title: "Cloe", description: "Mobile skincare diary" },
  {
    title: "Solidus",
    description: "Proof-of-concept, social network dApp",
  },
];

const imgClassNames = [
  "rounded-xl",
  "rounded-tr-[3rem] rounded-bl-[3rem]",
  "rounded-full",
];

export default function Projects() {
  return (
    <div className="mt-16">
      <ul>
        {projects.map(({ title, description, image }, i) => (
          <li
            key={`project-${title}`}
            className="p-4 pr-12 bg-[#253956] rounded-md mb-4 text-white flex items-center justify-between select-none cursor-pointer"
          >
            <div className="flex items-center">
              <div
                className={`border-2 w-[128px] h-[128px] flex items-center justify-center mr-12 ${imgClassNames[i]}`}
              >
                image
              </div>
              <div>
                <h3 className="text-xl">{title}</h3>
                <small className="m-0">{description}</small>
              </div>
            </div>
            <div className="text-6xl">›</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
