import tsConfigPaths from "vite-tsconfig-paths";
import { type UserConfig, defineConfig } from "vitest/config";

import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react(), tsConfigPaths()],
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: ["./vitest.setup.tsx"],
    include: ["**/*.test.+(ts|tsx|js)"],
    sequence: {
      shuffle: true,
    },
    poolOptions: {
      threads: {
        singleThread: true,
      },
      forks: {
        singleFork: true,
      },
    },
    maxConcurrency: 1,
  },
  resolve: {
    alias: {
      "~/public": "/public",
    },
  },
} as UserConfig);
