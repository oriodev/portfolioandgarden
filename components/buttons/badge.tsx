interface Props {
  title: string;
  active?: boolean;
  click?: () => void;
}

export default function Badge({ title, active = false, click }: Props) {
  return (
    <div 
      className={`flex text-center gap-2 p-2 pl-3 pr-3 ${active ? "bg-teal-600 text-white" : "bg-white"} effect-shine ${click && "hover:cursor-pointer"} font-bold rounded-lg`}
      onClick={click}
    >
    { title }
  </div>
  )
}