import { XION_STYLE } from "@xionwcfm/token";
import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const fixedPlugin = plugin(({ addUtilities }) => {
  addUtilities({
    ".fixed-center": {
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
    ".fixed-top": {
      position: "fixed",
      top: "0%",
      left: "50%",
      transform: "translate(-50%, 0%)",
    },
    ".fixed-left": {
      position: "fixed",
      top: "50%",
      left: "0%",
      transform: "translate(0%, -50%)",
    },
    ".fixed-right": {
      position: "fixed",
      top: "50%",
      right: "0%",
      transform: "translate(0%, -50%)",
    },
    ".fixed-bottom": {
      position: "fixed",
      bottom: "0%",
      left: "50%",
      transform: "translate(-50%, 0%)",
    },
    ".fixed-bottom-left": {
      position: "fixed",
      bottom: "0",
      left: "0",
    },
    ".fixed-bottom-right": {
      position: "fixed",
      bottom: "0",
      right: "0",
    },
    ".fixed-top-left": {
      position: "fixed",
      top: "0",
      left: "0",
    },
    ".fixed-top-right": {
      position: "fixed",
      top: "0",
      right: "0",
    },
  });
});

const config: Config = {
  content: ["./.stories/**/*.{js,ts,jsx,tsx,mdx}", "./src/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: XION_STYLE.colors,
    borderRadius: XION_STYLE.borderRadius,
    spacing: XION_STYLE.spacing,
    fontSize: XION_STYLE.fontSize,
    fontWeight: XION_STYLE.fontWeight,
    lineHeight: XION_STYLE.lineHeight,
    boxShadow: XION_STYLE.boxShadow,
    extend: {
      keyframes: XION_STYLE.keyframes as Config["theme"],
      animation: XION_STYLE.animation,
      screens: XION_STYLE.screens,
    },
  },
  plugins: [fixedPlugin, require("tailwindcss-animate")],
  darkMode: "class",
};
export default config;
