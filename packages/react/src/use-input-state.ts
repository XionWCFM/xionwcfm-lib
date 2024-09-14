import { type ChangeEventHandler, useCallback } from "react";
import { useDraft } from "./use-draft";

export function useInputState(initialValue = "", transformValue: (value: string) => string = echo) {
  const [value, setValue] = useDraft(initialValue);

  const handleValueChange: ChangeEventHandler<HTMLElement & { value: string }> = useCallback(
    ({ target: { value } }) => {
      setValue(transformValue(value));
    },
    [transformValue],
  );

  return [value, handleValueChange] as const;
}

function echo(v: string) {
  return v;
}
