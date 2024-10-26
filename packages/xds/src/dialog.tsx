import * as RadixDialog from "@radix-ui/react-dialog";
import { forwardRef } from "react";
import { cn } from "./cn";

export const Root = RadixDialog.Root;
export const Trigger = RadixDialog.Trigger;
export const Close = RadixDialog.Close;
export const Portal = RadixDialog.Portal;
export const Description = RadixDialog.Description;
export const Title = RadixDialog.Title;
export const Overlay = forwardRef<
  React.ElementRef<typeof RadixDialog.Overlay>,
  React.ComponentPropsWithoutRef<typeof RadixDialog.Overlay> & { nostyle?: boolean }
>(({ className, nostyle, ...props }, forwardRef) => {
  return (
    <RadixDialog.Overlay
      {...props}
      ref={forwardRef}
      className={cn(
        !nostyle &&
          `
        data-[state=open]:animate-in data-[state=open]:fade-in-0
        data-[state=closed]:animate-out data-[state=closed]:fade-out-0  
        z-30 fixed   inset-0 backdrop-blur  bg-[rgba(0,0,0,0.4)]
        `,
        className,
      )}
    />
  );
});

export const Content = forwardRef<
  React.ElementRef<typeof RadixDialog.Content>,
  React.ComponentPropsWithoutRef<typeof RadixDialog.Content> & { nostyle?: boolean }
>(({ className, children, nostyle, ...props }, ref) => {
  return (
    <RadixDialog.Content
      className={cn(
        !nostyle &&
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
