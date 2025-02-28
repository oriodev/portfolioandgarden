import { Project } from "@/types";
import Image from "next/image";

import Button from "@/components/buttons/button";

interface Props {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  return (
    <div  className="bg-white rounded-lg p-5 flex flex-col gap-2 justify-between">
    <div>
      <Image
        src={project.image}
        alt={project.title}
        height={700}
        width={700}
        className="rounded-lg"
      />
    </div>

    <div className="flex flex-col gap-2">
      <h3 className="text-2xl font-bold text-cyan-700">{project.title}</h3>
      <p className="text-lg">{project.description}</p>
    </div>

    <div className="flex flex-wrap gap-2">
      {
        project.livedemo ? (
          <Button link={project.livedemo} text="🎬 see demo" active={true} />
        ) : (
          <Button link={'#'} text="🚧 demo in progress" active={false} />
        )
      }
      <Button link={project.github} text="💾 github" active={true} />
    </div>
  </div>
  )
}