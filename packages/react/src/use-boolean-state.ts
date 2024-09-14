import { useCallback } from "react";
import { useDraft } from "./use-draft";

export const useBooleanState = (defaultValue = false): readonly [boolean, () => void, () => void, () => void] => {
  const [bool, setBool] = useDraft(defaultValue);

  const setTrue = useCallback(() => {
    setBool(true);
  }, []);

  const setFalse = useCallback(() => {
    setBool(false);
  }, []);

  const toggle = useCallback(() => {
    setBool((b) => !b);
  }, []);

  return [bool, setTrue, setFalse, toggle] as const;
};
