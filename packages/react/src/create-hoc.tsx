import type { FunctionComponent, PropsWithChildren, ReactNode } from "react";

export function createHoc<ProviderProps extends Record<string, any>>(
  // biome-ignore lint/complexity/noBannedTypes: <explanation>
  HocComponent: (props: PropsWithChildren<{}>) => ReactNode,
): <ComponentProps extends Record<string, any>>(
  Component: FunctionComponent<ComponentProps>,
) => FunctionComponent<ComponentProps>;

export function createHoc<ProviderProps extends Record<string, any>>(
  HocComponent: (props: ProviderProps) => ReactNode,
): <ComponentProps extends Record<string, any>>(
  Component: FunctionComponent<ComponentProps>,
  providerProps: Omit<ProviderProps, "children">,
) => FunctionComponent<ComponentProps>;

export function createHoc<ProviderProps extends Record<string, any>>(
  HocComponent: (props: ProviderProps) => ReactNode,
) {
  return <ComponentProps extends Record<string, any>>(
    Component: FunctionComponent<ComponentProps>,
    providerProps?: Omit<ProviderProps, "children">,
  ) => {
    const WrappingComponent = (props: ComponentProps) => {
      return (
        <HocComponent {...(providerProps as ProviderProps)}>
          <Component {...props} />
        </HocComponent>
      );
    };
    const displayName = Component.displayName || Component.name || "Component";
    WrappingComponent.displayName = `Certified(${displayName})`;
    return WrappingComponent;
  };
}
