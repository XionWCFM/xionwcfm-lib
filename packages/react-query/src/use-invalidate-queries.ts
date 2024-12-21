import { QueryClient, useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";

export const useInvalidateQueries = () => {
  const internalQueryClient = useQueryClient();

  type Param = NonNullable<Parameters<typeof internalQueryClient.invalidateQueries>[0]>;
  type InvalidateProps = Param | Param["queryKey"] | undefined;

  const invalidateQueries = useCallback(
    (query?: InvalidateProps, injectQueryClient?: QueryClient) => {
      const queryClient = injectQueryClient || internalQueryClient;
      if (!Array.isArray(query)) {
        return queryClient.invalidateQueries(query as Param | undefined);
      }
      return queryClient.invalidateQueries({ queryKey: query });
    },
    [internalQueryClient],
  );

  return invalidateQueries;
};
