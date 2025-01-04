import type { Options } from "tsup";

export const options: Options = {
  format: ["cjs", "esm"],
  entry: [
    "./src/*.(ts|tsx)",
    "./src/exposes/*.(ts|tsx)",
    "!./src/**/*.stories.(ts|tsx)",
    "!./src/**/*.test.(ts|tsx)",
    "!./stories/*",
  ],
  sourcemap: false,
  dts: true,
  clean: true,
  minify: true,
  treeshake: true,
  splitting: false,
};
