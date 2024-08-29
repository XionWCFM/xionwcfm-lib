import { timeout } from "./timout";

export const withTimeout = async <T>(run: () => Promise<T>, ms: number): Promise<T> => {
  return Promise.race([run(), timeout(ms) as T]);
};
