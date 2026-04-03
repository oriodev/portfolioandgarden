import { Project } from "@/types/types";

export const projects: Project[] = [
  {
    title: "🖋️ So Many Words",
    description: (
      <>
        Track how many words you have written, use dynamic projections to reach your goal on time,
        and see your progress with graphs and analytics. Built with <strong>Next.js</strong>, 
        <strong> Recharts</strong> and <strong>PostgreSQL</strong>, utilising <strong>Supabase</strong> for
        authentication.
      </>
    ),
    image: "/projects/somanywords.png",
    type: "js",
    livedemo: "https://somanywords.co.uk",
    github: "https://github.com/oriodev/so-many-words"
  },
  {
    title: "💿 Album Archive",
    description: (
      <>
        Goodreads for music. Built with <strong>Next.js</strong> and <strong>Tailwind</strong>.
        Best features include sending album recs (with live notifications, built with <strong>Socket.IO</strong>)
        and joining group chats.
        The backend utilises the <strong>Discogs API</strong> to get albums
        and is built with <strong>Nest.js</strong> and <strong>MongoDB</strong>.
      </>
    ),
    image: "/projects/albumarchive.png",
    type: "js",
    livedemo: "/projects/album-archive",
    github: "https://github.com/oriodev/albumarchive"
  }, 
  {
    title: "🟣 Idle Incremental",
    description:  (
      <>
        An idle incremental game built with <strong>Next.js</strong> and <strong>CSS</strong> animations. Best features
        include local storage handling, upgrade purchases, and prestige system.
        Built alongside <a className="font-bold hover:cursor-pointer effect-shine text-indigo-800" href="https://github.com/ybettles"> my friend Yas </a>
         using a <strong>Git-based workflow</strong>.
      </>
    ),
    image: "/projects/idle.png",
    type: "js",
    livedemo: "https://bored-sable.vercel.app/",
    github: "https://github.com/oriodev/bored"
  },   {
    title: "🧁 OriBeBaking",
    description: (
      <>
        A bakery delivery app. Built with <strong>TypeScript</strong>, <strong>Next.js</strong> and <strong>Tailwind</strong>.
        Best features include authentication with admin and user roles (built with <strong>Clerk</strong>),
         the <strong>Stripe</strong> integration for payment,
         and obviously all the cake.
        The backend is built with <strong>Prisma</strong> and <strong>PostgreSQL</strong>.
      </>
    ),
    image: "/projects/oribebaking.png",
    type: "js",
    livedemo: "",
    github: "https://github.com/oriodev/oribebaking"
  },
  {
    title: "📱 CONKR Start Up",
    description: (
      <>
        A university start up project. We ran a <strong>marketing campaign</strong> and pitched to two groups of 
        investors, earning the <strong>highest grade</strong> out of the cohort. I created the website with <strong>Wordpress</strong>, 
        built an app mock up with <strong>Figma</strong>, and used <strong>Excel</strong> to handle the finances.
      </>
    ),
    image: "/projects/conkr/website.png",
    type: "website",
    livedemo: "/projects/conkr",
    github: ""
  },
  {
    title: "📽️ North Atlantic Cinema Website",
    description: (
      <>
        A <strong>Wordpress</strong> project designed to improve
        the website used by my local indie cinema and boost sales through a better user experience.
        This project was built using <strong>LocalWP</strong> to run Wordpress locally.
      </>
    ),
    image: "/projects/north-atlantic-cinema/projectcover.png",
    type: "website",
    livedemo: "/projects/north-atlantic-cinema",
    github: ""
  }
]