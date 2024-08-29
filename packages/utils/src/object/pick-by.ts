export function pickBy<T extends Record<string, any>>(
  obj: T,
  shouldPick: (value: T[keyof T], key: keyof T) => boolean,
): Partial<T> {
  const result: Partial<T> = {};

  for (const [key, value] of Object.entries(obj)) {
    if (!shouldPick(value, key)) {
      continue;
    }

    (result as any)[key] = value;
  }

  return result;
}
