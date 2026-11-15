import js from '@eslint/js'
import react from 'eslint-plugin-react'
import hooks from 'eslint-plugin-react-hooks'
import a11y from 'eslint-plugin-jsx-a11y'
import globals from 'globals'

// Kod yoxlaması: npm run lint
// - react-hooks: effekt/ref səhvləri, - jsx-a11y: əlçatanlıq (klaviatura, alt, label və s.)
export default [
  { ignores: ['dist', 'node_modules'] },
  js.configs.recommended,
  {
    files: ['src/**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    plugins: { react, 'react-hooks': hooks, 'jsx-a11y': a11y },
    settings: { react: { version: '18' } },
    rules: {
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...hooks.configs.recommended.rules,
      ...a11y.flatConfigs.recommended.rules,
      'react/prop-types': 'off',
      'no-unused-vars': ['warn', { varsIgnorePattern: '^_' }],
    },
  },
  {
    // vite.config.js Node mühitində işləyir
    files: ['vite.config.js', 'eslint.config.js'],
    languageOptions: { ecmaVersion: 2023, sourceType: 'module', globals: globals.node },
  },
]
