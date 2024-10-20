import { type VariantProps, cva } from "class-variance-authority";
import { type ElementType, type ReactNode, forwardRef } from "react";
import { Box, type PolimophicWithSpacingSystemProps } from "./box";
import { cn } from "./cn";
import { PolymorphicComponentPropsWithRef, PolymorphicRef } from "./internal-type/polymorphic";
import type { SemanticHTMLContentSectionType } from "./internal-utils/type";
import { Spinner } from "./spinner";

export const buttonVariants = cva(
  ` items-center justify-center whitespace-nowrap 
  rounded-md font-medium ring-offset-background relative 
  duration-500 transition-colors focus-visible:outline-none focus-visible:ring-2  
  focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50
  `,
  {
    variants: {
      variant: {
        default: "",
        outline: `
        border border-neutral-200 text-neutral-600 
        hover:opacity-90 hover:bg-neutral-200 hover:border-neutral-300
        active:opacity-70
        `,
        primary: `
        bg-neutral-700 text-neutral-100
        hover:opacity-95
        active:opacity-90
        `,
        emphasis: `
        bg-primary-500 text-gray-50 hover:opacity-95 active:opacity-90 
        `,
        secondary: ` rounded-sm bg-neutral-100 text-neutral-600
         hover:opacity-80  hover:bg-neutral-200
         active:opacity-70
        `,
        ghost: ` rounded-sm
        hover:bg-neutral-200 hover:opacity-95
        active:opacity-90`,
        link: "underline underline-offset-4 ",
        icon: " border hover:bg-neutral-100 hover:bg-opacity-80 active:opacity-70",
        ghostIcon: " hover:bg-neutral-100 hover:bg-opacity-80 active:opacity-70",
      },
      size: {
        default: "",
        sm: "  rounded-md px-12 py-4 active:scale-[0.98]",
        md: " rounded-md px-16 py-6 active:scale-[0.98.5]",
        lg: " rounded-md px-20 py-8 active:scale-[0.99]",
        full: " w-full  py-12  text-size-6 active:scale-[0.997]",
        icon: "px-8 py-8 active:scale-[0.98]",
      },
    },
  },
);

type ButtonOptionProps = {
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  loading?: boolean;
};

type Props<C extends ElementType> = PolimophicWithSpacingSystemProps<C> &
  VariantProps<typeof buttonVariants> &
  ButtonOptionProps;

type ButtonType = <C extends ElementType = SemanticHTMLContentSectionType>(
  props: PolymorphicComponentPropsWithRef<C, Props<C>>,
) => ReactNode | null;

export const Button: ButtonType = forwardRef(function Button<C extends ElementType = "button">(
  props: Props<C>,
  ref?: PolymorphicRef<C>,
) {
  const {
    children,
    className,
    as,
    variant,
    size,
    loading,
    disabled,
    endIcon,
    type,
    startIcon,
    asChild = false,
    ...rest
  } = props;
  const typedRest = rest as PolymorphicComponentPropsWithRef<C, PolimophicWithSpacingSystemProps<C>>;
  const slotClass = !!startIcon || !!endIcon ? "flex items-center justify-center gap-x-4" : "";
  const ComponentAs = as || "button";
  const ariaLabel = props["aria-label"] ?? loading ? "loading progress" : "button";

  return (
    <Box
      as={ComponentAs}
      type={type ?? "button"}
      asChild={asChild}
      ref={ref}
      className={cn(slotClass, buttonVariants({ variant, size }), className)}
      disabled={disabled || loading}
      aria-label={ariaLabel}
      {...typedRest}
    >
      <>
        {loading ? (
          <Box as="span" className=" absolute">
            <Spinner />
          </Box>
        ) : null}
        {startIcon && !loading ? (
          <Box as="span" className="mr-2">
            {startIcon}
          </Box>
        ) : null}
        <div className={`${loading ? "invisible" : ""}`}>{children}</div>
        {endIcon ? (
          <Box as="span" className="ml-2">
            {endIcon}
          </Box>
        ) : null}
      </>
    </Box>
  );
});
