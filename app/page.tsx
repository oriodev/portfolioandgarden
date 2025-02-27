import Diagonal from "@/components/containers/diagonal";
import HomeInfo from "@/components/info/homeinfo";

export default function Home() {


  return (
    <main className="flex flex-col justify-center items-center mt-5 sm:mt-0">
      <Diagonal>
        <HomeInfo />
      </Diagonal>
    </main>
  );
}
