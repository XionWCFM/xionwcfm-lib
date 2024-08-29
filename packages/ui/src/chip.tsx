import type { PolymorphicComponentPropsWithRef, PolymorphicRef } from "@xionwcfm/types/polymorphic";
import { type ElementType, type ReactNode, forwardRef } from "react";
import type { PolimophicWithSpacingSystemProps } from "./box";
import { cn } from "./external-utils/cn";

type Props<C extends ElementType> = PolimophicWithSpacingSystemProps<C>;
type ChipType = <C extends ElementType = "div" | "button" | "a">(
  props: PolymorphicComponentPropsWithRef<C, Props<C>>,
) => ReactNode | null;

export const Chip: ChipType = forwardRef(function Chip<C extends ElementType = "div">(
  { children, as, className, variant, w, h, ...rest }: Props<C>,
  ref?: PolymorphicRef<C>,
) {
  const Component = as || "div";

  return (
    <Component
      ref={ref}
      className={cn(
        " text-size-4 font-light py-4 px-16 bg-neutral-200 cursor-pointer rounded-full text-neutral-700 hover:bg-neutral-300 duration-200 transition-all",
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  );
});
