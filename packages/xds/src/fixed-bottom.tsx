import { PropsWithChildren } from "react";
import { Portal } from "./portal";

export const FixedBottom = (props: PropsWithChildren) => {
  const { children } = props;
  return <Portal className=" fixed bottom-0 left-[50%] translate-x-[-50%] max-w-[450px] w-screen">{children}</Portal>;
};
