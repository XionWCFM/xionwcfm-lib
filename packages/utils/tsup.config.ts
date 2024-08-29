import { defineConfig } from "tsup";

export default defineConfig({
  format: ["cjs", "esm"],
  entry: ["./src/*.(ts|tsx)", "./src/**/*.(ts|tsx)"],
  sourcemap: true,
  dts: true,
  clean: true,
});
