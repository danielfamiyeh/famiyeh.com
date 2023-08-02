import { fonts } from "@/utils/fonts";
import Projects from "./Projects";

export default function Main() {
  return (
    <div className="max-w-[1000px] mx-auto pt-24">
      <div className="flex justify-between mb-36">
        <div className="w-4/12">Image</div>
        <div className="w-2/12"></div>
        <div className="w-6/12">
          <h1 className={`${fonts.title.className} text-[#f0ebd8] text-6xl`}>
            Welcome!
          </h1>
          <p className="text-white mt-4">
            Meet John Hawkins, the virtuoso behind these sleek web creations. An
            expert in minimalism, John combines form and function to weave
            digital dreams into reality.
          </p>
        </div>
      </div>
      <Projects />
    </div>
  );
}
