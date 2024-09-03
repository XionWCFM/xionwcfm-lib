import { VariantProps, cva } from "class-variance-authority";
import { ResponsiveEnumProps } from "./type";

// FlexAlignTypeProps 타입 정의, align에 사이즈별로 적용할 수 있게 타입 정의
export type FlexItemsTypeProps = {
  items?: ResponsiveEnumProps<VariantProps<typeof flexItemsVariants>["initial"]>;
};

export const flexItemsVariants = cva("", {
  variants: {
    initial: {
      start: "items-start",
      end: "items-end",
      center: "items-center",
      baseline: "items-baseline",
      stretch: "items-stretch",
    },
    xs: {
      start: "xs:items-start",
      end: "xs:items-end",
      center: "xs:items-center",
      baseline: "xs:items-baseline",
      stretch: "xs:items-stretch",
    },
    md: {
      start: "md:items-start",
      end: "md:items-end",
      center: "md:items-center",
      baseline: "md:items-baseline",
      stretch: "md:items-stretch",
    },
    xl: {
      start: "xl:items-start",
      end: "xl:items-end",
      center: "xl:items-center",
      baseline: "xl:items-baseline",
      stretch: "xl:items-stretch",
    },
  },
});
