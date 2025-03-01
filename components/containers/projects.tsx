"use client"

import { projects } from "@/data/projects";
import ProjectCard from "../cards/projectcard";
import { useState } from "react";
import { Project } from "@/types/types";
import SectionHeader from "./sectionheader";
import Badge from "../buttons/badge";

export default function Projects() {
  const [javascript, setJavascript] = useState(true);

  return (
    <section id="projects" className="flex flex-col w-full p-5 pt-30 pb-30 justify-center items-center gap-6 bg-gradient-to-tr from-cyan-100 to-indigo-200 to-blue-200 clip-diagonal-both">

    <SectionHeader title="🔥 projects.">
      <Badge title="🎉 javascript." click={() => setJavascript(true)} active={javascript} />
      <Badge title="🚧 java." click={() => setJavascript(false)} active={!javascript}/>
    </SectionHeader>


   <section className="p-4 w-full flex justify-center">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">
      {
        projects.filter((project: Project) => (
          javascript ?
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