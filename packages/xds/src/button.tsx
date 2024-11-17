import { colors } from "@xionwcfm/token";
import { type VariantProps, cva } from "class-variance-authority";
import { type ElementType, type ReactNode, forwardRef } from "react";
import { Box, type BoxProps } from "./box";
import { cn } from "./cn";
import { PolymorphicComponentPropsWithRef, PolymorphicRef } from "./internal-type/polymorphic";
import { Spinner } from "./spinner";
import { ThreeDotLoadingSpinner } from "./three-dot-loading-spinner";

export const buttonVariants = cva(
  `items-center justify-center whitespace-nowrap 
  rounded-sm font-medium ring-offset-background relative 
  duration-500 transition-colors focus-visible:outline-none focus-visible:ring-2  
  focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50
  `,
  {
    variants: {
      variant: {
        default: "",
        secondaryLow: ` bg-primary-alpha-300 text-primary-700
         hover:opacity-95
        active:opacity-90
        `,
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
        secondary: ` bg-neutral-100 text-neutral-600
         hover:opacity-80  hover:bg-neutral-200
         active:opacity-70
        `,
        ghost: ` 
        hover:bg-neutral-200 hover:opacity-95
        active:opacity-90`,
        link: "underline underline-offset-4 ",
        icon: " border hover:bg-neutral-100 hover:bg-opacity-80 active:opacity-70",
        ghostIcon: " hover:bg-neutral-100 hover:bg-opacity-80 active:opacity-70",
      },
      size: {
        default: "",
        sm: "   px-12 py-4 ",
        md: " px-16 py-6 ",
        lg: "  px-20 py-8 ",
        full: " w-full py-12 px-24 text-size-6 ",
        icon: "px-8 py-8 ",
      },
      rounded: {
        default: "",
        sm: "rounded-sm",
        md: "rounded-md",
        xl: " rounded-xl",
        full: "rounded-full",
      },
    },
  },
);

type ButtonOptionProps = {
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  loading?: boolean;
};

type Props<C extends ElementType> = BoxProps<C> & VariantProps<typeof buttonVariants> & ButtonOptionProps;

export const Button = forwardRef(function Button<C extends ElementType = "button">(
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
    rounded,
    asChild = false,
    w,
    ...rest
  } = props;
  const typedRest = rest as PolymorphicComponentPropsWithRef<C, BoxProps<C>>;
  const slotClass = !!startIcon || !!endIcon ? "flex items-center justify-center gap-x-4" : "";
  const ComponentAs = as || "button";
  const ariaLabel = props["aria-label"] ?? loading ? "loading progress" : "button";

  return (
    <Box
      as={ComponentAs}
      type={type}
      asChild={asChild}
      ref={ref}
      className={cn(slotClass, buttonVariants({ variant, size, rounded }), className)}
      disabled={disabled || loading}
      aria-label={ariaLabel}
      w={w}
      {...typedRest}
    >
      <>
        {loading ? (
          <Box as="span" className=" absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
            <Spinner color={"primary"} />
          </Box>
        ) : null}
        {startIcon && !loading ? (
          <Box as="span" className=" mr-2">
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
}) as <C extends "button" | "a" | ElementType = "button">(
  props: PolymorphicComponentPropsWithRef<C, Props<C>>,
  ref?: PolymorphicRef<C>,
) => JSX.Element;
