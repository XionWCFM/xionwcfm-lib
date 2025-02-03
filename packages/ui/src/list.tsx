import { Children, type ElementType, type ReactNode, forwardRef } from "react";
import { Box, type BoxRef } from "./box";
import type { BoxProps } from "./box";
import { Separated } from "./internal/separated";

type ListProps = {
  fallback?: ReactNode;
  with?: ReactNode;
};

export const List = forwardRef(function List<C extends ElementType = "ul">(
  { as, className, children, fallback, ...rest }: BoxProps<C> & ListProps,
  ref?: BoxRef<C>,
) {
  const typesRest = rest as BoxProps<C>;
  const child = Children.toArray(children);
  const isEmpty = child.length === 0;

  if (isEmpty) {
    return <>{fallback}</>;
  }

  return (
    <Box className={` xui-flex xui-flex-col xui-break-words ${className}`} ref={ref} as={as} {...typesRest}>
      {rest.with ? <Separated with={rest.with}>{children}</Separated> : children}
    </Box>
  );
}) as <C extends ElementType = "ul">(props: BoxProps<C> & ListProps & { ref?: BoxRef<C> }) => JSX.Element;
