import type { VariantProps } from "class-variance-authority";
import { type ElementType, type ReactNode, forwardRef } from "react";
import { Box, type PolimophicWithSpacingSystemProps } from "./box";
import { cn } from "./external-utils/cn";
import { PolymorphicComponentPropsWithRef, PolymorphicRef } from "./internal-type/polymorphic";
import type { SemanticHTMLContentSectionType } from "./internal-utils/type";
import { stackVariants } from "./variants/stack-variants";

type Props<C extends ElementType> = PolimophicWithSpacingSystemProps<C> & VariantProps<typeof stackVariants>;

type FlexType = <C extends ElementType = SemanticHTMLContentSectionType>(
  props: PolymorphicComponentPropsWithRef<C, Props<C>>,
) => ReactNode | null;
export const Flex: FlexType = forwardRef(function Flex<C extends ElementType = "div">(
  props: Props<C>,
  ref?: PolymorphicRef<C>,
) {
  const { children, direction, gap, w, h, justify, items: align, className, as, ...rest } = props;
  const typedRest = rest as PolymorphicComponentPropsWithRef<C, PolimophicWithSpacingSystemProps<C>>;
  return (
    <Box
      as={as}
      ref={ref}
      className={cn(
        " flex",
        stackVariants({ direction: direction ?? "row", gap, w, h, justify, items: align }),
        className,
      )}
      {...typedRest}
    >
      {children}
    </Box>
  );
});
