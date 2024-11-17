import { Atom, PrimitiveAtom, WritableAtom, atom, useAtom, useAtomValue, useSetAtom } from "jotai";
import { FunctionComponent, PropsWithChildren, createContext, useContext, useMemo } from "react";
import { usePreservedCallback } from "./jotai-use-preserved-callback";

type AtomOptionsType<AtomeValue extends ComprehensiveAtomType> = PropsWithChildren<{
  value?: AtomeValue;
}>;

type DefaultWritableAtomType = WritableAtom<any, any[], any> | PrimitiveAtom<any>;
type ComprehensiveAtomType = Atom<any> | DefaultWritableAtomType;

type ReadonlyAtomResultType<TAtom extends ComprehensiveAtomType> = {
  Provider: FunctionComponent<AtomOptionsType<TAtom>>;
  with: <Props extends Record<string, any>>(
    Component: FunctionComponent<Props>,
    options?: AtomOptionsType<TAtom>,
  ) => (props: Props) => JSX.Element;
  useAtomValue: () => TAtom extends Atom<infer AtomValue> ? Awaited<AtomValue> : never;
  useAtomInstance: () => TAtom;
  useDerivedAtom: <ReturnValue>(
    callback: (value: TAtom extends Atom<infer AtomValue> ? Awaited<AtomValue> : never) => ReturnValue,
  ) => Atom<ReturnValue>;
};

type WritableAtomResultType<TAtom extends DefaultWritableAtomType> = ReadonlyAtomResultType<TAtom> & {
  useAtom: () => TAtom extends WritableAtom<infer V, infer Args, infer Result>
    ? [Awaited<V>, (...args: Args) => Result]
    : never;
  useSetAtom: () => TAtom extends WritableAtom<any, infer Args, infer Result> ? (...args: Args) => Result : never;
};

type CreateSafeAtomReturnType<TAtom extends ComprehensiveAtomType> = TAtom extends DefaultWritableAtomType
  ? WritableAtomResultType<TAtom>
  : ReadonlyAtomResultType<TAtom>;

const ERROR_MESSAGE_PROVIDER_NOT_PROVIDED =
  "@xionwcfm/jotai: Context not provided. Make sure to wrap your component with the appropriate Provider from createSafeAtom.";

/**
 * Creates a context for safely accessing and using Jotai Atoms, along with associated provider and hooks for working
 * with both readable and writable Atoms. It provides hooks to read the value of the Atom, update it (if writable),
 * and ensures that the Atom is used within the correct context.
 *
 * @template TAtom - A type extending `ComprehensiveAtomType`, which can be either a `WritableAtom`, `PrimitiveAtom`, or a generic `Atom`.
 *
 * @param {TAtom} initialValue - The initial atom value to be provided and used throughout the context. It can be a readable or writable atom.
 *
 * @returns {CreateSafeAtomReturnType<TAtom>} An object containing several utilities based on the atom type.
 *
 * ### Return values:
 *
 * - **Provider**:
 *   A React `FunctionComponent` that wraps your component tree and provides the atom's value via context.
 *   It optionally accepts a `value` prop to override the initial atom value.
 *   @param {TAtom} [options.value] - Optional. The atom value that will override the initial value when provided.
 *   @returns {JSX.Element} The React component tree wrapped with the atom provider.
 *
 * - **with**:
 *   A higher-order component (HOC) that wraps a given component with the `Provider`. This allows the component to access
 *   the provided atom without needing to manually add the `Provider` around it.
 *   @param {FunctionComponent<Props>} Component - The React component that will be wrapped by the `Provider`.
 *   @param {AtomOptionsType<TAtom>} [options] - Optional. The atom value and children that will be passed to the provider.
 *   @returns {FunctionComponent<Props>} A new component that wraps the given component with the `Provider` component.
 *
 * - **useAtomValue**:
 *   A custom hook that retrieves the current value of the atom from the context.
 *   If the atom is readable, this hook returns the awaited value of the atom.
 *   @returns {Awaited<ReturnType<TAtom>>} The current value of the atom if readable.
 *   @throws {Error} Will throw an error if the hook is called outside of the `Provider`.
 *
 * If the provided atom is a writable atom (`WritableAtom` or `PrimitiveAtom`), the following additional utilities are included:
 *
 * - **useAtom**:
 *   A custom hook that provides both the current value of the writable atom and a setter function to update its state.
 *   It returns a tuple where the first element is the current atom value, and the second is a function to update it.
 *   @returns {[Awaited<TAtom>, (...args: Parameters<TAtom['write']>) => ReturnType<TAtom['write']>]} A tuple with the atom's value and the setter function.
 *   @throws {Error} Will throw an error if the hook is called outside of the `Provider`.
 *
 * - **useSetAtom**:
 *   A custom hook that only provides the setter function for updating the atom's state, without reading the current value.
 *   This is useful when you only need to update the atom without accessing its value.
 *   @returns {(...args: Parameters<TAtom['write']>) => ReturnType<TAtom['write']>} A function to update the writable atom's value.
 *   @throws {Error} Will throw an error if the hook is called outside of the `Provider`.
 *
 * @throws {Error} Will throw an error if any hook is used outside of its corresponding `Provider`.
 *
 * @example
 * ```tsx
 * const countAtom = atom(0);
 * const { Provider, useAtomValue, useSetAtom } = createSafeAtom(countAtom);
 *
 * const Counter: React.FC = () => {
 *   const count = useAtomValue();
 *   const setCount = useSetAtom();
 *
 *   return (
 *     <div>
 *       <p>{count}</p>
 *       <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
 *     </div>
 *   );
 * };
 *
 * const App: React.FC = () => (
 *   <Provider>
 *     <Counter />
 *   </Provider>
 * );
 * ```
 */
export function createSafeAtom<TAtom extends ComprehensiveAtomType>(
  initialValue: TAtom,
): CreateSafeAtomReturnType<TAtom> {
  type AtomValue = TAtom extends Atom<infer AtomValue> ? Awaited<AtomValue> : never;

  const Context = createContext<TAtom | null>(null);

  const useSafeContext = (): TAtom => {
    const value = useContext(Context);
    if (!value) {
      throw new Error(ERROR_MESSAGE_PROVIDER_NOT_PROVIDED);
    }
    return value;
  };

  const Provider: FunctionComponent<AtomOptionsType<TAtom>> = ({ children, value }) => {
    return <Context.Provider value={value ?? initialValue}>{children}</Context.Provider>;
  };

  const ProviderWith =
    <T extends Record<string, any>>(
      Component: FunctionComponent<T>,
      options?: AtomOptionsType<TAtom>,
    ): ((props: T) => JSX.Element) =>
    (props: T) => {
      return (
        <Provider value={options?.value ?? initialValue}>
          <Component {...props} />
        </Provider>
      );
    };

  const useContextAtomValue = () => {
    return useAtomValue(useSafeContext());
  };

  const useAtomInstance = useSafeContext;

  const useDerivedAtom = <ReturnValue,>(callback: (value: Awaited<AtomValue>) => ReturnValue) => {
    const atomInstance = useAtomInstance();
    const preservedCallback = usePreservedCallback(callback);
    return useMemo(() => atom((get) => preservedCallback(get(atomInstance))), [atomInstance, preservedCallback]);
  };

  const result: ReadonlyAtomResultType<TAtom> = {
    Provider,
    with: ProviderWith,
    useAtomValue: useContextAtomValue,
    useAtomInstance,
    useDerivedAtom,
  };

  if ("write" in initialValue || "init" in initialValue) {
    const useContextAtom = () => {
      return useAtom(useSafeContext() as DefaultWritableAtomType);
    };

    const useSetContextAtom = () => {
      return useSetAtom(useSafeContext() as DefaultWritableAtomType);
    };

    return {
      ...result,
      useAtom: useContextAtom,
      useSetAtom: useSetContextAtom,
      useAtomInstance,
      useDerivedAtom,
    } as CreateSafeAtomReturnType<TAtom>;
  }

  return result as CreateSafeAtomReturnType<TAtom>;
}
