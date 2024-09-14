import { VariantProps, cva } from "class-variance-authority";
import { ResponsiveEnumProps } from "../internal-utils/type";

export type GapTypeProps = { gap?: ResponsiveEnumProps<VariantProps<typeof gapVariants>["initial"]> };

export const gapVariants = cva("", {
  variants: {
    initial: {
      "0": "gap-0",
      "4": "gap-4",
      "8": "gap-8",
      "12": "gap-12",
      "16": "gap-16",
      "20": "gap-20",
      "24": "gap-24",
      "28": "gap-28",
      "32": "gap-32",
      "36": "gap-36",
      "40": "gap-40",
      "44": "gap-44",
      "48": "gap-48",
    },
    xs: {
      "0": "xs:gap-0",
      "4": "xs:gap-4",
      "8": "xs:gap-8",
      "12": "xs:gap-12",
      "16": "xs:gap-16",
      "20": "xs:gap-20",
      "24": "xs:gap-24",
      "28": "xs:gap-28",
      "32": "xs:gap-32",
      "36": "xs:gap-36",
      "40": "xs:gap-40",
      "44": "xs:gap-44",
      "48": "xs:gap-48",
    },
    md: {
      "0": "md:gap-0",
      "4": "md:gap-4",
      "8": "md:gap-8",
      "12": "md:gap-12",
      "16": "md:gap-16",
      "20": "md:gap-20",
      "24": "md:gap-24",
      "28": "md:gap-28",
      "32": "md:gap-32",
      "36": "md:gap-36",
      "40": "md:gap-40",
      "44": "md:gap-44",
      "48": "md:gap-48",
    },
    xl: {
      "0": "xl:gap-0",
      "4": "xl:gap-4",
      "8": "xl:gap-8",
      "12": "xl:gap-12",
      "16": "xl:gap-16",
      "20": "xl:gap-20",
      "24": "xl:gap-24",
      "28": "xl:gap-28",
      "32": "xl:gap-32",
      "36": "xl:gap-36",
      "40": "xl:gap-40",
      "44": "xl:gap-44",
      "48": "xl:gap-48",
    },
  },
});