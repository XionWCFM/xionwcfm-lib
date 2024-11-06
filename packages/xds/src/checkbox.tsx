import * as CheckBoxPrimitves from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { cn } from "./cn";

export const Checkbox = forwardRef<
  ElementRef<typeof CheckBoxPrimitves.Root>,
  ComponentPropsWithoutRef<typeof CheckBoxPrimitves.Root>
>(function Checkbox({ className, ...props }, ref) {
  return (
    <CheckBoxPrimitves.Root
      className={cn(
        "group flex items-center justify-center appearance-none size-24",
        " disabled:opacity-50 disabled:cursor-not-allowed",
        " duration-200 transition-colors",
        className,
      )}
      {...props}
      ref={ref}
    >
      <CheckBoxPrimitves.Indicator>
        <CheckIcon className={cn(" text-primary-500 size-20  ", "group-disabled:hidden")} />
      </CheckBoxPrimitves.Indicator>
    </CheckBoxPrimitves.Root>
  );
});

export const CircleCheckbox = forwardRef<
  ElementRef<typeof CheckBoxPrimitves.Root>,
  ComponentPropsWithoutRef<typeof CheckBoxPrimitves.Root>
>(function Checkbox({ className, ...props }, ref) {
  return (
    <CheckBoxPrimitves.Root
      className={cn(
        "group flex items-center justify-center appearance-none size-24 rounded-full ring-[1px] ring-gray-300",
        "data-[state=checked]:bg-primary-500 data-[state=checked]:ring-0 ",
        " disabled:opacity-50 disabled:cursor-not-allowed",
        " duration-200 transition-colors",
        className,
      )}
      {...props}
      ref={ref}
    >
      <div className=" hidden group-disabled:block w-[calc(100%-2px)] h-[calc(100%-2px)] bg-gray-300 rounded-full" />
      <CheckIcon
        className={cn(
          " group-data-[state=unchecked]:text-gray-300 size-20  group-data-[state=checked]:text-white",
          "group-disabled:hidden",
        )}
      />
    </CheckBoxPrimitves.Root>
  );
});

export const NumberCheckbox = forwardRef<
  ElementRef<typeof CheckBoxPrimitves.Root>,
  ComponentPropsWithoutRef<typeof CheckBoxPrimitves.Root>
>(function NumberCheckbox({ className, children, ...props }, ref) {
  return (
    <CheckBoxPrimitves.Root
      className={cn(
        "group flex items-center justify-center appearance-none w-24 h-24  rounded-full ring-[1px] ring-gray-300",
        " data-[state=checked]:w-fit",
        " data-[state=checked]:bg-primary-500 data-[state=checked]:ring-0",
        "disabled:opacity-50",
        "duration-200 transition-all",
        className,
      )}
      {...props}
      ref={ref}
    >
      <div className=" hidden group-disabled:block w-[22px] h-[22px]  bg-gray-300 rounded-full" />
      <div className=" hidden px-8 group-data-[state=unchecked]:max-w-[4px] group-data-[state=checked]:block font-regular text-white text-size-5">
        {children}
      </div>
    </CheckBoxPrimitves.Root>
  );
});
