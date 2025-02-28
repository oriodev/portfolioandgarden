interface Props {
  setJavascript: (javascript: boolean) => void;
}

export default function ProjectTypeFilters({ setJavascript }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      <div 
        className="p-2 pl-3 pr-3 bg-white effect-shine hover:cursor-pointer font-bold rounded-lg"
        onClick={() => setJavascript(true)}
      >
        🎉 javascript.
      </div>
      <div
        className="p-2 pl-3 pr-3 bg-white effect-shine hover:cursor-pointer font-bold rounded-lg"
        onClick={() => setJavascript(false)}
      >
        🚧 java.
      </div>
    </div> 
  )
}