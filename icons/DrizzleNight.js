import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
const SvgDrizzleNight = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    viewBox="0 0 32 32"
    fill="none"
    {...props}
  >
    <Path
      fill="url(#Drizzle_night_svg__a)"
      fillRule="evenodd"
      d="M29.818 8.767c.213-.797.236-1.6.096-2.36a2.812 2.812 0 0 1-4.423.99 2.16 2.16 0 0 1-.803-1.168l-.008-.031a2.812 2.812 0 0 1 2.207-3.7 5.37 5.37 0 0 0-7.285 2.986 10 10 0 0 1 1.656 1.871 3.39 3.39 0 0 1 1.437-2.742 4.214 4.214 0 0 0 4.21 5.253 3.37 3.37 0 0 1-4.351.17q.147.474.246.966a6 6 0 0 1 3.949 1.313 5.36 5.36 0 0 0 3.069-3.548"
      clipRule="evenodd"
    />
    <Path
      fill="url(#Drizzle_night_svg__b)"
      fillRule="evenodd"
      d="M30 17c0 3.238-2.12 5.963-5 6.762v-2.115c1.731-.725 3-2.495 3-4.647 0-2.83-2.195-5-4.75-5a4.54 4.54 0 0 0-2.04.486 9.3 9.3 0 0 0-.25-1.696l-.003.001C20.009 6.85 16.584 4 12.608 4 7.922 4 4 7.96 4 13c0 3.23 1.61 6.015 4 7.6v2.31C4.45 21.133 2 17.364 2 13 2 6.925 6.75 2 12.608 2c4.861 0 8.958 3.39 10.213 8.014q.213-.014.428-.014C26.978 10 30 13.134 30 17m-19.999 5.41c0-.48.152-1 .36-1.486C10.804 19.886 11.5 19 11.5 19s.664.918 1.109 1.925c.224.507.392 1.037.392 1.484 0 .879-.671 1.591-1.5 1.591-.828 0-1.5-.712-1.5-1.59m5.36-1.486c-.208.487-.36 1.007-.36 1.485 0 .879.672 1.591 1.5 1.591.829 0 1.5-.712 1.5-1.59 0-.448-.168-.978-.392-1.485C17.164 19.917 16.5 19 16.5 19s-.696.886-1.14 1.924m-2.485 6.485c0-.478.152-.998.36-1.485.443-1.038 1.138-1.924 1.138-1.924s.665.918 1.11 1.925c.223.507.391 1.037.392 1.484 0 .879-.671 1.591-1.5 1.591-.828 0-1.5-.712-1.5-1.59m7.485-6.485c-.208.487-.36 1.007-.36 1.485 0 .879.672 1.591 1.5 1.591.829 0 1.5-.712 1.5-1.59 0-.448-.168-.978-.392-1.485C22.164 19.917 21.5 19 21.5 19s-.696.886-1.14 1.924m-2.47 6.485c0-.478.152-.998.36-1.485.443-1.038 1.138-1.924 1.138-1.924s.665.918 1.11 1.925c.223.507.391 1.037.391 1.484 0 .879-.67 1.591-1.5 1.591-.828 0-1.5-.712-1.5-1.59"
      clipRule="evenodd"
    />
    <Defs>
      <LinearGradient
        id="Drizzle_night_svg__a"
        x1={24.802}
        x2={24.802}
        y1={2}
        y2={12.315}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#F5BD52" />
        <Stop offset={1} stopColor="#F5DA79" />
      </LinearGradient>
      <LinearGradient
        id="Drizzle_night_svg__b"
        x1={16}
        x2={16}
        y1={2}
        y2={29}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#95B6F6" />
        <Stop offset={1} stopColor="#5193DE" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SvgDrizzleNight;
