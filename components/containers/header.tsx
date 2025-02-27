import Link from "next/link"

export default function Header() {

    const links = [
        {
            title: '🪴 home',
            slug: '/'
        },
        {
            title: '⚙️ projects',
            slug: '/'
        },        {
            title: '🌱 about',
            slug: '/'
        },        {
            title: '💌 contact',
            slug: '/'
        },        {
            title: '📜 resume',
            slug: '/'
        },        {
            title: '🍀 digital garden',
            slug: '/'
        },        {
            title: '🧭 now',
            slug: '/'
        },
    ]

    return (
        <div className="h-[100px] p-7 flex">
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
