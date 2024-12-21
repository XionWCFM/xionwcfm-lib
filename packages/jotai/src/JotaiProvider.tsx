import { WritableAtom, useAtomValue, useSetAtom } from "jotai";
import { useAtom } from "jotai";
import { ReactNode, createContext, useContext } from "react";

const AtomContext = createContext<WritableAtom<any, any[], any> | null>(null);

const useInternalAtomContext = () => {
  const value = useContext(AtomContext);
  if (!value) {
    throw new Error("AtomContext not found");
  }
  return value;
};

export type SetAtom<Args extends unknown[], Result> = (...args: Args) => Result;

export type InferWritableAtom<TAtom extends WritableAtom<any, any[], any>> = TAtom extends WritableAtom<
  infer Value,
  infer Args,
  infer Result
>
  ? WritableAtom<Value, Args, Result>
  : never;

export type ExtractAtom<TAtom extends WritableAtom<any, any[], any>> = {
  Value: Awaited<TAtom extends WritableAtom<infer Value, infer Args, infer Result> ? Value : never>;
  Args: TAtom extends WritableAtom<infer Value, infer Args, infer Result> ? Args : never;
  Result: TAtom extends WritableAtom<infer Value, infer Args, infer Result> ? Result : never;
};

export const AtomProvider = <Value, Args extends unknown[], Result>(props: {
  atom: WritableAtom<Value, Args, Result>;
  children?: ReactNode;
}) => {
  const { atom, children } = props;
  return <AtomContext.Provider value={atom}>{children}</AtomContext.Provider>;
};

export const useAtomContext = <TAtom extends WritableAtom<any, any[], any>>() => {
  type Generics = ExtractAtom<TAtom>;
  const atom = useInternalAtomContext();
  return useAtom(atom) as [Awaited<Generics["Value"]>, SetAtom<Generics["Args"], Generics["Result"]>];
};

export const useAtomValueContext = <TAtom extends WritableAtom<any, any[], any>>() => {
  type Generics = ExtractAtom<TAtom>;
  const atom = useInternalAtomContext();
  return useAtomValue(atom) as Generics["Value"];
};

export const useSetAtomContext = <TAtom extends WritableAtom<any, any[], any>>() => {
  type Generics = ExtractAtom<TAtom>;
  const atom = useInternalAtomContext();
  return useSetAtom(atom) as SetAtom<Generics["Args"], Generics["Result"]>;
};
