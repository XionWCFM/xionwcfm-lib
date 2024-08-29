import type { PolymorphicComponentPropsWithRef, PolymorphicRef } from "@xionwcfm/types/polymorphic";
import { type VariantProps, cva } from "class-variance-authority";
import { type ElementType, type ReactNode, forwardRef } from "react";
import { Box, type PolimophicWithSpacingSystemProps } from "./box";
import { cn } from "./external-utils/cn";
import { formatResponsiveEnum } from "./internal-utils/responsive-enum";
import { TextSizeTypeProps, textSizeVariants } from "./internal-utils/text-size-variants";
import type { SemanticHTMLTextContentType } from "./internal-utils/type";

const paragraphVariants = cva(" whitespace-pre-wrap", {
  variants: {
    overflow: {
      default: "",
      ellipsis: "whitespace-nowrap overflow-hidden max-w-[336px] text-ellipsis",
    },
    leading: {
      default: "",
      denser: "leading-denser",
      normal: "leading-normal",
      tight: "leading-tight",
      loose: "leading-loose",
      looser: "leading-looser",
    },
    weight: {
      default: "",
      bold: " font-bold",
      "semi-bold": " font-semi-bold",
      medium: "font-medium",
      regular: "font-regular",
      light: "font-light",
      thin: " font-thin",
    },
    color: {
      default: "",
      white: "text-white",
      "neutral-50": " text-neutral-50",
      "neutral-100": "text-neutral-100",
      "neutral-200": "text-neutral-200",
      "neutral-300": "text-neutral-300",
      "neutral-400": "text-neutral-400",
      "neutral-500": "text-neutral-500",
      "neutral-600": "text-neutral-600",
      "neutral-700": "text-neutral-700",
      "neutral-800": "text-neutral-800",
      "neutral-900": "text-neutral-900",
      "neutral-950": "text-neutral-950",
      "gray-50": "text-gray-50",
      "gray-100": "text-gray-100",
      "gray-200": "text-gray-200",
      "gray-300": "text-gray-300",
      "gray-400": "text-gray-400",
      "gray-500": "text-gray-500",
      "gray-600": "text-gray-600",
      "gray-700": "text-gray-700",
      "gray-800": "text-gray-800",
      "gray-900": "text-gray-900",
      "gray-950": "text-gray-950",
      "warning-50": "text-warning-50",
      "warning-100": "text-warning-100",
      "warning-200": "text-warning-200",
      "warning-300": "text-warning-300",
      "warning-400": "text-warning-400",
      "warning-500": "text-warning-500",
      "warning-600": "text-warning-600",
      "warning-700": "text-warning-700",
      "warning-800": "text-warning-800",
      "warning-900": "text-warning-900",
      "warning-950": "text-warning-950",
      "danger-50": "text-danger-50",
      "danger-100": "text-danger-100",
      "danger-200": "text-danger-200",
      "danger-300": "text-danger-300",
      "danger-400": "text-danger-400",
      "danger-500": "text-danger-500",
      "danger-600": "text-danger-600",
      "danger-700": "text-danger-700",
      "danger-800": "text-danger-800",
      "danger-900": "text-danger-900",
      "danger-950": "text-danger-950",
      "success-50": "text-success-50",
      "success-100": "text-success-100",
      "success-200": "text-success-200",
      "success-300": "text-success-300",
      "success-400": "text-success-400",
      "success-500": "text-success-500",
      "success-600": "text-success-600",
      "success-700": "text-success-700",
      "success-800": "text-success-800",
      "success-900": "text-success-900",
      "success-950": "text-success-950",
      "primary-50": "text-primary-50",
      "primary-100": "text-primary-100",
      "primary-200": "text-primary-200",
      "primary-300": "text-primary-300",
      "primary-400": "text-primary-400",
      "primary-500": "text-primary-500",
      "primary-600": "text-primary-600",
      "primary-700": "text-primary-700",
      "primary-800": "text-primary-800",
      "primary-900": "text-primary-900",
      "primary-950": "text-primary-950",
    },
    responsive: {
      default: "",
      "12": "",
      "11": "",
      "10": "md:text-size-12",
      "9": "md:text-size-11",
      "8": "md:text-size-10",
      "7": "md:text-size-9",
      "6": "md:text-size-8",
      "5": "md:text-size-7",
      "4": "md:text-size-6",
      "3": "md:text-size-5",
      "2": "md:text-size-4",
      "1": "md:text-size-3",
    },
  },
  defaultVariants: {
    overflow: "default",
    color: "default",
    responsive: "default",
    leading: "default",
    weight: "default",
  },
});

type ParagraphVariantType = Omit<VariantProps<typeof paragraphVariants>, "responsive">;

type Props<C extends ElementType> = PolimophicWithSpacingSystemProps<C> &
  ParagraphVariantType & { responsive?: boolean } & TextSizeTypeProps;

type ParagraphType = <C extends ElementType = SemanticHTMLTextContentType>(
  props: PolymorphicComponentPropsWithRef<C, Props<C>>,
) => ReactNode | null;

export const Paragraph: ParagraphType = forwardRef(function Paragraph<C extends ElementType = "p">(
  props: Props<C>,
  ref?: PolymorphicRef<C>,
) {
  const { overflow, size, color, leading, weight, responsive, className, children, as, ...rest } = props;
  const typedRest = rest as PolymorphicComponentPropsWithRef<C, PolimophicWithSpacingSystemProps<C>>;
  const sizeVariant = formatResponsiveEnum(size);
  return (
    <Box
      as={as}
      ref={ref}
      className={cn(
        paragraphVariants({
          overflow,
          color,
          leading,
          weight,
          responsive: responsive ? sizeVariant.initial : "default",
        }),
        textSizeVariants(sizeVariant),
        className,
      )}
      {...typedRest}
    >
      {children}
    </Box>
  );
});
