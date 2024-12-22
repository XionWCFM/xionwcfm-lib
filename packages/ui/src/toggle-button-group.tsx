import { Children, KeyboardEvent, MouseEvent, ReactElement, cloneElement, createContext } from "react";
import { ToggleButtonProps } from "./toggle-button";

export interface ToggleButtonGroupProps {
  children: ReactElement<ToggleButtonProps> | ReactElement<ToggleButtonProps>[];
  value: string | null;
  onChange: (value: string | null) => void;
  allowToggle?: boolean;
}

export const ToggleButtonGroupContext = createContext<string | null>(null);

export function ToggleButtonGroup(props: ToggleButtonGroupProps) {
  const { allowToggle = true, value, children, onChange } = props;
  const childs = Children.toArray(children) as ReactElement<ToggleButtonProps>[];

  return (
    <ToggleButtonGroupContext.Provider value={value}>
      <ToggleButtonGroupContext.Consumer>
        {(context) => {
          const handleClick = (newValue: string | null) => {
            if (newValue === null) {
              return onChange(null);
            }

            if (newValue === context && allowToggle) {
              return onChange(null);
            }

            if (newValue === context && !allowToggle) {
              return;
            }

            return onChange(newValue);
          };

          const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, newValue: string | null) => {
            if (event.key === " " || event.key === "Enter") {
              event.preventDefault();
              handleClick(newValue);
            }
          };
          return (
            <>
              {childs.map((child) => {
                const childElement = child as ReactElement<ToggleButtonProps>;
                return cloneElement(childElement, {
                  selected: context === childElement.props.value,
                  onClick: (event: MouseEvent<HTMLButtonElement>) => {
                    handleClick(childElement.props.value ?? null);
                    childElement.props.onClick?.(event);
                  },
                  onKeyDown: (event: KeyboardEvent<HTMLButtonElement>) => {
                    handleKeyDown(event, childElement.props.value ?? null);
                    childElement.props.onKeyDown?.(event);
                  },
                  role: "button",
                });
              })}
            </>
          );
        }}
      </ToggleButtonGroupContext.Consumer>
    </ToggleButtonGroupContext.Provider>
  );
}
