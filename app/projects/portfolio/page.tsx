import Button from "@/components/buttons/button";
import BadgeDisplay from "@/components/containers/badgedisplay";
import DropdownMenu from "@/components/dropdowns/dropdownmenu";
import TitleAndDescription from "@/components/info/titleanddescription";
import Image from "next/image";

export const metadata = {
  title: "Romeo's Books"
};

export default function Page() {

  const thingsILearnt = ["Next.js/React", "HTML/CSS", "Cloudflare", "Google Analytics 4", 
    "Vercel Hosting", "Github", "DNS", "UX/UI Design"
  ]

  return (
       <main>
          <DropdownMenu />

          <div className='flex flex-col items-center p-5 sm:p-0'>
    
          <div className="w-full sm:w-1/2 flex flex-col gap-5">
            <TitleAndDescription
              title='🐳 Portfolio Site'
              description=''
            />
            
            <section className="w-full flex flex-col gap-7 about-text">
              {/* INDEPTH DESCRIPTION */}
              <div className="flex flex-col gap-2">
                <p>
                  <strong>My portfolio</strong> is a <strong>Next.js</strong> site designed to 
                  host my portfolio projects, resume, and act as a landing page for my professional 
                  online presence. It uses <strong>Google Analytics</strong> to see who's poking 
                  around, <strong>Cloudflare</strong> to keep the bots out, and <strong>Vercel</strong> for 
                  hosting. You can find a digital garden of blog posts and my 'now' page alongside my 
                  projects, certifications, and resume.
                </p>
              </div>

              {/* PROJECT LINKS */}
              {/* <div className="flex flex-col sm:flex-row w-full gap-2">
                <Button text="Investor Proposal" link="/projects/conkr/proposal.pdf" active/>
                <Button text="Figma App Mockup" link="https://www.figma.com/proto/1o2ixlFky40JKlBj3oUCTN/CONKR-FULL-APP-MOCKUP?node-id=122-938&starting-point-node-id=109%3A2225&t=0mL0xFFd8UzbGEpF-1" active/>
                <Button text="Finance Spreadsheet" link="/projects/conkr/finances.xlsx" active/>
              </div> */}
              
              <div className="w-full p-5 rounded-lg bg-gradient-to-tr from-cyan-100 to-indigo-200 to-blue-200">
                <BadgeDisplay
                  title="Skills I Developed"
                  badges={thingsILearnt}
                />
              </div>
            </section>

            {/* INITIAL SET UP */}
            <section className="w-full flex flex-col gap-7 about-text">
              <div className="flex flex-col gap-2">
                {/* <h3 className="text-2xl">Initial Set Up</h3>
                <p>
                  To set up this site, I made a <strong>Shopify</strong> development site, 
                  created a new site, and added a variety of book products with pricing, variants,
                  and suitable metadata to then sort the products into <strong>collections</strong>. I
                  then installed a theme, created a <strong>custom product template</strong> with blocks, and
                  customised the home page and about pages.
                </p> */}
              </div>
              <Image
                src={'/projects/portfolio/portfoliocover.png'}
                alt="Website Screenshot"
                height={900}
                width={900}
              />
            </section>

          </div>
          </div>
        </main>
  )
}