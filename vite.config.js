/**
 * Copyright (c) 2025 NPS. All rights reserved.
 * 
 * This configuration file is part of the NPS project and is proprietary software.
 * Unauthorized copying, modification, or distribution, via any medium,
 * is strictly prohibited. Licensed under Proprietary Software.
 *
 * This script defines the Vite build configuration for the NPS project.
 * It integrates React and Tailwind CSS plugins to ensure efficient bundling 
 * and a streamlined development workflow.
 *
 * Author: Eng Ibn Muzamir
 */

import { defineConfig } from 'vite'
import tailwindcss from "@tailwindcss/vite";
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  base: '/Nyumbani-verified/',
})
