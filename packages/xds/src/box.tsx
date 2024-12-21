import { Slot } from "@radix-ui/react-slot";
import { type ElementType, type ReactNode, forwardRef } from "react";
import { cn } from "./cn";
import {
  PolymorphicComponentProps,
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from "./internal-type/polymorphic";
import { formatClass } from "./internal-utils/format-class";
import { SpacingSystemProps, getS } from "./internal-utils/get-s";
import { HTypeProps } from "./variants/h-variants";
import { MaxHTypeProps } from "./variants/max-h-variants";
import { MaxWTypeProps } from "./variants/max-w-variants";
import { MinHTypeProps } from "./variants/min-h-variants";
import { MinWTypeProps } from "./variants/min-w-variants";
import { PositionTypeProps } from "./variants/position-variants";
import { WTypeProps } from "./variants/w-variants";

export type BoxProps<C extends ElementType> = PolymorphicComponentProps<
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

export type BoxRef<C extends ElementType> = PolymorphicRef<C>;

export const Box = forwardRef(function Box<C extends ElementType = "div">(
  { children, as, className, asChild = false, ...rest }: BoxProps<C>,
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
        formatClass(position),
        formatClass(w, "w"),
        formatClass(h, "h"),
        formatClass(minW, "min-w"),
        formatClass(minH, "min-h"),
        formatClass(maxW, "max-w"),
        formatClass(maxH, "max-h"),
        className,
      )}
      {...omitSpacingRest}
    >
      {children}
    </SlottableComponent>
  );
}) as <C extends ElementType = ElementType>(props: BoxProps<C>) => JSX.Element;
