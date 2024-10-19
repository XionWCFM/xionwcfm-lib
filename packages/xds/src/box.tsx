import { Slot } from "@radix-ui/react-slot";
import { type ElementType, type ReactNode, forwardRef } from "react";
import { cn } from "./cn";
import {
  PolymorphicComponentProps,
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from "./internal-type/polymorphic";
import { SpacingSystemProps, getS } from "./internal-utils/get-s";
import { formatResponsiveEnum } from "./internal-utils/responsive-enum";
import { HTypeProps, hVariants } from "./variants/h-variants";
import { MaxHTypeProps, maxHVariants } from "./variants/max-h-variants";
import { MaxWTypeProps, maxWVariants } from "./variants/max-w-variants";
import { MinHTypeProps, minHVariants } from "./variants/min-h-variants";
import { MinWTypeProps, minWVariants } from "./variants/min-w-variants";
import { PositionTypeProps, positionVariants } from "./variants/position-variants";
import { WTypeProps, wVariants } from "./variants/w-variants";

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

export const Box = forwardRef(function Box<C extends ElementType = "div">(
  { children, as, className, asChild = false, ...rest }: PolimophicWithSpacingSystemProps<C>,
  ref?: PolymorphicRef<C>,
) {
  const AsComponent = (as || "div") as C;
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
}) as <C extends ElementType = ElementType>(
  props: PolymorphicComponentPropsWithRef<C, PolimophicWithSpacingSystemProps<C>>,
) => ReactNode;
