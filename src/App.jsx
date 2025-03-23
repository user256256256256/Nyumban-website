import { Nav } from './components'

import {
  CallToAction,
  GettingStarted,
  About,
  Solutions,
  Newsletter,
  Footer
} from './sections'

const App = () => {
  return (
    <main className='relative bg-charcoal-black text-white '>
      <Nav />
      <section className='xl:padding-l wide:padding-r padding-b'>
        <CallToAction />
      </section>
      <section className='padding'>
        <GettingStarted />
      </section>
      <section className='padding'>
        <About />
      </section>
      <section className='padding-x py-10'>
        <Solutions />
      </section>
      <section className='padding-x sm:py-32 py-16 w-full'>
        <Newsletter />
      </section>
      <section className='bg-navy-blue padding-x padding-t pb-8'>
        <Footer />
      </section>
    </main>
  )
}

export default App
