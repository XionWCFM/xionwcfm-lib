import { Children, ReactElement, cloneElement } from "react";
import { useThrottle } from "./use-throttle";

type Props = {
  capture?: string;
  children: ReactElement;
  delay: number;
};

export function ThrottleEvent({ capture = "onClick", children, delay }: Props) {
  const child = Children.only(children);
  const debouncedCallback = useThrottle((...args: any[]) => {
    if (child.props && typeof child.props[capture] === "function") {
      return child.props[capture](...args);
    }
  }, delay);

  return cloneElement(child, {
    [capture]: debouncedCallback,
  });
}
