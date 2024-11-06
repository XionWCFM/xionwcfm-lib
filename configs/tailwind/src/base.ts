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
  safelist: [
    {
      pattern:
        /(gap|gap-x|gap-y|p|py|px|pl|pr|pt|pb|m|mt|mb|ml|mr|mx|my|w|h|min-w|min-h|max-w|max-h)-(0|2|4|6|8|12|16|20|24|28|32|36|40|44|48|64|76|88|100|128|256|384|512|768|1024|1440|1\/3|2\/3|2\/4|3\/4|half|full|100%)/,
      variants: ["xs", "md", "xl"],
    },
    {
      pattern: /(items)-(start|end|center|baseline|stretch)/,
      variants: ["xs", "md", "xl"],
    },
    {
      pattern: /(flex)-(row|col|row-reverse|col-reverse)/, // 기본 flex-direction 패턴
      variants: ["xs", "md", "xl"], // 반응형 프리픽스 추가
    },
    {
      pattern: /(justify)-(start|end|center|between|around|evenly)/, // 기본 justify 패턴
      variants: ["xs", "md", "xl"], // 반응형 프리픽스 추가
    },
    {
      pattern: /(static|fixed|absolute|relative|sticky)/, // 기본 position 클래스들
      variants: ["xs", "md", "xl"], // 반응형 프리픽스 추가
    },
    {
      pattern: /text-size-(1|2|3|4|5|6|7|8|9|10|11|12)/, // text-size 관련 패턴
      variants: ["xs", "md", "xl"], // 반응형 프리픽스 추가
    },
  ],
  plugins: [fixedPlugin, require("tailwindcss-animate")],
  darkMode: "class",
};

export default config;
