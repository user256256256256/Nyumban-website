import { sidebarIcon } from '../assets/icons/index.js'

const BlogTopBar = () => {
    return (
      <div className="w-full mt-20 border-y border-gray-200 bg- sticky top-0 z-40">
        <div className="flex items-center justify-between px-4 py-2 max-w-screen-xl mx-auto">
          <button
            type="button"
            className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-black"
            aria-label="Expand sidebar"
            aria-expanded="false"
            aria-controls="sidebar-quicklinks"
          >
            <img src={sidebarIcon} alt="sidebar-icon" />

          </button>
  
        </div>
      </div>
    )
  }
  
  export default BlogTopBar