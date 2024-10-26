import {
  Children,
  ComponentPropsWithoutRef,
  PropsWithChildren,
  ReactElement,
  ReactNode,
  Ref,
  forwardRef,
  useState,
} from "react";
import { cn } from "./cn";
import { createSafeContext } from "./hooks/xds-create-safe-context";

const [TabProvider, useTab] = createSafeContext<{ value: string; onValueChange: (value: string) => void }>(null);

export const Root = (props: { value?: string; onValueChange?: (value: string) => void; children: ReactNode }) => {
  const { children } = props;
  const [controlledValue, setControlledValue] = useState(props.value ?? "");
  const value = props.value ?? controlledValue;
  const onValueChange = props.onValueChange ?? setControlledValue;

  return <TabProvider value={{ value, onValueChange }}>{children}</TabProvider>;
};

type TriggerProps = ComponentPropsWithoutRef<"button"> & {
  value: string;
  children: ReactNode;
};

type TriggerElement = ReactElement<TriggerProps>;

type TransitionBarProps = {
  checked: boolean;
  checkedIndex: number;
  numberOfChildren: number;
};

const TransitionBar = (props: TransitionBarProps) => {
  const { checked, checkedIndex, numberOfChildren } = props;
  return (
    <div
      className=" absolute duration-500 border-neutral-700 transition-all bottom-[-2px] border-b-[2px] z-0 "
      style={{
        width: `calc(100% / ${numberOfChildren})`,
        translate: `${checkedIndex * 100}%`,
        opacity: checked ? 1 : 0,
      }}
    />
  );
};

export const List = forwardRef(
  (
    props: Omit<ComponentPropsWithoutRef<"nav">, "children"> & { children: TriggerElement | TriggerElement[] },
    ref?: Ref<HTMLDivElement>,
  ) => {
    const { children, className, ...otherProps } = props;
    const { value } = useTab();

    const checkedIndex = Children.map(children, (child) => {
      return child.props;
    }).findIndex((p) => p.value === value);

    const checked = checkedIndex !== -1;
    const numberOfChildren = Children.count(children);

    return (
      <nav
        className={cn("relative flex w-full mb-16 h-48  border-neutral-200 border-b-[2px]", className)}
        {...otherProps}
        ref={ref}
      >
        <TransitionBar checked={checked} checkedIndex={checkedIndex} numberOfChildren={numberOfChildren} />
        {children}
      </nav>
    );
  },
);

export const Trigger = forwardRef(function TabTrigger(props: TriggerProps, ref?: Ref<HTMLButtonElement>) {
  const { value, children, className, onClick, disabled, ...rest } = props;
  const context = useTab();
  return (
    <button
      {...rest}
      data-state={value === context.value ? "active" : "inactive"}
      disabled={disabled}
      ref={ref}
      className={cn(
        " w-full text-neutral-500 duration-500 transition-all",
        " disabled:text-neutral-300",
        " data-[state=active]:text-neutral-700 data-[state=active]:font-bold",
        " active:scale-105",
        className,
      )}
      onClick={(e) => {
        onClick?.(e);
        context.onValueChange(value);
      }}
    >
      {children}
    </button>
  );
});

type ContentProps = PropsWithChildren<{ value: string }>;

export const Content = (props: ContentProps) => {
  const { value, children } = props;
  const context = useTab();

  if (context.value !== value) {
    return null;
  }

  return children;
};
