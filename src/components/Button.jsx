
export default function Button({textButton, icon}) {
  return (
    <button className=" 
                    whitespace-nowrap
                    px-4 py-4 lg:px-5 lg:py-3
                    rounded-lg sm:rounded-xl 
                    bg-yellow-500 
                    text-black 
                    flex items-center gap-2 
                  
                    font-medium 
                    hover:bg-gray-600 
                    hover:text-yellow-500
                    transition-colors
                    flex-shrink-0">
        {textButton}
        {icon}
    </button>
  );
}