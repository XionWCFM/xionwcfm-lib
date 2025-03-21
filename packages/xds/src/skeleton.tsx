import { type VariantProps, cva } from "class-variance-authority";
import { type ElementType, type ReactNode, forwardRef } from "react";
import type { BoxProps } from "./box";
import { cn } from "./cn";
import { PolymorphicComponentPropsWithRef, PolymorphicRef } from "./internal-type/polymorphic";
import type { SemanticHTMLContentSectionType } from "./internal-utils/type";
import { stackVariants } from "./variants/stack-variants";

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

type Props<C extends ElementType> = BoxProps<C> &
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
