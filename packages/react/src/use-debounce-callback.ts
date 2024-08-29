import { useCallback, useEffect, useRef } from "react";
import { useCallbackRef } from "./use-callback-ref";

export function useDebounceCallback<T extends (...args: any[]) => any>(callback: T, delay: number) {
  const handleCallback = useCallbackRef(callback);
  const debounceTimerRef = useRef(0);
  useEffect(() => () => window.clearTimeout(debounceTimerRef.current), []);

  return useCallback(
    (...args: Parameters<T>) => {
      window.clearTimeout(debounceTimerRef.current);
      debounceTimerRef.current = window.setTimeout(() => handleCallback(...args), delay);
    },
    [handleCallback, delay],
  );
}
