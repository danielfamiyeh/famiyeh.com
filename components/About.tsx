import Image from "next/image";
import { fonts } from "@/utils/fonts";

export default function About() {
  return (
    <>
      <div className="flex flex-col items-center lg:flex-row justify-between mb-36">
        <div className="lg:w-4/12">
          <Image
            className="rounded-full mb-16 lg:mb-0"
            alt="Picture of Daniel Famiyeh"
            src="/profile.jpg"
            width={400}
            height={400}
          />
        </div>
        <div className="lg:w-2/12"></div>
        <div className="lg:w-6/12 text-center lg:text-left">
          <h1 className={`${fonts.title.className} text-[#eeeeee] text-6xl`}>
            Welcome!
          </h1>
          <p className="text-white mt-4">
            Meet John Hawkins, the virtuoso behind these sleek web creations. An
            expert in minimalism, John combines form and function to weave
            digital dreams into reality.
          </p>
        </div>
      </div>
    </>
  );
}
