import { useCallback } from "react";
import { useDraft } from "./use-draft";

export function useToggleState(defaultValue = false): readonly [boolean, () => void] {
  const [bool, setBool] = useDraft(defaultValue);

  const toggle = useCallback(() => {
    setBool((prevBool) => !prevBool);
  }, []);

  return [bool, toggle] as const;
}
