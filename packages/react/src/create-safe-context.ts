import { createContext, useContext as useReactContext } from "react";

export const createSafeContext = <T extends object>(initialValue: T | null) => {
  const Context = createContext<T | null>(initialValue);
  const useContext = () => {
    const value = useReactContext(Context);
    if (!value) {
      throw new Error("should provide context");
    }
    return value;
  };

  const Provider = Object.assign(Context.Provider, { Consumer: Context.Consumer });

  return [Provider, useContext] as const;
};
