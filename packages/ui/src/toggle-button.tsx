import { ComponentPropsWithoutRef, Ref, forwardRef } from "react";

export interface ToggleButtonProps extends ComponentPropsWithoutRef<"button"> {
  selected?: boolean;
  value: string;
}

export const ToggleButton = forwardRef(function ToggleButton(props: ToggleButtonProps, ref: Ref<HTMLButtonElement>) {
  const { className, selected, value, disabled, role = "button", tabIndex = 0, ...rest } = props;
  const typesRest = rest;
  const selectedState = selected ? "selected" : "unselected";

  return (
    <button
      className={className}
      data-state={selectedState}
      disabled={disabled}
      aria-disabled={disabled}
      aria-selected={selected}
      role={role}
      tabIndex={disabled ? -1 : tabIndex}
      {...typesRest}
      ref={ref}
    />
  );
});
