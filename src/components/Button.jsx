const Button = ({
    label,
    iconUrl,
    backgroundColor,
    textColor,
    borderColor,
    fullWidth,
    onClick, 
    disable 
}) => {
  return (
    <button 
        type="button"
        onClick={onClick}
        disabled={disable}
        className={`flex justify-center items-center my-1 gap-2 px-7 py-4 sm:py-2 max-sm:py-1.5 border font-montserrat text-lg leading-none transition-transform duration-200 hover:scale-105 hover:bg-gradient-to-r hover:from-vivid-orange hover:to-yellow-400 dark:hover:text-white animate-bounce-once dark:text-slate-gray
            ${
            backgroundColor
                ? `${backgroundColor} ${textColor} ${borderColor}`
                : "bg-transparent text-white border-vivid-orange"
            } rounded-full ${fullWidth && "w-full"}`} 
        >
        {label}

        {iconUrl && (
            <img src={iconUrl}
            alt="store-icon"
            className="ml-2 rounded-full w-6 h-6"
            />
        )}
    </button>
  )
}

export default Button