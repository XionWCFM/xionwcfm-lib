import React, { useEffect } from "react";
import { useDraft } from "./use-draft";

export default function useThrottleValue<T>(value: T, delay: number) {
  const [throttleValue, setThrottleValue] = useDraft<T>(value);
  const throttling = React.useRef(false);
  useEffect(() => {
    if (throttling.current === false) {
      setThrottleValue(value);
      throttling.current = true;
      setTimeout(() => {
        if (throttling?.current) throttling.current = false;
      }, delay);
    }
  }, [value, delay]);
  return throttleValue;
}
