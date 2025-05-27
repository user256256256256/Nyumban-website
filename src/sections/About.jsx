import { mockup8 } from '../assets/images'
import { Button } from '../components'
import { aboutCaption } from '../constants'

const About = () => {
  
    return (
        <section
          id='about-us'
          className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
        >
          <div className='flex flex-1 flex-col'>
            <h2 className='font-palanquin capitalize text-[48px] lg:max-w-lg font-bold relative group'>
              About Nyumban  
              <span className='text-vivid-orange'> Property </span> 
              Services 
              <a id="navHash" href="#about" className='opacity-0 group-hover:opacity-100 text-slate-gray transition-opacity duration-200'> #</a>
            </h2>
            <p className='mt-4 lg:max-w-lg info-text transition-transform duration-200 animate-pulse'>
              {aboutCaption.description}
            </p>
            <div className='mt-11'>
              <Button label='Read more...' />
            </div>
          </div>
    
          <div className='flex-1 flex justify-center items-center transition-transform duration-200 hover:scale-105'>
            <img
              src={mockup8}
              alt='about-detail'
              width={570}
              height={522}
              className='object-contain'
            />
          </div>
        </section>
      )
}

export default About