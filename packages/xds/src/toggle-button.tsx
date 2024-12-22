import { type ElementType, type MouseEvent, forwardRef } from "react";
import { Box, type BoxRef } from "./box";
import type { BoxProps } from "./box";
import { cn } from "./cn";

export interface ToggleButtonProps {
  selected?: boolean;
  value?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const ToggleButton = forwardRef(function ToggleButton<C extends ElementType = "button">(
  { as, className, selected, value, ...rest }: Omit<BoxProps<C>, "onClick" | "value"> & ToggleButtonProps,
  ref?: BoxRef<C>,
) {
  const typesRest = rest as BoxProps<C>;
  const selectedState = selected ? "selected" : "unselected";
  return (
    <Box className={cn(" cursor-pointer", className)} data-state={selectedState} ref={ref} as={as} {...typesRest} />
  );
}) as <C extends ElementType = "button">(
  props: Omit<BoxProps<C>, "onClick" | "value"> & ToggleButtonProps,
  ref?: BoxRef<C>,
) => JSX.Element;
