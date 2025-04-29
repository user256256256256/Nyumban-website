import React from 'react'

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  const pageRange = 1

  const getPageNumbers = () => {
    const pages = []

    pages.push(1)

    if (currentPage - pageRange > 2) {
      pages.push('...')
    }

    for (
      let i = Math.max(2, currentPage - pageRange);
      i <= Math.min(totalPages - 1, currentPage + pageRange);
      i++
    ) {
      pages.push(i)
    }

    if (currentPage + pageRange < totalPages - 1) {
      pages.push('...')
    }

    if (totalPages > 1) {
      pages.push(totalPages)
    }

    return pages
  }

  const pageNumbers = getPageNumbers()

  return (
    <div className="flex justify-center mt-8 gap-2 flex-wrap sm:flex-nowrap">
      <button
        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
        className="px-3 py-1 border rounded disabled:opacity-50
          text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px]"
      >
        Previous
      </button>

      {pageNumbers.map((page, index) => (
        <button
          key={index}
          onClick={() => setCurrentPage(page === '...' ? currentPage : page)}
          className={`px-3 py-1 border rounded
            text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] 
            ${currentPage === page ? 'bg-vivid-orange text-white' : ''} 
            ${page === '...' ? 'text-gray-500' : ''}`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="px-3 py-1 border rounded disabled:opacity-50
          text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px]"
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
