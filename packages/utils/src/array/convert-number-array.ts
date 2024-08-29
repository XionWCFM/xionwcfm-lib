type Option = "toString" | "toNumber";
type ArrType = string[] | number[] | (string | number)[];

export function convertNumberArray<T extends Option>(
  arr: ArrType,
  option: T,
): T extends "toString" ? string[] : number[] {
  type TReturn = T extends "toString" ? string[] : number[];
  if (option === "toString") {
    const strList = arr.map((item) => item.toString());
    return strList as TReturn;
  }
  if (option === "toNumber") {
    return arr.map((item) => Number(item)) as TReturn;
  }

  throw new Error('Invalid option. Use "toString" or "toNumber".');
}
