
const Alert = ({ message, type }) => {
    return (
      <div className={`w-full p-4 rounded-full shadow-md text-center transition-all duration-300 
          ${
            type === "success"
              ? "bg-color-primary text-color-navy-blue border border-color-gunmetal"
              : "bg-color-charcoal-black text-color-white-400 border border-color-vivid-orange"
          }
          animate-slide-up`}>
        {message}
      </div>
    );


}

export default Alert
  