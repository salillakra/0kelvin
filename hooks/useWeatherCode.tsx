// Clear Sky (Code 0): A bright sun icon.
// Mainly Clear (Code 1): Sun with a few small clouds.
// Partly Cloudy (Code 2): Sun partially covered by clouds.
// Overcast (Code 3): Dense cloud icon covering the sky.
// Fog (Code 45, 48): A cloud with misty lines at the bottom.
// Drizzle (Codes 51-57): A cloud with light rain drops.
// Rain (Codes 61-67): A cloud with heavier rain drops or freezing rain streaks.
// Snow (Codes 71-77): A cloud with snowflakes.
// Rain Showers (Codes 80-82): A cloud with rain and small arcs for showers.
// Snow Showers (Codes 85-86): A cloud with snowflakes and arcs for movement.
// Thunderstorm (Codes 95-99): A cloud with lightning bolts and optionally hailstones.

// Code	Weather Condition
// 0	Clear sky
// 1	Mainly clear
// 2	Partly cloudy
// 3	Overcast
// 45	Fog
// 48	Depositing rime fog
// 51	Light drizzle
// 53	Moderate drizzle
// 55	Dense drizzle
// 56	Freezing, light drizzle
// 57	Freezing, dense drizzle
// 61	Slight rain
// 63	Moderate rain
// 65	Heavy rain
// 66	Freezing, light rain
// 67	Freezing, heavy rain
// 71	Slight snow fall
// 73	Moderate snow fall
// 75	Heavy snow fall
// 77	Snow grains
// 80	Slight rain showers
// 81	Moderate rain showers
// 82	Violent rain showers
// 85	Slight snow showers
// 86	Heavy snow showers
// 95	Thunderstorm
// 96	Thunderstorm with slight hail
// 99	Thunderstorm with heavy hail

import * as icons from "@/icons";

const getWeatherTitle = (weatherCode: number): string => {
  switch (weatherCode) {
    case 0:
      return "Clear Sky";
    case 1:
      return "Mainly Clear";
    case 2:
      return "Partly Cloudy";
    case 3:
      return "Overcast";
    case 45:
      return "Fog";
    case 48:
      return "Depositing rime fog";
    case 51:
      return "Light Drizzle";
    case 53:
      return "Moderate Drizzle";
    case 55:
      return "Dense Drizzle";
    case 56:
      return "Freezing, light drizzle";
    case 57:
      return "Freezing, dense drizzle";
    case 61:
      return "Slight Rain";
    case 63:
      return "Moderate Rain";
    case 65:
      return "Heavy Rain";
    case 66:
      return "Freezing, light rain";
    case 67:
      return "Freezing, heavy rain";
    case 71:
      return "Slight Snow Fall";
    case 73:
      return "Moderate Snow Fall";
    case 75:
      return "Heavy Snow Fall";
    case 77:
      return "Snow Grains";
    case 80:
      return "Slight Rain Showers";
    case 81:
      return "Moderate Rain Showers";
    case 82:
      return "Violent Rain Showers";
    case 85:
      return "Slight Snow Showers";
    case 86:
      return "Heavy Snow Showers";
    case 95:
      return "Thunderstorm";
    case 96:
      return "Thunderstorm with slight hail";
    case 99:
      return "Thunderstorm with heavy hail";
    default:
      return "Clear Sky";
  }
};

const getWeatherIcon = ({
  IsDay,
  WeatherCode,
  height,
  width,
}: {
  height: number;
  width: number;
  IsDay: number;
  WeatherCode: number;
}) => {
  if (WeatherCode === 0) {
    if (IsDay) {
      return <icons.ClearSkyDay height={height} width={width} />;
    } else {
      return <icons.ClearSkyNight height={height} width={width} />;
    }
  } else if (WeatherCode === 1) {
    if (IsDay) {
      return <icons.MainlyClearDay height={height} width={width} />;
    } else {
      return <icons.MainlyClearNight height={height} width={width} />;
    }
  } else if (WeatherCode === 2) {
    if (IsDay) {
      return <icons.PartlyCloudyDay height={height} width={width} />;
    } else {
      return <icons.PartlyCloudyNight height={height} width={width} />;
    }
  } else if (WeatherCode === 3) {
    return <icons.Overcast height={height} width={width} />;
  } else if (WeatherCode === 45 || WeatherCode === 48) {
    return <icons.Fog height={height} width={width} />;
  } else if (WeatherCode >= 51 && WeatherCode <= 57) {
    if (IsDay) {
      return <icons.DrizzleDay height={height} width={width} />;
    } else {
      return <icons.DrizzleNight height={height} width={width} />;
    }
  } else if (WeatherCode >= 61 && WeatherCode <= 67) {
    return <icons.Rain height={height} width={width} />;
  } else if (WeatherCode >= 71 && WeatherCode <= 77) {
    return <icons.Snow height={height} width={width} />;
  } else if (WeatherCode >= 80 && WeatherCode <= 82) {
    return <icons.RainShowers height={height} width={width} />;
  } else if (WeatherCode >= 85 && WeatherCode <= 86) {
    return <icons.SnowShowers height={height} width={width} />;
  } else if (WeatherCode >= 95 && WeatherCode <= 99) {
    return <icons.Thunderstorm height={height} width={width} />;
  } else {
    return <icons.ClearSkyDay height={height} width={width} />;
  }
};

export const useWeatherCode = () => {
  return { getWeatherIcon, getWeatherTitle };
};
