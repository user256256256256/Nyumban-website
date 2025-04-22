/**
 * Copyright (c) 2025 NPS. All rights reserved.
 *
 * This script is part of the NPS project and is proprietary software.
 * Unauthorized copying, modification, or distribution, via any medium,
 * is strictly prohibited. Licensed under Proprietary Software.
 *
 * Functionality:
 * This script initializes the React application and mounts it to the DOM.
 * It ensures that the app runs in Strict Mode, helping to catch potential 
 * issues and enforce React best practices.
 *
 * Author: Eng Ibn Muzamir
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

