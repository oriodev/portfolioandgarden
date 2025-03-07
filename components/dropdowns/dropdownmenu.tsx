"use client"

import { links } from "@/data/links";
import Link from "next/link";
import { useEffect, useState } from "react";
import Hamburger from "../buttons/hamburger";

export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
      setIsOpen(!isOpen);
  };

  useEffect(function disableScroll () {

  }, [isOpen])

  return(
    <div className="block sm:hidden relative z-50">
    
      <Hamburger isOpen={isOpen} handleClick={handleClick} />

      {
        isOpen && (
          <div className="absolute top-5 m-5 p-5 bg-white rounded-lg border-2 border-cyan-700">

            <div className="flex flex-col items-center gap-5 font-bold text-cyan-700">
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

    </div>
  )
}