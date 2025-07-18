"use client"

import { Certificate } from "@/types/types";
import SectionHeader from "./sectionheader";
import CertCard from "../cards/certcard";

export default function Certificates() {

  const certificates: Certificate[] = [
    {
      title: 'sql (basic)',
      description: 'the hackerrank basic sql certification. it represents my ability to use fundamental sql concepts such as aggregations and joins.',
      image: '/'
    }
  ]

  return (
    <section id="projects" className="flex flex-col w-full p-5 pt-30 pb-30 justify-center items-center gap-6 bg-gradient-to-tr from-cyan-100 to-blue-200 to-indigo-300 clip-diagonal-both">

    <SectionHeader title="🏆 certificates.">
    </SectionHeader>


   <section className="p-4 w-full flex justify-center">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">
        {
          certificates.map((cert, index: number) => (
            <CertCard
              key={index}
              cert={cert}
            />
          ))
        }
      </div>
    </section>

  </section>
  )
}