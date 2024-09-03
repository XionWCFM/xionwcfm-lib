"use client";

import { ComponentProps, SVGAttributes, forwardRef } from "react";
import { Toaster as SonnerToaster, toast } from "sonner";

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

interface IconProps extends SVGAttributes<SVGElement> {
  children?: never;
  color?: string;
}
const FillCheckIcon = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", ...props }, forwardedRef) => {
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
    <svg
      ref={forwardedRef}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM11.7682 15.6402L16.7682 9.64018L15.2318 8.35982L10.9328 13.5186L8.70711 11.2929L7.29289 12.7071L10.2929 15.7071L11.0672 16.4814L11.7682 15.6402Z"
        fill="#2850E0"
      />
    </svg>
  );
});

const FillInfoIcon = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", ...props }, forwardedRef) => {
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      ref={forwardedRef}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8ZM13 17V11H11V17H13Z"
        fill="#EECE21"
      />
    </svg>
  );
});

const FillWarningIcon = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", ...props }, forwardedRef) => {
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      ref={forwardedRef}
    >
      <g clipPath="url(#clip0_74_303)">
        <path d="M1 21H23L12 2L1 21ZM13 18H11V16H13V18ZM13 14H11V10H13V14Z" fill="#FF2A2A" />
      </g>
      <defs>
        <clipPath id="clip0_74_303">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
});
