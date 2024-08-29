export const objectValues = <Type extends Record<PropertyKey, unknown>>(obj: Type) =>
  Object.values(obj) as Array<Type[keyof Type]>;
