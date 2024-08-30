import React, { useEffect, useState } from "react";

export default function useThrottleValue<T>(value: T, delay: number) {
  const [throttleValue, setThrottleValue] = useState<T>(value);
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
