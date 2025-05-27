import React, { useEffect, useState } from 'react'
import BlogLayout from '../components/BlogLayout'
import TableOfContents from '../components/TableOfContents'

const headings = [
  { id: 'intro', text: 'Introduction' },
  { id: 'setup', text: 'Setup Instructions' },
  { id: 'next-steps', text: 'Next Steps' }
]

const BlogPost = () => {
  return (
    <BlogLayout toc={<TableOfContents headings={headings} />}>
      <section className="mt-30">
        <h1 id="intro">How to Get Started</h1>
        <p>Learn how to quickly set up and start using Nyumban...</p>

        <h2 id="setup">Setup Instructions</h2>
        <p>Follow these steps to get up and running...</p>

        <h2 id="next-steps">Next Steps</h2>
        <p>Once setup is complete, here’s what you can do next...</p>
      </section>
    </BlogLayout>
  )
}

export default BlogPost
