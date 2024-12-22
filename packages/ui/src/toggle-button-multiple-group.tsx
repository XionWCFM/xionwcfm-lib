import { Children, KeyboardEvent, MouseEvent, ReactElement, cloneElement, createContext } from "react";
import { ToggleButtonProps } from "./toggle-button";

export interface ToggleButtonMultipleGroupProps {
  children: ReactElement<ToggleButtonProps> | ReactElement<ToggleButtonProps>[];
  value: string[];
  onChange: (value: string[]) => void;
  allowToggle?: boolean;
}

export const ToggleButtonMultipleGroupContext = createContext<string[]>([]);

export function ToggleButtonMultipleGroup(props: ToggleButtonMultipleGroupProps) {
  const { allowToggle = true, value, children, onChange } = props;
  const childs = Children.toArray(children) as ReactElement<ToggleButtonProps>[];

  return (
    <ToggleButtonMultipleGroupContext.Provider value={value}>
      <ToggleButtonMultipleGroupContext.Consumer>
        {(context) => {
          const isSelected = (newValue: string | undefined) => {
            if (!newValue) {
              return false;
            }
            return context.includes(newValue);
          };

          const handleClick = (newValue: string | null) => {
            if (newValue === null) {
              return;
            }

            const isIncludes = context.includes(newValue);
            if (isIncludes && allowToggle) {
              return onChange(context.filter((v) => v !== newValue));
            }

            return onChange([...context, newValue]);
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
                  selected: isSelected(childElement.props.value),
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
      </ToggleButtonMultipleGroupContext.Consumer>
    </ToggleButtonMultipleGroupContext.Provider>
  );
}
