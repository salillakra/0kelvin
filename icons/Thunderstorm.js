import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
const SvgThunderstorm = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    viewBox="0 0 32 32"
    fill="none"
    {...props}
  >
    <Path
      fill="url(#Thunderstorm_svg__a)"
      fillRule="evenodd"
      d="m13.425 16 1.131 1.013-2.015 4.06H16L12.275 28l-1.102-1.07 2.167-4.03H10z"
      clipRule="evenodd"
    />
    <Path
      fill="url(#Thunderstorm_svg__b)"
      fillRule="evenodd"
      d="m19.995 16 1.32 1.013-2.35 4.06H23L18.654 28l-1.286-1.07 2.53-4.03H16z"
      clipRule="evenodd"
    />
    <Path
      fill="url(#Thunderstorm_svg__c)"
      fillRule="evenodd"
      d="M10 23.79c-4.598-1.205-8-5.523-8-10.665 0-6.075 4.75-11 10.608-11 4.861 0 8.958 3.39 10.213 8.014q.213-.014.428-.014c3.729 0 6.751 3.134 6.751 7s-3.022 7-6.75 7q-.126 0-.25-.005v-1.995h.303c2.533-.03 4.697-2.19 4.697-5 0-2.83-2.195-5-4.75-5a4.54 4.54 0 0 0-2.04.486 9.3 9.3 0 0 0-.25-1.696l-.003.001c-.948-3.941-4.373-6.791-8.349-6.791-4.686 0-8.608 3.96-8.608 9 0 4.066 2.553 7.43 6 8.577z"
      clipRule="evenodd"
    />
    <Path
      fill="url(#Thunderstorm_svg__d)"
      d="m11.732 29 1.732 1.063v2.125l-1.732 1.062L10 32.188v-2.126z"
    />
    <Path
      fill="url(#Thunderstorm_svg__e)"
      d="M17.268 29 19 30.063v2.125l-1.732 1.062-1.732-1.062v-2.126z"
    />
    <Path
      fill="url(#Thunderstorm_svg__f)"
      d="m22.732 29 1.732 1.063v2.125l-1.732 1.062L21 32.188v-2.126z"
    />
    <Defs>
      <LinearGradient
        id="Thunderstorm_svg__a"
        x1={13}
        x2={13}
        y1={16}
        y2={28}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#F5BD52" />
        <Stop offset={1} stopColor="#F5DA79" />
      </LinearGradient>
      <LinearGradient
        id="Thunderstorm_svg__b"
        x1={19.5}
        x2={19.5}
        y1={16}
        y2={28}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#F5BD52" />
        <Stop offset={1} stopColor="#F5DA79" />
      </LinearGradient>
      <LinearGradient
        id="Thunderstorm_svg__c"
        x1={16}
        x2={16}
        y1={2.125}
        y2={24.125}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#95B6F6" />
        <Stop offset={1} stopColor="#5193DE" />
      </LinearGradient>
      <LinearGradient
        id="Thunderstorm_svg__d"
        x1={14.5}
        x2={14.5}
        y1={29}
        y2={33.25}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#CED3EA" />
        <Stop offset={1} stopColor="#7E83A9" />
      </LinearGradient>
      <LinearGradient
        id="Thunderstorm_svg__e"
        x1={14.5}
        x2={14.5}
        y1={29}
        y2={33.25}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#CED3EA" />
        <Stop offset={1} stopColor="#7E83A9" />
      </LinearGradient>
      <LinearGradient
        id="Thunderstorm_svg__f"
        x1={22.732}
        x2={22.732}
        y1={29}
        y2={33.25}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#CED3EA" />
        <Stop offset={1} stopColor="#7E83A9" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SvgThunderstorm;
