import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import DropdownMenu from '@/components/dropdowns/dropdownmenu';

const postsDirectory = path.join(process.cwd(), '/data/posts');

interface Props {
  params: Promise<{ slug: string }>
}

export default async function Post( { params }: Props ) {

  // GET THE MD FILE AND PROCESS IT FOR RENDERING.
  const slug = (await params).slug
  const filePath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  const processedContent = await remark()
    .use(html)
    .process(content);
  const contentHtml = processedContent.toString();

  return (
    <main className=''>
      <DropdownMenu />

      <div className='flex flex-col items-center w-full'>
        <section className='w-full md:w-2/3 lg:w-1/2 p-5 flex flex-col gap-3 items-center'>
            <h1 className='text-3xl font-bold'>{data.title}</h1>

            <div className='prose'>
              <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
            </div>

        </section>
      </div>

    </main>


  );
}
