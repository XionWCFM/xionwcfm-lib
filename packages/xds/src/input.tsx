import { cva } from "class-variance-authority";
import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef, useId } from "react";
import { Box } from "./box";
import { cn } from "./cn";

const inputVariants = cva(
  ` w-full focus:outline-none bg-white text-neutral-700
  duration-200 transition-colors
  border border-gray-200 
  text-size-5 placeholder:text-gray-300 
  focus:border-primary-400 disabled:bg-gray-100
   font-regular placeholder:font-light
    `,
  {
    variants: {
      size: {
        default: "py-8 px-8 rounded-md  ",
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

export const Input = Object.assign(
  forwardRef<ElementRef<"input">, ComponentPropsWithoutRef<"input"> & { left?: ReactNode; right?: ReactNode }>(
    function Input(props, ref) {
      const { className, left, right, id: elementId, ...rest } = props;
      const leftCss = left ? "pl-36" : "";
      const rightCss = right ? "pr-36" : "";

      return (
        <Box className=" w-full relative">
          <Box className=" absolute top-[50%] translate-y-[-50%] translate-x-[12px] max-w-16 max-h-16  overflow-clip flex justify-center items-center ">
            {left}
          </Box>
          <input
            id={elementId}
            ref={ref}
            type="text"
            className={cn(inputVariants(), leftCss, rightCss, className)}
            {...rest}
          />
          <Box className=" absolute top-[50%] translate-y-[-50%] right-0 translate-x-[-12px] max-w-16 max-h-16  overflow-clip flex justify-center items-center ">
            {right}
          </Box>
        </Box>
      );
    },
  ),
  { Wrapper },
);
