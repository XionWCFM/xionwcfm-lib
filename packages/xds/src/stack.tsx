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
import { HTypeProps } from "./variants/h-variants";
import { WTypeProps } from "./variants/w-variants";

type Props<C extends ElementType> = BoxProps<C> &
  FlexItemsTypeProps &
  FlexDirectionTypeProps &
  FlexJustifyTypeProps &
  GapTypeProps &
  WTypeProps &
  HTypeProps;

type StackType = <C extends ElementType = SemanticHTMLContentSectionType>(
  props: PolymorphicComponentPropsWithRef<C, Props<C>>,
) => ReactNode | null;

export const Stack: StackType = forwardRef(function Stack<C extends ElementType = "div">(
  props: Props<C>,
  ref?: PolymorphicRef<C>,
) {
  const { children, direction, gap, w, h, justify, items, className, as, ...rest } = props;
  const typedRest = rest as PolymorphicComponentPropsWithRef<C, BoxProps<C>>;
  return (
    <Box
      as={as}
      ref={ref}
      className={cn(
        " flex flex-col",
        formatClass(items, "items"),
        formatClass(direction, "flex"),
        formatClass(justify, "justify"),
        formatClass(gap, "gap"),
        formatClass(w, "w"),
        formatClass(h, "h"),
        className,
      )}
      {...typedRest}
    >
      {children}
    </Box>
  );
});
