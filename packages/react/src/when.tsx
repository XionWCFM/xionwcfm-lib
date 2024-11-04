import { PropsWithChildren, ReactNode } from "react";

type Props = {
  condition: boolean;
  fallback?: ReactNode;
};

export const When = (props: PropsWithChildren<Props>) => {
  const { condition, fallback, children } = props;
  if (!condition) {
    return fallback ?? null;
  }

  return <>{children}</>;
};
