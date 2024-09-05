import { defineConfig } from "tsup";

export default defineConfig({
  format: ["cjs", "esm"],
  entry: ["./src/index.ts"],
  sourcemap: true,
  dts: true,
  clean: true,
  minify: true,
  treeshake: true,
});
