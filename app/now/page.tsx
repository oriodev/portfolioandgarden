import relativeTime from 'dayjs/plugin/relativeTime'
import dayjs from 'dayjs';
import TitleAndDescription from '@/components/info/titleanddescription';
import Link from 'next/link';
import DropdownMenu from '@/components/dropdowns/dropdownmenu';
dayjs.extend(relativeTime)

export const metadata = {
  title: 'Now Page'
};

export default function Now() {
  // days since x.
  // if we have day and we have today, then subtract.
  const daysSinceUpdate = dayjs("2026-04-06").fromNow();

  return (
        <main>
          <DropdownMenu />
          <div className='flex flex-col items-center'>
            <div className="w-full md:w-2/3 lg:w-1/2 p-5 flex flex-col gap-5 items-center md:items-start">
              <TitleAndDescription
                title='🧭 Now'
                description={`What I'm up to at the moment. Last updated ${daysSinceUpdate}.`}
              />
              
              <section className="p-4 w-full">
                <ul className='list-disc pl-3 about-text flex flex-col gap-2'>
                  {/* WEBSITES */}
                  <li><strong>Developing Wordpress & Shopify Sites:</strong> I have been putting a lot 
                  of hours into building a <Link href={'/projects/north-atlantic-cinema'} rel="noopener noreferrer" target="_blank">Wordpress</Link> site 
                  redesign for my local cinema. I have also been hard at work learning the ins and outs of Shopify 
                  with my <Link href={'/projects/romeos-books'} rel="noopener noreferrer" target="_blank">Shopify Book Store</Link>.</li>

                  {/* PROJECTS */}  
                  <li><strong>Building SoManyWords:</strong> I am building a writing tracker app 
                  that lets you keep track of daily word counts and project deadlines. It provides 
                  dynamic timeline projections and a range of cool stats and graphs to analyse
                  your progress and writing patterns. It's been a fun exercise in data manipulation,
                  and as a writer, I'm finding it incredibly useful in my day to day life.
                  You can check it out <Link href={'https://somanywords.co.uk/'} rel="noopener noreferrer" target="_blank">here</Link>.</li>
                  
                  {/* NOVEL */}
                  <li><strong>Second drafting my novel and other things:</strong> In my space time,
                  I'm working on the second draft of my novel. I'm also reading a lot and enjoying the sun.</li>
                </ul>
              </section>
            </div>
          </div>
        </main>
  )
}
