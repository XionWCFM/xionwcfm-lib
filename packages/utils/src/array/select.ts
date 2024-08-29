export const select = <T, K>(
  array: readonly T[],
  condition: (item: T, index: number) => boolean,
  mapper: (item: T, index: number) => K,
) => {
  if (!array) return [];
  return array.reduce((acc, item, index) => {
    if (!condition(item, index)) return acc;
    acc.push(mapper(item, index));
    return acc;
  }, [] as K[]);
};
