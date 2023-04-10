// vite.config.ts
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      provider: "istanbul", // or 'c8'
      reporter: [
        ["lcov", { projectRoot: "." }],
        ["json", { file: "coverage.json" }],
        ["text"],
      ],
    },
  },
});
