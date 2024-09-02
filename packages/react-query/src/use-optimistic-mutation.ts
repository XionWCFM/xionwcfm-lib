import { UseMutationOptions, useMutation, useQueryClient } from "@tanstack/react-query";

interface OptimisticOptions<TQueryData, TVariables> {
  queryKey: string[];
  updateFn: (oldData: TQueryData, newItem: TVariables) => TQueryData;
  strategy?: "onSuccess" | "onSettled" | "never";
}

export function useOptimisticMutation<TData, TError, TVariables, TContext>(
  mutationOptions: UseMutationOptions<TData, TError, TVariables>,
  optimisticOptions: OptimisticOptions<TContext, TVariables>,
) {
  const queryClient = useQueryClient();
  const { queryKey, updateFn, strategy = "onSettled" } = optimisticOptions;

  return useMutation<TData, TError, TVariables, TContext>({
    ...mutationOptions,
    onMutate: async (newItem) => {
      await queryClient.cancelQueries({ queryKey });

      const previousData = queryClient.getQueryData<TContext>(queryKey);

      queryClient.setQueryData<TContext>(queryKey, (old) => (old ? updateFn(old, newItem) : old));

      if (mutationOptions.onMutate) {
        await mutationOptions.onMutate(newItem);
      }

      return previousData;
    },
    onError: (err, newItem, context) => {
      if (context) {
        queryClient.setQueryData(queryKey, context);
      }

      if (mutationOptions.onError) {
        mutationOptions.onError(err, newItem, context);
      }
    },
    onSuccess: (...args) => {
      if (strategy === "onSuccess") {
        queryClient.invalidateQueries({ queryKey });
      }
      mutationOptions?.onSuccess?.(...args);
    },

    onSettled: (...args) => {
      if (strategy === "onSettled") {
        queryClient.invalidateQueries({ queryKey });
      }

      mutationOptions?.onSettled?.(...args);
    },
  });
}
