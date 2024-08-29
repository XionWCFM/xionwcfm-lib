import { Slot, Slottable } from "@radix-ui/react-slot";
import type {
  PolymorphicComponentProps,
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from "@xionwcfm/types/polymorphic";
import { type ElementType, type ReactNode, forwardRef } from "react";
import { cn } from "./external-utils/cn";
import { SpacingSystemProps, getS } from "./internal-utils/get-s";
import { HTypeProps, hVariants } from "./internal-utils/h-variants";
import { MaxHTypeProps, maxHVariants } from "./internal-utils/max-h-variants";
import { MaxWTypeProps, maxWVariants } from "./internal-utils/max-w-variants";
import { MinHTypeProps, minHVariants } from "./internal-utils/min-h-variants";
import { MinWTypeProps, minWVariants } from "./internal-utils/min-w-variants";
import { PositionTypeProps, positionVariants } from "./internal-utils/position-variants";
import { formatResponsiveEnum } from "./internal-utils/responsive-enum";
import { WTypeProps, wVariants } from "./internal-utils/w-variants";

export type PolimophicWithSpacingSystemProps<C extends ElementType> = PolymorphicComponentProps<
  C,
  {
    className?: string;
    asChild?: boolean;
  } & SpacingSystemProps &
    PositionTypeProps &
    WTypeProps &
    HTypeProps &
    MinWTypeProps &
    MinHTypeProps &
    MaxWTypeProps &
    MaxHTypeProps
>;

type BoxType = <C extends ElementType = ElementType>(
  props: PolymorphicComponentPropsWithRef<C, PolimophicWithSpacingSystemProps<C>>,
) => ReactNode | null;

export const Box: BoxType = forwardRef(function Box<C extends ElementType = "div">(
  { children, as, className, asChild = false, ...rest }: PolimophicWithSpacingSystemProps<C>,
  ref?: PolymorphicRef<C>,
) {
  const AsComponent = as || "div";
  const SlottableComponent = asChild ? Slot : AsComponent;
  const {
    m,
    my,
    mx,
    mr,
    ml,
    mt,
    mb,
    p,
    py,
    px,
    pr,
    pl,
    pt,
    pb,
    w,
    h,
    minW,
    minH,
    maxW,
    maxH,
    position,
    ...omitSpacingRest
  } = rest;

  return (
    <SlottableComponent
      as={AsComponent}
      ref={ref}
      className={cn(
        getS({ m, my, mx, mr, ml, mt, mb, p, py, px, pr, pl, pt, pb }),
        positionVariants(formatResponsiveEnum(position)),
        wVariants(formatResponsiveEnum(w)),
        hVariants(formatResponsiveEnum(h)),
        minWVariants(formatResponsiveEnum(minW)),
        minHVariants(formatResponsiveEnum(minH)),
        maxWVariants(formatResponsiveEnum(maxW)),
        maxHVariants(formatResponsiveEnum(maxH)),
        className,
      )}
      {...omitSpacingRest}
    >
      {children}
    </SlottableComponent>
  );
});
