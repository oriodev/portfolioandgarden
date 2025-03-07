import { ReactNode } from "react";

interface Props {
  title: string;
  children?: ReactNode
  homepage?: boolean
}

export default function SectionHeader({ title, children, homepage = true }: Props) {
  return (
    <div className="flex flex-col items-center gap-5">
      <h2 className={`${homepage ? "text-6xl" : "text-3xl"} font-bold pt-10 text-center`}>{ title }</h2> 
      <div className="flex flex-wrap justify-center gap-2">
        { children }
      </div>
    </div>
  )
}