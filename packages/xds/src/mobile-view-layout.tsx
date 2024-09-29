import { PropsWithChildren } from "react";
import { cn } from "./external-utils/cn";

export const MobileViewLayout = (props: PropsWithChildren<{ className?: string }>) => {
  const { children, className } = props;

  return (
    <div className={cn(" min-h-screen w-full flex bg-gray-50 justify-center ", className)}>
      <div className=" min-h-screen w-screen max-w-[450px] bg-white">{children}</div>
    </div>
  );
};
