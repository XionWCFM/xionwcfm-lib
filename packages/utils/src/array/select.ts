export const select = <T, K>(
  array: readonly T[],
  mapper: (item: T, index: number) => K,
  condition: (item: T, index: number) => boolean,
) => {
  if (!array) return [];
  return array.reduce((acc, item, index) => {
    if (!condition(item, index)) return acc;
    acc.push(mapper(item, index));
    return acc;
  }, [] as K[]);
};
