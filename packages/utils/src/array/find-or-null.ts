type RefType = { id: number; name: string };
export const findOrNull = <T extends RefType[]>(id: number, list: RefType[]): RefType | null => {
  const findItem = list.find((item) => item.id === id);
  return findItem ?? null;
};
