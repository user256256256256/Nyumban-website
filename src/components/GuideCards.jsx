import { guideIcon } from "../assets/icons";

const GuideCards  = ({ imgURL, name, description }) => {
    return (
      <div className='flex flex-1 flex-col w-full max-sm:w-full '>
        <img src={imgURL} className='w-[282px] h-[282px] transition-transform duration-200 hover:scale-105' />
        <div className='mt-8 flex justify-start gap-2.5 '>
          <img src={guideIcon} alt='guides icon' width={24} height={24}  />
          <p className='font-montserrat text-xl leading-normal text-slate-gray'>
            Lorem, ipsum dolor.
          </p>
        </div>
        <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>
          {name}
        </h3>
        <p className='mt-2 font-semibold font-montserrat text-vivid-orange text-2xl leading-normal'>
          {description}
        </p>
      </div>
    );
  };

  
export default GuideCards