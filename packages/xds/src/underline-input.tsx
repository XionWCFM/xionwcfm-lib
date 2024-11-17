"use client";

import { cva } from "class-variance-authority";
import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef, useId, useState } from "react";
import { Box } from "./box";
import { cn } from "./cn";
import { useDraft } from "./hooks/xds-use-draft";

const inputVariants = cva(
  cn(
    "w-full focus:outline-none bg-inherit",
    "duration-200 transition-colors",
    "border-b border-gray-200",
    "text-size-5 placeholder:sr-only ",
    "focus:border-primary-400",
    " text-gray-600 font-light rounded-[0px]",
    " disabled:bg-gray-100 disabled:rounded-sm disabled:border-none disabled:text-gray-500",
  ),
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
  ComponentPropsWithoutRef<"label"> & {
    children?: ReactNode;
    isFocused: boolean;
    hasValue: boolean;
    disabled?: boolean;
  }
>(function InputWrapper(props, ref) {
  const { children, className, isFocused, hasValue, disabled, ...rest } = props;

  return (
    <label
      ref={ref}
      className={cn(
        "absolute left-0 top-0 translate-y-[6px] transition-all duration-200 cursor-text",
        " font-light",
        isFocused || hasValue ? " text-size-3 -translate-y-16" : "text-base top-2",
        isFocused ? " text-primary-500" : " text-gray-300",
        className,
      )}
      {...rest}
    >
      {children}
    </label>
  );
});

export const UnderlineInput = forwardRef<
  ElementRef<"input">,
  ComponentPropsWithoutRef<"input"> & {
    left?: ReactNode;
    right?: ReactNode;
    label?: ComponentPropsWithoutRef<"label">;
  }
>(function UnderlineInput(props, ref) {
  const {
    className,
    disabled,
    left,
    id: elementId,
    right,
    placeholder,
    value,
    onFocus,
    onBlur,
    onChange,
    label,
    ...rest
  } = props;
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(() => Boolean(value));
  const uniqueId = useId();
  const id = elementId ?? uniqueId;
  const [inputValue, setInputValue] = useDraft<string>(typeof value === "string" ? value : "");
  const isEmpty = inputValue.length === 0;

  return (
    <Box className="relative">
      <Wrapper
        isFocused={isFocused}
        hasValue={hasValue}
        htmlFor={id}
        className={cn(
          disabled && " translate-x-16",
          left && !isFocused && isEmpty && "translate-x-36",
          disabled && !isEmpty && " invisible",
        )}
        {...label}
      >
        {placeholder}
      </Wrapper>
      <Box className="absolute top-[50%] translate-y-[-50%] translate-x-[12px] max-w-16 max-h-16 overflow-clip flex justify-center items-center">
        {left}
      </Box>
      <input
        disabled={disabled}
        ref={ref}
        type="text"
        id={id}
        placeholder={placeholder}
        value={value}
        className={cn(inputVariants(), left && "pl-36", right && "pr-36", className)}
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
          setInputValue(e.target.value);
          onChange?.(e);
        }}
        {...rest}
      />
      <Box className="absolute top-[50%] translate-y-[-50%] right-0 translate-x-[-12px] max-w-16 max-h-16 overflow-clip flex justify-center items-center">
        {right}
      </Box>
    </Box>
  );
});
