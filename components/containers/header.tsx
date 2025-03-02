"use client"

import Link from "next/link"
import { links } from "@/data/links"
import { useState } from "react"
import Hamburger from "../buttons/hamburger";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };


    return (
      <div id='top' className="h-[50px] sm:h-[90px] p-7 flex bg-white">
        {/* TODO: ON MOBILE, DISPLAY MAIN LINKS WHERE MAIN IS TRUE + HAMBURGER DROPDOWN MENU */}
        {/* add hidden sm:flex back in */}
        <div className="flex flex-grow flex-wrap justify-center gap-5 font-bold text-cyan-700">
          {
            links.map((link) => (
              <Link key={link.title} href={link.slug} className="hover:text-cyan-800 effect-shine transition">
                <p>{link.title}</p>
              </Link>
            ))
          }
        </div>
        {/* add block sm:hidden */}
        <div className="hidden">
            <Hamburger isOpen={isOpen} handleClick={handleClick}/>
        </div>
      </div>
    )
}
