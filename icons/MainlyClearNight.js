import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
const SvgMainlyClearNight = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    viewBox="0 0 32 32"
    fill="none"
    {...props}
  >
    <Path
      fill="url(#MainlyClear_night_svg__a)"
      fillRule="evenodd"
      d="M28.112 11.59a5.96 5.96 0 0 1-4.001 1.719 5.97 5.97 0 0 1-4.157-1.5 5.836 5.836 0 0 1-.67-8.044 5.95 5.95 0 0 1 1.827-1.47A11.6 11.6 0 0 0 18.502 2C12.152 2 7.004 7.099 7.004 13.388c0 1.385.25 2.713.707 3.94a6.5 6.5 0 0 1 1.803-.901 9.3 9.3 0 0 1-.51-3.04c0-4.555 3.293-8.376 7.68-9.215a7.8 7.8 0 0 0-.693 3.857 7.84 7.84 0 0 0 2.617 5.267 8 8 0 0 0 5.569 2.008 8 8 0 0 0 3.787-1.093c-.364 4.135-3.446 7.52-7.492 8.363.423.529.713 1.167.819 1.865C26.293 23.204 30 18.725 30 13.388c0-1.296-.22-2.54-.622-3.701a5.9 5.9 0 0 1-1.268 1.903"
      clipRule="evenodd"
    />
    <Path
      fill="url(#MainlyClear_night_svg__b)"
      fillRule="evenodd"
      d="M9.503 27.99h.02v.001h3.467v.002h.008v-.002h3.776l.017.002h.211V28h.003a3.001 3.001 0 1 0-2-5.239q.004-.1.004-.2c0-.67-.122-1.31-.345-1.903l-.005.003a5.5 5.5 0 0 0-5.156-3.532C6.445 17.13 4 19.58 4 22.56s2.445 5.43 5.503 5.43m7.226 2.003q.137.007.276.007a5.001 5.001 0 1 0-.45-9.982 7.5 7.5 0 0 0-7.052-4.889C5.359 15.13 2 18.456 2 22.56s3.359 7.43 7.503 7.43h.006v.003z"
      clipRule="evenodd"
    />
    <Defs>
      <LinearGradient
        id="MainlyClear_night_svg__a"
        x1={18.502}
        x2={18.502}
        y1={2}
        y2={24.439}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#F5BD52" />
        <Stop offset={1} stopColor="#F5DA79" />
      </LinearGradient>
      <LinearGradient
        id="MainlyClear_night_svg__b"
        x1={12.003}
        x2={12.003}
        y1={15.129}
        y2={30}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#B2D4F7" />
        <Stop offset={1} stopColor="#D9E2F3" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SvgMainlyClearNight;
