import { ReactElement, createContext } from "react";
import { ToggleButtonProps } from "./toggle-button";

interface ToggleButtonGroupProps {
  children: ReactElement<ToggleButtonProps> | ReactElement<ToggleButtonProps>[];
  value: string;
  onChange: (value: string) => void;
}

const SingleValueContext = createContext<string | null>(null);

export function ToggleButtonGroup(props: ToggleButtonGroupProps) {
  const { value, children, onChange } = props;
  return <SingleValueContext.Provider value={value}>{children}</SingleValueContext.Provider>;
}
