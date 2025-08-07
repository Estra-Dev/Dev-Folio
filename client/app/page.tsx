import Header from "@/components/Header";
import Skills from "@/components/Skills";
import About_Me from "@/components/About_Me";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="">
      <Header />
      <About_Me />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
