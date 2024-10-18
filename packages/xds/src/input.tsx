import { cva } from "class-variance-authority";
import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from "react";
import { Box } from "./box";
import { cn } from "./cn";
import { useUniqueId } from "./hooks/xds-use-unique-id";

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
  forwardRef<ElementRef<"input">, ComponentPropsWithoutRef<"input"> & { leftSlot?: ReactNode; rightSlot?: ReactNode }>(
    function Input(props, ref) {
      const { className, leftSlot, rightSlot, id: elementId, ...rest } = props;
      const uniqueId = useUniqueId();
      const id = elementId ?? uniqueId;
      const leftCss = leftSlot ? "pl-36" : "";
      const rightCss = rightSlot ? "pr-36" : "";

      return (
        <Box className=" relative" as="label" id={id} htmlFor={id}>
          <Box className=" absolute top-[50%] translate-y-[-50%] translate-x-[12px] max-w-16 max-h-16  overflow-clip flex justify-center items-center ">
            {leftSlot}
          </Box>
          <input
            id={id}
            ref={ref}
            type="text"
            className={cn(inputVariants(), leftCss, rightCss, className)}
            {...rest}
          />
          <Box className=" absolute top-[50%] translate-y-[-50%] right-0 translate-x-[-12px] max-w-16 max-h-16  overflow-clip flex justify-center items-center ">
            {rightSlot}
          </Box>
        </Box>
      );
    },
  ),
  { Wrapper },
);
