import * as React from "react";
import type { IconProps } from "./types";

export const FillWarningIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
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
  },
);

export default FillWarningIcon;
