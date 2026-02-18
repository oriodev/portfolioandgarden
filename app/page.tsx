import About from "@/components/containers/about";
// import Certificates from "@/components/containers/certificates";
import Contact from "@/components/containers/contact";
import Projects from "@/components/containers/projects";
import HomeInfo from "@/components/info/homeinfo";

export default function Home() {

  return (
    <main className="flex flex-col gap-10 justify-center items-center mt-0">
      <HomeInfo />
      <About />
      <Projects />
      {/* <Certificates /> */}
      <Contact />
    </main>
  );
}
