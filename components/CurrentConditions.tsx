import React from "react";
import { Feather } from "@expo/vector-icons";

interface ConditionCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: any;
}

const ConditionCard: React.FC<ConditionCardProps> = ({
  title,
  value,
  subtitle,
  icon,
}) => (
  <div className="bg-[rgba(225,225,225,0.65)] rounded-xl p-4 shadow-sm">
    <h3 className="text-gray-600 text-lg font-medium mb-2">{title}</h3>
    <div className="flex items-center gap-2 mb-2">
      <Feather name={icon} size={24} className="text-gray-500" />
      <span className="text-2xl font-semibold text-gray-900">{value}</span>
    </div>
    <p className="text-gray-500 text-sm">{subtitle}</p>
  </div>
);

interface WeatherConditionsProps {
  wind_speed: number;
  wind_direction: string;
  relative_humidity: number;
  Temp: number;
  uvIndex: number;
  precipitation: string;
}

const UVIndexComment = (uvIndex: number) => {
  if (uvIndex < 3) {
    return "Low";
  } else if (uvIndex < 6) {
    return "Moderate";
  } else if (uvIndex < 8) {
    return "High";
  } else if (uvIndex < 11) {
    return "Very High";
  } else {
    return "Extreme";
  }
};

/**
 * Converts a degree value to a compass direction.
 *
 * @param degree - The degree value to convert.
 * @returns The compass direction corresponding to the degree value.
 *
 * Directions:
 * - N: North
 * - NE: North-East
 * - E: East
 * - SE: South-East
 * - S: South
 * - SW: South-West
 * - W: West
 * - NW: North-West
 */
const DegreeToDirection = (degree: number) => {
  if (degree > 337.5) return "North";
  if (degree > 292.5) return "North-West";
  if (degree > 247.5) return "West";
  if (degree > 202.5) return "South-West";
  if (degree > 157.5) return "South";
  if (degree > 122.5) return "South-West";
  if (degree > 67.5) return "East";
  if (degree > 22.5) {
    return "North-East";
  }
  return "North";
};

const precipitationComment = (precipitation: number) => {
  if (precipitation < 2) {
    return "Light";
  } else if (precipitation < 10) {
    return "Moderate";
  } else {
    return "Heavy";
  }
};

const WeatherConditions: React.FC<WeatherConditionsProps> = (
  props: WeatherConditionsProps
) => {
  return (
    <div className="p-6 bg-gray-50 mb-20">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">
        Current conditions
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <ConditionCard
          title="Wind"
          value={`${props.wind_speed} km/h`}
          subtitle={DegreeToDirection(parseInt(props.wind_direction))}
          icon="wind"
        />
        <ConditionCard
          title="Humidity"
          value={`${props.relative_humidity || '5'} %`}
          subtitle={`Dew point ${props.Temp}` + "°C"}
          icon="droplet"
        />
        <ConditionCard
          title="UV index"
          value={props.uvIndex.toString()}
          subtitle={UVIndexComment(props.uvIndex).toString()}
          icon="sun"
        />
        <ConditionCard
          title="Precepitation"
          value={props.precipitation + " mm"}
          subtitle={precipitationComment(parseInt(props.precipitation))}
          icon="cloud-rain"
        />
      </div>
    </div>
  );
};

export default WeatherConditions;
