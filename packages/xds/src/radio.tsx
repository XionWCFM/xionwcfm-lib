"use client";
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
import { cn } from "./external-utils/cn";
import { useDraft } from "./hooks/xds-use-draft";
import { useUniqueId } from "./hooks/xds-use-unique-id";

const RadioOption = forwardRef(function RadioOption(
  props: Omit<InputHTMLAttributes<HTMLInputElement>, "type">,
  ref: Ref<HTMLInputElement>,
) {
  const { className, children, id: elementId, ...rest } = props;
  const uniqueId = useUniqueId();
  const id = elementId ?? uniqueId;
  return (
    <div className=" z-10 w-full flex justify-center items-center h-full ">
      <input className={cn(" peer appearance-none")} ref={ref} id={id} type="radio" {...rest} />
      <label
        className={cn(
          " cursor-pointer transition-all duration-200 rounded-sm flex justify-center items-center  h-full w-full",
          " text-gray-400 font-light",
          " p-8",
          " peer-checked:font-medium peer-checked:text-primary-500",
          " peer-disabled:opacity-30",
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
    <ControlledRadio {...otherProps} value={value} onChange={handleChange}>
      {children}
    </ControlledRadio>
  );
};

Radio.Option = RadioOption;

const ControlledRadio = (props: Props) => {
  const { className, children, disabled, value } = props;

  const checkedIndex = Children.map(children, (child) => {
    return child.props;
  }).findIndex((p) => p.value === value);

  const checked = checkedIndex !== -1;

  const numberOfChildren = Children.count(children);

  return (
    <div className={cn(" w-full bg-gray-100 rounded-sm", className)}>
      <div className=" relative flex">
        <div
          className=" absolute duration-500 transition-all top-4 bottom-[6px] left-4 bg-gray-200 z-0 rounded-sm shadow-[0_2px_4px_0_rgba(0,0,0,0.09)]"
          style={{
            width: `calc((100% - 8px) / ${numberOfChildren})`,
            translate: `${checkedIndex * 100}%`,
            opacity: checked ? 1 : 0,
          }}
        />

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
