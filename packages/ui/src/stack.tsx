import type { PolymorphicComponentPropsWithRef, PolymorphicRef } from "@xionwcfm/types/polymorphic";
import { type ElementType, type ReactNode, forwardRef } from "react";
import { Box, type PolimophicWithSpacingSystemProps } from "./box";
import { cn } from "./external-utils/cn";
import { FlexItemsTypeProps, flexItemsVariants } from "./internal-utils/flex-align-variants";
import { FlexDirectionTypeProps, flexDirectionVariants } from "./internal-utils/flex-direction-variants";
import { FlexJustifyTypeProps, flexJustifyVariants } from "./internal-utils/flex-justify-variants";
import { GapTypeProps, gapVariants } from "./internal-utils/gap-variants";
import { HTypeProps, hVariants } from "./internal-utils/h-variants";
import { formatResponsiveEnum } from "./internal-utils/responsive-enum";
import type { SemanticHTMLContentSectionType } from "./internal-utils/type";
import { WTypeProps, wVariants } from "./internal-utils/w-variants";

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
