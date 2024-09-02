import { UseMutationOptions } from "@tanstack/react-query";

export const mutationOptions = <TData, TError, TVariables, TContext>(
  options: UseMutationOptions<TData, TError, TVariables, TContext>,
): UseMutationOptions<TData, TError, TVariables, TContext> => options;
