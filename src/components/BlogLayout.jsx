import React from 'react'

const BlogLayout = ({ children, toc }) => {
  return (
    <main className="w-full flex flex-col md:flex-row px-4 md:px-10 lg:px-20 py-10 gap-2">
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
