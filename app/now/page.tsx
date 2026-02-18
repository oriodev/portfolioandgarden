import relativeTime from 'dayjs/plugin/relativeTime'
import dayjs from 'dayjs';
import TitleAndDescription from '@/components/info/titleanddescription';
import Link from 'next/link';
import DropdownMenu from '@/components/dropdowns/dropdownmenu';
dayjs.extend(relativeTime)

export default function Now() {
  // days since x.
  // if we have day and we have today, then subtract.
  const daysSinceUpdate = dayjs("2026-02-18").fromNow();

  return (
        <main>
          <DropdownMenu />
          <div className='flex flex-col items-center'>
            <div className="w-full md:w-2/3 lg:w-1/2 p-5 flex flex-col gap-5 items-center md:items-start">
              <TitleAndDescription
                title='🧭 now.'
                description={`what i'm up to at the moment. last updated ${daysSinceUpdate}.`}
              />
              
              <section className="p-4 w-full">
                <ul className='list-disc pl-3 about-text flex flex-col gap-2'>
                  {/* JOB APPLICATIONS */}
                  <li><strong>applying to jobs: </strong>i am in the full swing of writing cvs, trawling
                   through linkedin, and chatting with cool people about the work they do.</li>

                  {/* PROJECTS */}  
                  <li><strong>building somanywords: </strong>i am building a writing tracker app, where you 
                  can input a daily wordcount each day and it will tell you how many more words you need 
                  to write to reach your goals on time. you can also see cool stats and graphs analysing
                   your progress and writing patterns. it&apos;s been a super fun exercise in data manipulation, and 
                   as a writer, i am also finding it incredibly useful. you can check it out
                  <Link href={'https://somanywords.co.uk/'} rel="noopener noreferrer"
            target="_blank"> here.</Link>
            </li>
                  
                  {/* NOVEL */}
                  <li><strong>second drafting my novel and other things: </strong> i am working on the second draft of
                   my novel in my spare time. i am also reading a lot of books and learning how to draw!</li>
                </ul>
              </section>
            </div>
          </div>
        </main>
  )
}