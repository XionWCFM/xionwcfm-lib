import { type ElementType, forwardRef } from "react";
import { Box, type BoxRef } from "./box";
import type { BoxProps } from "./box";

export const Center = forwardRef(function Center<C extends ElementType = "div">(
  { as, className, ...rest }: BoxProps<C>,
  ref?: BoxRef<C>,
) {
  const typesRest = rest as BoxProps<C>;
  return (
    <Box className={` @xui-flex @xui-justify-center @xui-items-center ${className}`} ref={ref} as={as} {...typesRest} />
  );
}) as <C extends ElementType = "div">(props: BoxProps<C> & { ref?: BoxRef<C> }) => JSX.Element;