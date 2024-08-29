import type { ComponentPropsWithRef, ComponentPropsWithoutRef, ElementType } from "react";

export type AsProp<C extends ElementType> = {
  as?: C;
};

export type KeyWithAs<C extends ElementType, Props> = keyof (AsProp<C> & Props);

export type PolymorphicRef<C extends ElementType> = ComponentPropsWithRef<C>["ref"];

export type PolymorphicComponentProps<C extends ElementType, Props = object> = (Props & AsProp<C>) &
  Omit<ComponentPropsWithoutRef<C>, KeyWithAs<C, Props>>;

export type PolymorphicComponentPropsWithRef<C extends ElementType, Props = object> = Props & {
  ref?: PolymorphicRef<C>;
};
