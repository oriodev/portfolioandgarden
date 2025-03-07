import Link from "next/link"
import { links } from "@/data/links"

export default function Header() {

    return (
      <div id='top' className="hidden sm:flex h-[50px] sm:h-[90px] p-7 flex sm:bg-white sticky z-10 top-0">
        <div className="flex flex-grow flex-wrap justify-center gap-5 font-bold text-cyan-700">
          {
            links.map((link) => (
              <Link key={link.title} href={link.slug} className="hover:text-cyan-800 effect-shine transition">
                <p>{link.title}</p>
              </Link>
            ))
          }
        </div>

      </div>
    )
}
