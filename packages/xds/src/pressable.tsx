import { Children, ReactElement, cloneElement } from "react";
import { cn } from "./cn";
import { pressAnimationVariants } from "./variants/press-animation-variants";

export const Pressable = ({ children, className }: { className?: string; children: ReactElement }) => {
  const child = Children.only(children);
  return cloneElement(child, {
    className: cn(pressAnimationVariants(), child.props.className, className),
  });
};
