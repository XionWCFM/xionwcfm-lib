import { useCallback } from "react";
import { usePreservedCallback } from "./use-preserved-callback";

export const useCallbackOnce = <T extends (...args: any[]) => void>(callback: T, deps?: any[]) => {
  const onceCallback = usePreservedCallback(callback);
  return useCallback(once(onceCallback), deps ?? []);
};

function once<F extends (() => any) | ((...args: any[]) => void)>(func: F): F {
  let called = false;
  let cache: ReturnType<F>;

  return ((...args: Parameters<F>): ReturnType<F> => {
    if (!called) {
      called = true;
      cache = func(...args);
    }

    return cache;
  }) as F;
}
