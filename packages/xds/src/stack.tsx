import { type ElementType, type ReactNode, forwardRef } from "react";
import { Box, type PolimophicWithSpacingSystemProps } from "./box";
import { cn } from "./cn";
import { PolymorphicComponentPropsWithRef, PolymorphicRef } from "./internal-type/polymorphic";
import { formatResponsiveEnum } from "./internal-utils/responsive-enum";
import type { SemanticHTMLContentSectionType } from "./internal-utils/type";
import { FlexItemsTypeProps, flexItemsVariants } from "./variants/flex-align-variants";
import { FlexDirectionTypeProps, flexDirectionVariants } from "./variants/flex-direction-variants";
import { FlexJustifyTypeProps, flexJustifyVariants } from "./variants/flex-justify-variants";
import { GapTypeProps, gapVariants } from "./variants/gap-variants";
import { HTypeProps, hVariants } from "./variants/h-variants";
import { WTypeProps, wVariants } from "./variants/w-variants";

type Props<C extends ElementType> = PolimophicWithSpacingSystemProps<C> &
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
  const typedRest = rest as PolymorphicComponentPropsWithRef<C, PolimophicWithSpacingSystemProps<C>>;
  return (
    <Box
      as={as}
      ref={ref}
      className={cn(
        " flex flex-col",
        flexItemsVariants(formatResponsiveEnum(items)),
        flexDirectionVariants(formatResponsiveEnum(direction)),
        flexJustifyVariants(formatResponsiveEnum(justify)),
        wVariants(formatResponsiveEnum(w)),
        hVariants(formatResponsiveEnum(h)),
        gapVariants(formatResponsiveEnum(gap)),
        className,
      )}
      {...typedRest}
    >
      {children}
    </Box>
  );
});
