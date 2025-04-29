import { ugFlag } from "../assets/icons"
import { navLinks } from "../constants"
import DropdownMenu from "./DropdownMenu.jsx"
import { Link } from "react-router-dom"
import SearchButton from "./SearchButton.jsx"

const NavControls = ({ isDarkMode, toggleDarkMode, isMobile = false, onNavLinkClick }) => {
  return (
    <div
    className={`
      ${isMobile ? "flex flex-col gap-4 mt-4" : "flex items-center gap-4 wide:mr-24"}
      font-montserrat text-lg font-medium
    `}
    >
      
      <ul
        className={`${
          isMobile
            ? "flex flex-col items-start gap-6 w-full"
            : "flex justify-center items-center gap-8"
        }`}
      >
        {navLinks.map((item) => (
          <li key={item.label}>
            {(
              <Link 
                to={item.href}
                onClick={ () => isMobile && onNavLinkClick?.()}
                className={`
                  ${isDarkMode ? "hover:bg-gray-700" : "hover:bg-slate-gray hover:text-white"} 
                  ${isMobile ? "text-white" : ""}
                  px-4 py-2 rounded-md  transition-all duration-300`}                 
                  >
              {item.label}
              </Link>
            )}
          </li>
        ))}

      </ul>

      <div className="inline-block">
        <button
          type="button"
          className=" text-slate-gray hover:bg-gray-700 px-3 py-2 rounded-md"
          aria-label="Toggle Dark Mode"
          onClick={toggleDarkMode}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={isDarkMode ? "block" : "hidden"}
            height="20"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={isDarkMode ? "hidden" : "block"}
            height="20"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
            />
          </svg>
        </button>
      </div>

      <DropdownMenu />

      <SearchButton />

      { !isMobile && (
        <a href="/">
          <img
            src={ugFlag}
            alt="ug-flag"
            width={30}
            height={30}
            className="w-[30px] h-[30px]"
          />
      </a>
      )

      }
      
    </div>
  )
}

export default NavControls
