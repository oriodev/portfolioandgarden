import Button from "@/components/buttons/button";
import BadgeDisplay from "@/components/containers/badgedisplay";
import DropdownMenu from "@/components/dropdowns/dropdownmenu";
import TitleAndDescription from "@/components/info/titleanddescription";
import Image from "next/image";

export const metadata = {
  title: 'CONKR'
};

export default function Page() {

  const thingsILearnt = ['Figma App Mockups', 'Analytics', 'Conversion Rate Optimisation', 'Investor Pitching', 'Wordpress Development', 'SEO', 'Excel Automation', 'Risk Mitigation', 'User Research', 'Social Media Marketing', 'Market Research', 'Report Writing']

  return (
       <main>
          <DropdownMenu />

          <div className='flex flex-col items-center p-5 sm:p-0'>
    
          <div className="w-full sm:w-1/2 flex flex-col gap-5">
            <TitleAndDescription
              title='💪 CONKR Start Up'
              description=''
            />
            
            <section className="w-full flex flex-col gap-7 about-text">
              {/* INDEPTH DESCRIPTION */}
              <div className="flex flex-col gap-2">
                <p>
                  <strong>CONKR</strong> was developed as part of a university module at the <strong>University of Birmingham</strong>. I acted as
                  the <strong>Chief Technical Adviser</strong> as part of a group of three. We had to develop, market, and pitch our idea
                  to <strong>two panels of investors</strong>. We got the <strong>highest grade</strong> out of the cohort.
                </p>

                <p>
                  CONKR is a <strong>mobile app</strong> that guides you into and through the gym with an <strong>encouraging, supportive voice in your ear</strong>.
                  It takes you through preparing for the gym, getting into the gym, and setting up; 
                  then through a range of workouts, <strong>designed to get you comfortable with a range of gym equipment and exercises</strong>. 
                  CONKR is not about making you a gym rat, it’s about getting you comfortable and confident in the gym.
                </p>
              </div>

              {/* PROJECT LINKS */}
              <div className="flex flex-col sm:flex-row w-full gap-2">
                <Button text="Investor Proposal" link="/projects/conkr/proposal.pdf" active/>
                <Button text="Figma App Mockup" link="https://www.figma.com/proto/1o2ixlFky40JKlBj3oUCTN/CONKR-FULL-APP-MOCKUP?node-id=122-938&starting-point-node-id=109%3A2225&t=0mL0xFFd8UzbGEpF-1" active/>
                <Button text="Finance Spreadsheet" link="/projects/conkr/finances.xlsx" active/>
              </div>
              
              <div className="w-full p-5 rounded-lg bg-gradient-to-tr from-cyan-100 to-indigo-200 to-blue-200">
                <BadgeDisplay
                  title="Skills I Developed"
                  badges={thingsILearnt}
                />
              </div>

              <Image
                src={'/projects/conkr/website.png'}
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