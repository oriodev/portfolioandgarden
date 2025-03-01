import Badge from "../buttons/badge";

interface Props {
  title: string;
  description?: string;
  badges: string[];
}

export default function BadgeDisplay({ title, description, badges }: Props) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex flex-col items-center gap-1">
        <p className="text-2xl font-bold text-center">{ title }</p>
        <p className="italic text-md text-center">{ description }</p>
      </div>
      <div className="flex flex-wrap gap-2 justify-center">
        { badges.map((badge) => (<Badge key={badge} title={badge}/>)) }
      </div>   
  </div>
  )
}