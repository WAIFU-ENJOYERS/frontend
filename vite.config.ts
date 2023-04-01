// vite.config.ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      provider: 'istanbul', // or 'c8'
      reporter: ['text', 'json', 'html',],
    // reporter: [
    //     ['lcov', { 'projectRoot': '.' }],
    //     ['json', { 'file': 'coverage.json' }],
    //     ['text'],
    //   ]
    },
  },
})
