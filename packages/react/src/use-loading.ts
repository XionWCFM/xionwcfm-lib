import { useState } from "react";

/**
 * 로딩 상태를 관리하는 커스텀 훅입니다.
 * @returns 로딩 상태와 비동기 작업을 수행하는 함수를 포함한 객체를 반환합니다.
 */
export const useLoading = () => {
  const [isLoading, setLoading] = useState(false);

  /**
   * 비동기 작업을 수행하는 함수입니다.
   * @param promise 비동기 작업을 수행하는 프로미스 객체입니다.
   * @returns 프로미스 객체의 결과를 반환합니다.
   */
  const wait = async <T>(promise: Promise<T>) => {
    setLoading(true);
    const result = await promise;
    setLoading(false);
    return result;
  };

  return [isLoading, wait] as const;
};
