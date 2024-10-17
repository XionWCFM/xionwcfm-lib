const colors = Object.freeze({
  inherit: "inherit",
  current: "currentColor",
  transparent: "tranparent",

  white: { DEFAULT: "var(--white)" },
  black: { DEFAULT: "var(--black)" },

  neutral: {
    "50": "var(--neutral-50)",
    "100": "var(--neutral-100)",
    "200": "var(--neutral-200)",
    "300": "var(--neutral-300)",
    "400": "var(--neutral-400)",
    "500": "var(--neutral-500)",
    "600": "var(--neutral-600)",
    "700": "var(--neutral-700)",
    "800": "var(--neutral-800)",
    "900": "var(--neutral-900)",
    "950": "var(--neutral-950)",
  },

  gray: {
    "50": "var(--gray-50)",
    "100": "var(--gray-100)",
    "200": "var(--gray-200)",
    "300": "var(--gray-300)",
    "400": "var(--gray-400)",
    "500": "var(--gray-500)",
    "600": "var(--gray-600)",
    "700": "var(--gray-700)",
    "800": "var(--gray-800)",
    "900": "var(--gray-900)",
    "950": "var(--gray-950)",
  },

  warning: {
    "50": "var(--warning-50)",
    "100": "var(--warning-100)",
    "200": "var(--warning-200)",
    "300": "var(--warning-300)",
    "400": "var(--warning-400)",
    "500": "var(--warning-500)",
    "600": "var(--warning-600)",
    "700": "var(--warning-700)",
    "800": "var(--warning-800)",
    "900": "var(--warning-900)",
    "950": "var(--warning-950)",
  },

  danger: {
    "50": "var(--danger-50)",
    "100": "var(--danger-100)",
    "200": "var(--danger-200)",
    "300": "var(--danger-300)",
    "400": "var(--danger-400)",
    "500": "var(--danger-500)",
    "600": "var(--danger-600)",
    "700": "var(--danger-700)",
    "800": "var(--danger-800)",
    "900": "var(--danger-900)",
    "950": "var(--danger-950)",
  },

  success: {
    "50": "var(--success-50)",
    "100": "var(--success-100)",
    "200": "var(--success-200)",
    "300": "var(--success-300)",
    "400": "var(--success-400)",
    "500": "var(--success-500)",
    "600": "var(--success-600)",
    "700": "var(--success-700)",
    "800": "var(--success-800)",
    "900": "var(--success-900)",
    "950": "var(--success-950)",
  },

  primary: {
    "50": "var(--primary-50)",
    "100": "var(--primary-100)",
    "200": "var(--primary-200)",
    "300": "var(--primary-300)",
    "400": "var(--primary-400)",
    "500": "var(--primary-500)",
    "600": "var(--primary-600)",
    "700": "var(--primary-700)",
    "800": "var(--primary-800)",
    "900": "var(--primary-900)",
    "950": "var(--primary-950)",
  },
});

const borderRadius = Object.freeze({
  xs: "var(--radius-xs)",
  sm: "var(--radius-sm)",
  md: "var(--radius-md)",
  xl: "var(--radius-xl)",
  circle: "var(--radius-circle)",
  full: "var(--radius-full)",
});

const spacing = Object.freeze({
  "0": "var(--spacing-0)",
  "2": "var(--spacing-2)",
  "4": "var(--spacing-4)",
  "6": "var(--spacing-6)",
  "8": "var(--spacing-8)",
  "12": "var(--spacing-12)",
  "16": "var(--spacing-16)",
  "20": "var(--spacing-20)",
  "24": "var(--spacing-24)",
  "28": "var(--spacing-28)",
  "32": "var(--spacing-32)",
  "36": "var(--spacing-36)",
  "40": "var(--spacing-40)",
  "44": "var(--spacing-44)",
  "48": "var(--spacing-48)",
  "64": "var(--spacing-64)",
  "76": "var(--spacing-76)",
  "88": "var(--spacing-88)",
  "100": "var(--spacing-100)",
  "128": "var(--spacing-128)",
  "256": "var(--spacing-256)",
  "384": "var(--spacing-384)",
  "512": "var(--spacing-512)",
  "768": "var(--spacing-768)",
  "1024": "var(--spacing-1024)",
  "1440": "var(--spacing-1440)",
  "1/3": "var(--spacing-1-3)",
  half: "var(--spacing-half)",
  full: "var(--spacing-full)",
});

const fontSize = Object.freeze({
  "size-12": "calc(var(--font-size) * 3.75)",
  "size-11": "calc(var(--font-size) * 3)",
  "size-10": "calc(var(--font-size) * 2.25)",
  "size-9": "calc(var(--font-size) * 1.75)",
  "size-8": "calc(var(--font-size) * 1.5)",
  "size-7": "calc(var(--font-size) * 1.25)",
  "size-6": "calc(var(--font-size) * 1.125)",
  "size-5": "calc(var(--font-size) * 1)",
  "size-4": "calc(var(--font-size) * 0.875)",
  "size-3": "calc(var(--font-size) * 0.75)",
  "size-2": "calc(var(--font-size) * 0.625)",
  "size-1": "calc(var(--font-size) * 0.5)",
});

const fontWeight = Object.freeze({
  bold: "var(--font-weight-bold)",
  "semi-bold": "var(--font-weight-semi-bold)",
  medium: "var(--font-weight-medium)",
  regular: "var(--font-weight-regular)",
  light: "var(--font-weight-light)",
  thin: "var(--font-weight-thin)",
});

const lineHeight = Object.freeze({
  denser: "var(--line-height-denser)",
  tight: "var(--line-height-tight)",
  normal: "var(--line-height-normal)",
  loose: "var(--line-height-loose)",
  looser: "var(--line-height-looser)",
});

const boxShadow = Object.freeze({
  xs: "var(--box-shadow-xs)",
  sm: "var(--box-shadow-sm)",
  md: "var(--box-shadow-md)",
  lg: "var(--box-shadow-lg)",
});

const keyframes = Object.freeze({
  fadeIn: {
    "0%": { opacity: "0" },
    "100%": { opacity: "1" },
  },
  fadeOut: {
    "0%": { opacity: "1" },
    "100%": { opacity: "0" },
  },
});

const animation = Object.freeze({
  "fadIn-0.5s": "fadeIn 0.5s ease-in-out",
  "fadIn-1s": "fadeIn 1s ease-in-out",
  "fadIn-2s": "fadeIn 1s ease-in-out",
  "fadIn-3s": "fadeIn 1s ease-in-out",
  "fadIn-4s": "fadeIn 1s ease-in-out",
  "fadIn-5s": "fadeIn 1s ease-in-out",
  "fadOut-0.5s": "fadeOut 0.5s ease-in-out",
  "fadOut-1s": "fadeOut 1s ease-in-out",
  "fadOut-2s": "fadeOut 2s ease-in-out",
  "fadOut-3s": "fadeOut 3s ease-in-out",
  "fadOut-4s": "fadeOut 4s ease-in-out",
  "fadOut-5s": "fadeOut 5s ease-in-out",
});

const screens = Object.freeze({
  xs: "450px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
});

export const XION_STYLE = Object.freeze({
  colors,
  borderRadius,
  spacing,
  fontSize,
  fontWeight,
  lineHeight,
  boxShadow,
  keyframes,
  animation,
  screens,
});

export const vars = XION_STYLE;
