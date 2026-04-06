"use client"

import { Certificate } from "@/types/types";
import SectionHeader from "./sectionheader";
import CertCard from "../cards/certcard";

export default function Certificates() {

  const certificates: Certificate[] = [
    {
      title: 'Hubspot Academy SEO',
      description: 'Certifies SEO understanding and ability to optimise a website to perform well in search engines.',
      image: '/certs/seocert.png'
    }
  ];

  return (
    <section id="projects" className="flex flex-col w-full p-5 pt-30 pb-30 justify-center items-center gap-6 bg-gradient-to-bl from-violet-200 to-indigo-200 clip-diagonal-both">

    <SectionHeader title="🏆 Certifications">
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