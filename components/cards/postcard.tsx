import { Post } from "@/types/types";
import Link from "next/link";

interface Props {
  post: Post
}

export default function PostCard( { post }: Props ) {
  return (
    <Link href={`/digital-garden/${post.slug}`}>
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
  )
}