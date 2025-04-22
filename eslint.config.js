/**
 * Copyright (c) 2025 NPS. All rights reserved.
 * 
 * This configuration file is part of the NPS project and is proprietary software.
 * Unauthorized copying, modification, or distribution, via any medium,
 * is strictly prohibited. Licensed under Proprietary Software.
 *
 * This script defines ESLint rules and settings for the NPS project,
 * ensuring consistent code quality, best practices, and adherence to 
 * React and JavaScript standards. It integrates recommended rules 
 * and plugins for optimized linting, including React Hooks and Refresh.
 *
 * Author: Eng Ibn Muzamir
 */

import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
]
