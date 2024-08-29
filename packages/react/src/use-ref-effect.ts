import { type DependencyList, useCallback, useRef } from "react";
import { usePreservedCallback } from "./use-preserved-callback";

const noop = () => {};

export type EffectRef<E extends HTMLElement = HTMLElement> = (element: E | null) => void;

export type CleanupCallback = () => void;
// biome-ignore lint/suspicious/noConfusingVoidType: <explanation>
export type RefCallback<E extends HTMLElement = HTMLElement> = (element: E) => CleanupCallback | void;

export function useRefEffect<E extends HTMLElement = HTMLElement>(
  callback: RefCallback<E>,
  deps: DependencyList,
): EffectRef<E> {
  const preservedCallback = usePreservedCallback(callback);
  const disposeRef = useRef<CleanupCallback>(noop);

  const effect = useCallback(
    (element: E | null) => {
      disposeRef.current();
      disposeRef.current = noop;

      if (element != null) {
        const cleanup = callback(element);

        if (typeof cleanup === "function") {
          disposeRef.current = cleanup;
        }
      }
    },
    [preservedCallback, ...deps],
  );

  return effect;
}
