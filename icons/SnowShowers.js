import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
const SvgSnowShowers = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    viewBox="0 0 32 32"
    fill="none"
    {...props}
  >
    <Path
      fill="url(#SnowShowers_svg__a)"
      fillRule="evenodd"
      d="M2 13c0 3.94 1.998 7.396 5 9.339v-2.512C5.172 18.187 4 15.755 4 13c0-5.04 3.922-9 8.608-9 3.976 0 7.401 2.85 8.349 6.791l.003-.001q.203.822.25 1.696A4.54 4.54 0 0 1 23.25 12c2.555 0 4.75 2.17 4.75 5 0 2.152-1.269 3.922-3 4.647v2.115c2.88-.8 5-3.524 5-6.762 0-3.866-3.022-7-6.75-7q-.217 0-.429.014C21.566 5.39 17.469 2 12.608 2 6.75 2 2 6.925 2 13m15.256 11.52L18 24l-.744-.52.158-.894-.894.158L16 22l-.52.744-.894-.158.157.894L14 24l.743.52-.157.894.894-.158L16 26l.52-.744.894.158zM14.828 20l-.743.52.158.894-.894-.158-.52.744-.521-.744-.894.158.158-.894-.744-.52.744-.52-.158-.894.894.158.52-.744.52.744.895-.158-.158.894zm-.743 8.52.743-.52-.743-.52.158-.894-.894.158-.52-.744-.521.744-.894-.158.158.894-.744.52.744.52-.158.894.894-.158.52.744.52-.744.895.158zM24 24l-.744.52.158.894-.894-.158L22 26l-.52-.744-.894.158.158-.894L20 24l.744-.52-.158-.894.894.158L22 22l.52.744.894-.158-.158.894zm-3.915-3.48.743-.52-.743-.52.158-.894-.894.158-.52-.744-.521.744-.894-.158.158.894-.744.52.744.52-.158.894.894-.158.52.744.52-.744.895.158zm.743 7.48-.743.52.158.894-.894-.158-.52.744-.521-.744-.894.158.158-.894-.744-.52.744-.52-.158-.894.894.158.52-.744.52.744.895-.158-.158.894zm-9.743-3.48.743-.52-.743-.52.158-.894-.894.158-.52-.744-.521.744-.894-.158.158.894-.744.52.744.52-.158.894.894-.158.52.744.52-.744.895.158z"
      clipRule="evenodd"
    />
    <Defs>
      <LinearGradient
        id="SnowShowers_svg__a"
        x1={16}
        x2={16}
        y1={2}
        y2={30}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#B2D4F7" />
        <Stop offset={1} stopColor="#D9E2F3" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SvgSnowShowers;
