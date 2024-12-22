import { type ElementType, type ReactNode, forwardRef } from "react";
import { type PolymorphicComponentProps, type PolymorphicRef } from "./polymorphics";
export type BoxProps<C extends ElementType> = PolymorphicComponentProps<
  C,
  {
    className?: string;
    children?: ReactNode;
  }
>;

export type BoxRef<C extends ElementType> = PolymorphicRef<C>;

export const Box = forwardRef(function Box<C extends ElementType = "div">(
  { as, className, ...rest }: BoxProps<C>,
  ref?: BoxRef<C>,
) {
  const Component = as ?? "div";
  return <Component ref={ref} className={className} {...rest} />;
}) as <C extends ElementType = "div">(props: BoxProps<C> & { ref?: BoxRef<C> }) => JSX.Element;
