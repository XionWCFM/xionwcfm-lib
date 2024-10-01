import { ComponentPropsWithoutRef, PropsWithChildren, Ref, forwardRef } from "react";
import { cn } from "./cn";
import { ThreeDotLoadingSpinner } from "./three-dot-loading-spinner";

type FixedBottomCtaProps = ComponentPropsWithoutRef<"button"> & { loading?: boolean };
export const FixedBottomCta = forwardRef(function FixedBottomCta(
  props: FixedBottomCtaProps,
  ref: Ref<HTMLButtonElement>,
) {
  const { children, className, disabled = false, loading = false, ...rest } = props;
  const isDisabled = disabled || loading;
  return (
    <button
      className={cn(
        " h-48 w-full bg-primary-500 text-neutral-50 text-size-5 font-medium ",
        " duration-200 transition-all",
        " disabled:bg-primary-400 disabled:opacity-80 ",
        " hover:opacity-90",
        " active:scale-[0.99]  active:brightness-[.90]",
        " flex justify-center items-center",
        " disabled:animate-pulse",
        className,
      )}
      disabled={isDisabled}
      {...rest}
      ref={ref}
    >
      {loading ? <ThreeDotLoadingSpinner /> : children}
    </button>
  );
});
