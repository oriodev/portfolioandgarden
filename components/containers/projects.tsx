"use client"

import { projects } from "@/data/projects";
import ProjectCard from "../cards/projectcard";
import { useState } from "react";
import { Project } from "@/types/types";
import ProjectTypeFilters from "../buttons/projecttypefilters";

export default function Projects() {
  const [javacript, setJavascript] = useState(true);

  return (
    <section id="projects" className="flex flex-col w-full p-5 pt-20 justify-center items-center gap-6 bg-gradient-to-tr from-cyan-100 to-indigo-200 to-blue-200 clip-diagonal-down">

    <div className="flex flex-col items-center gap-5">
      <h2 className="text-6xl font-bold pt-10">🔥 projects.</h2> 
      <ProjectTypeFilters setJavascript={setJavascript} />
    </div>

   <section className="p-4 w-full flex justify-center">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">
      {
        projects.filter((project: Project) => (
          javacript ?
            project.type === 'js'
            : project.type === 'java'
        )).map((project: Project, index: number) => (
          <ProjectCard key={index} project={project} />
        ))
      }
      </div>
    </section>

  </section>
  )
}