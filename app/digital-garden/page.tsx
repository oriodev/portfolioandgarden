import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import matter from 'gray-matter';
import { Post } from '@/types';

const postsDirectory = path.join(process.cwd(), '/posts');

export default function Page() {

  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames.map((fileName) => {
    const filePath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    return {
      slug: fileName.replace(/\.md$/, ''),
      ...data,
    } as Post;
  });

  return (
    <main className="flex flex-col items-center">
      <div className="w-1/2 flex flex-col gap-5 items-start">
        <section className="flex flex-col gap-2 items-start">
            <h1 className="text-4xl font-bold">🍀 digital garden.</h1>
            <p className="pl-4">a collection of ideas and things i&apos;m figuring out.</p>
        </section>

        
        <section className="p-4 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {posts.map((post, index) => (
              <Link key={index} href={`/digital-garden/${post.slug}`}>
                <div className="flex flex-col gap-5 bg-white rounded-lg pt-4 pl-4 pr-4 pb-2 border border-solid border-2 hover:cursor-pointer transition-transform duration-300 hover:scale-105">
                  <p className="text-xl font-bold">{post.title}</p>
                  <div className="flex justify-between text-sm items-center">
                    <p>{post.date}</p>

                    <div className='p-1 pl-2 pr-2 rounded-lg bg-emerald-100'>
                      <p>{post.status}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
      </section>
      </div>
    </main>
  )
}