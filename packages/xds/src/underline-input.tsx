import { cva } from "class-variance-authority";
import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef, useState } from "react";
import { Box } from "./box";
import { cn } from "./external-utils/cn";

const inputVariants = cva(
  `w-full focus:outline-none bg-inherit text-gray-500 
  duration-200 transition-colors
  border-b border-gray-200
  text-size-5 placeholder:sr-only
  focus:border-primary-400 disabled:bg-gray-100`,
  {
    variants: {
      size: {
        default: "py-8 pr-8",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

const Wrapper = forwardRef<
  ElementRef<"label">,
  ComponentPropsWithoutRef<"label"> & { children?: ReactNode; isFocused: boolean; hasValue: boolean }
>(function InputWrapper(props, ref) {
  const { children, className, isFocused, hasValue, ...rest } = props;

  return (
    <label
      ref={ref}
      className={cn(
        "absolute left-0 top-0 translate-y-[6px] transition-all duration-100",
        isFocused || hasValue ? " text-size-3 -translate-y-12" : "text-base top-2",
        isFocused ? " text-primary-500" : " text-gray-300",
      )}
      {...rest}
    >
      {children}
    </label>
  );
});

export const UnderlineInput = forwardRef<
  ElementRef<"input">,
  ComponentPropsWithoutRef<"input"> & { leftSlot?: ReactNode; rightSlot?: ReactNode; htmlFor?: string }
>(function OutlineInput(props, ref) {
  const { className, leftSlot, rightSlot, placeholder, htmlFor, onFocus, onBlur, onChange, ...rest } = props;
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const leftCss = leftSlot ? "pl-36" : "";
  const rightCss = rightSlot ? "pr-36" : "";

  return (
    <Box className="relative">
      <Wrapper isFocused={isFocused} hasValue={hasValue} htmlFor={htmlFor}>
        {placeholder}
      </Wrapper>
      <Box className="absolute top-[50%] translate-y-[-50%] translate-x-[12px] max-w-16 max-h-16 overflow-clip flex justify-center items-center">
        {leftSlot}
      </Box>
      <input
        ref={ref}
        type="text"
        placeholder={placeholder}
        className={cn(inputVariants(), leftCss, rightCss, className)}
        onFocus={(e) => {
          setIsFocused(true);
          onFocus?.(e);
        }}
        onBlur={(e) => {
          setIsFocused(false);
          setHasValue(!!e.target.value);
          onBlur?.(e);
        }}
        onChange={(e) => {
          setHasValue(!!e.target.value);
          onChange?.(e);
        }}
        {...rest}
      />
      <Box className="absolute top-[50%] translate-y-[-50%] right-0 translate-x-[-12px] max-w-16 max-h-16 overflow-clip flex justify-center items-center">
        {rightSlot}
      </Box>
    </Box>
  );
});
