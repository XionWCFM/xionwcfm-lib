import type { ReactNode } from "react";

export const Iife = (props: { children?: () => ReactNode }) => {
  const { children } = props;
  return <>{children?.()}</>;
};
