import { Project } from "@/types/types";

export const projects: Project[] = [
  {
    title: "🖋️ so many words.",
    description: (
      <>
        track how many words you have written, use dynamic timeline projections to reach your goal on time,
        and see your progress in interesting graphs and analytics. built with <strong>next.js</strong>, 
        <strong> recharts</strong> and <strong>postgresql</strong>, utilising <strong>supabase</strong> for
        authentication.
      </>
    ),
    image: "/projects/somanywords.png",
    type: "js",
    livedemo: "https://somanywords.co.uk",
    github: "https://github.com/oriodev/so-many-words"
  },
  {
    title: "💿 album archive.",
    description: (
      <>
        basically goodreads for music. built with <strong>next.js</strong> and <strong>tailwind</strong>.
        best features include sending album recs (with live notifications, built with <strong>socket.io</strong>)
        and joining group chats.
        the backend utilises the <strong>discogs api</strong> to get albums
        and is built with <strong>nest.js</strong> and <strong>mongodb</strong>.
      </>
    ),
    image: "/projects/albumarchive.png",
    type: "js",
    livedemo: "/projects/album-archive",
    github: "https://github.com/oriodev/albumarchive"
  }, 
    {
    title: "🟣 idle incremental.",
    description:  (
      <>
        an idle incremental game built with <strong>next.js</strong> and <strong>css</strong> animations. best features
        include local storage handling, upgrade purchases, and prestige system.
        built alongside  <a className="font-bold hover:cursor-pointer effect-shine text-indigo-800" href="https://github.com/ybettles"> my friend yas </a>
         using a <strong>git-based workflow</strong>.
      </>
    ),
    image: "/projects/idle.png",
    type: "js",
    livedemo: "https://bored-sable.vercel.app/",
    github: "https://github.com/oriodev/bored"
  },   {
    title: "🧁 oribebaking.",
    description: (
      <>
        a bakery delivery app. built with <strong>typescript</strong>, <strong>next.js</strong> and <strong>tailwind</strong>.
        best features include authentication with admin and user roles (built with <strong>clerk</strong>),
         the <strong>stripe</strong> integration for payment,
         and obviously all the cake.
        the backend is built with <strong>prisma</strong> and <strong>postgresql</strong>.
      </>
    ),
    image: "/projects/oribebaking.png",
    type: "js",
    livedemo: "",
    github: "https://github.com/oriodev/oribebaking"
  },
  {
    title: "💰 cli bank manager.",
    description:  (
      <>
        a command-line-interface bank management program that utilises 
        fundamental <strong>object oriented programming</strong> concepts 
        such as abstract classes, inheritance, and polymorphism. users can
        create, withdraw, and deposit into savings and current accounts.
      </>
    ),
    image: "/projects/bankaccountmanager.png",
    type: "java",
    livedemo: "",
    github: "https://github.com/oriodev/bankaccountmanager"
  },
]