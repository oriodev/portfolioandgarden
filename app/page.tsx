import Image from "next/image";

export default function Home() {


  return (
    <main className="flex flex-col justify-center items-center mt-5 sm:mt-0">
      <section className="flex flex-col sm:flex-row w-full h-[625px] md:h-[600px] p-5 sm:justify-center sm:items-center gap-5 lg:gap-50 bg-gradient-to-tr from-cyan-100 to-indigo-300 to-blue-400 clip-diagonal">
          <div className="flex flex-col gap-1 font-bold text-black text-center sm:text-left">
            <h1 className="text-8xl">hey,<br/> i&apos;m ori.</h1>
            <h2 className="text-8xl"></h2>
            <p className="text-xl font-light">i build cool things.</p>
          </div>

          <div>
            <Image
              src={'/oritake4.png'}
              alt="profile picture of ori"
              height={600}
              width={600}
            />
          </div>
      </section>
      

    </main>
  );
}
