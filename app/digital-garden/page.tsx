import PostCard from '@/components/cards/postcard';
import TitleAndDescription from '@/components/info/titleanddescription';
import { getPosts } from '@/utils/general.utils';

export default function Page() {

  const posts = getPosts();
  
  return (
    <main className="flex flex-col h-[72vh] items-center pt-15 md:pt-5 lg:pt-0">
      <div className="w-full md:w-1/2 flex flex-col gap-5 items-center md:items-start">
        <TitleAndDescription
          title='🍀 digital garden.'
          description='a collection of ideas and things i&apos;m figuring out.'
        />
        
        <section className="p-4 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {posts.map((post, index) => (
              <PostCard key={index} post={post} />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}