import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
const SvgMainlyClearDay = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <Path
      fill="url(#MainlyClear_day_svg__a)"
      fillRule="evenodd"
      d="M15 2v3h2V2zm5.612 19.266a7 7 0 1 0-11.6-4.843 7.5 7.5 0 0 0-1.901.995 9 9 0 1 1 15.286 4.913 5 5 0 0 0-1.785-1.065M27 15h3v2h-3zm.624-6.866-2.598 1.5 1 1.732 2.598-1.5zm-6.99-2.16 1.5-2.598 1.732 1-1.5 2.598zm-12.5-1.598 1.5 2.598 1.732-1-1.5-2.598zm-2.16 6.99-2.598-1.5 1-1.732 2.598 1.5zM5 15H2v2h3zm22.624 8.866-2.598-1.5 1-1.732 2.598 1.5z"
      clipRule="evenodd"
    />
    <Path
      fill="url(#MainlyClear_day_svg__b)"
      fillRule="evenodd"
      d="M11.5 28H19a3 3 0 1 0-2.002-5.234q.006-.132.006-.266c0-.675-.122-1.322-.344-1.92A5 5 0 1 1 19 30h-7.5a7.5 7.5 0 1 1 7.08-9.983c-.691.058-1.341.256-1.924.565A5.502 5.502 0 0 0 6 22.5a5.5 5.5 0 0 0 5.5 5.5"
      clipRule="evenodd"
    />
    <Defs>
      <LinearGradient
        id="MainlyClear_day_svg__a"
        x1={16}
        x2={16}
        y1={2}
        y2={23.866}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#EFC977" />
        <Stop offset={1} stopColor="#E07256" />
      </LinearGradient>
      <LinearGradient
        id="MainlyClear_day_svg__b"
        x1={14}
        x2={14}
        y1={15}
        y2={30}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#B2D4F7" />
        <Stop offset={1} stopColor="#D9E2F3" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SvgMainlyClearDay;
