"use client";

import { Mutation, MutationState, UseMutationOptions, useMutationState } from "@tanstack/react-query";
import { ReactNode } from "react";

const isUndefined = (value: unknown): value is undefined => typeof value === "undefined";
// biome-ignore lint/complexity/noBannedTypes: <explanation>
const isFunction = (value: unknown): value is Function => typeof value === "function";

type MutationBoundaryProps<TData, TError, TVariables = void, TContext = unknown> = {
  children?: ReactNode;
  caseBy?: {
    success?: ((props: MutationState<TData, TError, TVariables, TContext>) => ReactNode) | ReactNode;
    pending?: ((props: MutationState<TData, TError, TVariables, TContext>) => ReactNode) | ReactNode;
    error?: ((props: MutationState<TData, TError, TVariables, TContext>) => ReactNode) | ReactNode;
  };
  filters?: {
    exact?: boolean;
    predicate?: (mutation: Mutation<any, any, any>) => boolean;
  };
} & UseMutationOptions<TData, TError, TVariables, TContext>;

export const MutationBoundary = <TData, TError, TVariables = void, TContext = unknown>(
  props: MutationBoundaryProps<TData, TError, TVariables, TContext>,
) => {
  const { children, caseBy, filters, mutationKey } = props;
  const exact = typeof filters?.exact === "undefined" ? true : filters?.exact;

  const mutations = useMutationState({
    filters: { mutationKey, exact, predicate: filters?.predicate },
  }) as MutationState<TData, TError, TVariables, TContext>[];

  const currentMutation = mutations[0];

  const isSuccess = currentMutation?.status === "success";
  const isError = currentMutation?.status === "error";
  const isPending = currentMutation?.status === "pending";

  if (isPending) {
    if (isUndefined(caseBy?.pending)) {
      return children;
    }
    if (isFunction(caseBy?.pending)) {
      return caseBy?.pending(currentMutation);
    }
    return caseBy?.pending;
  }

  if (isSuccess) {
    if (isUndefined(caseBy?.success)) {
      return children;
    }
    if (isFunction(caseBy?.success)) {
      return caseBy?.success(currentMutation);
    }
    return caseBy?.success;
  }

  if (isError) {
    if (isUndefined(caseBy?.error)) {
      return children;
    }
    if (isFunction(caseBy?.error)) {
      return caseBy?.error(currentMutation);
    }
    return caseBy?.error;
  }

  return children;
};
