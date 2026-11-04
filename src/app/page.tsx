import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col w-full">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
