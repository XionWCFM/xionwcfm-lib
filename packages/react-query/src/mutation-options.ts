import { UseMutationOptions } from "@tanstack/react-query";

export const mutationOptions = <TData, TError, TVariables = void, TContext = unknown>(
  options: UseMutationOptions<TData, TError, TVariables, TContext>,
): UseMutationOptions<TData, TError, TVariables, TContext> => options;
