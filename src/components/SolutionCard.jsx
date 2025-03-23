const SolutionCard = ({imgURL, label, subtext}) => {
  return (
  <div className='flex-1 w-full rounded-[20px] shadow-3xl px-5 bg-navy-blue py-10 transition-transform duration-200 hover:scale-105'>
    <div className='w-11 h-11 flex justify-center items-center bg-vivid-orange rounded-full'>
      <img src={imgURL} alt={label} width={24} height={24} />
    </div>
    <h3 className='mt-5 font-palanquin text-3xl leading-normal font-bold'>
      {label}
    </h3>
    <p className='mt-3  font-montserrat text-lg leading-normal text-slate-gray'>
      {subtext}
    </p>
  </div>
  )
}

export default SolutionCard