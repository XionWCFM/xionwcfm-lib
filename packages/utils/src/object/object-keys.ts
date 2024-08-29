export type ObjectKeys<T extends Record<PropertyKey, unknown>> = `${Exclude<keyof T, symbol>}`;

export const objectKeys = <GenericObject extends Record<PropertyKey, unknown>>(obj: GenericObject) => {
  return Array.from(Object.keys(obj) as Array<keyof GenericObject>);
};
