import About from "./About";
import Projects from "./Projects";
import Experience from "./Experience";

export default function Main() {
  return (
    <div className="max-w-[1000px] mx-auto pt-24">
      <About />
      <Experience />
      <Projects />
    </div>
  );
}
