import { Children, MouseEvent, ReactElement, cloneElement, createContext } from "react";
import { ToggleButtonProps } from "./toggle-button";

interface ToggleButtonGroupProps {
  children: ReactElement<ToggleButtonProps> | ReactElement<ToggleButtonProps>[];
  value: string | null;
  onChange: (value: string | null) => void;
}

const SingleValueContext = createContext<string | null>(null);

export function ToggleButtonGroup(props: ToggleButtonGroupProps) {
  const { value, children, onChange } = props;
  const childs = Children.toArray(children) as ReactElement<ToggleButtonProps>[];
  return (
    <SingleValueContext.Provider value={value}>
      <SingleValueContext.Consumer>
        {(context) => {
          return (
            <>
              {childs.map((child) => {
                const childElement = child as ReactElement<ToggleButtonProps>;
                return cloneElement(childElement, {
                  selected: context === childElement.props.value,
                  onClick: (event: MouseEvent<HTMLButtonElement>) => onChange(childElement.props.value ?? ""),
                });
              })}
            </>
          );
        }}
      </SingleValueContext.Consumer>
    </SingleValueContext.Provider>
  );
}
