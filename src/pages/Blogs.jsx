import React, { useState } from 'react'
import { tabData, blogPosts } from '../constants'
import { BlogCard, Pagination } from '../components'

const Blogs = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 10

  const activeCategory = tabData[activeTab].label

  const filteredPosts = 
  activeCategory === "All"
  ? blogPosts
  : blogPosts.filter(post => post.category === activeCategory)

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const visiblePosts = filteredPosts.slice(startIndex, endIndex)
  
  return (
    <main className='relative'>
    <section className="mx-auto w-11/12 md:w-4/5 my-10 mt-40">
      <h1 className="text-[40px] md:text-[50px] font-bold mb-4 font-palanquin">
        Blogs
      </h1>
      <p className="text-slate-gray mb-10">
        {tabData[activeTab].content}
      </p>

      <div className="flex flex-wrap gap-4 border-b border-neutral-700 mb-6">
        {tabData.map((tab, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveTab(index)
              setCurrentPage(1)
            }}

            className={`pb-2 text-sm md:text-base font-medium transition-all ${
              activeTab === index
                ? 'text-vivid-orange border-b-2 border-vivid-orange'
                : 'text-slate-gray hover:text-vivid-orange'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visiblePosts.length > 0 ? (
            visiblePosts.map(post => (
              <BlogCard 
              key={post.id} 
              title={post.title}  
              date={post.date}
              author={post.author}
              authorImage={post.authorImage}
              description={post.description}
              link={post.link} 
              />
            ))
          ) : (
            <p className="text-slate-600 col-span-full">No posts available for this category.</p>
          )}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />


    </section>
  </main>
  )
}

export default Blogs