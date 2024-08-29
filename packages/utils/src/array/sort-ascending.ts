/**
 * 오름차순으로 정렬합니다 1, 2, 3, 4, 5
 * @param list - The array of numbers to be sorted.
 * @returns The sorted array in ascending order.
 */
export const sortAscending = (list: number[]): number[] => {
  return list.sort((a, b) => a - b);
};
