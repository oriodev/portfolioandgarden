import { ReactNode } from "react";

interface Props {
  title: string;
  children?: ReactNode
}

export default function SectionHeader({ title, children }: Props) {
  return (
    <div className="flex flex-col items-center gap-5">
      <h2 className="text-6xl font-bold pt-10 text-center">{ title }</h2> 
      <div className="flex flex-wrap justify-center gap-2">
        { children }
      </div>
    </div>
  )
}