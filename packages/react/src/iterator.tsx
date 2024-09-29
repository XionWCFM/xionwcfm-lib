import { ReactNode } from "react";

type IteratorProps<T> = {
  items: T[] | null | undefined | readonly T[];
  render: (item: T, index: number) => ReactNode;
  fallback?: ReactNode;
};

export const Iterator = <T,>(props: IteratorProps<T>) => {
  const { items, render, fallback } = props;
  if (isEmptyItems(items)) {
    return fallback;
  }
  return <>{items?.map((item, index) => render(item, index))}</>;
};

const isEmptyItems = (list: IteratorProps<any>["items"]) => {
  if (list === null || list === undefined) {
    return true;
  }
  if (Array.isArray(list)) {
    return list.length === 0;
  }
  return false;
};
