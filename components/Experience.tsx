import Image from "next/image";

import { fonts } from "@/utils/fonts";
import { experiences } from "@/data/experience";
import { dateFormatter } from "@/utils/constants";

const imgClassNames = [
  "rounded-xl",
  "rounded-tr-[3rem] rounded-bl-[3rem]",
  "rounded-full",
];

export default function Experiences() {
  return (
    <div className="mt-16">
      <h2 className={`text-light text-4xl ${fonts.title.className} mb-4`}>
        EXPERIENCE
        <hr className="mt-1" />
      </h2>
      <ul>
        {experiences.map(
          (
            { title, description, employer, skills, logo, startDate, endDate },
            i
          ) => (
            <li
              key={`experience-${title}-employer`}
              className="p-4 pr-12 bg-[#253956] rounded-md mb-4 text-white select-none"
            >
              <div>
                <div className="flex items-center justify-center mb-4">
                  <div
                    className={`w-[128px] h-[128px] flex items-center justify-center mr-12 ${imgClassNames[i]}`}
                  >
                    <Image
                      className="rounded-md"
                      alt={`${employer}-logo`}
                      src={logo}
                      width={128}
                      height={128}
                    />
                  </div>
                  <div>
                    <div>
                      <h3 className="text-xl">{title}</h3>
                      <p className="m-0">{employer}</p>
                      <small>
                        {dateFormatter.format(startDate)} -{" "}
                        {endDate ? dateFormatter.format(endDate) : "Present"}
                      </small>
                    </div>
                  </div>
                </div>

                <div className="px-8">
                  {description.map((description) => (
                    <p
                      key={`${employer}-${description}`}
                      className="text-center mt-2"
                    >
                      {description}
                    </p>
                  ))}
                </div>
              </div>

              <hr className="my-3" />
              <ul className="flex flex-wrap justify-center">
                {skills.map((skill) => (
                  <li key={`${employer}-skill-${skill}`} className="mx-2">
                    <small className="font-bold">{skill}</small>
                  </li>
                ))}
              </ul>
            </li>
          )
        )}
      </ul>
    </div>
  );
}