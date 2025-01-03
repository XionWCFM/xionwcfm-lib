import baseConfig from "@repo/tailwindcss-config/base";
import { vars } from "@xionwcfm/token";
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
      keyframes: {
        ...vars.keyframes,
        slideDown: {
          from: { height: "0px" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        slideUp: {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0px" },
        },
      },
      animation: {
        ...vars.animation,
        slideDown: "slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)",
        slideUp: "slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)",
      },
      screens: vars.screens,
    },
  },
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./.storybook/**/*.{js,ts,jsx,tsx,mdx}"],
};
export default config;
