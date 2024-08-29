import { type ChangeEventHandler, useCallback, useState } from "react";

export function useInputState(initialValue = "", transformValue: (value: string) => string = echo) {
  const [value, setValue] = useState(initialValue);

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
