import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full max-w-[1200px] mx-auto flex-col py-8 px-4 lg:px-48">
      <Navbar />
      <Hero />
    </main>
  );
}
