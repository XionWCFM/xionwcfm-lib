import * as SwitchPrimitives from "@radix-ui/react-switch";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { cn } from "./cn";

export const Root = forwardRef<
  ElementRef<typeof SwitchPrimitives.Root>,
  ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(function SwitchRoot(props, forwardRef) {
  const { className, ...rest } = props;
  return (
    <SwitchPrimitives.Root
      className={cn(
        " w-[50px] h-[30px] rounded-full bg-gray-200 relative",
        " data-[state=checked]:bg-primary-500",
        "outline-none transition-colors duration-200",
        " disabled:opacity-30",
      )}
      {...rest}
    />
  );
});

export const Thumb = forwardRef<
  ElementRef<typeof SwitchPrimitives.Thumb>,
  ComponentPropsWithoutRef<typeof SwitchPrimitives.Thumb>
>(function SwitchThumb(props, forwardRef) {
  const { className, ...rest } = props;
  return (
    <SwitchPrimitives.Thumb
      className={cn(
        " translate-x-2 block",
        " w-[16px] h-[16px] translate-x-[7px] bg-white transition-all duration-200 rounded-full",
        " will-change-transform data-[state=checked]:translate-x-[22px]",
        " data-[state=checked]:w-[24px] data-[state=checked]:h-[24px]",
      )}
      ref={forwardRef}
      {...rest}
    />
  );
});

export const Switch = {
  Root,
  Thumb,
};
