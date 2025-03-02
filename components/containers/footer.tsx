"use client"

import Badge from "../buttons/badge";
import Copyright from "../info/copyright";

export default function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="flex w-full justify-center items-end h-[200px] sm:h-[150px] bg-gradient-to-tr from-cyan-100 to-indigo-200 clip-diagonal-top">
      <div className="flex flex-wrap justify-center items-center gap-5 md:gap-20 p-5 pb-10">
        <p className="font-bold">thanks for stopping by 🩵</p>
        <Badge title="🏹 back to top" click={scrollToTop} />
        <Copyright />
      </div>
    </footer>
  )
}