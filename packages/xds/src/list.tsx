import { ComponentProps, PropsWithChildren } from "react";
import { Box } from "./box";

const List = ({ className, children, ...rest }: PropsWithChildren<ComponentProps<typeof Box>>) => {
  return <ul></ul>;
};
