import { useMemo } from "react";
import { usePreservedCallback } from "./use-preserved-callback";

export const useThrottle = <T extends (...arg: any[]) => any>(fn: T, throttleMs: number) => {
  const preservedCallback = usePreservedCallback(fn);
  const throttledFunction = useMemo(() => throttle(preservedCallback, throttleMs), [preservedCallback, throttleMs]);
  return throttledFunction;
};

function throttle<F extends (...args: any[]) => void>(func: F, throttleMs: number): F & { reset: () => void } {
  let lastCallTime: number | null;
  let timeoutId: NodeJS.Timeout | null = null;

  const throttledFunction = (...args: Parameters<F>) => {
    const now = Date.now();

    if (lastCallTime == null || now - lastCallTime >= throttleMs) {
      lastCallTime = now;
      func(...args);
    }
  };

  throttledFunction.reset = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
    lastCallTime = null;
  };

  return throttledFunction as F & { reset: () => void };
}
