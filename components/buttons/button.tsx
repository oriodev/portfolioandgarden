import Link from "next/link";

interface Props {
  text: string;
  link: string;
  active: boolean;
}

export default function Button({ text, link, active }: Props) {
  return (
  
      active ? (
        <Link
          href={link}
          className="w-full flex items-center justify-center text-center p-2 pl-5 pr-5 rounded-lg font-bold bg-blue-100 effect-shine transition"
          rel="noopener noreferrer"
          target="_blank"
        >
          { text }
        </Link>
      ) : (
        <div
          className="w-full flex items-center justify-center text-center p-2 pl-5 pr-5 rounded-lg font-bold bg-blue-100"
        >
          { text }
        </div>
      )
  
  )
} 