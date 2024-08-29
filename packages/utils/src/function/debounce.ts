export type DebounceOptions = {
  leading?: boolean;
  trailing?: boolean;
};
/**
 * 지정된 시간 동안 호출이 없을 때에만 콜백 함수를 실행하는 디바운스 함수입니다.
 *
 * @param {(...params: Args) => T} callback - 디바운스 함수로 감싸질 콜백 함수
 * @param {DebounceOptions} options - 디바운스 옵션 객체
 * @param {DebounceOptions['leading']} leading - 기본값은 true
 * @param {DebounceOptions['trailing']} trailing - 기본값은 true
 * @returns {(...params: Args) => T | null} - 디바운스된 함수
 */
export function debounce<T, Args extends unknown[]>(
  callback: (...params: Args) => T,
  ms: number,
  options?: DebounceOptions,
): (...params: Args) => T | null {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;
  let lastArgs: Args | null = null;
  let lastResult: T | undefined;
  let leadingCalled = false;

  return (...args: Args) => {
    const { leading = false, trailing = true } = options ?? {};

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    if (leading && !leadingCalled) {
      leadingCalled = true;
      lastResult = callback(...args);
    } else {
      lastArgs = args;
    }

    timeoutId = setTimeout(() => {
      if (trailing && lastArgs) {
        lastResult = callback(...lastArgs);
        lastArgs = null;
      }
      leadingCalled = false;
      timeoutId = null;
    }, ms);

    return lastResult ?? null;
  };
}
