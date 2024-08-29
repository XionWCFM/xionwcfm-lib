import { delay } from "./delay";

export const timeout = async (ms: number): Promise<never> => {
  await delay(ms);
  throw new Error("timeout error");
};
