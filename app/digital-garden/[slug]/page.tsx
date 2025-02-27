import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { ChevronsLeft } from '@/components/icons/ChevronsLeft';

const postsDirectory = path.join(process.cwd(), '/posts');

interface Props {
  params: {
    slug: string;
  }
}

export default async function Post( { params }: Props ) {
  const { slug } = params;
  const filePath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  const processedContent = await remark()
    .use(html)
    .process(content);
  const contentHtml = processedContent.toString();

  return (
    <div>
      <ChevronsLeft className='text-black bg-rose-900' />

      <h1>{data.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
  );
}
