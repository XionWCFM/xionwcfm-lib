import { atom } from "jotai";
import { Atom, WritableAtom, useAtom, useAtomValue, useSetAtom, useStore } from "jotai";

export const createUseSetAtom = <Value, Args extends unknown[], Result>(
  atom: WritableAtom<Value, Args, Result>,
  options?: Parameters<typeof useStore>[0],
) => {
  return () => useSetAtom(atom, options);
};

export const createUseAtom = <Value>(atom: Atom<Value>, options?: Parameters<typeof useStore>[0]) => {
  return () => useAtom(atom, options);
};

export const createUseAtomValue = <Value>(atom: Atom<Value>, options?: Parameters<typeof useStore>[0]) => {
  return () => useAtomValue(atom, options);
};
