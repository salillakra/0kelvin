import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
const SvgClearSkyDay = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    viewBox="0 0 32 32"
    fill="none"
    {...props}
  >
    <Path
      fill="url(#ClearSky_day_svg__a)"
      fillRule="evenodd"
      d="M15 5V2h2v3zm5.634.974 1.5-2.598 1.732 1-1.5 2.598zM16 23a7 7 0 1 0 0-14 7 7 0 0 0 0 14m0 2a9 9 0 1 0 0-18 9 9 0 0 0 0 18m11-10h3v2h-3zm.624-6.866-2.598 1.5 1 1.732 2.598-1.5zM8.134 4.376l1.5 2.598 1.732-1-1.5-2.598zm-2.16 6.99-2.598-1.5 1-1.732 2.598 1.5zM15 27v3h2v-3zM5 15H2v2h3zm-1.624 7.134 2.598-1.5 1 1.732-2.598 1.5zm6.258 2.892-1.5 2.598 1.732 1 1.5-2.598zm12.5 3.598-1.5-2.598 1.732-1 1.5 2.598zm2.892-6.258 2.598 1.5 1-1.732-2.598-1.5z"
      clipRule="evenodd"
    />
    <Defs>
      <LinearGradient
        id="ClearSky_day_svg__a"
        x1={16}
        x2={16}
        y1={2}
        y2={30}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#EFC977" />
        <Stop offset={1} stopColor="#E07256" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SvgClearSkyDay;
