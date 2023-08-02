import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Solidus",
    subtitle: "Social network dApp built with Solidity, NextJS and TailwindCSS",
    description: [],
    skills: ["Solidity", "TypeScript", "ReactJS", "NextJS", "TailwindCSS"],
    images: [
      "https://raw.githubusercontent.com/danielfamiyeh/solidus/main/media/screenshots/home.png",
      "https://raw.githubusercontent.com/danielfamiyeh/solidus/main/media/screenshots/neoprofile.png",
    ],
    startDate: new Date("2023/02/01"),
    endDate: new Date("2023/03/01"),
    links: [
      { site: "GitHub", url: "https://github.com/danielfamiyeh/solidus" },
    ],
  },
  {
    title: "famiyeh.com",
    subtitle:
      "Full-stack software portfolio site written with NextJS and TailwindCSS",
    description: [],
    skills: ["TypeScript", "ReactJS", "NextJS", "MongoDB"],
    images: [],
    startDate: new Date("2023/08/01"),
    links: [
      { site: "GitHub", url: "https://github.com/danielfamiyeh/famiyeh.com" },
    ],
  },
];
