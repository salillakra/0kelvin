import { View, Text, FlatList } from "react-native";
import React from "react";
import {
  type DailyWeather,
  useDailyWeatherStore,
} from "@/store/useDailyWeather";
import { useWeatherCode } from "@/hooks/useWeatherCode";

const ForecastElement = (props: DailyWeather) => {
  const { getWeatherIcon } = useWeatherCode();
  return (
    <View className="flex my-1 rounded-2xl bg-[rgba(225,225,225,0.65)] flex-row justify-between items-center px-4 py-1">
      <View className="flex flex-col items-start">
        <Text className="font-Roboto-Regular text-gray-700 text-lg">
          {new Date(props.time).toLocaleDateString("en-IN", {
            weekday: "short",
            day: "numeric",
            month: "short",
          })}
        </Text>
      </View>
      <View className="flex flex-row items-center w-1/2 justify-between">
        <View className="p-2 rounded-full bg-green-50">
          {getWeatherIcon({
            WeatherCode: props.weatherCode,
            IsDay: 1,
            height: 30,
            width: 30,
          })}
        </View>
        <View className="flex flex-row">
          <Text className="font-Roboto-Regular text-lg text-gray-700 ">
            {parseInt(props.maxTemperature.toString())}°C
          </Text>
          <Text className="font-Roboto-Regular text-gray-700 text-lg">
            {" "}
            <Text className="text-slate-400">/</Text>{" "}
            {parseInt(props.minTemperature.toString())}°C
          </Text>
        </View>
      </View>
    </View>
  );
};

const Forecast = () => {
  const DailyData = useDailyWeatherStore((state) => state.data);
  console.log(DailyData);
  return (
    <View>
      <View className="pl-5 mt-10">
        <Text className="font-Roboto-Bold text-2xl">Forecast</Text>
        <Text className="font-Roboto-Thin text-xs">Next 7 days</Text>
      </View>
      <View className="flex flex-col px-4 mt-2">
        <FlatList
          data={DailyData}
          renderItem={({ item, index }) => {
            return <ForecastElement key={index} {...item} />;
          }}
        />
      </View>
    </View>
  );
};

export default Forecast;
