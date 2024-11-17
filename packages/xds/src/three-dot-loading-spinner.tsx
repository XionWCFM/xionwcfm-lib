export const ThreeDotLoadingSpinner = (props: { color?: string }) => {
  const { color = "#dcdcdc" } = props;
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 20" preserveAspectRatio="xMidYMid" width="80" height="20">
      <g>
        <g transform="translate(10 10)">
          <circle fill={color} r="6" cy="0" cx="0" transform="scale(0.017946720123291016)">
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-0.3333333333333333s"
              calcMode="spline"
              keySplines="0.3 0 0.7 1;0.3 0 0.7 1"
              values="0;1;0"
              keyTimes="0;0.5;1"
              dur="1s"
              repeatCount="indefinite"
            />
          </circle>
        </g>
        <g transform="translate(40 10)">
          <circle fill={color} r="6" cy="0" cx="0" transform="scale(0.3678668141365051)">
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-0.16666666666666666s"
              calcMode="spline"
              keySplines="0.3 0 0.7 1;0.3 0 0.7 1"
              values="0;1;0"
              keyTimes="0;0.5;1"
              dur="1s"
              repeatCount="indefinite"
            />
          </circle>
        </g>
        <g transform="translate(70 10)">
          <circle fill={color} r="6" cy="0" cx="0" transform="scale(0.8215078115463257)">
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="0s"
              calcMode="spline"
              keySplines="0.3 0 0.7 1;0.3 0 0.7 1"
              values="0;1;0"
              keyTimes="0;0.5;1"
              dur="1s"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </g>
    </svg>
  );
};
