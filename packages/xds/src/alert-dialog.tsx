import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { forwardRef } from "react";
import { cn } from "./cn";

export const Root = AlertDialog.Root;
export const Trigger = AlertDialog.Trigger;
export const Portal = AlertDialog.Portal;
export const Description = AlertDialog.Description;
export const Title = AlertDialog.Title;
export const Action = AlertDialog.Action;
export const Cancel = AlertDialog.Cancel;

export const Overlay = forwardRef<
  React.ElementRef<typeof AlertDialog.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialog.Overlay> & { nostyle?: boolean }
>(({ className, nostyle, ...props }, forwardRef) => {
  return (
    <AlertDialog.Overlay
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
  React.ElementRef<typeof AlertDialog.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialog.Content> & { nostyle?: boolean }
>(({ className, children, nostyle, ...props }, ref) => {
  return (
    <AlertDialog.Content
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
    </AlertDialog.Content>
  );
});
