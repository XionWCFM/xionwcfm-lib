export const objectEntries = <Type extends Record<PropertyKey, unknown>>(
  obj: Type,
): [keyof Type, Type[keyof Type]][] => {
  return Object.entries(obj) as [keyof Type, Type[keyof Type]][];
};
