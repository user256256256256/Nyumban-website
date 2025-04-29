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
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import {Home, Faqs, Blogs} from "./pages"
import Layout from "./layouts/Layout"

const App = () => {
  return (
    <Router basename="/Nyumbani-verified">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> 
          <Route path="faqs" element={<Faqs />} />
          <Route path="blogs" element={<Blogs />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
