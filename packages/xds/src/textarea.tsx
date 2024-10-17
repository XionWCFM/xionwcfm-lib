import { ComponentPropsWithoutRef, Ref, forwardRef } from "react";
import { cn } from "./cn";

export const Textarea = forwardRef(function Textarea(
  props: ComponentPropsWithoutRef<"textarea"> & { wfull?: boolean },
  ref?: Ref<HTMLTextAreaElement>,
) {
  const { children, className, wfull, ...otherProps } = props;
  return (
    <textarea
      {...otherProps}
      ref={ref}
      className={cn(
        " outline-none",
        " min-w-64 min-h-32",
        " px-12 py-8 text-size-5 placeholder:text-neutral-400 text-neutral-600 ",
        "rounded-sm border border-neutral-200 focus:border-primary-400",
        " duration-500 transition-colors",
        wfull ? "w-full" : "",
        className,
      )}
    />
  );
});
