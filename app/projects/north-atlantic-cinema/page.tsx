import Button from "@/components/buttons/button";
import BadgeDisplay from "@/components/containers/badgedisplay";
import DropdownMenu from "@/components/dropdowns/dropdownmenu";
import TitleAndDescription from "@/components/info/titleanddescription";
import Image from "next/image";

export const metadata = {
  title: 'North Atlantic Cinema'
};

export default function Page() {

  const thingsILearnt = ['Wordpress', 'WP-CLI', 'Theme Building', 'Plugin Maintanence', 'UX/UI Design', 'SEO', 'Backups', 'SFTP/FTP']

  return (
       <main>
          <DropdownMenu />

          <div className='flex flex-col items-center p-5 sm:p-0'>
    
          <div className="w-full sm:w-1/2 flex flex-col gap-5">
            <TitleAndDescription
              title='📽️ North Atlantic Cinema Website'
              description=''
            />
            
            <section className="w-full flex flex-col gap-7 about-text">
              {/* INDEPTH DESCRIPTION */}
              <div className="flex flex-col gap-2">
                <p>
                  <strong>North Atlantic Cinema</strong> is a <strong>Wordpress</strong> project designed to improve
                  the website used by my local indie cinema and boost sales through a better user experience.
                  This project was built using <strong>LocalWP</strong> to run Wordpress locally. It is still
                  a work in progress and more information and designs will be uploaded here over the next few weeks.
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

            {/* SETUP */}
            <section className="w-full flex flex-col gap-7 about-text">
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl">Initial Set Up</h3>
                <p>
                  To set up this site, I installed <strong>LocalWP</strong>, created a new site, and set up relevant admin and author
                  accounts with permissions according to best practices. I added a theme and customised it using
                  the <strong>Colibri Page Builder</strong> plugin. I then installed <strong>YoastSEO</strong> for 
                  SEO, <strong>Wordfence</strong> for security, <strong>WP-Optimise</strong> for
                   caching and optimisation, and <strong>Updraft</strong> for backups and restoration.
                </p>
              </div>
              <Image
                src={'/projects/north-atlantic-cinema/demo1.png'}
                alt="Website Screenshot"
                height={900}
                width={900}
              />

               <Image
                src={'/projects/north-atlantic-cinema/demo2.png'}
                alt="Website Screenshot"
                height={900}
                width={900}
              />
            </section>

            {/* SECURITY AND OTHER STUFF */}
            <section className="w-full flex flex-col gap-7 about-text">
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl">Security</h3>
                <p>
                  Using <strong>Wordfence</strong>, I configured the firewalls and set up 
                  automated security scans. Since this is hosted locally, I used a self-signed 
                  certificate to connect through <strong>SSL</strong>, with the aim to move 
                  to something more robust upon hosting. I also resolved a plugin conflict  
                  using <strong>debug logs</strong> and <strong>WP-CLI</strong>.
                </p>
              </div>
            </section>
          </div>
          </div>
        </main>
  )
}