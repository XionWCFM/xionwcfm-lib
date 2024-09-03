import * as SeparatorPrimitives from "@radix-ui/react-separator";
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from "react";
import { cn } from "./external-utils/cn";

export const Separator = forwardRef<
  ElementRef<typeof SeparatorPrimitives.Root>,
  ComponentPropsWithoutRef<typeof SeparatorPrimitives.Root>
>(function Separator(props, ref) {
  const { className, ...rest } = props;
  return <SeparatorPrimitives.Root className={cn(className)} {...rest} ref={ref} />;
});
