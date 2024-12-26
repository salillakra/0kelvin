import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
const SvgClearSkyNight = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    viewBox="0 0 32 32"
    fill="none"
    {...props}
  >
    <Path
      fill="url(#ClearSky_night_svg__a)"
      fillRule="evenodd"
      d="M27.591 19.106c.46-1.718.523-3.449.246-5.095a7.04 7.04 0 0 1-1.89 3.03v.009A7.105 7.105 0 1 1 17 6.088a7.1 7.1 0 0 1 3.406-1.251q-.63-.248-1.3-.428C12.704 2.694 6.124 6.493 4.409 12.894c-1.715 6.402 2.084 12.982 8.485 14.697 6.402 1.715 12.982-2.084 14.697-8.485m-2.545 1.16c-2.02 4.298-6.886 6.665-11.634 5.393-5.335-1.43-8.5-6.913-7.071-12.247a10 10 0 0 1 7.377-7.15q-.247.312-.466.645a9.232 9.232 0 0 0 11.794 13.36m.814-11.652L25.336 7l-.525 1.614h-1.697l1.373.998-.524 1.614 1.373-.998 1.373.998-.524-1.614 1.373-.998zM19.336 7l.524 1.614h1.698l-1.373.998.524 1.614-1.373-.998-1.373.998.524-1.614-1.373-.998h1.697zm3.524 5.614L22.336 11l-.525 1.614h-1.697l1.373.998-.524 1.614 1.373-.998 1.373.998-.524-1.614 1.373-.998z"
      clipRule="evenodd"
    />
    <Defs>
      <LinearGradient
        id="ClearSky_night_svg__a"
        x1={19.106}
        x2={12.894}
        y1={4.409}
        y2={27.591}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#F5BD52" />
        <Stop offset={1} stopColor="#F5DA79" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SvgClearSkyNight;
