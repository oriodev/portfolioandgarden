import Button from "@/components/buttons/button";
import BadgeDisplay from "@/components/containers/badgedisplay";
import DropdownMenu from "@/components/dropdowns/dropdownmenu";
import TitleAndDescription from "@/components/info/titleanddescription";
import Image from "next/image";

export const metadata = {
  title: "Romeo's Books"
};

export default function Page() {

  const thingsILearnt = ['Shopify', 'Theme Customisation', "Google Analytics", "Email Marketing",
    "Conversion Rate Optimisation", "AI Tools"
  ]

  return (
       <main>
          <DropdownMenu />

          <div className='flex flex-col items-center p-5 sm:p-0'>
    
          <div className="w-full sm:w-1/2 flex flex-col gap-5">
            <TitleAndDescription
              title='📚 Romeo&apos;s Books'
              description=''
            />
            
            <section className="w-full flex flex-col gap-7 about-text">
              {/* INDEPTH DESCRIPTION */}
              <div className="flex flex-col gap-2">
                <p>
                  <strong>Romeo&apos;s Books</strong> is a <strong>Shopify</strong> site designed to
                  learn the ins and outs of eCommerce with Shopify. This project was built with a
                  Shopify development site. It is still a work in progress and more information and 
                  designs will be uploaded here over the next few weeks.
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
                <h3 className="text-2xl">Initial Set Up</h3>
                <p>
                  To set up this site, I made a <strong>Shopify</strong> development site, 
                  created a new site, and added a variety of book products with pricing, variants,
                  and suitable metadata to then sort the products into <strong>collections</strong>. I
                  then installed a theme, created a <strong>custom product template</strong> with blocks, and
                  customised the home page and about pages.
                </p>
              </div>
              <Image
                src={'/projects/romeos-books/demo1.png'}
                alt="Website Screenshot"
                height={900}
                width={900}
              />

               <Image
                src={'/projects/romeos-books/demo2.png'}
                alt="Website Screenshot"
                height={900}
                width={900}
              />

              <Image
                src={'/projects/romeos-books/demo3.png'}
                alt="Website Screenshot"
                height={900}
                width={900}
              />
            </section>

            {/* APP INTEGRATIONS */}
            <section className="w-full flex flex-col gap-7 about-text">
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl">App Integrations</h3>
                <p>
                  To boost sales, I integrated <strong>email marketing</strong> and <strong>reviews</strong> into 
                   the app. I designed custom email templates to nudge customers into returning
                  to the store and alert them to upcoming campaigns. I used the <strong>Judge.Me</strong> app
                  to add a new review block to the product page template.
                </p>

                <p>
                  I connected <strong>Google Analytics</strong> to the store and generated a new
                  report snapshot to track key metrics like active users, new users, and the top 
                  screens. This data can be used for <strong>CRO</strong>. I also integrated a 
                  theme builder app and experimented with it's AI design features.
                </p>
              </div>
              <Image
                src={'/projects/romeos-books/shopifyemails.png'}
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