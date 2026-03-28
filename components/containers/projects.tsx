"use client"

import { projects } from "@/data/projects";
import ProjectCard from "../cards/projectcard";
import { useState } from "react";
import { Project } from "@/types/types";
import SectionHeader from "./sectionheader";
import Badge from "../buttons/badge";

export default function Projects() {
  const [fullstack, setFullstack] = useState(true);

  return (
    <section id="projects" className="flex flex-col w-full p-5 pt-30 pb-30 justify-center items-center gap-6 bg-gradient-to-b from-indigo-200 to-violet-200 clip-diagonal-both">

    <SectionHeader title="🔥 Projects">
      <Badge title="🌔 Full Stack Development" click={() => setFullstack(true)} active={fullstack} />
      <Badge title="🌖 Website Administration" click={() => setFullstack(false)} active={!fullstack}/>
    </SectionHeader>


   <section className="p-4 w-full flex justify-center">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">
      {
        projects.filter((project: Project) => (
          fullstack ?
            project.type === 'js'
            : project.type === 'website'
        )).map((project: Project, index: number) => (
          <ProjectCard key={index} project={project} />
        ))
      }
      </div>
    </section>

  </section>
  )
}