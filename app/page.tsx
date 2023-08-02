import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen w-screen flex-col py-24 px-48">
      <Navbar />
      <Hero />
    </main>
  );
}
