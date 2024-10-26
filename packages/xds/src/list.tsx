import { ElementType, ReactNode, forwardRef } from "react";
import { Box, PolimophicWithSpacingSystemProps } from "./box";
import { cn } from "./cn";
import { PolymorphicComponentPropsWithRef, PolymorphicRef } from "./internal-type/polymorphic";

export const List = forwardRef(function List<C extends ElementType = "ul">(
  props: PolymorphicComponentPropsWithRef<C, PolimophicWithSpacingSystemProps<C>>,
  ref: PolymorphicRef<C>,
) {
  const { className, children, ...rest } = props;
  return (
    //@ts-expect-error
    <Box ref={ref} as={"ul"} className={cn(" break-words flex flex-col", className)} {...rest}>
      {children}
    </Box>
  );
}) as <C extends ElementType = "ul">(
  props: PolymorphicComponentPropsWithRef<C, PolimophicWithSpacingSystemProps<C>>,
) => ReactNode;

type RowProps = {
  left?: ReactNode;
  right?: ReactNode;
  highlighted?: boolean;
  noanimation?: boolean;
};

const isString = (value: unknown): value is string => typeof value === "string";

export const Row = forwardRef(function Row<C extends "li" | "button" | "a" = "li">(
  props: PolymorphicComponentPropsWithRef<C, PolimophicWithSpacingSystemProps<C>> & RowProps,
  ref: PolymorphicRef<C>,
) {
  const { as, className, children, left, right, highlighted, noanimation, ...rest } = props;
  return (
    //@ts-expect-error
    <Box
      ref={ref}
      as={"ul"}
      className={cn(
        " flex rounded-sm gap-8 break-words px-16 py-8 w-full justify-between items-center ",
        " cursor-pointer duration-200  transition-all ",
        !noanimation && " hover:scale-[1.005] active:scale-[0.98]",
        highlighted && " bg-primary-50 bg-opacity-50 ",
        !highlighted && " hover:bg-gray-100 active:bg-gray-100",
        className,
      )}
      {...rest}
    >
      {isString(left) ? <div>{left}</div> : left}
      {isString(children) ? <div className=" flex-grow">{children}</div> : children}
      {isString(right) ? <div>{right}</div> : right}
    </Box>
  );
}) as <C extends "li" | "button" | "a" = "li">(
  props: PolymorphicComponentPropsWithRef<C, PolimophicWithSpacingSystemProps<C>> & RowProps,
) => ReactNode;

type Text2RowProps = {
  top?: ReactNode;
  bottom?: ReactNode;
};

export const Text2Row = forwardRef(function Text2Row<C extends "section" | "div" | "button" | "a" = "div">(
  props: PolymorphicComponentPropsWithRef<C, PolimophicWithSpacingSystemProps<C>> & Text2RowProps,
  ref: PolymorphicRef<C>,
) {
  const { className, top, bottom, children, ...rest } = props;
  return (
    <Box ref={ref} {...rest} className={cn("flex flex-grow flex-col", className)}>
      {top}
      {bottom}
    </Box>
  );
});
