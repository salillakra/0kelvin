import React from "react";
import { Feather } from "@expo/vector-icons";
import { Text, View } from "react-native";

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
  <View className="bg-[rgba(225,225,225,0.65)] w-44 h-44 rounded-xl p-4 ">
    <Text className="text-lg font-medium mb-2">{title}</Text>
    <View className="flex items-start gap-2 mb-2">
      <Feather name={icon} size={24} className="text-gray-500" />
      <Text className="text-2xl font-semibold text-gray-900">{value}</Text>
    </View>
    <Text className="text-gray-500 text-start text-sm">{subtitle}</Text>
  </View>
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
    <View className="p-6 mb-20">
      <Text className="text-2xl font-Roboto-Bold text-gray-900 mb-6">
        Current conditions
      </Text>
      <View className="flex flex-col gap-4 items-center justify-between">
        <View className="flex flex-row justify-between gap-4">
          <ConditionCard
            title="Max Wind"
            value={`${props.wind_speed} km/h`}
            subtitle={DegreeToDirection(parseInt(props.wind_direction))}
            icon="wind"
          />
          <ConditionCard
            title="Humidity"
            value={`${props.relative_humidity || "5"} %`}
            subtitle={`Dew point ${props.Temp.toString().slice(0, 4)}` + "°C"}
            icon="droplet"
          />
        </View>
        <View className="flex flex-row gap-4">
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
        </View>
      </View>
    </View>
  );
};

export default WeatherConditions;
