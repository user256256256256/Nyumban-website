import TutorialLayout from '../components/TutorialLayout'
import TableOfContents from '../components/TableOfContents'

const tocHeadings = [
  { id: 'intro', text: 'Introduction' },
  { id: 'setup', text: 'Installation' },
  { id: 'advanced', text: 'Advanced Setup' }
]

const relatedPosts = [
  { id: 1, title: 'Step 1: Getting Started', href: '/tutorials/step-1' },
  { id: 2, title: 'Step 2: Configuration', href: '/tutorials/step-2' },
  { id: 3, title: 'Step 3: Deployment', href: '/tutorials/step-3' }
]

const TutorialPage = () => (
  <TutorialLayout
    toc={<TableOfContents headings={tocHeadings} />}
    relatedPosts={relatedPosts}
  >
    <h1 id="intro">Welcome to the Tutorial</h1>
    <p>This tutorial walks you through...</p>

    <h2 id="setup">Installation</h2>
    <p>Install everything with...</p>

    <h2 id="advanced">Advanced Setup</h2>
    <p>For power users...</p>
  </TutorialLayout>
)

export default TutorialPage