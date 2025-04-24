import { Nav } from '../components'

import {
  CallToAction,
  GettingStarted,
  About,
  Solutions,
  Newsletter,
  Footer
} from '../sections'

const Home = () => {
  return (
    <main className="relative ">


        <section id="home" className='xl:padding-l wide:padding-r padding-b'>
        <CallToAction />
        </section>

        <section id="get-started" className='padding'>
        <GettingStarted />
        </section>

        <section id="about" className='padding'>
        <About />
        </section>

        <section id="solutions" className='padding-x py-10'>
        <Solutions />
        </section>

        <section id="newsletter" className='padding-x sm:py-32 py-16 w-full'>
        <Newsletter />
        </section>

  </main>
  )
}

export default Home