import Image from "next/image";
import DropdownMenu from "../dropdowns/dropdownmenu";

export default function HomeInfo() {
  return (
    <div className="p-5 w-full bg-gradient-to-b from-cyan-100 to-blue-200 clip-diagonal-bottom">
      <DropdownMenu />
      <div className="flex flex-col sm:flex-row  sm:justify-center sm:items-center gap-5 lg:gap-50">
        <div className="flex flex-col gap-1 font-bold text-black text-center sm:text-left">
          <h1 className="text-8xl">Hey,<br/> I&apos;m Ori</h1>
          <h2 className="text-8xl"></h2>
          <p className="text-xl font-light">I build cool things</p>
        </div>

        <div>
          <Image
            src={'/oritake4.png'}
            alt="profile picture of ori"
            height={600}
            width={600}
          />
        </div>
      </div>
    </div>
  )
}