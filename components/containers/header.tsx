import Link from "next/link"

export default function Header() {

    const links = [
        {
            title: '🪴 home',
            slug: '/'
        },
        {
            title: '🌱 about',
            slug: '/#about'
        },        
        {
            title: '🔥 projects',
            slug: '/#projects'
        },
        {
            title: '💌 contact',
            slug: '/#contact'
        },        
        {
            title: '📜 resume',
            slug: '/'
        },       
        {
            title: '🍀 digital garden',
            slug: '/digital-garden'
        },        
        {
            title: '🧭 now',
            slug: '/'
        },
    ]

    return (
        <div id='top' className="h-[150px] md:h-[80px] p-7 flex bg-white">
            <div className="flex-grow flex flex-wrap justify-center gap-5 font-bold text-cyan-700">
                {
                    links.map((link) => (
                        <Link key={link.title} href={link.slug} className="hover:text-cyan-800 effect-shine transition">
                            <p>{link.title}</p>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}
