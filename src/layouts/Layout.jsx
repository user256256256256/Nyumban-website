import { Nav } from '../components'
import { Footer } from '../sections'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='relative'>
        <Nav />
        <Outlet />
        <section className='bg-navy-blue padding-x padding-t pb-8'>
        <Footer />
        </section>

    </div>
  )
}

export default Layout