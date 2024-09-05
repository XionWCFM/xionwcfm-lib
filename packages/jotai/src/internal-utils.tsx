import { render } from "@testing-library/react";
import { Provider } from "jotai";
import { PropsWithChildren, Suspense } from "react";

export const wrapper = () => {
  return function wrapper({ children }: PropsWithChildren) {
    return (
      <Provider>
        <Suspense fallback={<div>loading</div>}>{children}</Suspense>
      </Provider>
    );
  };
};

export const renderWithWrapper = <T extends JSX.Element>(
  ui: T,
  options?: Parameters<typeof render>[1],
): ReturnType<typeof render> => {
  return { ...render(ui, { wrapper: wrapper(), ...options }) };
};
