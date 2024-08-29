const noop = () => {};

type CallbackFunctionType = (...args: any[]) => any;

export const batchRequestsOf = <F extends CallbackFunctionType>(callback: F) => {
  const promiseByKey = new Map<string, Promise<ReturnType<F>>>();
  return ((...args: Parameters<F>) => {
    const key = JSON.stringify(args);
    if (promiseByKey.has(key)) {
      return promiseByKey.get(key)!;
    }
    const promise = callback(...args);
    promise.then(() => {
      promiseByKey.delete(key);
    }, noop);
    promiseByKey.set(key, promise);
    return promise;
  }) as F;
};
