import { defineConfig } from "tsup";

export default defineConfig({
  format: ["cjs", "esm"],
  entry: ["./src/index.ts", "!./src/**/*.test.(ts|tsx)"],
  sourcemap: true,
  dts: true,
  clean: true,
  minify: true,
  treeshake: true,
  splitting: false,
});
