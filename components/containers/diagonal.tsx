import { ReactNode } from "react";

interface Props {
  children: ReactNode
}

export default function Diagonal({ children }: Props) {
  return (
    <section className="flex flex-col sm:flex-row w-full h-[625px] md:h-[600px] p-5 sm:justify-center sm:items-center gap-5 lg:gap-50 bg-gradient-to-tr from-cyan-100 to-indigo-300 to-blue-400 clip-diagonal">
        { children }
    </section>
  )
}