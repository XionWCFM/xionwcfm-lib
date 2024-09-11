import * as SwitchPrimitives from "@radix-ui/react-switch";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { cn } from "./external-utils/cn";

const Root = forwardRef<
  ElementRef<typeof SwitchPrimitives.Root>,
  ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(function SwitchRoot(props, forwardRef) {
  const { className, ...rest } = props;
  return (
    <SwitchPrimitives.Root
      className={cn(
        " w-[100px] h-[60px] rounded-full bg-gray-200 relative",
        " data-[state=checked]:bg-primary-500",
        "outline-none transition-colors duration-200",
      )}
      {...rest}
    />
  );
});

const Thumb = forwardRef<
  ElementRef<typeof SwitchPrimitives.Thumb>,
  ComponentPropsWithoutRef<typeof SwitchPrimitives.Thumb>
>(function SwitchThumb(props, forwardRef) {
  const { className, ...rest } = props;
  return (
    <SwitchPrimitives.Thumb
      className={cn(
        " translate-x-4 block",
        " w-[32px] h-[32px] translate-x-[14px] bg-white transition-all duration-200 rounded-full",
        " will-change-transform data-[state=checked]:translate-x-[44px]",
        " data-[state=checked]:w-[48px] data-[state=checked]:h-[48px]",
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
