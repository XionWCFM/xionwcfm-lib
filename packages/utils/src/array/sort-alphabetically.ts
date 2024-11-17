export function sortAlphabetically<T>(items: string[]): string[];

export function sortAlphabetically<T>(items: T[], options: { mapper: (item: T) => string }): T[];

export function sortAlphabetically<T>(items: T[], options?: { mapper: (item: T) => string }): T[] {
  if (typeof items[0] === "string") {
    return (items as string[]).slice().sort((a, b) => a.localeCompare(b)) as T[];
  }
  if (options?.mapper) {
    // 객체 배열 처리
    return (items as T[]).slice().sort((a, b) => options.mapper(a).localeCompare(options.mapper(b)));
  }

  throw new Error("Invalid arguments: Either pass a string array or provide a mapper for objects.");
}
