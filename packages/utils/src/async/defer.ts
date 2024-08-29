import { delay } from "./delay";

type CallbackFunctionType = (...args: any[]) => any;

export const defer = <T extends CallbackFunctionType>(fn: T, ms: number) => {
  return async (...args: Parameters<T>) => {
    const [awaitedValue] = await Promise.allSettled([fn(...args), delay(ms)]);
    if (awaitedValue.status === "rejected") {
      throw awaitedValue.reason;
    }
    return awaitedValue.value as Awaited<ReturnType<T>>;
  };
};
