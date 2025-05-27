const TutorialLayout = ({ children, toc, relatedPosts }) => {
    return (
      <main className="w-full flex flex-col md:flex-row px-4 md:px-10 lg:px-20 py-10 gap-6 relative">
        
        <aside className="hidden md:block md:w-1/4 sticky top-20 self-start">
          {toc}
        </aside>
  
        <article className="md:w-2/4 prose prose-slate max-w-none">
          {children}
        </article>
  
        <aside className="hidden lg:block lg:w-1/4 sticky top-20 self-start">
          <div className="border border-gray-200 p-4 rounded-md shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Tutorial Contents</h3>
            <ul className="space-y-1">
              {relatedPosts.map((post, index) => (
                <li key={post.id}>
                  <a
                    href={post.href}
                    className="text-sm text-blue-600 hover:underline"
                  >
                    {index + 1}. {post.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </main>
    )
  }
  
  export default TutorialLayout
  