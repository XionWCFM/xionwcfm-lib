import { render, screen, waitFor } from "@testing-library/react";
import { atom } from "jotai";
import { PropsWithChildren, useState } from "react";
import { createSafeAtom } from "./create-safe-atom";
import { renderWithWrapper } from "./internal-utils";

describe("createSafeAtom is", () => {
  const testStore = createSafeAtom(atom("hello world"));
  const Consumer = () => {
    const [state, setState] = testStore.useAtom();
    testStore.useAtomValue();
    testStore.useSetAtom();

    return <div>{state}</div>;
  };

  it("if context provider not provided , throw error with correct message", () => {
    expect(() => renderWithWrapper(<Consumer />)).toThrowError(
      /Context not provided. Make sure to wrap your component with the appropriate Provider from createSafeAtom/,
    );
  });

  it("if context provided , should render contents", () => {
    renderWithWrapper(
      <testStore.Provider>
        <Consumer />
      </testStore.Provider>,
    );
    expect(screen.getByText(/hello world/)).toBeInTheDocument();
  });

  it("if context provided with HOC , should render contents", () => {
    const HocConsumer = testStore.with(Consumer);
    renderWithWrapper(<HocConsumer />);
    expect(screen.getByText(/hello world/)).toBeInTheDocument();
  });

  it("if async atom , should triggered suspense", async () => {
    const asyncAtomStore = createSafeAtom(atom(async () => "hello"));
    const AsyncConsumer = () => {
      const state = asyncAtomStore.useAtomValue();
      return <div>{state}</div>;
    };
    renderWithWrapper(
      <asyncAtomStore.Provider>
        <AsyncConsumer />
      </asyncAtomStore.Provider>,
    );
    expect(screen.getByText(/loading/)).toBeInTheDocument();
    waitFor(() => expect(screen.getByText(/hello/)).toBeInTheDocument());
  });

  it('if readonly atom, cant use "useAtom" , "useSetAtom"', () => {
    const readonlyStore = createSafeAtom(atom(() => "hello"));

    const ReadonlyConsumer = () => {
      //@ts-expect-error
      readonlyStore.useAtom();
      //@ts-expect-error
      readonlyStore.useSetAtom();

      return <div>hello world</div>;
    };
    expect(true).toBe(true);
  });

  it("if resuable use case , should work like context api", () => {
    const createResuableAtom = (initialState?: string) => atom(initialState ?? "");

    const reusableStore = createSafeAtom(createResuableAtom());

    const ReusableContextProvider = ({ children, initial }: PropsWithChildren<{ initial: string }>) => {
      const [value] = useState(() => createResuableAtom(initial));
      return <reusableStore.Provider value={value}>{children}</reusableStore.Provider>;
    };

    const ReusableConsumer = () => {
      const [state, setState] = reusableStore.useAtom();
      return <div>{state}</div>;
    };

    renderWithWrapper(
      <>
        <ReusableContextProvider initial="hello">
          <ReusableConsumer />
        </ReusableContextProvider>
        <ReusableContextProvider initial="world">
          <ReusableConsumer />
        </ReusableContextProvider>
      </>,
    );
    expect(screen.getByText(/hello/)).toBeInTheDocument();
    expect(screen.getByText(/world/)).toBeInTheDocument();
  });
});
