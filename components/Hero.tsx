import { COLORS } from "@/utils/constants";
import { Climate_Crisis } from "next/font/google";

const climateCrisis = Climate_Crisis({ subsets: ["latin"] });

export default function Hero() {
  return (
    <div className="flex flex-col">
      <div
        className={`text-center lg:text-8xl md:text-6xl text-4xl border-2 border-black rounded-3xl select-none py-4 ${climateCrisis.className}`}
      >
        FAMIYEH
      </div>

      <div className="mt-4 flex flex-col">
        <div className="flex">
          <div className="text-white w-7/12 bg-[#131313] p-20 rounded-b-[4rem] rounded-tl-[4rem]">
            <div className="bg-slate-200 h-px w-12 mb-4 mt-24" />
            Embrace the power of simplicity with the Bauhaus minimalist web
            developer portfolio. Showcasing skills and projects in a clean,
            functional, and modern style
          </div>

          <div className="w-1/12" />
          <div className="w-4/12 bg-[#131313] p-20 rounded-tr-[10rem] rounded-bl-[10rem]" />
        </div>
      </div>
    </div>
  );
}
