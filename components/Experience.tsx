import Image from "next/image";
import { MutableRefObject, useEffect, useState } from "react";

import { useIntersectionObserver } from "@/utils/hooks/useIntersectionObserver";
import { useDatabaseData } from "@/utils/hooks/useDatabaseData";
import { getExperiencesAction } from "@/app/_actions";
import { dateFormatter } from "@/utils/constants";
import { Experience } from "@/models/Experience";
import { fonts } from "@/utils/fonts";
import LoadingSpinner from "./LoadingSpinner";

const imgClassNames = [
  "rounded-xl",
  "rounded-tr-[3rem] rounded-bl-[3rem]",
  "rounded-full",
];

export default function Experiences({ innerRef }: ExperiencesProps) {
  const intersector = useIntersectionObserver(innerRef, {});
  const isVisible = intersector?.isIntersecting;

  const experiences = useDatabaseData<Experience>({
    getAction: getExperiencesAction,
    key: "experiences",
  });

  return (
    <div
      ref={innerRef}
      className={`mt-16 transform transition duration-1000 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <h2 className={`text-light text-4xl ${fonts.title.className} mb-4`}>
        EXPERIENCE
        <hr className="mt-1" />
      </h2>
      <ul
        className={`transform transition duration-1000 ${
          experiences.fetched ? "opacity-100" : "opacity-0"
        }`}
      >
        {experiences.fetched ? (
          experiences.data.map(
            (
              {
                title,
                description,
                employer,
                skills,
                logo,
                logoBg,
                startDate,
                endDate,
              },
              i
            ) => (
              <li
                key={`${employer}-${title}-employer`}
                className="p-4 pr-12 bg-[#253956] rounded-md mb-4 text-white select-none"
              >
                <div className={`${logoBg ? "py-4" : ""} lg:py-0`}>
                  <div className="flex flex-col items-center justify-center text-center lg:flex-row lg:text-left mb-4">
                    <div
                      className={`w-[128px] h-[128px] flex items-center justify-center lg:mr-12 ${imgClassNames[i]}`}
                    >
                      <Image
                        className={`rounded-md ${logoBg ? "mb-8" : ""} lg:my-0`}
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
                          {dateFormatter.format(Date.parse(startDate))} -{" "}
                          {endDate
                            ? dateFormatter.format(Date.parse(endDate))
                            : "Present"}
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
                    <li
                      key={`${employer}-skill-${skill}`}
                      className="m-2 bg-slate-500 px-4 py-px rounded-lg"
                    >
                      <small className="font-bold">{skill}</small>
                    </li>
                  ))}
                </ul>
              </li>
            )
          )
        ) : (
          <div
            className={`flex justify-center transform transition duration-1000 ${
              experiences.fetched ? "opacity-0" : "opacity-100"
            }`}
          >
            <LoadingSpinner />
          </div>
        )}
      </ul>
    </div>
  );
}

type ExperiencesProps = {
  innerRef: MutableRefObject<HTMLDivElement | null>;
};
