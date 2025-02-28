import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Post } from '@/types';

/**
 * gets all of our posts for the digital garden.
 * @returns posts Post[]
 */
export const getPosts = () => {
  const postsDirectory = path.join(process.cwd(), '/data/posts');

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

  return posts
}