import { hamburger, close } from "../assets/icons"
import { headerLogo } from "../assets/branding"
import { useEffect, useState } from "react"
import NavControls from "./NavControls.jsx"

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "enabled"
  )

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode)
  }, [isDarkMode])

  const [isScrolled, setIsScrolled] = useState(false)
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024)

  useEffect(() => {
    const handleResize = () => {
      const isCurrentlyDesktop = window.innerWidth >= 1024
      setIsDesktop(isCurrentlyDesktop)
      if (isCurrentlyDesktop) {
        setIsMenuOpen(false) 
      }
    }

    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])


  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode
      localStorage.setItem("darkMode", newMode ? "enabled" : "disabled")
      document.documentElement.classList.toggle("dark", newMode)
      return newMode
    })
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full z-100 transition-all duration-100 ${
        isScrolled ? "bg-navy-blue text-white shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="flex justify-between items-center max-container px-8 py-1">
        {/* Logo */}
        <a href="/">
          <img
            src={headerLogo}
            alt="nps-logo"
            width={100}
            height={100}
            className="m-0 w-[100px] h-[100px]"
          />
        </a>

        {/* Desktop Controls (Nav + Toggles) */}
        {isDesktop && (
          <div className="max-lg:hidden">
            <NavControls
              isDarkMode={isDarkMode}
              toggleDarkMode={toggleDarkMode}
              isMobile={false}
            />
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && !isDesktop && (
          <div className="absolute top-[80px] left-0 w-full bg-navy-blue shadow-md p-4 max-lg:block text-left">
            <NavControls
              isDarkMode={isDarkMode}
              toggleDarkMode={toggleDarkMode}
              isMobile={true}
              onNavLinkClick={() => setIsMenuOpen(false)} 
            />
          </div>
        )}

        {/* Mobile Hamburger Toggle Button */}
        <div className="hidden max-lg:block bg-white dark:bg-navy-blue">
          <button
            className="p-1 rounded-xl transition-transform duration-300"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"} // Added accessibility
          >
            <img
              src={isMenuOpen ? close : hamburger}
              alt="hamburger-icon"
              width={25}
              height={25}
              className={`transition-transform duration-300 transform ${
                isMenuOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Nav
