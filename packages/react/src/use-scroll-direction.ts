import { type Dispatch, type RefObject, type SetStateAction, useEffect, useRef, useState } from "react";

const THRESHOLD = 30;
const TOP_BOUND = 20;
const THROTTLE_LIMIT = 100;

export const useScrollDirection = () => {
  const scrollYPos = useRef(0);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
  useEffect(() => {
    const handleScroll = () => {
      const newY = window.scrollY;
      console.log(scrollDirection);
      if (newY < TOP_BOUND) {
        setScrollDirection("up");
      } else if (Math.abs(newY - scrollYPos.current) >= THRESHOLD) {
        setScrollDirection(scrollYPos.current > newY ? "up" : "down");
      }
      scrollYPos.current = window.scrollY;
    };

    const throttleHandleScroll = throttle(handleScroll, THROTTLE_LIMIT);

    window.addEventListener("scroll", throttleHandleScroll);
    return () => window.removeEventListener("scroll", throttleHandleScroll);
  }, [scrollDirection]);

  return scrollDirection;
};

export function useElementScrollDirection<T extends HTMLElement = HTMLDivElement>(body?: {
  externalRef?: RefObject<T>;
  scrollDirection?: "up" | "down";
  setScrollDirection?: Dispatch<SetStateAction<"up" | "down">>;
}) {
  const internalRef = useRef<T>(null);
  const ref = body?.externalRef || internalRef;
  const scrollYPos = useRef(0);
  const [internalScrollDirection, internalSetScrollDirection] = useState<"up" | "down">("down");
  const scrollDirection = body?.scrollDirection || internalScrollDirection;
  const setScrollDirection = body?.setScrollDirection || internalSetScrollDirection;

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const newY = ref.current.scrollTop;
      if (newY < TOP_BOUND) {
        setScrollDirection("up");
      } else if (Math.abs(newY - scrollYPos.current) >= THRESHOLD) {
        setScrollDirection(scrollYPos.current > newY ? "up" : "down");
      }
      scrollYPos.current = newY;
    };

    const throttleHandleScroll = throttle(handleScroll, THROTTLE_LIMIT);

    const element = ref.current;
    element?.addEventListener("scroll", throttleHandleScroll);
    return () => element?.removeEventListener("scroll", throttleHandleScroll);
  }, [ref, setScrollDirection]);

  return { ref, scrollDirection };
}
function throttle<T extends unknown[]>(callback: (...params: T) => void, limit = 300) {
  let waiting = false;
  return (...params: T) => {
    if (!waiting) {
      waiting = true;
      setTimeout(() => {
        callback(...params);
        waiting = false;
      }, limit);
    }
  };
}
