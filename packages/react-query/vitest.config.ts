import tsConfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react(), tsConfigPaths()],
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: ["./vitest.setup.tsx"],
    include: ["**/*.test.+(ts|tsx|js)"],
  },
});
