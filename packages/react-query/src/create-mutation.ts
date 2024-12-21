import { UseMutationOptions, useMutation } from "@tanstack/react-query";

export const createMutation = <TData, TError, TVariables = void, TContext = unknown>(
  originalOptions: UseMutationOptions<TData, TError, TVariables, TContext>,
) => {
  return (options?: Omit<UseMutationOptions<TData, TError, TVariables, TContext>, "mutationFn">) =>
    useMutation({ ...originalOptions, ...options });
};
