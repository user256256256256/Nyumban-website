import { sidebarIcon } from '../assets/icons/index.js'

const BlogTopBar = ({ onToggleSidebar }) => {
  return (
    <div className="w-full mt-20 border-y border-gray-200 sticky top-0 bg-white z-40">
      <div className="flex items-center justify-between px-4 py-2 max-w-screen-xl mx-auto">
        <button
          type="button"
          onClick={onToggleSidebar}
          className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-black"
          aria-label="Expand sidebar"
          aria-controls="sidebar-quicklinks"
        >
          <img src={sidebarIcon} alt="Sidebar icon" />
          <span>Menu</span>
        </button>
      </div>
    </div>
  )
}

export default BlogTopBar
