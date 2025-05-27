import React, { useRef, useState, useEffect } from 'react'
import BlogTopBar from './BlogTopBar'

const BlogLayout = ({ children, toc }) => {
  const [isSidebarOpen, setSdebarOpen] = useState(false)
  const sidebarRef = useRef(null)

  const toggleSidebar = () => setSdebarOpen(prev => !prev)
  const closeSidebar = () => setSdebarOpen(false)

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        closeSidebar()
      }
    }

    if (isSidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isSidebarOpen])

  return (
    <main className="w-full flex flex-col md:flex-row px-4 md:px-10 lg:px-20 py-10 gap-2 relative">

      <div className="block md:hidden">
        <BlogTopBar onToggleSidebar={toggleSidebar} />
      </div>

      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black opacity-30 z-40 md:hidden"></div>
      )}

      <aside
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-200 shadow-lg transform transition-transform duration-300 z-100 md:hidden ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        id="sidebar-quicklinks"
        aria-hidden={!isSidebarOpen}
      >
        <button
          onClick={closeSidebar}
          aria-label="Close sidebar"
          className="absolute top-4 right-4 text-2xl font-bold"
        >
          &times;
        </button>
        <div className="mt-12 px-4">{toc}</div>
      </aside>

      <aside className="hidden md:block md:w-1/4 sticky top-20 self-start">
        {toc}
      </aside>

      <article className="lg:w-3/6 md:w-3/5 prose prose-slate max-w-none">
        {children}
      </article>
    </main>
  )
}

export default BlogLayout