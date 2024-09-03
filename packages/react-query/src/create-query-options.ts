import {
  DefaultError,
  QueryKey,
  UndefinedInitialDataOptions,
  queryOptions as _queryOptions,
} from "@tanstack/react-query";

export const queryOptions = _queryOptions;

export const createQueryOptions =
  <TQueryFnData = unknown, TError = DefaultError, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(
    originalOptions: UndefinedInitialDataOptions<TQueryFnData, TError, TData, TQueryKey>,
  ) =>
  (options?: UndefinedInitialDataOptions<TQueryFnData, TError, TData, TQueryKey>) =>
    queryOptions({ ...originalOptions, ...options });
