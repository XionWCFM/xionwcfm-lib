import { DefaultError, QueryKey, UseQueryOptions, useQuery } from "@tanstack/react-query";
import { useCallback, useEffect, useState } from "react";

export const usePollingQuery = <
  TQueryFnData = unknown,
  TError = DefaultError,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(
  options: UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
  pollingOptions?: {
    interval?: number;
    errorRetries?: number;
    pollRetries?: number;
    timeout?: number;
    shouldRetry?: (value: Awaited<TData>) => boolean;
  },
) => {
  const [pollCount, setPollCount] = useState(0);
  const [isPolling, setIsPolling] = useState(true);
  const [shouldRetry, setShouldRetry] = useState(true);

  const data = useQuery({
    ...options,
    queryFn: async () => {
      setPollCount((prev) => prev + 1);
      //@ts-ignore
      return options.queryFn();
    },
    refetchInterval:
      isPolling && shouldRetry && pollCount < (pollingOptions?.pollRetries ?? 10)
        ? pollingOptions?.interval ?? 1000
        : false,
    enabled: shouldRetry && pollCount < (pollingOptions?.pollRetries ?? 10),
  });

  useEffect(() => {
    if (data.data !== undefined) {
      //@ts-ignore
      const result = pollingOptions?.shouldRetry?.(data.data);
      if (result === true) {
        setShouldRetry(false);
      }
    }
  }, [data]);

  const startPolling = useCallback(() => {
    setIsPolling(true);
  }, []);

  const stopPolling = useCallback(() => {
    setIsPolling(false);
  }, []);

  const resetPollCount = useCallback(() => {
    setPollCount(0);
  }, []);

  return {
    ...data,
    startPolling,
    stopPolling,
    resetPollCount,
  };
};
