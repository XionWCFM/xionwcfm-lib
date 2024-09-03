import { ResponsiveEnum, ResponsiveEnumProps } from "./type";

export const isRespoinsiveEnum = <T>(prop: unknown): prop is ResponsiveEnum<T> => typeof prop === "object";

export const formatResponsiveEnum = <T>(item: ResponsiveEnumProps<T> | undefined): ResponsiveEnum<T> => {
  if (isRespoinsiveEnum<T>(item)) {
    return item;
  }
  return { initial: item };
};
