import { Atom, useAtomValue, useSetAtom } from "jotai";
import { WritableAtom } from "jotai";
import { atom, useAtom } from "jotai";
import { Dispatch, PropsWithChildren, SetStateAction, createContext, useContext } from "react";

import { useState } from "react";

export const createReusableAtom = <T,>(value: T) => {
  type ReturnValue = [Awaited<T>, Dispatch<SetStateAction<Awaited<T>>>];
  const UseAtomContext = createContext<null | Atom<T>>(null);

  const Provider = (props: PropsWithChildren<{ value?: T | null }>) => {
    const [memoAtom] = useState(() => atom<T>(props.value ?? value));
    return <UseAtomContext.Provider value={memoAtom}>{props.children}</UseAtomContext.Provider>;
  };

  Provider.Consumer = UseAtomContext.Consumer;

  const useSafeContext = () => {
    const result = useContext(UseAtomContext);
    if (result === null) {
      throw new Error("unexpected error with createReusableAtom");
    }
    return result;
  };

  const useAtomContext = () => {
    return useAtom(useSafeContext()) as ReturnValue;
  };

  const useSetAtomContext = () => {
    return useSetAtom(useSafeContext() as unknown as WritableAtom<T, [SetStateAction<T>], void>);
  };

  const useAtomValueContext = () => {
    return useAtomValue(useSafeContext());
  };

  return {
    Provider,
    Consumer: UseAtomContext.Consumer,
    useAtom: useAtomContext,
    useSetAtom: useSetAtomContext,
    useAtomValue: useAtomValueContext,
  };
};
