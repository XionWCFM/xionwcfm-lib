import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      reporter: ["text", "json-summary", "json", "lcov"],
      reportOnFailure: true,
    },
    workspace: ["packages/*"],
  },
});
