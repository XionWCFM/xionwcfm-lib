import { useCallback } from "react";
import useDebounceValue from "./use-debounce-value";
import { useDraft } from "./use-draft";

type UseDebouncedInputValueProps = {
  delay?: number;
};

export const useDebouncedInputValue = (initialState?: string, options?: UseDebouncedInputValueProps) => {
  const { delay = 0 } = options ?? {};
  const [value, setValue] = useDraft(initialState ?? "");
  const debouncedValue = useDebounceValue(value, delay);
  const reset = useCallback(() => setValue(""), []);
  const onChange = useCallback((newValue: string) => setValue(newValue), []);
  return { value, debouncedValue, reset, onChange };
};
