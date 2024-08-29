import type { PolymorphicComponentPropsWithRef, PolymorphicRef } from "@xionwcfm/types/polymorphic";
import { type VariantProps, cva } from "class-variance-authority";
import { type ElementType, type ReactNode, forwardRef } from "react";
import type { PolimophicWithSpacingSystemProps } from "./box";
import { cn } from "./external-utils/cn";
import { stackVariants } from "./internal-utils/stack-variants";
import type { SemanticHTMLContentSectionType } from "./internal-utils/type";

const skeletonVariants = cva(" animate-pulse", {
  variants: {
    variant: {
      default: "",
      circle: "rounded-full",
      box: " rounded-xs",
    },
  },

  defaultVariants: {
    variant: "default",
  },
});

type Props<C extends ElementType> = PolimophicWithSpacingSystemProps<C> &
  VariantProps<typeof skeletonVariants> &
  Pick<VariantProps<typeof stackVariants>, "h" | "w">;

type SkeletonType = <C extends ElementType = SemanticHTMLContentSectionType>(
  props: PolymorphicComponentPropsWithRef<C, Props<C>>,
) => ReactNode | null;

export const Skeleton: SkeletonType = forwardRef(function Skeleton<C extends ElementType = "div">(
  { children, as, className, variant, w, h, ...rest }: Props<C>,
  ref?: PolymorphicRef<C>,
) {
  const Component = as || "div";

  return (
    <Component ref={ref} className={cn(stackVariants({ w, h }), skeletonVariants({ variant }), className)} {...rest}>
      {children}
    </Component>
  );
});
