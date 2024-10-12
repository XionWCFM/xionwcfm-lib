import { Children, ComponentPropsWithoutRef, PropsWithChildren, ReactElement } from "react";
import { cn } from "./cn";

type LayoutProps = Omit<ComponentPropsWithoutRef<"nav">, "children"> & { children: ReactElement | ReactElement[] };

export const Layout = ({ children, className, ...props }: LayoutProps) => {
  //@ts-expect-error
  const left = Children.toArray(children).find((child) => child?.type?.displayName === "TopNavigationLeft");
  //@ts-expect-error
  const center = Children.toArray(children).find((child) => child?.type?.displayName === "TopNavigationCenter");
  //@ts-expect-error
  const right = Children.toArray(children).find((child) => child?.type?.displayName === "TopNavigationRight");
  return (
    <nav className={cn(" px-16 h-44 flex gap-16 justify-between items-center", className)} {...props}>
      {left}
      {center}
      {right}
    </nav>
  );
};

export const Left = ({ children }: PropsWithChildren) => {
  return children;
};

Left.displayName = "TopNavigationLeft";

export const Right = ({ children }: PropsWithChildren) => {
  return children;
};

Right.displayName = "TopNavigationRight";

export const Center = ({ children }: PropsWithChildren) => {
  return children;
};

Center.displayName = "TopNavigationCenter";
