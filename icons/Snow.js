import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
const SvgSnow = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <Path
      fill="url(#Snow_svg__a)"
      fillRule="evenodd"
      d="m13.994 16.001-5.113 2.991-4.053-1.86-.832 1.83 2.766 1.27-1.522.89.99 1.737 1.522-.89-.298 3.061 1.98.186.437-4.486 5.116-2.992v6.015l-3.62 2.627L12.542 28l2.445-1.775V28h2v-1.776l2.445 1.775 1.175-1.619-3.62-2.627V17.75l5.127 3 .436 4.486 1.981-.185-.298-3.062 1.522.89.99-1.738-1.521-.89 2.766-1.27-.832-1.83-4.053 1.86-5.15-3.01 5.134-3.003 4.08 1.872.831-1.83-2.792-1.282 1.54-.9-.991-1.738-1.51.883.295-3.032-1.98-.185-.434 4.457-5.141 3.007V8.268l3.643-2.645-1.175-1.618-2.468 1.791V4h-2v1.762l-2.422-1.757-1.175 1.618 3.597 2.61v6.032l-5.1-2.983-.44-4.515-1.98.185.3 3.09-1.538-.9-.99 1.738 1.509.883-2.74 1.257.833 1.83 4.026-1.848z"
      clipRule="evenodd"
    />
    <Defs>
      <LinearGradient
        id="Snow_svg__a"
        x1={15.998}
        x2={15.998}
        y1={4}
        y2={28}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#B2D4F7" />
        <Stop offset={1} stopColor="#D9E2F3" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SvgSnow;
