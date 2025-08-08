import relativeTime from 'dayjs/plugin/relativeTime'
import dayjs from 'dayjs';
import TitleAndDescription from '@/components/info/titleanddescription';
import Link from 'next/link';
import DropdownMenu from '@/components/dropdowns/dropdownmenu';
dayjs.extend(relativeTime)

export default function Now() {
  // days since x.
  // if we have day and we have today, then subtract.
  const daysSinceUpdate = dayjs("2025-08-08").fromNow();

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
                  {/* GRADUATION */}
                  <li><strong>recovering from university: </strong>i just graduated after five years of university,
                  so right now i am taking a bit of a break, catching up on some reading, and going for a lot
                  of long walks by the beach.</li>

                  {/* IDLE GAME */}  
                  <li><strong>building an idle game: </strong>i am building an idle incremental browser game
                  with next.js. you spin some circles, purchase upgrades to make them spin faster, and
                  prestige to earn more numbers from each circle rotation. it does some fun
                  stuff with css animations! working on some quality of life improvements right now
                  but it is otherwise a functional mvp that you can play 
                  <Link href={'https://bored-sable.vercel.app/'} rel="noopener noreferrer"
            target="_blank"> here</Link>
            </li>

                  {/* LEARNING DSA */}
                  <li><strong>learning dsa: </strong>i am working my way through
                  this <Link href={'https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/'} rel="noopener noreferrer"
            target="_blank">dsa masterclass</Link> course,
                  refreshing myself on intermediary data structures and algorithms and furthering my understanding
                  of more complex algorithms. this is partly for my own satisfaction and partly job interview
                  preparation.</li>

                  {/* LEARNING JAVA */}
                  <li><strong>learning java: </strong>i am working my way through
                  this <Link href={'https://www.udemy.com/course/javamasterclass/'} rel="noopener noreferrer"
            target="_blank">java masterclass</Link> course,
                  learning everything from java fundamentals through to web development with springboot,
                  and building a fully fledged expenses tracker.</li>
                  
                  {/* NOVEL */}
                  <li><strong>first drafting my novel: </strong> i am about a third of the way through this draft of my novel, which is
                  admittedly not the first first draft that i have written for this one, and im working through a creative writing course
                  alongside drafting.</li>
                </ul>
              </section>
            </div>
          </div>
        </main>
  )
}