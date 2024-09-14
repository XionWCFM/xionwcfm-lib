import { useEffect } from "react";
import { useDraft } from "./use-draft";

/**
 * 지연된 값을 반환하는 커스텀 훅입니다.
 * @template T - 값의 타입
 * @param {T} value - 지연된 값을 설정할 값
 * @param {number} [delay=200] - 디바운스 딜레이 시간 (밀리초)
 * @returns {T} - 지연된 값
 *
 * @example
 * const debouncedValue = useDebounceValue(inputValue, 500);
 */
export default function useDebounceValue<T>(value: T, delay: number) {
  const [debouncedValue, setDebouncedValue] = useDraft<T>(value);
  useEffect(() => {
    const handler: NodeJS.Timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
