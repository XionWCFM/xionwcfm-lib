import { ReactNode, ComponentPropsWithoutRef, useRef, useEffect } from "react";
import { useIntersection } from "./use-intersection";
import { usePreservedCallback } from "./use-preserved-callback";

export function InView(
  props: ConstructorParameters<typeof IntersectionObserver>[1] & {
    children: ReactNode;
    onIntersectStart?: (entry: IntersectionObserverEntry) => void;
    onIntersectEnd?: (entry: IntersectionObserverEntry) => void;
    once?: boolean;
  } & Pick<ComponentPropsWithoutRef<"div">, "className" | "style">,
) {
  const { children, once = false, className, style, onIntersectStart, onIntersectEnd, ...intersectionOptions } = props;
  const startCalledRef = useRef(false);
  const endCalledRef = useRef(false);
  const { ref: intersectionRef, entry } = useIntersection<HTMLDivElement>(intersectionOptions);
  const preservedStart = usePreservedCallback(onIntersectStart ?? (() => {}));
  const preservedEnd = usePreservedCallback(onIntersectEnd ?? (() => {}));

  useEffect(() => {
    if (entry) {
      if (entry.isIntersecting) {
        if (!startCalledRef.current || !once) {
          onIntersectStart && preservedStart(entry);
          startCalledRef.current = true;
        }
      } else {
        if ((!endCalledRef.current || !once) && startCalledRef.current) {
          onIntersectEnd && preservedEnd(entry);
          endCalledRef.current = true;
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entry, preservedStart, preservedEnd, once]);

  return (
    <div className={className} style={style} ref={intersectionRef}>
      {children}
    </div>
  );
}
