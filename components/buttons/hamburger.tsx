"use client"

interface Props {
  isOpen: boolean;
  handleClick: () => void;
}

export default function Hamburger({ isOpen, handleClick }: Props) {

  return(
      <button
        onClick={handleClick} 
        className="flex flex-col p-5 justify-center items-center hover:cursor-pointer"
      >
        <span className={`bg-black block transition-all duration-300 ease-out 
                        h-0.5 w-6 rounded-sm ${isOpen ? 
                        'rotate-45 translate-y-1' : '-translate-y-0.5'
                        }`} >
        </span>
        <span className={`bg-black block transition-all duration-300 ease-out 
                        h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 
                        'opacity-0' : 'opacity-100'
                        }`} >
        </span>
        <span className={`bg-black block transition-all duration-300 ease-out 
                        h-0.5 w-6 rounded-sm ${isOpen ? 
                        '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                        }`} >
        </span>    
    
      </button>
  )
}