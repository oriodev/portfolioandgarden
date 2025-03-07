"use client"

import Button from "@/components/buttons/button"
import DropdownMenu from "@/components/dropdowns/dropdownmenu"
import TitleAndDescription from "@/components/info/titleanddescription"

export default function Page() {

  return (
    <main className="">
      <DropdownMenu />
      <div className='flex flex-col p-5 items-center'>

        <div className="w-full md:w-2/3 lg:w-1/2 flex flex-col gap-5 items-center md:items-start">
          <TitleAndDescription
            title='📜 resume.'
            description='professional experience, voluntary work, and education.'
          />

          <div className="flex flex-col sm:flex-row w-full gap-2">
            <Button text="📑 download resume." link="/cv.pdf" active/>
            <Button text="⚗️ github." link="https://github.com/oriodev" active/>
            <Button text="🖇️ linkedin." link="https://www.linkedin.com/in/ori-daniels-89676729b/" active/>
          </div>

          <section className="flex flex-col gap-5 about-text">

            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold">🏛️ professional experience.</h2>
              <p><strong>frontend developer intern</strong> @ todaytix group.</p>
              <p><strong>freelance web designer.</strong></p>
              <p><strong>junior project manager</strong> @ community money advice.</p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold">🗃️ voluntary experience.</h2>
              <p><strong>society president</strong> @ liberal arts and natural sciences society.</p>
              <p><strong>english language tutor</strong> @ kadir has university, istanbul.</p>
              <p><strong>front of house and junior debt adviser</strong> @ riverside money advice.</p>
              <p><strong>online shop coordinator</strong> @ oxfam, scarborough.</p>
            </div>
            
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold">🎓 education.</h2>
              <p><strong>ba liberal arts and natural sciences w/ year in computer science</strong> @ university of birmingham.</p>
              <p><strong>a levels; law, politics, ancient history, epq; a*aab</strong> @ york college.</p>
            </div>


          </section>

        </div>
      </div>
    </main>
  )
}