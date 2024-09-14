import { Children, ReactElement, cloneElement } from "react";
import { useDebounce } from "./use-debounce";

type Props = {
  capture?: string;
  children: ReactElement;
  delay: number;
};

export function DebounceEvent({ capture = "onClick", children, delay }: Props) {
  const child = Children.only(children);
  const debouncedCallback = useDebounce((...args: any[]) => {
    if (child.props && typeof child.props[capture] === "function") {
      return child.props[capture](...args);
    }
  }, delay);

  return cloneElement(child, {
    [capture]: debouncedCallback,
  });
}
