/**
 * 배열에서 중복을 제거하는 함수입니다.
 * 중복을 판단하는 기준은 콜백 함수를 통해 제공되는 문자열입니다.
 *
 * @param items 중복을 제거할 배열
 * @param callback 중복을 판단하는 콜백 함수
 * @returns 중복이 제거된 배열
 *
 * @example
 * const numbers = [1, 2, 2, 3, 4, 4, 5];
 * const uniqueNumbers = uniqBy(numbers, (item) => String(item));
 * console.log(uniqueNumbers); // [1, 2, 3, 4, 5]
 */
export const uniqBy = <T>(items: T[], callback: (item: T) => string): T[] => {
  const seen = new Map<string, T>();
  items.forEach((item) => {
    seen.set(callback(item), item);
  });
  return Array.from(seen.values());
};
