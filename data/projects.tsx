import { Project } from "@/types/types";

export const projects: Project[] = [
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
  },    {
    title: "🃏 snap!",
    description: (
      <>
        a javascript snap game built with <strong>object oriented programming</strong> principles
        and <strong>react</strong> state handling. user can play snap against a (kinda)
        slow computer. still a wip but you can play the mvp now. multiplayer, win states, and keyboard
        support coming.
      </>
    ),
    image: "/projects/snap.png",
    type: "js",
    livedemo: "/projects/snap",
    github: "https://github.com/oriodev/portfolioandgarden/tree/main/app/projects/snap"
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