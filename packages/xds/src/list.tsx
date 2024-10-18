import { ElementType, ReactNode, forwardRef } from "react";
import { Box, PolimophicWithSpacingSystemProps } from "./box";
import { cn } from "./cn";
import { PolymorphicComponentPropsWithRef, PolymorphicRef } from "./internal-type/polymorphic";
import { Pressable } from "./pressable";

export const List = forwardRef(function List<C extends ElementType = "ul">(
  props: PolymorphicComponentPropsWithRef<C, PolimophicWithSpacingSystemProps<C>>,
  ref: PolymorphicRef<C>,
) {
  const { className, children, ...rest } = props;
  return (
    //@ts-expect-error
    <Box ref={ref} as={"ul"} className={cn(" flex flex-col gap-y-16", className)} {...rest}>
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
};

export const Row = forwardRef(function Row<C extends "li" | "button" | "a" = "li">(
  props: PolymorphicComponentPropsWithRef<C, PolimophicWithSpacingSystemProps<C>> & RowProps,
  ref: PolymorphicRef<C>,
) {
  const { as, className, children, left, right, highlighted, ...rest } = props;
  return (
    //@ts-expect-error
    <Box
      ref={ref}
      as={"ul"}
      className={cn(
        " flex rounded-sm gap-8 px-16 py-8 justify-between items-center ",
        " cursor-pointer duration-200  transition-all active:scale-[0.98]",
        highlighted && " bg-primary-50 bg-opacity-50 hover:bg-primary-100 active:bg-primary-100",
        !highlighted && " hover:bg-gray-100 active:bg-gray-100",
        className,
      )}
      {...rest}
    >
      {left}
      {/* @ts-expect-error */}
      <Box as={as} className=" h-full flex-grow flex flex-wrap overflow-hidden">
        {children}
      </Box>
      {right}
    </Box>
  );
}) as <C extends "li" | "button" | "a" = "li">(
  props: PolymorphicComponentPropsWithRef<C, PolimophicWithSpacingSystemProps<C>> & RowProps,
) => ReactNode;

export const Text1Row = () => {};
