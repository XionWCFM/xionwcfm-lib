import baseConfig from "@xionwcfm/tailwindcss-config/base";
import { XION_STYLE as vars } from "@xionwcfm/token";
import type { Config } from "tailwindcss";
const config: Config = {
  ...baseConfig,
  theme: {
    colors: vars.colors,
    borderRadius: vars.borderRadius,
    spacing: vars.spacing,
    fontSize: vars.fontSize,
    fontWeight: vars.fontWeight,
    lineHeight: vars.lineHeight,
    boxShadow: vars.boxShadow,
    extend: {
      keyframes: vars.keyframes,
      animation: vars.animation,
      screens: vars.screens,
    },
  },
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./.storybook/**/*.{js,ts,jsx,tsx,mdx}"],
};
export default config;
