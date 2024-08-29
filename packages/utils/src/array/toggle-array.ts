export const toggleArray = <T>(newValue: T, list: T[]) => {
  const findIndex = list.findIndex((item) => item === newValue);
  if (findIndex === -1) {
    return list.concat(newValue);
  }
  return list.filter((area) => area !== newValue);
};
