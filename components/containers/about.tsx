"use client"

import { useState } from "react"
import Badge from "../buttons/badge";
import Link from "next/link";
import SectionHeader from "./sectionheader";
import BadgeDisplay from "./badgedisplay";

export default function About() {
  const [filter, setFilter] = useState(1);

  const technologiesILove = ["next.js", "react", "node.js", "jest", "cypress", "java", "mongodb", "sql"];
  const toolsILove = ["git/github", "vscode", "intellij", "figma", "turbopack", "vercel"];
  const subjectsIHaveStudied = ["building useable software", "computer systems", "dsa", "introduction to ai",
    "entreprenurial skills", "mandarin", "italian", "anthropology"]
  const technologiesIWouldLoveToLearn = ["C#/.NET", "mobile app development"];

  const FullStackDeveloper = () => (
    <>
      <p className="text-center text-xl about-text">
        <strong>junior fullstack developer</strong> specialising in the <strong>javascript ecosystem</strong> with a good
        understanding of <strong>java</strong> and <strong>object oriented programming</strong>.
      </p>

      <div className="flex flex-col items-center gap-10">
        <BadgeDisplay title="🖥️ technologies i love." badges={technologiesILove}/>
        <BadgeDisplay title="🧰 tools i love." badges={toolsILove}/>
      </div>
    </>
  )

  const SoonToBeGraduate = () => (
    <>
      <p className="text-center text-xl about-text">
        i started off with <strong>cs50</strong> and <strong>the odin project</strong>, 
        teaching myself how to code from
        my bedroom. i was a <strong>liberal arts & natural sciences</strong> student by day (read: i studied
        a confusing combination of modules from all over the university) and a self-taught coder by night.
        over time, i was allowed to take more computer science modules at university and i landed a <strong>frontend internship at todaytix group</strong> in
        london. i swapped out a boring dissertation for the <strong>computer science final year project</strong>, 
         got really good at <strong>full stack development</strong>, graduated with a <strong>first class</strong>, and now i&apos;m looking for my
        next steps into the professional world of software development.
      </p>

      <BadgeDisplay title="🔬 subjects i have studied." badges={subjectsIHaveStudied}/>
  </>
  )

  const LifeLongLearner = () => (
    <>
      <p className="text-center text-xl about-text">
        i love learning new things, building cool stuff, and solving problems. you can check out 
        my <strong><Link href="/now">now page</Link></strong> and 
        my <strong><Link href="/digital-garden">digital garden</Link></strong> to see 
        what i&apos;m working on next. if you want to build cool stuff with me 
        then <strong><Link href="/#contact">please get in touch</Link></strong>
      </p>

      <BadgeDisplay
        title="💕 technologies i would love to learn."
        description="(and if you work with them, i would love to work with you)"
        badges={technologiesIWouldLoveToLearn}
      />
    </>
  )

  return (
    <section id="about" className="flex flex-col p-20 pt-30 pb-30 w-full justify-center items-center gap-10 bg-gradient-to-tr from-cyan-100 to-indigo-200 to-blue-200 clip-diagonal-both">
      <SectionHeader title="🌱 about me.">
          <Badge title="🛠️ full stack developer." click={() => setFilter(1)} active={filter === 1} />
          <Badge title="📜 compsci graduate." click={() => setFilter(2)} active={filter === 2} />
          <Badge title="📚 life-long learner." click={() => setFilter(3)} active={filter === 3} />
      </SectionHeader>
      
      <div className="w-full md:w-1/2 text-lg flex flex-col gap-10 items-center">
        { filter === 1 ? <FullStackDeveloper /> : filter === 2 ? <SoonToBeGraduate /> : <LifeLongLearner /> }
      </div>
   </section>
  )
}