"use client";

import { ComponentPropsWithoutRef, ReactNode } from "react";
import { Box } from "./box";
import { cn } from "./external-utils/cn";
import { FixedLayout } from "./fixed-layout";
import { createSafeContext } from "./hooks/xds-create-safe-context";
import { useDraft } from "./hooks/xds-use-draft";
import { Paragraph } from "./paragraph";

const [BottomNavigationProvider, useBottomNavigationContext] = createSafeContext<{
  value: string;
  onValueChange: (next: string) => void;
}>(null);

type LayoutProps = { open?: boolean } & (
  | { value?: string; onValueChange?: never }
  | { value: string; onValueChange: (next: string) => void }
);

// https://developer.apple.com/design/human-interface-guidelines/tab-bars
// normal tabbar 56px | compact tabbar 40px
const Root = (props: ComponentPropsWithoutRef<"div"> & LayoutProps) => {
  const { className, children } = props;
  const [_value, _onValueChange] = useDraft(props.value ?? "");
  const [_open, _onOpenChange] = useDraft(props.open ?? true);

  const open = props.open ?? _open;

  const value = props.value ?? _value;
  const onValueChange = typeof props.onValueChange === "function" ? props.onValueChange : _onValueChange;

  const opacity = open ? 1 : 0;
  const visibility = open ? "visible" : "hidden";
  const translateY = open ? "0px" : "56px";

  return (
    <FixedLayout x={"normal"} b={"normal"}>
      <BottomNavigationProvider value={{ value, onValueChange }}>
        <Box
          as={"nav"}
          className={cn(" flex justify-between bg-white h-[56px]", " duration-200 transition-all", className)}
          style={{
            opacity,
            visibility,
            translate: `0px ${translateY}`,
          }}
        >
          {children}
        </Box>
      </BottomNavigationProvider>
    </FixedLayout>
  );
};

type ActionProps = {
  icon?: ReactNode;
  label?: ReactNode;
  value: string;
  onClick?: () => void;
  className?: string;
};

const Action = (props: ActionProps) => {
  const { icon, label, value, onClick, className } = props;
  const context = useBottomNavigationContext();
  const isSelected = context.value === value;

  return (
    <button
      type="button"
      className={cn(
        "  flex flex-col justify-center items-center w-full h-full",
        " transition-all duration-200 rounded-sm",
        " active:scale-[0.96] active:bg-gray-100",
        "  flex flex-col justify-center items-center w-full h-full gap-y-4",

        className,
      )}
      onClick={() => {
        context.onValueChange(value);
        onClick?.();
      }}
    >
      <div className={cn(" transition-all duration-200", isSelected && " text-primary-500 scale-110")}>{icon}</div>
      <Paragraph
        as="span"
        className={cn(
          " transition-all duration-200",
          " font-light text-gray-600 text-size-3",
          isSelected && " scale-110 text-primary-500 font-regular",
        )}
      >
        {label}
      </Paragraph>
    </button>
  );
};

export const BottomNavigation = {
  Root,
  Action,
};
