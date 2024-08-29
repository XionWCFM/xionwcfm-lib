import { cva } from "class-variance-authority";
import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from "react";
import { Box } from "./box";
import { cn } from "./external-utils/cn";

const inputVariants = cva(
  ` w-full focus:outline-none bg-inherit text-gray-500 
  duration-200 transition-colors
 border-b border-gray-200
  text-size-5 placeholder:text-gray-300 
  focus:border-primary-400 disabled:bg-gray-100
    `,
  {
    variants: {
      size: {
        default: "py-8 pr-8  ",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);
const Wrapper = forwardRef<ElementRef<"label">, ComponentPropsWithoutRef<"label"> & { children?: ReactNode }>(
  function InputWrapper(props, ref) {
    const { children, className, ...rest } = props;
    return (
      <label ref={ref} {...rest}>
        {children}
      </label>
    );
  },
);

export const UnderlineInput = Object.assign(
  forwardRef<ElementRef<"input">, ComponentPropsWithoutRef<"input"> & { leftSlot?: ReactNode; rightSlot?: ReactNode }>(
    function OutlineInput(props, ref) {
      const { className, leftSlot, rightSlot, ...rest } = props;
      const leftCss = leftSlot ? "pl-36" : "";
      const rightCss = rightSlot ? "pr-36" : "";

      return (
        <Box className=" relative">
          <Box className=" absolute top-[50%] translate-y-[-50%] translate-x-[12px] max-w-16 max-h-16  overflow-clip flex justify-center items-center ">
            {leftSlot}
          </Box>
          <input ref={ref} type="text" className={cn(inputVariants(), leftCss, rightCss, className)} {...rest} />
          <Box className=" absolute top-[50%] translate-y-[-50%] right-0 translate-x-[-12px] max-w-16 max-h-16  overflow-clip flex justify-center items-center ">
            {rightSlot}
          </Box>
        </Box>
      );
    },
  ),
  { Wrapper },
);
