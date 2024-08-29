import { VariantProps, cva } from "class-variance-authority";
import { ResponsiveEnumProps } from "./type";

export type FlexDirectionTypeProps = {
  direction?: ResponsiveEnumProps<VariantProps<typeof flexDirectionVariants>["initial"]>;
};

export const flexDirectionVariants = cva("", {
  variants: {
    initial: {
      row: "flex-row",
      column: "flex-col",
      "revers-row": "flex-row-reverse",
      "reverse-column": "flex-col-reverse",
    },
    xs: {
      row: "xs:flex-row",
      column: "xs:flex-col",
      "revers-row": "xs:flex-row-reverse",
      "reverse-column": "xs:flex-col-reverse",
    },
    md: {
      row: "md:flex-row",
      column: "md:flex-col",
      "revers-row": "md:flex-row-reverse",
      "reverse-column": "md:flex-col-reverse",
    },
    xl: {
      row: "xl:flex-row",
      column: "xl:flex-col",
      "revers-row": "xl:flex-row-reverse",
      "reverse-column": "xl:flex-col-reverse",
    },
  },
});
