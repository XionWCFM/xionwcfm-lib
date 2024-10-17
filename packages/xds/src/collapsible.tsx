"use client";

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { forwardRef } from "react";
import { cn } from "./cn";

const Root = CollapsiblePrimitive.Root;

const Trigger = CollapsiblePrimitive.CollapsibleTrigger;

const Content = forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.CollapsibleContent>,
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.CollapsibleContent>
>(function Content({ children, className, ...props }, ref) {
  return (
    <CollapsiblePrimitive.CollapsibleContent
      className={cn(
        "data-[state=open]:animate-in  data-[state=open]:fade-in-0  ",
        "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 ",
        className,
      )}
      {...props}
      ref={ref}
    >
      {children}
    </CollapsiblePrimitive.CollapsibleContent>
  );
});

export { Root, Trigger, Content };
