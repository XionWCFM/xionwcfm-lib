import { UseMutationOptions } from "@tanstack/react-query";
import { mutationOptions } from "./mutation-options";

export const createMutationOptions =
  <TData, TError, TVariables = void, TContext = unknown>(
    originalOptions: UseMutationOptions<TData, TError, TVariables, TContext>,
  ) =>
  (options?: UseMutationOptions<TData, TError, TVariables, TContext>) =>
    mutationOptions({ ...originalOptions, ...options });
