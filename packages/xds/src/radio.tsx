"use client";
import { cva } from "class-variance-authority";
import {
  ChangeEvent,
  Children,
  ComponentProps,
  InputHTMLAttributes,
  ReactElement,
  Ref,
  cloneElement,
  forwardRef,
} from "react";
import { cn } from "./cn";
import { createSafeContext } from "./hooks/xds-create-safe-context";
import { useDraft } from "./hooks/xds-use-draft";
import { useUniqueId } from "./hooks/xds-use-unique-id";

type RadioVariants = "pale" | "gray" | "primary";

const [RadioProvider, useRadio] = createSafeContext<RadioVariants>("gray");

const radioOptionVariants = cva("", {
  variants: {
    variant: {
      pale: " text-gray-500 peer-checked:text-neutral-600",
      gray: "text-gray-500 peer-checked:text-primary-500",
      primary: " text-gray-500 peer-checked:text-white",
    },
  },
});

const RadioOption = forwardRef(function RadioOption(
  props: Omit<InputHTMLAttributes<HTMLInputElement>, "type">,
  ref: Ref<HTMLInputElement>,
) {
  const { className, children, id: elementId, ...rest } = props;
  const uniqueId = useUniqueId();
  const id = elementId ?? uniqueId;
  const variant = useRadio();
  return (
    <div className=" z-10 w-full flex justify-center items-center h-full ">
      <input className={cn(" peer appearance-none")} ref={ref} id={id} type="radio" {...rest} />
      <label
        className={cn(
          " cursor-pointer transition-all duration-500 rounded-sm flex justify-center items-center  h-full w-full",
          "p-8  font-light",
          " peer-checked:font-medium ",
          " peer-disabled:opacity-30",
          radioOptionVariants({ variant }),
        )}
        id={id}
        htmlFor={id}
      >
        {children}
      </label>
    </div>
  );
});

type RadioOptionElement = ReactElement<ComponentProps<typeof RadioOption>>;

interface Props
  extends Pick<
    InputHTMLAttributes<HTMLInputElement>,
    "className" | "disabled" | "value" | "defaultValue" | "onChange" | "name"
  > {
  children: RadioOptionElement | RadioOptionElement[];
  variant?: RadioVariants;
}

export const Radio = (props: Props) => {
  const { children, ...otherProps } = props;
  const injectValue = props.value ?? props.defaultValue;
  const [internal, setInternal] = useDraft(injectValue);

  const value = props.value ?? internal;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    props.onChange?.(event);
    if (props.value === undefined) {
      setInternal(event.target.value);
    }
  };

  return (
    <RadioProvider value={props.variant ?? "gray"}>
      <ControlledRadio {...otherProps} value={value} onChange={handleChange}>
        {children}
      </ControlledRadio>
    </RadioProvider>
  );
};

Radio.Option = RadioOption;

const radioBgVaraints = cva(" rounded-sm w-full", {
  variants: {
    variant: {
      pale: "bg-gray-50",
      gray: "bg-gray-100 ",
      primary: " bg-white",
    },
  },
});

const ControlledRadio = (props: Props) => {
  const { className, children, disabled, value } = props;
  const variant = useRadio();
  const checkedIndex = Children.map(children, (child) => {
    return child.props;
  }).findIndex((p) => p.value === value);

  const checked = checkedIndex !== -1;

  const numberOfChildren = Children.count(children);

  return (
    <div className={cn(radioBgVaraints({ variant }), className)}>
      <div className=" relative flex">
        <TransitionBar checked={checked} checkedIndex={checkedIndex} numberOfChildren={numberOfChildren} />

        {Children.map(children, (child) => {
          return cloneElement(child, {
            disabled,
            ...child?.props,
            checked: value === child?.props?.value,
            "aria-checked": value === child?.props?.value,
            key: child?.key,
            onChange: props?.onChange,
          });
        })}
      </div>
    </div>
  );
};

type TransitionBarProps = {
  checkedIndex: number;
  numberOfChildren: number;
  checked: boolean;
};

const transitionBarVariants = cva(" absolute duration-500 transition-all top-4 bottom-[6px] left-4 z-0 rounded-sm ", {
  variants: {
    variant: {
      pale: " bg-white",
      gray: "bg-gray-200 shadow-[0_2px_4px_0_rgba(0,0,0,0.09)]",
      primary: " bg-primary-500",
    },
  },
});

const TransitionBar = ({ checked, checkedIndex, numberOfChildren }: TransitionBarProps) => {
  const variant = useRadio();
  return (
    <div
      className={transitionBarVariants({ variant })}
      style={{
        width: `calc((100% - 8px) / ${numberOfChildren})`,
        translate: `${checkedIndex * 100}%`,
        opacity: checked ? 1 : 0,
      }}
    />
  );
};
