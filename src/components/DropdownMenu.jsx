import { useState, useEffect, useRef } from "react"

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        className="px-3 py-2 rounded-md hover:bg-gray-700 " 
        aria-label="Choose Language"
        type="button"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        data-state={isOpen ? "open" : "closed"}
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          height="20"
          className="w-6 h-6 text-slate-gray"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
          ></path>
        </svg>
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-48 bg-navy-blue border border-gray-300 rounded-lg shadow-lg">
          <div className="p-2 flex flex-col">
            <button className="w-full text-white text-left px-4 py-0 hover:bg-vivid-orange">
              English
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default DropdownMenu
