import React, { useEffect, useState } from 'react'

const TableOfContents = ({ headings }) => {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: '0px 0px -60% 0px',
        threshold: 0.1,
      }
    )

    headings.forEach(heading => {
      const el = document.getElementById(heading.id)
      if (el) observer.observe(el)
    })

    return () => {
      headings.forEach(heading => {
        const el = document.getElementById(heading.id)
        if (el) observer.unobserve(el)
      })
    }
  }, [headings])

  return (
    <nav className="text-sm mt-10">
      <h2 className="font-semibold mb-2 text-lg tracking-wider [word-spacing:0.2em]">
        Table of Contents
      </h2>
      <ul className="space-y-1 pl-4 border-l border-slate-gray">
        {headings.map((heading, index) => (
          <li key={index}>
            <a
              href={`#${heading.id}`}
              onClick={() => setActiveId(heading.id)}  
              className={` px-2 py-1 rounded transition-colors duration-200 ${
                activeId === heading.id
                  ? 'bg-vivid-orange text-white font-semibold'
                  : 'hover:bg-vivid-orange hover:text-white text-gray-700'
              }`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default TableOfContents
