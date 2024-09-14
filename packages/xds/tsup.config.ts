import { defineConfig } from "tsup";

export default defineConfig({
  format: ["cjs", "esm"],
  entry: ["./src/*.(ts|tsx)", "!./src/**/*.stories.(ts|tsx)", "!./stories/*"],
  sourcemap: true,
  dts: true,
  clean: true,
  minify: true,
  treeshake: true,
  splitting: false,
});
