import { ElementType, ReactNode, forwardRef } from "react";
import { Box, BoxProps } from "./box";
import { cn } from "./cn";
import { PolymorphicComponentPropsWithRef, PolymorphicRef } from "./internal-type/polymorphic";

export const List = forwardRef(function List<C extends ElementType>(props: BoxProps<C>, ref: PolymorphicRef<C>) {
  const { as, className, children, ...rest } = props;
  const typedRest = rest as BoxProps<C>;
  return (
    <Box ref={ref} as={as} className={cn(" break-words flex flex-col", className)} {...typedRest}>
      {children}
    </Box>
  );
}) as <C extends ElementType>(props: BoxProps<C>) => ReactNode;

type RowProps = {
  left?: ReactNode;
  right?: ReactNode;
  highlighted?: boolean;
};

const isString = (value: unknown): value is string => typeof value === "string";

export const Row = forwardRef(function Row<C extends "li" | "button" | "a" = "li">(
  props: PolymorphicComponentPropsWithRef<C, BoxProps<C>> & RowProps,
  ref: PolymorphicRef<C>,
) {
  const { as, className, children, left, right, highlighted, ...rest } = props;
  const typedRest = rest as BoxProps<C>;
  return (
    <Box
      ref={ref}
      as={as}
      className={cn(
        " flex rounded-sm gap-8 break-words px-16 py-8 w-full justify-between items-center ",
        " cursor-pointer duration-200  transition-all ",
        highlighted && " bg-primary-50 bg-opacity-50 ",
        !highlighted && " hover:bg-gray-100 active:bg-gray-100",
        className,
      )}
      {...typedRest}
    >
      {isString(left) ? <div>{left}</div> : left}
      {isString(children) ? <div className=" w-full text-left flex-grow">{children}</div> : children}
      {isString(right) ? <div>{right}</div> : right}
    </Box>
  );
}) as <C extends "li" | "button" | "a" = "li">(
  props: PolymorphicComponentPropsWithRef<C, BoxProps<C>> & RowProps,
) => ReactNode;

type Text2RowProps = {
  top?: ReactNode;
  bottom?: ReactNode;
};

export const Text2Row = forwardRef(function Text2Row<C extends ElementType>(
  props: BoxProps<C> & Text2RowProps,
  ref: PolymorphicRef<C>,
) {
  const { className, top, bottom, children, ...rest } = props;
  const typedRest = rest as BoxProps<C>;
  return (
    <Box ref={ref} {...typedRest} className={cn("flex flex-grow flex-col", className)}>
      {top}
      {bottom}
    </Box>
  );
});
