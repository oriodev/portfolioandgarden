import Diagonal from "@/components/containers/diagonal";
import Projects from "@/components/containers/projects";
import HomeInfo from "@/components/info/homeinfo";

export default function Home() {

  return (
    <main className="flex flex-col gap-10 justify-center items-center mt-5 sm:mt-0">
      <Diagonal>
        <HomeInfo />
      </Diagonal>

      <Projects />

    <div className="h-10">
    </div>
    </main>
  );
}
