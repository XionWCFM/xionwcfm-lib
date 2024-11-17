import { Box } from "./box";

import { PolymorphicComponentPropsWithRef } from "./internal-type/polymorphic";

import { PolymorphicRef } from "./internal-type/polymorphic";

import { ElementType, forwardRef } from "react";
import { BoxProps } from "./box";
import { cn } from "./cn";

export const JustifyBetween = forwardRef(function JustifyBetween<C extends ElementType>(
  props: BoxProps<C>,
  ref: PolymorphicRef<C>,
) {
  const { className } = props;
  return <Box ref={ref} {...props} className={cn("flex justify-between", className)} />;
}) as <C extends ElementType = "div">(props: BoxProps<C>, ref?: PolymorphicRef<C>) => JSX.Element;
