import type { PolymorphicComponentPropsWithRef, PolymorphicRef } from "@xionwcfm/types/polymorphic";
import { type VariantProps, cva } from "class-variance-authority";
import { type ElementType, type ReactNode, forwardRef } from "react";
import { Box, type PolimophicWithSpacingSystemProps } from "../box";
import { cn } from "../external-utils/cn";
import type { SemanticHTMLContentSectionType } from "../internal-utils/type";

const _internalVariants = cva("");

type Props<C extends ElementType> = PolimophicWithSpacingSystemProps<C> & VariantProps<typeof _internalVariants>;

type InternalType = <C extends ElementType = SemanticHTMLContentSectionType>(
  props: PolymorphicComponentPropsWithRef<C, Props<C>>,
) => ReactNode | null;

const Internal: InternalType = forwardRef(function Grid<C extends ElementType = "div">(
  props: Props<C>,
  ref?: PolymorphicRef<C>,
) {
  const { children, as, className, ...rest } = props;
  const typedRest = rest as PolymorphicComponentPropsWithRef<C, PolimophicWithSpacingSystemProps<C>>;
  return (
    <Box as={as} ref={ref} className={cn("")} {...typedRest}>
      {children}
    </Box>
  );
});
