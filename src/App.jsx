/**
 * Copyright (c) 2025 NPS. All rights reserved.
 * 
 * This script is part of the NPS project and is proprietary software.
 * Unauthorized copying, modification, or distribution, via any medium,
 * is strictly prohibited. Licensed under Proprietary Software.
 *
 * This script defines the main structure of the NPS landing page.
 * It organizes key sections , integrates navigation, and ensures 
 * a clean and responsive layout using Tailwind utility classes.
 *
 * Author: Eng Ibn Muzamir
 * Published : 22/May/2025 
 * Last updated : 22/May/2025
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import {Home, Faqs, Blogs, BlogPost, TutorialPage} from "./pages"
import Layout from "./layouts/Layout"

const App = () => {
  return (
    <Router basename="/Nyumban-verified">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> 
          <Route path="faqs" element={<Faqs />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="blogPost" element={<BlogPost />} />
          <Route path="tutorial" element={<TutorialPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
