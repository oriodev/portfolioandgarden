"use client"

import { useState } from "react"
import Badge from "../buttons/badge";
import Link from "next/link";
import SectionHeader from "./sectionheader";
import BadgeDisplay from "./badgedisplay";

export default function About() {
  const [filter, setFilter] = useState(1);

  const technologiesILove = ["Next.JS", "React", "Node.JS", "Jest", "Cypress", "Mongodb", "PostgreSQL"];
  const toolsILove = ["Git/Github", "Github Actions", "Vscode", "Figma", "Turbopack", "Vercel"];
  const webAdminTechnologiesILove = ["Wordpress", "Shopify", "Google Analytics", "Figma"]
  const subjectsIHaveStudied = ["Building Useable Software", "Computer Systems", "DSA", "Intro to AI",
    "Entreprenurial Skills", "Building a Start Up", "Mandarin", "Italian", "Anthropology"]

  const FullStackDeveloper = () => (
    <>
      <p className="text-center text-xl about-text">
        <strong>Junior Fullstack Developer</strong> specialising in the <strong>Javascript ecosystem</strong> with a strong
        proficiency in <strong>React</strong>, <strong>Node.JS</strong>, and both <strong>SQL and Non-SQL Databases</strong>.
        Solid understanding of <strong>AWS</strong> services and principles.
      </p>

      <div className="flex flex-col items-center gap-10">
        <BadgeDisplay title="🖥️ Technologies I Love" badges={technologiesILove}/>
        <BadgeDisplay title="🧰 Tools I Love" badges={toolsILove}/>
      </div>
    </>
  )

  const WebsiteAdministrator = () => (
    <>
      <p className="text-center text-xl about-text">
        <strong>Website Administrator</strong> specialising in building and 
        maintaining <strong>Wordpress</strong> and <strong>Wix</strong> websites,
        with a strong proficiency in <strong>UX/UI design</strong>, <strong>SEO</strong>, 
        and <strong>translating customer requirements to technical solutions</strong>. Currently learning 
        eCommerce principles with <strong>Shopify</strong>.
      </p>

      <BadgeDisplay title="🖥️ Technologies I Love" badges={webAdminTechnologiesILove}/>
    </>
  )

  const CompsciGraduate = () => (
    <>
      <p className="text-center text-xl about-text">
        I started with <strong>CS50</strong> and <strong>The Odin Project</strong>, 
        teaching myself how to code from my bedroom. I was a Liberal Arts and Natural
        Sciences student, which meant I studied a weird combination of subjects from
        across the university. Without a Maths A Level, I wasn't allowed to take
        Computer Science modules: however, I persisted with my self-study and over time, I 
        was able to take more and more Computer Science modules. 
      </p>


      <p className="text-center text-xl about-text">
        Off the back of that, I landed a <strong>Frontend Developer Internship at TodayTix</strong>.
        The university let me swap a dissertation for the <strong>Computer Science Final Year Project</strong>.
        I started freelancing as a Website Administrator, got really good at <strong>Full Stack Development</strong>,
        and graduated with a <strong>First Class</strong>. Now I&apos;m looking for my next steps 
        into the professional world of software development and website administration.
      </p>
      
      <BadgeDisplay title="🔬 Subjects I Have Studied" badges={subjectsIHaveStudied}/>
  </>
  )

  return (
    <section id="about" className="flex flex-col p-20 pt-30 pb-30 w-full justify-center items-center gap-10 bg-gradient-to-b from-blue-200 to-indigo-200 clip-diagonal-both">
      <SectionHeader title="🌱 About Me">
          <Badge title="🛠️ Full Stack Developer" click={() => setFilter(1)} active={filter === 1} />
          <Badge title="💻 Website Administrator" click={() => setFilter(2)} active={filter === 2} />
          <Badge title="📜 Compsci Graduate" click={() => setFilter(3)} active={filter === 3} />

      </SectionHeader>
      
      <div className="w-full md:w-1/2 text-lg flex flex-col gap-10 items-center">
        { filter === 1 ? <FullStackDeveloper /> : filter === 2 ? <WebsiteAdministrator /> : <CompsciGraduate /> }
      </div>
   </section>
  )
}