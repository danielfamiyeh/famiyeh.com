import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    title: "Full-stack Developer",
    employer: "Podaris Limited",
    description: [
      "test asdfasdf safdasdf asdfasfd",
      "teasdfst",
      "tesasdft",
      "tesadsfsdft",
    ],
    skills: [
      "JavaScript ES6+",
      "Python 3",
      "MeteorJS",
      "Blaze",
      "NodeJS",
      "MongoDB",
      "Docker",
    ],
    logo: "/logos/podaris.png",
    startDate: new Date("2023/02/27"),
    endDate: new Date("2023/08/18"),
  },
  {
    title: "Software Engineer",
    employer: "Base Plus Limited",
    description: [
      "Led the redevelopment of a cross-platform, mobile skincare diary using React Native, resulting in a modernised UI and improved feature set.",
      "Revitalised a legacy Node-based server, implementing performance enhancements and error reduction strategies to improve overall load efficiency.",
      "Bootstrapped a metrics dashboard using React and Node, effectively visualising key performance indicators to provide insight into product performance and inform strategic decision making.",
    ],
    logo: "/logos/base.jpg",
    startDate: new Date("2022/10/01"),
    endDate: new Date("2023/01/31"),
    skills: [
      "JavaScript ES6+",
      "TypeScript",
      "React Native",
      "MongoDB",
      "NodeJS",
      "Heroku",
      "Amazon Web Services (AWS)",
      "Google Cloud Platform (GCP)",
    ],
  },
  {
    title: "Software Engineer",
    employer: "Cambridge Kinetics Limited",
    description: [
      "Successfully managed complex, high-value projects, ensuring that solutions met the needs of clients.",
      "Demonstrated strong leadership skills by spearheading the development of exceptional web applications for both clients and company products, utilising my extensive knowledge and experience in software development.",
      "Committed to fostering a positive and productive work environment, provided mentorship and guidance to junior developers to support their professional growth and development.",
    ],
    logo: "/logos/ck.png",
    startDate: new Date("2021/10/01"),
    endDate: new Date("2022/09/30"),
    skills: [
      "JavaScript ES6+",
      "TypeScript",
      "MeteorJS",
      "ReactJS",
      "React Native",
      "MongoDB",
    ],
  },
  {
    title: "JavaScript Developer",
    employer: "Cambridge Software Limited",
    description: [
      "Acted as a primary point of contact for clients, effectively gathering requirements and feature scoping upcoming projects.",
      "Collaborated closely with the technical lead to design and deliver high-quality software solutions that met the needs of clients.",
      "Provided ongoing support and maintenance for developed systems, ensuring that they remained stable and reliable.",
      "Implemented new features on Cambridge Software's flagship CRM platform, utilising my expertise in web development to improve the platform's functionality and user experience.",
      "Led the refactoring of extensive Blaze templates into modern React components, improving the overall maintainability and performance of the codebase.",
      "Actively participated in team sprints, adhering to Agile methodologies and contributing to the team's overall workflow and productivity.",
    ],
    logo: "/logos/cs.png",
    startDate: new Date("2021/04/01"),
    endDate: new Date("2022/09/30"),
    skills: ["JavaScript ES6+", "MeteorJS", "ReactJS", "Blaze", "MongoDB"],
  },
  {
    title: "Software Engineer",
    employer: "Atmel Corporation",
    description: [
      "Architected a command-line interface (CLI) and over-the-air (OTA) testing utility for the remote control of a set-top box, streaming player.",
      "Gained valuable experience in test-driven development, project management, and the various lifecycle phases of software development.",
    ],

    logo: "/logos/atmel.png",
    startDate: new Date("2014/09/01"),
    endDate: new Date("2014/10/10"),
    skills: ["Python 2", "Git", "Internet of Things (IoT)"],
  },
];
