import { ReactNode } from "react";
import { Fragment } from "react/jsx-runtime";
import useDebounceValue from "./use-debounce-value";

type DebounceChildrenProps<T> = {
  debounced: T;
};

type DebounceProps<T> = {
  children: (result: DebounceChildrenProps<T>) => ReactNode;
  delay: number;
  value: T;
};

export const Debounce = <T,>(props: DebounceProps<T>) => {
  const { children, delay, value } = props;
  const debounced = useDebounceValue(value, delay);
  return <Fragment>{children({ debounced })}</Fragment>;
};
