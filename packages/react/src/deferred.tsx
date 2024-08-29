import { Fragment, ReactNode, useDeferredValue } from "react";

type DeferredChildrenProps<T> = {
  deferred: T;
  isStale: boolean;
};

type DeferredProps<T> = {
  children: (result: DeferredChildrenProps<T>) => ReactNode;
  value: T;
};

export const Deferred = <T,>(props: DeferredProps<T>) => {
  const { children, value } = props;
  const deferred = useDeferredValue(value);
  const isStale = deferred !== value;
  const childrenProps: DeferredChildrenProps<T> = { deferred, isStale };
  return <Fragment>{children(childrenProps)}</Fragment>;
};
