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
            title='📜 Resume'
            description='Professional experience, voluntary work and education'
          />

          <div className="flex flex-col sm:flex-row w-full gap-2">
            <Button text="📑 Dev CV" link="/devcv.pdf" active/>
            <Button text="📑 Web Admin CV" link="/webcv.pdf" active/>
            <Button text="⚗️ GitHub" link="https://github.com/oriodev" active/>
            <Button text="🖇️ LinkedIn" link="https://www.linkedin.com/in/ori-daniels-89676729b/" active/>
          </div>

          <section className="flex flex-col gap-5 about-text">

            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold">🏛️ Professional experience</h2>
              <p><strong>Freelance Web Designer</strong> (2024-2025)</p>
              <p><strong>Frontend Developer Intern</strong> @ TodayTix Group (2024)</p>
              <p><strong>Junior Project Manager</strong> @ Community Money Advice (2023-2024)</p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold">🗃️ Voluntary experience</h2>
              <p><strong>Voluntary JavaScript/Coldfusion Developer</strong> @ Flint Hospitality (2025-2026)</p>
              <p><strong>Front of House and Junior Debt Adviser</strong> @ Riverside Money Advice (2023)</p>
              <p><strong>Society President</strong> @ Liberal Arts and Natural Sciences Society (2022)</p>
              <p><strong>English Language Tutor</strong> @ Kadir Has University, Istanbul (2022)</p>
              <p><strong>Online Shop Coordinator</strong> @ Oxfam, Scarborough (2018-2020)</p>
            </div>
            
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold">🎓 Education</h2>
              <p><strong>BA Liberal Arts and Natural Sciences with year in Computer Science (First Class)</strong> @ University of Birmingham (2020-2025)</p>
              <p><strong>A levels — Law, Politics, Ancient History; EPQ (A*AAB)</strong> @ York College (2018-2020)</p>
            </div>

          </section>

        </div>
      </div>
    </main>
  )
}
