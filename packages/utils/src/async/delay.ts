export const delay = (milliseconds: number) => {
  return new Promise((res) => setTimeout(res, milliseconds));
};
