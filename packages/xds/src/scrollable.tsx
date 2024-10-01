import { ComponentPropsWithoutRef } from "react";
import { cn } from "./cn";

export const Scrollable = (props: ComponentPropsWithoutRef<"div"> & { height: string; maxHeight?: string }) => {
  const { children, className, style, height, maxHeight, ...rest } = props;
  return (
    <div className={cn("overflow-y-auto", className)} style={{ height, maxHeight, ...style }} {...rest}>
      {children}
    </div>
  );
};
