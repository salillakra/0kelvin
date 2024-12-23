import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
const SvgOvercast = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    viewBox="0 0 32 32"
    fill="none"
    {...props}
  >
    <Path
      fill="url(#Overcast_svg__a)"
      fillRule="evenodd"
      d="M11.532 8.056Q12.063 8 12.608 8c4.861 0 8.958 3.39 10.213 8.014q.15-.01.303-.013h-.158V16h1.594a3.5 3.5 0 1 0-1.838-6.515 5.5 5.5 0 0 0-.243-1.606 5.761 5.761 0 0 0-10.947.177m15.645 9.25C28.887 18.576 30 20.653 30 23c0 3.866-3.022 7-6.75 7q-.126 0-.25-.005V30H12.767v-.001l-.159.001C6.75 30 2 25.075 2 19c0-4.906 3.097-9.061 7.374-10.48A7.76 7.76 0 0 1 24.29 7.005Q24.395 7 24.5 7a5.5 5.5 0 0 1 2.677 10.306M23 28H12.608C7.922 28 4 24.04 4 19s3.922-9 8.608-9c3.976 0 7.401 2.85 8.349 6.791l.003-.001q.203.822.25 1.695A4.54 4.54 0 0 1 23.25 18c2.555 0 4.75 2.17 4.75 5 0 2.81-2.164 4.97-4.697 5z"
      clipRule="evenodd"
    />
    <Defs>
      <LinearGradient
        id="Overcast_svg__a"
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
export default SvgOvercast;
