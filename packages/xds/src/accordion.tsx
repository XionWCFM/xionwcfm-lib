import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import React, { forwardRef, ReactNode } from "react";
import { cn } from "./cn";

export const Root = Accordion.Root;

export const Item = forwardRef<
  React.ElementRef<typeof Accordion.AccordionItem>,
  React.ComponentPropsWithoutRef<typeof Accordion.AccordionItem>
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Item
    className={cn(
      " overflow-hidden outline-none first:mt-0 first:rounded-t last:rounded-b focus-within:relative ",
      className,
    )}
    {...props}
    ref={forwardedRef}
  >
    {children}
  </Accordion.Item>
));

export const Trigger = forwardRef<
  React.ElementRef<typeof Accordion.AccordionTrigger>,
  React.ComponentPropsWithoutRef<typeof Accordion.AccordionTrigger> & { right?: ReactNode }
>(({ children, className, right, ...props }, forwardedRef) => (
  <Accordion.Header className="flex">
    <Accordion.Trigger
      className={cn(
        "group flex h-[45px] flex-1 cursor-default items-center justify-between bg-white px-[16px] text-size-5 leading-none text-neutral-600 outline-none ",
        className,
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
      <ChevronDownIcon
        className=" text-neutral-600 transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180"
        aria-hidden
      />
    </Accordion.Trigger>
  </Accordion.Header>
));

export const Content = forwardRef<
  React.ElementRef<typeof Accordion.AccordionContent>,
  React.ComponentPropsWithoutRef<typeof Accordion.AccordionContent>
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Content
    className={cn(
      "overflow-hidden bg-neutral-50 text-size-5 text-neutral-600 data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown",
      className,
    )}
    {...props}
    ref={forwardedRef}
  >
    <div className="px-5 py-[15px]">{children}</div>
  </Accordion.Content>
));
