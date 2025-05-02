import { copyrightSign } from "../assets/icons"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <footer className='max-container'>
<div className='flex flex-col lg:flex-row justify-between items-center text-white-400 mt-0 gap-4 md:gap-6  lg:gap-8'>

        <div className='flex justify-start items-center gap-2 font-montserrat cursor-pointer'>
          <img
            src={copyrightSign}
            alt='copyright sign'
            width={20}
            height={20}
            className='rounded-full m-0'
          />
          <p>Copyright. All rights reserved.</p>
        </div>

        <div className='flex flex-col items-center max-sm:mt-8'>
          <ul className='flex flex-wrap justify-center gap-6'>
            {footerLinks.flatMap(section => section.links).map(link => (
              <li
                className='font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray'
                key={link.name}
              >
                <a href={link.link}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className='flex flex-wrap gap-5 max-sm:mt-8 '>
          {socialMedia.map((icon) => (
            <div
              className='flex justify-center items-center w-10 h-10 transition-transform duration-200 hover:scale-105'
              key={icon.alt}
            >
              <img src={icon.src} alt={icon.alt} width={24} height={24} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};


export default Footer