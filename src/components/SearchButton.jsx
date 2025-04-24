import React, { useEffect } from 'react'

const SearchButton = () => {
    const handelShortcut = (e) => {
        const isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0
        if ((isMac && e.metaKey && e.key === "k") || (!isMac && e.ctrlKey && e.key === "k")) {
            e.preventDefault();
            console.log("Search shortcut triggered")
        }
    }

    useEffect(() => {
        window.addEventListener("keydown", handelShortcut)
        return () => window.removeEventListener("keydown", handelShortcut)
    }, [])

  return (
    <button
        type='button'
        className='flex items-center gap-2 border border-gray-300 px-3 py-1.5 rounded-md text-sm text-gray-700 hover:bg-gray-100 transition-all'
        aria-label='Search (Command+K)'
    >
        <svg
        className="w-4 h-4 text-gray-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
        />
      </svg>

      <span className="hidden sm:inline">Search</span>

      <span className="ml-auto flex gap-1 items-center bg-gray-100 border border-gray-300 rounded px-1 py-0.5">
        <kbd className="text-xs font-semibold text-gray-600">{navigator.platform.toUpperCase().includes("MAC") ? "⌘" : "Ctrl"}</kbd>
        <kbd className="text-xs font-semibold text-gray-600">K</kbd>
      </span>

    </button>
  )
}

export default SearchButton