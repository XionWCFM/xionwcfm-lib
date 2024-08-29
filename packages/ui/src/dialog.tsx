import * as RadixDialog from "@radix-ui/react-dialog";
import { forwardRef } from "react";
import { cn } from "./external-utils/cn";

const Root = RadixDialog.Root;
const Trigger = RadixDialog.Trigger;
const Close = RadixDialog.Close;
const Portal = RadixDialog.Portal;
const Overlay = forwardRef<
  React.ElementRef<typeof RadixDialog.Overlay>,
  React.ComponentPropsWithoutRef<typeof RadixDialog.Overlay>
>(({ className, ...props }, forwardRef) => {
  return (
    <RadixDialog.Overlay
      {...props}
      ref={forwardRef}
      className={cn(
        `
        data-[state=open]:animate-in data-[state=open]:fade-in-0
        data-[state=closed]:animate-out data-[state=closed]:fade-out-0  
        z-30 fixed  backdrop-blur inset-0  bg-black/50 
        `,
        className,
      )}
    />
  );
});

const Content = forwardRef<
  React.ElementRef<typeof RadixDialog.Content>,
  React.ComponentPropsWithoutRef<typeof RadixDialog.Content>
>(({ className, children, ...props }, ref) => {
  return (
    <RadixDialog.Content
      className={cn(
        `fixed left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] z-40
            data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]
            data-[state=closed]:animate-out data-[state=closed]:fade-out-0  data-[state=closed]:zoom-out-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]  `,
        className,
      )}
      {...props}
      ref={ref}
    >
      {children}
    </RadixDialog.Content>
  );
});

export const DialogPrimitives = {
  Content,
  Root,
  Trigger,
  Close,
  Portal,
  Overlay,
};
