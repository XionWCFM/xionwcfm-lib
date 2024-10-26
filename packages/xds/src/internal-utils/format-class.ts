import { formatResponsiveEnum } from "./responsive-enum";
import { ResponsiveEnumProps } from "./type";

export const formatClass = <T, Prefix extends string>(
  item: ResponsiveEnumProps<T> | undefined,
  id?: Prefix,
): string => {
  if (!item) {
    return "";
  }

  const format = formatResponsiveEnum(item);
  const prefix = id ? `${id}-` : "";
  return [
    format.initial ? `${prefix}${format.initial}` : false,
    format.xs ? `xs:${prefix}${format.xs}` : false,
    format.md ? `md:${prefix}${format.md}` : false,
    format.xl ? `xl:${prefix}${format.xl}` : false,
  ]
    .filter(Boolean)
    .join(" ");
};
