import { Text, View, FlatList } from "react-native";
import React from "react";
import { useHourlyWeatherStore } from "@/store/useHourlyWeather";
import { useCurrentWeatherStore } from "@/store/useCurrentWeather";
import { useWeatherCode } from "@/hooks/useWeatherCode";

const HourlyItem = (props: {
  time: string;
  weatherCode: number;
  isDay: number;
  temperature: number;
}) => {
  const { getWeatherIcon } = useWeatherCode();
  return (
    <View className="items-center bg-transparent flex my-4 gap-2 mx-1 flex-col-reverse justify-center px-3  w-20">
      <Text className="text-base font-Roboto-Regular  mb-2">
        {new Date(props.time).toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: false,
        })}
      </Text>
      <View className="bg-green-50 rounded-full p-2 mb-2">
        {getWeatherIcon({
          WeatherCode: props.weatherCode,
          IsDay: props.isDay,
          height: 30,
          width: 30,
        })}
      </View>
      <Text className="text-base font-Roboto-Regular mb-2">
        {props.temperature}
        {"°C"}
      </Text>
    </View>
  );
};

const Hourly = () => {
  const HourlyData = useHourlyWeatherStore((state) => state.hourlyWeather);
  const isDay = useCurrentWeatherStore((state) => state.CurrentWeather.isDay);
  return (
    <View className="mt-10">
      <Text className="text-xl font-Roboto-Bold mb-3 ml-4">
        Hourly Forecast
      </Text>
      <View className="flex rounded-2xl mx-4 bg-[rgba(225,225,225,0.65)] py-2 px-2 flex-row justify-between ">
        <FlatList
          horizontal
          data={HourlyData}
          renderItem={({ item, index }) => {
            return <HourlyItem key={index} isDay={isDay} {...item} />;
          }}
        />
      </View>
    </View>
  );
};

export default Hourly;
