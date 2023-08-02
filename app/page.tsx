import Hero from "@/components/Hero";
import Main from "@/components/Main";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <div className="px-4 lg:px-48 fixed w-full bg-[#f0ebd8] ">
        <Navbar />
      </div>
      <div className="px-4 lg:px-48 min-h-screen pt-32 lg:pt-16 pb-16 bg-[#f0ebd8]">
        <Hero />
      </div>
      <div className="min-h-screen w-full bg-[#1D2D44] px-4 lg:px-48 pb-16">
        <Main />
      </div>
    </main>
  );
}
