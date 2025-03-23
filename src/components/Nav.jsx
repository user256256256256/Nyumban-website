import { hamburger, ugFlag, close } from  "../assets/icons"
import { headerLogo } from "../assets/branding"
import { navLinks } from "../constants"
import { useState } from "react"

const Nav = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    return (
        <header className="padding-x py-8 absolute z-10 w-full animate-slide-up animate-fade-in ">
            <nav className="flex justify-between items-center max-container">
                <a href="/">
                    <img za
                    src={headerLogo} 
                    alt="nps-logo" 
                    width={129}
                    height={29}
                    className="m-0 w-[100px] h-[100px]"
                    />
                </a>
                <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                    {navLinks.map((item) => (
                        <li key={item.label}>
                        <a
                            href={item.href}
                            className='font-montserrat leading-normal text-lg text-white hover:border-b-2 hover:border-white transition-all duration-300'
                        >
                            {item.label}
                        </a>
                        </li>
                    ))}
                </ul>
                <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
                    <a href="/">
                        <img za
                        src={ugFlag} 
                        alt="ug-flag" 
                        width={30}
                        height={29}
                        className="m-0 w-[30px] h-[30px]"
                        />
                    </a>
                </div>
                <div className="hidden max-lg:block bg-white">
                    <button 
                        className="p-1 rounded-1xl transition-transform duration-300"
                        onClick={toggleMenu}
                    >
                        <img 
                            src={isMenuOpen ? close: hamburger} 
                            alt="hamburger-icon" 
                            width={25} height={25} 
                            className={`transition-transform duration-300 transform ${isMenuOpen ? 'rotate-180' : 'rotate-0'}`}
                        />
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Nav