import { VariantProps, cva } from "class-variance-authority";
import { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import { cn } from "./cn";

const xsLayoutCva = cva(" fixed ", {
  variants: {
    x: {
      normal: "left-[50%] translate-x-[-50%] w-screen md:max-w-[450px]",
      "spacing-16": "left-[50%] translate-x-[-50%] w-[calc(100vw-32px)] md:max-w-[calc(450px-32px)]",
    },
    b: {
      normal: " bottom-[0px]",
      "spacing-16": " bottom-16",
      "spacing-32": " bottom-32",
    },
  },
});

export const FixedLayout = ({
  children,
  x,
  b,
  className,
  style,
}: PropsWithChildren<
  { className?: string } & Pick<ComponentPropsWithoutRef<"div">, "style"> & VariantProps<typeof xsLayoutCva>
>) => {
  return (
    <div className={cn(xsLayoutCva({ x, b }), className)} style={style}>
      {children}
    </div>
  );
};
