const colors = {
  inherit: "inherit",
  current: "currentColor",
  transparent: "tranparent",

  white: { DEFAULT: "#ffffff;" },
  black: { DEFAULT: "#000000" },

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
};

const borderRadius = {
  xs: "var(--radius)",
  sm: "calc(var(--radius) * 2)",
  md: "calc(var(--radius) * 4)",
  xl: "calc(var(--radius) * 8)",
  circle: "50%",
  full: "9999px",
};

const spacing = {
  "0": "0px",
  "2": "2px",
  "4": "4px",
  "6": "6px",
  "8": "8px",
  "12": "12px",
  "16": "16px",
  "20": "20px",
  "24": "24px",
  "28": "28px",
  "32": "32px",
  "36": "36px",
  "40": "40px",
  "44": "44px",
  "48": "48px",
  "64": "64px",
  "76": "76px",
  "88": "88px",
  "100": "100px",
  "128": "128px",
  "256": "256px",
  "384": "384px",
  "512": "512px",
  "768": "768px",
  "1024": "1024px",
  "1440": "1440px",
  "1/3": "33.3%",
  half: "50%",
  full: "100%",
};

const fontSize = {
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
};

const fontWeight = {
  bold: "700",
  "semi-bold": "600",
  medium: "500",
  regular: "400",
  light: "300",
  thin: "200",
};

const lineHeight = {
  denser: "100%",
  tight: "133%",
  normal: "150%",
  loose: "180%",
  looser: "200%",
};

const boxShadow = {
  xs: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
  sm: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
  md: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  lg: "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
};

const keyframes = {
  "fade-in": {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
  "fade-out": {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
  "toast-slide-up": {
    from: { transform: "translate(-50%,100%)" },
    to: { transform: "translate(-50%,0)" },
  },
  "toast-slide-down": {
    from: { transform: "translate(-50%,0)" },
    to: { transform: "translate(-50%,100%)" },
  },
  "dialog-appear": {
    from: { opacity: 0, transform: "translate(-50%, -48%) scale(0.96)" },
    to: { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
  },
};

const animation = {
  "fade-in-100": "fade-in 100ms ease-in",
  "fade-in-150": "fade-in 150ms ease-in",
  "fade-in-200": "fade-in 200ms ease-in",
  "fade-in-300": "fade-in 300ms ease-in",
  "fade-in-500": "fade-in 500ms ease-in",
  "fade-out-100": "fade-out 100ms ease-in",
  "fade-out-150": "fade-out 150ms ease-in",
  "fade-out-200": "fade-out 200ms ease-in",
  "fade-out-300": "fade-out 300ms ease-in",
  "fade-out-500": "fade-out 500ms ease-in",
  "toast-slide-up": "toast-slide-up 300ms ease-in",
  "toast-slide-down": "toast-slide-down 300ms ease-out",
  "dialog-appear": "dialog-appear 150ms cubic-bezier(0.16, 1, 0.3, 1)",
};

const screens = {
  xs: "450px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
};

export const XION_STYLE = {
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
};
