import { ComponentProps, ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from "react";
import { Drawer as DrawerPrimitive } from "vaul";
import { cn } from "./external-utils/cn";
import { FixedLayout } from "./fixed-layout";

const Root = ({ shouldScaleBackground = true, ...props }: ComponentProps<typeof DrawerPrimitive.Root>) => (
  <DrawerPrimitive.Root shouldScaleBackground={shouldScaleBackground} {...props} />
);
Root.displayName = "BottomSheetRoot";

const Trigger = forwardRef<
  ElementRef<typeof DrawerPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof DrawerPrimitive.Trigger>
>((props, ref) => {
  const { className, ...rest } = props;
  return <DrawerPrimitive.Trigger ref={ref} className={cn(className)} {...rest} />;
});

const Close = DrawerPrimitive.Close;

const Handle = forwardRef<
  ElementRef<typeof DrawerPrimitive.Handle>,
  ComponentPropsWithoutRef<typeof DrawerPrimitive.Handle>
>((props, ref) => {
  const { children, className, ...rest } = props;
  return (
    <DrawerPrimitive.Handle
      className={cn(
        "top-[16px] mb-8 h-6 w-[80px] rounded-full bg-gray-200",
        " duration-200 transition-all",
        "active:scale-105 active:bg-gray-400",
        className,
      )}
      ref={ref}
      {...rest}
    >
      {children}
    </DrawerPrimitive.Handle>
  );
});

const Overlay = forwardRef<
  ElementRef<typeof DrawerPrimitive.Overlay>,
  ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, style, ...props }, ref) => (
  <DrawerPrimitive.Overlay ref={ref} className={` bg-[rgba(0,0,0,0.4)] fixed inset-0 ${className}`} {...props} />
));
Overlay.displayName = "BottomSheetOverlay";

const Portal = (props: ComponentProps<typeof DrawerPrimitive.Portal>) => {
  const { children, ...rest } = props;
  return <DrawerPrimitive.Portal {...rest}>{children}</DrawerPrimitive.Portal>;
};

const Content = forwardRef<
  ElementRef<typeof DrawerPrimitive.Content>,
  ComponentPropsWithoutRef<typeof DrawerPrimitive.Content> & { handle?: ReactNode; title: string; description: string }
>(({ className, handle, children, title, description, ...props }, ref) => (
  <FixedLayout x={"spacing-16"} b={"spacing-32"}>
    <DrawerPrimitive.Content ref={ref} {...props}>
      <DrawerPrimitive.Title className=" sr-only">{title}</DrawerPrimitive.Title>
      <DrawerPrimitive.Description className=" sr-only">{description}</DrawerPrimitive.Description>
      <div className={cn(" rounded-xl border bg-white min-h-[40vh] max-h-[500px] ")}>
        {handle}
        <div className=" px-16 py-16">{children}</div>
      </div>
    </DrawerPrimitive.Content>
  </FixedLayout>
));

Content.displayName = "DrawerContent";

export const BottomSheet = {
  Root,
  Trigger,
  Overlay,
  Portal,
  Close,
  Handle,
  Content,
};
