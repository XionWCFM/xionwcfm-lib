import { type ElementType, type ReactNode, forwardRef } from "react";
import { Box, type BoxProps } from "./box";
import { cn } from "./cn";
import { PolymorphicComponentPropsWithRef, PolymorphicRef } from "./internal-type/polymorphic";
import { formatClass } from "./internal-utils/format-class";
import type { SemanticHTMLContentSectionType } from "./internal-utils/type";
import { FlexItemsTypeProps } from "./variants/flex-align-variants";
import { FlexDirectionTypeProps } from "./variants/flex-direction-variants";
import { FlexJustifyTypeProps } from "./variants/flex-justify-variants";
import { GapTypeProps } from "./variants/gap-variants";

type Props<C extends ElementType> = BoxProps<C> &
  FlexDirectionTypeProps &
  GapTypeProps &
  FlexJustifyTypeProps &
  FlexItemsTypeProps;

export const Flex = forwardRef(function Flex<C extends ElementType = "div">(props: Props<C>, ref?: PolymorphicRef<C>) {
  const { children, direction, gap, w, h, justify, items, className, as, ...rest } = props;
  const typedRest = rest as PolymorphicComponentPropsWithRef<C, BoxProps<C>>;
  return (
    <Box
      as={as}
      ref={ref}
      className={cn(
        "flex",
        formatClass(direction, "flex"),
        formatClass(gap, "gap"),
        formatClass(justify, "justify"),
        formatClass(items, "items"),
        className,
      )}
      w={w}
      h={h}
      {...typedRest}
    >
      {children}
    </Box>
  );
}) as <C extends ElementType = "div">(props: Props<C>, ref?: PolymorphicRef<C>) => JSX.Element;
