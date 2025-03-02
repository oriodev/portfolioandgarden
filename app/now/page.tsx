import relativeTime from 'dayjs/plugin/relativeTime'
import dayjs from 'dayjs';
import TitleAndDescription from '@/components/info/titleanddescription';
import Link from 'next/link';
dayjs.extend(relativeTime)

export default function Now() {
  // days since x.
  // if we have day and we have today, then subtract.
  const daysSinceUpdate = dayjs("2025-03-02").fromNow();

  return (
        <main className="flex flex-col items-center pt-15 md:pt-5 lg:pt-0">
          <div className="w-full md:w-1/2 flex flex-col gap-5 items-center md:items-start">
            <TitleAndDescription
              title='🧭 now.'
              description={`what i'm up to at the moment. last updated ${daysSinceUpdate}.`}
            />
            
            <section className="p-4 w-full">
              <ul className='list-disc pl-3 about-text flex flex-col gap-2'>
                <li><strong>working on album archive: </strong>basically goodreads for 
                music. <Link href={'/#projects'}>album archive</Link> is my final year 
                project for my university degree. feature development
                is now done, so i am cleaning up the api, working on testing, and getting ready
                for the demonstrations taking place next week.</li>
                <li><strong>learning java: </strong>i am working my way through
                this <Link href={'https://www.udemy.com/course/javamasterclass/'} rel="noopener noreferrer"
          target="_blank">java masterclass</Link> course,
                learning everything from java fundamentals through to web development with springboot,
                and building a fully fledged expenses tracker.</li>
                <li><strong>building my portfolio: </strong> this portfolio is taking up a fair
                bit of my time at the minute. once this page is done, i will just have the resume 
                page to go - so almost there!</li>
                <li><strong>designing my character app: </strong> i wrote about this a bit
                 more <Link href={'/digital-garden/draggable-project'} rel="noopener noreferrer" target="_blank">here</Link>, but
                 i want to build an application that will let me track all the complicated relationships between all
                 of the characters in my books. sort of like a big messy family tree, complete with draggable character
                 icons, colour-coded lines, and clickable character profiles. right now it is just a collection of 
                 implementation ideas and questions, because there is not enough time in the day for a brand new project,
                 but the more i flesh it out now, the easier development will come later.</li>
                <li><strong>building the mvp for CONKR: </strong> i am the technical lead for the CONKR. startup.
                the <Link href={'https://www.conkrhq.com'} rel="noopener noreferrer" target="_blank">website</Link> is more or less done now and the app mockup is complete, so now we are
                all in on completing the trailer and launching our <Link href={'https://www.instagram.com/conkrhq'} rel="noopener noreferrer" target="_blank">socal media</Link> campaign.</li>
                <li><strong>first drafting my novel: </strong> i finished a first draft for my novel last november, decided i hated it,
                and completely rehauled the idea. now i am fleshing out each scene and then i will jump back into a second first draft -
                still undecided on whether this counts as a second draft or not, though</li>
              </ul>
            </section>
          </div>
        </main>
  )
}