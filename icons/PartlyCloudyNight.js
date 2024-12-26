import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
const SvgPartlyCloudyNight = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    viewBox="0 0 32 32"
    fill="none"
    {...props}
  >
    <Path
      fill="url(#PartlyCloudy_night_svg__a)"
      fillRule="evenodd"
      d="M27.315 17.354a5.1 5.1 0 0 0-1.83-1.039 6.96 6.96 0 0 0 2.448-4.357 7 7 0 0 1-.412.167c-.815.297-1.69.43-2.573.383h-.018a6.43 6.43 0 0 1-4.154-1.832l-.008-.008a6.17 6.17 0 0 1-1.831-4.108 6.1 6.1 0 0 1 .385-2.414c-2.547.512-4.577 2.326-5.37 4.665a10.8 10.8 0 0 0-2.02-.25C13.02 4.777 16.577 2 20.796 2c.977 0 1.918.149 2.8.424a4.33 4.33 0 0 0-1.968 1.622l-.016-.002a4.17 4.17 0 0 0 .586 5.23l.008.007a4.4 4.4 0 0 0 2.852 1.256h.019a4.4 4.4 0 0 0 1.882-.318 4.4 4.4 0 0 0 1.075-.626l.001.001a4.24 4.24 0 0 0 1.343-1.856A8.8 8.8 0 0 1 30 11c0 2.48-1.026 4.726-2.686 6.354"
      clipRule="evenodd"
    />
    <Path
      fill="url(#PartlyCloudy_night_svg__b)"
      fillRule="evenodd"
      d="M12.5 28H23c2.675 0 5-2.3 5-5.333 0-3.035-2.325-5.334-5-5.334-.73 0-1.435.172-2.073.483a9.4 9.4 0 0 0-.469-1.984l.003-.001C19.239 12.387 16.086 10 12.5 10 7.892 10 4 13.94 4 19s3.892 9 8.5 9M23 30c3.866 0 7-3.283 7-7.333s-3.134-7.334-7-7.334a7 7 0 0 0-.589.026C20.977 11.073 17.081 8 12.5 8 6.701 8 2 12.925 2 19s4.701 11 10.5 11H23"
      clipRule="evenodd"
    />
    <Defs>
      <LinearGradient
        id="PartlyCloudy_night_svg__a"
        x1={20.966}
        x2={20.966}
        y1={2}
        y2={17.354}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#F5BD52" />
        <Stop offset={1} stopColor="#F5DA79" />
      </LinearGradient>
      <LinearGradient
        id="PartlyCloudy_night_svg__b"
        x1={16}
        x2={16}
        y1={8}
        y2={30}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#B2D4F7" />
        <Stop offset={1} stopColor="#D9E2F3" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SvgPartlyCloudyNight;
