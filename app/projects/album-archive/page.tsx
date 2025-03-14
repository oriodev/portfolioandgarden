import Button from "@/components/buttons/button";
import BadgeDisplay from "@/components/containers/badgedisplay";
import DropdownMenu from "@/components/dropdowns/dropdownmenu";
import TitleAndDescription from "@/components/info/titleanddescription";

export default function Page() {
  const technologies = ["next.js", "tailwind", "shadcn", "nest.js", "discogs api", "mongodb", "socket.io", "jwt-token"]

  return (
       <main className="">
          <DropdownMenu />
          <div className='flex flex-col items-center p-5 sm:p-0'>
    
          <div className="w-full sm:w-1/2 flex flex-col gap-5 items-center">
            <TitleAndDescription
              title='💿 album archive.'
              description='tldr; basically goodreads for music. a fullstack application that 
              allows users to track their listening history, discover new albums, and chat
              with other fans of their favourite albums.'
            />
            
            <section className="w-full flex flex-col gap-5">
              <div className="w-full flex justify-center">
                  <iframe
                    width="800"
                    height="450"
                    src="https://www.youtube.com/embed/aNF6h7o1WRI" // Replace VIDEO_ID with the actual ID
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
              </div>

              <div>
                <Button text="⚗️ github." link="https://github.com/oriodev/albumarchive" active/>
              </div>
              
              <div className="w-full p-5 rounded-lg bg-gradient-to-tr from-cyan-100 to-indigo-200 to-blue-200">
                <BadgeDisplay
                  title="technologies used."
                  badges={technologies}
                />
              </div>

            </section>
          </div>
          </div>
        </main>
  )
}