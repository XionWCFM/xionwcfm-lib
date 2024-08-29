import type {
  PolymorphicComponentProps,
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from "@xionwcfm/types/polymorphic";
import type { VariantProps } from "class-variance-authority";
import { type ElementType, type ReactNode, forwardRef } from "react";
import { cn } from "./external-utils/cn";
import { stackVariants } from "./internal-utils/stack-variants";
import type { SemanticHTMLContentSectionType } from "./internal-utils/type";

type Props<C extends ElementType> = PolymorphicComponentProps<
  C,
  {
    className?: string;
  }
> &
  Pick<VariantProps<typeof stackVariants>, "w" | "h">;

type SpacingType = <C extends ElementType = SemanticHTMLContentSectionType>(
  props: PolymorphicComponentPropsWithRef<C, Props<C>>,
) => ReactNode | null;

export const Spacing: SpacingType = forwardRef(function Spacing<C extends ElementType = "div">(
  { children, as, className, w, h, ...rest }: Props<C>,
  ref?: PolymorphicRef<C>,
) {
  const Component = as || "div";

  return (
    <Component ref={ref} className={cn(stackVariants({ w, h }), className)} {...rest}>
      {children}
    </Component>
  );
});
