"use client";

import { ComponentProps } from "react";
import { Toaster as SonnerToaster, toast } from "sonner";

import { FillCheckIcon } from "@xionwcfm/icon/fill-check-icon";
import { FillInfoIcon } from "@xionwcfm/icon/fill-info-icon";
import { FillWarningIcon } from "@xionwcfm/icon/fill-warning-icon";
const Toaster = (props: ComponentProps<typeof SonnerToaster>) => (
  <SonnerToaster
    position={"top-center"}
    icons={{
      success: <FillCheckIcon className=" text-primary-500" />,
      warning: <FillInfoIcon />,
      error: <FillWarningIcon />,
    }}
    toastOptions={{
      classNames: {
        content: " text-neutral-500",
      },
    }}
    {...props}
  />
);

export { toast, Toaster };
