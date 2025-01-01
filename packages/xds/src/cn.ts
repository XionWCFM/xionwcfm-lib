import { type ClassValue, clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

import { vars } from "@xionwcfm/token";

const customTwMerge = extendTailwindMerge({
  extend: {
    theme: {
      colors: Object.entries(vars.colors).map(([key, value]) => {
        const childKeys = typeof value === "object" ? Object.keys(value) : [value];
        return { [key]: childKeys };
      }),
    },
    classGroups: {
      "font-size": Object.keys(vars.fontSize).map((item) => `text-${item}`),
    },
  },
});

export const cn = (...inputs: ClassValue[]) => {
  return customTwMerge(clsx(...inputs));
};
