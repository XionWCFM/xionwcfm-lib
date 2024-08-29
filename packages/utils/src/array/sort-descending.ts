/**
 * 내림차순으로 정렬합니다 5, 4, 3, 2, 1
 * @param list - The array of numbers to be sorted.
 * @returns The sorted array in descending order.
 */
export const sortDescending = (list: number[]): number[] => {
  return list.sort((a, b) => b - a);
};
