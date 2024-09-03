import { VariantProps, cva } from "class-variance-authority";
import { ResponsiveEnumProps } from "./type";

export type FlexJustifyTypeProps = {
  justify?: ResponsiveEnumProps<VariantProps<typeof flexJustifyVariants>["initial"]>;
};

export const flexJustifyVariants = cva("", {
  variants: {
    initial: {
      start: "justify-start",
      end: "justify-end",
      center: "justify-center",
      between: "justify-between",
      around: "justify-around",
      evenly: "justify-evenly",
    },
    xs: {
      start: "xs:justify-start",
      end: "xs:justify-end",
      center: "xs:justify-center",
      between: "xs:justify-between",
      around: "xs:justify-around",
      evenly: "xs:justify-evenly",
    },
    md: {
      start: "md:justify-start",
      end: "md:justify-end",
      center: "md:justify-center",
      between: "md:justify-between",
      around: "md:justify-around",
      evenly: "md:justify-evenly",
    },
    xl: {
      start: "xl:justify-start",
      end: "xl:justify-end",
      center: "xl:justify-center",
      between: "xl:justify-between",
      around: "xl:justify-around",
      evenly: "xl:justify-evenly",
    },
  },
});
