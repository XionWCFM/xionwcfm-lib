"use client";

import { CaretSortIcon, CheckIcon, ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import * as SelectPrimitive from "@radix-ui/react-select";
import * as React from "react";
import { cn } from "./cn";

const Root = SelectPrimitive.Root;

const Group = SelectPrimitive.Group;

const Value = SelectPrimitive.Value;

const Trigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      " text-neutral-600 data-[placeholder]:text-neutral-400 bg-neutral-50 text-size-5",
      " outline-none flex w-full min-h-[40px] items-center  justify-between whitespace-nowrap rounded-[8px]  py-[8px] px-[8px]  font-medium disabled:cursor-not-allowed disabled:opacity-50 ",
      className,
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <CaretSortIcon className="h-[16px] w-[16px] opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));

Trigger.displayName = SelectPrimitive.Trigger.displayName;

const ScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(" text-neutral-600", "flex cursor-default items-center justify-center  py-[4px]", className)}
    {...props}
  >
    <ChevronUpIcon />
  </SelectPrimitive.ScrollUpButton>
));
ScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const ScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(" text-neutral-600", "flex cursor-default items-center justify-center py-[4px]", className)}
    {...props}
  >
    <ChevronDownIcon />
  </SelectPrimitive.ScrollDownButton>
));

ScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;

const Content = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 max-h-[160px] min-w-[--radix-select-trigger-width] ring-[1px] ring-neutral-100 rounded-[12px] overflow-hidden bg-white ",
        " data-[state=open]:zoom-in-95 data-[state=open]:animate-in ",
        "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 ",
        " data-[side=bottom]:slide-in-from-top-[8px] data-[side=left]:slide-in-from-right-[8px] data-[side=right]:slide-in-from-left-[8px] data-[side=top]:slide-in-from-bottom-[8px]",
        position === "popper" &&
          "data-[side=bottom]:translate-y-[8px] data-[side=left]:-translate-x-[8px] data-[side=right]:translate-x-[8px] data-[side=top]:-translate-y-[8px]",
        className,
      )}
      position={position}
      {...props}
    >
      <ScrollUpButton />

      <SelectPrimitive.Viewport
        className={cn(
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <ScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
Content.displayName = SelectPrimitive.Content.displayName;

const Label = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("px-[8px] py-[6px] text-size-5 font-semibold", className)}
    {...props}
  />
));
Label.displayName = SelectPrimitive.Label.displayName;

const Item = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "focus:bg-neutral-50 focus:text-neutral-600 text-neutral-600",
      "relative flex w-full cursor-default select-none items-center  p-[8px] text-size-5 outline-none  data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      " data-[state=checked]:bg-neutral-50 data-[state=checked]:text-neutral-600",
      className,
    )}
    {...props}
  >
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    <SelectPrimitive.ItemIndicator></SelectPrimitive.ItemIndicator>
  </SelectPrimitive.Item>
));
Item.displayName = SelectPrimitive.Item.displayName;

const Separator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("-mx-[4px] my-[4px] h-[1px] bg-neutral-100", className)}
    {...props}
  />
));
Separator.displayName = SelectPrimitive.Separator.displayName;

export { Root, Group, Value, Trigger, Content, Label, Item, Separator, ScrollUpButton, ScrollDownButton };
