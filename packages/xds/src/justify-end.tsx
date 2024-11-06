import { Box } from "./box";

import { PolymorphicComponentPropsWithRef } from "./internal-type/polymorphic";

import { PolymorphicRef } from "./internal-type/polymorphic";

import { ElementType, forwardRef } from "react";
import { BoxProps } from "./box";
import { cn } from "./cn";

export const JustifyEnd = forwardRef(function JustifyEnd<C extends ElementType>(
  props: BoxProps<C>,
  ref: PolymorphicRef<C>,
) {
  const { className } = props;
  return <Box ref={ref} {...props} className={cn("flex justify-end", className)} />;
});
