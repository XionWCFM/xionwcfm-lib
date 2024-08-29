/* eslint-disable react-hooks/exhaustive-deps */
import React, { type MutableRefObject, useEffect } from "react";

interface UseIntersectionObserver {
  root?: MutableRefObject<Element | null> | null;
  target: MutableRefObject<Element | null>;
  // biome-ignore lint/complexity/noBannedTypes: <explanation>
  onIntersect: Function;
  // biome-ignore lint/complexity/noBannedTypes: <explanation>
  offIntersect?: Function;
  threshold?: number;
  rootMargin?: string;
  enabled?: unknown;
}

/**
 * Intersection Observer를 사용하는 React Hook입니다.
 *
 * @param {Object} options - 옵션 객체
 * @param {MutableRefObject<Element | null> | null} options.root - 관찰 대상 요소의 루트 요소입니다. 기본값은 null입니다.
 * @param {MutableRefObject<Element | null>} options.target - 관찰 대상 요소의 Ref 객체입니다.
 * @param {Function} options.onIntersect - 관찰 대상 요소가 교차하는 경우 호출되는 콜백 함수입니다.
 * @param {Function} [options.offIntersect] - 관찰 대상 요소가 교차하지 않는 경우 호출되는 콜백 함수입니다. 기본값은 빈 함수입니다.
 * @param {number} [options.threshold] - 교차 영역의 비율을 나타내는 숫자입니다. 기본값은 0.5입니다.
 * @param {string} [options.rootMargin] - 루트 요소의 마진을 나타내는 문자열입니다. 기본값은 "0px"입니다.
 * @param {unknown} [options.enabled] - Hook의 활성화 여부를 나타내는 값입니다. 기본값은 true입니다.
 *
 * @example
 * const targetRef = useRef(null);
 *
 * const onIntersect = () => {
 *   // 관찰 대상 요소가 교차하는 경우 실행되는 로직
 * };
 *
 * const offIntersect = () => {
 *   // 관찰 대상 요소가 교차하지 않는 경우 실행되는 로직
 * };
 *
 * useIntersectionObserver({
 *   root: null,
 *   target: targetRef,
 *   onIntersect,
 *   offIntersect,
 *   threshold: 0.5,
 *   rootMargin: "0px",
 *   enabled: true,
 * });
 */
const useIntersectionObserver = ({
  root = null,
  target,
  onIntersect,
  offIntersect = () => {},
  threshold = 0.5,
  rootMargin = "0px",
  enabled = true,
}: UseIntersectionObserver) => {
  const memoizedOnIntersect = React.useCallback(onIntersect, []);
  useEffect(() => {
    if (!enabled) return;

    let observer: IntersectionObserver;
    // biome-ignore lint/complexity/useOptionalChain: <explanation>
    const domElement = target && target.current;

    if (domElement) {
      observer = new IntersectionObserver(
        (entries) =>
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              offIntersect();
            }

            if (entry.isIntersecting) {
              onIntersect();
            }
          }),
        {
          threshold,
          rootMargin,
          // biome-ignore lint/complexity/useOptionalChain: <explanation>
          root: root && root.current,
        },
      );
      observer.observe(domElement);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, [enabled, root, memoizedOnIntersect, rootMargin, target, threshold]);
};

export default useIntersectionObserver;
