import config from "@repo/tsup-config";
import { defineConfig } from "tsup";

export default defineConfig({
  ...config,
  clean: true,
});
