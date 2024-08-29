export function once<F extends () => any>(func: F): F {
  let called = false;
  let cache: ReturnType<F> | undefined;

  return (() => {
    if (called) {
      return cache;
    }

    const result = func();

    called = true;
    cache = result;

    return result;
  }) as F;
}
