import { useEffect, useState } from "react"
import { GuideCards } from "../components"
import { guides, getStarted } from '../constants'
import { use } from "react"

const GettingStarted = () => {
  return (
        <section id='guides' className='max-container max-sm:mt-12'>
          <div className='flex flex-col justify-start gap-5 '>
            <h2 className='text-[48px] font-palanquin font-bold relative group'>
            Getting <span className='text-vivid-orange'> Started </span> 
            <a id="navHash" href="#get-started" className='opacity-0 group-hover:opacity-100 text-slate-gray transition-opacity duration-200'>#</a>
            </h2>
            <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>
              {getStarted.description}
            </p>
          </div>
    
          <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14 '>
            {guides.map((guide) => (
              < GuideCards key={guide.name} {...guide} />
            ))}
          </div>
        </section>
  )
}

export default GettingStarted