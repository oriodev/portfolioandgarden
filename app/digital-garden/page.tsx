import PostCard from '@/components/cards/postcard';
import DropdownMenu from '@/components/dropdowns/dropdownmenu';
import TitleAndDescription from '@/components/info/titleanddescription';
import { getPosts } from '@/utils/general.utils';

export default function Page() {

  const posts = getPosts();
  
  return (
    <main className="">
      <DropdownMenu />
      <div className='flex flex-col h-[90vh] sm:h-[72vh] items-center'>

`      <div className="w-full md:w-2/3 lg:w-1/2 flex flex-col gap-5 items-center md:items-start">
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
      </div>
    </main>
  )
}